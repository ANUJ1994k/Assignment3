

function getUserData(id,callback){
setTimeout(()=>{
// Create a dummy user object
const user = {
    id: id,
    name: 'ANUJ KUMAR',
    email: 'anuj1994k@gmail.com'
  };
  // Calling the callback function with the user object
  callback(user);
},2000);
}

// Defining  the displayUser function

function displayUser(user){
    console.log('User ID:', user.id);
  console.log('Name:', user.name);
  console.log('Email:', user.email);
}

//Calling the getUserData function with a user ID and the displayUser function as the callback
getUserData(1, displayUser);