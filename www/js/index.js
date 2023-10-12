document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
	//print("web url input : "+weburl_input);
   url = weburl_input;
   //url = "https://xamplify.co/login"
   //url = "http://localhost:4200/home/dashboard/myprofile"
	
	showUrl(url);
   //print("after showUrl");
}

function showUrl(url) {
	window.location = url;
	return;
}	