url = window.location.href;

a = document.createElement('a');
Surl = url.split("/");

if (Surl[2].match("donmai.us")) {
  a.href = document.querySelector("a#image-resize-link").getAttribute("href");
} else {
  a.href = document.getElementById('highres').getAttribute('href');
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

chrome.runtime.sendMessage({
  url: img,
  copyright: copyright.replace("/","_"),
  fname: fname,
});

