url = window.location.href;

if (url.match("s=view")) {
	a = document.createElement('a');
	Surl = url.split("/");

	if (Surl[2] == "safebooru.org") {
		if (document.querySelector('#resized_notice')) {
			offset = 2;
		} else {
			offset = 1;
		}
		fnoff = 6;
		copyright = document.querySelector('.tag-type-copyright a').textContent;
	} else if (Surl[2] == "gelbooru.com") {
		offset = 0;
		fnoff = 7;
		copyright = document.querySelectorAll('.tag-type-copyright a')[1].textContent;
	}

	a.href = document.querySelectorAll("div#stats ~ div a")[offset].href;

	img = a.href;
	Simg = img.split("/");

	fname = Simg[fnoff];

	filename = "danbooru/" + copyright + "/" + fname;

	// This object is passed directly to downloads.download()
	chrome.runtime.sendMessage({
	  url: img,
	  filename: filename
	});
}
