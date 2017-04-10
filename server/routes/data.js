var express = require('express');
var router = express.Router();
var messages = [];

/* GET button data. */
router.get('/buttons', function(req, res, next) {  
  res.json({
    buttons: [
      {
      	iconSrc: "/images/icon-github.svg",
      	iconLabel: "github",
      	clickFunction: "github",
        url: "https://github.com/uelski"
      },
      {
      	iconSrc: "/images/icon-linkedin.svg",
      	iconLabel: "linkedin",
      	clickFunction: "linkedin",
        url: "https://www.linkedin.com/in/sam-vredenburgh-b5936641/"
      },
      {
      	iconSrc: "/images/icon-mail.svg",
      	iconLabel: "email",
      	clickFunction: "mail"
      },
      {
      	iconSrc: "/images/icon-call.svg",
      	iconLabel: "call",
      	clickFunction: "call"
      }
    ]
  })
});


/* GET project data. */
router.get('/projects', function(req, res, next) {  
  res.json({
    projects: [
      {
        iconSrc: "/images/icon-check.svg",
        iconLabel: "check",
        title: "STD Express Check",
        content: "This project is a user facing e-commerce website that sells STD testing packages. It involves a user selcting a testing location, test package, and inputting required personal and payment information. It also includes login authentication using a unique PIN to allow a user to view test results. It was built wtih Angular, HTML/SASS, Gulp, and deployed through the Google App Engine.",
        github: "false",
        githubUrl: "",
        url: "true",
        deployUrl: "https://www.stdexpresscheck.com/"
      },
      {
        iconSrc: "/images/icon-chat-black.svg",
        iconLabel: "chat",
        title: "Twilio Node App and Counselor Dashboard",
        content: "This project was an internal application that connected users calling different phone numbers, corresponding to multiple branded websites, to counselors. It consisted of a Node/Express app that routed incoming calls using the Twilio API, and sent messages to an Angular counselor app via the Pusher WebSocket API. The Angular counselor dashboard also included a chat interface that connected to the STD Express Check website user chat feature. Both applications were deployed through AWS.",
        github: "false",
        githubUrl: "https://github.com/uelski",
        url: "false",
        deployUrl: "https://github.com/uelski"
      },
      {
        iconSrc: "/images/icon-music.svg",
        iconLabel: "music",
        title: "Mason Cos",
        content: "This is a website I made for my band, Mason Cos. We are an electronic music duo based in Chicago. The website was built using the Polymer Starter Kit with custom web components. It is deployed through the Google App Engine.",
        github: "true",
        githubUrl: "https://github.com/uelski/new-cos",
        url: "true",
        deployUrl: "http://www.masoncos.com/"
      },
      {
        iconSrc: "/images/icon-home-black.svg",
        iconLabel: "test center",
        title: "STDTest.Center",
        content: "This was another user facing STD Testing e-commerce site, that was never completed due to time constraints. It was built with Polymer and connected to Firebase for both a datastore and user authentication. It was originally deployed through the Google App Engine.",
        github: "false",
        githubUrl: "https://github.com/uelski",
        url: "false",
        deployUrl: "https://github.com/uelski"
      },
      {
        iconSrc: "/images/icon-profile-black.svg",
        iconLabel: "profile",
        title: "Personal Website (This One!)",
        content: "The website you are currently on was built with Angular, utilizing the Yeoman Angular Generator, HTML/SASS, Grunt, and data-driven with a Node/Express API backend. I also utilized Angular-Material to help with styling, and am planning to connect with MongoDB and Mongoose.",
        github: "true",
        githubUrl: "https://github.com/uelski/sam-site",
        url: "false",
        deployUrl: "https://github.com/uelski"
      }
    ]
  })
});

router.post('/userMessage', function(req, res, next) {
  // console.log(req.body);
  var message = req.body;

  messages.push(message);

  res.json({});
  
});

router.get('/userMessage', function(req, res, next) {
  res.json({
    messages: messages
  })
})

module.exports = router;