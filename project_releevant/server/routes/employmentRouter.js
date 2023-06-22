const express = require("express");

const employmentController = require('../controllers/employmentController')

const employmentRouter = express.Router()

employmentRouter.post("/", employmentController.addEmployment)
employmentRouter.get("/", employmentController.getEmployment)
//employmentRouter.patch("/", employmentController.updateEmployment)
employmentRouter.delete("/", employmentController.deleteEmployment)


module.exports = employmentRouter
