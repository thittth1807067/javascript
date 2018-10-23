var student1 = {
    rollNumber :'A001',
    name :'Thu Thùy',
    birthday :'13/11/2000',
    address :'Hồ Tùng Mậu',
    phone :'0336479541',
    avatar :'../img/1.jpg',
};
var student2 = {
    rollNumber :'A002',
    name :'Hoài Anh',
    birthday :'23/10/2000',
    address:'Tôn Thất Thuyết',
    phone : '0344990442',
    avatar :'../img/2.jpg',
};
var student3 = {
    rollNumber :'A003',
    name :'Thanh Hoa',
    birthday :'26/6/2000',
    address: 'Tôn Thất Thuyết',
    phone :'03467892',
    avatar :'../img/3.jpg',
};
var student4 = {
    rollNumber :'A004',
    name :'Ngọc Huyền',
    birthday :'22/5/2000',
    address:'Lê Đức Thọ',
    phone :'03427892',
    avatar :'../img/4.jpg',
};
var student5 = {
    rollNumber :'A005',
    name :'Hồng Anh',
    birthday :'13/1/2000',
    address:'Cầu Giấy',
    phone :'03427892',
    avatar :'../img/5.jpg',
};
var student6 = {
    rollNumber :'A006',
    name :'Thanh Thủy',
    birthday :'22/6/2000',
    address:'Kim Mã',
    phone :'03427892',
    avatar :'../img/6.jpg',
};
var student7 = {
    rollNumber :'A007',
    name :'Thu Thảo',
    birthday :'15/6/2000',
    address:'Mỹ Đình',
    phone :'03427892',
    avatar :'../img/7.jpg',
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
listStudent.push(student5);
listStudent.push(student6);
listStudent.push(student7);
//for (var i = 0; i < listStudent.length; i++) {
// alert(listStudent[i].name);
//}
var classMainContent = document.getElementsByClassName("main-content");
if(classMainContent != null && classMainContent.length>0) {
    var  mainContent = classMainContent[0];
    for (var i = 0;i<listStudent.length; i++){
        var itemContent = '<div class="personal-infor">';
        itemContent += '<div class="avatar" style="background-image: url(\''+ listStudent[i].avatar+'\'); background-size: cover">';
        itemContent += '</div>';
        itemContent +='<div class="line-infor">';
        itemContent +=' <label>Rollnumber</label>',
            itemContent +='<div>' + listStudent[i].rollNumber + '</div>';
        itemContent += '</div>';
        itemContent +='<div class="line-infor">';
        itemContent +=' <label>name</label>',
            itemContent +='<div>' + listStudent[i].name + '</div>';
        itemContent += '</div>';
        itemContent +='<div class="line-infor">';
        itemContent +=' <label> birthday</label>',
            itemContent +='<div>' + listStudent[i]. birthday + '</div>';
        itemContent += '</div>';
        itemContent +='<div class="line-infor">';
        itemContent +=' <label> address</label>',
            itemContent +='<div>' + listStudent[i]. address + '</div>';
        itemContent += '</div>';
        itemContent +='<div class="line-infor">';
        itemContent +=' <label>phone</label>',
            itemContent +='<div>' + listStudent[i].phone + '</div>';
        itemContent += '</div>';

        mainContent.innerHTML +=itemContent;
    }
}
