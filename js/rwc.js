////////////////////////////////////////////////////////////////////
//TRANSCRIBE LOCAL STORAGE CACHE


//get current conversation from localstorage
const tmprwcls = JSON.parse(localStorage.getItem('__rwc'));
const rwcls = _.values(tmprwcls[chatId]).sort((a, b) => b.timestamp - a.timestamp);
const convo = rwcls[0];
//


//step ui inputs
const IMAGE_HEADER = headerLogo 
const CHAT_TITLE = chatTitle
const NAME_BOT = nameBot
const NAME_USER = nameUser
const ICON_BOT = iconBot
const ICON_USER = iconUser
const SIDE_BOT = 'left'
const SIDE_USER = 'right'
const TIME_FORMAT = timeLocaleFormat
//

//create transcription array and html
var chatStartTime = new Date(convo.timestamp); 
var chatArray = [];
var chatHtml = '';

chatArray.push(`Chat Title: ${CHAT_TITLE}`)
chatArray.push(`Chat Time: ${chatStartTime}`)

chatHtml += `<!DOCTYPE html><html><head>
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<style> 
:root { --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); --msger-bg: #fff; --border: 2px solid #ddd; --left-msg-bg: #ececec; --right-msg-bg: #579ffb; }
html { box-sizing: border-box; }
*, *:before, *:after { margin: 0; padding: 0; box-sizing: inherit; }
body { display: flex; justify-content: center; align-items: center; /*height: 100vh; remove scrolling for pdf*/ background-image: var(--body-bg); font-family: Helvetica, sans-serif; }
.msger { display: flex; flex-flow: column wrap; justify-content: space-between; width: 100%; max-width: 867px; margin: 25px 10px; height: calc(100% - 50px); border: var(--border); border-radius: 5px; background: var(--msger-bg); box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2); }
.msger-header { align-items: flex-end;justify-content: space-between; padding: 10px; border-bottom: var(--border); background: #eee; color: #666; }
.msger-chat { flex: 1; overflow-y: auto; padding: 10px; } .msger-chat::-webkit- scrollbar { width: 6px; } .msger-chat::-webkit-scrollbar-track { background: #ddd; } .msger-chat::-webkit-scrollbar-thumb { background: #bdbdbd; } .msg { display: flex; align-items: flex-end; margin-bottom: 10px; } .msg:last-of-type { margin: 0; } .msg-img { width: 50px; height: 50px; margin-right: 10px; background: #ddd; background-repeat: no-repeat; background-position: center; background-size: cover; border-radius: 50%; } .msg-bubble { max-width: 450px; padding: 15px; border-radius: 15px; background: var(--left-msg-bg); } .msg-info { display: flex; justify-content: space-between; align-items: center; margin- bottom: 10px; } .msg-info-name { margin-right: 10px; font-weight: bold; } .msg- info-time { font-size: 0.85em; }
.left-msg .msg-bubble { border-bottom-left-radius: 0; }
.right-msg { flex-direction: row-reverse; } .right-msg .msg-bubble { background: var(--right-msg-bg); color: #fff; border-bottom-right-radius: 0; } .right-msg .msg-img { margin: 0 0 0 10px; }
.msger-chat { background-color: #fcfcfe; } 
</style> </head>
<body><section class="msger">
  <header class="msger-header">
    <img src="${IMAGE_HEADER}" >
    <div class="msger-header-title">${CHAT_TITLE}</div>
    <div class="msger-header-title">${chatStartTime}</div>
  </header>
  <main class="msger-chat">
  `;



_.forEach(convo.messages, component => {

  if(component.message){
    appendMessage(NAME_BOT, ICON_BOT, SIDE_BOT, component)
  }
  else if (component.answer){
    appendMessage(NAME_USER, ICON_USER, SIDE_USER, createMessageText(component))
  } 

})

chatHtml += `</main></section></body></html>`;
//

//functions 
function createMessageText(component){

  //RATING RESPONSE
  //cannot trust answerComponent as its not on some other component responses. ?!?
  //message does not exist so we'll create it.
  if(component.answer.rating){
    component.message = `Rating: ${component.answer.rating}, Feedback: `
      component.answer.feedback
    if(typeof component.answer.feedback !== 'undefined')
      component.message += component.answer.feedback
  }

  //SLIDER RESPONSE
  //no answerComponent
  //message does exist but contains html, we will override the message with clean
  else if(component.answer.value && component.answer.units)  //this might be risky if other components have same, but no other option
    component.message = `${component.answer.value} ${component.answer.units}`

  //LOCATION RESPONSE
  //has answer component !?!
  //no message, lets create it and handle displaying the image in append func.
  else if(component.answer.location){
    component.message = `Latitude: ${component.answer.location.lat}, Longitude: ${component.answer.location.lng}`
    component.image = component.answer.image
  }
  
  
  else // handle text answer
    component.message = component.answer.message

return component
}


function appendMessage(name, img, side, component) {
  
  //handle location as its the only message that contains extra div (currently?!?)
  if(typeof component.image === "undefined"){
    chatHtml += `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatTime(component.time)}</div>
          </div>
          <div class="msg-text">
            ${component.message}          
            </div>
        </div>
      </div>
    `;
    
    chatArray.push(`Bot: ${component.message}`)
  }
  else {
     chatHtml += `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatTime(component.time)}</div>
          </div>
          <div class="msg-location">
            <img src="${component.image}" alt="Location">
          </div>
          <div class="msg-text">
            ${component.message}          
            </div>
        </div>
      </div>
    `;
    
    chatArray.push(`Bot: ${component.message}`)
  }
  
}

function formatTime(date) {
  return new Date(date).toLocaleTimeString(timeLocaleFormat) 
}
//

//console logging
console.log(chatArray)
console.log(chatHtml)
//


//return myData to rwc
sendMessage({ 
    message: ``, 
    myData: {"chatArray":chatArray, "html":chatHtml}
  })


/////////////////////////////////////////////////////////////////

