// Background script logic goes here
chrome.runtime.onInstalled.addListener(function () {
    console.log('Extension installed');
});

// Example of message passing between background script and content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'hello') {
        console.log('Hello from content script');
        sendResponse({ response: 'Hi there!' });
    }
});
