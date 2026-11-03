/* Fungsi bantu bersama untuk semua section (jangan diubah) */
(function(){
  const standalone = window.parent === window;
  const $ = id => document.getElementById(id);
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function kirim(o){
    if(standalone) return;
    try{ parent.postMessage(Object.assign({mading:true}, o), '*'); }catch(e){}
  }

  function skala(){
    const s = Math.min(innerWidth/1920, innerHeight/804);
    const x = (innerWidth - 1920*s)/2, y = (innerHeight - 804*s)/2;
    document.body.style.transform = `translate(${x}px,${y}px) scale(${s})`;
  }

  /* Dipanggil sekali di awal tiap section */
  function init(o){
    o = o || {};
    if(o.warna) document.documentElement.style.setProperty('--accent', o.warna);
    if(standalone){
      document.documentElement.classList.add('standalone');
      skala(); addEventListener('resize', skala);
    }
    addEventListener('keydown', e => kirim({type:'tombol', key:e.key}));
    addEventListener('click', () => kirim({type:'klik'}));
    kirim({type:'siap', warna:o.warna, judul:o.judul});
  }

  /* Jalankan setelah font siap (maks. 1,5 detik) */
  async function mulai(fn){
    if(document.fonts && document.fonts.ready){
      await Promise.race([document.fonts.ready, wait(1500)]);
    }
    await fn();
  }

  /* Isi blok judul dan ulang animasinya */
  function judul(o){
    $('kicker').textContent = o.kicker || '';
    $('tTitle').textContent = o.judul || '';
    $('tSub').textContent   = o.sub || '';
    $('tAr').textContent    = o.arab || '';
    const t = $('title');
    t.classList.remove('out','run'); void t.offsetWidth; t.classList.add('run');
  }

  /* Bilah kemajuan selama total waktu section */
  function bar(ms){
    const b = $('bar'); if(!b) return;
    b.style.animation = 'none'; void b.offsetWidth;
    b.style.animation = `fill ${ms}ms linear forwards`;
  }

  /* Kecilkan huruf sampai isi muat di dalam kotak */
  function muatTinggi(inner, box, min){
    inner.style.fontSize = '';
    let fs = parseFloat(getComputedStyle(inner).fontSize);
    while(inner.offsetHeight > box.clientHeight - 4 && fs > (min || 36)){
      fs -= 2; inner.style.fontSize = fs + 'px';
    }
  }

  /* Beri tahu halaman utama bahwa section selesai */
  function selesai(){
    kirim({type:'selesai'});
    if(standalone) setTimeout(() => location.reload(), 1500);  // ulang terus saat uji coba
  }

  window.Mading = { init, mulai, judul, bar, muatTinggi, selesai, wait, pad, esc, $ };
})();
