# Conference Call with Twilio Instructions

Steps to kick off your first Conference Call

1. In terminal, run npm install 
2. Purchase a Voice Enabled Phone Number on Twilio (in Twilio console or via REST API request) if you have yet to purchase Phone Number

### If configuring Conference Call in Twilio Console: 
3. On Phone Number's page, update Voice Configuration for 'A Call Comes In' field to 'Webhook' updating the Webhook field to your public URL (recommend ngrok for tunneling to localhost if URL is not hosted). 
#### Note : Be sure to update the path for webhook to include the /voice domain. Webhook path should look like 'https://YourURLOrNGROK.io/voice' (replacing 'YourURLOrNGROK.io' with your hosted domain)

4. Click Save :) 
5. Update app.js to your personal Moderator Phone Number (line 9 on app.js) for optimal control over the Conference Start and End. Non-Moderators will hear music while waitin for moderator to pick up the phone 

6. Save app.js.
7. In terminal, Start server (nodemon if you have it or node app.js)

Your conference Call should be live! 

Dial into the Twilio Number to start your conference call
