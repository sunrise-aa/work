package service;

import entity.Student;
import entity.Student;
import mapper.StudentMapper;

public class StudentService {
    public Student add(Student student) {
        StudentMapper StudentMapper = new StudentMapper();
        Student _Student =  StudentMapper.add(student);
        if (_Student!=null ) {
            return  student;
        } else {
            return null;
        }
    }


}
