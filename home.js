let listaDeContatos = [];
let index = 0;
let editando = false;
let mensagem = false;

let posicaoAtual = 0;

const inputNome = document.getElementById("name");
const inputSobrenome = document.getElementById("lastName");
const inputEndereco = document.getElementById("address");
const inputTelefone = document.getElementById("phone");

const msgErro = document.createElement("div");
msgErro.style = "color : red;"
msgErro.innerHTML = "Preencha os campos obrigatórios";
const form = document.getElementById("form-inputs");

statusInput(false);

//incluir
//tonar os inputs e os botões salvar e cancelar habilitados
function incluir() {
    console.log("incluindo...");
    statusInput(true);
    habilitarBotoes(true);
    limparInput();
    editando = true;
    if (listaDeContatos.length >= 1) {
        console.log("condição atendida")
        index++;
    }
    if(mensagem == true){
        form.removeChild(msgErro);
    }
}

//editar o contato
function editar() {
    console.log("editando...");
    editando = true;
    habilitarBotoes(true);
    statusInput(true);
}

//salvar o contato na lista
function salvar() {
    if (inputNome.value != '' && inputSobrenome.value != '' && inputEndereco.value != '' && inputTelefone.value != '') {
        console.log("salvando...")
        let contato = {
            nome: inputNome.value,
            sobrenome: inputSobrenome.value,
            endereco: inputEndereco.value,
            telefone: inputTelefone.value
        }
        if (editando) {
            listaDeContatos[index] = contato;
        } else {
            listaDeContatos.push(contato);
        }

        editando = false;
        habilitarBotoes(false);
        statusInput(false);
        if(mensagem == true){
            form.removeChild(msgErro);
        }
        mensagem = false;
    } else {
        form.appendChild(msgErro);
        mensagem = true;
    }
}

//cancelar a operação
function cancelar() {
    if (editando) {
        habilitarBotoes(false);
        statusInput(false);
        if(index != 0){
            index--;
        }
        if (mensagem == true) {
            form.removeChild(msgErro);
        }
    } else {
        habilitarBotoes(false);
        limparInput();
        statusInput(false);
        if(index != 0){
            index--;
        }
        if (mensagem == true) {
            form.removeChild(msgErro);
        }
    }
}

//excluir o contato da lista    
function excluir() {
    if (listaDeContatos.length == 0) {
        mensagem = true;
        msgErro.innerHTML = "Não existe contatos na lista";
        form.appendChild(msgErro);
    } else {
        listaDeContatos.splice(index, 1);
        if (index != 0){
            index--;
        }
        limparInput();
        imprimir(index);
        mensagem = false;
        if(mensagem == true){
            form.removeChild(msgErro);
        }
    }
}

function btProximo() {
    if (index < listaDeContatos.length - 1) {
        index++;
        console.log(index);
        imprimir(index);
    }
}

function btAnterior() {
    if (index > 0) {
        index--;
        console.log(index);
        imprimir(index);
    }
}

function primeiroElemento() {
    index = 0;
    imprimir(index);
}

function ultimoElemento() {
    index = listaDeContatos.length - 1;
    imprimir(index);
}

function imprimir(index) {
    if (listaDeContatos.length > 0){
        document.getElementById("name").value = listaDeContatos[index].nome;
        document.getElementById("lastName").value = listaDeContatos[index].sobrenome;
        document.getElementById("address").value = listaDeContatos[index].endereco;
        document.getElementById("phone").value = listaDeContatos[index].telefone;
    }
}

function limparInput() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = '';
    });
}

function habilitarBotoes(emEdicao) {
    document.getElementById("incluir").disabled = emEdicao;
    document.getElementById("excluir").disabled = emEdicao;
    document.getElementById("editar").disabled = emEdicao;

    document.getElementById("salvar").disabled = !emEdicao;
    document.getElementById("cancelar").disabled = !emEdicao;

}

function statusInput(emEdicao) {
    inputNome.disabled = !emEdicao;
    inputSobrenome.disabled = !emEdicao;
    inputEndereco.disabled = !emEdicao;
    inputTelefone.disabled = !emEdicao;
}
