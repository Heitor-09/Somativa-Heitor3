const saudacao = document.querySelector("#saudacao-cafetaria");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
             "Bom dia!  O primeiro café é por nossa conta!";   
}else if(saudacao) {
    saudacao.textContent =
        hora >12 || 18
            "Boa tarde! Precisa de energia para programar?"
}else (saudacao) {
    saudacao.textContent =
        hora >18
             "Boa noite! Um descafeinado para não perder o sono?"
}

const cards = document.querySelectorAll("#banner-especialidade");
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.classList.add()
    });
    card.addEventListener("mouseout", () => {
        card.classList.remove()
        
    });
});

const inputQtd = document.querySelector("#qtd-cafes");

if (inputQtd ) {
    inputQtd.addEventListener("grupo-input", () => {
        const precoUnitario = 12.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

    
    });
}


