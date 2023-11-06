// ESERCIZIO 1

// creo costruttore
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(firstUser, secondUser) {
    if (firstUser.age > secondUser.age) {
      console.log(
        firstUser.firstName + " è più grande di " + secondUser.firstName
      );
    } else if (firstUser.age < secondUser.age) {
      console.log(
        firstUser.firstName + " è più giovane di " + secondUser.firstName
      );
    } else {
      console.log(
        firstUser.firstName +
          " e " +
          secondUser.firstName +
          " hanno la stessa età"
      );
    }
  }
}

// creo oggetti
const utente1 = new User("Mario", "Palladino", 24, "Torino");
console.log(utente1);

const utente2 = new User("Lara", "Medaglia", 27, "Milano");
console.log(utente2);

const utente3 = new User("Alessandro", "Angheben", 24, "Trento");
console.log(utente3);

// COMPARATO ETA' TRAMITE METODO
User.compareAge(utente1, utente2);
User.compareAge(utente1, utente3);
User.compareAge(utente2, utente3);

// ESERCIZIO 2
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(comparePet) {
    if (this.ownerName === comparePet.ownerName) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

const petForm = document.getElementById("pet-form");
const petList = document.getElementById("pet-list");

const pets = [];

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("pet-name").value;

  const ownerName = document.getElementById("owner-name").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const myPet = new Pet(petName, ownerName, species, breed);
  pets.push(myPet);

  myList();

  petForm.reset();
});

function myList() {
  petList.innerHTML = " ";
  pets.forEach(function (myPet) {
    const myLi = document.createElement("li");
    myLi.textContent =
      "Pet name = " +
      myPet.petName +
      " , " +
      "Owner name = " +
      myPet.ownerName +
      " , " +
      "Species = " +
      myPet.species +
      " , " +
      "Breed = " +
      myPet.breed;
    petList.appendChild(myLi);
  });
}
