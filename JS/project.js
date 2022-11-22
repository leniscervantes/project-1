const prImg = document.querySelector('#pr-img')
const prName = document.querySelector('#pr-name')
const prDescription = document.querySelector('#pr-description')
const prDateCompleted = document.querySelector('#pr-date')
const prContent = document.querySelector('#pr-content')


let pr1 = {}
let pr2 = {}
let pr3 = {}
let pr4 = {}

const prSection = document.querySelector('#project')
const setProject = ({ name, description, content, image, completed_on }) => {
    prSection.innerHTML = `<h1 id="pr-name" class="project-title">${name}</h1>
    <div class="prDiv">
        <p id="pr-description" class="project-description grey-color">${description}</p>
        <p><strong>Completed on </strong><span id="pr-date" class="completed-on grey-color">${completed_on}</span></p>
    </div>
    <img id="pr-img" src="${image}" class="card-img-top" alt="Project image">
    <p id="pr-content" class="project-content grey-color">${content}</p>`
}

window.onload = () => {
    console.log('hey, everything loaded')
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            pr4 = data[0]
            pr3 = data[1]
            pr2 = data[2]
            pr1 = data[3]
        })
        .then(() => {
            setProject(pr1)
        })
        .catch((err) => console.log(err));
};