document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('sendButton');
  
  sendButton.addEventListener('click', function() {
    chrome.extension.getBackgroundPage().chrome.browserAction.onClicked.dispatch();
  });
});
