
const pr1Img = document.querySelector('#card1-img')
const pr1Name = document.querySelector('#card1-name')
const pr1Description = document.querySelector('#card1-description')

const pr2Img = document.querySelector('#card2-img')
const pr2Name = document.querySelector('#card2-name')
const pr2Description = document.querySelector('#card2-description')

const pr3Img = document.querySelector('#card3-img')
const pr3Name = document.querySelector('#card3-name')
const pr3Description = document.querySelector('#card3-description')

const card1Data = { image: pr1Img, name: pr1Name, description: pr1Description }
const card2Data = { image: pr2Img, name: pr2Name, description: pr2Description }
const card3Data = { image: pr3Img, name: pr3Name, description: pr3Description }

let pr1 = {}
let pr2 = {}
let pr3 = {}
let pr4 = {}


// const assignCard1 = ({ image, name, description }) => {
//     pr1Img.setAttribute("src", image)
//     pr1Name.innerHTML = name
//     pr1Description.innerHTML = description
// }
// const assignCard2 = ({ image, name, description }) => {
//     pr2Img.setAttribute('src', image)
//     pr2Name.innerHTML = name
//     pr2Description.innerHTML = description
// }
// const assignCard3 = ({ image, name, description }) => {
//     pr3Img.setAttribute('src', image)
//     pr3Name.innerHTML = name
//     pr3Description.innerHTML = description
// }

const assignCard = (card, { image, name, description }) => {
    card.image.setAttribute('src', image)
    card.name.innerHTML = name
    card.description.innerHTML = description
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
            assignCard(card1Data, pr1)
            assignCard(card2Data, pr2)
            assignCard(card3Data, pr3)
        })
        .catch((err) => console.log(err));
};
