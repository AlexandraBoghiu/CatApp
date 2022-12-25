package com.cat.catapp.Services;

import com.cat.catapp.DTOs.UserDto;
import com.cat.catapp.Entities.User;
import com.cat.catapp.Exceptions.UserAlreadyExistException;
import com.cat.catapp.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(UserDto userDto) throws UserAlreadyExistException {
        if (checkIfUserExist(userDto.getEmail())) {
            throw new UserAlreadyExistException();
        }
        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());
        user.setPassword(String.valueOf(userDto.getPassword().hashCode()));
        userRepository.save(user);
    }

    @Override
    public boolean checkIfUserExist(String email) {
        return userRepository.findByEmail(email) != null;
    }

    @Override
    public boolean login(UserDto userDto){
        return userRepository.findByEmailAndPassword(userDto.getEmail(), String.valueOf(userDto.getPassword().hashCode()))!= null;
    }
    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public String getUsername(String email){
        return userRepository.findByEmail(email).getUsername();
    }
}
