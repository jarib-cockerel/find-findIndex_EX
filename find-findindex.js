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
  //The function is already written out called findUserByUsername and has two arguments stored as parameters
  //function should return the first object with the key of username that matches the string passed to the function.
  //first object = usersArray
  //need to return the first argument using dot notation to find information
  return usersArray.find(function (user) {
    //return the first element found in the object
    //user was added as a parameter to pass thru an argument were the function would be applied to
    //return if the object is not found then its undefined
    //use of strict equality (===) will return a boolean result based upon object are the same
    return user.username === username; //return array object and if the object from username strictly equals username, then return true.
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
