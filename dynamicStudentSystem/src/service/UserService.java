package service;

import entity.User;
import mapper.UserMapper;

public class UserService {
    public User login(User user) {
        UserMapper userMapper = new UserMapper();
        User _user =  userMapper.login(user.getUserName());
        if (_user!=null && _user.getPassword().equals(user.getPassword())) {
            return  user;
        } else {
            return null;
        }
    }
}