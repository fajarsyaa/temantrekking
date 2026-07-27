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
    entity: "Jars Develop",
    location: "Surabaya, Jawa Timur",
    social: "@temantrekking",
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
    /* ─── TRIP : GUNUNG AGUNG ─────────────────────────────────────── */
    {
      id: "gunung-agung-edelweiss",
      name: "Gunung Agung",
      route: "via Taman Edelweis",
      nextDate: "15 Aug 2026",
      slotLeft: 8,
      elevation: "3.031",
      distance: "13",
      duration: "2",
      difficulty: "Hard",
      meetingPoint: "Basecamp Taman Edelweis, Karangasem",

      description:
        "Gunung Agung melalui jalur Taman Edelweis menawarkan jalur yang relatif lebih bersahabat dibanding Besakih, dengan panorama hamparan padang Edelweis, sunrise spektakuler, serta pemandangan Pulau Lombok dan Gunung Rinjani ketika cuaca cerah.",

      packages: [
        {
          name: "Paket A",
          tagline: "Pilihan hemat untuk pendakian",
          price: "899.000",
          unit: "/ orang",
          slot: "Minimum 2 orang",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Tenda",
            "Makan 1x",
            "Hot drink",
            "Snack",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "1.299.000",
          unit: "/ orang",
          slot: "Minimum 2 orang",
          featured: true,
          points: [
            "Semua fasilitas Paket A",
            "Grab motor Basecamp - Pos 1",
            "Makan selama pendakian",
            "Tenda sesuai kapasitas",
            "Porter tenda",
            "Peralatan memasak & makan",
          ],
        },
        {
          name: "Paket C",
          tagline: "Private Experience",
          price: "3.099.000",
          unit: "/ orang",
          slot: "Tanpa minimum peserta",
          featured: false,
          points: [
            "Semua fasilitas Paket B",
            "Matras",
            "Lampu tenda",
            "Personal guide",
            "Personal porter",
            "Es buah",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "Personal"] },
        { label: "SIMAKSI", values: ["✓", "✓", "✓"] },
        { label: "Makan", values: ["1x", "Selama Trek", "Selama Trek"] },
        { label: "Porter", values: ["—", "Tenda", "Pribadi"] },
        { label: "Tenda", values: ["Sharing", "Sesuai Kapasitas", "Premium"] },
        { label: "Lampu Tenda", values: ["—", "—", "✓"] },
        { label: "Matras", values: ["—", "—", "✓"] },
        { label: "Transport Pos 1", values: ["—", "✓", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah jalur Taman Edelweis cocok untuk pemula?",
          a: "Bisa, namun tetap memerlukan kondisi fisik yang baik karena jalur memiliki tanjakan panjang menuju puncak.",
        },
        {
          q: "Apakah pendakian bisa summit sunrise?",
          a: "Ya, keberangkatan biasanya dilakukan malam hari agar tiba di puncak saat matahari terbit.",
        },
      ],
    },

    /* ─── TRIP : GUNUNG ARGOPURO ─────────────────────────────────────── */
    {
      id: "gunung-argopuro-bremi",
      name: "Gunung Argopuro",
      route: "via Bremi",
      nextDate: "22 Aug 2026",
      slotLeft: 10,
      elevation: "3.088",
      distance: "42",
      duration: "4",
      difficulty: "Hard",
      meetingPoint: "Basecamp Bremi, Probolinggo",

      description:
        "Gunung Argopuro melalui jalur Bremi terkenal dengan jalur trekking panjang yang melewati hutan tropis, savana, Danau Taman Hidup, dan situs peninggalan sejarah. Cocok bagi pendaki yang ingin menikmati perjalanan panjang dengan panorama beragam.",

      packages: [
        {
          name: "Paket A",
          tagline: "Paket Ekonomis",
          price: "799.000",
          unit: "/ orang",
          slot: "Minimum 5 orang",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Welcome drink",
            "Snack",
            "Basecamp",
            "P3K Tim",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "999.000",
          unit: "/ orang",
          slot: "Minimum 4 orang",
          featured: true,
          points: [
            "SIMAKSI",
            "Guide",
            "Tenda",
            "Makan selama pendakian",
            "Ojek PP Basecamp - Pos 1",
            "Welcome drink",
            "Souvenir",
          ],
        },
        {
          name: "Paket C",
          tagline: "Pendakian Premium",
          price: "1.799.000",
          unit: "/ orang",
          slot: "Minimum 3 orang",
          featured: false,
          points: [
            "Semua fasilitas Paket B",
            "Lampu tenda",
            "Meja & kursi",
            "Shelter",
            "Personal porter",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "✓"] },
        { label: "SIMAKSI", values: ["✓", "✓", "✓"] },
        { label: "Tenda", values: ["—", "✓", "✓"] },
        { label: "Makan", values: ["Snack", "Selama Trek", "Selama Trek"] },
        { label: "Ojek Pos 1", values: ["—", "✓", "✓"] },
        { label: "Souvenir", values: ["—", "✓", "✓"] },
        { label: "Personal Porter", values: ["—", "—", "✓"] },
        { label: "Lampu Tenda", values: ["—", "—", "✓"] },
        { label: "Shelter", values: ["—", "—", "✓"] },
      ],

      faqs: [
        {
          q: "Berapa lama pendakian Argopuro via Bremi?",
          a: "Umumnya membutuhkan waktu 3–4 hari tergantung kondisi cuaca dan kecepatan tim.",
        },
        {
          q: "Apakah tersedia sumber air selama perjalanan?",
          a: "Tersedia di beberapa titik, namun tetap disarankan membawa persediaan air yang cukup.",
        },
      ],
    },
    /* ─── TRIP : GUNUNG ARJUNO WELIRANG ─────────────────────────────────────── */
    {
      id: "gunung-arjuno-welirang",
      name: "Gunung Arjuno Welirang",
      route: "via Sumber Brantas",
      nextDate: "29 Aug 2026",
      slotLeft: 12,
      elevation: "3.339",
      distance: "22",
      duration: "2",
      difficulty: "Hard",
      meetingPoint: "Basecamp Sumber Brantas, Batu",

      description:
        "Jalur Sumber Brantas merupakan salah satu jalur favorit menuju Gunung Arjuno dan Welirang. Jalur ini didominasi hutan pegunungan, padang savana, serta pemandangan puncak kembar Arjuno-Welirang yang menjadi ikon Jawa Timur.",

      packages: [
        {
          name: "Paket A",
          tagline: "Pendakian hemat",
          price: "499.000",
          unit: "/ orang",
          slot: "Minimum 3 orang",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Sweeper",
            "Souvenir",
            "P3K Tim",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "799.000",
          unit: "/ orang",
          slot: "Minimum 3 orang",
          featured: true,
          points: [
            "SIMAKSI",
            "Guide",
            "Makan selama pendakian",
            "Sweeper",
            "Souvenir",
            "Tenda",
            "Matras",
            "Lampu tenda",
          ],
        },
        {
          name: "Paket C",
          tagline: "Private Experience",
          price: "1.599.000",
          unit: "/ orang",
          slot: "Tanpa minimum peserta",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Makan selama pendakian",
            "Sweeper",
            "Souvenir",
            "P3K Tim",
            "Tenda",
            "Matras",
            "Lampu tenda",
            "Ojek PP Basecamp - Pintu Rimba",
            "Personal porter",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "✓"] },
        { label: "SIMAKSI", values: ["✓", "✓", "✓"] },
        { label: "Sweeper", values: ["✓", "✓", "✓"] },
        { label: "Makan", values: ["—", "Selama Trek", "Selama Trek"] },
        { label: "Tenda", values: ["—", "✓", "✓"] },
        { label: "Matras", values: ["—", "✓", "✓"] },
        { label: "Lampu Tenda", values: ["—", "✓", "✓"] },
        { label: "Ojek", values: ["—", "—", "PP"] },
        { label: "Personal Porter", values: ["—", "—", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah bisa summit Arjuno dan Welirang sekaligus?",
          a: "Bisa. Jalur ini memungkinkan pendaki mengunjungi kedua puncak apabila kondisi cuaca dan fisik mendukung.",
        },
        {
          q: "Apakah tersedia sumber air?",
          a: "Ya, terdapat beberapa sumber air di jalur, namun tetap disarankan membawa cadangan air yang cukup.",
        },
      ],
    },

    /* ─── TRIP : GUNUNG ARGOPURO LINTAS ─────────────────────────────────────── */
    {
      id: "gunung-argopuro-lintas",
      name: "Gunung Argopuro",
      route: "via Baderan - Bremi (Lintas)",
      nextDate: "5 Sep 2026",
      slotLeft: 8,
      elevation: "3.088",
      distance: "63",
      duration: "5",
      difficulty: "Expert",
      meetingPoint: "Basecamp Baderan, Situbondo",

      description:
        "Pendakian lintas Gunung Argopuro melalui Baderan menuju Bremi merupakan salah satu jalur trekking terpanjang di Pulau Jawa. Pendaki akan melewati sabana luas, hutan tropis, Danau Taman Hidup, Rawa Embik, hingga berbagai situs bersejarah.",

      packages: [
        {
          name: "Paket A",
          tagline: "Open Trip",
          price: "899.000",
          unit: "/ orang",
          slot: "Minimum 5 orang",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Sweeper",
            "HT tim",
            "Rumah singgah",
            "Tenda",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "1.699.000",
          unit: "/ orang",
          slot: "Minimum 5 orang",
          featured: true,
          points: [
            "Semua fasilitas Paket A",
            "Peralatan makan",
            "Porter tenda",
            "Porter kelompok",
            "Makan selama pendakian",
            "Ojek Mata Air 1",
          ],
        },
        {
          name: "Paket C",
          tagline: "Private Expedition",
          price: "2.799.000",
          unit: "/ orang",
          slot: "Minimum 3 orang",
          featured: false,
          points: [
            "Guide pribadi",
            "Personal porter",
            "Lampu tenda",
            "Tenda toilet",
            "Powerbank 10000 mAh",
            "Meja & kursi",
            "Es buah 2x",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "Pribadi"] },
        { label: "Sweeper", values: ["✓", "✓", "✓"] },
        { label: "HT Tim", values: ["✓", "✓", "✓"] },
        { label: "Tenda", values: ["✓", "✓", "Premium"] },
        { label: "Porter", values: ["—", "Kelompok", "Pribadi"] },
        { label: "Peralatan Makan", values: ["—", "✓", "✓"] },
        { label: "Makan", values: ["—", "Selama Trek", "Selama Trek"] },
        { label: "Lampu Tenda", values: ["—", "—", "✓"] },
        { label: "Tenda Toilet", values: ["—", "—", "✓"] },
        { label: "Powerbank", values: ["—", "—", "10000 mAh"] },
        { label: "Meja & Kursi", values: ["—", "—", "✓"] },
        { label: "Es Buah", values: ["—", "—", "2x"] },
      ],

      faqs: [
        {
          q: "Apakah jalur lintas lebih sulit dibanding via Bremi?",
          a: "Ya. Jalur lintas memiliki jarak lebih panjang dan membutuhkan stamina yang lebih baik karena tidak kembali ke jalur awal.",
        },
        {
          q: "Apakah barang bawaan dibantu porter?",
          a: "Pada Paket B porter digunakan untuk perlengkapan kelompok, sedangkan Paket C mendapatkan porter pribadi.",
        },
      ],
    },
    /* ─── TRIP : ARGOPURO TAMAN HIDUP ─────────────────────────────────────── */
    {
      id: "argopuro-taman-hidup",
      name: "Gunung Argopuro",
      route: "Taman Hidup via Bremi",
      nextDate: "12 Sep 2026",
      slotLeft: 12,
      elevation: "3.088",
      distance: "24",
      duration: "2",
      difficulty: "Medium",
      meetingPoint: "Basecamp Bremi, Probolinggo",

      description:
        "Trip Taman Hidup merupakan paket favorit bagi pendaki yang ingin menikmati keindahan Gunung Argopuro tanpa harus melakukan summit. Destinasi utama adalah Danau Taman Hidup yang terkenal dengan panorama hutan pegunungan, padang rumput, dan suasana camping yang tenang.",

      packages: [
        {
          name: "Paket A",
          tagline: "Camping Santai",
          price: "499.000",
          unit: "/ orang",
          slot: "Open Trip",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Welcome drink",
            "Snack",
            "Ojek Basecamp - Pos 1",
            "P3K Tim",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "799.000",
          unit: "/ orang",
          slot: "Minimum 3 orang",
          featured: true,
          points: [
            "SIMAKSI",
            "Guide",
            "Tenda",
            "Makan selama pendakian",
            "Ojek Basecamp - Pos 1",
            "Welcome drink",
            "Souvenir",
          ],
        },
        {
          name: "Paket C",
          tagline: "Camping Premium",
          price: "1.699.000",
          unit: "/ orang",
          slot: "Private Trip",
          featured: false,
          points: [
            "Semua fasilitas Paket B",
            "Lampu tenda",
            "Meja & kursi",
            "Shelter",
            "Personal porter",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "✓"] },
        { label: "SIMAKSI", values: ["✓", "✓", "✓"] },
        { label: "Welcome Drink", values: ["✓", "✓", "✓"] },
        { label: "Snack", values: ["✓", "—", "—"] },
        { label: "Makan", values: ["—", "Selama Trek", "Selama Trek"] },
        { label: "Ojek Pos 1", values: ["✓", "✓", "✓"] },
        { label: "Tenda", values: ["—", "✓", "✓"] },
        { label: "Lampu Tenda", values: ["—", "—", "✓"] },
        { label: "Shelter", values: ["—", "—", "✓"] },
        { label: "Personal Porter", values: ["—", "—", "✓"] },
        { label: "Souvenir", values: ["—", "✓", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah trip ini sampai puncak Argopuro?",
          a: "Tidak. Destinasi utama adalah Danau Taman Hidup sehingga cocok untuk camping santai maupun pendaki pemula.",
        },
        {
          q: "Apakah cocok untuk pemula?",
          a: "Ya. Jalur menuju Taman Hidup relatif lebih ramah dibanding summit Argopuro sehingga cocok bagi pendaki yang baru memulai.",
        },
      ],
    },

    /* ─── TRIP : GUNUNG RAUNG ─────────────────────────────────────── */
    {
      id: "gunung-raung",
      name: "Gunung Raung",
      route: "via Kalibaru",
      nextDate: "19 Sep 2026",
      slotLeft: 6,
      elevation: "3.344",
      distance: "18",
      duration: "3",
      difficulty: "Expert",
      meetingPoint: "Basecamp Kalibaru, Banyuwangi",

      description:
        "Gunung Raung merupakan salah satu gunung paling menantang di Pulau Jawa. Jalur Kalibaru terkenal dengan trek panjang, medan terjal, serta jalur climbing menuju puncak sejati yang membutuhkan perlengkapan keselamatan dan pengalaman pendakian.",

      packages: [
        {
          name: "Paket A",
          tagline: "Pendakian Dasar",
          price: "499.000",
          unit: "/ orang",
          slot: "Open Trip",
          featured: false,
          points: [
            "Guide",
            "Harness & Helm",
            "Souvenir",
            "Basecamp",
            "Medkit",
            "Sertifikat",
          ],
        },
        {
          name: "Paket B",
          tagline: "Paling banyak dipilih",
          price: "899.000",
          unit: "/ orang",
          slot: "Open Trip",
          featured: true,
          points: [
            "SIMAKSI",
            "Guide",
            "Harness & Helm",
            "2 Souvenir",
            "Basecamp",
            "Medkit",
            "Ojek PP Basecamp - Pos 1",
            "Makan siang 1x",
            "Porter air 3L",
            "Sertifikat",
          ],
        },
        {
          name: "Paket C",
          tagline: "Private Summit",
          price: "1.500.000",
          unit: "/ orang",
          slot: "Private Trip",
          featured: false,
          points: [
            "SIMAKSI",
            "Guide",
            "Harness & Helm",
            "Souvenir Premium",
            "Basecamp",
            "Medkit",
            "Ojek PP Stasiun - Basecamp",
            "Ojek PP Basecamp - Pos 1",
            "Makan selama pendakian (3x/hari)",
            "Porter air 3L",
            "Porter tenda",
            "Sertifikat",
          ],
        },
      ],

      benefitRows: [
        { label: "Guide", values: ["✓", "✓", "✓"] },
        { label: "SIMAKSI", values: ["—", "✓", "✓"] },
        { label: "Harness & Helm", values: ["✓", "✓", "✓"] },
        { label: "Medkit", values: ["✓", "✓", "✓"] },
        { label: "Souvenir", values: ["1", "2", "Premium"] },
        { label: "Ojek Pos 1", values: ["—", "✓", "✓"] },
        { label: "Ojek Stasiun", values: ["—", "—", "✓"] },
        { label: "Makan", values: ["—", "1x", "3x / hari"] },
        { label: "Porter Air", values: ["—", "3L", "3L"] },
        { label: "Porter Tenda", values: ["—", "—", "✓"] },
        { label: "Sertifikat", values: ["✓", "✓", "✓"] },
      ],

      faqs: [
        {
          q: "Apakah Gunung Raung cocok untuk pendaki pemula?",
          a: "Tidak disarankan. Jalur menuju puncak memiliki medan teknikal dan membutuhkan pengalaman serta kondisi fisik yang sangat baik.",
        },
        {
          q: "Apakah alat climbing sudah disediakan?",
          a: "Ya. Seluruh paket sudah mendapatkan harness dan helm sebagai perlengkapan keselamatan. Pendaki wajib mengikuti arahan guide selama melewati jalur teknikal.",
        },
      ],
    },
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
