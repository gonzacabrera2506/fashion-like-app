const mongoose = require('mongoose');
const { Schema } = mongoose;

const ROLES = ["user", "admin", "moderator"];

const RoleSchema = new Schema({
    name: {
        type: String,
    },
    versionKey: {
        type: Boolean
    }
});

module.exports = {
    RoleSchema: mongoose.model("Role", RoleSchema),
    Roles: ROLES
}