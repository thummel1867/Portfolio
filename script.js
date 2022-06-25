//links
const opening = document.querySelector('#intro-h1')
const bioNav = document.querySelector('#bio-nav')
const projectsNav = document.querySelector('#projects-nav')
const navBtn = document.querySelector('#nav-button')

//navbar links
const bioNavBar = document.querySelector('#bio-nav2') 
const projectNavBar = document.querySelector('#projects2')


//pages
const openingDiv = document.querySelector('#intro-page') //intro page
const firstNav = document.querySelector('#nav-page') // nav page
const btmNav = document.querySelector('.page-nav') //bottom nav
const projects = document.querySelector('#projects-sec') //projects page
const bioMain = document.querySelector('#bio')//bio page



opening.addEventListener('click', introClick)
bioNav.addEventListener('click', bioMainClick)
projectsNav.addEventListener('click', projectsMainClick)
bioNavBar.addEventListener('click', bioNavClick)
projectNavBar.addEventListener('click', projectNavClick)
navBtn.addEventListener('click', navBtnFun)


function introClick() {
    openingDiv.classList.add('hide')
    firstNav.classList.remove('hide')
}

function bioMainClick () {
    firstNav.classList.add('hide')
    projects.classList.add('hide')
    btmNav.classList.remove('hide')
    bioMain.classList.remove('hide')
}

function projectsMainClick () {
    firstNav.classList.add('hide')
    projects.classList.remove('hide')
    btmNav.classList.remove('hide')
    bioMain.classList.add('hide')
}

function bioNavClick () {
    firstNav.classList.add('hide')
    projects.classList.add('hide')
    bioMain.classList.remove('hide')
    openingDiv.classList.add('hide')
}

function projectNavClick () {
    openingDiv.classList.add('hide')
    firstNav.classList.add('hide')
    projects.classList.remove('hide')
    btmNav.classList.remove('hide')
    bioMain.classList.add('hide')
}

function navBtnFun () {
    openingDiv.classList.add('hide')
    firstNav.classList.remove('hide')
    bioMain.classList.add('hide')
}


//map out what needs to be linked where

//navbar - hover over and turns different color

//hide /appear
//only thing you see when you come to the page is the name 
//on click brings to link
//link disappears when nav is clicked 
//bio and projects need to appear when clicked

//nav switch needs to always bring you to the nav screen
//Thomas Hummel on opening page needs to switch to link page 
//opening page 
    //bio needs to bring you to bio page
    //projects to projects page
    //github to my github
    //cv to my resume
    //linkedin to my linkedin

//bio page / projects page
    //nav bar needs to bring you to the proper link


