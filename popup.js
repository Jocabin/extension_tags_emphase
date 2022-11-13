const button = document.getElementById("emphase")
const input = document.getElementById("in")

button.addEventListener("click", () => {
    let elements = document.body.querySelectorAll(input.value.toString())

    document.querySelectorAll('*').forEach(el => {
        el.classList.remove('focusedElements')
    })

    elements.forEach(el => {
        el.classList.add('focusedElements')
    })
})