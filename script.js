const botaoAtualizar =
document.getElementById("atualizar");

const botaoTema =
document.getElementById("tema");

const campoNome =
document.getElementById("novoNome");

const nomePerfil =
document.getElementById("nomePerfil");

const profissao =
document.getElementById("profissao");

const mensagem =
document.getElementById("mensagem");

const perfil =
document.querySelector(".perfil");



//const novoNome = campoNome.value;

botaoAtualizar.addEventListener(
    "click",
    function () {

        if (campoNome.value === "" ) {
            mensagem.textContent = "digite um nome antes de atualizar.";

            return;
        }

        nomePerfil.textContent = 
        campoNome.value;

        profissao.textContent =
        "desenvolvedor(a) Web";

        perfil.classList.add(
            "atualizado"    
        );
        mensagem.textContent =
        "perfil atualizado com sucesso!";

    }
);


//autofill do nome do perfil
const novoNome = campoNome.value;


//botao de tema escuro
botaoTema.addEventListener(
    "click",
    function () {

        document.body
        .classList.
        toggle("tema-escuro");
    }   
);


//nome mudando enquanto digita
campoNome.addEventListener(
    "input",
    function () {

        nomePerfil.textContent =
        campoNome.value;
    }
);

campoNome.addEventListener(
    "focus",
    function () {

        campoNome.style.border =
        "2px solid #0011ff";
    }
);

campoNome.addEventListener(
    "blur",
    function () {

        campoNome.style.border =
        "1px solid #3a3a3a";
    }
);