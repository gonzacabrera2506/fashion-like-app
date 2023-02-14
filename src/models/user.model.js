const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 50
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 90
    },
    password: {
        type: String,
        required: true,
        minLength: 6
},
    role: {
        type: Schema.Types.ObjectId,
        ref: 'role'
    }

});

UserSchema.methods.comparePassword = async function(password) { 
    bcrypt.compareSync(password, this.password); 
}

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

module.exports = mongoose.model('user', UserSchema);