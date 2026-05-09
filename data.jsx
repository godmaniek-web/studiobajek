// Episode + character data for Miśka i Ptyś.

const EPISODES = [
  {
    id: "ep15",
    num: 15,
    title: "Figa potrzebuje pomocy",
    blurb: "Kotka chowa się pod kanapą i nie chce wyjść. Miśka próbuje pomóc — ale nie wie jak.",
    duration: "13 min",
    date: "pon · 4 maja",
    cover: "img/ep15.png",
    tag: "Nowy",
    spotify: "https://open.spotify.com/show/miskaiptys",
    youtube: "https://youtube.com/@miskaiptys",
  },
  {
    id: "ep14",
    num: 14,
    title: "Figa potrzebuje pomocy",
    blurb: "Czasem wystarczy troska, żeby komuś zrobiło się lepiej.",
    duration: "12 min",
    date: "pią · 1 maja",
    cover: "img/ep14.png",
    spotify: "https://open.spotify.com/show/miskaiptys",
    youtube: "https://youtube.com/@miskaiptys",
  },
  {
    id: "ep4",
    num: 4,
    title: "Ptyś jedzie autobusem",
    blurb: "Pierwsza długa podróż MZK. Ptyś siedzi mocno przytulony — żeby nie zgubić się w tłumie.",
    duration: "14 min",
    date: "śr · 29 kwi",
    cover: "img/ep4.png",
    spotify: "https://open.spotify.com/show/miskaiptys",
    youtube: "https://youtube.com/@miskaiptys",
  },
  {
    id: "ep3",
    num: 3,
    title: "Najgorszy dzień",
    blurb: "Wszystko poszło nie tak. Rozlany kubek, zepsuty rysunek, deszcz. Ptyś milczy i jest blisko.",
    duration: "11 min",
    date: "pon · 27 kwi",
    cover: "img/ep3.png",
    spotify: "https://open.spotify.com/show/miskaiptys",
    youtube: "https://youtube.com/@miskaiptys",
  },
  {
    id: "ep1",
    num: 1,
    title: "Kurtka",
    blurb: "Ciepła bajka o codziennych małych wyzwaniach. Z piosenką w środku.",
    duration: "12 min",
    date: "pią · 24 kwi",
    cover: "img/ep1.png",
    spotify: "https://open.spotify.com/show/miskaiptys",
    youtube: "https://youtube.com/@miskaiptys",
  },
];

const FEATURED = EPISODES[0];

const CHARACTERS = [
  { id: "miska",  name: "Miśka",       role: "Główna bohaterka", age: "4 lata",            blurb: "Ciekawska, uparta, bardzo wrażliwa. Wszystko przeżywa intensywnie.", color: "peach",  glyph: "miska" },
  { id: "ptys",   name: "Ptyś",        role: "Lisek-pluszak",    age: "zawsze pod ręką",   blurb: "Nie mówi magicznie. Po prostu jest. Cichy towarzysz w każdej sytuacji.", color: "butter", glyph: "ptys" },
  { id: "figa",   name: "Figa",        role: "Domowa kotka",     age: "wiek tajemnicą",    blurb: "Trochę dumna, trochę niezależna. Robi wrażenie, że wszystko już widziała.", color: "sage",   glyph: "figa" },
  { id: "stefan", name: "Stefan",      role: "Młodszy brat",     age: "10 miesięcy",       blurb: "Bobas. Nie mówi jeszcze słowami, ale komentuje wszystko intonacją.", color: "sky",    glyph: "stefan" },
  { id: "rodzice", name: "Mama i Tata", role: "Rodzice",          age: "obecni, nie dominują", blurb: "Ciepła mama. Cierpliwy tata. Robią porządek bez podnoszenia głosu.", color: "plum", glyph: "parents" },
];

const FAQ = [
  { q: "Dla jakiego wieku są bajki?",  a: "Najlepiej sprawdzają się przy dzieciach 3–5 lat. Tempo i język są spokojne, więc nie przestymulowują przed snem." },
  { q: "Jak często pojawiają się nowe odcinki?", a: "Trzy razy w tygodniu — w poniedziałek, środę i piątek. Każdy odcinek trwa 10–15 minut." },
  { q: "Czy historie mają morały?",    a: "Nie nachalne. Emocje wynikają z sytuacji, a nie z lekcji wygłoszonych przez narratora." },
  { q: "Czy mogę słuchać razem z dzieckiem?", a: "To najlepszy sposób słuchania. Bajki są napisane tak, żeby dorosły też się przy nich nie nudził." },
  { q: "Gdzie są dostępne odcinki?",   a: "Spotify, Apple Podcasts, YouTube i nasz wbudowany odtwarzacz." },
];

const PARENT_PILLARS = [
  { title: "Premium audio bedtime", desc: "Spokojny lektor, długie, miękkie zdania. Działa wyciszająco." },
  { title: "Bez magii i fantastyki", desc: "Wszystko dzieje się w realnym, znanym świecie. Bez chaosu." },
  { title: "Edukacja emocjonalna", desc: "Ukryta w fabule. Dziecko uczy się przez doświadczenie bohaterki." },
  { title: "Slow childhood", desc: "Zaprojektowane przeciw przebodźcowaniu. Krok po kroku." },
];

Object.assign(window, { EPISODES, FEATURED, CHARACTERS, FAQ, PARENT_PILLARS });
