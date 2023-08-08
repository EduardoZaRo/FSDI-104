//object constructor
function Student(name,age,email){
    this.name = name;
    this.age = age;
    this.email = email;
}

let student1 = new Student("Irvin", 20, "irvin.zavala@uabc.edu.mx");
console.log(student1);