const inputs = document.querySelectorAll('.input')
const submit = document.querySelector('.submit')

submit.addEventListener('click', e => {
    e.preventDefault()
    
    inputs.forEach((input) => {
        if (input.value) {
            input.classList.add('valid')
            input.nextElementSibling.classList.remove('visible')
            submit.classList.remove('error')
            console.log(input);
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid')
            input.nextElementSibling.classList.add('visible')
            submit.classList.add('error')
            console.log(input);
        }
    })
})