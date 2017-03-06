# danbooru
Danbooru downloader as a WebExtension

## rationale
Automatic downloaders for danbooru image sites exist, but they have not
supported alternative operating systems or had great cross-browser support.

Some are also executable applications that must be installed.

This uses the WebExtension APIs that are supported across browsers and Operating
Systems.

**NOTE**: At this early stage the extension uses slashes (of the forward variety)
for download locations. This is arguably not cross-platform unless the execution
environment translates this for us.

## status
Support for a handful of danbooru sites is provided:

| Site |
|---|
| konachan.net/.com |
| yande.re |
| \*.sankakucomplex.com |
| hijiribe./danbooru.donmai.us |
| safebooru.org |
| gelbooru.com |

## layout
The extension is comprised of a content script and a background script.

The content script parses a page looking for the image URL and other metadata.
However content scripts
[cannot use the download API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs),
and sends the metadata to the background script.

The background script has access to the download API and actions the download.
The download API can only trigger downloads under the user's Downloads/ directory.

## testing
Install the extension into the local browser with the `web-ext` tool.

## issues
* chrome/chromium has been seen to ignore directories in the `filename`
  parameter and download directly into ~/Downloads.
