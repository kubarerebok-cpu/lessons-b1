// async function getNames() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await response.json()
//     return users.map((u)=> u.name);
    

// }
// async function main() {
//     const names = await getNames();
//     console.log(names);
    
// }
// main();


// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) throw new Error("сервер катасы: " + response.status);
//         const users = await response.json();
//         console.log(users.map((u) => u .email));
//          console.log(users.map((a) => a .phone));
//     } catch (error) {
//         console.log("ката чыкты ", error.message);

//     }
// }

// getUsers();



async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!response.ok) throw new Error("Сервер катасы: " + response.status);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Ката чыкты:", error.message);
  }
}

getUsers();