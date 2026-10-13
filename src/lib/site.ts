/**
 * ÚNICA FONTE DE VERDADE do conteúdo do site.
 * Tudo que está marcado com "TODO" é PLACEHOLDER e precisa ser
 * confirmado/substituído pelo Mestre antes de divulgar.
 */

const WHATSAPP_NUMBER = "5512996337023";

/** Gera link do WhatsApp com mensagem pré-pronta (já codificada). */
export const wa = (msg = "Olá Mestre Molina! Quero agendar minha aula experimental.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const site = {
  name: "Academia Molina",
  url: "https://academia-molina.vercel.app",
  city: "Santo André", // cidade vinda do site anterior
  state: "SP",
  address: "Rua Araci, 330 - Pq. Curuça, Santo André - SP",
  mapsQuery: "Rua Araci, 330, Parque Curuçá, Santo André - SP",
  instagram: "https://instagram.com/molinahapkido",
  since: 2021, // academia aberta há 5 anos
  master: { dan: "2º Dan", blackBeltYears: 5, experienceYears: 15 },
};

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#mestre", label: "Mestre" },
  { href: "#horarios", label: "Horários" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const modalities = [
  {
    title: "Hapkido",
    tag: "Bum Moo Kwan",
    text: "A arte coreana da união da energia: chutes, socos, torções e projeções aplicados com técnica, não com força bruta.",
    img: "/fotos/foto-24.jpg",
    pos: "object-top",
  },
  {
    title: "Defesa Pessoal",
    tag: "Para a vida real",
    text: "Situações reais, respostas diretas. Você aprende a se proteger e a proteger quem ama.",
    img: "/fotos/foto-01.jpg",
    pos: "object-center",
  },
  {
    title: "Armas Tradicionais",
    tag: "Tradição viva",
    text: "Tonfas, bastão curto, bastão longo e espada. Armas tradicionais do Hapkido, com foco em controle e respeito.",
    img: "/Molina_hapkido_espada.jpg",
    pos: "object-top",
  },
  {
    title: "Kids",
    tag: "Disciplina desde cedo",
    text: "Respeito, foco e confiança. Seu filho aprende a se defender e, principalmente, a se comportar.",
    img: "/fotos/foto-05.jpg",
    pos: "object-center",
  },
];

// Fotos reais (public/fotos). wide = ocupa 2 colunas.
export const gallery = [
  { src: "/fotos/foto-18.jpg", alt: "Mestres e faixa-preta com diplomas de Hapkido", wide: true },
  { src: "/fotos/foto-13.jpg", alt: "Entrega de diploma de faixa-preta de Hapkido" },
  { src: "/fotos/foto-04.jpg", alt: "Equipe no tatame vermelho do dojo" },
  { src: "/fotos/foto-10.jpg", alt: "Turma reunida na cerimônia de graduação", wide: true },
  { src: "/fotos/foto-02.jpg", alt: "Faixa-preta exibindo o Dan Certificate" },
  { src: "/fotos/foto-12.jpg", alt: "Cumprimento durante a cerimônia de graduação" },
  { src: "/fotos/foto-16.jpg", alt: "Cerimônia de entrega de faixa" },
  { src: "/fotos/foto-01.jpg", alt: "Três faixas-pretas posando com o diploma" },
];

export const schedule = [
  { time: "08:00 – 09:30", days: ["Hapkido", "", "Hapkido", "", "Hapkido", ""] },
  { time: "09:00 – 11:00", days: ["", "", "", "", "", "Hapkido sem pano"] },
  { time: "18:30 – 19:30", days: ["", "Kids", "", "Kids", "", ""] },
  { time: "20:00 – 21:30", days: ["", "Hapkido", "", "Hapkido", "", ""] },
];
export const weekDays = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

// Valores por mês (o plano mais longo paga menos por mês). Base de comparação: mensal R$ 150.
const MONTHLY = 150;
const perks = ["Hapkido e defesa pessoal", "Turmas adulto e Kids", "Treinos de seg a sáb", "Aula experimental grátis"];
export const plans = [
  { name: "Mensal", price: 150, months: 1, note: "Sem compromisso longo. Pra começar.", perks },
  { name: "Trimestral", price: 140, months: 3, note: "Quem decide, evolui.", perks },
  { name: "Semestral", price: 120, months: 6, featured: true, badge: "MAIS VANTAJOSO", note: "Seis meses é quando o jogo vira.", perks },
  { name: "Campeão", sub: "Anual", price: 100, months: 12, note: "Menos de R$ 3,50 por dia pra mudar de vida.", perks },
].map((p) => ({
  ...p,
  per: "/mês",
  total: p.months > 1 ? `R$ ${p.price * p.months} a cada ${p.months === 12 ? "12 meses" : `${p.months} meses`}` : undefined,
  save: p.months > 1 ? `Economize R$ ${(MONTHLY - p.price) * p.months}` : undefined,
}));

export const faqs = [
  { q: "Nunca lutei. Posso começar?", a: "Pode — e a maioria começa assim. A aula experimental é pensada para quem nunca pisou num tatame. Você treina no seu ritmo, com acompanhamento." },
  { q: "Tenho mais de 40 anos. É tarde?", a: "Não. Temos alunos que começaram depois dos 40 e hoje treinam todo dia. O treino é adaptado à sua condição física." },
  { q: "Preciso de kimono para a primeira aula?", a: "Não. Venha com roupa de treino confortável e fale com o Mestre pelo WhatsApp para alinhar o uniforme." },
  { q: "É perigoso? Vou me machucar?", a: "Todo esporte de contato tem risco, mas aqui o foco é técnica e segurança. Ninguém é jogado na fogueira no primeiro dia." },
  { q: "Como funciona a aula experimental?", a: "A primeira aula é grátis. Chame no WhatsApp, combine o horário e venha conhecer o tatame." },
  { q: "Tem turma para crianças?", a: "Sim. A turma Kids treina às terças e quintas, das 18:30 às 19:30. Mensalidade de R$ 120." },
];
