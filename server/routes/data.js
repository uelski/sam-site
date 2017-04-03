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
        content: "Lorem ipsum dolor sit amet, vel ne affert democritum reprehendunt, persius tractatos suavitate has id, no tempor volutpat per. Ea quando oblique constituto sit, ludus legere deseruisse an qui. Virtute volutpat ut mel, labitur pertinax cum in, per an soleat contentiones.",
        github: "false",
        githubUrl: "",
        deployUrl: "https://www.stdexpresscheck.com/"
      },
      {
        iconSrc: "/images/icon-music.svg",
        iconLabel: "music",
        title: "Mason Cos",
        content: "Lorem ipsum dolor sit amet, vel ne affert democritum reprehendunt, persius tractatos suavitate has id, no tempor volutpat per. Ea quando oblique constituto sit, ludus legere deseruisse an qui. Virtute volutpat ut mel, labitur pertinax cum in, per an soleat contentiones.",
        github: "true",
        githubUrl: "https://github.com/uelski",
        deployUrl: "http://www.masoncos.com/"
      },
      {
        iconSrc: "/images/icon-money.svg",
        iconLabel: "money",
        title: "Finance Tracker",
        content: "Lorem ipsum dolor sit amet, vel ne affert democritum reprehendunt, persius tractatos suavitate has id, no tempor volutpat per. Ea quando oblique constituto sit, ludus legere deseruisse an qui. Virtute volutpat ut mel, labitur pertinax cum in, per an soleat contentiones.",
        github: "true",
        githubUrl: "https://github.com/uelski",
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