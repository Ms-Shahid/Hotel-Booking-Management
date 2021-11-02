package com.hbm.hotelbookingsmanagementsystem.entites;

public class Signin {

    private String name;
    private String password;

    public Signin() { }

    public Signin(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getname() {return name; }
    public void setname(String name) {this.name = name; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
