const AWS = require('aws-sdk');

const params = {
    Destination: {
        CcAddresses: ['oyetikh1@gmail.com'], // this addrress would receive a copy
        ToAddresses: ['oyetikh@gmail.com'],
    },
    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: "<h1>Hey Ikhlas, Watsup</h1>"
            },
            Text: {
                Charset: 'UTF-8',
                Data: "Hey Ikhlas, Watsup"
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Test from NodeAws SES'
        }
    },
    Source: 'codingaxis@gmail.com',
    ReplyToAddresses: ['codingaxis@gmail.com']
}

const sendEmail = () => {
    // // Create the promise and SES service object
    // var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    
    // // Handle promise's fulfilled/rejected states
    // sendPromise.then(
    //   function(data) {
    //     console.log(data.MessageId);
    //   }).catch(
    //     function(err) {
    //     console.error(err, err.stack);
    // });
}

const verifyEmail = (email) => {
    // Create promise and SES service object
    var verifyEmailPromise = new AWS.SES({apiVersion: '2010-12-01'}).verifyEmailIdentity({EmailAddress: email}).promise();
    
    // Handle promise's fulfilled/rejected states
    verifyEmailPromise
    .then(data => console.log("Email verification initiated", data))
    .catch((err) => console.error(err, err.stack));
}

module.exports = { sendEmail, verifyEmail };