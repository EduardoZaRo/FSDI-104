let petSalon = {
    name:"The fasion pet",
    tel: "666-777-8888",
    hours: {
        open:"9:00 am",
        close:"6:00 pm"
    },
    adress:{
        city:"Tijuana",
        street:"Cuarta y madero",
        zip:"92154"
    },
    pets:[]
};

function displayPetName(){
    console.log(petSalon.pets)
    const petsDiv = document.querySelector("#pets");
    const petsQtyDiv = document.querySelector("#pets-quantity");
    petsQtyDiv.innerHTML = `
        <h3>Currently we have ${petSalon.pets.length} pets registered</h3>
    `;
    petsDiv.innerHTML = "";
    for(let i = 0; i < petSalon.pets.length; i++){

        petsDiv.innerHTML += `
            <li>${petSalon.pets[i].name} for ${petSalon.pets[i].service}</li>

        `;
    }
}


function Pet(name,age,gender,breed,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}


let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
function register(){
    if(
        inputName.value == "" ||
        inputAge.value == "" ||
        inputGender.value == "" ||
        inputBreed.value == "" ||
        inputService.value == ""
    ){
        alert("Fill all inputs")
        return;
    }
    let newPet = new Pet(   inputName.value,
                            inputAge.value,
                            inputGender.value,
                            inputBreed.value,
                            inputService.value);
    petSalon.pets.push(newPet);
    document.querySelectorAll("input").forEach((input)=>{
        input.value = "";
    })
    console.log(petSalon.pets)
    displayPetName();
}

function init(){
    
    let scooby = new Pet("Scooby",80,"Male","Dane","Grooming");
    let scrappy = new Pet("Scrappy",70,"Male","Mixed","Nails trimming");
    let junior = new Pet("Junior",10,"Male","Shepherd","Vaccines");
    petSalon.pets.push(scooby,scrappy,junior);
    console.log(petSalon.pets);
    displayPetName();
}

window.onload = init; 

// keepa