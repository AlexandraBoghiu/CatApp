package com.cat.catapp.Exceptions;

public class UserAlreadyExistException extends RuntimeException{
    public UserAlreadyExistException() {
        super("User already exists.");
    }
}
