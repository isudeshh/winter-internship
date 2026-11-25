// let a = 10;
// let b = 20;

// let greet = (name,age) => "My name is "+name+" and my age is "+age;
// greet("Alice", 25);

// function greetuser(name,_age)
// {
//     console.log("Hi "+name+",Good Morning");
//     greetuser("John", greet);
// }

// console.log(greetuser("John",25, greet));

// function add(a,b)
// {
//     return a+b;
// }
// let sub = function(a,b)
// {
//     return a-b;
// }

// let mul = (a,b) => a*b;
// let div = (a,b) => a/b;

// console.log(`Addition(${a},${b})       : `+add(a,b));
// console.log("Subtraction("+a+","+b+")    : "+sub(a,b));
// console.log("Multiplication("+a+","+b+") : "+mul(a,b));
// console.log("Division("+a+","+b+")       : "+div(a,b));
// let print = () => console.log("Hi out side");
// const id = setInterval(() => {
//     print();
// },1000);

// setTimeout(() => console.log("executing after 3000"),3000);


// let userDetails =
// {
//     name : "John",
//     age : 18,
//     isActive : true,
// }

// let updateUser = (userDetails) => 
// {   return{
//     ...userDetails,
//     name : "Alice",
//     }

// };

// console.log(updateUser(userDetails));

// const displayUser =  (userDetails) => {
//     userDetails.name = "John";
//     console.log(`Name : ${userDetails.name}`);
// }

// let array = [1,2,3,4,5];

// const doubleArray = array.map((element) => element*2);
// const filterData = array.filter((element) => element % 2 === 0);
// const sum = array.reduce((a, element) => a + element, 0);
// console.log(doubleArray);
// console.log(filterData);
// console.log(sum);

// let array2 = [...array,6,7,8];
// console.log(array2);

// let numArray = [10,20,30,40,50,60,70,80,90,100];

// const doubleArray = numArray.map((element) => element+1);
// const filterData = numArray.filter((element) => element%5==0);
// const mul = numArray.reduce((a, element) => a*element,1);

// console.log(`NumArray after adding 1 to every element          : ${doubleArray}`);
// console.log(`NumArray after filtering of elements divided by 5 : ${filterData}`);
// console.log(`NumArray after multiplying all elements           : ${mul}`);

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// },0);

// console.log("3");
// console.log("1");
// const getUser = (id) => {
//     return new Promise((resolve,reject) => {
//         if(id)
//         {
//             reject(new Error("User Id required"));
//             return;
//         }
//         resolve({ userid: id, name:"John",age:20});
//         console.log("2");
//     }); 
// };

// getUser(20)
//     .then((data) => {console.log(data);})
//     .catch((error) => {console.error(error);});

// const inputElement= document.getElementById("userName");
// const ButtonElement = document.getElementById("updateBtn");
// const inputCard = document.getElementById("inputSection");
// const updateCard = document.getElementById("updateSection");

// ButtonElement.addEventListener("click",() => {
//     const inputValue = inputElement.value;
//     console.log(inputValue);

// });


// console.log(new Date().toLocaleString(


//     "en-IN", { timeZone: "Asia/Kolkata" }
// ));
