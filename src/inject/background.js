chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('http')) {
    chrome.tabs.executeScript(tabId, { file: './injectScript.js' }, function () {
      chrome.tabs.executeScript(tabId, { fike: './foreground.bundle.js' }, function () {
        console.log('INJECTED AND EXECUTED')
      })
    })
  }
})
