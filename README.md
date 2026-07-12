# VMS.inc — Website Perusahaan

Website informatif satu halaman untuk **PT Ventura Makmur Sejahtera (VMS.inc)**, dibangun dengan HTML/CSS/JS murni (tanpa framework) agar mudah di-deploy ke Netlify langsung dari GitHub.

## Struktur folder

```
vms-website/
├── index.html          # Seluruh konten & struktur halaman
├── css/style.css        # Semua styling & design tokens (warna, tipografi)
├── js/script.js         # Menu mobile & animasi scroll-reveal
├── assets/               # Logo VMS, VOW, W.AI
└── netlify.toml          # Konfigurasi deploy Netlify
```

## Cara upload ke GitHub

1. Buat repository baru di GitHub (mis. `vms-website`).
2. Di folder ini, jalankan:
   ```
   git init
   git add .
   git commit -m "Initial website VMS.inc"
   git branch -M main
   git remote add origin https://github.com/USERNAME/vms-website.git
   git push -u origin main
   ```

## Cara deploy ke Netlify

1. Login ke [app.netlify.com](https://app.netlify.com).
2. Pilih **Import a Git repository → GitHub**, lalu pilih repo `vms-website`.
3. Build settings dibiarkan kosong (situs ini statis, tidak perlu build command). Publish directory: `.` (root).
4. Klik **Deploy** — selesai dalam hitungan detik.

Alternatif tercepat: buka **Upload your project files** di dashboard Netlify, lalu drag & drop seluruh folder `vms-website` ini.

## Yang perlu Anda sesuaikan sebelum go-live

- **Email kontak**: saat ini masih placeholder `hello@vmsinc.co.id` — ganti di `index.html` (bagian `#kontak`) dengan alamat email resmi perusahaan.
- **Lokasi/alamat kantor**: bagian "Lokasi" di kontak masih generik ("Indonesia") — tambahkan alamat lengkap bila ingin ditampilkan.
- Semua konten lain (visi-misi, layanan, produk VOW & W.AI, modul, klien) diambil langsung dari Company Profile yang Anda lampirkan.

## Palet warna

Diambil langsung dari gradasi logo VMS (`#6E4AF2 → #9B6EF6 → #ACC5FC`), dipasangkan dengan latar indigo gelap (`#12101F`) untuk bagian dengan aksen tinggi, dan putih bersih (`#FAFAFD`) untuk bagian informatif.
