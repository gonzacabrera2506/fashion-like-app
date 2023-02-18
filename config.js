/* eslint-disable no-undef */
require('dotenv').config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "administ";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "administ";

module.exports = { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD };
