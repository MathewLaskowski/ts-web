"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserForm_1 = require("./views/UserForm");
var User_1 = require("./models/User");
var user = User_1.User.buildUser({ name: 'NAME', age: 20 });
var userForm = new UserForm_1.UserForm(document.getElementById('root'), user);
userForm.render();
