document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault()
})

const inputs = document.querySelectorAll('.input')
const submit = document.querySelector('.submit')
const requiredField = document.querySelectorAll('.required-field')

inputs.forEach((input, index) => {
    submit.addEventListener('click', () => {
        if (input.value === "") {
            input.classList.remove('green-border')
            input.classList.add('red-border')
            requiredField[index].classList.add('visible')
        } else {
            input.classList.remove('red-border')
            input.classList.add('green-border')
            requiredField[index].classList.remove('visible')
        }
    })
})