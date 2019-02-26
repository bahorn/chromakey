const openTab = (url) => {
  chrome.tabs.create({
    url,
  });
};
