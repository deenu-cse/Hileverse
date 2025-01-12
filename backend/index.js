const express = require('express');
const app = express();
const cors = require('cors');
const Connectdb = require('./utils/db');
const Routes = require('./Routes/allRoutes')

app.use(cors());

app.use(express.json());

app.post("/", (req, res) => {
    try {

        res.status(200).json({
            success: true,
            message: "hello"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.use('/', Routes)

const PORT = process.env.PORT || 3000;

Connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

module.exports = app;