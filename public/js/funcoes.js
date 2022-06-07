// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "./../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "./../index.html";

}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function listarUsuarios() {
    fetch("usuarios/listar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    }).then(function (resposta) {
        return resposta.blob();


        // if (resposta.ok) {
        //     console.log("A resposta foi OK!")
        //     console.log("resposta: ", resposta.blob());
        //     resposta.blob().then(function (myBlob) {
        //         console.log(myBlob)
        //     },
        // } else {
        //     throw ("Houve um erro ao tentar listar os usuarios!");
        // }
    }).catch(function (resposta) {
        // console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

}
