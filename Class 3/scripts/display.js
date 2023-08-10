function displayPetCards(){
    //get the div from HTML
    const DIV = document.getElementById("pets");
    let card = ""
    let icon = "";
    // Travel pets array
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        // create card html
        card += `
            <div class="pet">
                <h5>${pet.name} <i class="fas fa-${pet.type.toLowerCase()}"></i></h5>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Type: ${pet.type}</p>
            </div>
        `;
        DIV.innerHTML =  card;
    }
    displayNumberOfPets();

    // display cards in HTML
}


function displayNumberOfPets(){
    const DIV = document.getElementById("numberPets");
    DIV.innerText = petSalon.pets.length;
}

function displayPetsTable(){
        //get the div from HTML
        const DIV = document.getElementById("petsTable");
        let card = "";
        // Travel pets array
        card = `
            <table class="petsTableContainer">
                <tbody>
        `
        for(let i = 1, j = 1; i < petSalon.pets.length + 1; i++,j++){
            if(j == 1){ //ugly solution
                card += `
                    <tr>
                `;
            }
            if(j > 3){
                card += `
                    </tr>
                `;
                j = 1;
            }
            let pet = petSalon.pets[i-1];
            card += `
                <td>
                    <div class="pet">
                        <h5>${pet.name} <i class="fas fa-${pet.type.toLowerCase()}"></i></h5>
                        <p>Age: ${pet.age}</p>
                        <p>Gender: ${pet.gender}</p>
                        <p>Breed: ${pet.breed}</p>
                        <p>Service: ${pet.service}</p>
                        <p>Type: ${pet.type}</p>
                    </div>
                </td>
            `;

        }
        card += `
                </tbody>
            </table>
        `;
        DIV.innerHTML =  card;
        displayNumberOfPets();
}