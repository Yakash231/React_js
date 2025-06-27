console.log("hello")
console.log("world");
process.stdout.write("hello world\n");
console.table({ a: 1, b: 2 });
let name="Akash"
let roll_no=22052607
let bool=false
console.log(`Name: ${name}, Roll No: ${roll_no}, Boolean: ${bool}`);
let tea_types=["Taj","Lemon","Black","Oolong"]
console.log("Tea Types:", tea_types);
console.log(typeof tea_types);
let first_name = null;
let last_name;
console.log("First Name:", first_name);
console.log("Last Name:", last_name);
let string="hello world "
console.log("String:", string);
let first_name1 = "Akash";
let last_name1 = "Kumar";   
console.log(`${first_name1} ${last_name1}`);
let sym=Symbol();
console.log(sym);
const username={ firstname:"Akash",
               lastname:"Kumar",
               sec:"B-15",
               roll_no:22052607};
  username.firstname="Yejji";   
  username.lastname="Akash";

console.log(`First: : ${username.firstname} 
            last: ${username.lastname}
            sec: ${username.sec}
            roll_no: ${username.roll_no}`);

let today = new Date();
console.log("Today's Date:", today);
let current_time = new Date().toLocaleTimeString();
console.log("Current Time:", current_time);