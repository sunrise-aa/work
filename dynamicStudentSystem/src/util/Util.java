package util;

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class Util {
    private static Connection connection = null;
    static String PATH_PROPERTY = "D:\\JDBC1\\druid.properties";
    private static Properties properties = new Properties();
    private static String driver = null;
    private static String url = null;
    private static String user = null;
    private static String password = null;
    public static Connection getConnection() {
        if (connection != null) {
            return connection;
        }

        try {
            System.out.println("开始加载驱动。。。。");
            InputStream in = new BufferedInputStream(new FileInputStream(PATH_PROPERTY));
            properties.load(in);
            driver = properties.getProperty("driver");
            url = properties.getProperty("url");
            user = properties.getProperty("user");
            password = properties.getProperty("password");
            Class.forName(driver);
            //mysql 8
            // Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("驱动加载成功。。。。\n开始链接！");

            connection = DriverManager.getConnection(url, user, password);
            System.out.println("数据库连接成功");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            System.out.println("加载驱动失败！");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("连接数据库失败！");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public static Statement getStatement() throws Exception {
        try {
            Statement statement = getConnection().createStatement();
            return statement;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
