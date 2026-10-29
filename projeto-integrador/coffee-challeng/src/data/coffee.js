const coffees = [
  {
    id: 1,
    nome: "Bourbon Amarelo",
    produtor: "Fazenda São José",
    aroma: 9,
    sabor: 10,
    acidez: 8,
    corpo: 9,
    finalizacao: 9,
    observacoes: "Notas de chocolate e caramelo.",
    avaliador: "Sara",
    data: "17/07/2026",
  },
  {
    id: 2,
    nome: "Catuaí Vermelho",
    produtor: "Sítio Bela Vista",
    aroma: 8,
    sabor: 9,
    acidez: 9,
    corpo: 8,
    finalizacao: 9,
    observacoes: "Levemente cítrico.",
    avaliador: "João",
    data: "16/07/2026",
  },
  {
    id: 3,
    nome: "Arara",
    produtor: "Fazenda Esperança",
    aroma: 10,
    sabor: 10,
    acidez: 9,
    corpo: 9,
    finalizacao: 10,
    observacoes: "Muito doce e equilibrado.",
    avaliador: "Maria",
    data: "15/07/2026",
  },
  {
    id: 4,
    nome: "Mundo Novo",
    produtor: "Fazenda Primavera",
    aroma: 8,
    sabor: 8,
    acidez: 7,
    corpo: 8,
    finalizacao: 8,
    observacoes: "Boa doçura.",
    avaliador: "Carlos",
    data: "14/07/2026",
  },
  {
    id: 5,
    nome: "Geisha",
    produtor: "Fazenda Alto Vale",
    aroma: 10,
    sabor: 9,
    acidez: 10,
    corpo: 9,
    finalizacao: 10,
    observacoes: "Floral e frutado.",
    avaliador: "Ana",
    data: "13/07/2026",
  }
];

export function calcularMedia(cafe) {
  const soma =
    cafe.aroma +
    cafe.sabor +
    cafe.acidez +
    cafe.corpo +
    cafe.finalizacao

  return (soma / 5).toFixed(1);
}

export { coffees };
