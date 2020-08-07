chrome.webNavigation.onBeforeNavigate.addListener(function (obj) {
    var tabId = obj.tabId;
    var url = new URL(obj.url)
    var params = new URLSearchParams(url.search);

    if(!params.has('oldIssueView')) {
        params.set('oldIssueView', true);
        url.search = params.toString();
        chrome.tabs.update(tabId, { url: url.toString() });
    }
}, { url: [{ hostContains: 'atlassian.net', pathContains: 'browse' }] });
