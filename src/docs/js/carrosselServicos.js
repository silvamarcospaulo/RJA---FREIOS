const servicos = [
    {
        titulo: "Reparo de Freios",
        descricao: "Garantimos a segurança do seu veículo com manutenção especializada nos sistemas de freios.",
        imagem: "https://via.placeholder.com/600x400?text=Serviço+1"
    },
    {
        titulo: "Sistema Hidráulico",
        descricao: "Soluções completas para sistemas hidráulicos em equipamentos pesados.",
        imagem: "https://via.placeholder.com/600x400?text=Serviço+2"
    },
    {
        titulo: "Manutenção Pneumática",
        descricao: "Expertise em sistemas pneumáticos para máxima eficiência operacional.",
        imagem: "https://via.placeholder.com/600x400?text=Serviço+3"
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

atualizarCarrossel();