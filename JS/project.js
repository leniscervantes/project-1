let intervalId;
//Things for section 1
const prSection = document.querySelector('#project');
const prImg = document.querySelector('#pr-img');
const prName = document.querySelector('#pr-name');
const prDescription = document.querySelector('#pr-description');
const prDateCompleted = document.querySelector('#pr-date');
const prContent = document.querySelector('#pr-content');

//Things for section 2
const pr1Img = document.querySelector('#card1-img');
const pr1Name = document.querySelector('#card1-name');
const pr1Description = document.querySelector('#card1-description');

const pr2Img = document.querySelector('#card2-img');
const pr2Name = document.querySelector('#card2-name');
const pr2Description = document.querySelector('#card2-description');

const pr3Img = document.querySelector('#card3-img');
const pr3Name = document.querySelector('#card3-name');
const pr3Description = document.querySelector('#card3-description');

const card1Data = { image: pr1Img, name: pr1Name, description: pr1Description };
const card2Data = { image: pr2Img, name: pr2Name, description: pr2Description };
const card3Data = { image: pr3Img, name: pr3Name, description: pr3Description };

let pr1 = {};
let pr2 = {};
let pr3 = {};
let pr4 = {};

const setProject = ({ name, description, content, image, completed_on }) => {
    prSection.innerHTML = `<h1 id="pr-name" class="project-title">${name}</h1>
    <div class="prDiv">
        <p id="pr-description" class="project-description grey-color">${description}</p>
        <p><strong>Completed on </strong><span id="pr-date" class="completed-on grey-color">${completed_on}</span></p>
    </div>
    <img id="pr-img" src="${image}" class="card-img-top" alt="Project image">
    <p id="pr-content" class="project-content grey-color">${content}</p>`;
}

const assignCard = (card, { image, name, description }) => {
    card.image.setAttribute('src', image);
    card.name.innerHTML = name;
    card.description.innerHTML = description;
}

const addDots = () => {
    const loading = document.querySelector('#loader');
    if (loading.innerHTML === 'Loading Project...') loading.innerHTML = 'Loading Project';
    else loading.innerHTML += '.';
}
const moveLoader = () => {
    intervalId = setInterval(addDots, 1000);
}

window.onload = () => {
    moveLoader();
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            pr4 = data[0];
            pr3 = data[1];
            pr2 = data[2];
            pr1 = data[3];
        })
        .then(() => {
            setProject(pr1);
            clearInterval(intervalId);
            assignCard(card1Data, pr2);
            assignCard(card2Data, pr3);
            assignCard(card3Data, pr4);
            console.log('hey, everything loaded')
        })
        .catch((err) => console.log(err));
};