// =====================================================================
//  Mektep haqqında maǵlıwmat. Usı fayldı ózgertiń — sayt ózi jańalanadı.
//  [ ... ] ishindegi tekstler — ele tekseriliwi yamasa toltırılıwı kerek.
//  Hár bir tekst úsh tilde: kaa (qaraqalpaqsha), uz (ózbekshe), en (inglisshe).
// =====================================================================
window.SCHOOL = {
  shortName: { kaa: "42-mektep", uz: "42-maktab", en: "School No. 42" },
  fullName: {
    kaa: "Nókis qalası 42-sanlı ulıwma orta bilim beriw mektebi",
    uz: "Nukus shahar 42-son umumiy o'rta ta'lim maktabi",
    en: "General Secondary School No. 42, Nukus"
  },
  tagline: {
    kaa: "Bilim, tárbiya hám keleshek — bir orında",
    uz: "Bilim, tarbiya va kelajak — bir maskanda",
    en: "Knowledge, upbringing and the future — under one roof"
  },
  city: { kaa: "Nókis · Qaraqalpaqstan", uz: "Nukus · Qoraqalpog'iston", en: "Nukus · Karakalpakstan" },
  about: {
    kaa: "Mektebimiz eki etajlı imaratta jaylasqan hám sport maydanshalarına iye. Bizde joqarı kategoriyalı muǵallimler isleydi, al oqıwshılarımız hár túrli tańlawlarda jeńislerge erisip kelmekte.",
    uz: "Maktabimiz ikki qavatli binoda joylashgan va sport maydonchalariga ega. Bizda oliy toifali o'qituvchilar ishlaydi, o'quvchilarimiz esa turli tanlovlarda g'alabalarga erishib kelmoqda.",
    en: "Our school is housed in a two-storey building with sports grounds. Our teachers include top-category specialists, and our pupils regularly win in a variety of competitions."
  },
  stats: [
    { value: "542", label: { kaa: "oqıwshı", uz: "o'quvchi", en: "pupils" } },
    { value: "75", label: { kaa: "muǵallim", uz: "o'qituvchi", en: "teachers" } },
    { value: "22", label: { kaa: "klass", uz: "sinf", en: "classes" } },
    { value: "2", label: { kaa: "oqıw smenası", uz: "o'quv smenasi", en: "school shifts" } }
  ],
  director: {
    name: { kaa: "Begjanov Rustem Allambergenovich", uz: "Begjanov Rustem Allambergenovich", en: "Rustem Begjanov" },
    role: { kaa: "Mektep direktorı", uz: "Maktab direktori", en: "School Principal" },
    reception: {
      kaa: "Qabıllaw: dúyshembi, sárshembi, juma, 09:00–12:00",
      uz: "Qabul: dushanba, chorshanba, juma, 09:00–12:00",
      en: "Visiting hours: Mon, Wed, Fri, 9:00–12:00"
    }
  },
  teachers: [
    { name: "Dlimbetov Salamat", subject: { kaa: "Informatika", uz: "Informatika", en: "Computer Science" } },
    { name: "Allaniyazova Gawhar", subject: { kaa: "Informatika", uz: "Informatika", en: "Computer Science" } },
    { name: "Jalgasova Nigora", subject: { kaa: "Matematika", uz: "Matematika", en: "Mathematics" } },
    { name: "Saypov Alisher", subject: { kaa: "Geografiya", uz: "Geografiya", en: "Geography" } }
  ],
  // Qońıraw kestesi: sabaq 45 minut, tánepis 5 minut.
  // Ekinshi smenanıń tánepisleri birinshi smena sıyaqlı dep alındı — tekseriń.
  shifts: [
    {
      title: { kaa: "1-smena", uz: "1-smena", en: "1st shift" },
      bells: [
        { n: 1, time: "08:30 – 09:15" },
        { n: 2, time: "09:20 – 10:05" },
        { n: 3, time: "10:10 – 10:55" },
        { n: 4, time: "11:00 – 11:45" },
        { n: 5, time: "11:50 – 12:35" },
        { n: 6, time: "12:40 – 13:25" }
      ]
    },
    {
      title: { kaa: "2-smena", uz: "2-smena", en: "2nd shift" },
      bells: [
        { n: 1, time: "13:40 – 14:25" },
        { n: 2, time: "14:30 – 15:15" },
        { n: 3, time: "15:20 – 16:05" },
        { n: 4, time: "16:10 – 16:55" },
        { n: 5, time: "17:00 – 17:45" },
        { n: 6, time: "17:50 – 18:35" }
      ]
    }
  ],
  admission: {
    kaa: "1-klassqa qabıllaw ata-analar emaktab.uz saytı arqalı tikkeley arza jiberiwi menen ámelge asırıladı.",
    uz: "1-sinfga qabul ota-onalar emaktab.uz sayti orqali to'g'ridan-to'g'ri ariza yuborishi orqali amalga oshiriladi.",
    en: "Grade 1 admission is done by parents submitting an application directly on the emaktab.uz website."
  },
  admissionLink: "https://emaktab.uz",
  // Bas bettegi úlken súwret hám galereya (súwret fayllar)
  heroPhoto: "building.jpg",
  gallery: [
    { src: "building.jpg", caption: { kaa: "Mektep imaratı", uz: "Maktab binosi", en: "School building" } },
    { src: "hall.jpg", caption: { kaa: "Kirisiw zalı", uz: "Kirish zali", en: "Entrance hall" } },
    { src: "gym-1.jpg", caption: { kaa: "Sport zalı", uz: "Sport zali", en: "Sports hall" } },
    { src: "gym-2.jpg", caption: { kaa: "Sport zalı", uz: "Sport zali", en: "Sports hall" } }
  ],
  // Prezident sózleri — tek president.uz saytındaǵı rásmiy tekstlerden alındı.
  // Túp nusqası ózbekshe (uz); kaa hám en — awdarma.
  quotes: [
    {
      text: {
        uz: "Yangi O‘zbekiston – maktab ostonasidan boshlanadi.",
        kaa: "Jańa Ózbekstan — mektep bosaǵasınan baslanadı.",
        en: "New Uzbekistan begins at the threshold of the school."
      },
      source: "https://president.uz/oz/lists/view/4378"
    },
    {
      text: {
        uz: "Yakkayu yagona najotimiz – ilm.",
        kaa: "Jalǵız najatımız — ilim.",
        en: "Knowledge is our one and only salvation."
      },
      date: "29.09.2021",
      source: "https://president.uz/oz/lists/view/4659"
    },
    {
      text: {
        uz: "Ma’naviyat maktabdan boshlanadi.",
        kaa: "Ruwxıylıq mektepten baslanadı.",
        en: "Spiritual values begin at school."
      },
      date: "25.05.2022",
      source: "https://president.uz/oz/lists/view/5217"
    }
  ],
  quoteAuthor: {
    kaa: "Shavkat Mirziyoyev, Ózbekstan Respublikası Prezidenti",
    uz: "Shavkat Mirziyoyev, O‘zbekiston Respublikasi Prezidenti",
    en: "Shavkat Mirziyoyev, President of the Republic of Uzbekistan"
  },
  contacts: {
    address: { kaa: "May awıl, 36-jay, Nókis", uz: "May ovul, 36-uy, Nukus", en: "36 May Awil, Nukus" },
    phone: "+998 91 389 08 17",
    email: "arteltesla@gmail.com",
    telegram: "https://t.me/nokisqalasi42mektep",
    instagram: "",
    workHours: { kaa: "Dúyshembi–Shembi, 08:00–17:00 [tekseriń]", uz: "Dushanba–Shanba, 08:00–17:00 [tekshiring]", en: "Mon–Sat, 08:00–17:00 [to check]" },
    mapQuery: "42.441403,59.592955"   // mekteptiń koordinataları
  }
};
