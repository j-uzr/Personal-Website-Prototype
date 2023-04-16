/*

selector - define the pattern to select elements to which a set of CSS rules are then applied.
CSS selectors can be grouped into the following categories based on the type of elements they can select.

document.querySelector() - returns the first Element within the document that matches the specified selector

document.querySelectorAll()  - returns the Elements in a static NodeList within the document that matches 
the specified group of selectors

addEventListener('click', ...) waits for a button to be clicked to do something

*/

const sections = document.querySelectorAll('.section'); // select each section (page)
const sectBtns = document.querySelectorAll('.controlls'); // select parent container of buttons
const sectBtn = document.querySelectorAll('.control'); // select each individual buttons
const allSections = document.querySelector('.main-content'); // select main content

// function to transition page to location of active button
function PageTransitions(){
    // will remove the "active-btn" class from the currently active button (if there is one), and 
    //  then add the "active-btn" class to the button that was just clicked on.
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        }) 
    }

    // Sections Active

    // "target" refers to element where the event occured & "dataset" refers to data-id element 

    allSections.addEventListener('click', (e) => {
            const id = e.target.dataset.id; 
            if(id){

                // Removes the "active" class from all buttons in the sectBtns array using the forEach method.
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                })
                // Adds the "active" class to the clicked button using e.target.classList.add('active').
                e.target.classList.add('active')

                // Removes the "active" class from all sections in the sections array using the forEach method.
                sections.forEach((section) =>{
                    section.classList.remove('active')
                })

                // Adds the "active" class to the section with the corresponding id using 
                // document.getElementById(id).classList.add('active').
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
}

PageTransitions();