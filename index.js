const express = require('express');
require('./config/aws-config')
const { sendEmail, verifyEmail } = require('./send-email')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

// sendEmail();
verifyEmail('oyetikh1@gmail.com')

app.listen(3000, () => console.log('Server is running on port 3000'))