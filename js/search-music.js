var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var listSong = JSON.parse(this.responseText);
        var content = '';
        for (var i = 0; i < listSong.length; i++) {
            content += '<div class="song-item">';
            content += '<div class="song-index">' + (i + 1) + '</div>';
            content += '<div class="song-thumbnail">';
            content += '<img src="' + listSong[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">' + listSong[i].name + '</div>';
            content += '<div class="song-singer">' + listSong[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\',\'' + listSong[i].name + '\',\'' + listSong[i].singer + '\')">Play</div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML = content;
    }
};
xmlHttpRequest.open('GET', MY_API, true);
xmlHttpRequest.send();

function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}

// //1
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200){
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i=0;i<listSong.lenght;i++) {
//             content +='<div class="song-item">';
//             content +='<div class="song-index">'+(i + 1)+'</div>';
//             content +='<div class="song-thumbnail">';
//             content += '<img src="' +listSong[i].thumbnail + '" alt="">';
//             content +='</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">'+ listSong[i].name+'</div>';
//             content +='<div class="song-singer">'+listSong[i].singer+'</div>';
//             content +='</div>';
//             content += '<div class="song-control" onclick="playSong(\''+listSong[i].link + '\',\'' +listSong.name+'\',\''+listSong.singer+'\')">play</div>';
//             content +='</div>';
//         }
//         document.getElementById('list-song').innerHTML=content;
//     }
// };
// xmlHttpRequest.open('GET',MY_API,true);
// xmlHttpRequest.send();
// function playSong(link,name,singer) {
//     document.getElementById('my-mp3').src=link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " +singer;
// }
// //2
// var MY_API='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlHttpRequest = new XHMLttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i=0;i< listSong.lenght;i++ ) {
//             content  += '<div class="song-item">';
//             content +='<div class="song-inex">'+(i+1)+'</div>';
//             content +='<div class="song-thumbnail">';
//             content +='<img src="'+listSong[i].thumbnail+'"alt="">';
//             content+='</div>';
//             content +='<div class="song-infor">';
//             content += '<div class="song-name">'+listSong[i].name+'</div>';
//             content +='<div class="song-singer">'+listSong[i].singer+'</div>';
//             content +='</div>';
//             content +='<div class="control" onclick="playSong(\''+listSong[i].link+'\',\''+listSong[i].name+'\',\''+listSong[i].singer+'\')">play</div>';
//             content +='</div>';
//         }
//         document.getElementById('list-song').innerHTML=content;
//     }
//
// };
// xmlHttpRequest.open('GET',MY_API,true);
// xmlHttpRequest.send();
// function playSong(link,nane, singer) {
//     document.getElementById('my-mp3').src=link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:'+ name +" - " +singer;
// }
// //3
// var MY_API='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content='';
//         for (var i=0;i<listSong.lenght; i++){
//             content +='<div class="song-item">';
//             content +='<div class="song-index">'+ (i+1) +'</div>';
//             content +='<div class="song-thumbnail">';
//             content +='<img src="'+listSong[i].thumbnail+'"alt="">';
//             content +='</div>';
//             content +='<div class="song-infor">';
//             content +='<div class="song-name">'+listSong[i].name+'</div>';
//             content +='<div class="song-singer">'+listSong[i].singer+'</div>';
//             content += '</div>';
//             content +='<div class="song-control" onclink="playSong(\''+listSong[i].link+'\',\''+listSong[i].name+'\',\''+listSong[i].singer+'\')">play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// };
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:'+name+" - " +singer;
//
// }
// //4
// var MY_API='https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xmlHttpRequest = new XMLHRequest();
// xmlHttpRequest.onreadystatechange=function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.lenght; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '"alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclink="playsong(\'' + listSong[i].link + '\',\'' + listSong[i].name + '\',\'' + listSong[i].singer + '\')"></div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// };
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing:'+name+"-"+singer;
// }
// //5
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
// //6
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
// //7
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
// //8
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
// //9
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
// //10
// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
//
// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var listSong = JSON.parse(this.responseText);
//         var content = '';
//         for (var i = 0; i < listSong.length; i++) {
//             content += '<div class="song-item">';
//             content += '<div class="song-index">' + (i + 1) + '</div>';
//             content += '<div class="song-thumbnail">';
//             content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//             content += '</div>';
//             content += '<div class="song-infor">';
//             content += '<div class="song-name">' + listSong[i].name + '</div>';
//             content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//             content += '</div>';
//             content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//             content += '</div>';
//         }
//         document.getElementById('list-song').innerHTML = content;
//     }
// }
// xmlHttpRequest.open('GET', MY_API, true);
// xmlHttpRequest.send();
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }