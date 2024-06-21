let username = document.getElementById("username");
let password = document.getElementById("password");
const msgErro = document.createElement("d");
msgErro.classList = "alert alert-danger w-100 p-2"
msgErro.role = "alert"
msgErro.innerHTML = "Username ou Senha incorreta";
const inputs = document.getElementById("inputs");

function entrar() {
    if (username.value.trim() == "admim" && password.value.trim() == "admim") {
        window.location.href = "home.html";
    } else {
        inputs.append(msgErro);
    }
}

