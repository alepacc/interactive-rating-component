const ratingState = document.querySelector('.rating-state')
const ratingBtns = document.querySelectorAll('.rating__btn')
const submitBtn = document.querySelector('button[type="submit"]')

const thankState = document.querySelector('.thank-state')
const ratingSlct = document.querySelector('.result')
let val = ''

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // btn.classList.add('selected')
        val = btn.innerText.trim()
        console.log('focused button value:', val)

    })
})

submitBtn.addEventListener('click', e => {
    e.preventDefault()

    if (val){
        ratingSlct.innerText = val
        ratingState.style.display = 'none'
        thankState.style.display = 'flex'
    } else alert('select a rating')

    console.log("pressed")
})