const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/submit-quiz', (req, res) => {
    const { username, rollNumber, answers } = req.body;
    console.log(`User: ${username}, Roll Number: ${rollNumber}, Answers: ${answers}`);
    res.send({ success: true, message: "Quiz submitted successfully!" });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
