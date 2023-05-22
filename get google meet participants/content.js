// content.js

// Function to extract participant names from the DOM
function extractParticipantNames() {
    const participantsElement = document.querySelector('[jsname="jrQDbd"]');
    const participantNames = [];

    if (participantsElement) {
        const participantListItems = participantsElement.querySelectorAll('[data-participant-id]');

        participantListItems.forEach((item) => {
            const nameElement = item.querySelector('.zWGUib');
            if (nameElement) {
                const name = nameElement.textContent.trim();
                participantNames.push(name);
            }
        });
    }

    return participantNames;
}

// Send participant names to the background script
function sendParticipantNames() {
    const participantNames = extractParticipantNames();
    chrome.runtime.sendMessage({ participantNames });
}

// Listen for a message from the background script to trigger participant name retrieval
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'getParticipantNames') {
        sendParticipantNames();
    }
});
