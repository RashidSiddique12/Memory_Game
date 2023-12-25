const squares = document.querySelector(".squares");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const squareCount = colorsPicklist.length;

let reveledCount = 0;
let activeSquare = null;
let awatingEndOfMove = false;

const builtSquare = (color)=>{
    const square = document.createElement('div');
    square.classList.add("square");
    square.setAttribute('data-color', color);
    square.setAttribute('data-reveled', "false");

    square.addEventListener('click', (e)=>{
        if(awatingEndOfMove || square.getAttribute('data-reveled') === 'true' || square === activeSquare){
            return;
        }

        square.style.backgroundColor = color;

        if(!activeSquare){
            activeSquare = square;
            return;
        }

        const colorToMatch = activeSquare.getAttribute('data-color');
        if(colorToMatch === color){
            square.setAttribute('data-reveled', "true");
            activeSquare.setAttribute('data-reveled', "true");

            activeSquare = null;
            awatingEndOfMove = false;
            reveledCount +=2;

            if(reveledCount === squareCount){
                alert("You win Refresh if want to play again");
            }
            return;
        }

        awatingEndOfMove = true;

        setTimeout(()=>{
            square.style.backgroundColor = null;
            activeSquare.style.backgroundColor = null;

            awatingEndOfMove = false;
            activeSquare = null;

        },1000)
    })

return square;

}

for(let i=0; i<squareCount; i++){
    const randomIndex = Math.floor(Math.random()*colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const sqaure = builtSquare(color);
    console.log(color);

    colorsPicklist.splice(randomIndex, 1);
    squares.appendChild(sqaure);
}