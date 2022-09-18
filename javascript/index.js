topCloud = document.querySelector('.top-cloud');
bottomCloud = document.querySelector('.bottom-cloud');
skillRows = document.querySelectorAll('.skill-row');

let posTop = topCloud.getBoundingClientRect().x;
let posBottom = bottomCloud.getBoundingClientRect().x;

let xTop = 0;
let xBottom = 0;

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
    if(xTop <= -400){
        console.log("Top limit reached")
        topCloud.getBoundingClientRect().x = posTop;
        xTop = 0;
        }

    topCloud.style.transform = `translateX(${xTop}px)`;
    xTop-= .1;
    requestAnimationFrame(moveLeft);
};

let moveRight = () =>{
    if(xBottom >= 400){
        console.log("Bottom limit reached")
        bottomCloud.getBoundingClientRect().x = posBottom;
        xBottom = 0;
    }
    bottomCloud.style.transform = `translateX(${xBottom}px)`;
    xBottom += .15;
    requestAnimationFrame(moveRight);
};

requestAnimationFrame(moveLeft);
requestAnimationFrame(moveRight);