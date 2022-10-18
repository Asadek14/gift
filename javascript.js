let kito = document.getElementById("personB")
let kati = document.getElementById("personG")
let heart = document.getElementById("heart")
let number = 0

const moveThem = () => {

    if (number < 110)
    {
        number += 1
        kito.style.right = number + "px"
        setTimeout(moveThem, 40)
    }
}

setTimeout(moveThem, 40)

setTimeout(() => {heart.style.display = "block"}, 150 * 40)

