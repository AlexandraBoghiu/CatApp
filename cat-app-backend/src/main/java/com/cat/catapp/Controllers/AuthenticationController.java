package com.cat.catapp.Controllers;

import com.cat.catapp.DTOs.UserDto;
import com.cat.catapp.Entities.User;
import com.cat.catapp.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class AuthenticationController {

    private UserService userService;

    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/register")
    public boolean registration(@RequestBody UserDto userDto){
        userService.saveUser(userDto);
        return true;
    }
    @PostMapping("/login")
    public boolean login(@RequestBody UserDto userDto) {
        return userService.login(userDto);
    }
}
