/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
//The function should return the first object with the key of username that matches the string passed to the function. 
//If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  //findUserByUsername is the name of the function
  //usersArray is the parameter of the function
  //username is another parameter of the function
  //need to return the first object with the key of username that matches the srong passed to the function
  return usersArray.find(function (user) {
    //if the object is not found, return undefined
    return user.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {}
