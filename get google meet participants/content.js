function openAttendace() {
    // open partisipants side panel
}

function getAttendants() {
    openAttendace();
    var element = document.querySelector('[role="list"]');
    var names = element.getElementsByClassName('zWGUib');
    var nameList = Array.from(names).map(function (element) {
        return element.textContent;
    });

    var uniqueNames = [...new Set(nameList)];
    return JSON.stringify({ participants: uniqueNames });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getAttendants') {
        sendResponse({ attendants: getAttendants() });
    }
});
