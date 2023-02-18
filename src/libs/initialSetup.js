const User = require('../models/user.model');
const Role = require('../models/role.model');
const { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } = require('../../config');

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();
        
        //check for existing roles
        if(count > 0) return;

        //Create roles
        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save(),
        ]);
        console.log(values);
        
    } catch (error) {
        console.error(error);
    }
}

const createAdmin = async () => {
    // check for an existing admin user
    const userFound = await User.findOne({ email: ADMIN_EMAIL });   
    console.log(userFound);
    if(userFound) return;

    //get roles id
    const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

    //create a new admind user
    const newUser = await User.create({
        username: ADMIN_USERNAME,
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        roles: roles.map((role) => role._id),
    });

    console.log(`New user created: ${newUser.email}`);

};

createRoles();
createAdmin();

module.exports = { createRoles, createAdmin };
