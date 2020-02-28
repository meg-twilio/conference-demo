require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 8080;
const twilio = require('twilio')
const client = new twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN) 

// --------------------- MIDDLEWARE --------------------- //

const MODERATOR = '+19045371699'

const app = express();

const VoiceResponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded; //Used to parse requests so you can use its info

app.use(urlencoded({ extended: false }));// Thus lets express know to use static files

// --------------------- ROUTES --------------------- //
app.get('/', (request, response) => {
	response.send('<h1>Welcome to Twilio</h1>');
});

app.post('/voice', (request, response) => {
	const twiml = new VoiceResponse();

	const dial = twiml.dial();

	console.log(request)

	if (request.body.From == MODERATOR) {
		dial.conference('My conference', {
			startConferenceOnEnter: true,
			endConferenceOnExit: true,
		});
		console.log(response)
	} else {
		dial.conference('My conference', {
			startConferenceOnEnter: false,
		});
		console.log(response)
	};
	
	response.type('text/xml');
	response.send(twiml.toString());
})

// --------------------- START SERVER --------------------- //
app.listen(PORT, function() {
	console.log(`Twilio Client app HTTP server running on Port ${PORT}`)
});
