
if(window.localStorage.userArr){//判断是否存在
    var array = JSON.parse(window.localStorage.userArr);
}else{
    array = [];//创建一个新数组
}
console.log(array);
document.getElementById('regist').onclick = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var repassword=document.getElementById('repassword').value;
    var nickname=document.getElementById('nickname').value;
    var email=document.getElementById('email').value;
   
    //var ischecked=document.form1.checks.checked==false;
    var isnew=true;
    var reg1=/^[0-9a-zA-Z]*$/;
    var reg2=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    var reg3=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var reg4=/^[0-9a-zA-Z]*$/;

    var tips1=document.getElementById('usernametip');
    var tips2=document.getElementById('nicknametip');
    var tips3=document.getElementById('emailtip');
    var tips4=document.getElementById('passwordtip');
    var tips5=document.getElementById('repasswordtip');
    
    var Tr1=document.getElementById('usernametr');
    var Tr2=document.getElementById('nicknametr');
    var Tr3=document.getElementById('emailtr');
    var Tr4=document.getElementById('passwordtr');
    var Tr5=document.getElementById('repasswordtr');
    var Tr6=document.getElementById('checkedbox');
//判读是否符合格式
//账号
if(!reg1.test(username)){
    Tr1.className="shuruhaserror"; 
    tips1.className="labelshow";
    isnew=false;
 
}
else if(username.length<3||username.length>15){
    Tr1.className="shuruhaserror"; 
    tips1.className="labelshow";
    isnew=false;
}
//昵称
if(!reg2.test(nickname)){
    Tr2.className="shuruhaserror"; 
    tips2.className="labelshow";
    isnew=false;
}else if(nickname.length<3||username.length>20){
    Tr2.className="shuruhaserror"; 
    tips2.className="labelshow";
    isnew=false;
}

//邮件
if(!reg3.test(email)){
    Tr3.className="shuruhaserror"; 
    tips3.className="labelshow";
    isnew=false;
}else if(nickname.length<3||username.length>20){
    Tr3.className="shuruhaserror"; 
    tips3.className="labelshow";
    isnew=false;
}
//第一次密码
if(!reg4.test(password)){
    Tr4.className="shuruhaserror"; 
    tips4.className="labelshow";
    isnew=false;
}
else if(password.length<6||password.length>20){
    Tr4.className="shuruhaserror"; 
    tips4.className="labelshow";
    isnew=false;
}
//重复密码
if(!(password==repassword)){
    Tr5.className="shuruhaserror"; 
    tips5.className="labelshow";
    isnew=false;
}
if(count%2==0){
    isnew=false;
    var checkedbox=document.getElementById('checkbox');
    checkedbox.className="move";
}

if(isnew){
    //遍历数组进行匹配
    for(var i =0;i<array.length;i++){
        //判断是否有相同账号
        if(username==array[i].username){
            alert("该账号已存在");
            isnew=false;
            return;
        }
        if(email==array[i].email){
            alert("该邮箱已注册");
            isnew=false;
            return;
            
        }

    }
    //创建对象
    var obj = {username:username,password:password,email:email}
    array.push(obj);
    window.localStorage.userArr=JSON.stringify(array);
    alert("用户创建成功");
   login();

}
}
function rechange(obj) {

    obj.className = "shuru";
    var tip1=document.getElementById('usernametip');
    tip1.className="labels";
    var tip2=document.getElementById('passwordtip');
    tip2.className="labels";
  
    var tip3=document.getElementById('nicknametip');
    tip3.className="labels";
  
    var tip4=document.getElementById('emailtip');
    tip4.className="labels";
  
    var tip5=document.getElementById('repasswordtip');
    tip5.className="labels";

}
var count=0;
function clickcount(){    
    count++;
}
function checkagain(){
    var checkedbox=document.getElementById('checkbox');
    checkedbox.className="unchecked";
}
function login(){
    setTimeout(function(){ window.location.href="../html/login.html";},0);
}