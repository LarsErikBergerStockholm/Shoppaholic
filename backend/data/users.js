import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "true",
  },
  {
    name: "Lasse Kasse",
    email: "lasse@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "false",
  },
  {
    name: "Gittan Persson",
    email: "gittan@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "false",
  },
];

export default users;
