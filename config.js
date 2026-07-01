/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  config.js — EDIT SEMUA KONTEN DI SINI                         ║
 * ║  Tidak perlu menyentuh index.html, style.css, atau app.js      ║
 * ║  untuk mengubah teks, harga, paket, atau info trip.            ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const SITE = {
  /* ──────────────────────────────────────────────────────────────────
   *  BRAND
   * ────────────────────────────────────────────────────────────────── */
  brand: {
    name: "TEMAN ", // nama brand penuh
    accent: "TREKKING", // bagian yang diberi warna aksen (harus ada di dalam name)
    tagline: "Open Trip & Private Trip Pendakian Gunung",
  },

  /* ──────────────────────────────────────────────────────────────────
   *  WHATSAPP — nomor admin yang dihubungi semua tombol WA di halaman
   * ────────────────────────────────────────────────────────────────── */
  wa: {
    number: "62895341248153", // format 62xxx, tanpa + atau 0 di depan
    defaultMessage: "Halo, saya ingin bertanya tentang trip pendakian 🙏",
  },

  /* ──────────────────────────────────────────────────────────────────
   *  FOOTER
   * ────────────────────────────────────────────────────────────────── */
  footer: {
    entity: "Peluncur Roket",
    location: "Surabaya, Jawa Timur",
    social: "@fajarsya__",
  },

  /* ──────────────────────────────────────────────────────────────────
   *  TRIPS — tambah/kurangi objek trip di array ini sesukamu
   *
   *  Setiap trip memiliki:
   *    - Info umum (nama, jalur, tanggal, slot, elevasi, dst)
   *    - packages[]  → kartu harga (bisa lebih dari 4)
   *    - benefitRows[] → baris tabel perbandingan (urutan kolom = urutan packages)
   *    - faqs[]      → FAQ spesifik gunung ini (ditambah globalFaqs di bawah)
   * ────────────────────────────────────────────────────────────────── */
  trips: [
    /* ─── TRIP 1 : GUNUNG AGUNG ─────────────────────────────────────── */
    {
      id: "gunung-agung",
      name: "Gunung Agung",
      route: "via Pura Pasar Agung",
      nextDate: "15 Aug 2026",
      slotLeft: 8,
      elevation: "3.031",
      distance: "14",
      duration: "2",
      difficulty: "Hard",
      meetingPoint: "Denpasar, Bali",

      description:
        "Gunung Agung merupakan gunung tertinggi di Pulau Bali sekaligus gunung yang disakralkan masyarakat Hindu Bali. Jalur Pasar Agung menawarkan pendakian yang menantang dengan panorama sunrise, lautan awan, dan pemandangan Gunung Rinjani saat cuaca cerah.",

      packages: [
        {
          name: "Hemat",
          tagline: "Grup besar, harga terjangkau",
          price: "850.000",
          unit: "/ orang",
          slot: "Maks 20 orang",
          featured: false,
          points: [
            "Guide pendamping bersama",
            "SIMAKSI pendakian",
            "Transport basecamp",
            "Snack & air mineral",
          ],
        },
        {
          name: "Reguler",
          tagline: "Paling banyak dipilih",
          price: "1.250.000",
          unit: "/ orang",
          slot: "Maks 12 orang",
          featured: true,
          points: [
            "Guide lokal berpengalaman",
            "SIMAKSI",
            "Transport PP Denpasar - Basecamp",
            "Makan 2x",
            "Trekking pole",
          ],
        },
        {
          name: "Private",
          tagline: "Grup sendiri, lebih nyaman",
          price: "1.850.000",
          unit: "/ orang",
          slot: "Maks 6 orang",
          featured: false,
          points: [
            "Guide privat",
            "SIMAKSI",
            "Transport privat",
            "Dokumentasi",
            "Jadwal fleksibel",
          ],
        },
        {
          name: "VIP Summit",
          tagline: "All-in, fokus ke summit",
          price: "2.650.000",
          unit: "/ orang",
          slot: "Maks 4 orang",
          featured: false,
          points: [
            "Guide senior",
            "SIMAKSI",
            "Transport privat",
            "Full meal",
            "Dokumentasi foto & video",
            "Trekking pole",
            "Headlamp",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["Bersama", "✓", "Privat", "Senior"] },
        { label: "Transport", values: ["Basecamp", "PP", "Privat", "Privat"] },
        { label: "Makan", values: ["Snack", "2x", "2x", "Full"] },
        { label: "Dokumentasi", values: ["—", "—", "✓", "✓"] },
        { label: "Trekking Pole", values: ["—", "✓", "✓", "Premium"] },
        { label: "Headlamp", values: ["—", "—", "—", "✓"] },
        { label: "Jadwal Custom", values: ["—", "—", "✓", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah Gunung Agung cocok untuk pendaki pemula?",
          a: "Tidak disarankan. Jalur memiliki tanjakan yang cukup ekstrem dan membutuhkan kondisi fisik yang prima.",
        },
        {
          q: "Pendakian dimulai jam berapa?",
          a: "Umumnya pendakian dimulai sekitar pukul 22.00–23.00 WITA agar tiba di puncak saat matahari terbit.",
        },
      ],
    },

    /* ─── TRIP 2 : GUNUNG RAUNG ─────────────────────────────────────── */
    {
      id: "gunung-raung",
      name: "Gunung Raung",
      route: "via Kalibaru",
      nextDate: "22 Aug 2026",
      slotLeft: 6,
      elevation: "3.344",
      distance: "18",
      duration: "3",
      difficulty: "Expert",
      meetingPoint: "Banyuwangi",

      description:
        "Gunung Raung terkenal sebagai salah satu gunung tersulit di Pulau Jawa dengan kaldera raksasa dan jalur berbatu yang menantang. Pendakian menuju puncak membutuhkan stamina, pengalaman, serta keberanian menghadapi jalur exposed.",

      packages: [
        {
          name: "Hemat",
          tagline: "Grup besar, harga terjangkau",
          price: "950.000",
          unit: "/ orang",
          slot: "Maks 18 orang",
          featured: false,
          points: ["Guide bersama", "SIMAKSI", "Camping equipment", "Makan 4x"],
        },
        {
          name: "Reguler",
          tagline: "Paling banyak dipilih",
          price: "1.450.000",
          unit: "/ orang",
          slot: "Maks 10 orang",
          featured: true,
          points: [
            "Guide profesional",
            "SIMAKSI",
            "Porter logistik",
            "Makan 4x",
            "Safety equipment",
          ],
        },
        {
          name: "Private",
          tagline: "Grup sendiri, lebih nyaman",
          price: "2.250.000",
          unit: "/ orang",
          slot: "Maks 6 orang",
          featured: false,
          points: [
            "Guide privat",
            "Porter",
            "Safety equipment",
            "Transport lokal",
            "Jadwal fleksibel",
          ],
        },
        {
          name: "VIP Summit",
          tagline: "All-in, fokus ke summit",
          price: "3.250.000",
          unit: "/ orang",
          slot: "Maks 4 orang",
          featured: false,
          points: [
            "Guide senior",
            "Porter pribadi",
            "Full board",
            "Transport privat",
            "Dokumentasi",
            "Safety gear lengkap",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["Bersama", "✓", "Privat", "Senior"] },
        { label: "Porter", values: ["—", "✓", "✓", "Pribadi"] },
        { label: "Safety Gear", values: ["—", "✓", "✓", "Premium"] },
        { label: "Makan", values: ["4x", "4x", "Full", "Full+"] },
        { label: "Transport", values: ["—", "—", "✓", "✓"] },
        { label: "Dokumentasi", values: ["—", "—", "—", "✓"] },
        { label: "Jadwal Custom", values: ["—", "—", "✓", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah Gunung Raung membutuhkan pengalaman pendakian?",
          a: "Ya. Gunung Raung sangat direkomendasikan untuk pendaki yang sudah memiliki pengalaman di gunung-gunung tinggi.",
        },
        {
          q: "Apakah jalur memiliki tebing?",
          a: "Ya. Beberapa jalur menuju puncak memiliki area exposed sehingga wajib mengikuti arahan guide.",
        },
      ],
    },

    /* ─── TRIP 3 : GUNUNG ARJUNO ─────────────────────────────────────── */
    {
      id: "gunung-arjuno",
      name: "Gunung Arjuno",
      route: "via Tretes",
      nextDate: "29 Aug 2026",
      slotLeft: 10,
      elevation: "3.339",
      distance: "24",
      duration: "2",
      difficulty: "Hard",
      meetingPoint: "Tretes, Pasuruan",

      description:
        "Gunung Arjuno menawarkan jalur hutan yang panjang, pemandangan sabana, dan deretan puncak yang ikonik. Pendaki juga dapat menikmati panorama Gunung Welirang, Penanggungan, hingga Semeru saat cuaca cerah.",

      packages: [
        {
          name: "Hemat",
          tagline: "Grup besar, harga terjangkau",
          price: "550.000",
          unit: "/ orang",
          slot: "Maks 20 orang",
          featured: false,
          points: ["Guide bersama", "SIMAKSI", "Tenda sharing", "Makan 3x"],
        },
        {
          name: "Reguler",
          tagline: "Paling banyak dipilih",
          price: "800.000",
          unit: "/ orang",
          slot: "Maks 15 orang",
          featured: true,
          points: [
            "Guide",
            "Porter logistik",
            "SIMAKSI",
            "Makan 3x + snack",
            "Matras",
          ],
        },
        {
          name: "Private",
          tagline: "Grup sendiri, lebih nyaman",
          price: "1.350.000",
          unit: "/ orang",
          slot: "Maks 6 orang",
          featured: false,
          points: [
            "Guide privat",
            "Porter",
            "Tenda sharing 2 orang",
            "Full board",
            "Jadwal fleksibel",
          ],
        },
        {
          name: "VIP Summit",
          tagline: "All-in, fokus ke summit",
          price: "2.150.000",
          unit: "/ orang",
          slot: "Maks 4 orang",
          featured: false,
          points: [
            "Guide senior",
            "Porter pribadi",
            "Tenda privat",
            "Full board",
            "Dokumentasi",
            "Transport basecamp",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["Bersama", "✓", "Privat", "Senior"] },
        { label: "Porter", values: ["—", "✓", "✓", "Pribadi"] },
        { label: "Tenda", values: ["4 orang", "3 orang", "2 orang", "Privat"] },
        {
          label: "Makan",
          values: ["3x", "3x + snack", "Full board", "Full board+"],
        },
        { label: "Matras", values: ["—", "✓", "✓", "Premium"] },
        { label: "Dokumentasi", values: ["—", "—", "—", "✓"] },
        { label: "Jadwal Custom", values: ["—", "—", "✓", "✓"] },
        { label: "Transport", values: ["—", "—", "—", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah Gunung Arjuno bisa didaki oleh pemula?",
          a: "Bisa, asalkan memiliki kondisi fisik yang baik karena jalur Tretes cukup panjang dengan tanjakan yang konsisten.",
        },
        {
          q: "Berapa lama waktu menuju puncak?",
          a: "Rata-rata membutuhkan waktu sekitar 8–10 jam tergantung kondisi fisik dan cuaca.",
        },
      ],
    },

    /* ─── TAMBAH TRIP BARU — copy blok trip di atas dan paste di sini ── */
  ],

  /* ──────────────────────────────────────────────────────────────────
   *  FAQ GLOBAL — muncul di SEMUA trip, ditambahkan setelah FAQ spesifik
   * ────────────────────────────────────────────────────────────────── */
  globalFaqs: [
    {
      q: "Apa yang perlu dibawa sendiri?",
      a: "[GANTI: List perlengkapan pribadi yang harus dibawa peserta — misal jaket, sepatu trekking, headlamp, dll]",
    },
    {
      q: "Bagaimana sistem DP dan pelunasan?",
      a: "[GANTI: Kebijakan DP — misalnya DP 50% via transfer BCA/Mandiri/QRIS, pelunasan H-3 keberangkatan]",
    },
    {
      q: "Apakah bisa reschedule jika cuaca buruk?",
      a: "[GANTI: Kebijakan reschedule dan refund — kapan bisa, kapan tidak bisa, prosedurnya]",
    },
    {
      q: "Berapa batas usia dan kondisi fisik minimal?",
      a: "[GANTI: Syarat fisik dan usia peserta — misal usia minimal, kondisi kesehatan yang disyaratkan]",
    },
  ],
};
