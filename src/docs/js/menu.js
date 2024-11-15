function toggleMenu() {
    const menu = document.getElementById("menu");
    const botaoAbrirMenu = document.getElementById("botao_abrir_menu");

    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        botaoAbrirMenu.classList.remove("flex");
        botaoAbrirMenu.classList.add("hidden");
    } else {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        botaoAbrirMenu.classList.remove("hidden");
        botaoAbrirMenu.classList.add("flex");
    }
}