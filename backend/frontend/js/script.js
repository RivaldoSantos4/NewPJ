//login elements 

const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector("login__input")

const user = { id: ""}

const handleSubmit = (event) => {event.preventDefault}

loginForm.addEventListener("submit", handleSubmit)
