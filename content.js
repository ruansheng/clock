// 接收popup.js的消息
chrome.extension.onMessage.addListener(
  	function(request, sender, sendResponse) {
    	if(request.type == "popup_get_url") {
			var url = window.location.href;
			sendResponse({url:url}); 
		}
});
