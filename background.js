chrome.runtime.onMessage.addListener(notify);

function notify(message) {
  chrome.downloads.download(message);
}

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  suggest({filename: item.filename,
           conflictAction: 'overwrite'});
});
