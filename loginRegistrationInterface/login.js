if (window.localStorage.userArr) {//判断是否存在
    var array = JSON.parse(window.localStorage.userArr);
} else {
    array = [];//创建一个新数组
}


document.getElementById('login').onclick = function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isHad = false;//定义一个开关变量
    var index = 0; //定义一个下标确定用户
    var isnew = true;

    var tips1 = document.getElementById('usernametip');

    var tips4 = document.getElementById('passwordtip');

    var Tr1 = document.getElementById('usernametr');

    var Tr4 = document.getElementById('passwordtr');

    var reg1 = /^[0-9a-zA-Z]*$/;
    var reg4 = /^[0-9a-zA-Z]*$/;




    if (!reg1.test(username)) {
        Tr1.className = "shuruhaserror";
        // tips1.className="labelshow";
         tips1.className="labelshow";
        isnew = false;

    }
    else if (username.length < 3 || username.length > 15) {
        Tr1.className = "shuruhaserror";
          tips1.className="labelshow";
        // tips1.innerHTML = "3-15位数字/字母";
        isnew = false;
    }

    if (!reg4.test(password)) {
        Tr4.className = "shuruhaserror";
       tips4.className="labelshow";
        isnew = false;
    }
    else if (password.length < 6 || password.length > 20) {
        Tr4.className = "shuruhaserror";
        tips4.className="labelshow";
        isnew = false;
    }

if(count%2==0){
    isnew=false;
    var checkedbox=document.getElementById('checkbox');
    checkedbox.className="move";
}




    if (isnew) {
        //遍历数组进行匹配
        for (var i = 0; i < array.length; i++) {
            if (username == array[i].username) {//有这个账号
                isHad = true;
                index = i;
            }
        }
        if (isHad) {//如果存在
            if (password == array[index].password) {
                alert("登录成功");
                setTimeout(function () { window.location.href = "index.html"; }, 2000);
            } else {
                alert("密码错误");
            }
        } else {//账号不存在或输入错误
            alert("账号不存在或输入错误");
        }
    }
   
}
document.getElementById('register').onclick = function () {
    setTimeout(function () { window.location.href = "register.html"; }, 2000);
}
function rechange(obj) {

    obj.className = "shuru";
    var tip1=document.getElementById('usernametip');
    tip1.className="labels";
    var tip2=document.getElementById('passwordtip');
    tip2.className="labels";
}
var count=0;
function clickcount(){    
    count++;
}
function checkagain(){
    var checkedbox=document.getElementById('checkbox');
    checkedbox.className="unchecked";
}