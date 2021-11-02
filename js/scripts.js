window.addEventListener('load', function () {
    const form = document.querySelector('.wrapper');


    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (e.target.classList.contains('wrapper')) {
            if (e.target.children.email) {
                console.log(e.target.children.email.value)

            }
            console.log("123")
        }
        console.log(e)
    })


})
