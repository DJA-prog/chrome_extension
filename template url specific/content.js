console.log("Content script is active on this page!");

// Example: Send a message to the background script
chrome.runtime.sendMessage({ message: "hello from content script" });
