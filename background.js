chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  filename = "danbooru/" + message.copyright + "/" + message.fname;

  chrome.downloads.download({
    url: message.url,
    filename: filename
  });
}

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  suggest({filename: item.filename,
           conflictAction: 'overwrite'});
});
