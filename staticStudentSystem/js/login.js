
if (window.localStorage.userArr) {//判断是否存在
    var array = JSON.parse(window.localStorage.userArr);
} else {
    array = [];//创建一个新数组
}

console.log(array);
document.getElementById('login').onclick = function(){
    var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var isHad = false;//定义一个开关变量
    var index = 0; //定义一个下标确定用户
    var isnew = true;

   

    var reg1 = /^[0-9a-zA-Z]*$/;
    var reg4 = /^[0-9a-zA-Z]*$/;


    var isgo=sessionStorage.getItem("isgo");

    if (!reg1.test(username)) {
      alert("!!!账户请输入! 3-15位数字/字母");
        isnew = false;

    }
    else if (username.length < 3 || username.length > 15) {
        alert("!!!账户请输入 3-15位数字/字母");
        // tips1.innerHTML = "3-15位数字/字母";
        isnew = false;
    }

    if (!reg4.test(password)) {
      alert("!!!密码请输入6-20位数字/字母")
        isnew = false;
    }
    else if (password.length < 6 || password.length > 20) {
        alert("!!!密码请输入6-20位数字/字母")
        isnew = false;
    }

    if (isnew) {
        //遍历数组进行匹配
        for (var i = 0; i < array.length; i++) {
            if (username == array[i].username) {//有这个账号
                isHad = true;
                index = i;
                sessionStorage.setItem("UID",username);
            }
        }
        if (isHad) {//如果存在
            if (password == array[index].password) {
                alert("登录成功");
                sessionStorage.setItem("isgo",true);
              
                setTimeout(function () { window.location.href = "index.html"; }, 1000);
                

            } else {
                alert("密码错误");
            }
        } else {//账号不存在或输入错误
            alert("账号不存在或输入错误");
        }
    }
   
}
document.getElementById('logon').onclick = function () {
    setTimeout(function () { window.location.href = "../html/register.html"; }, 2000);
}
