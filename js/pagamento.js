function finalizar(){
    var nomeCompleto = document.getElementById("username").value;
    var endereco = document.getElementById("endereco").value;
    var cpf = document.getElementById("cpf").value;
    var plano = document.getElementById("plano").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Verificar se todos os campos estão preenchidos
    if (nomeCompleto && endereco && cpf && email && senha) {
        // Simular o envio de informações de pagamento por e-mail
        alert("As informações de pagamento foram enviadas por e-mail.");
        
        // Redirecionar para a página de streaming após o alerta
        window.location.href = "/home.html";
    } else {
        alert("Por favor, preencha todos os campos antes de finalizar.");
    }
}