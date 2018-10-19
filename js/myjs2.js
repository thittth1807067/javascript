var btnSubmit = document.forms["favourite-form"]["btn-submit"];
btnSubmit.onclick = function(){
    var checkbox = document.forms["favourite-form"]["favourite[]"];
    var result = "";
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true)
            result +=  checkbox[i].value + ', ' ;
    }
    alert("danh sách các game vừa chọn là: " + result);
}
