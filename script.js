// promise and callbacks


function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
  
  promise 
  
  const p1 = new Promise((resolve ,reject) => {
      setTimeout(() => {
          resolve("succes")
      },1000 );
  })
    
  const p2 = new Promise((resolve ,reject) => {
      setTimeout(() => {
          reject("failure")
      },1000 );
  })
  
  Promise.allSettled([p1,p2]).then(console.log).catch(console.log);

  // arrow function vs normal function

  var name = "Suprabha"
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name); 
    },
    regularFunc() {
        console.log(this.name); 
    }   
}
newObject.arrowFunc(); // Suprabha
newObject.regularFunc(); // supi

// var key word

function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(a);


// let key word

let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();

let a = 10;
function f() {
    if (true) {
        let b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)


// cosnst key

const a = {
    prop1: 10,
    prop2: 9
}
 
// It is allowed
a.prop1 = 3

// It is not allowed
a = {
    b: 10,
    prop2: 9
}
// destructing

    let arr =[1,2,3,4,5,6,6];
 // old destruct
    let num0 =arr[0];
    let num1 =arr[1];
    let num2 =arr[2];
    let num3 =arr[3];

    // new method

    // let[a,b,c]=arr;

    // console.log(a);//result = 1
    // console.log(b);//result = 2

    //...spred method
    let[x,y, ...spread]=arr;
    console.log(spread)

    //... rest method
    let[m,n, ...rest]=arr;
    console.log(rest)


 //   swap 2 variable using destructing

    let a = 10;
    let b = 20;

    console.log("before swapping a =" + a);
    console.log("before swapping b =" + b);
    [b,a] = [a,b];

    console.log("after swapping a =" + a);
    console.log("after swapping b =" +  b);

    //default parameters

//tax =18 this is default parameter

    function calculate(cost,tax=18){
       taxamount = cost * (tax/100)  // 45*18/100

       console.log(cost + taxamount);

    }

    calculate(45 ,18)

    // js classes
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age(x) {
          return x - this.year;
        }
      }
      
      let date = new Date();
      let year = date.getFullYear();
      
      let myCar = new Car("Ford", 2014);
      document.getElementById("demo").innerHTML=
      "My car is " + myCar.age(year) + " years old.";


      //deep copy
      
var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
