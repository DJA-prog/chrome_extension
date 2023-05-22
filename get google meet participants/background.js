chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: `
      var element = document.querySelector('[jsname="jrQDbd"]');
      var names = element.getElementsByClassName('zWGUib');
      var nameList = Array.from(names).map(function(element) {
        return element.textContent;
      });
      
      var uniqueNames = [...new Set(nameList)];
      var jsonData = JSON.stringify({ participants: uniqueNames });
      
      fetch('https://dino-dev:5000/meet/participants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
    `
    });
});
