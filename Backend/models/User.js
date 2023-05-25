const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        index: true,
        validate: {
            validator: function (str) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(str); 
            },
            message: props => `${props.value} is not a valid email`   
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})

