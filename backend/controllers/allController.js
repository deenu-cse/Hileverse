const generateMealPlan = require("../middleware/FoodChartMiddleware");
const FoodChart = require("../models/FoodChartModel");
const Patient = require("../models/patientModel");

function generateId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let userId = "";
    for (let i = 0; i < 4; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return userId;
}

const Foodbook = async (req, res) => {
    console.log(req.body);
    try {
        console.log("Code is here...");

        // Extracting data from request body
        const {
            name,
            diseases,
            allergies,
            roomNumber,
            bedNumber,
            floorNumber,
            age,
            gender,
            contactInfo,
            emergencyContact,
        } = req.body;

        // Validation: Ensure required fields are provided
        if (
            !name ||
            !roomNumber ||
            !bedNumber ||
            !floorNumber ||
            !age ||
            !gender ||
            !contactInfo ||
            !emergencyContact
        ) {
            return res.status(400).json({ message: 'All required fields must be filled!' });
        }

        // Check if a user with the given email (contactInfo) already exists
        const existingPatient = await Patient.findOne({ contactInfo });

        if (existingPatient) {
            return res.status(400).json({
                message: 'A patient with this contact information already exists.',
                data: existingPatient, // Return the existing patient data if needed
            });
        }

        // Create a new Patient instance
        const newPatient = new Patient({
            name,
            diseases,
            allergies,
            roomNumber,
            bedNumber,
            floorNumber,
            age,
            gender,
            contactInfo,
            emergencyContact,
            patientId: generateId(), // Generate a unique ID for the patient
        });

        // Save the patient data to the database
        const savedPatient = await newPatient.save();

        // Return a success response
        res.status(201).json({
            message: 'Patient data successfully saved!',
            data: savedPatient,
        });
    } catch (error) {
        // Handle any server errors
        console.error('Error saving patient data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const GenFoodChart = async (req, res) => {
    const { patientId } = req.params;
    console.log("code in foodchart...");

    try {
        const patient = await Patient.findOne({ patientId: patientId });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found!' });
        }

        const diseases = Array.isArray(patient.diseases)
            ? patient.diseases
            : patient.diseases.split(',').map(disease => disease.trim());

        const processedDiseases = diseases.flatMap(disease => disease.split(',').map(d => d.trim()));
        // console.log("Processed Diseases:", processedDiseases);

        const allergies = Array.isArray(patient.allergies)
            ? patient.allergies
            : patient.allergies.split(',').map(allergy => allergy.trim());

        // console.log("Allergies:", allergies);

        const mealPlan = generateMealPlan(processedDiseases, allergies);

        console.log("check here..", mealPlan.morningMeal);
        const newFoodChart = new FoodChart({
            patientId,
            morningMeal: mealPlan.morningMeal,
            eveningMeal: mealPlan.eveningMeal,
            nightMeal: mealPlan.nightMeal
        });

        const savedFoodChart = await newFoodChart.save();

        res.status(201).json({
            message: 'Food chart successfully generated!',
            data: savedFoodChart
        });
    } catch (error) {
        console.error('Error generating food chart:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = { Foodbook, GenFoodChart };
