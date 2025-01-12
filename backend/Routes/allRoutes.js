const express = require("express")
const { Foodbook, GenFoodChart } = require("../controllers/allController")
const router = express.Router()


router.post('/reservations', Foodbook);
router.post('/food-chart/:patientId', GenFoodChart);
app.use("/pantry-staff", PantryStaff);
app.use("/pantry-staffid/:id", PantryStaffId);
app.use("/meal-tasks", MealTask);
app.use("/meal-deliveries", MealDelivery);


module.exports = router