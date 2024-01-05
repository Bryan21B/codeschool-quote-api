const submitButton = document.getElementById("create-user")
const newUserContainer = document.getElementById("new-user")

submitButton.addEventListener("click", () => {
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const email = document.getElementById("email").value

    fetch(`/api/quotes?quote=${quote}&person=${person}`, {
        method: "POST",
    })
        .then((response) => response.json())
        .then(({ user }) => {
            const newUser = document.createElement("div")
            newUser.innerHTML = `<h3>Congrats, you've created a new user!</h3> `
            newUserContainer.appendChild(newUser)
        })
})
