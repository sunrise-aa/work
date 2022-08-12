package servlet;


import com.alibaba.fastjson.JSON;

import dto.MessageDto;
import entity.Student;

import service.StudentService;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/StudentAdd")
public class StudentAdd extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //解决跨域请求
        response.setHeader("Access-Control-Allow-Origin", "*");
        //解决中文乱码
        response.setContentType("text/html;charset=utf-8");
        System.out.println(1231244);
        String u_id = request.getParameter("U_id");
        String u_name = request.getParameter("U_name");
        String u_college=request.getParameter("U_college");
        String u_major=request.getParameter("U_major");
        String u_grade=request.getParameter("U_grade");
        String u_class1=request.getParameter("U_class1");
        String u_age=request.getParameter("U_age");
        Student student=new Student(u_id,u_name,u_college,u_major,u_grade,u_class1,u_age);
        System.out.println(u_id);
        System.out.println(u_name);



        StudentService studentService=new StudentService();

        MessageDto messageDto = null;
        //调用service中的login
        if (studentService.add(student) != null) {
            //设置返回值
            messageDto = new MessageDto("添加成功", true);
        } else {
            messageDto = new MessageDto("添加失败", false);
        }

        //由于前台传送过来的数据为json，所以返回也要为json格式
        String json = JSON.toJSONString(messageDto);
        //返回
        response.getWriter().println(json);
    }




    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }


}

