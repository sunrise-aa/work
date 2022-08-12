<%--
  Created by IntelliJ IDEA.
  User: 耀
  Date: 2022/8/9
  Time: 15:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>

<html>
  <head>
    <title>登陆</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  </head>
  <body>
  <div id="all">
    <div id="loginSecond">



      <ul>
        <li>
          <h3>学生信息管理系统</h3>
        </li>
        <li>账号：<input type="text" id="userName" placeholder="请输入!6~11位数字" ></li>
        <li>密码：<input type="password" id="password" placeholder="请输入6-20位数字/字母"></li>
        <li><input type="button" id="login" value="登录" onclick="logi()" >
          <input type="button" id="logon" value="注册"   >
        </li>

      </ul>
    </div>

  </div>
  </body>
<style>
  * {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #all {
    background-image: linear-gradient(45deg,#E4FFCD,rgb( 156,220,254),#2980B9,#E4FFCD);
    background-size: 1000%;
    animation: bganimation 16s infinite;
    line-height: 1.5em;
    font-family: "Times New Roman", Times, serif;
    height: 100%;

  }
  html{
    height: 100%;
  }
  body {
    height: 100%;

  }
  @keyframes bganimation {
    0%{
      background-position: 0% 50%;
    }
    50%{
      background-position: 100% 50%;
    }
    100%{
      background-position: 0% 50%;
    }
  }

  #loginSecond{


    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 160px;
    padding: 20px;
    text-align: center;
    border: 2px solid black;

    font-size: large;
    background-color: white;

  }
  input[type=button] {
    width: 40px;
    height: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  input[type=button]:hover{
    background-color: rgb(132,175,155);
  }
  li {
    height: 40px;
    list-style: none;
  }
  #login{
    margin-right: 30px;
  }
  #logon{
    margin-left: 70px;
  }
</style>
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script>


//  function  testAjax(){
//    let ajax=new XMLHttpRequest();
//    ajax.onreadystatechange=function (){
//      let result=ajax.responseText;
//      $("#loginSecond").innerHTML=1532551;
//      ajax.open("get","UserLogin");
//      ajax.send(null);
//    }
//  }


  function Ajax(url, type, data, success, error) {
    $.ajax({
      url: url,
      type: type,
      data: data,
      dataType: "json",
      success: success,
      error: error

    })
  }

  /**
   * 登录，向后台请求，验证输入的账号和密码
   */
  function logi() {
    //获取前台input的值
    let userName = $("#userName").val();
    let password = $("#password").val();

    //以json形式存储
    let user = {
      userName: userName,
      password: password
    }

    //指定后台接口地址
    let url = "UserLogin";
    // let url = "http://127.0.0.1:8085/student/UserLogin";

    //发送请求
    Ajax(url, "post", user, function (res) {
      console.log("请求成功", res);
      //获取后台传回的数据
      isSuccessShow(res.success);
    }, function (err) {
      console.log("请求失败", err);
      alert("账号输入错误或密码有误");
    })
  }

  /**
   * 根据返回判断后面的操作，登录成功后跳转页面
   * @param isSuccess
   */
  function isSuccessShow(isSuccess) {
    if (isSuccess) {
      alert("success");
      sessionStorage.setItem("isgo",true);
      window.location.href = "view/html/index.html";
    } else {
      alert("登录失败！！！");
      $("#userName").val("");
      $("#password").val("");
    }
  }

</script>


</html>
