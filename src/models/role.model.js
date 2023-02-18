const mongoose = require('mongoose');
const { Schema } = mongoose;

// eslint-disable-next-line no-unused-vars
const ROLES = ["user", "admin", "moderator"];

const RoleSchema = new Schema({
    name: {
        type: String,
    },

    versionKey: false
});

module.exports = mongoose.model("Role", RoleSchema);
