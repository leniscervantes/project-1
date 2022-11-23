let intervalId;
let projectId;
let mainPrj;
const prSection = document.querySelector('#project');
const prImg = document.querySelector('#pr-img');
const prName = document.querySelector('#pr-name');
const prDescription = document.querySelector('#pr-description');
const prDateCompleted = document.querySelector('#pr-date');
const prContent = document.querySelector('#pr-content');

const setProject = ({ name, description, content, image, completed_on }) => {
    prSection.innerHTML = `<h1 id="pr-name" class="project-title">${name}</h1>
    <div class="prDiv">
        <p id="pr-description" class="project-description grey-color">${description}</p>
        <p><strong>Completed on </strong><span id="pr-date" class="completed-on grey-color">${completed_on}</span></p>
    </div>
    <img id="pr-img" src="${image}" class="card-img-top" alt="Project image">
    <p id="pr-content" class="project-content grey-color">${content}</p>`;
}

const addDots = () => {
    const loading = document.querySelector('#loader');
    if (loading.innerHTML === 'Loading Project...') loading.innerHTML = 'Loading Project';
    else loading.innerHTML += '.';
}
const moveLoader = () => {
    intervalId = setInterval(addDots, 1000);
}

// const assignPrjs = (data) => {
//     pr4 = data[0];
//     pr3 = data[1];
//     pr2 = data[2];
//     pr1 = data[3];
//     arrayOfPrjs = [pr4, pr3, pr2, pr1]
// }
// const assignCard = (card, { image, name, description }) => {
//     card.image.setAttribute('src', image)
//     card.name.innerHTML = name
//     card.description.innerHTML = description
// }
const randomPrj = (arr) => {
    const pr = arr[Math.floor(Math.random() * arr.length)];
    return pr
}

const assignAllCards = (mainPrj) => {
    let newArr = arrayOfPrjs.filter((pr) => pr !== mainPrj)
    assignCard(card1Data, newArr[2]);
    assignCard(card2Data, newArr[1]);
    assignCard(card3Data, newArr[0]);
}

const setMainPrj = () => {
    const QueryString = window.location.search;
    const urlParams = new URLSearchParams(QueryString);
    projectId = urlParams.get('prjId')
    projectId ?
        mainPrj = arrayOfPrjs.filter((pr) => pr.uuid === projectId)[0]
        :
        mainPrj = randomPrj(arrayOfPrjs)
}

window.onload = () => {
    moveLoader();
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            assignPrjs(data);
            setMainPrj();
            setProject(mainPrj);
            clearInterval(intervalId);
            assignAllCards(mainPrj);
        })
        .catch((err) => console.log(err));
};