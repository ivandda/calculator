let buttons = document.querySelectorAll('button')
let numberOfButtons = buttons.length
let arrTopDisplay = []
let topDisplay = document.querySelector("#top-numbers")
console.log(topDisplay)
console.log(buttons)
console.log(numberOfButtons)

function submit(){
    if(this.innerText === '=') {
        // RESOLVER LA CUENTA
        topDisplay.textContent = 'RESULT'
        arrTopDisplay = []
    }

    else if(this.innerText === 'C') {
        arrTopDisplay.pop()
        topDisplay.textContent = arrTopDisplay.join('')
    }

    else if(this.innerText === 'AC') {
        topDisplay.textContent = ''
        // RESOLVER LA CUENTA
        arrTopDisplay = []
    }

    else {
        arrTopDisplay.push(this.innerText)
        console.log(arrTopDisplay.join(''))
        topDisplay.textContent = arrTopDisplay.join('')
    }

    console.log(arrTopDisplay)
}


for(let i=0; i < numberOfButtons; i++){
    buttons[i].addEventListener('click',submit)
}

