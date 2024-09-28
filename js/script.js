function salvarCadastro() {
    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;
    const veiculo = {
        placa: placa,
        proprietario: proprietario,
        apartamento: apartamento,
        bloco: bloco,
        modelo: modelo,
        cor: cor,
        vaga: vaga
    };

    console.log("Cadastro realizado com sucesso:", veiculo);
    document.getElementById("modal-title").innerText = "Cadastro Concluido";
    document.getElementById("modal-message").innerText = "O veículo foi cadastrado com sucesso.";
    document.getElementById("customModal").style.display = "block";
    document.getElementById("cadastroForm").reset();
}

function fecharModal() {
    document.getElementById("customModal").style.display = "none";
}
