document.addEventListener('DOMContentLoaded', function () {
  var sendButton = document.getElementById('sendButton');
  sendButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getAttendants' }, function (response) {
        console.log('Attendants:', response.attendants);

      });
    });
  });
});
