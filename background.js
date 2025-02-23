chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getIconURL") {
      sendResponse({ iconUrl: chrome.runtime.getURL("icon.png") });
    }
  });
  