setTimeout(function() {
  window.history.go(-1);
  setTimeout(() => {
    // If this code is still running, we haven't navigated away from this page so history is likely empty
    // Close the tab
    chrome.runtime.sendMessage({}, function() {});
  }, 700);
}, 1000);
