var express = require('express');
var router = express.Router();

var index = 0;
var sessionName;
var voterNum;
var stories = [];

router.post('/api/add-stories', function(req, res, next) {
  console.log(req);
  sessionName = req.body.sessionName;
  voterNum = req.body.voterNum; 
  var storiesArr = req.body.stories.split("\n");
  
  storiesArr.forEach(story => {
    stories.push({
      'id': index,
      'story': story,
      'storyPoint': undefined,
      'status': false
    });
    index++;
  });
  console.log(sessionName + ',' + voterNum + ',' + stories);
  res.json({'success': true});
});

router.get('/api/get-panel-data', function(req, res, next) {
  res.json({
    'success': true,
    'response': {
      'sessionName': sessionName,
      'voterNum': voterNum,
      'stories': stories
    }
  });
});

module.exports = router;
