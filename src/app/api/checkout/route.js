
var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

var getActiveProducts = async function () {
  var checkProducts = await stripe.products.list();
  var availableProducts = checkProducts.data.filter(function (product) {
    return product.active === true;
  });
  return availableProducts;
};

export async function POST(request) {
  var products = (await request.json()).products;
  var data = products;

  var activeProducts = await getActiveProducts();

  try {
    for (var i = 0; i < data.length; i++) {
      var product = data[i];
      if (product && product.name) {
        var stripeProduct = activeProducts.find(function (stripeProduct) {
          return stripeProduct.name.toLowerCase() == product.name.toLowerCase();
        });

        if (stripeProduct == undefined) {
          var prod = await stripe.products.create({
            name: product.name,
            default_price_data: {
              unit_amount: product.price * 100,
              currency: "usd",
            },
          });
        }
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  var stripeItems = [];

  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    if (product && product.name) {
      var stripeProduct = activeProducts.find(function (prod) {
        return prod.name.toLowerCase() == product.name.toLowerCase();
      });

      if (stripeProduct) {
        stripeItems.push({
          price: stripeProduct.default_price,
          quantity: product.quantity,
        });
      }
    }
  }
  console.log(stripeItems);

  var session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return { url: session.url };
}