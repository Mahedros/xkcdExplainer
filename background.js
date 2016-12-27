chrome.runtime.onInstalled.addListener(function()
{
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() 
    {
        chrome.declarativeContent.onPageChanged.addRules([
                {
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: { hostEquals: "www.xkcd.com", schemes: ["https", "http"] }
                        }),
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: { hostEquals: "xkcd.com", schemes: ["https", "http"] }
                        })
                    ],
                    actions: [ new chrome.declarativeContent.ShowPageAction() ]
                }
        ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab)
{
    var index = tab.url.indexOf("xkcd");
    var newURL = tab.url.slice(0, index) + "explain" + tab.url.slice(index);
    chrome.tabs.update(tab.id, {url: newURL});
});
