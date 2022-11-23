
let pr1Img = document.querySelector('#card1-img')
let pr1Name = document.querySelector('#card1-name')
let pr1Description = document.querySelector('#card1-description')
let pr1anchor = document.querySelector('#a-pr1')

let pr2Img = document.querySelector('#card2-img')
let pr2Name = document.querySelector('#card2-name')
let pr2Description = document.querySelector('#card2-description')
let pr2anchor = document.querySelector('#a-pr2')

let pr3Img = document.querySelector('#card3-img')
let pr3Name = document.querySelector('#card3-name')
let pr3Description = document.querySelector('#card3-description')
let pr3anchor = document.querySelector('#a-pr3')

let card1Data = { image: pr1Img, name: pr1Name, description: pr1Description, anchor: pr1anchor }
let card2Data = { image: pr2Img, name: pr2Name, description: pr2Description, anchor: pr2anchor }
let card3Data = { image: pr3Img, name: pr3Name, description: pr3Description, anchor: pr3anchor }

let pr1 = {}
let pr2 = {}
let pr3 = {}
let pr4 = {}
let arrayOfPrjs = [];

const assignPrjs = (data) => {
    pr4 = data[0];
    pr3 = data[1];
    pr2 = data[2];
    pr1 = data[3];
    arrayOfPrjs = [pr4, pr3, pr2, pr1]
}

const assignCard = (card, { image, name, description, uuid }) => {
    card.image.setAttribute('src', image)
    card.name.innerHTML = name
    card.description.innerHTML = description
    let newAnc = `../HTML/projectPage.html?prjId=${uuid}`
    card.anchor.setAttribute('href', newAnc)
}

window.onload = () => {
    console.log('hey, everything loaded')
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            assignPrjs(data)
            assignCard(card1Data, pr1)
            assignCard(card2Data, pr2)
            assignCard(card3Data, pr3)
        })
        .catch((err) => console.log(err));
};
