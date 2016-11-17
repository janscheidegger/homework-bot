import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import '../imports/api/classes.js';


Meteor.startup(() => {
  
  // code to run on server at startup


  // https://api.telegram.org/bot286533420:AAGOTzFbQ4amPaSwe6nJlYu08EuvnrKd-UI/getMe

  // channelId: g168485478
  Meteor.setInterval(function() {
    poll();
  }, 10000
);
  
});

function poll() {

let callOptions = {
  timeout: 10,
  offset:2
}

  HTTP.post("https://api.telegram.org/bot286533420:AAGOTzFbQ4amPaSwe6nJlYu08EuvnrKd-UI/getUpdates", {data: callOptions }, function(error, result) {
      console.log(result);
      console.log(result.data.result);
      console.log(error);
    });
}

