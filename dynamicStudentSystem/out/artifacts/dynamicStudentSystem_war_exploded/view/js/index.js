
   // let isgo=sessionStorage.getItem("isgo");
   //             if(isgo!=null&&isgo){
   //
   //             }else if(isgo==null){
   //                 window.location.href="null.html";
   //             }else {
   //                 window.location.href="null.html";
   //             }
let UID=sessionStorage.getItem("UID");

    
if (window.localStorage.userArr) {//判断是否存在
    var array = JSON.parse(window.localStorage.userArr);
    console.log(array);
    
} else {
    array = [];//创建一个新数组
    
}




if (localStorage.getItem("studentData") != null) {//判断是否存在
    empData = JSON.parse(window.localStorage.getItem("studentData"));
} else {
    empData = [];//创建一个新数组

}
let newData = [];
let isSearch = false;
let updateTr = null;
let checkCount=0;
let checkBoxs=document.getElementsByClassName("onecheck");
let selectAllCheckBox=document.getElementById("choose-all");



   function isSuccessShow(isSuccess) {
       if (isSuccess) {
           alert("添加成功");
           sessionStorage.setItem("isgo",true);

       } else {
           alert("添加失败！！！");

       }
   }


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


   function addStudent(obj) {
       //指定后台接口地址
       let url = "StudentAdd";
       //发送请求
       Ajax(url, "get",obj, function (res) {
           console.log("请求成功", res);
           //获取后台传回的数据
           isSuccessShow(res.success);
       }, function (err) {
           console.log("请求失败", err);
           alert("添加失败");
       })
   }


 // empData = [
    // { "id": "11823020201", "name": "student0", "college": "计算机科学与工程学院", "major": "软件工程", "grade": "2018", "class1": "1801", "age": "21"},
    // { "id": "11823020202", "name": "student1", "college": "计算机科学与工程学院", "major": "大数据", "grade": "2018", "class1": "1802", "age": "19"},
    // { "id": "11823020203", "name": "student2", "college": "计算机科学与工程学院", "major": "电子信息", "grade": "2018", "class1": "1803", "age": "20"},
    // { "id": "11823020204", "name": "student3", "college": "计算机科学与工程学院", "major": "物联网", "grade": "2018", "class1": "1804", "age": "21"},
    // { "id": "11823020205", "name": "student4", "college": "计算机科学与工程学院", "major": "软件工程", "grade": "2018", "class1": "1801", "age": "19"},
    // { "id": "11823020206", "name": "student5", "college": "计算机科学与工程学院", "major": "大数据", "grade": "2018", "class1": "1802", "age": "20"},
    // { "id": "11823020207", "name": "student6", "college": "计算机科学与工程学院", "major": "电子信息", "grade": "2018", "class1": "1803", "age": "21"},
    // { "id": "11823020208", "name": "student7", "college": "计算机科学与工程学院", "major": "物联网", "grade": "2018", "class1": "1804", "age": "19"},
    // { "id": "11823020209", "name": "student8", "college": "计算机科学与工程学院", "major": "软件工程", "grade": "2018", "class1": "1801", "age": "20"},
    // { "id": "11823020210", "name": "student9", "college": "计算机科学与工程学院", "major": "大数据", "grade": "2018", "class1": "1802", "age": "21"},
    // { "id": "11923020201", "name": "student10", "college": "会计学院", "major": "会计学", "grade": "2019", "class1": "1901", "age": "19"},
    // { "id": "11923020202", "name": "student11", "college": "会计学院", "major": "财务管理", "grade": "2019", "class1": "1902", "age": "20"},
    // { "id": "11923020203", "name": "student12", "college": "会计学院", "major": "经济与金融", "grade": "2019", "class1": "1903", "age": "21"},
    // { "id": "11923020204", "name": "student13", "college": "会计学院", "major": "信息管理与信息系统", "grade": "2019", "class1": "1904", "age": "19"},
    // { "id": "11923020205", "name": "student14", "college": "会计学院", "major": "会计学", "grade": "2019", "class1": "1901", "age": "20"},
    // { "id": "11923020206", "name": "student15", "college": "会计学院", "major": "财务管理", "grade": "2019", "class1": "1902", "age": "21"},
    // { "id": "11923020207", "name": "student16", "college": "会计学院", "major": "经济与金融", "grade": "2019", "class1": "1903", "age": "19"},
    // { "id": "11923020208", "name": "student17", "college": "会计学院", "major": "信息管理与信息系统", "grade": "2019", "class1": "1904", "age": "20"},
    // { "id": "11923020209", "name": "student18", "college": "会计学院", "major": "会计学", "grade": "2019", "class1": "1901", "age": "21"},
    // { "id": "11923020210", "name": "student19", "college": "会计学院", "major": "财务管理", "grade": "2019", "class1": "1902", "age": "19"},
    // { "id": "12023020201", "name": "student20", "college": "理学院", "major": "基础数学", "grade": "2019", "class1": "1901", "age": "20"},
    // { "id": "12023020202", "name": "student21", "college": "理学院", "major": "高等数学", "grade": "2020", "class1": "2001", "age": "21"},
    // { "id": "12023020203", "name": "student22", "college": "理学院", "major": "工程数学", "grade": "2020", "class1": "2002", "age": "19"},
    // { "id": "12023020204", "name": "student23", "college": "理学院", "major": "基础数学", "grade": "2020", "class1": "2003", "age": "20"},
    // { "id": "12023020205", "name": "student24", "college": "理学院", "major": "高等数学", "grade": "2020", "class1": "2004", "age": "21"},
    // { "id": "12023020206", "name": "student25", "college": "理学院", "major": "工程数学", "grade": "2020", "class1": "2005", "age": "19"},
    // { "id": "12023020207", "name": "student26", "college": "理学院", "major": "基础数学", "grade": "2020", "class1": "2001", "age": "20"}
    // ];
//获取学生表格
   localStorage.setItem("studentData", JSON.stringify(empData));
let dataTableEle = document.getElementById("student-table");

//通过学生表格获取tbody
let tbodyEle = dataTableEle.tBodies[0];

//数据渲染 将empdata里面的数据显示在表格里面
if (empData.length >= 10) { xuanran(empData, tbodyEle, 0, 10); }
// 
else {
    xuanran(empData, tbodyEle, 0, empData.length);
}

// document.getElementById("choose-all").onclick=function(){
//     this.checked;
//     document.getElementsByClassName("checkone").checked;

// }


let userNumberEle = document.getElementById("number");
let userNameEle = document.getElementById("name");
let userCollegeEle = document.getElementById("college");
let userMajorEle = document.getElementById("major");
let userGradeEle = document.getElementById("grade");
let userClass1Ele = document.getElementById("class1");
let userAgeEle = document.getElementById("age");



let mask = document.getElementsByClassName("mask");
let addImformation = document.getElementById("deal-information");
let cancelAdd = document.getElementById("cancel");
let saveAdd = document.getElementById("save");

//打开数据添加窗口
let addOne = document.getElementById("add");

addOne.addEventListener("click", function () {
    document.getElementById("deal-information-title").innerHTML = "新增学生信息";
    mask[0].style.display = "block";
    addImformation.style.display = "block";

});



//关闭添加窗口
cancelAdd.addEventListener("click", function () {
    mask[0].style.display = "none";
    addImformation.style.display = "none";
    clearInput();

});

let isnewEmpobj = false;
let userNumber;
let userName;
let userCollege;
let userMajor;
let userGrade;
let userClass1;
let userAge;
//提交增加信息
saveAdd.addEventListener("click", function () {

    if (document.getElementById("deal-information-title").innerText == "新增学生信息") {
        userNumber = userNumberEle.value;
        userName = userNameEle.value;
        userCollege = userCollegeEle.value;
        userMajor = userMajorEle.value;
        userGrade = userGradeEle.value;
        userClass1 = userClass1Ele.value;
        userAge = userAgeEle.value;


        if (userNumber == "" || userNumber.length == 11) {
            document.getElementById("tipNumber").style.display = "none";

        }
        if (userNumber.length == 11) {
            isnewEmpobj = true;
        }
        if (userNumber.length != 11) {
            document.getElementById("tipNumber").style.display = "inline";
        }

        if (userNumber == "" || userName == "" || userCollege == "" || userMajor == "" || userGrade == "" || userGrade == "" || userClass1 == "" || userAge == "") {
            alert("学生数据不能为空");
            isnewEmpobj = false;
        } else if (checkIsOnly(userNumber, empData)) {
            alert("学号不可重复");
            isnewEmpobj = false;
        }else if(userAge<0||userAge>150){
            alert("年龄小于150岁");
            isnewEmpobj = false;
        }
        else if (isnewEmpobj) {
            let newEmpObj = {
                id: userNumber,
                name: userName,
                college: userCollege,
                major: userMajor,
                grade: userGrade,
                class1: userClass1,
                age: userAge
            }
            let newEmpObj1 = {
                U_id: userNumber,
                U_name: userName,
                U_college: userCollege,
                U_major: userMajor,
                U_grade: userGrade,
                U_class1: userClass1,
                U_age: userAge
            }
            addStudent(newEmpObj1);
            // alert("添加成功");
            turnOffadd();
            empData.push(newEmpObj);
            localStorage.setItem("studentData", JSON.stringify(empData));
            tbodyEle.innerHTML = "";
            clearInput();
            xuanran(empData, tbodyEle, 0, 10);
        }
//修改信息
    } else if (document.getElementById("deal-information-title").innerText == "修改信息") {


        let newNumber = userNumberEle.value;
        let newName = userNameEle.value;
        let newCollege = userCollegeEle.value;
        let newMajor = userMajorEle.value;
        let newGrade = userGradeEle.value;
        let newClass1 = userClass1Ele.value;
        let newAge = userAgeEle.value;


        if (newNumber == "" || newNumber.length == 11) {
            document.getElementById("tipNumber").style.display = "none";

        }
        if (newNumber.length == 11) {
            isnewEmpobj = true;
        }
        if (newNumber.length != 11) {
            document.getElementById("tipNumber").style.display = "inline";
        }

        if (newNumber == "" || newName == "" || newCollege == "" || newMajor == "" || newGrade == "" || newGrade == "" || newClass1 == "" || newAge == "") {
            alert("学生数据不能为空");
            isnewEmpobj = false;
        }else if(newAge<0||newAge>150){
            alert("年龄小于150岁");
            isnewEmpobj = false;
        }
        else if (isnewEmpobj) {
            for (let i = 0; i < empData.length; i++) {
                if (empData[i].id == oldId) {
                    if (oldId != newNumber && !checkIsOnly(newNumber, empData)) {

                        updateTr.cells[2].innerText = newNumber;
                        updateTr.cells[3].innerText = newName;
                        updateTr.cells[4].innerText = newCollege;
                        updateTr.cells[5].innerText = newMajor;
                        updateTr.cells[6].innerText = newGrade;
                        updateTr.cells[7].innerText = newClass1;
                        updateTr.cells[8].innerText = newAge;

                        empData[i].id = newNumber;
                        empData[i].name = newName;
                        empData[i].grade = newGrade;
                        empData[i].college = newCollege;
                        empData[i].major = newMajor;
                        empData[i].class1 = newClass1;
                        empData[i].age = newAge;
                        console.log("第一种情况");
                        alert("修改成功");
                        turnOffadd();

                       

                        clearInput();

                    } else if (oldId != newNumber && checkIsOnly(newNumber, empData)) {
                        console.log("第二种情况");
                        alert("学号不可重复");
                    } else if (oldId == newNumber) {


                        updateTr.cells[2].innerText = newNumber;
                        updateTr.cells[3].innerText = newName;
                        updateTr.cells[4].innerText = newCollege;
                        updateTr.cells[5].innerText = newMajor;
                        updateTr.cells[6].innerText = newGrade;
                        updateTr.cells[7].innerText = newClass1;
                        updateTr.cells[8].innerText = newAge;


                        empData[i].id = newNumber;
                        empData[i].name = newName;
                        empData[i].grade = newGrade;
                        empData[i].college = newCollege;
                        empData[i].major = newMajor;
                        empData[i].class1 = newClass1;
                        empData[i].age = newAge;
                        console.log("第三种情况");
                        alert("修改成功");
                        turnOffadd();

                       

                        clearInput();


                    } localStorage.setItem("studentData", JSON.stringify(empData));

                }

            }

        }

    }

    //把数据放到数组中

});


//储存数组到浏览器

// window.localStorage.empData=JSON.stringify(empData);

//初始渲染

//判断是否唯一
function checkIsOnly(element, obj) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == element)
            return true;
    }
    return false;

}


function turnOffadd() {
    document.getElementById("tipNumber").style.display = "none";
    mask[0].style.display = "none";
    addImformation.style.display = "none";
}


//渲染
function xuanranAll(Data, tablebdy) {
    for (let i = 0; i < empData.length; i++) {
        //创建Tr
        let newTr = tablebdy.insertRow(i);
        //获取每个学生对象
        let empObj = Data[i];

        //创建单元格
        newTr.insertCell(0).innerHTML = "<input type=checkbox class=onecheck>"
        newTr.insertCell(1).innerText = i + 1;
        newTr.insertCell(2).innerText = empObj.id;
        newTr.insertCell(3).innerText = empObj.name;
        newTr.insertCell(4).innerText = empObj.college;
        newTr.insertCell(5).innerText = empObj.major;
        newTr.insertCell(6).innerText = empObj.grade;
        newTr.insertCell(7).innerText = empObj.class1;
        newTr.insertCell(8).innerText = empObj.age;
        newTr.insertCell(9).innerHTML = "<button>删除</button> <button>修改</button>";

    }
    updatefootermessage();
    addChangeDelete();
}


function xuanran(Data, tablebody, statr, end) {



    tablebody.innerHTML = "";

    let num = Data.length > end ? end : Data.length;
    for (let i = 0; i < num; i++) {

        //创建Tr
        let newTr = tablebody.insertRow(i);
        //获取每个学生对象
        let empObj = Data[i];

        //创建单元格

        newTr.insertCell(0).innerHTML = "<input type=checkbox class=onecheck>"
        newTr.insertCell(1).innerText = i + 1;
        newTr.insertCell(2).innerText = empObj.id;
        newTr.insertCell(3).innerText = empObj.name;
        newTr.insertCell(4).innerText = empObj.college;
        newTr.insertCell(5).innerText = empObj.major;
        newTr.insertCell(6).innerText = empObj.grade;
        newTr.insertCell(7).innerText = empObj.class1;
        newTr.insertCell(8).innerText = empObj.age;
        newTr.insertCell(9).innerHTML = "<button>删除</button> <button>修改</button>";

    }
    let noneTr = tablebody.getElementsByTagName("tr");
    for (let i = 0; i < statr; i++) {
        if (noneTr != null)
            tablebody.removeChild(noneTr[0]);
    }
    updatefootermessage();
    addChangeDelete();
    addcheck();
    selectAllCheckBox.checked=false;
}

function addChangeDelete() {
    let tbodyAllbuttons = tbodyEle.getElementsByTagName("button");
    for (let i = 0; i < tbodyAllbuttons.length; i++) {
        if (i % 2 == 0) {
            tbodyAllbuttons[i].onclick = function () {
                var tf = confirm("确认删除？");
                if (tf) {
                    if(isSearch==false){

                    let deleteTr = this.parentNode.parentNode;
                    let delteId = deleteTr.cells[2].innerHTML;
                    tbodyEle.removeChild(deleteTr);
                    deleteElementId(empData,delteId);
                    localStorage.setItem("studentData", JSON.stringify(empData));

                    if (tbodyEle.rows.length == 9 && empData.length != getlastNum() && getFirstId() % 10 != 2) {
                        console.log(Math.ceil(getFirstId()) + Math.ceil(9));
                        xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) + Math.ceil(9));
                    } else if (getFirstId() % 10 == 2 || getFirstId() == 0) {
                        deleteFirst(empData,getFirstId());
                    }

                    else
                        xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) - Math.ceil(1) + tbodyEle.rows.length);
                }else{
                    let deleteTr = this.parentNode.parentNode;
                    let delteId = deleteTr.cells[2].innerHTML;
                    tbodyEle.removeChild(deleteTr);
                    deleteElementId(newData,delteId);
                    deleteElementId(empData,delteId);
                    localStorage.setItem("studentData", JSON.stringify(empData));

                    if (tbodyEle.rows.length == 9 && newData.length != getlastNum() && getFirstId() % 10 != 2) {
                        console.log(Math.ceil(getFirstId()) + Math.ceil(9));
                        xuanran(newData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) + Math.ceil(9));
                    } else if (getFirstId() % 10 == 2 || getFirstId() == 0) {
                        deleteFirst(newData,getFirstId());
                    }

                    else
                        xuanran(newData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) - Math.ceil(1) + tbodyEle.rows.length);
                }
            }
            }
        } else {
            tbodyAllbuttons[i].onclick = function () {
                document.getElementById("deal-information-title").innerHTML = "修改信息";

                mask[0].style.display = "block";
                addImformation.style.display = "block";
                updateTr = this.parentNode.parentNode;
                oldId = updateTr.cells[2].innerText;

                userNumberEle.value = oldId;
                userNameEle.value = updateTr.cells[3].innerText;
                userCollegeEle.value = updateTr.cells[4].innerText;
                userMajorEle.value = updateTr.cells[5].innerText;
                userGradeEle.value = updateTr.cells[6].innerText;
                userClass1Ele.value = updateTr.cells[7].innerText;
                userAgeEle.value = updateTr.cells[8].innerText;




            }
        }
    }
}

function updatefootermessage() {
    
    let rows = tbodyEle.getElementsByTagName("tr");
    let rowNumbers = 1;
    if (rows.length > 0) {
        rowNumbersAll = rows[rows.length - 1].getElementsByTagName("td");
        rowsNumber = rowNumbersAll[1].innerHTML;
    } else if (rows.length == 0 && empData.length > 0) {
        rowNumbers = empData.length / 10;
    } else {

    }
    if (isSearch == true)

        document.getElementById("massage").innerHTML = "第" + Math.ceil(rowNumbers / 10) + "页，共" + newData.length + "条（每页显示10条）";
    else
        document.getElementById("massage").innerHTML = "第" + Math.ceil(rowNumbers / 10) + "页，共" + empData.length + "条（每页显示10条）";

}


let nextPage = document.getElementById("next");
nextPage.onclick = function () {
    if (isSearch == false) {

        if(empData.length==0){
            alert("表格已经到头了哟");
        }else{ 
             let rows = tbodyEle.getElementsByTagName("tr");
        let rowNumbers = rows[rows.length - 1].getElementsByTagName("td");
        let rowsNumber = rowNumbers[1].innerHTML;

        console.log((empData.length - Math.ceil(rowsNumber)) >= 10);
        if (rowsNumber == empData.length)
            alert("表格已经到头了哟");

        else if (empData.length - Math.ceil(rowsNumber) >= 10)
            xuanran(empData, tbodyEle, Math.ceil(rowsNumber), Math.ceil(rowsNumber) + Math.ceil(10));
        else
            xuanran(empData, tbodyEle, Math.ceil(rowsNumber), empData.length);}
      
    } else {
        if(newData.length==0){
            alert("表格已经到头了哟");
        }else{let rows = tbodyEle.getElementsByTagName("tr");
        let rowNumbers = rows[rows.length - 1].getElementsByTagName("td");
        let rowsNumber = rowNumbers[1].innerHTML;

        console.log((newData.length - Math.ceil(rowsNumber)) >= 10);
        if (rowsNumber == newData.length)
            alert("表格已经到头了哟");

        else if (newData.length - Math.ceil(rowsNumber) >= 10)
            xuanran(newData, tbodyEle, Math.ceil(rowsNumber), Math.ceil(rowsNumber) + Math.ceil(10));
        else
            xuanran(newData, tbodyEle, Math.ceil(rowsNumber), newData.length);
        }
        
    }

}
let prePage = document.getElementById("previous");
prePage.onclick = function () {
if(isSearch==false){
    if(empData.length==0){
        alert("这是第一页哟");
    }else{ 
    let rowsNumber = getFirstId();
    console.log(rowsNumber);
    if (rowsNumber == 1)
        alert("这是第一页哟");
    else if (rowsNumber == 0 && empData.length != 0) {
        xuanran(empData, tbodyEle, empData.length - 10, empData.length);
    }
    else
        xuanran(empData, tbodyEle, Math.ceil(rowsNumber) - Math.ceil(11), Math.ceil(rowsNumber) - 1);}
   
}else{

    if(newData.length==0){
        alert("这是第一页哟");
    }else{ let rowsNumber = getFirstId();
    console.log(rowsNumber);
    if (rowsNumber == 1)
        alert("这是第一页哟");
    else if (rowsNumber == 0 && newData.length != 0) {
        xuanran(newData, tbodyEle, newData.length - 10, newData.length);
    }
    else
        xuanran(newData, tbodyEle, Math.ceil(rowsNumber) - Math.ceil(11), Math.ceil(rowsNumber) - 1);
    }
   
}

}
function deleteElementId(obj,did) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == did) {
            obj.splice(i, 1);

        }
    }
}
function getFirstId() {
    let rows = tbodyEle.getElementsByTagName("tr");
    let rowsNumber = 0;
    if (rows.length > 0) {
        let rowNumbers = rows[0].getElementsByTagName("td");
        rowsNumber = rowNumbers[1].innerHTML;
    }

    return rowsNumber;
}
function getlastNum() {
    let rows = tbodyEle.getElementsByTagName("tr");
    let rowNumber = 0;
    if (rows.length != 0) {
        let rowNumbers = rows[rows.length - 1].getElementsByTagName("td");
        rowNumber = rowNumbers[1].innerHTML;
    }


    return rowNumber;

}
function deleteFirst(obj,frist) {

    if (getlastNum() == obj.length) {

        xuanran(obj, tbodyEle, frist - 2, obj.length - 1);
    }
    else if (frist == 0 && obj.length != 0) {
        xuanran(obj, tbodyEle, obj.length - 10, obj.length);
    }
    else
        xuanran(obj, tbodyEle, frist - 2, Math.ceil(frist - 2) + Math.ceil(10));
}
function clearInput() {
    console.log("清空开始");
    document.getElementById("number").value = "";
    document.getElementById("name").value = "";
    document.getElementById("college").value = "";
    document.getElementById("major").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("class1").value = "";
    document.getElementById("age").value = "";
    console.log("清空完毕");
}
function clearChange(){
document.getElementById("UID").value="";
document.getElementById("password1").value="";
document.getElementById("password2").value="";
}


selectAllCheckBox.onclick=function(){

    if(selectAllCheckBox.checked==true){ 
 for(let i=0;i<checkBoxs.length;i++)
checkBoxs[i].checked=true;//勾选

}
if(selectAllCheckBox.checked==false){
    for(let i=0;i<checkBoxs.length;i++)
    checkBoxs[i].checked=false;
}
checkCount=0;
isAllChecked();

}

for(let i=0;i<checkBoxs.length;i++){

    checkBoxs[i].onclick=function(){
         if(checkBoxs[i].checked==false)
    selectAllCheckBox.checked=false;
 
}
}
 
function addcheck(){
 for(let i=0;i<checkBoxs.length;i++){
    checkBoxs[i].oninput=function(){
        checkCount=0;
        isAllChecked();
    }
}
   
}


function isAllChecked(){
  
    for(let i=0;i<checkBoxs.length;i++){
      if( checkBoxs[i].checked==true)
      checkCount++;
        
    }
   if(checkCount==checkBoxs.length)
   selectAllCheckBox.checked=true;
    console.log("checkCount"+checkCount);
     if(empData.length==0){
    selectAllCheckBox.checked=false;
}
if(checkCount<checkBoxs.length){
    selectAllCheckBox.checked=false;
}
}


// let ischeck=document.getElementById("choose-all");
// ischeck.prop("checked",true);

// let selectAllCheckBox = document.querySelector("choose-all");
// let selectOneCheckBox = document.querySelectorAll("onecheck");
// console.log("选中");
// selectOneCheckBox.forEach(x=>x.checked = selectAllCheckBox.checked);
document.getElementById("search").oninput = function () {

    isSearch = true;
    //获取输入框的值
    let searchValue = this.value;
    newData = [];
    //将数据进行匹配
    for (let i = 0; i < empData.length; i++) {
        let empObj = empData[i];
        if (empObj.id.indexOf(searchValue) != -1 || empObj.name.indexOf(searchValue) != -1 || empObj.college.indexOf(searchValue) != -1 || empObj.major.indexOf(searchValue) != -1 || empObj.grade.indexOf(searchValue) != -1 || empObj.class1.indexOf(searchValue) != -1 || empObj.age.indexOf(searchValue) != -1) {

            newData.push(empObj);


        }

    }
    tbodyEle.innerHTML = "";
    console.log(newData);
    
    xuanran(newData, tbodyEle, 0, 10);
}

document.getElementById("delete").addEventListener("click",function(){
    checkCount=0;
    isAllChecked();
    if(checkCount==0){
        alert("请选择目标");
    }else{
        let tf=confirm("确认删除该页所有信息吗");
        if(tf){ 

            if(isSearch==false){
                let deleteTR=[];
                for(let i=0;i<checkBoxs.length;i++){
                  
                 
                 if(checkBoxs[i].checked==true){
                        console.log("删除一个");
                        let deleteTr = checkBoxs[i].parentNode.parentNode;
                        deleteTR.push(deleteTr);
                            let delteId = deleteTr.cells[2].innerHTML;
                           
                            deleteElementId(empData,delteId);
                 }
                    
                }
                console.log(deleteTR);
                for(let i=0;i<deleteTR.length;i++){
                     tbodyEle.removeChild(deleteTR[i]);
                }
                // if (tbodyEle.rows.length == 9 && empData.length != getlastNum() && getFirstId() % 10 != 2) {
                //     console.log(Math.ceil(getFirstId()) + Math.ceil(9));
                //     xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) + Math.ceil(9));
                // } else if (getFirstId() % 10 == 2 || getFirstId() == 0) {
                //     deleteFirst(empData,getFirstId());
                // }
    
                // else
                //     xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) - Math.ceil(1) + tbodyEle.rows.length);
                // soutIschecked(checkBoxs);
                xuanran(empData,tbodyEle,0,10);
                localStorage.setItem("studentData", JSON.stringify(empData));
            }else{
                let deleteTR=[];
                for(let i=0;i<checkBoxs.length;i++){
                  
                 
                 if(checkBoxs[i].checked==true){
                        console.log("删除一个");
                        let deleteTr = checkBoxs[i].parentNode.parentNode;
                        deleteTR.push(deleteTr);
                            let delteId = deleteTr.cells[2].innerHTML;
                           
                            deleteElementId(empData,delteId);
                            deleteElementId(newData,delteId);
                 }
                    
                }
                console.log(deleteTR);
                for(let i=0;i<deleteTR.length;i++){
                     tbodyEle.removeChild(deleteTR[i]);
                }
                // if (tbodyEle.rows.length == 9 && empData.length != getlastNum() && getFirstId() % 10 != 2) {
                //     console.log(Math.ceil(getFirstId()) + Math.ceil(9));
                //     xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) + Math.ceil(9));
                // } else if (getFirstId() % 10 == 2 || getFirstId() == 0) {
                //     deleteFirst(empData,getFirstId());
                // }
    
                // else
                //     xuanran(empData, tbodyEle, Math.ceil(getFirstId()) - Math.ceil(1), Math.ceil(getFirstId()) - Math.ceil(1) + tbodyEle.rows.length);
                // soutIschecked(checkBoxs);
                xuanran(newData,tbodyEle,0,10);
                localStorage.setItem("studentData", JSON.stringify(empData));
            }
        
          }
       
    }
});
function soutIschecked(obj){
for(let i=0;i<obj.length;i++)
    console.log(obj[i].checked+"\n");
}
let password1=document.getElementById("password1");
let password2=document.getElementById("password2");
document.getElementById("changepassword").onclick=function(){

document.getElementById("UID").value=UID;
document.getElementById("change").style.display="inline";
console.log(23);
mask[0].style.display = "block";
}
document.getElementById("sure").onclick=function(){

    for(let i=0;i<array.length;i++){
        if(array[i].username==UID){
            if(password1.value!=array[i].password){
              
                alert("原密码错误！！！");
            }else if(password1.value==array[i].password){
                if(password1.value==password2.value){
                    alert("新密码不能与原密码一致");
                }else if(password2.value.length>=6){
                    alert("修改成功");
                    array[i].password=password2.value;
                    clearChange();
                    document.getElementById("change").style.display="none";
                    mask[0].style.display = "none";
                    localStorage.setItem("userArr", JSON.stringify(array));
                }
                else if(password2.value.length<6||password2.value.length>20){
                    alert("密码为6~18位数字/字母");
                }

            }
        }
    }
}
document.getElementById("no").onclick=function(){
    clearInput();
    document.getElementById("change").style.display="none";

mask[0].style.display = "none";
}
document.getElementById("exit").onclick=function(){

    let tr=confirm("确认退出吗？")
    if(tr){
        isgo=null;
    window.location.href="index.jsp";
}
}