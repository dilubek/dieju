// Definindo a data de início do relacionamento
const startDate = new Date("2025-01-28");

// Função para calcular a diferença de dias
function calculateDays() {
    const today = new Date();
    const timeDifference = today - startDate; // Diferença em milissegundos
    const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convertendo para dias
    return daysTogether;
}

// Atualizando o contador no HTML
document.getElementById("time-together").textContent = `${calculateDays()} dias`;
