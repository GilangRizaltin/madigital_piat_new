/* =====================================================================
   PENGATURAN UMUM — Majalah Dinding PIAT 12
   Pesantren Islam Al Irsyad Tengaran 12

   File ini mengatur bagian yang SAMA di semua section:
   logo, running text (kiri bawah), dan urutan section.
   Setelah mengubah file ini, cukup refresh halaman (F5) sekali.
   ===================================================================== */
window.PENGATURAN = {

  /* ---------- PERFORMA ----------
     true  = MODE RINGAN: efek berat (blur, huruf melayang, bayangan, cahaya)
             dimatikan. Disarankan untuk smart TV agar animasi tetap mulus.
     false = tampilan penuh (cocok untuk laptop / PC). */
  MODE_RINGAN : true,

  /* ---------- LOGO (kiri atas) ---------- */
  NAMA_PROYEK : 'Majalah Dinding PIAT 12',
  SKALA : 0.88,    // 1 = pas layar. Kecilkan (0.85, 0.8, ...) sampai semua tepi terlihat
  SUB_NAMA    : 'Pesantren Islam Al Irsyad Tengaran 12',
  LOGO_TEKS   : '١٢',        // tulisan di kotak logo bila belum ada gambar
  LOGO_GAMBAR : '',          // isi mis. 'aset/logo.png' untuk memakai logo asli

  /* ---------- RUNNING TEXT (kiri bawah) ---------- */
  KECEPATAN_RUNNING_TEXT : 120,   // piksel per detik (naikkan = lebih cepat)
  RUNNING_TEXT : [
    'Selamat datang di Majalah Dinding Digital PIAT 12 — Pesantren Islam Al Irsyad Tengaran 12.',
    'Jaga sholat berjamaah tepat pada waktunya.',
    'Ucapkan <span class="a" lang="ar" dir="rtl">السَّلَامُ عَلَيْكُمْ</span> kepada setiap teman dan guru yang kamu temui.',
    'Jaga kebersihan diri, kamar, dan lingkungan pesantren.',
    'Bahasa Arab ditulis dan dibaca dari <b>kanan ke kiri</b>.',
    'Belajar 10 menit setiap hari lebih efektif daripada belajar lama sekali seminggu.'
  ],

  /* ---------- URUTAN SECTION ----------
     file  : nama file di folder "bagian"
     label : tulisan kecil di pojok kanan atas
     warna : warna cadangan (warna utama diatur di file section masing-masing)
     maks  : batas waktu maksimal (detik) bila sebuah section macet
     Hapus satu baris bila ingin menyembunyikan section itu. */
  BAGIAN : [
    { file:'1-nasehat.html',       label:'Nasehat & Dalil',  warna:'#34d399', maks:300 },
    { file:'2-kosakata.html',      label:'Kosakata',         warna:'#38bdf8', maks:300 },
    { file:'3-pengetahuan.html',   label:'Pengetahuan Umum', warna:'#a78bfa', maks:300 },
    { file:'4-kuis.html',          label:'Kuis',             warna:'#fb923c', maks:300 },
    { file:'5-jadwal-sholat.html', label:'Jadwal Sholat',    warna:'#2dd4bf', maks:120 }
  ],

  /* Halaman utama dimuat ulang otomatis setiap sekian menit (di sela pergantian
     section), agar perubahan file ikut terbaca tanpa menyentuh TV. */
  MUAT_ULANG_MENIT : 60      // 0 = tidak pernah. Di TV, muat ulang berkala membersihkan memori browser
};