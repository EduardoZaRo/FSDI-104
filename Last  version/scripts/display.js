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
        const DIV = document.getElementById("petsTable");
        let card = "";
        // Travel pets array
        card = `
            <table class="table petsTableContainer">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Allergies</th>
                        <th scope="col">Service</th>
                        <th scope="col">Type</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
        `
        for(let i = 1, j = 1; i < petSalon.pets.length + 1; i++,j++){
            let pet = petSalon.pets[i-1];
            card += `
            <tr id="${pet.id}">
                <td scope="row">${pet.name} <i class="fas fa-${pet.type.toLowerCase()}"></i></td>
                <td>${pet.age}</td>
                <td> ${pet.gender}  </td>
                <td>${pet.breed}</td>
                <td>${pet.allergies}</td>
                <td> ${pet.service} </td>
                <td>${pet.type}  </td>
                <td style="text-align:center;"><button class="btn btn-danger" onclick="deletePet(${pet.id})">Delete</button></td>
            </tr>

            `;

        }
        card += `
                </tbody>
            </table>
        `;
        DIV.innerHTML =  card;
        displayNumberOfPets();
}