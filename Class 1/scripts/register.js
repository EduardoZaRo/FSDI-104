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
    pets:[
        {
            name:"Scooby",
            age:5,
            gender:"male",
            service:"Grooming",
            breed:"Labrador"
        },
        {
            name:"Scrappy",
            age:3,
            gender:"male",
            service:"Haircut",
            breed: "Beagle"
        },
        {
            name:"Junior",
            age:1,
            gender:"male",
            service:"Nail Trimming",
            breed:"Belgian shepherd"
        },
    ]
};

function displayPetName(){

    const petsDiv = document.querySelector("#pets");
    const petsQtyDiv = document.querySelector("#pets-quantity");
    petsQtyDiv.innerHTML = `
        <h3>Currently we have ${petSalon.pets.length} pets registered</h3>
    `;
    for(let i = 0; i < petSalon.pets.length; i++){

        petsDiv.innerHTML += `
            <li>${petSalon.pets[i].name} for ${petSalon.pets[i].service}</li>

        `;
    }
}

function init(){
    displayPetName();
}

window.onload = init; 

// keepa