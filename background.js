chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(changeInfo);
    console.log(tab);

    if (
        tab.url &&
        tab.url.includes("www.youtube.com") &&
        changeInfo.status === "complete" &&
        tab.active
    ) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["foreground.js"]
        }).then(() => {
            console.log("youtube tab found & loaded!");
        }).catch(err => console.error(err));
    }
});
