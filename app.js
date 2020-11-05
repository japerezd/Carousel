const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.arrow-left i');
const rightArrow = document.querySelector('.arrow-right i');
const images = document.querySelectorAll('.carousel img');
const divPoints = document.querySelector('.points');

// I have to generate points first before to add a class to a specific point
generatePoints();
const points = divPoints.querySelectorAll('div');
points[0].classList.add('active');

let index = 0;

leftArrow.addEventListener('click', translateRight);
rightArrow.addEventListener('click', translateLeft);

function checkArrow(){
    const imageArray = [...images];

    if(index === imageArray.indexOf(images[0])){
        leftArrow.parentElement.classList.add('active');
        return;
    }
    
    if(index === imageArray.indexOf(images[images.length -1])){
        rightArrow.parentElement.classList.add('active');
        return; 
    }
    
    leftArrow.parentElement.classList.remove('active')
    rightArrow.parentElement.classList.remove('active');
}

function translateLeft(){
    index++;
    checkArrow();
    carousel.style.transform += 'translateX(-1200px)';

    points[index-1].nextElementSibling.classList.add('active');
    points[index].previousElementSibling.classList.remove('active');
}

function translateRight(){
    index--;
    checkArrow();
    carousel.style.transform += 'translateX(1200px)';
    
    points[index+1].previousElementSibling.classList.add('active');
    points[index].nextElementSibling.classList.remove('active');

}

function generatePoints(){
    images.forEach(img => {
        divPoints.innerHTML += `<div> </div>`;
    });
}

