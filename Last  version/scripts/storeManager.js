function savePet(pet){
    let pets = readPets();
    pets.push(pet);
    let val = JSON.stringify(pets);
    localStorage.setItem("pets", val);
}

function readPets(){
    let pets = localStorage.getItem("pets");
    if(!pets){
        return [];
    }else{
        return JSON.parse(pets);
    }
}