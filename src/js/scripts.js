const personImg = document.querySelector(".person-img");
const personId = document.querySelector(".person-id");
const personName = document.querySelector(".person-name");
const personAge = document.querySelector(".person-age");
const personJob = document.querySelector(".person-job");
const personBounty = document.querySelector(".person-bounty");

const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");

let crewId = 1;
let Person = 1;

const fetchPersons = async () => {
  const ApiOnePiece = await fetch(
    `https://api.api-onepiece.com/characters/crew/1`
  );

  if (ApiOnePiece.status === 200) {
    const data = await ApiOnePiece.json();
    return data;
  }
};

const renderPerson = async () => {
  const data = await fetchPersons();

  // let img = `./img/persons/${index}`;
  let index = 0;

  personImg.src = `src/img/persons/0.png`;
  personId.innerHTML = `ID: ${data[index].id}`;
  personName.innerHTML = `Name: ${data[index].french_name}`;
  personAge.innerHTML = `Age: ${data[index].age}`;
  personJob.innerHTML = `Job: ${data[index].job}`;
  personBounty.innerHTML = `Bounty: ฿ ${data[index].bounty}`;

  buttonNext.addEventListener("click", () => {
    if (index < 10) {
      index += 1;

      buttonNext.style.display = "block";

      personImg.src = `src/img/persons/${index}.png`;
      personId.innerHTML = `ID: ${data[index].id}`;
      personName.innerHTML = `Name: ${data[index].french_name}`;
      personAge.innerHTML = `Age: ${data[index].age}`;
      personJob.innerHTML = `Job: ${data[index].job}`;
      personBounty.innerHTML = `Bounty: ฿ ${data[index].bounty}`;
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (index > 0) {
      index -= 1;

      personImg.src = `src/img/persons/${index}.png`;
      personId.innerHTML = `ID: ${data[index].id}`;
      personName.innerHTML = `Name: ${data[index].french_name}`;
      personAge.innerHTML = `Age: ${data[index].age}`;
      personJob.innerHTML = `Job: ${data[index].job}`;
      personBounty.innerHTML = `Bounty: ฿ ${data[index].bounty}`;
      buttonPrev.style.display = "block";
    }
  });
};

renderPerson(Person);
