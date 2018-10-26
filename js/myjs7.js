
var keyWord = document.getElementById("key-word");
keyWord.onkeypress = function (event) {
    if( event.keyCode ==13)
        search();
};

function search() {
    var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q='
        + keyWord.value
        + '&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhtp = new XMLHttpRequest();
    xhtp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var jsObject =JSON.parse(xhtp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                videoItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                videoItem+= '</div>';
                content += videoItem;
            }
            document.getElementById("demo").innerHTML = content;
        }
    };
    xhtp.open("GET", YOUTUBE_API, true);
    xhtp.send();
}