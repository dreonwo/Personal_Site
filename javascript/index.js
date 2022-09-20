topCloud = document.querySelector('.top-cloud');
bottomCloud = document.querySelector('.bottom-cloud');
skillRows = document.querySelectorAll('.skill-row');

let posTop = topCloud.getBoundingClientRect().x;
let posBottom = bottomCloud.getBoundingClientRect().x;

let xTop = 0;
let xTopSpeed = .15;
let xBottom = 0;
let xBottomSpeed = .2;

skillRows.forEach((skillRow)=>{
    initialColor = skillRow.style.backgroundColor;
    skillRow.addEventListener('mouseover',()=>{
        skillRow.style.transform = 'scale(1.1)';
        skillRow.style.backgroundColor = '#F8F8FF';
    });

    skillRow.addEventListener('mouseout',()=>{
        skillRow.style.transform = 'scale(1)';
        skillRow.style.backgroundColor = initialColor;
    });

});

let moveLeft = () =>{
    if(xTop < -400 || xTop > 0){
        xTopSpeed *= -1;
    }
    
    topCloud.style.transform = `translateX(${xTop}px)`;
    xTop += xTopSpeed;
    requestAnimationFrame(moveLeft);
};

let moveRight = () =>{
    if(xBottom > 400 || xBottom < 0){
        xBottomSpeed *= -1;
    }
    bottomCloud.style.transform = `translateX(${xBottom}px)`;
    xBottom += xBottomSpeed;
    requestAnimationFrame(moveRight);
};

requestAnimationFrame(moveLeft);
requestAnimationFrame(moveRight);