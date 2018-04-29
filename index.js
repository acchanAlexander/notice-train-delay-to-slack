'use strict'
const fs = require('fs')
    , { WebClient } = require('@slack/client')
    , trainDelayInfo = require('./train-delay')
    , targetTrainInfo = JSON.parse(fs.readFileSync(__dirname + '/targetTrainInfo.json', 'utf8'))
    ;   

trainDelayInfo.get()
  .then((data) => {
    data.forEach((delayRow) => {
      targetTrainInfo.forEach((targetRow) => {
        if (delayRow.name === targetRow.name) {
          postToSlack(targetRow.name, targetRow.link, targetRow.channelId);
        }   
      }); 
    }); 
  })  
  .catch((err) => {
    console.log(err);
  }); 

const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

function postToSlack(trainName, infoLink, channelId) {
  const message = trainName + 'に遅延が出てます。詳しくは詳細情報を確認してください。\n' + infoLink;

  web.chat.postMessage({ channel: channelId, text: message })
    .then((res) => {
      console.log('Message sent: ', res.ts);
    })
    .catch((err) => {
      console.log(err);
    });
}
