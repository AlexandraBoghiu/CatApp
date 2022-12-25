package com.cat.catapp.Services;

import com.cat.catapp.DTOs.UserDto;
import com.cat.catapp.Entities.User;

import java.util.List;

public interface UserService {

    void saveUser(UserDto userDto);

    boolean checkIfUserExist(String email);

    boolean login(UserDto userDto);

    List<User> getUsers();

    String getUsername(String email);

}
