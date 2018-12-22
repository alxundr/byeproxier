chrome.windows.onCreated.addListener(function() {
  var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "http",
        host: "proxynonexistent.com",
        port: 80
      },
      bypassList: ["*google.com"]
    }
  };
  chrome.proxy.settings.set(
    {
      value: config,
      scope: 'regular'
    },
    function() {}
  );
});
