// const dog1 = {
//     name:"Junior",
//     color:"black",
//     size:"small",
//     age:0.5,
//     favorite_toys:["ball","bone"]
// };

// const dog2 = new Dog("Junior","black","small",0.5,["ball","bone"])

let student = {
    name:"Eduardo",
    age:22,
    grades:[10,9,8,7],
    adress:{
        country:"USA",
        state:"California",
        city:"San Francisco"
    }
}
console.log(student);

let laptop = {
    processor:"AMD Ryzen 5 2500U",
    memory_size: "1TB",
    graphics_card: "GTX 1050",
    screen_resolution: "1920x1080",
    ram_size:"8GB",
    OS: "Windows 10",
    games_installed: ["Dark Souls", "Valorant"]
}

document.write(`
    <div class="student">
        <p>Name: ${student.name}</p>
        <p>Age: ${student.age}</p>
        <p>Country: ${student.adress.country}</p>
    </div>
`);