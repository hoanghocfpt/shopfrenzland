import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (pass.length < 6 ) {
                new Error('Password must be at least 6 characters');
                return false;
            }
        },
    },
},  { timestamps: true });

userSchema.pre('save', (next, ...rest) => {
    console.log(rest);
    next();
})

export const User = models?.User || model('User', userSchema);
    

