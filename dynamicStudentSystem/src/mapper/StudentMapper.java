package mapper;

import entity.Student;
import util.Util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StudentMapper {

    private Connection connection = Util.getConnection();

    public Student add(Student student) {
        String sql = "insert into u_student values(?,?,?,?,?,?,?)";


        try {
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1,student.getU_id());
            preparedStatement.setString(2,student.getU_name());
            preparedStatement.setString(3,student.getU_college());
            preparedStatement.setString(4,student.getU_major());
            preparedStatement.setString(5,student.getU_grade());
            preparedStatement.setString(6,student.getU_class1());
            preparedStatement.setString(7,student.getU_age());

            int i = preparedStatement.executeUpdate();
           Student student1=new Student(student.getU_id(), student.getU_name(),student.getU_college(),student.getU_major(),student.getU_grade(),student.getU_class1(),student.getU_age());
            //遍历数据集合，

            return student1;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }
}


