package entity;

public class Student {
    private String u_id;
    private String u_name;
    private String u_college;
    private String u_major;
    private String u_grade;
    private String u_class1;
    private String u_age;


    public Student(){}

    @Override
    public String toString() {
        return super.toString();
    }

    public Student(String u_id, String u_name, String u_college, String u_major, String u_grade, String u_class1, String u_age) {
        this.u_id = u_id;
        this.u_name = u_name;
        this.u_college = u_college;
        this.u_major = u_major;
        this.u_grade = u_grade;
        this.u_class1 = u_class1;
        this.u_age = u_age;
    }

    public String getU_id() {
        return u_id;
    }

    public void setU_id(String u_id) {
        this.u_id = u_id;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }

    public String getU_college() {
        return u_college;
    }

    public void setU_college(String u_college) {
        this.u_college = u_college;
    }

    public String getU_major() {
        return u_major;
    }

    public void setU_major(String u_major) {
        this.u_major = u_major;
    }

    public String getU_grade() {
        return u_grade;
    }

    public void setU_grade(String u_grade) {
        this.u_grade = u_grade;
    }

    public String getU_class1() {
        return u_class1;
    }

    public void setU_class1(String u_class1) {
        this.u_class1 = u_class1;
    }

    public String getU_age() {
        return u_age;
    }

    public void setU_age(String u_age) {
        this.u_age = u_age;
    }
}
