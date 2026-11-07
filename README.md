# Kopi Nusantara — Landing Page UMKM

Landing page modern premium untuk usaha kedai kopi. Dibangun menggunakan HTML5, CSS3, JavaScript vanilla, dan Bootstrap 5. Tidak membutuhkan database atau backend.

## Fitur
- Desain modern premium dengan palet cokelat kopi dan krem.
- Responsive untuk desktop, tablet, dan smartphone.
- Navigasi Bootstrap 5 dengan efek saat halaman di-scroll.
- Bagian hero, cerita usaha, menu, kutipan brand, dan kontak.
- Filter menu berdasarkan kategori: Semua, Signature, Coffee, dan Non Coffee.
- Tombol WhatsApp, toast interaksi, dan tahun copyright otomatis.
- Ilustrasi SVG lokal di folder `images/`, sehingga aset visual utama tidak bergantung pada layanan gambar eksternal.

## Struktur folder
```text
kopi-nusantara/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-coffee.svg
    ├── coffee-origin.svg
    ├── menu-gula-aren.svg
    ├── menu-latte.svg
    ├── menu-black.svg
    ├── menu-mocha.svg
    ├── menu-matcha.svg
    └── menu-tea.svg
```

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `kopi-nusantara`.
3. Klik dua kali `index.html`, atau jalankan menggunakan ekstensi **Live Server** di Visual Studio Code.

Tidak ada proses instalasi dan tidak ada konfigurasi database.

## Bagian yang perlu disesuaikan
Buka `index.html`, lalu sesuaikan:
- Nomor WhatsApp pada tautan `https://wa.me/6281234567890` (gunakan kode negara, tanpa tanda `+` atau spasi).
- Alamat kedai.
- Jam operasional.
- Username Instagram.
- Nama, deskripsi, dan harga menu sesuai produk sebenarnya.

## Teknologi
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.3 via CDN
- Google Fonts via CDN

**Catatan:** Bootstrap dan Google Fonts memerlukan koneksi internet. Layout dan ilustrasi SVG lokal tetap tersedia tanpa layanan gambar eksternal.
