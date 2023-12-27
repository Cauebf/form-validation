document.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault()
})

const inputs = document.querySelectorAll('.input')
const submit = document.querySelector('.submit')
const requiredField = document.querySelectorAll('.required-field')

removeClassError()

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

        if (inputs[3].classList.contains('red-border')){
            submit.classList.add('error')
        }else {
            submit.classList.remove('error')        
        }
    })
})

function removeClassError() {
    submit.classList.remove('error')
}