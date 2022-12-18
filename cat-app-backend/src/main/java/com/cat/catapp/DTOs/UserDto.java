package com.cat.catapp.DTOs;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

   // @NotBlank
    private String email;

    //@NotBlank
    private String password; //todo make secure

   // @NotBlank
    private String username;



}
