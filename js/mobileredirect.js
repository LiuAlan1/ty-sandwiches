if(!window.location.search.substring(1) == "full=true") { // do not redirect if querystring is ?full=true
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/WebOs/i)) { // detect mobile browser
    	window.location.replace("https://www.google.com/maps/place/4829+Mission+St,+San+Francisco,+CA+94112/@37.721018,-122.437307,13z/data=!4m5!3m4!1s0x808f7e850ed2c7ab:0xee1afe7bfec4af7e!8m2!3d37.7210175!4d-122.4373073?hl=en-US"); // redirect if mobile browser detected
    }
}
//code from https://gist.github.com/critzjm/768104