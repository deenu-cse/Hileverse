// Diet Chart Model
const mongoose = require('mongoose');

const dietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  morningMeal: String,
  eveningMeal: String,
  nightMeal: String,
  specialInstructions: String,
});

const DietChart = mongoose.model('DietChart', dietChartSchema);
module.exports = DietChart;
