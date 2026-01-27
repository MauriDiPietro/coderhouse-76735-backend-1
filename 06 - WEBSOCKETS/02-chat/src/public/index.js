const socket = io();

let username = null;

const inputMessage = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

btn.addEventListener('click', ()=>{
    const message = {
        username,
        message: inputMessage.value
    }
    socket.emit('newMessage', message);
    inputMessage.value = '';
})

Swal.fire({
  title: "¡Bienvenido al chat!",
  text: "Ingresa tu nombre de usuario:",
  input: "text",
  inputValidator: (value) => {
    if (!value) return "Debes ingresar un nombre de usuario";
  },
}).then((input) => {
  username = input.value;
  socket.emit("newUserFront", username);
});

socket.on("newUser", (username) => {
  Toastify({
    text: `${username} se ha unido al chat`,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});


socket.on('messages', (messages) => {
    actions.innerHTML = '';
    const chatRender = messages.map((msg) => {
        return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`
    }).join(' ')

    output.innerHTML = chatRender;
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing', username);
})

socket.on('typingInput', (userTyping)=>{
    actions.innerHTML = `<p><em>${userTyping} está escribiendo...</em></p>`;
})