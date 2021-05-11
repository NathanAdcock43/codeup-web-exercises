function getTitles() {
    var links = document.getElementsByClassName("pl-video-title-link");
    var result = "";

    for (var i = 0; i < links.length; i++) {
        result += links[i].innerHTML.trim() + "\n";
    }

    return result;
}

function saveTextToFile(textToWrite) {
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = "List.txt";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "My Hidden Link";
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

var titles = "";
titles = getTitles();

if (titles != undefined || titles != "") {
    saveTextToFile(titles);
}

void(0);