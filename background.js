chrome.windows.onCreated.addListener(function() {
  var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
          scheme: "http",
          host: "127.0.0.1",
          port:"80"
      },
      bypassList: []
    }
  };
  chrome.proxy.settings.set(
    {
      value: config,
      scope: 'regular'
    },
    function() {});
});
