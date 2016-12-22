chrome.runtime.onInstalled.addListener(function()
{
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() 
    {
        chrome.declarativeContent.onPageChanged.addRules([
                {
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: { hostEquals: "www.xkcd.com", schemes: ["https"] }
                        })
                    ],
                    actions: [ new chrome.declarativeContent.ShowPageAction() ]
                }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab)
{
    chrome.tabs.update(tab.id, {url: "https://explainxkcd.com"});
});
