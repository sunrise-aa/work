package mapper;

import entity.User;
import util.Util;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class UserMapper {
    private Connection connection = Util.getConnection();

    /**
     * 登录
     * @param userName
     * @return
     */
    public User login(String userName) {
        String sql = "select * from users where userName = '%s'";

        //格式化，将sql命令补全
        sql = String.format(sql, userName);

        try {
            PreparedStatement statement = connection.prepareStatement(sql);
            ResultSet resultSet = statement.executeQuery();

            User user = new User();
            //遍历数据集合，
            while (resultSet.next()) {
                user.setEid(resultSet.getInt("eid"));
                user.setUserName(resultSet.getString("userName"));
                user.setPassword(resultSet.getString("password"));
            }
            return user;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }
}
