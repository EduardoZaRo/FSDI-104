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
    // const petsQtyDiv = document.querySelector("#pets-quantity");
    // petsQtyDiv.innerHTML = `
    //     <h3>Currently we have ${petSalon.pets.length} pets registered</h3>
    // `;
    petsDiv.innerHTML = "";
    for(let i = 0; i < petSalon.pets.length; i++){

        petsDiv.innerHTML += `
            <li>${petSalon.pets[i].name} for ${petSalon.pets[i].service}</li>

        `;
    }
}

let counter = 0;
function Pet(name,age,gender,breed,allergies,service,type){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.allergies  = allergies;
    this.service = service;
    this.type = type;
    this.id = counter++;
}


let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputAllergies = document.getElementById("txtAllergies");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function isValid(thePet){
    let validation = true;
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    inputAllergies.classList.remove("error");
    if(thePet.name == ""){
        validation = false;
        inputName.classList.add("error");
    }
    if(thePet.age == "" || isNaN(Number(thePet.age))){
        validation = false;
        inputAge.classList.add("error");
    }

    if(thePet.gender == ""){
        validation = false;
        inputGender.classList.add("error");
    }
    if(thePet.breed == ""){
        validation = false;
        inputBreed.classList.add("error");
    }
    if(thePet.allergies == ""){
        validation = false;
        inputAllergies.classList.add("error");
    }
    return validation;
}
function register(){

    let newPet = new Pet(   inputName.value,
                            inputAge.value,
                            inputGender.value,
                            inputBreed.value,
                            inputAllergies.value,
                            inputService.value,
                            inputType.value);
    if(isValid(newPet) == true){
        petSalon.pets.push(newPet);
        console.log(petSalon.pets);
        // displayPetName();

        // displayPetCards();
        displayPetsTable();
        clearForm();

        
    }

}

function clearForm(){
    document.querySelectorAll("input").forEach((input)=>{
        input.value = "";
    })
}

function deletePet(petID){
    console.log("deleting...", petID);
    document.getElementById(petID).remove();
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.id == petID){
            petSalon.pets.splice(i,1);
        }
    }
    if(petSalon.pets.length == 0){
        let DIV = document.getElementById("petsTable");
        DIV.innerHTML = `
            <table class="table petsTableContainer">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Service</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="7" style="text-align:center;">No pets registered!</td>
                    </tr>
                </tbody>
            </table>
        `;
    }
    displayNumberOfPets();

}

function search(){
    let searchStr = document.getElementById("form1").value;

    if(searchStr == "") return;

    for(let i = 0; i < petSalon.pets.length; i++){

        let pet = petSalon.pets[i];
        document.getElementById(pet.id).classList.remove("found");
        if(pet.name.toLowerCase() == searchStr.toLowerCase()){
            console.log(searchStr, "found at index", i);
            document.getElementById(pet.id).classList.add("found");
        }
    }
}

function init(){
    
    let scooby = new Pet("Scooby",80,"Male","Dane","Chocolate","Grooming", "Dog");
    let scrappy = new Pet("Scrappy",70,"Male","Mixed","Ice","Nails trimming","Dragon");
    let junior = new Pet("Junior",10,"Male","Shepherd","Whiskas","Vaccines","Cat");
    let tom = new Pet("Tom",10,"Male","Weimaraner","None","Vaccines","Dog");
    petSalon.pets.push(scooby,scrappy,junior,tom);
    console.log(petSalon.pets);
    // displayPetName();
    // displayPetCards();
    displayPetsTable();
}

window.onload = init; 

// keepa