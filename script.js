// for mobile hamburger navbar link

const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const hamLink = document.getElementsByClassName('hamburger-link')[0];

hamburgerIcon.addEventListener('click', () => {
    hamLink.classList.toggle('active');
})



// For desktop dropdown navigation links

const navLinkOne = document.getElementsByClassName('toggle-button')[0];
const navLinksOne = document.getElementsByClassName('nav_list')[0];
const navLinkIconOne = document.getElementById('nav_link_icon');

const navLinkTwo = document.getElementsByClassName('toggle-button')[1];
const navLinksTwo = document.getElementsByClassName('nav_list')[1];

const navLinkThree = document.getElementsByClassName('toggle-button')[2];
const navLinksThree = document.getElementsByClassName('nav_list')[2];

navLinkOne.addEventListener('click', ()=> {
    navLinksOne.classList.toggle('active');
    navLinkIconOne.classList.toggle('active');
})

navLinkTwo.addEventListener('click', ()=> {
    navLinksTwo.classList.toggle('active');
})

navLinkThree.addEventListener('click', ()=> {
    navLinksThree.classList.toggle('active');
})