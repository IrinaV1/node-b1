import { model, Schema} from 'mongoose';

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
        required: true,
        trim: true
    },
    password: {type: String, required: true}
},
{timestamps: true},
);

userSchema.pre('save', function() {
    if(!this.name){
        this.name = this.email;
    }
});

userSchema.methods.toJson = function() {
    const user = this.toObject();
    delete user.password;
    return user;
};

const User = model('User', userSchema);

export default User;