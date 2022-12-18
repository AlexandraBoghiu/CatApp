package com.cat.catapp.Controllers;

import com.cat.catapp.DTOs.UserDto;
import com.cat.catapp.Entities.User;
import com.cat.catapp.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/register/submit")
    public String registration(@RequestBody UserDto userDto){
        userService.saveUser(userDto);
        return "redirect:/register?success";
    }
    @PostMapping("/login/submit")
    public boolean login(@RequestBody UserDto userDto) {
        return userService.login(userDto);
    }
}
