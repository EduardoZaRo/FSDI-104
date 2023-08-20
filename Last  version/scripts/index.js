let petSalon = {
    name:"The fasion pet",
    tel: "666-777-8888",
    hours: {
        open:"9:00 am",
        close:"6:00 pm"
    },
    adress:{
        city:"Tijuana",
        street:" Parque Internacional Industrial",
        zip:"22390"
    },
    pets:readPets()
};
function displayPetName(){
    
    // console.log(readPets())
    // let pets = readPets();
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
function init(){
    document.getElementById("salon-info").innerHTML = `
        <h2><i class="fas fa-paw"></i> ${petSalon.name} <i class="fas fa-paw"></i></h2>
        <p><i class="fas fa-phone"></i> </i>${petSalon.tel}</p>
        <p><i class="far fa-clock"></i> ${petSalon.hours.open} - ${petSalon.hours.close}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${petSalon.adress.street} ${petSalon.adress.zip}, ${petSalon.adress.city}</p>
    `;
    displayPetName();
}

window.onload = init; 

// keepa