const userQueries = require("../queries/userQueries")

const userDao = {}

userDao.addUser = async(userData) => await userQueries.addUser(userData);
userDao.loginUser =async(email) => await userQueries.getUserbyEmail(email);

module.exports = userDao;