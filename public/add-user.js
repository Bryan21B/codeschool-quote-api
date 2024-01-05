const submitButton = document.getElementById("create-user")
const newUserContainer = document.getElementById("new-user")

submitButton.addEventListener("click", () => {
    const firstName = document.getElementById("firstname").value
    const lastName = document.getElementById("lastname").value
    const email = document.getElementById("email").value

    fetch(`/api/users?firstName=${firstName}&lastName=${lastName}`, {
        method: "POST",
    })
        .then((response) => response.json())
        .then(({ user }) => {
            const newUser = document.createElement("div")
            newUser.innerHTML = `<h3>Congrats, you've created a new user!</h3>
    <div class="user-firstName">${user.firstName}</div>
    <div class="user-lastName">- ${user.lastName}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p> `
            newUserContainer.appendChild(newUser)
        })
})
