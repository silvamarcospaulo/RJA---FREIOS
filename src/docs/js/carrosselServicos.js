const servicos = [
    {
        titulo: "Válvula apn Knorr Volvo",
        descricao: "Serviço especializado em válvulas apn Knorr para veículos Volvo.",
        imagem: "./docs/images/servicos/Imagem 2.jpeg"
    },
    {
        titulo: "Válvula moduladora simples Volvo Knorr",
        descricao: "Manutenção e substituição de válvulas moduladoras simples Volvo Knorr.",
        imagem: "./docs/images/servicos/Imagem 1.jpeg"
    },
    {
        titulo: "Midi-servo Knorr constellation",
        descricao: "Serviço completo em midi-servos Knorr para veículos Constellation.",
        imagem: "./docs/images/servicos/Imagem 6.jpeg"
    },
    {
        titulo: "Válvula APS1 Wabco",
        descricao: "Reparos e ajustes em válvulas APS1 da Wabco.",
        imagem: "./docs/images/servicos/Imagem 3.jpeg"
    },
    {
        titulo: "Comando hidráulico",
        descricao: "Especialistas em serviços de comando hidráulico.",
        imagem: "./docs/images/servicos/Imagem 4.jpeg"
    },
    {
        titulo: "Compressor DAF Wabco",
        descricao: "Manutenção e recuperação de compressores DAF Wabco.",
        imagem: "./docs/images/servicos/Imagem 5.jpeg"
    },
    {
        titulo: "Compressor Wabco MBB",
        descricao: "Reparo especializado em compressores Wabco MBB.",
        imagem: "./docs/images/servicos/Imagem 9.jpeg"
    },
    {
        titulo: "Cuica 30x30",
        descricao: "Serviço de manutenção para cuicas de freio 30x30.",
        imagem: "./docs/images/servicos/Imagem 7.jpeg"
    },
    {
        titulo: "Válvula suspensão simples",
        descricao: "Serviço especializado em válvulas de suspensão simples.",
        imagem: "./docs/images/servicos/Imagem 8.jpeg"
    },
    {
        titulo: "Válvula APS remano",
        descricao: "Recondicionamento de válvulas APS.",
        imagem: "./docs/images/servicos/Imagem 13.jpeg"
    },
    {
        titulo: "Servo eletrônico MBB remano",
        descricao: "Manutenção e remanufatura de servos eletrônicos MBB.",
        imagem: "./docs/images/servicos/Imagem 10.jpeg"
    },
    {
        titulo: "Compressor MBB remano",
        descricao: "Recondicionamento e ajustes em compressores MBB.",
        imagem: "./docs/images/servicos/Imagem 11.jpeg"
    },
    {
        titulo: "Válvula moduladora dupla EBS remano",
        descricao: "Reparo e calibração de válvulas moduladoras duplas EBS.",
        imagem: "./docs/images/servicos/Imagem 12.jpeg"
    },
    {
        titulo: "Servo MBB automático remano",
        descricao: "Manutenção e ajustes em servos automáticos MBB recondicionados.",
        imagem: "./docs/images/servicos/Imagem 14.jpeg"
    },
    {
        titulo: "Retifica de compressor",
        descricao: "Serviço de retífica para todos os modelos de compressores.",
        imagem: "./docs/images/servicos/Imagem 1.jpeg"
    }
];

let servicoAtual = 0;

function atualizarCarrossel() {
    const servico = servicos[servicoAtual];
    document.getElementById("titulo-servico").innerText = servico.titulo;
    document.getElementById("titulo-descricao").innerText = servico.descricao;
    document.getElementById("imagem-do-carrossel").src = servico.imagem;
}

function proximoServico() {
    servicoAtual = (servicoAtual + 1) % servicos.length;
    atualizarCarrossel();
}

function anteriorServico() {
    servicoAtual = (servicoAtual - 1 + servicos.length) % servicos.length;
    atualizarCarrossel();
}

function mostrarServico(index) {
    servicoAtual = index;
    atualizarCarrossel();
}

// Adiciona timer automático de 5 segundos
let intervalo = setInterval(proximoServico, 5000);

// Pausa o carrossel ao passar manualmente
function pausarTimer() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoServico, 5000); // Reinicia o timer após 5 segundos
}

// Listeners para manualmente passar o carrossel
document.getElementById("botao-anterior").addEventListener("click", () => {
    anteriorServico();
    pausarTimer();
});

document.getElementById("botao-proximo").addEventListener("click", () => {
    proximoServico();
    pausarTimer();
});

atualizarCarrossel();