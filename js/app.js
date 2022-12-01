/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const header = document.querySelector('header');


//  End Global Variables
 //--------------------------------------------------------------
// Build menu 

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment(); //create fragment to hold the sections navbar

for(let i = 1; i <= sections.length; i++){                         //create 4 sections in 4 colmns
    const newSection = document.createElement('li');
    newSection.innerHTML = 'Section ' + i;          // append text in columns element
    
    fragment.appendChild(newSection);
}

const navbarList = document.getElementById('navbar__list'); //get navbarList
navbarList.appendChild(fragment);  //append the columns in the navbar

document.querySelector('ul').style.cssText = 'color: black; font-size: 100%';


//--------------------------------------------------------------
//  Start Helper Functions


//function for change style when mouseover
function mouseOver(event) { 
  event.target.style.cssText = 'color: white; background-color: black;';
}

//function for change style when mouseOut
function mouseOut(event) {
  event.target.style.cssText = 'color: black; background-color: white';
}

//dunction for highlight the text of active section
function highlight(event) {
    for(let i=0; i< lis.length; i++){
        lis[i].addEventListener("mouseenter",mouseOver);
        lis[i].addEventListener("mouseleave", mouseOut);
        lis[i].style.cssText = 'color : black; backgroundColor: white';
    }
    event.target.removeEventListener("mouseenter",mouseOver);
    event.target.removeEventListener("mouseleave", mouseOut);
    event.target.style.backgroundColor = '#cc1';
}

//function for button to moveUp
function buttonScrolling() {
    if(scrollY>2500)
        document.querySelector('.btn-1').style.display = 'block';
    else
        document.querySelector('.btn-1').style.display = 'none';
}

        //function for display and hide the navebar
function hide(e) {
    if(e.clientY<300)
        header.style.display = 'block';
    else
        header.style.display = 'none';
}

function goUp(event){
    event.target.style.backgroundColor = 'white';
    document.body.scrollTop = 0;
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// Add class 'active' to section when near top of viewport
document.body.addEventListener('mousemove', function(event){hide(event);});

//----------------------------------------------------------------------
// Scroll to anchor ID using scrollTO event

const btn = document.createElement('button');
btn.innerHTML='UP';
btn.style.cssText = 'background-color: #cc1; color: black; padding: 15px; font-size: 18px; position: fixed; bottom: 20px;display: none;';
document.querySelector('.main__hero').appendChild(btn);
btn.className="btn-1";

addEventListener('scroll', function(event){buttonScrolling(event)});

/**
 * End Main Functions
 * 
 * 
*/

//usin getBoundingClientRect

window.onscroll = function() {
    sections.forEach(function (x){
        if(x.getBoundingClientRect().top > -300 && x.getBoundingClientRect().top <150)
            x.classList.add("your-active-class");
        else
            x.classList.remove("your-active-class");
            
    });
};



//Begin Events
const lis = document.querySelectorAll('li');

for(let i=0; i< lis.length; i++){
    lis[i].addEventListener("mouseenter",mouseOver);
    lis[i].addEventListener("mouseleave", mouseOut);
}


//-----------------------------------------------------------------
// Scroll to section on link click
const sec = document.querySelector('section');

for(let i=0 ;i<lis.length; i++){
    
    lis[i].addEventListener('click', function(event) {
        document.getElementById(`section${i+1}`).scrollIntoView({behavior: "smooth"});
//   document.location.href =`#section${i+1}` ; 
    highlight(event);
    });
}
//----------------------------------------------------------------
const btnUp = document.querySelector('.btn-1');
btnUp.addEventListener('click', function(event) {goUp(event)});