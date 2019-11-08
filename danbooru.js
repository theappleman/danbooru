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
} else if (Surl[2] == "beta.sankakucomplex.com") {
  a.href = document.querySelectorAll('img.ImageCard__image--loaded')[1].src;
} else {
  a.href = document.getElementById('highres').href;
}

img = a.href;
Simg = img.split("/");


if (Surl[2].match("sankakucomplex.com")) {
  // Check the subdomain
  subdom = Surl[2].split(".")[0]
  if (subdom == "beta") {
    copyright = document.querySelector('aside span[class^=MuiChip-label]').innerText;
  } else {
    copyright = document.querySelector('#tag-sidebar a[itemprop=keywords]').innerText;
  }
  Simg[Simg.length-1] = Simg[Simg.length-1].split("?")[0];
} else if (Surl[2].match("donmai.us")) {
  copyright = document.querySelector('#tag-list .search-tag').innerText;
} else if (Surl[2] == "behoimi.org") {
  copyright = document.querySelectorAll('.tag-type-model a')[1].textContent;
} else {
  copyright = document.querySelector('.tag-type-copyright').getAttribute('data-name');
}
fname = Simg[Simg.length-1];

filename = "danbooru/" + copyright + "/" + fname;

// This object is passed directly to downloads.download()
chrome.runtime.sendMessage({
  url: img,
  filename: filename
});
