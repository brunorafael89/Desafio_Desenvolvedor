// Definindo variáveis
const distanciaTotal = 125; // Distância total entre Ribeirão Preto e Barretos em km
const velocidadeCarro = 90; // Velocidade do carro em km/h
const velocidadeCaminhao = 80; // Velocidade do caminhão em km/h
const atrasoPedagios = 3 * 5 / 60; // Atraso total dos pedágios do carro em horas (15 minutos)

// Calcula o tempo até o encontro
const velocidadeRelativa = velocidadeCarro + velocidadeCaminhao;
const tempoEncontro = distanciaTotal / velocidadeRelativa; // Tempo em horas

// Calcula o tempo total de viagem do carro, considerando o atraso
const tempoTotalCarro = tempoEncontro + atrasoPedagios;

// Calcula a distância percorrida por cada veículo até o encontro
const distanciaPercorridaCarro = velocidadeCarro * tempoTotalCarro;
const distanciaPercorridaCaminhao = velocidadeCaminhao * tempoEncontro;

// Calcula a distância de cada veículo de Ribeirão Preto no momento do encontro
const distanciaCarroDeRibeirao = distanciaPercorridaCarro;
const distanciaCaminhaoDeRibeirao = distanciaTotal - distanciaPercorridaCaminhao;

// Exibe os resultados
console.log(`Distância do carro a partir de Ribeirão Preto no momento do encontro: ${distanciaCarroDeRibeirao.toFixed(2)} km`);
console.log(`Distância do caminhão a partir de Ribeirão Preto no momento do encontro: ${distanciaCaminhaoDeRibeirao.toFixed(2)}`);

// Determina qual veículo está mais próximo de Ribeirão Preto
if (distanciaCarroDeRibeirao < distanciaCaminhaoDeRibeirao) {
    console.log('O carro estará mais próximo de Ribeirão Preto no momento do encontro.');
} else if (distanciaCarroDeRibeirao > distanciaCaminhaoDeRibeirao) {
    console.log('O caminhão estará mais próximo de Ribeirão Preto no momento do encontro.');
} else {
    console.log('Ambos os veículos estarão equidistantes de Ribeirão Preto no momento do encontro.');
}
