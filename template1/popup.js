document.addEventListener('DOMContentLoaded', function () {
    var clickMeButton = document.getElementById('click-me');
    clickMeButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { message: 'hello' }, function (response) {
                console.log(response.response);
            });
        });
    });
});
