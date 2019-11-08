url = window.location.href;

if (url.match("s=view")) {
	a = document.createElement('a');
	Surl = url.split("/");

	if (Surl[2] == "gelbooru.com") {
		offset = 0;
		fnoff = 6;
		copyright = document.querySelectorAll('.tag-type-copyright a')
		if (copyright.length < 2) {
			copyright = document.querySelectorAll('li[class^=tag-type] a')
		}
		copyright = copyright[1].textContent;
		a.href = document.querySelector('#tag-list div a[target=_blank]').href;
	} else {
		if (document.querySelector('#resized_notice')) {
			offset = 2;
		} else {
			offset = 1;
		}
		fnoff = 6;
		copyright = document.querySelector('.tag-type-copyright a');
		if (copyright === null) {
			copyright = document.querySelector('.tag-type-metadata a');
		}
		if (copyright === null) {
			copyright = {};
			copyright.textContent = Surl[2];
		}
		copyright = copyright.textContent;
		a.href = document.querySelectorAll("div#stats ~ div a")[offset].href;
	}


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
