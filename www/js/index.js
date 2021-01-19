document.addEventListener('deviceready', onDeviceReady, false);

var refBrowser;

function receivedEvent() {
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal
      .startInit("056bc2a3-a8fc-4cf1-83ad-96a388a9b53d")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();
} 

function onDeviceReady() {
  navigator.splashscreen.show();

  setTimeout(function() {
      refBrowser.show();
      navigator.splashscreen.hide();
  }, 5000);

  refBrowser = cordova.InAppBrowser.open('http://site.com', "_blank", 'hideurlbar=yes,hidenavigationbuttons=yes,toolbar=no,location=no,hidden=yes,zoom=no');
  refBrowser.addEventListener("loadstop", loadStopCallBack);

  receivedEvent();
}


function loadStopCallBack() {
  refBrowser.show();
  navigator.splashscreen.hide();
}