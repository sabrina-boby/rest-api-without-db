let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

//create user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};

//update user
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });
  res.status(200).json(users);
};

// //update user
// const updateUser = (req, res) => {
//   const userid = req.params.id;
//   const { username, email } = req.body;
//   var singleUser = users.filter((user) => {
//     return user.id === userid;
//   });
//   singleUser.map((find) => {
//     find.username = username;
//     find.email = email;
//   });
//   console.log("=>", singleUser);
//   res.status(200).json(users);
// };

//delete user
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);

  res.status(200).json(users);
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
