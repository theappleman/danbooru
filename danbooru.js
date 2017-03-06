url = window.location.href;

a = document.createElement('a');
Surl = url.split("/");

if (Surl[2].match("donmai.us")) {
  tmp = document.querySelector("a#image-resize-link");
  if (tmp) {
	a.href = tmp.href;
  } else {
	a.href = document.querySelectorAll('#post-information li a')[3].href
  }
} else {
  a.href = document.getElementById('highres').href;
}

img = a.href;
Simg = img.split("/");


if (Surl[2].match("sankakucomplex.com")) {
  copyright = document.querySelector('#tag-sidebar a[itemprop=keywords]').innerText;
  fname = Simg[6].split("?")[0];
} else if (Surl[2].match("donmai.us")) {
  copyright = document.querySelector('#tag-list .search-tag').innerText;
  fname = Simg[4];
} else {
  copyright = document.querySelector('.tag-type-copyright').getAttribute('data-name');
  fname = Simg[5];
}

filename = "danbooru/" + copyright + "/" + fname;

// This object is passed directly to downloads.download()
chrome.runtime.sendMessage({
  url: img,
  filename: filename
});
