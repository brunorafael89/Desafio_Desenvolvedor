// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Gera um array de faturamento diário para 365 dias
  const faturamentoDiario = Array.from({ length: 365 }, () => {
    // Simula alguns dias sem faturamento (0) e outros com valores entre 100 e 1000
    return Math.random() < 0.2 ? 0 : gerarNumeroAleatorio(100, 1000);
  });
  
  // Filtra apenas os dias com faturamento
  const faturamentoValido = faturamentoDiario.filter(valor => valor > 0);
  
  // Calcula o menor valor de faturamento
  const menorFaturamento = Math.min(...faturamentoValido);
  
  // Calcula o maior valor de faturamento
  const maiorFaturamento = Math.max(...faturamentoValido);
  
  // Calcula a média de faturamento
  const mediaFaturamento = faturamentoValido.reduce((acc, valor) => acc + valor, 0) / faturamentoValido.length;
  
  // Conta o número de dias com faturamento superior à média
  const diasAcimaMedia = faturamentoValido.filter(valor => valor > mediaFaturamento).length;
  
  // Exibe os resultados
  console.log(`Menor valor de faturamento: ${menorFaturamento.toFixed(2)}`);
  console.log(`Maior valor de faturamento: ${maiorFaturamento.toFixed(2)}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
  