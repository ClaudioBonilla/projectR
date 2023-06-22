const employmentQueries = require("../queries/employmentQueries")

const employmentDao = {}

employmentDao.addEmployment = async(employmentData) => await employmentQueries.addEmployment(employmentData);
employmentDao.getEmployment = async(employmentData) => await employmentQueries.getEmployment(employmentData);
employmentDao.deleteEmployment = async(employmentData) => await employmentQueries.deleteEmployment(employmentData);




module.exports = employmentDao;