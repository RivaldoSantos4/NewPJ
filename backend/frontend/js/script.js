//login elements 

const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")
const chat = document.querySelector(".chat")


const colors = [
    "cadetblue",
    "darkgoldenrod",
    "darkkhaki",
    "cornflowerblue",
    "hotpink",
    "gold"
]
const user = { id: "", name: "", color: ""}

let websocket


const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}



const handleSubmit = (event) => {  event.preventDefault()
    user.name = loginInput.value

    user.id = crypto.randomUUID()

    user.color = getRandomColor()

    login.style.display = "none"

    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")

    websocket.send(´usuario: ${user.name} entrou no chat!)

    console.log(user)
}


loginForm.addEventListener("submit", handleSubmit)
