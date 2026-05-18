PE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Análisis de Imagen - <!-- ✏️ ESTACIÓN: ej. "Otoño Claro" --> Otoño Claro</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Cormorant Garamond', serif; background: #F8F5F1; }
.header-logo-strip {
  width: 100%;
  background: #FFFFFF;
  display: block;
  line-height: 0;
}
.header-logo-strip img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center 4%;
  height: 130px;
}
.header {
  background: linear-gradient(160deg, #2F4A4F 0%, #3d6068 50%, #4E5D56 100%);
  padding: 36px 20px 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 60% 40%, rgba(194,113,79,0.12) 0%, transparent 65%);
  pointer-events: none;
}
.header-inner {
  position: relative;
  z-index: 1;
  max-width: 540px;
  margin: 0 auto;
}
.header-logo-wrap {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-logo-img {
  width: 90px;
  height: 90px;
  display: block;
  object-fit: contain;
  border-radius: 4px;
  margin-bottom: 14px;
}
.header-brand-name {
  font-family: "Cormorant Garamond", serif !important;
  font-size: 26px !important;
  font-weight: 400 !important;
  letter-spacing: 8px !important;
  color: #F8F5F1 !important;
  line-height: 1 !important;
  display: block !important;
}
.header-brand-line {
  width: 40px !important;
  height: 1.5px !important;
  background: #C2714F !important;
  margin: 9px auto !important;
  display: block !important;
  opacity: 1 !important;
}
.header-brand-haus {
  font-family: "Inter", sans-serif !important;
  font-size: 11px !important;
  font-weight: 300 !important;
  letter-spacing: 6px !important;
  color: rgba(248,245,241,0.8) !important;
  display: block !important;
}

.header-divider-line {
  width: 48px;
  height: 1px;
  background: #C2714F;
  margin: 0 auto 18px;
  opacity: 0.7;
}
.header-label {
  font-size: 10px;
  letter-spacing: 4px;
  color: rgba(253,246,238,0.65);
  font-family: 'Inter', sans-serif;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.header h1 {
  font-size: 30px;
  color: #F8F5F1;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.header-sub { font-size: 13px; color: rgba(253,246,238,0.9); letter-spacing: 3px; font-family: 'Inter', sans-serif; }
.header-tag { margin-top: 10px; font-size: 13px; color: rgba(253,246,238,0.6); font-style: italic; font-family: 'Inter', sans-serif; }

nav { display: flex; overflow-x: auto; background: #2F4A4F; padding: 0 10px; position: sticky; top: 0; z-index: 100; scrollbar-width: none; }
nav::-webkit-scrollbar { display: none; }
nav button { padding: 14px 16px; border: none; cursor: pointer; white-space: nowrap; font-size: 11px; letter-spacing: 1px; font-family: 'Inter', sans-serif; background: transparent; color: #B8C4C0; border-bottom: 2px solid transparent; transition: all 0.3s; }
nav button.active { background: #C2714F; color: #F8F5F1; border-bottom: 2px solid #7A9080; }
nav button:hover:not(.active) { color: #F8F5F1; background: rgba(194,113,79,0.2); }

.container { max-width: 980px; margin: 0 auto; padding: 35px 20px; }
section { display: none; animation: fadeIn 0.4s ease; }
section.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.sec-title { color: #5B7B6F; font-size: 26px; font-weight: 300; margin-bottom: 10px; }
.sec-intro { color: #3D4E48; line-height: 1.9; margin-bottom: 28px; font-size: 15px; font-family: 'Inter', sans-serif; }
.white-card { background: white; border-radius: 16px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 14px rgba(194,113,79,0.1); }
.two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px; }
.three-cols { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 22px; }
.dark-box { background: #2F4A4F; border-radius: 14px; padding: 28px; color: #B8C4C0; margin-bottom: 22px; }
.list-item { padding: 7px 0; border-bottom: 1px solid rgba(180,196,192,0.3); color: #3D4E48; font-size: 13px; font-family: 'Inter', sans-serif; }
.tip-box { padding: 14px; background: #F0F4F2; border-radius: 10px; font-size: 13px; color: #5B7B6F; line-height: 1.6; font-family: 'Inter', sans-serif; margin-top: 16px; }
.card-h3 { font-size: 17px; margin-bottom: 16px; }
.brown { color: #5B7B6F; } .terra { color: #C2714F; } .teal { color: #4A7A75; }

/* GARMENTS */
.garment-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 14px; margin-bottom: 24px; }
.garment-card { background: white; border-radius: 14px; padding: 14px 8px 12px; text-align: center; box-shadow: 0 2px 10px rgba(194,113,79,0.1); transition: transform 0.25s, box-shadow 0.25s; cursor: default; }
.garment-card:hover { transform: translateY(-5px); box-shadow: 0 8px 24px rgba(194,113,79,0.2); }
.garment-card svg { width: 80px; height: 100px; margin: 0 auto 8px; display: block; }
.garment-name { font-size: 11px; color: #2F4A4F; font-weight: 700; margin-bottom: 3px; font-family: 'Inter', sans-serif; }
.garment-tip { font-size: 10px; color: #6B7C76; line-height: 1.4; font-style: italic; font-family: 'Inter', sans-serif; }

/* PALETTE */
.palette-grid { display: grid; grid-template-columns: repeat(8,1fr); gap: 10px; margin-bottom: 20px; }
.swatch { text-align: center; }
.swatch-box { width: 100%; padding-bottom: 100%; border-radius: 10px; position: relative; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin-bottom: 6px; }
.swatch-fill { position: absolute; inset: 0; border-radius: 10px; }
.swatch-name { font-size: 10px; color: #3D4E48; font-family: 'Inter', sans-serif; line-height: 1.3; }

/* HAIR */
.hair-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-bottom: 24px; }
.hair-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 22px rgba(194,113,79,0.15); }
.hair-header { background: #5B7B6F; padding: 22px 20px 18px; color: white; text-align: center; }
.hair-body { padding: 22px; }
.hair-color-box { background: #F0F4F2; border-radius: 8px; padding: 12px; margin: 12px 0; font-size: 12px; color: #C2714F; font-family: 'Inter', sans-serif; }

/* ACCESSORIES */
.acc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 24px; }
.acc-card { background: white; border-radius: 16px; padding: 22px 18px; text-align: center; box-shadow: 0 2px 14px rgba(194,113,79,0.1); transition: transform 0.25s; }
.acc-card:hover { transform: translateY(-4px); }
.acc-card svg { width: 75px; height: 75px; margin: 0 auto 10px; display: block; }
.acc-title { color: #5B7B6F; font-size: 15px; margin-bottom: 10px; }
.acc-item { font-size: 12px; color: #3D4E48; padding: 5px 0; border-bottom: 1px solid rgba(180,196,192,0.25); font-family: 'Inter', sans-serif; text-align: left; }
.acc-why { margin-top: 10px; background: #F0F4F2; border-radius: 8px; padding: 10px; font-size: 11px; color: #5B7B6F; line-height: 1.5; font-style: italic; font-family: 'Inter', sans-serif; text-align: left; }

.season-warm { background: rgba(78,93,86,0.06); border: 1px solid rgba(78,93,86,0.2); border-radius: 16px; padding: 26px; margin-bottom: 26px; }
.season-cold { background: rgba(47,74,79,0.06); border: 1px solid rgba(47,74,79,0.2); border-radius: 16px; padding: 26px; }
.season-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }

.welcome-box { background: rgba(78,93,86,0.05); border: 1px solid rgba(78,93,86,0.2); border-radius: 16px; padding: 42px; margin-bottom: 26px; text-align: center; }
.cards-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 26px; }
.card { background: white; border-radius: 14px; padding: 26px; text-align: center; box-shadow: 0 2px 14px rgba(194,113,79,0.1); border: 1px solid rgba(180,196,192,0.3); }
.final-banner { background: #5B7B6F; border-radius: 16px; padding: 36px; color: white; text-align: center; margin-top: 22px; }
.metals-row { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; margin-top: 14px; }
.metal-circle { width: 55px; height: 55px; border-radius: 50%; margin: 0 auto 7px; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }

@media(max-width:600px){
 .garment-grid { grid-template-columns: repeat(2,1fr); }
 .two-cols, .three-cols, .hair-grid, .acc-grid, .cards-3, .palette-grid { grid-template-columns: 1fr; }
 .palette-grid { grid-template-columns: repeat(4,1fr); }
}

  /* ── PALETA COMPLETA ── */
  .colores-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); gap: 12px; margin-bottom: 24px; }
  .color-item { display: flex; align-items: center; gap: 12px; background: white; border-radius: 10px; padding: 12px; box-shadow: 0 1px 6px rgba(0,0,0,0.06); }
  .color-swatch-small { width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
  .color-info { display: flex; flex-direction: column; gap: 2px; }
  .color-name { font-size: 12px; font-weight: 600; color: #2F4A4F; font-family: 'Inter', sans-serif; }
  .color-use { font-size: 10px; color: #6B7C76; font-family: 'Inter', sans-serif; line-height: 1.3; }
  .color-hex { font-size: 10px; color: #C2714F; font-family: monospace; }
  .restan-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .restan-item { background: white; padding: 14px; border-radius: 10px; border-left: 4px solid #C2714F; }
  .restan-item strong { font-size: 13px; color: #2F4A4F; display: block; margin-bottom: 4px; font-family: 'Inter', sans-serif; }
  .restan-item span { font-size: 12px; color: #6B7C76; font-family: 'Inter', sans-serif; }

  /* ── MAQUILLAJE ── */
  .makeup-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; margin-bottom: 24px; }
  .makeup-card { background: white; border-radius: 14px; padding: 22px; box-shadow: 0 2px 10px rgba(47,74,79,0.08); }
  .makeup-title { font-size: 14px; font-weight: 600; color: #5B7B6F; margin-bottom: 14px; font-family: 'Inter', sans-serif; display: flex; align-items: center; gap: 8px; }
  .makeup-swatch-row { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
  .makeup-swatch { width: 32px; height: 32px; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.2); flex-shrink: 0; }

  /* ── ESTILO PERSONAL ── */
  .estilo-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 24px; }
  .estilo-card { background: white; border-radius: 14px; padding: 22px 18px; text-align: center; box-shadow: 0 2px 14px rgba(47,74,79,0.08); border-top: 4px solid #C2714F; }
  .estilo-title { font-size: 15px; color: #5B7B6F; margin-bottom: 8px; font-weight: 600; font-family: 'Inter', sans-serif; }
  .estilo-desc { font-size: 12px; color: #3D4E48; line-height: 1.6; font-family: 'Inter', sans-serif; }
  .estilo-palabras { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; justify-content: center; }
  .estilo-tag { background: rgba(78,93,86,0.08); border: 1px solid rgba(78,93,86,0.25); border-radius: 20px; padding: 4px 12px; font-size: 10px; color: #5B7B6F; font-family: 'Inter', sans-serif; letter-spacing: 0.5px; }

  @media(max-width:600px){
    .makeup-grid, .estilo-grid, .restan-grid { grid-template-columns: 1fr; }
    .colores-grid { grid-template-columns: 1fr; }
  }


  /* ── EDITORIAL QUOTES ── */
  .editorial-quote {
    text-align: center;
    padding: 48px 20px;
    margin: 8px 0;
  }
  .editorial-quote p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 300;
    color: #5B7B6F;
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto;
    font-style: italic;
  }
  .editorial-divider {
    width: 60px;
    height: 1px;
    background: #C2714F;
    margin: 18px auto 0;
    opacity: 0.6;
  }

  /* ── SECTION SUBTITLE ── */
  .sec-subtitle {
    font-size: 12px;
    letter-spacing: 2px;
    color: #6B7C76;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  /* ── POIEMAHAUS HEADER ── */
  .brand-label {
    font-size: 10px;
    letter-spacing: 4px;
    color: rgba(248,245,241,0.55);
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  /* ── SPACING ── */
  .sec-intro { margin-bottom: 32px; }
  .white-card { margin-bottom: 28px; }
  section { padding-bottom: 20px; }


/* ── PALETA SWATCHES ── */
.palette-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(68px,1fr)); gap:10px; margin:16px 0; }
.swatch { text-align:center; }
.swatch-box { width:100%; aspect-ratio:1; border-radius:10px; overflow:hidden; margin-bottom:5px; box-shadow:0 2px 8px rgba(0,0,0,0.12); }
.swatch-fill { width:100%; height:100%; }
.swatch-name { font-size:10px; color:#5B7B6F; font-family:'Inter',sans-serif; line-height:1.3; }

/* ── PALETA COMPLETA ── */
.colores-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:12px; margin:16px 0; }
.color-item { display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.5); border-radius:10px; padding:10px 14px; }
.color-swatch-small { width:36px; height:36px; border-radius:8px; flex-shrink:0; box-shadow:0 2px 6px rgba(0,0,0,0.15); }
.color-info { display:flex; flex-direction:column; gap:2px; }
.color-name { font-size:13px; font-weight:600; color:#2F4A4F; font-family:'Cormorant Garamond',serif; }
.color-use { font-size:11px; color:#7A9080; font-family:'Inter',sans-serif; line-height:1.4; }
.color-hex { font-size:10px; color:#AAB8B4; font-family:'Inter',sans-serif; letter-spacing:1px; }
.restan-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:10px; margin-top:12px; }
.restan-item { background:rgba(194,113,79,0.08); border-radius:8px; padding:10px 14px; }
.restan-item strong { display:block; font-size:13px; color:#C2714F; margin-bottom:3px; }
.restan-item span { font-size:11px; color:#7A9080; font-family:'Inter',sans-serif; }

/* ── MAQUILLAJE ── */
.makeup-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:16px; margin:16px 0; }
.makeup-card { background:rgba(255,255,255,0.5); border-radius:14px; padding:18px; }
.makeup-title { font-family:'Cormorant Garamond',serif; font-size:16px; font-weight:600; color:#2F4A4F; margin-bottom:12px; }
.makeup-swatch-row { display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap; }
.makeup-swatch { width:32px; height:32px; border-radius:50%; box-shadow:0 2px 6px rgba(0,0,0,0.2); cursor:pointer; }
.makeup-item { font-size:12px; color:#5B7B6F; font-family:'Inter',sans-serif; padding:3px 0; border-bottom:1px solid rgba(180,196,192,0.3); }

/* ── METALES ── */
.metals-row { display:flex; gap:20px; align-items:flex-start; flex-wrap:wrap; margin-top:12px; }
.metal-circle { width:52px; height:52px; border-radius:50%; margin:0 auto 6px; box-shadow:0 3px 12px rgba(0,0,0,0.2); }

/* ── SEC SUBTITLE ── */
.sec-subtitle { font-family:'Inter',sans-serif; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#9B8E7C; margin-bottom:16px; }

/* ── TIP BOX ── */
.tip-box { background:rgba(194,113,79,0.08); border-left:3px solid #C2714F; border-radius:0 8px 8px 0; padding:12px 16px; margin-top:12px; font-size:13px; color:#5B5040; font-family:'Inter',sans-serif; line-height:1.6; }


/* ── CORTES CON IMAGEN ── */
.cortes-img-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; margin-bottom:8px; }
.corte-card-img { background:rgba(255,255,255,0.55); border-radius:16px; overflow:hidden; box-shadow:0 2px 12px rgba(47,74,79,0.08); transition:transform 0.2s; }
.corte-card-img:hover { transform:translateY(-3px); }
.corte-img-container { width:100%; aspect-ratio:3/4; background:#EDE8E0; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.corte-img { width:100%; height:100%; object-fit:cover; display:block; }
.corte-img-loader { font-size:12px; color:#9B8E7C; font-family:'Inter',sans-serif; text-align:center; padding:20px; }
.corte-img-placeholder { text-align:center; color:#9B8E7C; font-family:'Inter',sans-serif; font-size:28px; padding:30px 20px; line-height:1.6; }
.corte-img-placeholder span { display:block; font-size:12px; margin-top:8px; }
.corte-card-text { padding:14px 16px; }
.corte-nombre { font-size:15px; font-weight:600; color:#2F4A4F; font-family:'Cormorant Garamond',serif; margin-bottom:5px; }
.corte-detalle { font-size:12px; color:#6B7C76; font-family:'Inter',sans-serif; line-height:1.6; }


.img-spinner { width:20px;height:20px;border:2px solid #C2714F33;border-top-color:#C2714F;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 8px; }
@keyframes spin { to { transform:rotate(360deg); } }
.corte-card-general { background:rgba(194,113,79,0.06); border:1px dashed rgba(194,113,79,0.3); }
.corte-card-general .corte-nombre { color:#C2714F; }


/* ── CORTES INFOGRAPHIC ── */
.cortes-infographic-wrap {
  width: 100%;
  margin: 0 0 28px 0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(47,74,79,0.12);
}
.cortes-infographic {
  width: 100%;
  height: auto;
  display: block;
}


/* ══ SECCIÓN NOVIA ══ */
.novia-hero {
  text-align: center;
  padding: 36px 20px 28px;
  background: linear-gradient(135deg, rgba(194,113,79,0.06), rgba(91,123,111,0.06));
  border-radius: 16px;
  margin-bottom: 24px;
}
.novia-hero-tag {
  font-size: 11px;
  letter-spacing: 3px;
  color: #C2714F;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.novia-hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 300;
  color: #2F4A4F;
  margin-bottom: 10px;
}
.novia-hero-sub {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #7A9080;
  line-height: 1.7;
}
.novia-blanco-block {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(194,113,79,0.25);
  border-radius: 14px;
  padding: 22px 24px;
  margin-bottom: 22px;
}
.novia-blanco-label {
  font-size: 11px;
  letter-spacing: 2px;
  color: #C2714F;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.novia-blanco-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  color: #2F4A4F;
  margin-bottom: 6px;
}
.novia-blanco-evitar {
  font-size: 12px;
  color: #C2714F;
  font-family: 'Inter', sans-serif;
  margin-bottom: 12px;
}
.novia-nota {
  font-size: 13px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  font-style: italic;
  border-left: 3px solid rgba(194,113,79,0.4);
  padding-left: 14px;
}
.novia-palette {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 12px;
  margin-top: 14px;
}
.novia-swatch { text-align: center; }
.novia-swatch-color {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  margin-bottom: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.novia-swatch-nombre {
  font-size: 11px;
  font-weight: 600;
  color: #3D4E48;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2px;
}
.novia-swatch-desc {
  font-size: 10px;
  color: #7A9080;
  font-family: 'Inter', sans-serif;
  line-height: 1.4;
}
.novia-vestidos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}
.novia-vestido-card {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(91,123,111,0.15);
  border-radius: 14px;
  padding: 20px 18px;
  position: relative;
}
.novia-vestido-num {
  font-size: 11px;
  letter-spacing: 2px;
  color: #C2714F;
  font-family: 'Inter', sans-serif;
  margin-bottom: 4px;
}
.novia-vestido-emoji {
  font-size: 28px;
  margin-bottom: 10px;
}
.novia-vestido-nombre {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 600;
  color: #2F4A4F;
  margin-bottom: 8px;
}
.novia-vestido-desc {
  font-size: 12px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  margin-bottom: 12px;
}
.novia-vestido-detalles .list-item {
  font-size: 11px;
  color: #7A9080;
}
.novia-escote-card { border-left: 3px solid #5B7B6F !important; }
.novia-escote-tag {
  font-size: 11px;
  letter-spacing: 2px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  margin-bottom: 6px;
}
#btn-novia {
  background: linear-gradient(135deg, rgba(194,113,79,0.15), rgba(91,123,111,0.1));
  border: 1px solid rgba(194,113,79,0.4) !important;
  color: #C2714F !important;
  font-weight: 600;
}
#btn-novia:hover, #btn-novia.active {
  background: linear-gradient(135deg, rgba(194,113,79,0.3), rgba(91,123,111,0.15)) !important;
}


/* ══ COMBINACIONES DE COLOR ══ */
.combi-regla-box {
  background: linear-gradient(135deg, rgba(91,123,111,0.08), rgba(194,113,79,0.06));
  border: 1px solid rgba(91,123,111,0.2);
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 24px;
}
.combi-regla-tag {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #9B8E7C;
  font-family: 'Inter', sans-serif;
  margin-bottom: 6px;
}
.combi-regla-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: #2F4A4F;
  margin-bottom: 8px;
  font-weight: 500;
}
.combi-regla-logica {
  font-size: 13px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
}
.combi-card {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(91,123,111,0.12);
  border-radius: 18px;
  padding: 24px;
  margin-bottom: 20px;
}
.combi-card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-left: 14px;
  margin-bottom: 14px;
}
.combi-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1;
  min-width: 36px;
}
.combi-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 500;
  color: #2F4A4F;
  margin-bottom: 2px;
}
.combi-subtitulo {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #9B8E7C;
  font-family: 'Inter', sans-serif;
}
.combi-descripcion {
  font-size: 13px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.75;
  margin-bottom: 20px;
}
.combi-visual-row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.combi-outfit {
  text-align: center;
  flex-shrink: 0;
}
.combi-svg {
  width: 90px;
  height: 144px;
  filter: drop-shadow(0 4px 12px rgba(47,74,79,0.15));
}
.combi-outfit-label {
  font-size: 10px;
  color: #9B8E7C;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 6px;
}
.combi-swatches {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
  flex: 1;
}
.combi-swatch-item {
  text-align: center;
  min-width: 60px;
}
.combi-swatch-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: 0 auto 6px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}
.combi-swatch-label {
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #9B8E7C;
  font-family: 'Inter', sans-serif;
  margin-bottom: 2px;
}
.combi-swatch-name {
  font-size: 11px;
  color: #3D4E48;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 1.3;
}
.combi-nota {
  font-size: 12px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  border-top: 1px solid rgba(91,123,111,0.15);
  padding-top: 14px;
  line-height: 1.6;
}


/* ── NOVIA INFOGRAPHIC ── */
.novia-infographic-wrap {
  width: 100%;
  margin: 0 0 24px 0;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(47,74,79,0.14);
}
.novia-infographic {
  width: 100%;
  height: auto;
  display: block;
}
/* ── NOVIA TIPS GRID ── */
.novia-tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}
.novia-tip-card {
  background: rgba(255,255,255,0.55);
  border: 1px solid rgba(91,123,111,0.12);
  border-radius: 14px;
  padding: 16px;
  text-align: center;
}
.novia-tip-icon {
  font-size: 26px;
  margin-bottom: 8px;
}
.novia-tip-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-weight: 600;
  color: #2F4A4F;
  margin-bottom: 6px;
}
.novia-tip-texto {
  font-size: 11px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.65;
}


/* ── NOVIA VESTIDOS ELEGANTES ── */
.novia-vestidos-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-weight: 400;
  color: #2F4A4F;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 22px 0 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(91,123,111,0.15);
}
.novia-vestidos-elegantes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  background: rgba(255,255,255,0.55);
  border: 1px solid rgba(194,113,79,0.15);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
}
.nvest-col {
  padding: 22px 20px;
  border-right: 1px solid rgba(194,113,79,0.12);
}
.nvest-col:last-child {
  border-right: none;
}
.nvest-header {
  margin-bottom: 12px;
}
.nvest-num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  font-weight: 400;
  color: #C2714F;
  letter-spacing: 2px;
  margin-bottom: 4px;
}
.nvest-titulo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  color: #2F4A4F;
  line-height: 1.3;
}
.nvest-divider {
  width: 32px;
  height: 1px;
  background: #C2714F;
  margin: 10px 0 14px;
  opacity: 0.5;
}
.nvest-section-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9B8E7C;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin-bottom: 7px;
}
.nvest-bullets {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nvest-bullet {
  font-size: 11px;
  color: #3D4E48;
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
}
.nvest-detalle {
  font-size: 11px;
  color: #5B7B6F;
  font-family: 'Inter', sans-serif;
  line-height: 1.55;
}
.nvest-color-ideal {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nvest-color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.nvest-color-name {
  font-size: 11px;
  color: #3D4E48;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 1.4;
}
@media (max-width: 600px) {
  .novia-vestidos-elegantes {
    grid-template-columns: 1fr;
  }
  .nvest-col {
    border-right: none;
    border-bottom: 1px solid rgba(194,113,79,0.12);
  }
  .nvest-col:last-child { border-bottom: none; }
}

</style>
</head>
<body>

<!--
╔══════════════════════════════════════════════════════════╗
║           PLANTILLA POIEMAHAUS — GUÍA DE EDICIÓN         ║
╠══════════════════════════════════════════════════════════╣
║  Busca "✏️" con Ctrl+F para encontrar cada campo         ║
║  a editar. Estos son los campos principales:             ║
║                                                          ║
║  ✏️ NOMBRE         → Nombre de la clienta                ║
║  ✏️ ESTACIÓN       → Ej: Invierno Oscuro, Verano Suave   ║
║  ✏️ TIPO DE CUERPO → Ej: Reloj de Arena, Rectangular     ║
║  ✏️ TIPO DE ROSTRO → Ej: Ovalado, Cuadrado, Corazón      ║
║  ✏️ PALETA         → Colores HEX de su estación          ║
║  ✏️ MAQUILLAJE     → Colores según su paleta             ║
║  ✏️ ESENCIA        → 3 palabras de su estilo personal    ║
╚══════════════════════════════════════════════════════════╝
-->

<div class="header">
  <div class="header-inner">
    <div class="header-logo-wrap">
      <img src="images/logo.png" alt="Poiemahaus" class="header-logo-img" />
      <div class="header-brand-name">POIEMA</div>
      <div class="header-brand-line"></div>
      <div class="header-brand-haus">HAUS</div>
    </div>
    <!-- ✏️ NOMBRE: cambia "Tu Identidad Revelada" si quieres personalizar el título -->
    <h1 style="margin-top:20px">Tu Identidad Revelada</h1>
    <div class="header-tag">Creado exclusivamente para ti</div>
  </div>
</div>

<nav>
 <button class="active" onclick="show('bienvenida',this)"> BIENVENIDA</button>
 <button onclick="show('colorimetria',this)"> COLORIMETRÍA</button>
 <button onclick="show('cuerpo',this)"> SILUETA</button>
 <button onclick="show('capsulas',this)"> CÁPSULAS</button>
 <button onclick="show('cabello',this)"> CABELLO</button>
 <button onclick="show('accesorios',this)"> ACCESORIOS</button>
  <button onclick="show('paleta',this)">PALETA</button>
  <button onclick="show('maquillaje',this)">MAQUILLAJE</button>
  <button onclick="show('combinaciones',this)">COLORES</button>
  <button onclick="show('estilo',this)">ESTILO</button>
  <button id="btn-novia" onclick="show('novia',this)" style="display:none">✦ NOVIA</button>
</nav>

<div class="container">

<!-- BIENVENIDA -->
<section id="bienvenida" class="active">
 <div class="welcome-box">
 <div style="font-size:52px;margin-bottom:18px"></div>
 <!-- ✏️ NOMBRE CLIENTA: cambia "Cinthya" por el nombre de la clienta -->
 <h2 id="bienvenida-nombre" style="color:#5B7B6F;font-size:28px;font-weight:300;margin-bottom:16px">Querida Cinthya,</h2>
 <p style="color:#3D4E48;line-height:1.9;font-size:16px;max-width:640px;margin:0 auto;font-family:'Inter',sans-serif">Este estudio no crea tu identidad — la revela. Cada elemento aquí ha sido cuidadosamente observado para ayudarte a expresar con claridad quién eres y cómo deseas ser vista. Lo que tienes entre manos no es un manual de reglas — es un espejo. Y lo que refleja es, simplemente, tú.</p>
 </div>
 <div class="cards-3">
 <div class="card">
 <div style="font-size:36px;margin-bottom:10px"></div>
 <div style="font-size:10px;letter-spacing:2px;color:#C2714F;font-family:'Inter',sans-serif;margin-bottom:6px">TU ESTACIÓN</div>
 <div id="bienvenida-estacion" style="font-size:20px;color:#2F4A4F;font-weight:600;margin-bottom:8px">Otoño Claro</div>
 <div style="font-size:13px;color:#6B7C76;line-height:1.6;font-family:'Inter',sans-serif">La paleta que hace que tu piel resplandezca sin esfuerzo</div>
 </div>
 <div class="card">
 <div style="font-size:36px;margin-bottom:10px"></div>
 <div style="font-size:10px;letter-spacing:2px;color:#C2714F;font-family:'Inter',sans-serif;margin-bottom:6px">TU SILUETA</div>
 <div id="bienvenida-cuerpo" style="font-size:20px;color:#2F4A4F;font-weight:600;margin-bottom:8px">Cuerpo Pera</div>
 <div style="font-size:13px;color:#6B7C76;line-height:1.6;font-family:'Inter',sans-serif">Una silueta que, bien vestida, es pura elegancia</div>
 </div>
 <div class="card">
 <div style="font-size:36px;margin-bottom:10px"></div>
 <div style="font-size:10px;letter-spacing:2px;color:#C2714F;font-family:'Inter',sans-serif;margin-bottom:6px">TU ROSTRO</div>
 <!-- ✏️ TIPO DE ROSTRO: ej. "Ovalado", "Cuadrado", "Triángulo Invertido", "Diamante", "Triángulo", "Redondo", "Oblongo", "Rectángulo", "Corazón", "Alargado" -->
 <div style="font-size:20px;color:#2F4A4F;font-weight:600;margin-bottom:8px">Ovalado</div>
 <div style="font-size:13px;color:#6B7C76;line-height:1.6;font-family:'Inter',sans-serif">El lienzo más versátil para cualquier estilo</div>
 </div>
 </div>
 <div class="dark-box" style="text-align:center">
 <p style="font-style:italic;font-size:16px;line-height:1.9">"Cuando tu imagen está alineada con quien realmente eres, vestirte deja de ser una tarea — se convierte en un acto de confianza."</p>
 <div style="margin-top:14px;font-size:11px;letter-spacing:2px;color:#C2714F;font-family:'Inter',sans-serif">— Con amor, Claudia</div>
 </div>

  <div class="editorial-quote"><p>"Ya eres lo que buscas. Aquí solo aprendemos a mostrarlo."</p><div class="editorial-divider"></div></div>
</section>

<!-- COLORIMETRÍA -->
<section id="colorimetria">
<div id="colorimetria-content"></div>
<div class="editorial-quote"><p>"Tu paleta no te cambia — te habla. Y cuando la escuchas, todo se ilumina."</p><div class="editorial-divider"></div></div>
</section>

<!-- SILUETA -->
<section id="cuerpo">
<div id="cuerpo-content"></div>
<div class="editorial-quote"><p>"Vestirte bien no es una cuestión de talla. Es saber exactamente cómo presentarte al mundo."</p><div class="editorial-divider"></div></div>
</section>

<script>

// ╔══════════════════════════════════════════╗
// ║   ✏️  CONFIGURA AQUÍ A TU CLIENTA        ║
// ║   Solo cambia estos 5 valores            ║
// ╚══════════════════════════════════════════╝
const CONFIG = {
  NOMBRE:   "Cinthya",
  ESTACION: "Otoño Verdadero",
  CUERPO:   "Triángulo Invertido",   // Opciones: "Triángulo Invertido" | "Regla" | "Rectangular" | "Circular" | "Triángulo" | "Reloj de Arena" | "Tipo 8"
  ROSTRO:   "Ovalado",               // Opciones: "Ovalado" | "Cuadrado" | "Triángulo Invertido" | "Diamante" | "Triángulo" | "Redondo" | "Oblongo" | "Rectángulo" | "Corazón" | "Alargado"
  ESTILO:   "Clásico · Femenino · Sofisticado",
  ESTADO_CIVIL: "Soltera"  // Opciones: "Soltera" | "Casada" | "En relación" | "Otro"
};

const DATOS_CUERPO = {
  "Triángulo Invertido": {
    descripcion: "Tus hombros anchos, caderas angostas y piernas largas crean una silueta fuerte y elegante. Tu objetivo es equilibrar la parte superior con la inferior, añadiendo volumen y presencia en caderas y piernas.",
    superiores: ["Escotes V profundos", "Blusas sin hombros o con hombros caídos", "Tops en colores neutros y oscuros arriba", "Cuellos redondos simples", "Blusas fluidas sin estructura en hombros", "Telas suaves sin volumen en hombros", "Tops halter", "Blusas con detalles al centro"],
    inferiores: ["Faldas A-line con volumen", "Pantalones con bolsillos laterales", "Faldas con vuelo midi", "Pantalones palazzo en colores claros", "Faldas con estampados llamativos", "Pantalones flare", "Faldas con pliegues", "Shorts con volumen"],
    evitar: ["Hombros con padding o almohadillas", "Tops con mangas abullonadas", "Escotes barco anchos", "Rayas horizontales arriba", "Blazers con hombros estructurados"],
    principio: "Oscuro y simple arriba · Volumen y color abajo · Equilibrar proporciones"
  },
  "Regla": {
    descripcion: "Tu cuerpo atlético y estilizado es el lienzo perfecto para el estilo. Con pocas curvas naturales, tu objetivo es crear la ilusión de cintura y añadir dimensión donde desees.",
    superiores: ["Tops con detalles y texturas", "Blusas con volantes o fruncidos", "Tops crop con cintura marcada", "Camisas anudadas en cintura", "Tops con detalles en el busto", "Blazers entallados", "Blusas con mangas abullonadas", "Tops con escotes interesantes"],
    inferiores: ["Faldas lápiz con cintura marcada", "Pantalones tiro alto", "Faldas con cinturón integrado", "Jeans skinny tiro alto", "Faldas con pliegues frontales", "Pantalones rectos", "Faldas wrap", "Pantalones con detalles en cadera"],
    evitar: ["Prendas completamente rectas sin cintura", "Looks monocromáticos sin estructura", "Pantalones muy anchos sin cintura definida"],
    principio: "Crear cintura · Añadir curvas con detalles · Jugar con capas y texturas"
  },
  "Rectangular": {
    descripcion: "Tu silueta equilibrada con hombros y caderas a la misma medida es versátil y elegante. Con solo 12-15 cm de diferencia entre cadera y cintura, tu objetivo es crear la apariencia de una cintura más definida.",
    superiores: ["Blusas con cinturones o lazos", "Tops con detalles al centro", "Blusas con capas y texturas", "Camisas entalladas", "Tops con estampados llamativos", "Blusas con mangas interesantes", "Tops asimétricos", "Blazers entallados con cinturón"],
    inferiores: ["Faldas A-line", "Pantalones tiro alto con pinzas", "Faldas con pliegues", "Pantalones rectos entallados", "Faldas wrap", "Pantalones flare", "Faldas midi estructuradas", "Jeans tiro alto rectos"],
    evitar: ["Vestidos tubo completamente rectos", "Prendas sin definición de cintura", "Looks muy oversized de arriba a abajo"],
    principio: "Crear ilusión de cintura · Definir la silueta · Capas estratégicas"
  },
  "Circular": {
    descripcion: "Tu silueta de contornos suaves y redondos tiene una presencia radiante. Tu cintura es más amplia que hombros y caderas. El objetivo es crear verticalidad y destacar tus mejores atributos: brazos, escote y piernas.",
    superiores: ["Escotes V alargadores", "Tops con caída vertical", "Blusas fluidas de tela liviana", "Camisas entalladas en colores oscuros", "Tops monocromáticos", "Blazers largos abiertos", "Cárdigan largos", "Tops con escotes interesantes"],
    inferiores: ["Pantalones rectos en colores oscuros", "Faldas A-line bajo la rodilla", "Pantalones palazzo", "Faldas midi fluidas", "Pantalones de tiro alto", "Faldas largas con caída", "Leggings con falda superpuesta", "Pantalones rectos monocromáticos"],
    evitar: ["Cinturones anchos en la cintura", "Prendas muy ajustadas en el abdomen", "Telas rígidas que no tienen caída", "Estampados horizontales grandes"],
    principio: "Verticalidad · Colores oscuros en el centro · Escotes alargadores"
  },
  "Triángulo": {
    descripcion: "Tu silueta pera, con hombros más estrechos que caderas y cadera redonda, es una de las más femeninas. El objetivo es equilibrar añadiendo presencia en la parte superior para crear armonía visual.",
    superiores: ["Blusas con mangas abullonadas", "Escotes barco", "Tops con detalles en hombros", "Blusas con volantes arriba", "Blazers estructurados", "Sweaters con textura", "Estampados llamativos arriba", "Tops off-shoulder"],
    inferiores: ["Pantalones flare o bootcut oscuros", "Faldas A-line midi", "Pantalones palazzo oscuros", "Faldas midi acampanadas", "Pantalones rectos tiro alto", "Faldas wrap fluidas", "Jeans oscuros sin bolsillos traseros", "Faldas con líneas verticales"],
    evitar: ["Pantalones muy ajustados en cadera", "Faldas lápiz muy ceñidas", "Colores muy claros o estampados grandes abajo", "Tops sin estructura"],
    principio: "Volumen y color arriba · Líneas limpias abajo · Cintura siempre presente"
  },
  "Reloj de Arena": {
    descripcion: "Tu silueta es la más proporcionada — cintura pequeña, busto y trasero con volumen equilibrado. El objetivo es realzar y celebrar tus curvas naturales sin ocultarlas.",
    superiores: ["Blusas entalladas que marquen cintura", "Tops ajustados de tela con caída", "Blusas wrap", "Camisas entalladas", "Tops bodycon elegantes", "Blusas con lazo en cintura", "Tops de escote V", "Blusas de tela fluida"],
    inferiores: ["Faldas lápiz midi", "Jeans skinny tiro alto", "Faldas wrap", "Pantalones tiro alto entallados", "Faldas midi ajustadas", "Pantalones rectos entallados", "Faldas con abertura", "Leggings elegantes"],
    evitar: ["Prendas muy holgadas que oculten la cintura", "Ropa oversized de arriba a abajo", "Telas muy rígidas sin caída"],
    principio: "Realzar curvas · Marcar cintura siempre · Telas con caída y elasticidad"
  },
  "Tipo 8": {
    descripcion: "Comparte las características del Reloj de Arena con más plenitud en curvas. Cintura pequeña en relación al busto y caderas. El objetivo es el mismo: celebrar y realzar tu figura proporcional.",
    superiores: ["Blusas wrap entalladas", "Tops con escote V", "Blusas de tela fluida con cintura marcada", "Camisas entalladas", "Blusas con lazo", "Tops bodycon en telas de calidad", "Blusas con drapeado", "Cárdigan cortos entallados"],
    inferiores: ["Faldas A-line midi", "Pantalones tiro alto con amplio en cadera", "Faldas wrap midi", "Pantalones rectos tiro alto", "Faldas con pliegues suaves", "Pantalones palazzo", "Faldas midi fluidas", "Jeans tiro alto con stretch"],
    evitar: ["Prendas sin stretch en cadera", "Telas muy rígidas", "Prendas muy ajustadas sin caída", "Looks sin definición de cintura"],
    principio: "Cintura siempre visible · Telas con movimiento · Proporciones equilibradas"
  }
};


// ════════════════════════════════════════════════════════════════
//  DATOS DE LAS 12 ESTACIONES — Colorimetría profesional
//  Metodología: House of Color / AICI / 12-Season System
// ════════════════════════════════════════════════════════════════
const DATOS_ESTACIONES = {

// ──────────────── PRIMAVERAS ────────────────
"Primavera Brillante": {
  descripcion: "Eres la más vívida y luminosa de las primaveras. Tu coloración combina calor y claridad con un toque de viveza que pide colores frescos, claros y con vida. Tu piel tiene un subtono cálido-dorado con mucha luminosidad, y tu cabello y ojos tienen un brillo característico.",
  subtono: "Cálido · Claro · Brillante",
  palabras: ["Fresca", "Luminosa", "Vívida", "Alegre"],
  neutroClaro: "Blanco marfil cálido",
  neutroOscuro: "Camel oscuro o marrón chocolate cálido",
  negro: "Mantenlo lejos del rostro — usa camel oscuro o marrón como neutro oscuro",
  colores: [
    {hex:"#F9E4B7",nombre:"Crema dorada",uso:"Base de looks y prendas cercanas al rostro"},
    {hex:"#F4A460",nombre:"Arenisca cálida",uso:"Tops y blusas de verano"},
    {hex:"#FF6F3C",nombre:"Coral brillante",uso:"Prenda protagonista, atrae miradas"},
    {hex:"#FFB347",nombre:"Naranja melocotón",uso:"Looks casuales con energía"},
    {hex:"#F7DC6F",nombre:"Amarillo dorado",uso:"Accesorios y prendas de temporada"},
    {hex:"#90EE90",nombre:"Verde menta fresco",uso:"Tops y blusas ligeras"},
    {hex:"#3CB371",nombre:"Verde hierba",uso:"Pantalones y prendas base"},
    {hex:"#00CED1",nombre:"Turquesa vivo",uso:"Prenda estrella de verano"},
    {hex:"#87CEEB",nombre:"Azul cielo claro",uso:"Prendas relajadas y frescas"},
    {hex:"#DA70D6",nombre:"Orquídea cálida",uso:"Toque femenino en accesorios"},
    {hex:"#FF8C94",nombre:"Rosa coral",uso:"Looks románticos y femeninos"},
    {hex:"#C68642",nombre:"Caramelo",uso:"Neutro cálido versátil"},
    {hex:"#F5DEB3",nombre:"Trigo",uso:"Neutro claro para looks frescos"},
    {hex:"#8FBC8F",nombre:"Verde salvia claro",uso:"Prendas tranquilas y naturales"},
    {hex:"#DEB887",nombre:"Beige burlwood",uso:"Base neutral de fondo de armario"},
    {hex:"#FF7F50",nombre:"Coral",uso:"Tu color firma — te ilumina como ninguno"}
  ],
  neutros: ["Crema dorada","Beige cálido","Caramelo","Trigo claro","Camel"],
  apagan: ["Negro puro cerca del rostro","Blanco brillante frío","Azul marino muy oscuro","Grises fríos","Burdeos o vinos oscuros"],
  cabello: {
    ideales: ["Rubio dorado luminoso","Castaño claro con reflejos dorados","Babylights doradas o melocotón","Rubio fresa suave","Castaño miel con balayage dorado"],
    evitar: ["Rubios ceniza o platinados","Negro azabache","Castaños fríos o grises","Coloraciones oscuras sin calidez"],
    nota: "Tu cabello brilla más con tonos dorados y cálidos — el calor es tu firma"
  },
  metales: [
    {color:"linear-gradient(135deg,#FFD700,#DAA520)",nombre:"Oro brillante"},
    {color:"linear-gradient(135deg,#FFB347,#FF8C00)",nombre:"Oro cobre"},
    {color:"linear-gradient(135deg,#F0E68C,#DAA520)",nombre:"Oro amarillo"},
    {color:"linear-gradient(135deg,#FFD700,#FFA500)",nombre:"Oro mate"}
  ],
  metalNota: "Todo el universo dorado es tuyo — brillante, cálido, radiante. La plata apaga tu energía.",
  maquillaje: {
    labios: [{hex:"#FF6F3C",n:"Coral brillante"},{hex:"#F4956A",n:"Melocotón"},{hex:"#FFB6C1",n:"Rosa cálido"},{hex:"#F5CBA7",n:"Nude cálido"},{hex:"#E8956D",n:"Canela suave"}],
    ojos: [{hex:"#C68642",n:"Caramelo"},{hex:"#DAA520",n:"Dorado"},{hex:"#90EE90",n:"Menta"},{hex:"#87CEEB",n:"Azul claro"},{hex:"#A0785A",n:"Bronce"}],
    mejillas: [{hex:"#F4956A",n:"Melocotón"},{hex:"#FF8C94",n:"Rosa coral"},{hex:"#F5CBA7",n:"Durazno"},{hex:"#FFB347",n:"Melocotón intenso"}],
    base: [{hex:"#F9E4B7",n:"Marfil dorado"},{hex:"#F5DEB3",n:"Trigo cálido"},{hex:"#EDD5A3",n:"Beige cálido"}],
    labiosEvitar: "Rosas fríos, burdeos, rojos azulados",
    ojosEvitar: "Azules fríos, plateados, morados fríos",
    mejillasEvitar: "Rosas malva, contorno gris",
    baseNota: "Subtono dorado-melocotón siempre. Finish luminoso o satinado — nunca mate grisáceo",
    notasFinales: ["El coral es tu superpoder — labio y mejilla en el mismo tono unifica y da vida","Delineador marrón cálido o castaño, nunca negro","Máscara castaño para el día — negro solo en noche","Iluminador dorado en pómulos y arco de Cupido","Cejas en tono castaño dorado — no demasiado oscuras"]
  }
},

"Primavera Cálida": {
  descripcion: "Tu paleta es la más cálida de todas las estaciones — todo en ti vibra en tonos dorados, cobre y terracota. Piel con subtono dorado o melocotón intenso, cabello en tonos cobrizo-rojizo o castaño dorado, ojos ámbar, verde o avellana. Tus colores son la tierra, el fuego y la luz del atardecer.",
  subtono: "Muy cálido · Suave · Dorado",
  palabras: ["Terrenal", "Cálida", "Radiante", "Natural"],
  neutroClaro: "Crema marfil cálido o arena",
  neutroOscuro: "Marrón chocolate o camel oscuro",
  negro: "El negro puro no es tu amigo — sustitúyelo siempre por marrón oscuro cálido",
  colores: [
    {hex:"#C2714F",nombre:"Terracota",uso:"Prenda firma — te ilumina al instante"},
    {hex:"#C68642",nombre:"Caramelo",uso:"Neutro cálido perfecto para cualquier look"},
    {hex:"#D4956A",nombre:"Durazno",uso:"Blusas y prendas cercanas al rostro"},
    {hex:"#8B6914",nombre:"Marrón dorado",uso:"Accesorios, cinturones, bolsos"},
    {hex:"#7A7A45",nombre:"Verde oliva",uso:"Pantalones, faldas, base de looks"},
    {hex:"#4A5240",nombre:"Verde musgo",uso:"Blazers y abrigos estructurados"},
    {hex:"#B8860B",nombre:"Mostaza cálida",uso:"Prendas llamativas de temporada"},
    {hex:"#CD853F",nombre:"Peru — arena dorada",uso:"Looks casuales terrosos"},
    {hex:"#8B4513",nombre:"Marrón silla",uso:"Neutro oscuro versátil"},
    {hex:"#D2691E",nombre:"Chocolate cálido",uso:"Prendas de otoño-invierno"},
    {hex:"#BC8F5F",nombre:"Rosado arena",uso:"Neutro luminoso muy favorecedor"},
    {hex:"#A0785A",nombre:"Café con leche",uso:"Base elegante de fondo de armario"},
    {hex:"#EDE0C8",nombre:"Crema cálida",uso:"Prendas claras cercanas al rostro"},
    {hex:"#9B6B6B",nombre:"Orquídea cálida",uso:"Toque femenino en blusas o accesorios"},
    {hex:"#4A7A75",nombre:"Teal cálido",uso:"Acento sofisticado en looks especiales"},
    {hex:"#8B8560",nombre:"Kaki",uso:"Pantalones y faldas prácticas y elegantes"}
  ],
  neutros: ["Crema cálida","Beige arena","Caramelo","Kaki","Marrón chocolate"],
  apagan: ["Negro puro cerca del rostro","Blanco frío o brillante","Rosas fríos o fucsia","Azul marino frío","Grises plateados"],
  cabello: {
    ideales: ["Castaño cálido con reflejos miel","Castaño cobrizo o rojizo","Rubio oscuro dorado","Babylights caramelo o miel","Balayage en tonos terracota o cobrizo"],
    evitar: ["Rubios platinados o ceniza","Negro azabache","Castaños fríos o con tonos grises","Coloraciones con base fría"],
    nota: "Tu cabello en tonos tierra y dorados es tu corona — el calor siempre, la frialdad nunca"
  },
  metales: [
    {color:"linear-gradient(135deg,#E0C050,#C09020)",nombre:"Oro mate"},
    {color:"linear-gradient(135deg,#D4A050,#A07030)",nombre:"Oro rosado"},
    {color:"linear-gradient(135deg,#A08860,#C8A87A)",nombre:"Bronce"},
    {color:"linear-gradient(135deg,#A06838,#C88040)",nombre:"Cobre"}
  ],
  metalNota: "El universo dorado en todas sus formas es perfecto para ti. La plata fría apaga tu paleta completamente.",
  maquillaje: {
    labios: [{hex:"#C2714F",n:"Terracota"},{hex:"#D4846A",n:"Coral suave"},{hex:"#B87060",n:"Ladrillo suave"},{hex:"#E8B898",n:"Nude cálido"},{hex:"#C8785A",n:"Canela"}],
    ojos: [{hex:"#8B5E3C",n:"Canela"},{hex:"#D4A843",n:"Dorado"},{hex:"#7A7A45",n:"Verde oliva"},{hex:"#C8A878",n:"Champán"},{hex:"#4A3020",n:"Marrón oscuro"}],
    mejillas: [{hex:"#E8A882",n:"Melocotón"},{hex:"#D4846A",n:"Coral"},{hex:"#C8906A",n:"Durazno"},{hex:"#D4B898",n:"Nude terracota"}],
    base: [{hex:"#F5DDB8",n:"Marfil cálido"},{hex:"#EDCB9A",n:"Beige cálido"},{hex:"#E0B880",n:"Dorado medio"}],
    labiosEvitar: "Rosas fríos, fucsia, rojos azulados",
    ojosEvitar: "Azules fríos, plateados, morados intensos",
    mejillasEvitar: "Rosas fríos, malvas, contorno gris",
    baseNota: "Base con subtono dorado o melocotón. Finish satinado o natural — nunca mate grisáceo",
    notasFinales: ["Prioriza un look natural y luminoso — menos es más","Cejas en tono castaño cálido, nunca negro","El delineador marrón te favorece más que el negro","Máscara en marrón oscuro para el día","Iluminador dorado en el arco de Cupido","Labio y mejilla en el mismo tono coral — unifica el look"]
  }
},

"Primavera Clara": {
  descripcion: "Tu paleta vive en la intersección entre la frescura de la primavera y la claridad del verano. Colores claros, delicados y siempre cálidos. Tu piel es luminosa y translúcida, y necesitas colores que no la sobrecarguen — que la acompañen con suavidad y elegancia.",
  subtono: "Cálido-neutro · Muy claro · Delicado",
  palabras: ["Luminosa", "Delicada", "Fresca", "Etérea"],
  neutroClaro: "Blanco marfil suave o crema muy clara",
  neutroOscuro: "Camel claro o marrón suave",
  negro: "El negro crea un contraste demasiado duro — usa camel oscuro o marrón suave en su lugar",
  colores: [
    {hex:"#FAEBD7",nombre:"Blanco antiguo",uso:"Tu neutro claro más favorecedor"},
    {hex:"#FFE4C4",nombre:"Bisquit",uso:"Prendas cercanas al rostro"},
    {hex:"#F0C987",nombre:"Amarillo pastel cálido",uso:"Looks frescos de temporada"},
    {hex:"#F4A460",nombre:"Arenisca",uso:"Tops y blusas cálidas"},
    {hex:"#FFB6C1",nombre:"Rosa claro cálido",uso:"Toque femenino luminoso"},
    {hex:"#98FB98",nombre:"Verde menta pálido",uso:"Blusas y tops ligeros"},
    {hex:"#AFEEEE",nombre:"Turquesa pálido",uso:"Prendas de verano frescas"},
    {hex:"#87CEFA",nombre:"Azul cielo suave",uso:"Looks tranquilos y etéreos"},
    {hex:"#DDA0DD",nombre:"Ciruelo pálido cálido",uso:"Toque romántico"},
    {hex:"#F5DEB3",nombre:"Trigo",uso:"Neutro cálido versátil"},
    {hex:"#D2B48C",nombre:"Bronceado",uso:"Neutro cálido de fondo"},
    {hex:"#BC8F5F",nombre:"Rosado arena",uso:"Base neutral elegante"},
    {hex:"#E6CCB2",nombre:"Lino cálido",uso:"Prendas base de armario"},
    {hex:"#C8A882",nombre:"Camel claro",uso:"Neutro oscuro principal"},
    {hex:"#90EE90",nombre:"Verde lima suave",uso:"Toque fresco en accesorios"},
    {hex:"#FFDAB9",nombre:"Melocotón",uso:"El más iluminador cerca del rostro"}
  ],
  neutros: ["Crema suave","Beige rosado","Camel claro","Trigo","Lino cálido"],
  apagan: ["Negro puro","Colores muy saturados","Rojo intenso puro","Azul marino oscuro","Verde oscuro sin calidez"],
  cabello: {
    ideales: ["Rubio miel claro","Rubio dorado suave","Castaño muy claro con babylights doradas","Rubio fresa muy suave","Mechas doradas en base castaña clara"],
    evitar: ["Castaños oscuros","Negro","Rubios muy platinados","Coloraciones oscuras o muy intensas"],
    nota: "Cuanto más claro y dorado, más te favorece — la intensidad oscura apaga tu delicadeza natural"
  },
  metales: [
    {color:"linear-gradient(135deg,#FFD700,#F0E68C)",nombre:"Oro claro"},
    {color:"linear-gradient(135deg,#F0E68C,#DAA520)",nombre:"Oro amarillo suave"},
    {color:"linear-gradient(135deg,#FFD700,#FFA500)",nombre:"Oro rosado claro"},
    {color:"linear-gradient(135deg,#E8D5A3,#C8A87A)",nombre:"Oro envejecido"}
  ],
  metalNota: "Oro claro y suave es tu mejor elección. Evita metales muy pesados o fríos — tu paleta es delicada.",
  maquillaje: {
    labios: [{hex:"#FFDAB9",n:"Melocotón suave"},{hex:"#FFB6C1",n:"Rosa claro cálido"},{hex:"#F4A460",n:"Coral pastel"},{hex:"#FAD5A5",n:"Nude cálido claro"},{hex:"#E8A882",n:"Durazno"}],
    ojos: [{hex:"#C8A878",n:"Champán cálido"},{hex:"#F0C987",n:"Dorado suave"},{hex:"#98FB98",n:"Menta pálida"},{hex:"#AFEEEE",n:"Turquesa pálido"},{hex:"#A08060",n:"Bronce suave"}],
    mejillas: [{hex:"#FFDAB9",n:"Melocotón"},{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#F5CBA7",n:"Durazno pálido"},{hex:"#F4A460",n:"Coral suave"}],
    base: [{hex:"#FAEBD7",n:"Marfil suave"},{hex:"#FFE4C4",n:"Beige muy claro"},{hex:"#F5DEB3",n:"Trigo claro"}],
    labiosEvitar: "Rosas fríos, rojos intensos, burdeos",
    ojosEvitar: "Colores muy oscuros o saturados, negro puro",
    mejillasEvitar: "Rosas fríos, bronzer muy oscuro, contorno marcado",
    baseNota: "La base más ligera posible con subtono dorado o melocotón muy suave. Finish luminoso.",
    notasFinales: ["Menos es más — tu rostro es delicado y luminoso","Blush muy suave en melocotón o rosa claro cálido","Máscara marrón para el día — el negro puede pesar","Iluminador muy suave, casi invisible","Cejas naturales en tono castaño claro"]
  }
},

// ──────────────── VERANOS ────────────────
"Verano Brillante": {
  descripcion: "Eres la más dramática y de mayor contraste de los veranos. Tu coloración combina la frescura fría del verano con una intensidad clara y brillante. Piel clara con subtono rosa o neutro-frío, ojos claros y cabello generalmente rubio o castaño claro. Necesitas colores fríos, claros y con presencia.",
  subtono: "Frío · Claro · Brillante",
  palabras: ["Luminosa", "Clara", "Fresca", "Brillante"],
  neutroClaro: "Blanco puro o blanco óptico",
  neutroOscuro: "Navy suave o carbón con base azul",
  negro: "El negro puede funcionar si tienes contraste natural — úsalo con moderación cerca del rostro",
  colores: [
    {hex:"#FFFFFF",nombre:"Blanco puro",uso:"Tu neutro claro más poderoso"},
    {hex:"#F0F8FF",nombre:"Azul alice",uso:"Prendas frescas y elegantes"},
    {hex:"#E0E8F0",nombre:"Gris perla azulado",uso:"Neutro claro muy favorecedor"},
    {hex:"#87CEEB",nombre:"Azul cielo",uso:"Blusas y tops frescos"},
    {hex:"#4169E1",nombre:"Azul real brillante",uso:"Prenda protagonista de impacto"},
    {hex:"#00BFFF",nombre:"Azul celeste vivo",uso:"Verano — prenda estrella"},
    {hex:"#FF69B4",nombre:"Rosa intenso",uso:"Prenda dramática y femenina"},
    {hex:"#FF1493",nombre:"Rosa fucsia brillante",uso:"Acento de color poderoso"},
    {hex:"#DA70D6",nombre:"Orquídea brillante",uso:"Toque romántico con presencia"},
    {hex:"#9370DB",nombre:"Violeta medio",uso:"Elegancia con personalidad"},
    {hex:"#40E0D0",nombre:"Turquesa brillante",uso:"Prenda de verano llamativa"},
    {hex:"#00CED1",nombre:"Cian oscuro",uso:"Sofisticado y fresco"},
    {hex:"#708090",nombre:"Gris pizarra",uso:"Neutro oscuro versátil"},
    {hex:"#483D8B",nombre:"Azul pizarra oscuro",uso:"Tu negro sustituto"},
    {hex:"#B0C4DE",nombre:"Azul acero claro",uso:"Neutro azulado elegante"},
    {hex:"#DDA0DD",nombre:"Ciruela pálida",uso:"Toque suave y romántico"}
  ],
  neutros: ["Blanco puro","Gris perla","Navy claro","Azul acero","Gris plateado"],
  apagan: ["Colores muy cálidos o dorados","Naranja y terracota","Amarillo mostaza","Marrón cálido","Verde oliva"],
  cabello: {
    ideales: ["Rubio ceniza o platinado","Rubio muy claro sin amarillo","Castaño claro frío con mechas rubias","Gris plateado natural o teñido","Castaño con reflejos ceniza"],
    evitar: ["Rubios dorados o cálidos","Castaños cobrizo o rojizos","Tonos caramelo o miel","Coloraciones cálidas en general"],
    nota: "Tu cabello en fríos y claros es pura sofisticación — el calor apaga tu luminosidad natural"
  },
  metales: [
    {color:"linear-gradient(135deg,#E8E8E8,#C0C0C0)",nombre:"Plata brillante"},
    {color:"linear-gradient(135deg,#A8D8EA,#6B9FB8)",nombre:"Plata azulada"},
    {color:"linear-gradient(135deg,#E0E0E0,#9090A0)",nombre:"Plata mate"},
    {color:"linear-gradient(135deg,#D0D0D0,#B8B8C8)",nombre:"Platino"}
  ],
  metalNota: "La plata en todas sus formas brillantes es tu metal. El oro cálido apaga tu paleta fría y clara.",
  maquillaje: {
    labios: [{hex:"#FF69B4",n:"Rosa intenso"},{hex:"#FF1493",n:"Fucsia brillante"},{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#E8D5D5",n:"Nude rosado frío"},{hex:"#C06080",n:"Malva claro"}],
    ojos: [{hex:"#708090",n:"Gris pizarra"},{hex:"#9370DB",n:"Violeta"},{hex:"#87CEEB",n:"Azul claro"},{hex:"#C0C0C0",n:"Plateado"},{hex:"#483D8B",n:"Azul marino"}],
    mejillas: [{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#FF69B4",n:"Rosa vivo"},{hex:"#DDA0DD",n:"Malva suave"},{hex:"#E8C8D8",n:"Rosa pálido"}],
    base: [{hex:"#F5F0F0",n:"Porcelana fría"},{hex:"#F0E8E8",n:"Marfil rosado"},{hex:"#E8D8D8",n:"Beige rosado"}],
    labiosEvitar: "Terracota, naranja, tonos cálidos",
    ojosEvitar: "Dorados cálidos, verdes oliva, tonos tierra",
    mejillasEvitar: "Melocotón, coral cálido, bronzer dorado",
    baseNota: "Subtono rosado o neutro-frío. Finish luminoso o satinado. Evita las bases con subtono dorado o amarillo.",
    notasFinales: ["El contraste es tu aliado — labios fuertes con ojos suaves o viceversa","Cejas en tono castaño frío o ceniza","Delineador negro funciona en ti si hay contraste natural","Iluminador plateado o rosado en pómulos","Máscara negra realza tu mirada brillante"]
  }
},

"Verano Frío": {
  descripcion: "Tu paleta vive en el territorio más puro del frío — colores con base azulada, delicados pero definidos. Piel con subtono rosa-azulado o neutro muy frío, cabello castaño frío o con mechas ceniza, ojos grises, azules o verdes fríos. Tu paleta es elegante, refinada y etérea.",
  subtono: "Muy frío · Suave · Refinado",
  palabras: ["Elegante", "Etérea", "Refinada", "Sofisticada"],
  neutroClaro: "Blanco suave o blanco grisáceo",
  neutroOscuro: "Navy frío o carbón azulado",
  negro: "El negro puede funcionarte en dosis controladas — busca alternativas en navy o carbón azulado",
  colores: [
    {hex:"#F0F0F5",nombre:"Blanco grisáceo",uso:"Tu neutro claro ideal"},
    {hex:"#E8E8F0",nombre:"Lavanda muy pálida",uso:"Prendas etéreas y elegantes"},
    {hex:"#B0C4DE",nombre:"Azul acero claro",uso:"Tu azul favorecedor por excelencia"},
    {hex:"#6495ED",nombre:"Azul cornflower",uso:"Prenda elegante de impacto"},
    {hex:"#4682B4",nombre:"Azul acero",uso:"Neutro azulado profundo"},
    {hex:"#483D8B",nombre:"Azul pizarra",uso:"Neutro oscuro muy sofisticado"},
    {hex:"#DDA0DD",nombre:"Malva suave",uso:"Toque romántico y delicado"},
    {hex:"#EE82EE",nombre:"Violeta suave",uso:"Prenda femenina con personalidad"},
    {hex:"#9370DB",nombre:"Violeta medio",uso:"Acento de color elegante"},
    {hex:"#20B2AA",nombre:"Verde mar",uso:"Acento sofisticado fresco"},
    {hex:"#5F9EA0",nombre:"Cadet blue",uso:"Prendas de temporada fría"},
    {hex:"#708090",nombre:"Gris pizarra",uso:"Neutro oscuro versátil"},
    {hex:"#778899",nombre:"Gris pizarra claro",uso:"Neutro intermedio elegante"},
    {hex:"#C0C0C0",nombre:"Plata",uso:"Neutro metálico favorecedor"},
    {hex:"#D8BFD8",nombre:"Cardo suave",uso:"Neutro cálido-frío equilibrado"},
    {hex:"#E6E6FA",nombre:"Lavanda",uso:"Prenda etérea luminosa"}
  ],
  neutros: ["Blanco grisáceo","Gris plata","Navy frío","Carbón azulado","Lavanda pálida"],
  apagan: ["Naranja y terracota","Amarillo mostaza","Verde oliva","Marrón cálido","Colores tierra cálidos"],
  cabello: {
    ideales: ["Castaño frío con mechas ceniza","Gris plateado natural o teñido","Rubio muy ceniza sin amarillo","Castaño oscuro con base fría","Platinado suave"],
    evitar: ["Cualquier tono cálido o dorado","Cobrizos y rojizos","Castaños con reflejos cálidos","Rubios dorados"],
    nota: "Los grises plateados y los fríos son tu paleta natural — el calor apaga tu sofisticación innata"
  },
  metales: [
    {color:"linear-gradient(135deg,#E8E8E8,#C0C0C0)",nombre:"Plata"},
    {color:"linear-gradient(135deg,#D0D0E0,#9090B0)",nombre:"Plata azulada"},
    {color:"linear-gradient(135deg,#E0E0E8,#A0A0B8)",nombre:"Platino"},
    {color:"linear-gradient(135deg,#B8B8C8,#8888A8)",nombre:"Acero"}
  ],
  metalNota: "Plata, platino y acero en todas sus formas. El oro cálido o el bronce apagan completamente tu elegancia fría.",
  maquillaje: {
    labios: [{hex:"#DDA0DD",n:"Malva suave"},{hex:"#C06080",n:"Rosa frío"},{hex:"#9370DB",n:"Mora suave"},{hex:"#E8D0D8",n:"Nude rosado frío"},{hex:"#B06080",n:"Rosa intenso frío"}],
    ojos: [{hex:"#708090",n:"Gris pizarra"},{hex:"#9370DB",n:"Violeta"},{hex:"#6495ED",n:"Azul"},{hex:"#C0C0C0",n:"Plateado"},{hex:"#4682B4",n:"Azul acero"}],
    mejillas: [{hex:"#DDA0DD",n:"Malva"},{hex:"#E8C8D8",n:"Rosa pálido frío"},{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#D8BFD8",n:"Cardo"}],
    base: [{hex:"#F5F0F5",n:"Porcelana rosada"},{hex:"#F0E8F0",n:"Marfil frío"},{hex:"#E8D8E8",n:"Beige rosado frío"}],
    labiosEvitar: "Terracota, naranja, coral cálido",
    ojosEvitar: "Tonos tierra, dorados cálidos, verde oliva",
    mejillasEvitar: "Coral cálido, melocotón, bronzer dorado",
    baseNota: "Subtono rosado o neutro frío. Finish ligero y elegante. Completamente sin base dorada.",
    notasFinales: ["Tu maquillaje ideal es refinado y preciso","Cejas en tono ceniza o castaño frío","Delineador gris oscuro o negro suave","Iluminador plateado rosado","Mascara negra o azul marino oscuro","El look monocromático en malva o rosa frío es tu sello"]
  }
},

"Verano Suave": {
  descripcion: "Eres la más apagada y suave de todos los veranos — y eso es tu mayor elegancia. Tu coloración es baja en contraste, delicada y de intensidad media. Piel con subtono neutro-frío o rosado muy suave, cabello ceniza o castaño apagado, ojos grises o azules muy suaves. Tus colores ideales son difuminados, como vistos a través de neblina.",
  subtono: "Neutro-frío · Suave · Difuminado",
  palabras: ["Suave", "Armónica", "Serena", "Refinada"],
  neutroClaro: "Blanco suave o crema rosada muy pálida",
  neutroOscuro: "Gris medio o azul grisáceo",
  negro: "El negro crea demasiado contraste — gris carbón azulado o navy suave son mejores opciones",
  colores: [
    {hex:"#F5F0F0",nombre:"Blanco suave",uso:"Tu neutro claro más favorecedor"},
    {hex:"#E8E0E8",nombre:"Malva muy pálida",uso:"Prendas etéreas y delicadas"},
    {hex:"#C8D0D8",nombre:"Azul gris pálido",uso:"Neutro frío versátil"},
    {hex:"#B0B8C0",nombre:"Gris azulado",uso:"Neutro medio elegante"},
    {hex:"#9090A0",nombre:"Gris medio",uso:"Neutro oscuro suave"},
    {hex:"#8090A0",nombre:"Azul gris",uso:"Prendas base estructuradas"},
    {hex:"#A090B0",nombre:"Malva gris",uso:"Tu color más favorecedor"},
    {hex:"#9080A0",nombre:"Lavanda gris",uso:"Elegante y muy personal"},
    {hex:"#708898",nombre:"Azul acero suave",uso:"Prenda elegante con carácter"},
    {hex:"#80A090",nombre:"Verde salvia grisáceo",uso:"Neutro verde muy sofisticado"},
    {hex:"#90A888",nombre:"Verde oliva grisáceo",uso:"Prendas de temporada"},
    {hex:"#D8C8D0",nombre:"Rosa grisáceo",uso:"Prenda femenina muy suave"},
    {hex:"#C0B0B8",nombre:"Rosado ceniza",uso:"Neutro delicado"},
    {hex:"#B8C0C8",nombre:"Azul lavanda",uso:"Toque romántico suave"},
    {hex:"#A8A8B8",nombre:"Gris lavanda",uso:"Tu neutro firma"},
    {hex:"#98B0A8",nombre:"Verde agua grisáceo",uso:"Prenda fresca y sofisticada"}
  ],
  neutros: ["Blanco suave","Gris perla","Malva grisáceo","Azul gris","Castaño frío suave"],
  apagan: ["Colores muy saturados o brillantes","Naranja y terracota","Amarillo cálido","Colores neon","Contrastes muy altos en una sola prenda"],
  cabello: {
    ideales: ["Castaño ceniza suave","Gris plateado natural","Rubio ceniza muy apagado","Mechas ceniza en base castaña","Castaño frío con reflejos grises"],
    evitar: ["Colores brillantes o muy saturados","Cualquier tono cálido","Cobrizos, rojizos o dorados","Negro muy oscuro si hay poco contraste natural"],
    nota: "Apagado y frío es tu firma — los colores con demasiada intensidad o calidez borran tu sutileza natural"
  },
  metales: [
    {color:"linear-gradient(135deg,#D8D8D8,#B0B0B0)",nombre:"Plata mate"},
    {color:"linear-gradient(135deg,#C8C8D0,#9898A8)",nombre:"Plata grisácea"},
    {color:"linear-gradient(135deg,#D0C8D8,#A090A8)",nombre:"Platino rosado"},
    {color:"linear-gradient(135deg,#B8B8C0,#8080A0)",nombre:"Acero suave"}
  ],
  metalNota: "Plata mate y grisácea es lo que más te favorece. Nada brillante en exceso, nada cálido — suave siempre.",
  maquillaje: {
    labios: [{hex:"#C0A0A8",n:"Malva rosado"},{hex:"#B89898",n:"Nude rosado frío"},{hex:"#D8B8C0",n:"Rosa suave"},{hex:"#A88898",n:"Malva medio"},{hex:"#C8A8B0",n:"Rosa grisáceo"}],
    ojos: [{hex:"#A8A8B8",n:"Gris lavanda"},{hex:"#8090A0",n:"Azul gris"},{hex:"#9080A0",n:"Malva gris"},{hex:"#C0B0B8",n:"Rosado ceniza"},{hex:"#708090",n:"Gris pizarra"}],
    mejillas: [{hex:"#D8C8D0",n:"Rosa grisáceo"},{hex:"#C8B8C0",n:"Malva suave"},{hex:"#E0D0D8",n:"Rosa pálido"},{hex:"#C0B0B8",n:"Rosado ceniza"}],
    base: [{hex:"#F5F0F0",n:"Porcelana suave"},{hex:"#EDE8E8",n:"Marfil neutro"},{hex:"#E0D8D8",n:"Beige neutro-frío"}],
    labiosEvitar: "Cualquier tono cálido o naranja, rojos brillantes",
    ojosEvitar: "Dorados cálidos, verdes oliva, colores tierra",
    mejillasEvitar: "Coral cálido, melocotón, bronzer dorado",
    baseNota: "Subtono neutro o ligeramente frío. Finish muy natural y suave — sin brillos exagerados.",
    notasFinales: ["La suavidad es tu código — todo difuminado, nada marcado","Cejas ligeras en tono castaño ceniza","Delineador gris suave, nunca negro marcado","Iluminador muy sutil en tonos rosados o grises","Sin contorno — tu rostro no lo necesita","El look monocromático en malva suave te define"]
  }
},

// ──────────────── OTOÑOS ────────────────
"Otoño Profundo": {
  descripcion: "Eres la más oscura e intensa de las estaciones. Tu coloración tiene profundidad y riqueza — piel en tonos oliváceos, marrones o castaños profundos con subtono muy cálido, cabello muy oscuro en castaño oscuro, negro-café o negro con reflejos cobrizos, ojos oscuros y expresivos. Tus colores ideales son ricos, saturados y de mucha profundidad.",
  subtono: "Muy cálido · Profundo · Rico",
  palabras: ["Dramática", "Rica", "Profunda", "Exótica"],
  neutroClaro: "Crema oscura o arena tostada",
  neutroOscuro: "Marrón muy oscuro o negro cálido",
  negro: "El negro cálido (con base marrón) te favorece — el negro azulado frío no tanto",
  colores: [
    {hex:"#8B0000",nombre:"Rojo oscuro",uso:"Tu rojo firma — dramático y rico"},
    {hex:"#A0522D",nombre:"Siena",uso:"Neutro cálido muy favorecedor"},
    {hex:"#8B4513",nombre:"Marrón silla",uso:"Base de armario cálida y profunda"},
    {hex:"#6B4226",nombre:"Marrón chocolate",uso:"Neutro oscuro natural"},
    {hex:"#B8860B",nombre:"Vara dorada oscura",uso:"Mustaza profundo — muy sofisticado"},
    {hex:"#556B2F",nombre:"Verde oliva oscuro",uso:"Prendas base de mucho carácter"},
    {hex:"#4A7A45",nombre:"Verde bosque",uso:"Prenda de temporada fría con presencia"},
    {hex:"#8B7536",nombre:"Kaki oscuro",uso:"Neutro profundo y terroso"},
    {hex:"#704214",nombre:"Marrón caoba",uso:"Prenda profunda de invierno"},
    {hex:"#C2714F",nombre:"Terracota",uso:"Prenda cálida que ilumina el rostro"},
    {hex:"#D4A843",nombre:"Mostaza dorada",uso:"Acento cálido llamativo"},
    {hex:"#8B6914",nombre:"Bronce oscuro",uso:"Accesorio o prenda de acento"},
    {hex:"#4B3621",nombre:"Marrón muy oscuro",uso:"Tu neutro oscuro más profundo"},
    {hex:"#CC7722",nombre:"Ocre",uso:"Amarillo terroso muy favorecedor"},
    {hex:"#9B2335",nombre:"Granate",uso:"Tu rojo oscuro más elegante"},
    {hex:"#5C3317",nombre:"Caoba",uso:"Profundo y rico — prenda de lujo"}
  ],
  neutros: ["Arena tostada","Caramelo oscuro","Marrón chocolate","Kaki profundo","Oliva oscuro"],
  apagan: ["Blanco puro o frío","Rosas fríos o suaves","Lavanda y violetas fríos","Azul eléctrico frío","Grises plateados"],
  cabello: {
    ideales: ["Castaño muy oscuro con reflejos cobrizos","Negro-café cálido","Castaño oscuro con balayage terracota","Coloraciones oscuras con base cálida","Marrón espresso con destellos dorados"],
    evitar: ["Negro azabache frío","Rubios de cualquier tipo","Castaños claros","Coloraciones con base fría o ceniza"],
    nota: "La profundidad y el calor son tu esencia — cuanto más oscuro y cálido, más poderosa y auténtica te ves"
  },
  metales: [
    {color:"linear-gradient(135deg,#A06838,#C88040)",nombre:"Cobre"},
    {color:"linear-gradient(135deg,#A08860,#C8A87A)",nombre:"Bronce oscuro"},
    {color:"linear-gradient(135deg,#8B6914,#A08020)",nombre:"Oro oxidado"},
    {color:"linear-gradient(135deg,#6B4226,#8B5030)",nombre:"Cobre oscuro"}
  ],
  metalNota: "Cobre, bronce y oro oxidado son tus metales. La plata fría o el oro brillante te resultan demasiado superficiales.",
  maquillaje: {
    labios: [{hex:"#8B0000",n:"Rojo oscuro"},{hex:"#9B2335",n:"Granate"},{hex:"#C2714F",n:"Terracota"},{hex:"#8B4513",n:"Marrón ladrillo"},{hex:"#B05038",n:"Ladrillo oscuro"}],
    ojos: [{hex:"#4B3621",n:"Marrón oscuro"},{hex:"#556B2F",n:"Verde oliva"},{hex:"#8B7536",n:"Kaki"},{hex:"#A06838",n:"Cobre"},{hex:"#1C1008",n:"Negro cálido"}],
    mejillas: [{hex:"#C2714F",n:"Terracota"},{hex:"#D4956A",n:"Coral oscuro"},{hex:"#A0785A",n:"Bronce"},{hex:"#8B6060",n:"Ciruela cálida"}],
    base: [{hex:"#D4A882",n:"Beige oscuro cálido"},{hex:"#C8987A",n:"Tostado cálido"},{hex:"#B88060",n:"Bronce medio"}],
    labiosEvitar: "Rosas claros, nude muy pálidos, colores fríos",
    ojosEvitar: "Plateados, azules fríos, pastel",
    mejillasEvitar: "Rosa claro, malva, bronzer plateado",
    baseNota: "Base con subtono dorado o marrón cálido profundo. Finish natural o ligeramente satinado.",
    notasFinales: ["Tu maquillaje puede ser más intenso que el de otras estaciones","Labios oscuros y ricos son tu sello","Delineador negro cálido o marrón muy oscuro","Cejas oscuras y bien definidas — son tu encuadre","Iluminador cobre o bronce en pómulos","Nunca suavices demasiado — la profundidad es tu poder"]
  }
},

"Otoño Cálido": {
  descripcion: "Tu paleta es la quintaesencia del otoño — tierra, fuego, cosecha. Colores cálidos, saturados y profundamente conectados a la naturaleza. Piel con subtono dorado-cálido visible, cabello en tonos rojizos, cobrizo o castaño dorado, ojos ámbar, verdes cálidos o marrones. Eres la estación más cálida de todas.",
  subtono: "Muy cálido · Saturado · Natural",
  palabras: ["Natural", "Terrosa", "Cálida", "Auténtica"],
  neutroClaro: "Crema dorada o arena cálida",
  neutroOscuro: "Marrón chocolate o verde oliva oscuro",
  negro: "El negro puro no forma parte de tu paleta — marrón oscuro o verde muy oscuro son tus neutros oscuros",
  colores: [
    {hex:"#B7410E",nombre:"Rojo ladrillo",uso:"Tu rojo auténtico — terroso y cálido"},
    {hex:"#C2714F",nombre:"Terracota",uso:"Tu color firma — ilumina tu piel"},
    {hex:"#D2691E",nombre:"Chocolate",uso:"Neutro cálido profundo"},
    {hex:"#E07B39",nombre:"Naranja quemado",uso:"Prenda otoñal de mucho carácter"},
    {hex:"#B8860B",nombre:"Mostaza",uso:"Color otoñal por excelencia"},
    {hex:"#8B7536",nombre:"Kaki dorado",uso:"Neutro terroso muy favorecedor"},
    {hex:"#556B2F",nombre:"Verde oliva",uso:"Prendas base con profundidad"},
    {hex:"#4A5240",nombre:"Verde musgo",uso:"Neutro oscuro natural"},
    {hex:"#8B4513",nombre:"Marrón silla",uso:"Neutro oscuro cálido versátil"},
    {hex:"#CC7722",nombre:"Ocre",uso:"Amarillo terroso muy especial"},
    {hex:"#9B2335",nombre:"Granate",uso:"Rojo oscuro elegante"},
    {hex:"#704214",nombre:"Marrón rojizo",uso:"Profundidad y calidez"},
    {hex:"#C8A050",nombre:"Dorado cosecha",uso:"Prenda especial de temporada"},
    {hex:"#6B8C40",nombre:"Verde ácido cálido",uso:"Acento fresco y natural"},
    {hex:"#A07840",nombre:"Camel oscuro",uso:"Tu beige más sofisticado"},
    {hex:"#E8C880",nombre:"Dorado arena",uso:"Neutro claro cálido"}
  ],
  neutros: ["Arena dorada","Camel","Kaki","Marrón chocolate","Verde oliva oscuro"],
  apagan: ["Blanco puro","Negro frío","Rosas y malvas fríos","Azul eléctrico","Plateados y fríos"],
  cabello: {
    ideales: ["Rojo cobrizo o rojizo natural","Castaño cálido con reflejos cobre","Castaño rojizo","Pelirrojo natural o coloración","Balayage en tonos cobre y terracota"],
    evitar: ["Negro frío","Rubios ceniza o platinados","Castaños fríos","Coloraciones sin calidez"],
    nota: "El fuego es tu elemento — el cobrizo y el rojizo son tu paleta natural más auténtica"
  },
  metales: [
    {color:"linear-gradient(135deg,#A06838,#C88040)",nombre:"Cobre brillante"},
    {color:"linear-gradient(135deg,#A08860,#C8A87A)",nombre:"Bronce"},
    {color:"linear-gradient(135deg,#C09020,#E0A830)",nombre:"Oro viejo"},
    {color:"linear-gradient(135deg,#8B6914,#B08020)",nombre:"Oro oxidado"}
  ],
  metalNota: "Cobre, bronce y oro con patina son tus metales naturales. La plata fría o el oro brillante moderno no son para ti.",
  maquillaje: {
    labios: [{hex:"#B7410E",n:"Rojo ladrillo"},{hex:"#C2714F",n:"Terracota"},{hex:"#9B2335",n:"Granate"},{hex:"#D2691E",n:"Naranja marrón"},{hex:"#A05038",n:"Ladrillo"}],
    ojos: [{hex:"#556B2F",n:"Verde oliva"},{hex:"#A06838",n:"Cobre"},{hex:"#8B7536",n:"Kaki"},{hex:"#8B4513",n:"Marrón"},{hex:"#CC7722",n:"Ocre"}],
    mejillas: [{hex:"#C2714F",n:"Terracota"},{hex:"#D4956A",n:"Coral"},{hex:"#E07B39",n:"Naranja suave"},{hex:"#C09060",n:"Bronce"}],
    base: [{hex:"#E0C090",n:"Beige dorado"},{hex:"#D4A870",n:"Tostado cálido"},{hex:"#C89060",n:"Dorado medio"}],
    labiosEvitar: "Rosas fríos, nude demasiado pálidos, colores pastel",
    ojosEvitar: "Plateados, azules fríos, morados fríos",
    mejillasEvitar: "Rosas fríos, malvas, bronzer plateado",
    baseNota: "Base con subtono muy dorado o cobre. Finish natural o luminoso. Nunca frío o grisáceo.",
    notasFinales: ["Los colores tierra son tu maquillaje natural","Labios en terracota o ladrillo te definen","Delineador marrón oscuro o negro cálido","Cejas en castaño rojizo o cobrizo","Iluminador cobre o dorado-terracota","El maquillaje smoky en tonos tierra es tu noche perfecta"]
  }
},


"Otoño Verdadero": {
  get descripcion() { return DATOS_ESTACIONES["Otoño Cálido"].descripcion; },
  get subtono() { return DATOS_ESTACIONES["Otoño Cálido"].subtono; },
  get palabras() { return DATOS_ESTACIONES["Otoño Cálido"].palabras; },
  get neutroClaro() { return DATOS_ESTACIONES["Otoño Cálido"].neutroClaro; },
  get neutroOscuro() { return DATOS_ESTACIONES["Otoño Cálido"].neutroOscuro; },
  get negro() { return DATOS_ESTACIONES["Otoño Cálido"].negro; },
  get colores() { return DATOS_ESTACIONES["Otoño Cálido"].colores; },
  get neutros() { return DATOS_ESTACIONES["Otoño Cálido"].neutros; },
  get apagan() { return DATOS_ESTACIONES["Otoño Cálido"].apagan; },
  get cabello() { return DATOS_ESTACIONES["Otoño Cálido"].cabello; },
  get metales() { return DATOS_ESTACIONES["Otoño Cálido"].metales; },
  get metalNota() { return DATOS_ESTACIONES["Otoño Cálido"].metalNota; },
  get maquillaje() { return DATOS_ESTACIONES["Otoño Cálido"].maquillaje; }
},

"Otoño Suave": {
  descripcion: "Eres la más suave y apagada de los otoños — tu paleta es la bisagra perfecta entre el otoño y el verano suave. Colores cálidos pero de baja saturación, apagados, difuminados como un atardecer nublado. Piel de tono neutro-cálido muy suave, cabello en castaños medios sin demasiada intensidad, ojos de color difuso.",
  subtono: "Neutro-cálido · Suave · Apagado",
  palabras: ["Suave", "Cálida", "Natural", "Tranquila"],
  neutroClaro: "Crema suave o blanco marfil apagado",
  neutroOscuro: "Castaño medio o kaki oscuro",
  negro: "El negro crea demasiado contraste — castaño oscuro o kaki profundo son tus mejores opciones",
  colores: [
    {hex:"#C8A882",nombre:"Camel suave",uso:"Tu neutro más favorecedor"},
    {hex:"#B89870",nombre:"Beige dorado suave",uso:"Base de looks otoñales delicados"},
    {hex:"#A08060",nombre:"Bronce apagado",uso:"Neutro cálido profundo"},
    {hex:"#908050",nombre:"Kaki suave",uso:"Neutro terroso muy elegante"},
    {hex:"#789060",nombre:"Verde salvia cálido",uso:"Prendas naturales y tranquilas"},
    {hex:"#709080",nombre:"Verde azulado apagado",uso:"Acento sofisticado"},
    {hex:"#C09080",nombre:"Rosa terracota suave",uso:"Prenda femenina cálida"},
    {hex:"#A07870",nombre:"Rosa empolvado cálido",uso:"Tu rosa más favorecedor"},
    {hex:"#B89888",nombre:"Malva cálido",uso:"Toque romántico sin frialdad"},
    {hex:"#8A9870",nombre:"Verde musgo suave",uso:"Prendas base de armario"},
    {hex:"#D4B898",nombre:"Durazno apagado",uso:"Cercano al rostro — luminoso"},
    {hex:"#C8A870",nombre:"Mostaza apagada",uso:"Color otoñal con mucho carácter"},
    {hex:"#B08878",nombre:"Coral apagado",uso:"Tu coral más natural"},
    {hex:"#A8A078",nombre:"Kaki amarillo",uso:"Terroso y sofisticado"},
    {hex:"#E0D0B8",nombre:"Crema cálida suave",uso:"Neutro claro de fondo de armario"},
    {hex:"#887868",nombre:"Taupe cálido",uso:"Neutro oscuro suave versátil"}
  ],
  neutros: ["Crema marfil apagada","Camel suave","Taupe cálido","Kaki","Castaño medio"],
  apagan: ["Colores muy brillantes o saturados","Negro puro","Blanco frío","Rosas o malvas fríos","Contrastes muy marcados"],
  cabello: {
    ideales: ["Castaño medio apagado","Castaño suave con reflejos miel discretos","Castaño neutro-cálido natural","Rubio oscuro apagado","Mechas muy sutiles en tono miel o caramelo"],
    evitar: ["Colores muy intensos o saturados","Negro frío o muy oscuro","Rubios muy llamativos","Cobrizos muy intensos"],
    nota: "La sutileza es tu estética — colores discretos, apagados, que no compitan sino que acompañen"
  },
  metales: [
    {color:"linear-gradient(135deg,#C8A87A,#A88858)",nombre:"Oro viejo"},
    {color:"linear-gradient(135deg,#A89070,#887050)",nombre:"Bronce apagado"},
    {color:"linear-gradient(135deg,#B8A878,#988858)",nombre:"Cobre antiguo"},
    {color:"linear-gradient(135deg,#C0B090,#A09070)",nombre:"Oro envejecido"}
  ],
  metalNota: "Metales envejecidos, con pátina y apagados. Nada brillante en exceso, nada frío — la sutileza es tu sello.",
  maquillaje: {
    labios: [{hex:"#C09080",n:"Rosa terracota"},{hex:"#A07870",n:"Rosa empolvado"},{hex:"#B08878",n:"Coral apagado"},{hex:"#C8A882",n:"Nude cálido"},{hex:"#A08878",n:"Malva cálido"}],
    ojos: [{hex:"#908050",n:"Kaki"},{hex:"#A08060",n:"Bronce suave"},{hex:"#789060",n:"Verde salvia"},{hex:"#8A9870",n:"Musgo"},{hex:"#887868",n:"Taupe"}],
    mejillas: [{hex:"#D4B898",n:"Durazno apagado"},{hex:"#C09080",n:"Rosa terracota"},{hex:"#B08878",n:"Coral suave"},{hex:"#C8A870",n:"Melocotón cálido"}],
    base: [{hex:"#E0D0B8",n:"Crema cálida"},{hex:"#D4C0A0",n:"Beige cálido"},{hex:"#C8B090",n:"Beige medio"}],
    labiosEvitar: "Rosas fríos, rojos brillantes, colores muy saturados",
    ojosEvitar: "Plateados, azules fríos, colores muy brillantes",
    mejillasEvitar: "Rosas fríos, malvas fríos, bronzer muy oscuro",
    baseNota: "Base con subtono neutro-cálido muy suave. Finish natural y apagado — sin brillos excesivos.",
    notasFinales: ["Lo apagado es tu elegancia — evita el maquillaje muy dramático","Delineador en castaño medio o taupe","Cejas en castaño suave, bien pero no muy marcadas","Iluminador muy discreto en tono cobre suave","Blush ligero para no apagar — menos es más","El look natural y armónico es tu firma"]
  }
},

// ──────────────── INVIERNOS ────────────────
"Invierno Brillante": {
  descripcion: "Eres la más dramática y de mayor contraste de todas las estaciones. Tu coloración combina una profundidad oscura con una claridad luminosa — el contraste entre tu piel clara y tu cabello oscuro, o tu piel oscura con rasgos muy definidos, es extraordinario. Necesitas colores puros, brillantes y de alta intensidad.",
  subtono: "Frío-neutro · Muy contrastado · Brillante",
  palabras: ["Dramática", "Poderosa", "Brillante", "Impactante"],
  neutroClaro: "Blanco puro óptico",
  neutroOscuro: "Negro puro",
  negro: "El negro es tu neutro — te pertenece completamente y te hace justicia",
  colores: [
    {hex:"#000000",nombre:"Negro puro",uso:"Tu neutro oscuro más poderoso"},
    {hex:"#FFFFFF",nombre:"Blanco puro",uso:"Tu neutro claro de máximo impacto"},
    {hex:"#FF0000",nombre:"Rojo puro brillante",uso:"Tu rojo — dramático e impactante"},
    {hex:"#FF1493",nombre:"Rosa fucsia",uso:"Prenda de máximo impacto"},
    {hex:"#0000FF",nombre:"Azul rey",uso:"Tu azul poderoso"},
    {hex:"#00BFFF",nombre:"Azul celeste brillante",uso:"Prenda de verano impactante"},
    {hex:"#7B68EE",nombre:"Azul pizarra medio",uso:"Elegante con presencia"},
    {hex:"#9400D3",nombre:"Violeta oscuro",uso:"Dramático y sofisticado"},
    {hex:"#00FF7F",nombre:"Verde primavera",uso:"Acento de máximo contraste"},
    {hex:"#00CED1",nombre:"Turquesa oscuro",uso:"Sofisticado y llamativo"},
    {hex:"#FFD700",nombre:"Amarillo dorado puro",uso:"Acento poderoso"},
    {hex:"#FF6347",nombre:"Tomate",uso:"Naranja-rojo brillante"},
    {hex:"#4B0082",nombre:"Índigo",uso:"Profundo y misterioso"},
    {hex:"#DC143C",nombre:"Carmesí",uso:"Tu rojo más elegante"},
    {hex:"#C0C0C0",nombre:"Plata brillante",uso:"Neutro metálico de impacto"},
    {hex:"#800080",nombre:"Púrpura",uso:"Sofisticación máxima"}
  ],
  neutros: ["Negro puro","Blanco puro","Gris carbón","Navy profundo","Plata"],
  apagan: ["Colores terrosos y cálidos","Beige y camel","Tonos apagados","Colores pastel muy suaves","Mostaza y oliva"],
  cabello: {
    ideales: ["Negro azabache puro","Castaño muy oscuro frío","Negro con reflejos azulados","Tinte negro o muy oscuro","Castaño muy oscuro con base fría"],
    evitar: ["Cualquier tono cálido","Rubios de cualquier tipo","Castaños claros o medios","Cobrizos o rojizos"],
    nota: "Lo oscuro y puro es tu firma — el contraste es tu poder y cualquier suavización lo disminuye"
  },
  metales: [
    {color:"linear-gradient(135deg,#E8E8E8,#808080)",nombre:"Plata brillante"},
    {color:"linear-gradient(135deg,#F0F0F0,#A0A0A0)",nombre:"Plata pura"},
    {color:"linear-gradient(135deg,#E0E0E0,#606060)",nombre:"Plata oscura"},
    {color:"linear-gradient(135deg,#C0C0C0,#404040)",nombre:"Acero negro"}
  ],
  metalNota: "Plata brillante y oscura, acero, platino — el contraste entre el metal claro y el negro es tu máxima expresión. Sin oro.",
  maquillaje: {
    labios: [{hex:"#FF0000",n:"Rojo puro"},{hex:"#DC143C",n:"Carmesí"},{hex:"#FF1493",n:"Fucsia"},{hex:"#800000",n:"Borgoña"},{hex:"#4B0082",n:"Ciruela oscura"}],
    ojos: [{hex:"#000000",n:"Negro"},{hex:"#4B0082",n:"Índigo"},{hex:"#800080",n:"Púrpura"},{hex:"#C0C0C0",n:"Plateado"},{hex:"#696969",n:"Gris oscuro"}],
    mejillas: [{hex:"#FF1493",n:"Rosa fucsia"},{hex:"#DC143C",n:"Carmesí"},{hex:"#FF69B4",n:"Rosa intenso"},{hex:"#C06080",n:"Frambuesa"}],
    base: [{hex:"#F5F5F5",n:"Porcelana pura"},{hex:"#F0F0F0",n:"Marfil frío"},{hex:"#E8E8E8",n:"Beige frío puro"}],
    labiosEvitar: "Tonos tierra, coral cálido, nude demasiado suave",
    ojosEvitar: "Dorados cálidos, tonos tierra, pastel",
    mejillasEvitar: "Melocotón, coral cálido, bronzer dorado",
    baseNota: "Base de cobertura total con subtono frío o neutro. Finish luminoso de alto impacto.",
    notasFinales: ["El drama es tu lenguaje — no te contengas","Labio rojo o fucsia es tu firma más auténtica","Delineador negro intenso realza tu contraste","Cejas muy bien definidas y oscuras — son tu encuadre","Iluminador plateado en pómulos — el contraste es todo","El ojo ahumado en negro y plateado es tu look nocturno perfecto"]
  }
},

"Invierno Frío": {
  descripcion: "Tu paleta es pura elegancia fría y profunda. Colores de base azulada o neutral-fría, con una intensidad que comunica sofisticación y poder. Piel de subtono muy frío — rosado-azulado, oliváceo frío o neutro sin calidez. Cabello de mediana a alta intensidad en fríos. Eres la invernante más fría y refined.",
  subtono: "Muy frío · Intenso · Sofisticado",
  palabras: ["Sofisticada", "Poderosa", "Fría", "Elegante"],
  neutroClaro: "Blanco puro o blanco nieve",
  neutroOscuro: "Negro puro o navy profundo",
  negro: "El negro es tuyo — te sienta como a ninguna otra estación",
  colores: [
    {hex:"#000000",nombre:"Negro puro",uso:"Tu neutro más natural y poderoso"},
    {hex:"#FFFFFF",nombre:"Blanco nieve",uso:"Tu neutro claro de máximo impacto"},
    {hex:"#DC143C",nombre:"Carmesí",uso:"Tu rojo — frío, intenso, elegante"},
    {hex:"#8B008B",nombre:"Magenta oscuro",uso:"Prenda dramática y sofisticada"},
    {hex:"#0000CD",nombre:"Azul medio",uso:"Tu azul favorecedor profundo"},
    {hex:"#191970",nombre:"Navy profundo",uso:"Neutro oscuro muy sofisticado"},
    {hex:"#4B0082",nombre:"Índigo",uso:"Prenda oscura y misteriosa"},
    {hex:"#800080",nombre:"Púrpura",uso:"Elegancia profunda"},
    {hex:"#C71585",nombre:"Rojo violeta",uso:"Prenda llamativa de poder"},
    {hex:"#2E8B57",nombre:"Verde mar",uso:"Acento fresco de alto impacto"},
    {hex:"#008080",nombre:"Teal",uso:"Verde-azul sofisticado"},
    {hex:"#708090",nombre:"Gris pizarra",uso:"Neutro oscuro suave"},
    {hex:"#A9A9A9",nombre:"Gris oscuro",uso:"Neutro intermedio elegante"},
    {hex:"#D3D3D3",nombre:"Gris claro",uso:"Neutro claro muy favorecedor"},
    {hex:"#E8E8E8",nombre:"Gris perla",uso:"Casi blanco — muy refinado"},
    {hex:"#00CED1",nombre:"Turquesa oscuro",uso:"Acento brillante de invierno"}
  ],
  neutros: ["Negro puro","Blanco nieve","Gris carbón","Navy","Gris pizarra"],
  apagan: ["Beige y camel cálido","Terracota y naranja","Mostaza y oliva","Colores tierra","Cualquier tono con base dorada"],
  cabello: {
    ideales: ["Negro o castaño muy oscuro frío","Navy — tinte azul oscuro muy sofisticado","Castaño oscuro con base fría o violácea","Negro azabache","Gris oscuro natural o teñido"],
    evitar: ["Cualquier tono cálido o dorado","Rubios de cualquier tipo","Cobrizos o rojizos","Castaños medios sin profundidad"],
    nota: "Oscuro y frío es tu poder — cuanto más te alejes de los tonos cálidos, más auténtica y sofisticada te ves"
  },
  metales: [
    {color:"linear-gradient(135deg,#E8E8E8,#B0B0B0)",nombre:"Plata"},
    {color:"linear-gradient(135deg,#D0D0E0,#8080A0)",nombre:"Plata azulada"},
    {color:"linear-gradient(135deg,#F0F0F0,#808080)",nombre:"Platino"},
    {color:"linear-gradient(135deg,#808090,#404050)",nombre:"Acero oscuro"}
  ],
  metalNota: "Plata, platino y acero son tus metales. El oro cálido o el cobre son completamente opuestos a tu esencia.",
  maquillaje: {
    labios: [{hex:"#DC143C",n:"Carmesí"},{hex:"#C71585",n:"Rojo violeta"},{hex:"#8B008B",n:"Magenta"},{hex:"#800000",n:"Borgoña"},{hex:"#4B0082",n:"Ciruela"}],
    ojos: [{hex:"#000000",n:"Negro"},{hex:"#708090",n:"Gris pizarra"},{hex:"#4B0082",n:"Índigo"},{hex:"#800080",n:"Violeta"},{hex:"#C0C0C0",n:"Plateado"}],
    mejillas: [{hex:"#DC143C",n:"Carmesí suave"},{hex:"#C06080",n:"Frambuesa"},{hex:"#DDA0DD",n:"Malva"},{hex:"#FFB6C1",n:"Rosa frío"}],
    base: [{hex:"#F5F5F5",n:"Porcelana"},{hex:"#F0F0F0",n:"Marfil frío"},{hex:"#E8E8E8",n:"Beige frío"}],
    labiosEvitar: "Coral cálido, naranja, tonos tierra",
    ojosEvitar: "Dorados, verdes oliva, tonos tierra",
    mejillasEvitar: "Melocotón, coral cálido, bronzer dorado",
    baseNota: "Subtono neutro-frío o rosado frío. Cobertura media a total. Finish luminoso o satinado — sin base dorada.",
    notasFinales: ["La precisión y el contraste son tu lenguaje","Labios oscuros o intensos fríos te definen","Delineador negro es tuyo por naturaleza","Cejas bien definidas y oscuras","Iluminador plateado — frío y sofisticado","El ojo dramático en grises y plateados es tu noche"]
  }
},

"Invierno Suave": {
  descripcion: "Eres el invierno más accesible — fría en subtono pero de menor contraste y saturación que los otros inviernos. Tu coloración tiene profundidad pero no el alto drama del invierno brillante. Piel con subtono frío neutro o ligeramente rosado, cabello de intensidad media, ojos de color claro o medio con frío. Una elegancia más contenida y moderna.",
  subtono: "Frío-neutro · Moderado · Elegante",
  palabras: ["Moderna", "Elegante", "Fría", "Refinada"],
  neutroClaro: "Blanco suave o gris perla",
  neutroOscuro: "Navy suave o negro con base azulada",
  negro: "El negro puede funcionarte — pero el navy profundo o el carbón azulado pueden ser igual de elegantes con menos intensidad",
  colores: [
    {hex:"#F0F0F5",nombre:"Blanco grisáceo",uso:"Tu neutro claro ideal"},
    {hex:"#E0E0EC",nombre:"Lavanda muy suave",uso:"Prendas delicadas y modernas"},
    {hex:"#B0C4DE",nombre:"Azul acero claro",uso:"Tu azul más favorecedor"},
    {hex:"#6495ED",nombre:"Azul cornflower",uso:"Prenda elegante con carácter"},
    {hex:"#4169E1",nombre:"Azul real",uso:"Prenda de impacto moderado"},
    {hex:"#191970",nombre:"Navy",uso:"Neutro oscuro sofisticado"},
    {hex:"#9370DB",nombre:"Violeta medio",uso:"Prenda elegante romántica"},
    {hex:"#DDA0DD",nombre:"Malva suave",uso:"Rosa frío favorecedor"},
    {hex:"#EE82EE",nombre:"Violeta suave",uso:"Toque femenino frío"},
    {hex:"#20B2AA",nombre:"Verde mar",uso:"Acento fresco sofisticado"},
    {hex:"#5F9EA0",nombre:"Cadet blue",uso:"Verde-azul muy elegante"},
    {hex:"#708090",nombre:"Gris pizarra",uso:"Neutro oscuro suave"},
    {hex:"#C0C0C0",nombre:"Plata",uso:"Neutro metálico"},
    {hex:"#D8BFD8",nombre:"Cardo",uso:"Neutro neutro-frío cálido"},
    {hex:"#E6E6FA",nombre:"Lavanda",uso:"Prendas etéreas y modernas"},
    {hex:"#778899",nombre:"Gris pizarra claro",uso:"Neutro intermedio elegante"}
  ],
  neutros: ["Blanco grisáceo","Gris perla","Navy","Gris carbón","Lavanda suave"],
  apagan: ["Colores tierra cálidos","Naranja y terracota","Mostaza","Beige y camel muy cálido","Verde oliva cálido"],
  cabello: {
    ideales: ["Castaño oscuro frío","Navy o tinte azulado oscuro","Castaño con base violácea o fría","Negro suave","Castaño medio frío con mechas sutiles ceniza"],
    evitar: ["Tonos cálidos o dorados","Cobrizos","Castaños con reflejos rojizos","Rubios cálidos"],
    nota: "Oscuro y frío con moderación — no necesitas el drama total del invierno brillante, pero el frío es siempre tu base"
  },
  metales: [
    {color:"linear-gradient(135deg,#D8D8E8,#A0A0B8)",nombre:"Plata lavanda"},
    {color:"linear-gradient(135deg,#E0E0E8,#B0B0C0)",nombre:"Plata suave"},
    {color:"linear-gradient(135deg,#C8C8D8,#8888A0)",nombre:"Acero azulado"},
    {color:"linear-gradient(135deg,#D0D0E0,#9090B0)",nombre:"Platino azulado"}
  ],
  metalNota: "Plata con toque azulado o lavanda es lo más sofisticado para ti. Oro cálido totalmente fuera de tu paleta.",
  maquillaje: {
    labios: [{hex:"#DDA0DD",n:"Malva"},{hex:"#9370DB",n:"Violeta suave"},{hex:"#C71585",n:"Frambuesa"},{hex:"#E8D0D8",n:"Nude rosado frío"},{hex:"#B060A0",n:"Mora suave"}],
    ojos: [{hex:"#708090",n:"Gris pizarra"},{hex:"#9370DB",n:"Violeta"},{hex:"#6495ED",n:"Azul"},{hex:"#C0C0C0",n:"Plateado"},{hex:"#4169E1",n:"Azul real"}],
    mejillas: [{hex:"#DDA0DD",n:"Malva"},{hex:"#E8C8D8",n:"Rosa pálido"},{hex:"#C8B0D0",n:"Lavanda"},{hex:"#FFB6C1",n:"Rosa suave"}],
    base: [{hex:"#F0F0F5",n:"Porcelana suave"},{hex:"#E8E8F0",n:"Marfil frío suave"},{hex:"#E0E0E8",n:"Beige frío"}],
    labiosEvitar: "Terracota, coral cálido, dorado",
    ojosEvitar: "Dorados, verdes oliva, tonos tierra",
    mejillasEvitar: "Melocotón, coral cálido, bronzer dorado",
    baseNota: "Subtono frío neutro. Cobertura media. Finish luminoso moderno — evita completamente el subtono dorado.",
    notasFinales: ["Tu maquillaje es moderno y preciso, no dramático","Labios en malva o rosado frío son tu firma del día","Delineador gris oscuro o negro suave","Cejas bien definidas pero no dramáticas","Iluminador plateado-lavanda muy sutil","El look monocromático en malva es tu sello personal"]
  }
}

}; // fin DATOS_ESTACIONES



// ════════════════════════════════════════════════════════════════
//  FUNCIONES DE RENDER — Colorimetría dinámica
// ════════════════════════════════════════════════════════════════

function getEstacionData() {
  var estacion = CONFIG.ESTACION;
  if (DATOS_ESTACIONES[estacion]) return DATOS_ESTACIONES[estacion];
  // fuzzy match
  var keys = Object.keys(DATOS_ESTACIONES);
  for (var k of keys) {
    if (estacion.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(estacion.toLowerCase()))
      return DATOS_ESTACIONES[k];
  }
  return DATOS_ESTACIONES["Primavera Cálida"];
}

function renderColorimetria() {
  var d = getEstacionData();
  var estacion = CONFIG.ESTACION;
  var swatchesHTML = d.colores.map(function(c){
    return '<div class="swatch"><div class="swatch-box"><div class="swatch-fill" style="background:'+c.hex+'"></div></div><div class="swatch-name">'+c.nombre+'</div></div>';
  }).join('');
  var neutrosHTML = d.neutros.map(function(n){ return '<div class="list-item">• '+n+'</div>'; }).join('');
  var apagaHTML = d.apagan.map(function(n){ return '<div class="list-item">• '+n+'</div>'; }).join('');
  var accentColor = d.subtono.toLowerCase().includes('frío') ? '#5B7B9F' : '#C2714F';

  var out = '';
  out += '<h2 class="sec-title">✦ Tu Estación: '+estacion+'</h2>';
  out += '<p class="sec-intro"><strong>'+estacion+'</strong> — '+d.descripcion+'</p>';
  out += '<div class="white-card" style="margin-bottom:18px">';
  out += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px">';
  d.palabras.forEach(function(p){
    out += '<span style="background:'+accentColor+'22;color:'+accentColor+';padding:4px 14px;border-radius:20px;font-size:12px;font-family:Inter,sans-serif;letter-spacing:1px">'+p+'</span>';
  });
  out += '</div>';
  out += '<div style="font-size:12px;color:#7A9080;font-family:Inter,sans-serif;letter-spacing:2px;margin-bottom:4px;text-transform:uppercase">Subtono</div>';
  out += '<div style="font-size:14px;color:#3D4E48;font-family:Inter,sans-serif;margin-bottom:14px"><strong>'+d.subtono+'</strong></div>';
  out += '<h3 class="card-h3 brown">✦ Tu Paleta Personal</h3>';
  out += '<div class="palette-grid">'+swatchesHTML+'</div>';
  out += '<div class="tip-box"><strong>Una nota sobre los neutros oscuros:</strong> '+d.negro+'</div>';
  out += '</div>';
  out += '<div class="two-cols">';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 brown">✦ Tus Neutros Perfectos</h3>'+neutrosHTML+'</div>';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 terra">✦ Lo que apaga tu luz</h3>'+apagaHTML+'</div>';
  out += '</div>';

  document.getElementById('colorimetria-content').innerHTML = out;
}

function renderMetales() {
  var d = getEstacionData();
  var metalesHTML = d.metales.map(function(m){
    return '<div style="text-align:center"><div class="metal-circle" style="background:'+m.color+'"></div><div style="font-size:11px;color:#3D4E48;font-family:Inter,sans-serif">'+m.nombre+'</div></div>';
  }).join('');
  var out = '<div class="white-card"><h3 class="card-h3 brown">✦ Tus Metales</h3>';
  out += '<div class="metals-row">'+metalesHTML;
  out += '<p style="font-family:Inter,sans-serif;font-size:13px;color:#5B7B6F;max-width:260px;font-style:italic">'+d.metalNota+'</p>';
  out += '</div></div>';
  document.getElementById('metales-content').innerHTML = out;
}

function renderPaleta() {
  var d = getEstacionData();
  var estacion = CONFIG.ESTACION;
  var coloresHTML = d.colores.map(function(c){
    return '<div class="color-item"><div class="color-swatch-small" style="background:'+c.hex+'"></div><div class="color-info"><span class="color-name">'+c.nombre+'</span><span class="color-use">'+c.uso+'</span><span class="color-hex">'+c.hex+'</span></div></div>';
  }).join('');
  var apagaHTML = d.apagan.map(function(a,i){
    var labels = ["Primer elemento a evitar","Segundo","Tercero","Cuarto","Quinto","Sexto","Séptimo"];
    return '<div class="restan-item"><strong>'+a+'</strong><span>No forma parte de la paleta de '+estacion+'</span></div>';
  }).join('');

  var out = '<h2 class="sec-title">✦ Tu Paleta Completa</h2>';
  out += '<div class="sec-subtitle">Los colores que hablan por ti — '+estacion+'</div>';
  out += '<p class="sec-intro">Estos son los colores calculados para complementar tu tono de piel, subtono y la intensidad de tu coloración como <strong>'+estacion+'</strong>. No son sugerencias — son los colores que hacen que todo funcione.</p>';
  out += '<div class="colores-grid">'+coloresHTML+'</div>';
  out += '<div class="white-card">';
  out += '<h3 class="card-h3" style="color:#5B7B6F">Lo que apaga tu luz</h3>';
  out += '<div class="restan-grid">'+apagaHTML+'</div>';
  out += '</div>';
  document.getElementById('paleta-content').innerHTML = out;
}

function renderMaquillaje() {
  var d = getEstacionData();
  var m = d.maquillaje;
  var estacion = CONFIG.ESTACION;

  function swatches(arr){ return arr.map(function(s){ return '<div class="makeup-swatch" style="background:'+s.hex+'" title="'+s.n+'"></div>'; }).join(''); }

  var notasHTML = m.notasFinales.map(function(n){ return '<div class="list-item" style="border-color:rgba(255,255,255,0.1);color:#F8F5F1">'+n+'</div>'; });
  var mitad = Math.ceil(notasHTML.length/2);
  var col1 = notasHTML.slice(0,mitad).join('');
  var col2 = notasHTML.slice(mitad).join('');

  var out = '<h2 class="sec-title">✦ Paleta de Maquillaje</h2>';
  out += '<div class="sec-subtitle">Amplifica lo que ya está ahí — '+estacion+'</div>';
  out += '<p class="sec-intro">'+m.baseNota+'</p>';
  out += '<div class="makeup-grid">';

  // Labios
  out += '<div class="makeup-card"><div class="makeup-title">Labios</div><div class="makeup-swatch-row">'+swatches(m.labios)+'</div>';
  m.labios.forEach(function(s){ out += '<div class="makeup-item">'+s.n+'</div>'; });
  out += '<div class="list-item" style="color:#C2714F;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(180,196,192,0.2)">Evitar: '+m.labiosEvitar+'</div></div>';

  // Ojos
  out += '<div class="makeup-card"><div class="makeup-title">Ojos</div><div class="makeup-swatch-row">'+swatches(m.ojos)+'</div>';
  m.ojos.forEach(function(s){ out += '<div class="makeup-item">'+s.n+'</div>'; });
  out += '<div class="list-item" style="color:#C2714F;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(180,196,192,0.2)">Evitar: '+m.ojosEvitar+'</div></div>';

  // Mejillas
  out += '<div class="makeup-card"><div class="makeup-title">Mejillas</div><div class="makeup-swatch-row">'+swatches(m.mejillas)+'</div>';
  m.mejillas.forEach(function(s){ out += '<div class="makeup-item">'+s.n+'</div>'; });
  out += '<div class="list-item" style="color:#C2714F;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(180,196,192,0.2)">Evitar: '+m.mejillasEvitar+'</div></div>';

  // Base
  out += '<div class="makeup-card"><div class="makeup-title">Base y Piel</div><div class="makeup-swatch-row">'+swatches(m.base)+'</div>';
  m.base.forEach(function(s){ out += '<div class="makeup-item">'+s.n+'</div>'; });
  out += '<div class="list-item" style="color:#C2714F;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(180,196,192,0.2)">'+m.baseNota+'</div></div>';

  out += '</div>'; // end makeup-grid

  out += '<div class="dark-box"><h3 style="color:#B8C4C0;margin-bottom:14px;font-size:18px;text-align:center">Notas finales de maquillaje</h3>';
  out += '<div class="two-cols"><div>'+col1+'</div><div>'+col2+'</div></div></div>';

  document.getElementById('maquillaje-content').innerHTML = out;
}

function renderCabellaColor() {
  var d = getEstacionData();
  var estacion = CONFIG.ESTACION;
  var idealesHTML = d.cabello.ideales.map(function(i){ return '<div class="list-item">✦ '+i+'</div>'; }).join('');
  var evitarHTML = d.cabello.evitar.map(function(i){ return '<div class="list-item" style="color:#C2714F">✗ '+i+'</div>'; }).join('');

  // inject into cabello section after the cortes content
  var colorBox = '<div class="white-card" style="margin-top:18px" id="cabello-color-box">';
  colorBox += '<h3 class="card-h3 brown">✦ Color de Cabello Ideal — '+estacion+'</h3>';
  colorBox += '<div class="two-cols" style="margin-top:12px">';
  colorBox += '<div>'+idealesHTML+'</div>';
  colorBox += '<div>'+evitarHTML+'</div>';
  colorBox += '</div>';
  colorBox += '<div class="tip-box" style="margin-top:12px"><strong>Nota del colorista:</strong> '+d.cabello.nota+'</div>';
  colorBox += '</div>';

  // remove old box if exists, then append
  var old = document.getElementById('cabello-color-box');
  if (old) old.remove();
  document.getElementById('cabello-content').insertAdjacentHTML('beforeend', colorBox);
}



// ════════════════════════════════════════════════════════════════
//  CÁPSULAS DE ROPA POR ESTACIÓN — basadas en colorimetría
// ════════════════════════════════════════════════════════════════
const DATOS_CAPSULAS = {
  calida: { // Primaveras y Otoños
    titulo: "Temporada Cálida",
    subtitulo: "PRIMAVERA · VERANO",
    emoji: "🌿",
    items: {
      "Primavera Brillante":  ["Blusa coral brillante","Top mostaza vibrante","Vestido turquesa","Pantalón verde hierba","Falda midi crema dorada","Blazer naranja melocotón","Top verde menta","Shorts caramelo","Cardigan durazno","Sandalias nude cálido"],
      "Primavera Cálida":     ["Blusa terracota","Top mostaza","Blusa coral floral","Palazzo verde oliva","Falda midi beige","Blazer cropped caramelo","Vestido wrap durazno","Pantalón lino canela","Top camel estructurado","Sandalias nude cálido"],
      "Primavera Clara":      ["Blusa melocotón suave","Top crema con detalles","Vestido amarillo pastel","Pantalón lino trigo","Falda A-line beige rosado","Cardigan menta pálido","Top turquesa suave","Shorts camel claro","Blusa floral pastel","Sandalias nude claro"],
      "Otoño Profundo":       ["Blusa granate oscuro","Top kaki profundo","Vestido marrón chocolate","Pantalón verde oliva oscuro","Falda midi siena","Blazer caoba","Cardigan mostaza profunda","Blusa ocre","Pantalón castaño oscuro","Botas marrón"],
      "Otoño Cálido":         ["Blusa terracota","Top mostaza","Blusa coral floral","Palazzo verde oliva","Falda midi beige","Blazer cropped caramelo","Vestido wrap durazno","Pantalón lino canela","Top camel estructurado","Sandalias nude cálido"],
      "Otoño Verdadero":      ["Blusa terracota","Top mostaza","Blusa coral floral","Palazzo verde oliva","Falda midi beige","Blazer cropped caramelo","Vestido wrap durazno","Pantalón lino canela","Top camel estructurado","Sandalias nude cálido"],
      "Otoño Suave":          ["Blusa coral apagado","Top kaki suave","Vestido durazno apagado","Pantalón camel","Falda midi taupe","Cardigan verde salvia","Blusa mostaza apagada","Pantalón beige","Blusa rosa terracota","Sandalias camel claro"],
    },
    coloresPrendas: {
      "Primavera Brillante":  ["#FF6F3C","#FFB347","#00CED1","#3CB371","#F9E4B7","#F4A460","#90EE90","#C68642","#FFDAB9","#F5DEB3"],
      "Primavera Cálida":     ["#C2714F","#B8860B","#F4956A","#556B2F","#DBBF90","#D4A050","#DDA070","#9A6840","#D4A050","#D8C09A"],
      "Primavera Clara":      ["#FFDAB9","#FAEBD7","#F0C987","#F5DEB3","#E6CCB2","#98FB98","#AFEEEE","#C8A882","#FAD5A5","#EDE0C8"],
      "Otoño Profundo":       ["#9B2335","#8B7536","#6B4226","#556B2F","#A0522D","#5C3317","#B8860B","#CC7722","#4B3621","#704214"],
      "Otoño Cálido":         ["#C2714F","#B8860B","#F4956A","#556B2F","#DBBF90","#D4A050","#DDA070","#9A6840","#D4A050","#D8C09A"],
      "Otoño Verdadero":      ["#C2714F","#B8860B","#F4956A","#556B2F","#DBBF90","#D4A050","#DDA070","#9A6840","#D4A050","#D8C09A"],
      "Otoño Suave":          ["#B08878","#908050","#D4B898","#C8A882","#887868","#789060","#C8A870","#C8A882","#C09080","#C8A882"],
    }
  },
  fria: { // Veranos e Inviernos
    titulo: "Temporada Fría",
    subtitulo: "OTOÑO · INVIERNO",
    emoji: "❄️",
    items: {
      "Primavera Brillante":  ["Suéter coral claro","Blazer caramelo","Pantalón verde bosque","Abrigo beige cálido","Cardigan mostaza suave","Blusa durazno manga larga","Pantalón kaki","Falda midi canela","Suéter crema","Botines nude"],
      "Primavera Cálida":     ["Suéter cuello tortuga mostaza","Blusa seda terracota","Sweater verde oliva","Pantalón lana verde musgo","Falda midi marrón dorado","Pantalón recto café","Falda A-line kaki","Abrigo camel","Cardigan largo teal","Camisa franela canela"],
      "Primavera Clara":      ["Suéter crema suave","Blusa melocotón manga larga","Pantalón beige cálido","Abrigo camel claro","Cardigan rosa pastel","Blusa trigo con detalles","Pantalón menta suave","Falda midi arena","Suéter amarillo pastel","Botines nude claro"],
      "Verano Brillante":     ["Suéter azul brillante","Blazer fucsia","Pantalón navy","Abrigo gris perla","Cardigan turquesa","Blusa violeta","Pantalón gris acero","Falda midi azul","Suéter blanco puro","Botines plateados"],
      "Verano Frío":          ["Suéter lavanda","Blazer navy frío","Pantalón gris azulado","Abrigo gris perla","Cardigan malva","Blusa azul acero","Pantalón carbón","Falda midi violeta suave","Suéter gris frío","Botines grises"],
      "Verano Suave":         ["Suéter malva grisáceo","Blazer gris azulado","Pantalón gris suave","Abrigo lavanda pálido","Cardigan azul gris","Blusa rosado ceniza","Pantalón gris medio","Falda midi gris lavanda","Suéter gris perla","Botines taupe frío"],
      "Otoño Profundo":       ["Suéter granate","Blazer marrón oscuro","Pantalón negro cálido","Abrigo caoba","Cardigan kaki profundo","Blusa siena manga larga","Pantalón marrón chocolate","Falda midi verde oscuro","Suéter ocre","Botines marrón oscuro"],
      "Otoño Cálido":         ["Suéter cuello tortuga mostaza","Blusa seda terracota","Sweater verde oliva","Pantalón lana verde musgo","Falda midi marrón dorado","Pantalón recto café","Falda A-line kaki","Abrigo camel","Cardigan largo teal","Camisa franela canela"],
      "Otoño Verdadero":      ["Suéter cuello tortuga mostaza","Blusa seda terracota","Sweater verde oliva","Pantalón lana verde musgo","Falda midi marrón dorado","Pantalón recto café","Falda A-line kaki","Abrigo camel","Cardigan largo teal","Camisa franela canela"],
      "Otoño Suave":          ["Suéter taupe cálido","Blazer camel suave","Pantalón kaki apagado","Abrigo beige oscuro","Cardigan verde salvia","Blusa mostaza apagada manga larga","Pantalón marrón suave","Falda midi camel","Suéter rosa terracota","Botines camel"],
      "Invierno Brillante":   ["Suéter negro puro","Blazer blanco óptico","Pantalón negro","Abrigo rojo carmesí","Cardigan fucsia","Blusa azul real","Pantalón navy","Falda midi plateada","Suéter violeta","Botines negros"],
      "Invierno Frío":        ["Suéter navy profundo","Blazer negro puro","Pantalón gris carbón","Abrigo negro","Cardigan violeta oscuro","Blusa carmesí","Pantalón azul pizarra","Falda midi gris oscuro","Suéter índigo","Botines negros"],
      "Invierno Suave":       ["Suéter navy suave","Blazer gris carbón","Pantalón gris azulado","Abrigo navy","Cardigan malva frío","Blusa violeta suave","Pantalón gris acero","Falda midi lavanda oscura","Suéter azul cornflower","Botines grises"],
    },
    coloresPrendas: {
      "Primavera Brillante":  ["#F4A460","#C68642","#3CB371","#F5DEB3","#B8860B","#FFDAB9","#8FBC8F","#C68642","#FAEBD7","#D2B48C"],
      "Primavera Cálida":     ["#DDB840","#D4836A","#607040","#445030","#9A7020","#6A4030","#989068","#CCA058","#527880","#A87040"],
      "Primavera Clara":      ["#FAEBD7","#FFDAB9","#F5DEB3","#C8A882","#FFB6C1","#F5DEB3","#98FB98","#EDE0C8","#F0C987","#EDE0C8"],
      "Verano Brillante":     ["#4169E1","#FF1493","#191970","#E0E8F0","#00CED1","#9370DB","#708090","#6495ED","#FFFFFF","#C0C0C0"],
      "Verano Frío":          ["#E6E6FA","#191970","#708090","#E8E8F0","#DDA0DD","#6495ED","#483D8B","#9370DB","#B0C4DE","#778899"],
      "Verano Suave":         ["#A090B0","#8090A0","#9090A0","#E8E0E8","#8090A0","#C0B0B8","#B0B8C0","#A8A8B8","#C8C8D0","#B8B8C0"],
      "Otoño Profundo":       ["#9B2335","#4B3621","#1C1008","#5C3317","#8B7536","#A0522D","#6B4226","#4A5240","#CC7722","#704214"],
      "Otoño Cálido":         ["#DDB840","#D4836A","#607040","#445030","#9A7020","#6A4030","#989068","#CCA058","#527880","#A87040"],
      "Otoño Verdadero":      ["#DDB840","#D4836A","#607040","#445030","#9A7020","#6A4030","#989068","#CCA058","#527880","#A87040"],
      "Otoño Suave":          ["#887868","#C8A882","#908050","#D4C0A0","#789060","#C8A870","#A08060","#C8A882","#C09080","#C8A882"],
      "Invierno Brillante":   ["#000000","#FFFFFF","#000000","#DC143C","#FF1493","#0000FF","#191970","#C0C0C0","#800080","#000000"],
      "Invierno Frío":        ["#191970","#000000","#708090","#000000","#4B0082","#DC143C","#483D8B","#696969","#4B0082","#000000"],
      "Invierno Suave":       ["#191970","#708090","#B0C4DE","#191970","#DDA0DD","#9370DB","#778899","#E6E6FA","#6495ED","#778899"],
    }
  }
};

// Estaciones cálidas
const ESTACIONES_CALIDAS = ["Primavera Brillante","Primavera Cálida","Primavera Clara","Otoño Profundo","Otoño Cálido","Otoño Verdadero","Otoño Suave"];

function renderCapsulas() {
  var estacion = CONFIG.ESTACION;
  var esCalida = ESTACIONES_CALIDAS.includes(estacion);

  function buildCap(data, estacion) {
    var items = data.items[estacion] || data.items["Otoño Cálido"];
    var colores = data.coloresPrendas[estacion] || data.coloresPrendas["Otoño Cálido"];
    var seasonClass = esCalida ? "season-warm" : "season-cold";
    var accentColor = esCalida ? "#C2714F" : "#4A7A75";

    var garments = items.map(function(nombre, i) {
      var col = colores[i] || "#C8A882";
      var col2 = col + "CC";
      return '<div class="garment-card">' +
        '<svg viewBox="0 0 80 100"><defs><linearGradient id="gc'+i+'" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="'+col+'"/><stop offset="100%" stop-color="'+col2+'"/>' +
        '</linearGradient></defs>' +
        '<path d="M20 22 L28 12 Q40 8 52 12 L60 22 L64 84 Q40 90 16 84 Z" fill="url(#gc'+i+')"/>' +
        '<path d="M20 22 L8 25 L6 56 L16 54" fill="'+col+'" opacity="0.8"/>' +
        '<path d="M60 22 L72 25 L74 56 L64 54" fill="'+col+'" opacity="0.8"/>' +
        '</svg>' +
        '<div class="garment-name">'+nombre+'</div>' +
        '</div>';
    }).join('');

    return '<div class="'+seasonClass+'">' +
      '<div class="season-header">' +
      '<div style="font-size:32px">'+data.emoji+'</div>' +
      '<div>' +
      '<div style="font-size:20px;color:#5B7B6F;font-family:\'Cormorant Garamond\',serif">Cápsula '+data.titulo+'</div>' +
      '<div style="font-size:11px;letter-spacing:2px;color:'+accentColor+';font-family:\'Inter\',sans-serif">'+data.subtitulo+'</div>' +
      '</div></div>' +
      '<div class="garment-grid">'+garments+'</div>' +
      '</div>';
  }

  var out = '<h2 class="sec-title">✦ Tus Cápsulas de Ropa</h2>';
  out += '<p class="sec-intro">Prendas pensadas en tu paleta <strong>'+estacion+'</strong> y para tu silueta. No son reglas — son puntos de partida para construir looks que se sientan completamente tuyos.</p>';

  // Show both seasons always
  out += buildCap(DATOS_CAPSULAS.calida, estacion);
  out += buildCap(DATOS_CAPSULAS.fria, estacion);

  document.getElementById('capsulas-content').innerHTML = out;
}


// ════════════════════════════════════════════════
//   DATOS DE ROSTRO — basados en visagismo
// ════════════════════════════════════════════════
const DATOS_ROSTRO = {
  "Ovalado": {
    descripcion: "Tu rostro ovalado es el más versátil y proporcionado de todos — el largo equivale a la mitad del ancho, la línea de nacimiento del cabello es redondeada y el mentón no es puntiagudo. Este tipo de rostro se asocia con una apariencia equilibrada y armónica que admite casi cualquier estilo.",
    principio: "La versatilidad es tu mayor ventaja — experimenta sin miedo",
    cortes: [
      { nombre: "Todo tipo de cortes", detalle: "Tu rostro ovalado es el más versátil — casi cualquier corte te favorece, incluyendo flequillo en todas sus variantes." },
      { nombre: "Capas estratégicas", detalle: "Capas a la altura de pómulos, labios o mentón según lo que desees resaltar. Son tu mejor herramienta para enmarcar el rostro con elegancia." },
      { nombre: "Bob largo con movimiento", detalle: "A la altura de hombros o clavícula con ondas suaves. Enmarca el rostro, añade calidez y mantiene el equilibrio natural de tus proporciones." },
      { nombre: "Midi con flequillo lateral", detalle: "Largo midi con flequillo lateral — sofisticado, alarga el cuello y añade un toque moderno sin comprometer tu versatilidad natural." }
    ],
    aretes: ["Cualquier forma y largo te favorece", "Largos y colgantes para crear verticalidad", "Medianos redondos u ovalados", "Pequeños y delicados para looks minimalistas"],
    lentes: ["Cualquier forma sienta bien", "Clásicos aviador o wayfarer", "Cat-eye para añadir definición", "Geométricos para un look moderno"],
    collares: ["Todos los largos te favorecen", "Choker para rostros de cuello largo", "Y-necklace para alargar visualmente", "Statement corto para ocasiones especiales"],
    evitar: []
  },
  "Redondo": {
    descripcion: "Tu rostro redondo tiene largo y ancho similares — con mejillas como punto más ancho, mentón redondeado y línea de nacimiento del cabello curva. Se asocia con la 'eterna juventud' y pocas arrugas. El objetivo es añadir verticalidad y alargar visualmente el rostro.",
    principio: "Crear ilusión de largo · Líneas verticales · Evitar lo que agrande los lados",
    cortes: [
      { nombre: "Pixie con volumen", detalle: "Aporta altura y estiliza visualmente el rostro. El volumen en la coronilla alarga las proporciones creando una ilusión de mayor longitud." },
      { nombre: "Bob asimétrico", detalle: "Crea ángulos que alargan ópticamente el rostro redondo. Las líneas diagonales rompen la simetría circular y añaden dinamismo." },
      { nombre: "Capas largas con verticalidad", detalle: "Aporta movimiento y verticalidad, afinando el rostro. Las capas desde los pómulos hacia abajo crean fluidez y longitud visual." }
    ],
    aretes: ["Largos y colgantes que alarguen el rostro", "Formas alargadas o en gota", "Chandelier verticales", "Evitar aretes redondos o muy anchos"],
    lentes: ["Angulares o cuadrados para contrastar la redondez", "Rectangulares horizontales para alargar", "Cat-eye con puntas levantadas", "Evitar lentes redondos o muy pequeños"],
    collares: ["Largos en V o Y-necklace — crean verticalidad", "Cadenas largas que caigan hacia el pecho", "Evitar chokers y collares cortos que corten el cuello"],
    evitar: ["Flequillo recto y muy grueso", "Cortes a la altura de la mandíbula que anclen el ancho", "Capas que terminen exactamente en las mejillas"]
  },
  "Cuadrado": {
    descripcion: "Tu rostro cuadrado tiene largo y ancho similares — con mandíbula bien marcada y angular, frente amplia y línea de nacimiento del cabello recta. Es una estructura fuerte y poderosa. El objetivo es suavizar los ángulos de la mandíbula y crear armonía visual.",
    principio: "Suavizar ángulos · Añadir movimiento · Curvas que contrasten la rigidez",
    cortes: [
      { nombre: "Ondas y rizos suaves", detalle: "Las curvas suavizan y contrastan la mandíbula angular" },
      { nombre: "Flequillo lateral o con movimiento", detalle: "Rompe la línea recta de la frente" },
      { nombre: "Capas que comiencen en la mandíbula", detalle: "Crean movimiento justo donde más se necesita" },
      { nombre: "Bob con puntas hacia adentro", detalle: "Dirige la atención hacia el centro y suaviza esquinas" }
    ],
    aretes: ["Colgantes largos en formas ovaladas o redondeadas", "Pendientes con curvas que suavicen", "Argollas medianas", "Evitar formas cuadradas o muy angulares"],
    lentes: ["Redondeados o con puntas caídas", "Aviador clásico", "Lentes ovalados", "Evitar lentes cuadrados o rectangulares muy marcados"],
    collares: ["Collares en V o con formas redondeadas", "Cadenas delicadas de largo medio", "Evitar collares rígidos y muy horizontales como el choker"],
    evitar: ["Cortes muy rectos sin movimiento", "Flequillo recto y muy cuadrado", "Cabello liso y tirante sin textura"]
  },
  "Corazón": {
    descripcion: "Tu rostro corazón — también llamado triángulo invertido — es ancho en la sien y la frente, y se va angostando hasta un mentón pequeño y delicado en forma de V. La frente es más ancha que la mandíbula. El objetivo es añadir volumen en la parte inferior para equilibrar.",
    principio: "Volumen en la parte baja · Suavizar la frente · Equilibrar frente y mentón",
    cortes: [
      { nombre: "Bob a la mandíbula o al mentón", detalle: "Añade visualmente volumen donde más se necesita" },
      { nombre: "Ondas o rizos desde la mandíbula hacia abajo", detalle: "Amplían la parte baja del rostro" },
      { nombre: "Flequillo lateral", detalle: "Reduce visualmente el ancho de la frente" },
      { nombre: "Largo a la clavícula con capas bajas", detalle: "El volumen en la parte inferior equilibra perfectamente" }
    ],
    aretes: ["Anchos o voluminosos en la parte baja — añaden equilibrio visual", "Triángulo hacia abajo", "Formas que se ensanchen hacia el lóbulo", "Evitar aretes muy anchos en la parte superior"],
    lentes: ["Puntas caídas hacia abajo (cat-eye invertido)", "Lentes sin marco o con marco suave", "Aviadores que sean más anchos abajo", "Evitar lentes muy anchos arriba que refuercen la frente"],
    collares: ["Collares cortos con volumen o piedras en el pecho", "Cortos con volumen que añadan peso visual abajo", "Evitar largos muy delgados que dirijan la mirada hacia abajo sin compensar"],
    evitar: ["Volumen excesivo en la coronilla", "Flequillo muy grueso que engrose la frente", "Aretes muy pequeños que dejen la mandíbula sin peso"]
  },
  "Diamante": {
    descripcion: "Tu rostro diamante tiene los pómulos como punto más ancho — frente y mandíbula son estrechas y de ancho similar. Es una combinación de corazón y ovalado. El crecimiento del cabello en la coronilla suele tener forma de pico. El objetivo es equilibrar frente y mentón añadiendo volumen en ambos extremos.",
    principio: "Añadir volumen en frente y mentón · Reducir énfasis en pómulos",
    cortes: [
      { nombre: "Flequillo lateral o completo", detalle: "Añade amplitud en la frente donde falta" },
      { nombre: "Capas en la coronilla con volumen", detalle: "Equilibran los pómulos prominentes" },
      { nombre: "Bob corto con textura", detalle: "Añade volumen en la mandíbula para equilibrar" },
      { nombre: "Largo a la clavícula con ondas suaves", detalle: "Suaviza los pómulos y añade equilibrio" }
    ],
    aretes: ["Medianos con volumen en el lóbulo para ensanchar la mandíbula", "Largos delicados que alarguen", "Formas que no enfaticen el ancho a la altura de los pómulos", "Chandelier elegantes"],
    lentes: ["Ovalados o redondeados — suavizan los pómulos", "Cat-eye delicado", "Sin marco para no añadir más estructura al rostro", "Evitar lentes muy anchos a nivel de los pómulos"],
    collares: ["Choker o collares cortos que añadan volumen en el cuello", "Collares con piedras que lleven la atención al escote", "Y-necklace que alargue y estilice"],
    evitar: ["Estilos que den volumen solo a los lados a la altura de los pómulos", "Flequillo muy escaso que no compense la frente estrecha"]
  },
  "Triangulo": {
    descripcion: "Tu rostro triángulo — inverso al corazón — tiene mandíbula prominente, y el rostro se va angostando hacia los pómulos y la sien. La mandíbula es el rasgo más ancho. El objetivo es añadir volumen en la parte superior para equilibrar y reducir visualmente el énfasis en la mandíbula.",
    principio: "Volumen en la coronilla y sienes · Líneas que suavicen la mandíbula · Atención hacia arriba",
    cortes: [
      { nombre: "Volumen en coronilla y sienes", detalle: "Equilibra la mandíbula ancha" },
      { nombre: "Flequillo voluminoso o con textura", detalle: "Añade anchura visual en la frente" },
      { nombre: "Corte layered con volumen arriba", detalle: "El peso en la parte superior contrarresta la mandíbula" },
      { nombre: "Pixie con volumen en la coronilla", detalle: "Atrae toda la atención hacia arriba" }
    ],
    aretes: ["Pequeños o medianos — no añadir volumen en la mandíbula", "Stud o pegados al lóbulo", "Evitar aretes muy anchos o voluminosos que refuercen la mandíbula"],
    lentes: ["Que añadan anchura en la parte superior del rostro", "Cat-eye con énfasis en la parte de arriba", "Con detalles decorativos en las sienes", "Evitar lentes muy anchos abajo"],
    collares: ["Collares cortos o choker que lleven la atención al cuello y escote", "Statement necklace que atraiga la mirada hacia arriba", "Evitar collares largos que dirijan la vista hacia la mandíbula"],
    evitar: ["Estilos lisos sin volumen en la parte superior", "Cabello muy aplastado en la coronilla", "Cortes que terminen exactamente en la mandíbula reforzándola"]
  },
  "Oblongo": {
    descripcion: "Tu rostro oblongo es alargado — con frente, pómulos y mandíbula de ancho similar, frente prominente y mentón bastante angular. El largo supera notablemente el ancho estándar. El objetivo es añadir anchura y reducir la sensación de longitud.",
    principio: "Añadir amplitud horizontal · Cortar longitud visual · Evitar líneas que alarguen",
    cortes: [
      { nombre: "Flequillo completo y recto", detalle: "Acorta visualmente el largo del rostro" },
      { nombre: "Ondas y volumen a los lados", detalle: "Añaden anchura donde falta" },
      { nombre: "Bob redondeado con volumen lateral", detalle: "Crea la ilusión de un rostro más ancho y compacto" },
      { nombre: "Corte a los hombros con capas laterales", detalle: "Extiende visualmente el ancho sin añadir largo" }
    ],
    aretes: ["Anchos y horizontales que den sensación de anchura", "Argollas medianas a grandes", "Formas redondeadas que se extiendan hacia los lados", "Evitar aretes muy largos que alarguen más el rostro"],
    lentes: ["Anchos y horizontales que añadan ancho visual", "Rectangulares amplios", "Con detalles laterales", "Evitar lentes muy pequeños o muy verticales"],
    collares: ["Choker o collar corto que corte el largo del cuello visualmente", "Collar ancho o statement corto", "Evitar collares muy largos en Y que alarguen más"],
    evitar: ["Cortes muy lisos hacia abajo sin volumen lateral", "Raya al centro que acentúe el largo", "Aretes y accesorios muy verticales"]
  },
  "Rectangulo": {
    descripcion: "Tu rostro rectángulo combina las características del oblongo y el cuadrado: es alargado y delgado, con mandíbula angular, frente prominente y casi el mismo ancho en frente y mandíbula. El mentón es bastante angular. El objetivo es suavizar ángulos y añadir anchura.",
    principio: "Suavizar mandíbula angular · Añadir amplitud · Romper la verticalidad",
    cortes: [
      { nombre: "Flequillo lateral con movimiento", detalle: "Rompe la línea recta de la frente sin añadir largo" },
      { nombre: "Ondas suaves y voluminosas a los lados", detalle: "Suavizan los ángulos y añaden anchura" },
      { nombre: "Capas que comiencen en los pómulos", detalle: "Crean movimiento y contrastan la rigidez" },
      { nombre: "Largo a los hombros con ondas", detalle: "Equilibra sin alargar más el rostro" }
    ],
    aretes: ["Colgantes con formas redondeadas u ovaladas", "Que no sean demasiado largos", "Con curvas que contrasten la angularidad", "Evitar formas muy cuadradas o rectangulares"],
    lentes: ["Ovalados o redondeados que suavicen", "Con puntas caídas", "Lentes con detalles laterales que añadan anchura", "Evitar cuadrados o rectangulares muy marcados"],
    collares: ["Collares con piedras o colgantes que añadan anchura en el pecho", "Collar corto con volumen", "Evitar largos delgados que alarguen más"],
    evitar: ["Cortes muy lisos y rectos sin textura", "Flequillo demasiado recto y cuadrado", "Accesorios que refuercen la verticalidad"]
  }
};


// ════════════════════════════════════════════════════════════════
//  IMÁGENES DE CORTES POR TIPO DE ROSTRO
//  Añade la imagen base64 de cada tipo de rostro aquí
// ════════════════════════════════════════════════════════════════
const IMAGENES_ROSTRO = {
  "Ovalado": null,
  "Redondo": "images/cabello/cortes_redondo.png",
  "Cuadrado": "images/cabello/cortes_cuadrado.jpg",
  "Corazón": null,
  "Diamante": null,
  "Triangulo": null,
  "Oblongo": null,
  "Rectangulo": null
};

const CORTES_QUERIES = {
  "Ovalado": [
    {nombre: "Pixie con volumen", query: "pixie con volumen corte cabello mujer elegante"},
    {nombre: "Bob asimétrico", query: "bob asimetrico corte cabello mujer moderno"},
    {nombre: "Capas largas", query: "capas largas cabello mujer movimiento verticalidad"},
  ],
  "Redondo": [
    {nombre: "Pixie con volumen", query: "pixie con volumen corte cabello mujer elegante"},
    {nombre: "Bob asimétrico", query: "bob asimetrico corte cabello mujer moderno"},
    {nombre: "Capas largas con verticalidad", query: "capas largas verticalidad cabello mujer movimiento"},
  ],
  "Cuadrado": [
    {nombre: "Bob corto con flequillo lateral", query: "bob corto flequillo lateral rostro cuadrado mujer"},
    {nombre: "Bob medio con flequillo lateral", query: "bob medio flequillo lateral suaviza mandibula mujer"},
    {nombre: "Ondas largas con capas", query: "ondas largas capas suaviza rostro cuadrado mujer"},
  ],
  "Corazón": [
    {nombre: "Bob a la mandíbula o al mentón", query: "bob mandibula menton rostro corazon mujer"},
    {nombre: "Ondas o rizos desde la mandíbula hacia abajo", query: "ondas rizos mandibula hacia abajo volumen mujer"},
    {nombre: "Flequillo lateral", query: "flequillo lateral reduce frente ancha mujer"},
    {nombre: "Largo a la clavícula con capas bajas", query: "largo clavicula capas bajas volumen inferior"},
  ],
  "Diamante": [
    {nombre: "Flequillo lateral o completo", query: "flequillo lateral completo rostro diamante mujer"},
    {nombre: "Capas en la coronilla con volumen", query: "capas coronilla volumen equilibra pomulos"},
    {nombre: "Bob corto con textura", query: "bob corto textura volumen mandibula mujer"},
    {nombre: "Largo a la clavícula con ondas suaves", query: "largo clavicula ondas suaves rostro diamante"},
  ],
  "Triangulo": [
    {nombre: "Volumen en coronilla y sienes", query: "volumen coronilla sienes equilibra mandibula"},
    {nombre: "Flequillo voluminoso o con textura", query: "flequillo voluminoso textura frente mujer"},
    {nombre: "Corte layered con volumen arriba", query: "corte layered volumen arriba triangulo rostro"},
    {nombre: "Pixie con volumen en la coronilla", query: "pixie volumen coronilla mujer elegante"},
  ],
  "Oblongo": [
    {nombre: "Flequillo completo y recto", query: "flequillo completo recto acorta rostro largo"},
    {nombre: "Ondas y volumen a los lados", query: "ondas volumen lados añade anchura mujer"},
    {nombre: "Bob redondeado con volumen lateral", query: "bob redondeado volumen lateral rostro oblongo"},
    {nombre: "Corte a los hombros con capas laterales", query: "corte hombros capas laterales mujer"},
  ],
  "Rectangulo": [
    {nombre: "Flequillo lateral con movimiento", query: "flequillo lateral movimiento suaviza rectangulo"},
    {nombre: "Ondas suaves y voluminosas a los lados", query: "ondas suaves voluminosas lados mujer"},
    {nombre: "Capas que comiencen en los pómulos", query: "capas pomulos suaviza angulos rectangulo"},
    {nombre: "Largo a los hombros con ondas", query: "largo hombros ondas suaves mujer"},
  ],
};

function renderCabello() {
  var tipo = CONFIG.ROSTRO;
  var tipoNorm = tipo;
  if (!DATOS_ROSTRO[tipoNorm]) {
    var keys = Object.keys(DATOS_ROSTRO);
    for (var k of keys) {
      if (tipo.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(tipo.toLowerCase())) {
        tipoNorm = k; break;
      }
    }
  }
  var data = DATOS_ROSTRO[tipoNorm] || DATOS_ROSTRO["Ovalado"];
  var queries = CORTES_QUERIES[tipoNorm] || CORTES_QUERIES["Ovalado"];

  var areteHTML  = data.aretes.map(function(i){ return '<div class="list-item">• ' + i + '</div>'; }).join('');
  var lentesHTML = data.lentes.map(function(i){ return '<div class="list-item">• ' + i + '</div>'; }).join('');
  var collaresHTML = data.collares.map(function(i){ return '<div class="list-item">• ' + i + '</div>'; }).join('');
  var evitarHTML = data.evitar.length > 0
    ? data.evitar.map(function(i){ return '<div class="list-item" style="color:#C2714F">✗ ' + i + '</div>'; }).join('')
    : '<div class="list-item" style="color:#5B7B6F">✦ Tu rostro es muy versátil — casi todo te favorece</div>';

  // Build corte cards with image slots
  // Skip generic recommendations (e.g. "Todo tipo de cortes") for images
  var imgCounter = 0;
  var cortesHTML = data.cortes.map(function(c, idx){
    var isGeneric = c.nombre.toLowerCase().includes('todo tipo') || c.nombre.toLowerCase().includes('cualquier');
    var hasImg = !isGeneric && imgCounter < 3;
    var slotId = hasImg ? 'corte-img-' + imgCounter : null;
    if (hasImg) imgCounter++;
    var faceHasImg = !!(IMAGENES_ROSTRO[tipoNorm]);
    var imgSlot = (hasImg && !faceHasImg)
      ? '<div id="' + slotId + '" class="corte-img-container"><div class="corte-img-loader"><div class="img-spinner"></div>Buscando imagen...</div></div>'
      : '';
    return '<div class="corte-card-img' + (isGeneric ? ' corte-card-general' : '') + '">' +
      imgSlot +
      '<div class="corte-card-text">' +
      '<div class="corte-nombre">' + c.nombre + '</div>' +
      '<div class="corte-detalle">' + c.detalle + '</div>' +
      '</div></div>';
  }).join('');

  var out = '';
  out += '<h2 class="sec-title">✦ Cortes & Estilo para Rostro ' + tipo + '</h2>';
  out += '<p class="sec-intro">' + data.descripcion + '</p>';

  // Show uploaded infographic if available for this face type
  var imgSrc = IMAGENES_ROSTRO[tipoNorm] || null;
  if (imgSrc) {
    out += '<div class="cortes-infographic-wrap">';
    out += '<img src="' + imgSrc + '" alt="Cortes recomendados para rostro ' + tipo + '" class="cortes-infographic" />';
    out += '</div>';
  }

  out += '<h3 class="card-h3 teal" style="margin-bottom:14px">✦ Cortes Recomendados</h3>';
  out += '<div class="cortes-img-grid">' + cortesHTML + '</div>';
  out += '<div class="two-cols" style="margin-top:18px">';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 teal">Aretes Ideales</h3>' + areteHTML + '</div>';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 teal">Lentes que te Favorecen</h3>' + lentesHTML + '</div>';
  out += '</div>';
  out += '<div class="two-cols" style="margin-top:18px">';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 brown">Collares Perfectos</h3>' + collaresHTML + '</div>';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 terra">Mejor evitar</h3>' + evitarHTML + '</div>';
  out += '</div>';
  out += '<div class="dark-box" style="text-align:center;margin-top:18px">';
  out += '<h3 style="color:#7A9080;margin-bottom:12px;font-size:18px">✦ El principio que lo cambia todo</h3>';
  out += '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.9"><strong style="color:#C2714F">' + data.principio + '</strong></p>';
  out += '</div>';

  document.getElementById('cabello-content').innerHTML = out;

  // Only fetch individual corte images if no infographic is available
  var hasFaceImg = !!(IMAGENES_ROSTRO[tipoNorm]);
  if (!hasFaceImg && queries && queries.length > 0) {
    var imgIdx = 0;
    for (var idx = 0; idx < data.cortes.length && imgIdx < 3; idx++) {
      var c = data.cortes[idx];
      var isGeneric = c.nombre.toLowerCase().includes('todo tipo') || c.nombre.toLowerCase().includes('cualquier');
      if (!isGeneric) {
        // Find matching query — try by name first, else use position
        var q = null;
        for (var qi = 0; qi < queries.length; qi++) {
          if (queries[qi].nombre === c.nombre) { q = queries[qi].query; break; }
        }
        if (!q && queries[imgIdx]) q = queries[imgIdx].query;
        if (!q) q = c.nombre + ' corte cabello mujer';
        fetchCorteImage(imgIdx, q, c.nombre);
        imgIdx++;
      }
    }
  }
}

async function fetchCorteImage(idx, searchQuery, corteName) {
  var container = document.getElementById('corte-img-' + idx);
  if (!container) return;

  try {
    // Step 1: Ask Claude to search and return an image URL
    // We do a two-turn conversation: first turn triggers the search, second turn gives us the URL
    var messages = [
      {
        role: "user",
        content: "Search for a photo of a woman with this hairstyle: " + searchQuery + 
                 ". Find ONE real image URL (jpg/jpeg/png/webp). Reply ONLY with a JSON object: {\"url\":\"IMAGE_URL_HERE\",\"alt\":\"description\"}"
      }
    ];

    var resp1 = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: messages
      })
    });

    var data1 = await resp1.json();
    if (!data1.content) throw new Error('No content');

    // Build full conversation for second turn
    var assistantMsg = { role: "assistant", content: data1.content };
    messages.push(assistantMsg);

    // If stop_reason is tool_use, we need to send tool results back
    if (data1.stop_reason === 'tool_use') {
      var toolResults = [];
      for (var i = 0; i < data1.content.length; i++) {
        var block = data1.content[i];
        if (block.type === 'tool_use') {
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: "Search completed. Please provide the image URL you found."
          });
        }
      }
      if (toolResults.length > 0) {
        messages.push({ role: "user", content: toolResults });

        var resp2 = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 512,
            tools: [{ type: "web_search_20250305", name: "web_search" }],
            messages: messages
          })
        });
        var data2 = await resp2.json();
        data1 = data2; // use second response for text extraction
      }
    }

    // Extract text from response
    var text = (data1.content || [])
      .filter(function(b){ return b.type === 'text'; })
      .map(function(b){ return b.text; })
      .join(' ');

    // Try to extract JSON with URL
    var jsonMatch = text.match(/\{[^{}]*"url"\s*:\s*"(https?:[^"]+)"[^{}]*\}/);
    if (jsonMatch) {
      var parsed = JSON.parse(jsonMatch[0]);
      if (parsed.url) {
        setCorteImage(container, parsed.url, parsed.alt || corteName);
        return;
      }
    }

    // Fallback: try to extract any https image URL from text
    var urlMatch = text.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)(?:\?[^\s"'<>]*)?/i);
    if (urlMatch) {
      setCorteImage(container, urlMatch[0], corteName);
      return;
    }

    // Show placeholder if nothing found
    showPlaceholder(container, corteName);

  } catch(e) {
    showPlaceholder(container, corteName);
  }
}

function setCorteImage(container, url, alt) {
  container.innerHTML =
    '<img src="' + url + '" alt="' + alt + '" class="corte-img" ' +
    'onload="this.style.opacity=1" ' +
    'style="opacity:0;transition:opacity 0.4s" ' +
    'onerror="showPlaceholder(this.parentElement, \'' + alt.replace(/'/g, '') + '\')" />';
}

function showPlaceholder(container, name) {
  container.innerHTML =
    '<div class="corte-img-placeholder">✂️<br><span>' + name + '</span></div>';
}




// ════════════════════════════════════════════════════════════════
//  SECCIÓN NOVIA — Vestidos, colores y accesorios por silueta,
//  rostro y estación. Metodología: colorimetría + visagismo.
// ════════════════════════════════════════════════════════════════

// ── VESTIDOS POR SILUETA ─────────────────────────────────────────
const VESTIDOS_SILUETA = {
  "Triángulo Invertido": {
    titulo: "Para tu silueta Triángulo Invertido",
    descripcion: "Tu cuerpo es más ancho en hombros y busto que en caderas. El objetivo es equilibrar añadiendo volumen abajo y suavizando la parte superior.",
    vestidos: [
      {
        nombre: "Corte A o princesa",
        emoji: "👗",
        descripcion: "La silueta en A se abre desde la cintura hacia abajo, añadiendo volumen en caderas y equilibrando los hombros más anchos. Es la forma más favorecedora para tu silueta.",
        detalles: ["Falda amplia desde la cintura", "Escote en V o corazón para suavizar hombros", "Sin mangas con hombros estructurados — evitar"]
      },
      {
        nombre: "Empire o imperio",
        emoji: "✨",
        descripcion: "La cintura alta debajo del busto crea una línea elegante que añade longitud a las piernas y suaviza la diferencia entre busto y caderas.",
        detalles: ["Cinturilla justo debajo del busto", "Escote suave en corazón o drapeado", "Falda fluida que cae naturalmente"]
      },
      {
        nombre: "Sirena con volumen desde la rodilla",
        emoji: "🌊",
        descripcion: "Una sirena que se abre ampliamente desde la rodilla añade el volumen que la silueta triangular invertida necesita en la parte baja, creando un balance dramático y elegante.",
        detalles: ["Ajustada en torso y cadera hasta la rodilla", "Volumen pronunciado desde la rodilla", "Escote drapeado o en V para equilibrar hombros"]
      }
    ],
    evitar: ["Hombros estructurados o con adornos", "Escotes muy horizontales (boat neck)", "Volumen excesivo en la parte superior", "Cinturones muy anchos a la cintura si el busto es grande"]
  },
  "Reloj de Arena": {
    titulo: "Para tu silueta Reloj de Arena",
    descripcion: "Tienes hombros y caderas equilibrados con una cintura marcada. Casi cualquier silueta de novia te favorece — el objetivo es resaltar tu cintura.",
    vestidos: [
      { nombre: "Sirena clásica", emoji: "🌊", descripcion: "Abraza cada curva desde el busto hasta los pies. Tu silueta natural hace todo el trabajo — el vestido solo la enmarca.", detalles: ["Ajustada desde el busto", "Máximo énfasis en la cintura", "Tela con estructura o crepe"] },
      { nombre: "Corte A con cintura marcada", emoji: "👗", descripcion: "La cintura ceñida y la falda amplia crean el clásico look de novia romántico. Equilibra elegancia y comodidad.", detalles: ["Cinturilla bien marcada", "Falda amplia o con capas", "Corsé o cuerpo ajustado"] },
      { nombre: "Ball gown / princesa", emoji: "✨", descripcion: "La falda voluminosa sobre tu cintura natural crea el look más dramático y romántico. Ideal para bodas de etiqueta.", detalles: ["Falda muy amplia con aro o tul", "Cuerpo ajustado tipo corsé", "Escote corazón o cuadrado"] }
    ],
    evitar: ["Vestidos sin forma que oculten la cintura", "Cortes recto tipo columna que anulen tus curvas"]
  },
  "Rectangular": {
    titulo: "Para tu silueta Rectangular",
    descripcion: "Tienes hombros, cintura y caderas de medidas similares. El objetivo es crear la ilusión de cintura y añadir curvas.",
    vestidos: [
      { nombre: "Corte A con cinturón o faja", emoji: "👗", descripcion: "Añade cintura donde naturalmente hay poca. La faja o cinturón en contraste crea la ilusión de una cintura marcada muy favorecida.", detalles: ["Cinturón, faja o lazada en la cintura", "Falda amplia que añada curva", "Detalle en el escote para dar dimensión"] },
      { nombre: "Ball gown con corsé", emoji: "✨", descripcion: "El corsé estructura y define la cintura. La falda amplia añade la curva de cadera que equilibra el conjunto.", detalles: ["Corsé con ballenas para definir cintura", "Falda con volumen", "Escote corazón muy favorecedor"] },
      { nombre: "Drapeado asimétrico", emoji: "🌿", descripcion: "Los drapeados crean líneas diagonales que añaden movimiento y dimensión, rompiendo la verticalidad recta del cuerpo rectangular.", detalles: ["Drapeados en diagonal", "Ruching en la zona de la cintura", "Asimetría que añade interés visual"] }
    ],
    evitar: ["Cortes columna sin detalle en cintura", "Telas completamente lisas sin textura", "Vestidos sin ningún punto de énfasis"]
  },
  "Triángulo": {
    titulo: "Para tu silueta Triángulo",
    descripcion: "Tus caderas son más anchas que tus hombros. El objetivo es equilibrar añadiendo atención a la parte superior y suavizando las caderas.",
    vestidos: [
      { nombre: "Corte A suave", emoji: "👗", descripcion: "Una A muy suave o casi recta cae por las caderas sin añadir volumen. Fluye elegantemente sin remarcar la diferencia.", detalles: ["Caída suave sin demasiado vuelo", "Sin estructura en la falda", "Telas fluidas como chiffon o seda"] },
      { nombre: "Escote embellecido con detalles arriba", emoji: "✨", descripcion: "Cualquier silueta con detalles — encaje, bordados, pedrería — en el cuerpo superior atrae la mirada hacia arriba y equilibra las caderas.", detalles: ["Detalle en escote, hombros o busto", "Encaje o bordado en la parte alta", "Falda más simple abajo"] },
      { nombre: "Empire con caída fluida", emoji: "🌿", descripcion: "La cintura alta y la tela fluida caen sobre las caderas sin marcarlas, creando una silueta elegante y equilibrada.", detalles: ["Cintura alta que disimula caderas", "Tela fluida sin estructura", "Escote con detalle o drapeado"] }
    ],
    evitar: ["Faldas muy amplias con crinolina", "Lazadas o lazos en la cadera", "Bolsillos o adornos a la altura de caderas"]
  },
  "Circular": {
    titulo: "Para tu silueta Circular",
    descripcion: "Tu cuerpo tiene más volumen en el centro. El objetivo es crear verticalidad, definir la cintura y elongar la silueta.",
    vestidos: [
      { nombre: "Corte A con caída vertical", emoji: "👗", descripcion: "Una A suave que fluye desde el busto crea verticalidad y no añade volumen en la zona media. La caída natural es muy elegante.", detalles: ["Caída desde el busto o justo debajo", "Sin estructura que añada volumen al centro", "Escote en V para elongar"] },
      { nombre: "Empire con escote en V", emoji: "✨", descripcion: "La cintura alta minimiza la zona abdominal. El escote en V crea una línea larga y estilizadora muy efectiva.", detalles: ["Cintura alta bien marcada", "Escote en V pronunciado", "Tela fluida en la falda"] },
      { nombre: "Sirena con inicio en la cadera baja", emoji: "🌊", descripcion: "Si la sirena empieza en la cadera baja, pasa por encima de la zona más ancha y crea una silueta escultural muy favorecida.", detalles: ["Ajuste desde la cadera baja", "Escote en V o drapeado", "Apertura o volumen desde la rodilla"] }
    ],
    evitar: ["Lazadas o nudos en la cintura o el abdomen", "Telas muy rígidas que añadan volumen", "Cuerpos sin estructura que no den soporte", "Escotes horizontales que ensanchen"]
  },
  "Regla": {
    titulo: "Para tu silueta Regla / Tubular",
    descripcion: "Tu cuerpo tiene muy pocas curvas con hombros, cintura y caderas similares. El objetivo es añadir dimensión, curvas y movimiento.",
    vestidos: [
      { nombre: "Ball gown con corset", emoji: "✨", descripcion: "El contraste máximo entre cuerpo ajustado y falda amplísima crea la ilusión dramática de curvas. El corsé define una cintura que de otra forma no existe.", detalles: ["Corsé estructurado", "Falda máximo volumen", "Escote corazón muy favorecedor"] },
      { nombre: "Corte A con detalles texturizados", emoji: "👗", descripcion: "La textura y el volumen de la tela añaden dimensión a una silueta muy recta. El encaje volumétrico o el tul texturizado son perfectos.", detalles: ["Telas con textura o volumen propio", "Detalles en 3D: flores, bordados", "Cinturilla o lazada marcando la cintura"] },
      { nombre: "Drapeado con ruching lateral", emoji: "🌿", descripcion: "El fruncido lateral crea curvas donde no las hay naturalmente. Es una técnica ilusionista muy efectiva en vestidos de novia.", detalles: ["Ruching en costados", "Tela que crea pliegues favorables", "Asimetría que añade movimiento"] }
    ],
    evitar: ["Cortes columna completamente lisos", "Telas muy finas sin estructura", "Siluetas que acentúen la falta de curvas"]
  },
  "Tipo 8": {
    titulo: "Para tu silueta Tipo 8",
    descripcion: "Similar al reloj de arena pero con más volumen general. Tienes curvas pronunciadas y generosas. El objetivo es celebrarlas con elegancia y estructura.",
    vestidos: [
      { nombre: "Sirena con tela estructurada", emoji: "🌊", descripcion: "La sirena en crepe o mikado abraza tus curvas con estructura y elegancia. La tela firme te da soporte y crea una silueta impecable.", detalles: ["Tela estructurada: crepe, mikado o duchess satin", "Ajustada desde el busto hasta la rodilla", "Apertura elegante en la parte trasera"] },
      { nombre: "Corte A con corsé", emoji: "👗", descripcion: "El corsé da el soporte que las curvas generosas necesitan. La falda amplia equilibra y crea el look clásico y romántico.", detalles: ["Corsé con ballenas y boning", "Falda con estructura propia", "Escote corazón clásico"] },
      { nombre: "Empire con caída fluida", emoji: "✨", descripcion: "La cintura alta fluye elegantemente sobre las curvas sin marcarlas, creando una silueta romántica y cómoda para un día largo.", detalles: ["Cintura alta con cuerpo con soporte", "Falda con caída fluida", "Escote con detalle o drapeado suave"] }
    ],
    evitar: ["Telas muy finas sin estructura que no den soporte", "Ruching excesivo en la zona del abdomen", "Siluetas muy ajustadas en telas elásticas"]
  }
};

// ── VESTIDOS POR ROSTRO ──────────────────────────────────────────
const ESCOTES_ROSTRO = {
  "Ovalado":    { escote: "Corazón, cuadrado o en V suave", razon: "Tu rostro equilibrado admite casi cualquier escote. El corazón es el más clásico y el en V añade elegancia." },
  "Redondo":    { escote: "En V pronunciado o escote corazón con pico", razon: "El escote en V crea verticalidad que alarga visualmente el rostro redondo y el cuello." },
  "Cuadrado":   { escote: "Corazón, redondo suave o drapeado", razon: "Las líneas curvas del escote corazón contrastan con la angularidad de la mandíbula cuadrada, suavizando el conjunto." },
  "Corazón":    { escote: "Escote en V suave o drapeado bajo", razon: "El en V dirige la mirada hacia abajo, equilibrando la frente más ancha. Se evita el escote muy horizontal." },
  "Diamante":   { escote: "Escote barco suave o cuadrado", razon: "Estos escotes añaden anchura en la parte superior compensando los pómulos prominentes y la frente estrecha." },
  "Triangulo":  { escote: "Escote barco, cuadrado o palabra de honor", razon: "Escotes amplios y horizontales añaden anchura en la parte superior para equilibrar la mandíbula más ancha." },
  "Oblongo":    { escote: "Escote cuadrado o barco, con detalle horizontal", razon: "Las líneas horizontales del escote cortan visualmente el largo del rostro, añadiendo anchura." },
  "Rectangulo": { escote: "Escote corazón o drapeado", razon: "Las curvas del corazón suavizan los ángulos del rostro rectangular tanto en mandíbula como en frente." },
  "Redondo":    { escote: "En V o corazón con pico central", razon: "El vértice central crea verticalidad que estiliza el rostro y alarga el cuello visualmente." }
};

// ── COLORES Y TELAS NOVIA POR ESTACIÓN ──────────────────────────
const NOVIA_ESTACION = {
  "Otoño Verdadero": {
    paleta: [
      { hex: "#FEFEF8", nombre: "Marfil cálido", descripcion: "Tu blanco nupcial perfecto — una sombra de calidez, luminoso y sofisticado." },
      { hex: "#F5EDD8", nombre: "Champagne dorado", descripcion: "Un tono champán con base dorada — elegante y muy favorecedor para Otoño Verdadero." },
      { hex: "#EDE0C0", nombre: "Marfil dorado crema", descripcion: "El más cálido de los tres — ideal para vestidos con encaje o bordados dorados." },
      { hex: "#F5F0E6", nombre: "Lino cálido", descripcion: "Para looks bohemios o rústicos — muy auténtico en ti." },
      { hex: "#EDE4D0", nombre: "Dorado arena", descripcion: "Perfecto para damas de honor o detalles en tu vestido." },
      { hex: "#E0D0B8", nombre: "Camel claro", descripcion: "Para segundo vestido de recepción o after-party bohemio." }
    ],
    blancoIdeal: "Marfil cálido, Champagne dorado o Marfil dorado crema — nunca blanco óptico frío",
    blancoEvitar: "Blanco puro brillante o blanco con base azulada — apagan tu piel cálida",
    telas: ["Seda duchesse con brillo cálido", "Mikado en marfil cálido", "Encaje con hilo dorado o crema", "Crepe en tono champán", "Tul con destellos dorados"],
    accesorios: {
      metales: "Oro amarillo, oro rosado o cobre — nunca plata fría",
      flores: "Rosas en tonos melocotón, terracota y crema — peonías, dalias o girasoles pequeños",
      velo: "En tono crema o champán — nunca blanco frío",
      joyas: "Oro con piedras cálidas: topaz, ámbar, perlas de color crema o champán",
      zapatos: "Nude cálido, champán dorado o marfil — evitar blanco frío o plateado"
    },
    notaEspecial: "Otoño Verdadero brilla con calor. El contraste entre tu piel cálida y el marfil dorado de tu vestido será impresionante. Los detalles en dorado y encaje cálido son tu sello."
  },
  "Otoño Cálido": {
    paleta: [
      { hex: "#FEFEF9", nombre: "Blanco marfil", descripcion: "Tu blanco ideal — apenas un susurro de calidez." },
      { hex: "#FDFBF5", nombre: "Crema dorada", descripcion: "El más favorecedor para tu piel muy cálida." },
      { hex: "#FBFAF6", nombre: "Champán", descripcion: "Elegante y completamente en tu paleta." },
      { hex: "#F5EED8", nombre: "Arena dorada", descripcion: "Para looks bohemios o al aire libre." },
      { hex: "#EAD9BC", nombre: "Trigo", descripcion: "Segundo vestido o detalles especiales." },
      { hex: "#E0CCA8", nombre: "Caramelo suave", descripcion: "Accesorios y cinturones." }
    ],
    blancoIdeal: "Marfil cálido o crema con tono dorado",
    blancoEvitar: "Blanco puro o blanco frío con base azulada",
    telas: ["Seda natural con brillo cálido", "Encaje con hilo dorado", "Mikado en crema cálida", "Organza con tono champán"],
    accesorios: { metales: "Oro amarillo o cobre", flores: "Peonías en crema y melocotón, dalias en tonos tierra", velo: "Crema o champán dorado", joyas: "Oro con perlas crema o piedras ámbar", zapatos: "Nude cálido o champán dorado" },
    notaEspecial: "Eres la novia más cálida — el marfil dorado hace que tu piel brille de una manera que el blanco frío nunca logrará."
  },
  "Primavera Cálida": {
    paleta: [
      { hex: "#FEFEFC", nombre: "Blanco floral", descripcion: "Cálido y luminoso — perfecto para ti." },
      { hex: "#FEFCF8", nombre: "Melocotón muy suave", descripcion: "El más iluminador cerca de tu rostro." },
      { hex: "#FDF8F2", nombre: "Durazno claro", descripcion: "Para looks románticos y florales." },
      { hex: "#FAF4EC", nombre: "Champán rosado", descripcion: "Muy elegante y en paleta." },
      { hex: "#F5EBE0", nombre: "Crema melocotón", descripcion: "Para el segundo vestido." },
      { hex: "#EDE0D0", nombre: "Arena cálida", descripcion: "Para detalles o accesorios." }
    ],
    blancoIdeal: "Blanco marfil cálido o blanco con tono melocotón muy suave",
    blancoEvitar: "Blanco frío, blanco azulado o blanco con base grisácea",
    telas: ["Chiffon en tono crema cálido", "Encaje con hilo marfil", "Organza con destellos dorados", "Seda suave"],
    accesorios: { metales: "Oro amarillo o dorado", flores: "Rosas en melocotón, peonías en crema y rosa suave, flores silvestres", velo: "En crema suave o con bordado dorado", joyas: "Oro con perlas o piedras pastel cálidas", zapatos: "Nude cálido o champán" },
    notaEspecial: "La Primavera Cálida es la novia más romántica y floral. Los detalles en encaje cálido con flores en melocotón son tu combinación perfecta."
  },
  "Primavera Brillante": {
    paleta: [
      { hex: "#FFFFFF", nombre: "Blanco puro brillante", descripcion: "Te funciona — tienes la luminosidad para llevarlo." },
      { hex: "#FEFEFC", nombre: "Blanco marfil", descripcion: "Más suave y elegante que el puro." },
      { hex: "#FEFCFB", nombre: "Blanco con toque melocotón", descripcion: "Un susurro de color que te ilumina." },
      { hex: "#F8FCFF", nombre: "Blanco azulado muy suave", descripcion: "Fresco y luminoso." },
      { hex: "#F5FBF8", nombre: "Blanco con toque menta", descripcion: "Para looks modernos y frescos." },
      { hex: "#FAF0E8", nombre: "Champán coral muy suave", descripcion: "Para segundo vestido o fiesta." }
    ],
    blancoIdeal: "Blanco puro o blanco marfil — tu luminosidad natural lo sostiene perfectamente",
    blancoEvitar: "Cremas muy apagadas o marfiles sin brillo que te quiten luminosidad",
    telas: ["Organza con brillo vivo", "Mikado blanco brillante", "Encaje con hilo blanco o plata", "Chiffon con destellos"],
    accesorios: { metales: "Oro o plata — ambos te funcionan", flores: "Rosas en coral, naranja y crema, flores silvestres coloridas", velo: "Blanco puro o con bordado en colores", joyas: "Oro o plata con piedras de color vivo", zapatos: "Blanco puro, nude o coral" },
    notaEspecial: "Eres la novia más vívida y luminosa. El blanco puro en ti es impactante — no lo evites como hacen otras estaciones."
  },
  "Verano Frío": {
    paleta: [
      { hex: "#FDFEFF", nombre: "Blanco hielo", descripcion: "Tu blanco ideal — un susurro de frío, elegante." },
      { hex: "#FCFCFF", nombre: "Blanco lavanda", descripcion: "Apenas perceptible, muy sofisticado." },
      { hex: "#FAFAFF", nombre: "Blanco azulado puro", descripcion: "Moderno y refinado en tu paleta." },
      { hex: "#FEF8FC", nombre: "Blanco rosado frío", descripcion: "Romántico y en subtono frío." },
      { hex: "#F5F8FE", nombre: "Blanco perla", descripcion: "Muy favorecedor en telas con brillo." },
      { hex: "#EEF4FB", nombre: "Azul muy pálido", descripcion: "Para looks únicos e inesperados." }
    ],
    blancoIdeal: "Blanco con base fría — ligeramente azulado, lavanda o hielo",
    blancoEvitar: "Marfil cálido, crema dorada o champán — apagan tu piel fría",
    telas: ["Mikado blanco frío", "Encaje con hilo plateado o blanco puro", "Seda con acabado nacarado", "Crepe frío y estructurado"],
    accesorios: { metales: "Plata, platino o blanco oro", flores: "Rosas blancas, lavanda, peonías en blanco o lila suave", velo: "Blanco puro o con bordado en plata", joyas: "Plata con diamantes, zafiros o aguamarinas", zapatos: "Blanco frío, plateado o nude frío" },
    notaEspecial: "El blanco frío en una Verano Frío es pura sofisticación. Evita a toda costa el marfil dorado — el blanco puro o con base fría es tu máxima expresión."
  },
  "Invierno Frío": {
    paleta: [
      { hex: "#FFFFFF", nombre: "Blanco puro óptico", descripcion: "Tu blanco perfecto — el más puro y contrastado." },
      { hex: "#FDFEFF", nombre: "Blanco hielo", descripcion: "Con base azulada muy elegante." },
      { hex: "#FBFBFF", nombre: "Blanco grisáceo", descripcion: "Sofisticado y moderno." },
      { hex: "#F8F8FD", nombre: "Blanco plateado", descripcion: "Para looks de máximo impacto." },
      { hex: "#FEF8FE", nombre: "Blanco con toque lila", descripcion: "Inesperado y muy elegante." },
      { hex: "#F5F8FE", nombre: "Blanco con toque azul", descripcion: "Dramático y muy favorecedor." }
    ],
    blancoIdeal: "Blanco puro óptico o blanco con base azulada o plateada",
    blancoEvitar: "Cualquier tono cálido — marfil, crema, champán o dorado",
    telas: ["Mikado blanco brillante", "Seda con acabado espejo", "Encaje con hilo plateado", "Crepe estructurado blanco puro"],
    accesorios: { metales: "Plata brillante o platino — siempre frío", flores: "Rosas blancas, callas, orquídeas blancas", velo: "Blanco puro con bordado en plata o sin adorno", joyas: "Diamantes en plata o platino", zapatos: "Blanco puro o plateado" },
    notaEspecial: "El Invierno Frío es la novia más dramática y elegante. El blanco puro en ti es como la nieve — impactante, limpio, absoluto. Ningún detalle cálido."
  },
  "Invierno Brillante": {
    paleta: [
      { hex: "#FFFFFF", nombre: "Blanco puro", descripcion: "Tu blanco más poderoso." },
      { hex: "#FDFEFF", nombre: "Blanco óptico", descripcion: "Con máximo brillo y contraste." },
      { hex: "#FBFBFF", nombre: "Blanco platino", descripcion: "Muy sofisticado." },
      { hex: "#FFF8FB", nombre: "Blanco con rubor", descripcion: "Para looks más románticos." },
      { hex: "#FAF8FF", nombre: "Blanco con toque violeta", descripcion: "Dramático y único." },
      { hex: "#F5F8FF", nombre: "Blanco con toque azul", descripcion: "Fresco y de alto impacto." }
    ],
    blancoIdeal: "Blanco puro de máximo contraste — tu coloración dramática lo sostiene",
    blancoEvitar: "Cremas apagadas o marfiles sin brillo que reduzcan tu impacto natural",
    telas: ["Mikado con máximo brillo", "Seda espejo", "Crepe blanco brillante", "Encaje blanco con plata"],
    accesorios: { metales: "Plata brillante de alto contraste", flores: "Callas blancas, orquídeas, rosas blancas perfectas", velo: "Blanco puro sin adorno o con cristales Swarovski", joyas: "Diamantes en plata — el contraste es tu firma", zapatos: "Blanco puro o plateado brillante" },
    notaEspecial: "El Invierno Brillante es la novia más dramática de todas. El blanco puro en ti es teatro puro — el contraste de tu coloración hace que el vestido más simple parezca el más elegante."
  }
};

// Fallback — cubre estaciones no listadas explícitamente
const NOVIA_ESTACION_FALLBACK = {
  subtono: "cálido",
  blancoIdeal: "Blanco marfil o crema cálida",
  blancoEvitar: "Blanco puro frío o con base azulada",
  paleta: [
    { hex: "#FFFFF0", nombre: "Blanco marfil", descripcion: "Cálido y luminoso." },
    { hex: "#FFF8E7", nombre: "Crema dorada", descripcion: "Muy favorecedor." },
    { hex: "#F5F0E8", nombre: "Champán", descripcion: "Elegante." },
    { hex: "#E8DCC8", nombre: "Lino", descripcion: "Para looks naturales." },
    { hex: "#D4C4A0", nombre: "Dorado arena", descripcion: "Accesorios." },
    { hex: "#C8A87A", nombre: "Camel claro", descripcion: "Segundo vestido." }
  ],
  telas: ["Seda natural", "Encaje clásico", "Mikado", "Crepe"],
  accesorios: { metales: "Oro cálido", flores: "Peonías en crema y rosa suave", velo: "En tono crema", joyas: "Oro con perlas", zapatos: "Nude cálido" },
  notaEspecial: "El secreto está en el tono de blanco — elige siempre el que esté en armonía con tu subtono de piel."
};

function getNoviaEstacion() {
  var e = CONFIG.ESTACION;
  if (NOVIA_ESTACION[e]) return NOVIA_ESTACION[e];
  // fuzzy match
  for (var k of Object.keys(NOVIA_ESTACION)) {
    if (e.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(e.toLowerCase()))
      return NOVIA_ESTACION[k];
  }
  return NOVIA_ESTACION_FALLBACK;
}

function getNoviaVestidos() {
  var c = CONFIG.CUERPO;
  if (VESTIDOS_SILUETA[c]) return VESTIDOS_SILUETA[c];
  for (var k of Object.keys(VESTIDOS_SILUETA)) {
    if (c.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(c.toLowerCase()))
      return VESTIDOS_SILUETA[k];
  }
  return VESTIDOS_SILUETA["Reloj de Arena"];
}

function getNoviaEscote() {
  var r = CONFIG.ROSTRO;
  if (ESCOTES_ROSTRO[r]) return ESCOTES_ROSTRO[r];
  for (var k of Object.keys(ESCOTES_ROSTRO)) {
    if (r.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(r.toLowerCase()))
      return ESCOTES_ROSTRO[k];
  }
  return { escote: "Corazón o en V suave", razon: "Escotes clásicos y favorecedores para cualquier tipo de rostro." };
}


// ════════════════════════════════════════════════
//  IMÁGENES DE NOVIA POR ESTACIÓN + SILUETA
//  Key: "Estacion|Silueta"
// ════════════════════════════════════════════════
const IMAGENES_NOVIA = {
  "Otoño Verdadero|Triángulo Invertido": "images/bridal/novia_otono_verdadero_triangulo.jpg"
};

function getNoviaImage() {
  var key = CONFIG.ESTACION + "|" + CONFIG.CUERPO;
  return IMAGENES_NOVIA[key] || null;
}

function renderNovia() {
  var container = document.getElementById('novia-content');
  if (!container) return;

  var est     = getNoviaEstacion();
  var noviaImg = getNoviaImage();
  var estacion = CONFIG.ESTACION;
  var cuerpo   = CONFIG.CUERPO;

  var out = '';

  // ── HERO ─────────────────────────────────────────────────
  out += '<div class="novia-hero">';
  out += '<div class="novia-hero-tag">✦ ESPECIAL NOVIA</div>';
  out += '<h2 class="novia-hero-title">Tu Guía Nupcial, ' + CONFIG.NOMBRE + '</h2>';
  out += '<p class="novia-hero-sub">Curada para tu estación <strong>' + estacion + '</strong> y tu silueta <strong>' + cuerpo + '</strong></p>';
  out += '</div>';

  // ── IMAGEN + VESTIDOS ─────────────────────────────────────
  if (noviaImg) {
    // Image is the main visual — show it full width
    out += '<div class="novia-infographic-wrap">';
    out += '<img src="' + noviaImg + '" alt="Vestidos de novia para ' + estacion + ' · ' + cuerpo + '" class="novia-infographic" />';
    out += '</div>';

    // Elegant vestido descriptions below image
    out += '<h3 class="novia-vestidos-titulo">3 Estilos de Vestidos que te Favorecen</h3>';
    out += getNoviaVestidosFromImage(estacion, cuerpo);

  } else {
    // No image — show text-based vestido cards
    var vest = getNoviaVestidos();
    out += '<h3 class="card-h3 teal" style="margin-bottom:6px">✦ ' + vest.titulo + '</h3>';
    out += '<p style="font-family:\'Inter\',sans-serif;font-size:13px;color:#5B7B6F;margin-bottom:18px;line-height:1.7">' + vest.descripcion + '</p>';
    out += '<div class="novia-vestidos-grid">';
    vest.vestidos.forEach(function(v, i) {
      var detallesHTML = v.detalles.map(function(d){ return '<div class="list-item">• ' + d + '</div>'; }).join('');
      out += '<div class="novia-vestido-card">';
      out += '<div class="novia-vestido-num">0' + (i+1) + '</div>';
      out += '<div class="novia-vestido-emoji">' + v.emoji + '</div>';
      out += '<div class="novia-vestido-nombre">' + v.nombre + '</div>';
      out += '<div class="novia-vestido-desc">' + v.descripcion + '</div>';
      out += '<div class="novia-vestido-detalles">' + detallesHTML + '</div>';
      out += '</div>';
    });
    out += '</div>';
    if (vest.evitar && vest.evitar.length > 0) {
      var evitarHTML = vest.evitar.map(function(e){ return '<div class="list-item" style="color:#C2714F">✗ ' + e + '</div>'; }).join('');
      out += '<div class="white-card" style="margin:8px 0 20px"><h3 class="card-h3 terra">Mejor evitar</h3>' + evitarHTML + '</div>';
    }
  }

  // ── PALETA NUPCIAL ────────────────────────────────────────
  out += '<div class="white-card" style="margin-bottom:20px">';
  out += '<h3 class="card-h3 brown">✦ Tu paleta nupcial — ' + estacion + '</h3>';
  out += '<p style="font-family:\'Inter\',sans-serif;font-size:12px;color:#7A9080;margin-bottom:14px;line-height:1.6">';
  out += '<strong>' + est.blancoIdeal + '</strong> — ' + est.blancoEvitar + '</p>';
  out += '<div class="novia-palette">';
  est.paleta.forEach(function(c) {
    out += '<div class="novia-swatch">';
    out += '<div class="novia-swatch-color" style="background:' + c.hex + ';border:1px solid rgba(0,0,0,0.1)"></div>';
    out += '<div class="novia-swatch-nombre">' + c.nombre + '</div>';
    out += '<div class="novia-swatch-desc">' + c.descripcion + '</div>';
    out += '</div>';
  });
  out += '</div></div>';

  // ── TIPS DEL GRAN DÍA ─────────────────────────────────────
  out += getNoviaTimeline(est, estacion);

  // ── NOTA FINAL ────────────────────────────────────────────
  out += '<div class="dark-box" style="text-align:center;margin-top:8px">';
  out += '<h3 style="color:#B8C4C0;margin-bottom:10px;font-size:17px">✦ Para tu gran día</h3>';
  out += '<p style="font-family:\'Inter\',sans-serif;font-size:14px;line-height:1.9;color:#E8E0D8">' + est.notaEspecial + '</p>';
  out += '</div>';

  container.innerHTML = out;
}

// ── VESTIDO DESCRIPTIONS FROM IMAGE ──────────────────────────────
const NOVIA_VESTIDOS_IMAGEN = {
  "Otoño Verdadero|Triángulo Invertido": [
    {
      num: "01",
      titulo: "Línea A · Clásico Romántico",
      porQue: [
        "Suaviza visualmente los hombros al abrir la silueta desde la cintura",
        "Define la cintura y se abre en la parte inferior",
        "Aporta equilibrio y feminidad"
      ],
      colorIdeal: "Marfil cálido",
      detalles: [
        "Escote en V suave",
        "Tirantes medianos que equilibran hombros",
        "Falda ligera y con movimiento"
      ]
    },
    {
      num: "02",
      titulo: "Corte Imperio · Etéreo y Delicado",
      porQue: [
        "El corte bajo el busto alarga la figura",
        "La falda fluida aporta volumen a la parte inferior",
        "Disimula la amplitud de los hombros"
      ],
      colorIdeal: "Champagne dorado",
      detalles: [
        "Escote en V profundo",
        "Telas fluidas y ligeras",
        "Caída natural sin marcar"
      ]
    },
    {
      num: "03",
      titulo: "Halter Neck · Escote V Estilizado",
      porQue: [
        "El escote en V alarga el cuello y estiliza",
        "El halter suave centra la atención y suaviza los hombros",
        "La falda con volumen equilibra la figura y aporta armonía"
      ],
      colorIdeal: "Marfil dorado crema",
      detalles: [
        "Halter suave con escote en V profundo",
        "Encaje o bordados en la falda",
        "Falda amplia y fluida para equilibrio visual"
      ]
    }
  ]
};

function getNoviaVestidosFromImage(estacion, cuerpo) {
  var key = estacion + "|" + cuerpo;
  var vestidos = NOVIA_VESTIDOS_IMAGEN[key];
  if (!vestidos) return '';

  var out = '<div class="novia-vestidos-elegantes">';
  vestidos.forEach(function(v, idx) {
    var porQueHTML = v.porQue.map(function(p){
      return '<div class="nvest-bullet">• ' + p + '</div>';
    }).join('');
    var detallesHTML = v.detalles.map(function(d){
      return '<div class="nvest-detalle">• ' + d + '</div>';
    }).join('');

    out += '<div class="nvest-col">';

    // Header num + title
    out += '<div class="nvest-header">';
    out += '<div class="nvest-num">' + v.num + '</div>';
    out += '<div class="nvest-titulo">' + v.titulo + '</div>';
    out += '</div>';

    // Divider
    out += '<div class="nvest-divider"></div>';

    // Por qué te favorece
    out += '<div class="nvest-section-label">POR QUÉ TE FAVORECE</div>';
    out += '<div class="nvest-bullets">' + porQueHTML + '</div>';

    // Color ideal
    out += '<div class="nvest-section-label" style="margin-top:14px">COLOR IDEAL</div>';
    out += '<div class="nvest-color-ideal">';
    // Small swatch
    // Each swatch is visually distinct: ivory → champagne → golden ivory
    var swatchHex = idx === 0 ? '#FDFBF0'   // Marfil cálido — marfil con sombra dorada visible
                  : idx === 1 ? '#F5EDD8'   // Champagne dorado — dorado muy suave visible
                  : '#EDE0C0';              // Marfil dorado crema — tono arena cálido
    out += '<div class="nvest-color-swatch" style="background:' + swatchHex + '"></div>';
    out += '<div class="nvest-color-name">' + v.colorIdeal + '</div>';
    out += '</div>';

    // Detalles favorables
    out += '<div class="nvest-section-label" style="margin-top:14px">DETALLES FAVORABLES</div>';
    out += '<div class="nvest-bullets">' + detallesHTML + '</div>';

    out += '</div>'; // nvest-col
  });
  out += '</div>'; // novia-vestidos-elegantes
  return out;
}

// ── TIPS TIMELINE ─────────────────────────────────────────────────
function getNoviaTimeline(est, estacion) {
  var acc = est.accesorios;
  var tips = [
    { icon: "🌿", titulo: "Telas", texto: acc.telas ? est.telas.join(', ') : "Seda natural, encaje cálido, chiffon en marfil" },
    { icon: "💄", titulo: "Maquillaje", texto: "Tonos dorados, durazno, bronce y terracota resaltan tu belleza natural de Otoño Verdadero. Labio en terracota o nude cálido, mejillas en melocotón." },
    { icon: "💇", titulo: "Peinados", texto: "Recogidos bajos o sueltos con ondas suaves aportan suavidad y equilibrio a tu silueta. El triángulo invertido se beneficia de peinados con volumen en la parte baja." },
    { icon: "💐", titulo: "Ramos", texto: acc.flores || "Tonos cálidos: durazno, mostaza, oliva, crema, terracota, coral suave" },
    { icon: "💍", titulo: "Metales y joyas", texto: acc.metales + ". " + (acc.joyas || "") }
  ];

  var out = '<h3 class="card-h3 brown" style="margin-bottom:14px">✦ Tips para tu gran día</h3>';
  out += '<div class="novia-tips-grid">';
  tips.forEach(function(t) {
    out += '<div class="novia-tip-card">';
    out += '<div class="novia-tip-icon">' + t.icon + '</div>';
    out += '<div class="novia-tip-titulo">' + t.titulo + '</div>';
    out += '<div class="novia-tip-texto">' + t.texto + '</div>';
    out += '</div>';
  });
  out += '</div>';
  return out;
}


// Mostrar/ocultar pestaña novia según estado civil
function initNoviaTab() {
  var btn = document.getElementById('btn-novia');
  if (!btn) return;
  if (CONFIG.ESTADO_CIVIL === 'Soltera') {
    btn.style.display = '';
  } else {
    btn.style.display = 'none';
  }
}



// ════════════════════════════════════════════════════════════════
//  COMBINACIONES DE COLOR — 3 tipos × 12 estaciones × 7 siluetas
//  Metodología: House of Color + Teoría del Color + Visagismo
// ════════════════════════════════════════════════════════════════

// ── REGLAS DE COLOCACIÓN POR SILUETA ────────────────────────────
const REGLAS_SILUETA_COLOR = {
  "Triángulo Invertido": {
    regla: "Oscuro o neutro arriba · Claro o acento abajo",
    logica: "El color oscuro cerca de los hombros los reduce visualmente. El color claro o de acento en la parte baja añade volumen donde falta, equilibrando la silueta.",
    arriba: "oscuro",
    abajo: "claro"
  },
  "Regla": {
    regla: "Acento en cintura o en una zona · Crear ilusión de curva",
    logica: "El cuerpo recto se beneficia del contraste en la cintura. Un cinturón, faja o cambio de color en la zona media crea visualmente la curva que no existe.",
    arriba: "neutro",
    abajo: "neutro",
    cintura: "acento"
  },
  "Rectangular": {
    regla: "Contraste arriba/abajo · Acento en cintura",
    logica: "Los bloques de color contrastantes crean separación visual y simulan curvas. El acento en cintura define la silueta.",
    arriba: "libre",
    abajo: "libre"
  },
  "Circular": {
    regla: "Oscuro continuo en el centro · Claro cerca del rostro",
    logica: "Una columna de color oscuro desde el cuello hasta los pies crea verticalidad y estiliza. La claridad cerca del rostro ilumina sin añadir volumen al centro.",
    arriba: "claro-rostro",
    abajo: "oscuro"
  },
  "Pera": {
    regla: "Claro o acento arriba · Oscuro abajo",
    logica: "El color claro o brillante en la parte superior atrae la mirada hacia hombros y rostro. El oscuro en la parte baja minimiza caderas y muslos.",
    arriba: "claro",
    abajo: "oscuro"
  },
  "Reloj de Arena": {
    regla: "Libertad total · Acento en cintura para celebrar",
    logica: "Tu silueta equilibrada admite color en cualquier zona. El acento en cintura resalta tu mejor punto.",
    arriba: "libre",
    abajo: "libre",
    cintura: "acento-opcional"
  },
  "Tipo 8": {
    regla: "Tonales de arriba a abajo · Acento en cintura con cinturón",
    logica: "Los tonos continuos elongan y unifican la silueta generosa. El acento en cintura celebra las curvas sin fragmentar el look.",
    arriba: "tonal",
    abajo: "tonal",
    cintura: "acento"
  }
};

// ── PALETAS BASE POR ESTACIÓN ────────────────────────────────────
// Cada estación tiene: oscuros, medios, claros, acento, neutros
const PALETAS_COMBINACION = {

  // ─── OTOÑOS ──────────────────────────────────────────────────
  "Otoño Verdadero": {
    oscuros:  [{hex:"#4A3828",n:"Marrón caoba"},{hex:"#3D4A2A",n:"Verde oliva oscuro"},{hex:"#6B2D1E",n:"Borgoña cálido"}],
    medios:   [{hex:"#C2714F",n:"Terracota"},{hex:"#B8860B",n:"Mostaza"},{hex:"#7A9060",n:"Verde salvia"}],
    claros:   [{hex:"#E8C898",n:"Arena dorada"},{hex:"#D4B896",n:"Trigo"},{hex:"#C8D0A8",n:"Verde menta cálido"}],
    acento:   [{hex:"#C2714F",n:"Terracota"},{hex:"#B8860B",n:"Mostaza"},{hex:"#8B2500",n:"Rojo ladrillo"}],
    neutros:  [{hex:"#2C1810",n:"Negro cálido"},{hex:"#8B7355",n:"Camel"},{hex:"#F5ECD8",n:"Crema cálida"}]
  },

  "Otoño Oscuro": {
    oscuros:  [{hex:"#1C1008",n:"Negro cálido profundo"},{hex:"#2D1B0E",n:"Marrón muy oscuro"},{hex:"#1A2810",n:"Verde muy oscuro"}],
    medios:   [{hex:"#8B3A1A",n:"Rojo ladrillo"},{hex:"#9B7B1A",n:"Mostaza profunda"},{hex:"#4A5A2A",n:"Verde oliva"}],
    claros:   [{hex:"#C8A870",n:"Dorado arena"},{hex:"#B89870",n:"Beige dorado"},{hex:"#A8B888",n:"Verde kaki claro"}],
    acento:   [{hex:"#8B0000",n:"Rojo oscuro"},{hex:"#B8860B",n:"Mostaza"},{hex:"#C2714F",n:"Terracota"}],
    neutros:  [{hex:"#1C1008",n:"Negro cálido"},{hex:"#6B4226",n:"Marrón chocolate"},{hex:"#E0C898",n:"Crema oscura"}]
  },

  "Otoño Suave": {
    oscuros:  [{hex:"#6B5040",n:"Marrón medio"},{hex:"#505840",n:"Verde musgo"},{hex:"#7A4838",n:"Terracota oscura"}],
    medios:   [{hex:"#C09080",n:"Rosa terracota"},{hex:"#A8A068",n:"Kaki suave"},{hex:"#80A080",n:"Verde salvia"}],
    claros:   [{hex:"#E8D8C8",n:"Crema rosada"},{hex:"#D8E0C8",n:"Verde agua"},{hex:"#E0C8B8",n:"Durazno pálido"}],
    acento:   [{hex:"#C09080",n:"Rosa terracota"},{hex:"#B08878",n:"Coral apagado"},{hex:"#A8A068",n:"Kaki"}],
    neutros:  [{hex:"#887868",n:"Taupe cálido"},{hex:"#C8B8A8",n:"Beige suave"},{hex:"#F0E8DC",n:"Crema suave"}]
  },

  // ─── INVIERNOS ───────────────────────────────────────────────
  "Invierno Verdadero": {
    oscuros:  [{hex:"#000000",n:"Negro puro"},{hex:"#0A0A2A",n:"Navy profundo"},{hex:"#1A001A",n:"Ciruela muy oscura"}],
    medios:   [{hex:"#DC143C",n:"Carmesí"},{hex:"#4169E1",n:"Azul real"},{hex:"#8B008B",n:"Magenta"}],
    claros:   [{hex:"#FFFFFF",n:"Blanco puro"},{hex:"#E8E8F5",n:"Blanco azulado"},{hex:"#F0E8F8",n:"Blanco lavanda"}],
    acento:   [{hex:"#DC143C",n:"Carmesí"},{hex:"#FF1493",n:"Fucsia"},{hex:"#FFD700",n:"Amarillo puro"}],
    neutros:  [{hex:"#000000",n:"Negro"},{hex:"#808080",n:"Gris medio"},{hex:"#FFFFFF",n:"Blanco"}]
  },

  "Invierno Oscuro": {
    oscuros:  [{hex:"#000000",n:"Negro"},{hex:"#0D0D1A",n:"Navy casi negro"},{hex:"#1A0A1A",n:"Ciruela oscura"}],
    medios:   [{hex:"#800080",n:"Púrpura"},{hex:"#00008B",n:"Azul oscuro"},{hex:"#8B0000",n:"Borgoña"}],
    claros:   [{hex:"#F8F8FF",n:"Blanco hielo"},{hex:"#E8E0F0",n:"Lavanda pálida"},{hex:"#E0E8F8",n:"Azul muy pálido"}],
    acento:   [{hex:"#DC143C",n:"Carmesí"},{hex:"#C71585",n:"Rojo violeta"},{hex:"#4169E1",n:"Azul real"}],
    neutros:  [{hex:"#000000",n:"Negro"},{hex:"#696969",n:"Gris oscuro"},{hex:"#F8F8FF",n:"Blanco hielo"}]
  },

  "Invierno Brillante": {
    oscuros:  [{hex:"#000000",n:"Negro puro"},{hex:"#191970",n:"Navy"},{hex:"#4B0082",n:"Índigo"}],
    medios:   [{hex:"#FF0000",n:"Rojo puro"},{hex:"#FF1493",n:"Fucsia"},{hex:"#00CED1",n:"Turquesa"}],
    claros:   [{hex:"#FFFFFF",n:"Blanco óptico"},{hex:"#F0F8FF",n:"Blanco azulado"},{hex:"#FFE4E1",n:"Blanco rosado"}],
    acento:   [{hex:"#FF0000",n:"Rojo"},{hex:"#FF1493",n:"Fucsia"},{hex:"#FFD700",n:"Amarillo"}],
    neutros:  [{hex:"#000000",n:"Negro"},{hex:"#C0C0C0",n:"Plata"},{hex:"#FFFFFF",n:"Blanco"}]
  },

  // ─── VERANOS ─────────────────────────────────────────────────
  "Verano Verdadero": {
    oscuros:  [{hex:"#483D8B",n:"Azul pizarra"},{hex:"#4A4060",n:"Ciruela suave"},{hex:"#2F4F4F",n:"Verde pizarra"}],
    medios:   [{hex:"#6495ED",n:"Azul cornflower"},{hex:"#DDA0DD",n:"Malva"},{hex:"#20B2AA",n:"Verde mar"}],
    claros:   [{hex:"#E6E6FA",n:"Lavanda"},{hex:"#B0E0E6",n:"Azul polvo"},{hex:"#FFB6C1",n:"Rosa claro"}],
    acento:   [{hex:"#6495ED",n:"Azul cornflower"},{hex:"#DDA0DD",n:"Malva"},{hex:"#FF69B4",n:"Rosa intenso"}],
    neutros:  [{hex:"#708090",n:"Gris pizarra"},{hex:"#B0C4DE",n:"Azul acero claro"},{hex:"#F8F8FF",n:"Blanco suave"}]
  },

  "Verano Claro": {
    oscuros:  [{hex:"#6B7B9B",n:"Azul gris"},{hex:"#7B6B8B",n:"Lavanda medio"},{hex:"#4A6B6B",n:"Verde azulado"}],
    medios:   [{hex:"#87CEEB",n:"Azul cielo"},{hex:"#DDA0DD",n:"Malva suave"},{hex:"#98D8C8",n:"Menta"}],
    claros:   [{hex:"#E8F4F8",n:"Azul muy pálido"},{hex:"#F0E8F8",n:"Lavanda pálida"},{hex:"#E8F8F0",n:"Menta pálida"}],
    acento:   [{hex:"#87CEEB",n:"Azul cielo"},{hex:"#FFB6C1",n:"Rosa suave"},{hex:"#98D8C8",n:"Menta"}],
    neutros:  [{hex:"#A0B0C0",n:"Gris azulado"},{hex:"#C8D8E8",n:"Azul gris claro"},{hex:"#F8FAFC",n:"Blanco frío"}]
  },

  "Verano Suave": {
    oscuros:  [{hex:"#7B8090",n:"Gris azulado"},{hex:"#8B7B8B",n:"Malva grisáceo"},{hex:"#607878",n:"Verde gris"}],
    medios:   [{hex:"#A0A8B8",n:"Gris lavanda"},{hex:"#A890A0",n:"Malva suave"},{hex:"#88A098",n:"Verde agua gris"}],
    claros:   [{hex:"#E0E4EC",n:"Blanco grisáceo"},{hex:"#E8E0E8",n:"Lavanda muy pálida"},{hex:"#E0EAE8",n:"Verde gris pálido"}],
    acento:   [{hex:"#9090A8",n:"Lavanda gris"},{hex:"#A890A0",n:"Malva"},{hex:"#88A098",n:"Verde agua"}],
    neutros:  [{hex:"#909098",n:"Gris medio"},{hex:"#C0C8D0",n:"Gris perla"},{hex:"#F0F0F5",n:"Blanco suave"}]
  },

  // ─── PRIMAVERAS ──────────────────────────────────────────────
  "Primavera Verdadera": {
    oscuros:  [{hex:"#4A7A50",n:"Verde bosque"},{hex:"#5A4A7A",n:"Violeta cálido"},{hex:"#7A4A20",n:"Marrón cálido"}],
    medios:   [{hex:"#FF7F50",n:"Coral"},{hex:"#FFB347",n:"Naranja melocotón"},{hex:"#40E0D0",n:"Turquesa"}],
    claros:   [{hex:"#FFFACD",n:"Limón pálido"},{hex:"#FFE4B5",n:"Moccasin"},{hex:"#E0F8F0",n:"Menta clara"}],
    acento:   [{hex:"#FF7F50",n:"Coral"},{hex:"#FFD700",n:"Dorado"},{hex:"#00CED1",n:"Turquesa vivo"}],
    neutros:  [{hex:"#C68642",n:"Caramelo"},{hex:"#F5DEB3",n:"Trigo"},{hex:"#FFFAF0",n:"Blanco marfil"}]
  },

  "Primavera Clara": {
    oscuros:  [{hex:"#6B8B6B",n:"Verde suave"},{hex:"#7B6B5A",n:"Camel medio"},{hex:"#6B7B8B",n:"Azul gris cálido"}],
    medios:   [{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#FFDAB9",n:"Melocotón"},{hex:"#98FB98",n:"Verde menta"}],
    claros:   [{hex:"#FFF8F0",n:"Crema cálida"},{hex:"#F0FFF0",n:"Verde muy pálido"},{hex:"#FFF0F8",n:"Rosa muy pálido"}],
    acento:   [{hex:"#FFB6C1",n:"Rosa claro"},{hex:"#87CEEB",n:"Azul cielo"},{hex:"#FFDAB9",n:"Melocotón"}],
    neutros:  [{hex:"#C8A882",n:"Camel claro"},{hex:"#E8D8C8",n:"Beige cálido"},{hex:"#FEFEF9",n:"Blanco marfil"}]
  },

  "Primavera Brillante": {
    oscuros:  [{hex:"#3CB371",n:"Verde hierba"},{hex:"#1E90FF",n:"Azul brillante"},{hex:"#FF6347",n:"Tomate"}],
    medios:   [{hex:"#FF6F3C",n:"Coral brillante"},{hex:"#FFD700",n:"Amarillo dorado"},{hex:"#00CED1",n:"Turquesa"}],
    claros:   [{hex:"#FFFAF0",n:"Blanco cálido"},{hex:"#E0FFF0",n:"Menta pálida"},{hex:"#FFF0E0",n:"Melocotón pálido"}],
    acento:   [{hex:"#FF6F3C",n:"Coral"},{hex:"#FFD700",n:"Amarillo"},{hex:"#00CED1",n:"Turquesa"}],
    neutros:  [{hex:"#C68642",n:"Caramelo"},{hex:"#F5DEB3",n:"Trigo"},{hex:"#FFFFFF",n:"Blanco puro"}]
  }
};

// ── LAS 3 COMBINACIONES ──────────────────────────────────────────
// Para cada tipo de combinación, definimos qué colores usar según silueta
function getCombinaciones(estacion, silueta) {
  var pal = PALETAS_COMBINACION[estacion];
  if (!pal) {
    // fuzzy match
    for (var k of Object.keys(PALETAS_COMBINACION)) {
      if (estacion.toLowerCase().includes(k.toLowerCase()) ||
          k.toLowerCase().includes(estacion.toLowerCase())) {
        pal = PALETAS_COMBINACION[k]; break;
      }
    }
  }
  if (!pal) pal = PALETAS_COMBINACION["Otoño Verdadero"];

  var regla = REGLAS_SILUETA_COLOR[silueta] || REGLAS_SILUETA_COLOR["Reloj de Arena"];
  var esArriba = regla.arriba;
  var esAbajo  = regla.abajo;

  // ── 1. MONOCROMÁTICA ────────────────────────────────────────
  // 3 tonos del mismo color: oscuro + medio + claro
  // Colocación según silueta
  var mono_oscuro = pal.oscuros[0];
  var mono_medio  = pal.medios[0];
  var mono_claro  = pal.claros[0];

  var mono_arriba, mono_abajo, mono_acento;
  if (esArriba === "oscuro") {
    mono_arriba = mono_oscuro; mono_abajo = mono_claro; mono_acento = mono_medio;
  } else if (esArriba === "claro" || esArriba === "claro-rostro") {
    mono_arriba = mono_claro; mono_abajo = mono_oscuro; mono_acento = mono_medio;
  } else {
    mono_arriba = mono_medio; mono_abajo = mono_oscuro; mono_acento = mono_claro;
  }

  // ── 2. ANÁLOGA ──────────────────────────────────────────────
  // 3-4 colores vecinos: colores medios de la paleta + neutro
  // Todos deben ser tonalmente armónicos
  var ana_c1 = pal.medios[0];
  var ana_c2 = pal.medios[1];
  var ana_c3 = pal.medios[2];
  var ana_neutro = pal.neutros[0];

  var ana_arriba, ana_abajo, ana_cintura, ana_acc;
  if (esArriba === "oscuro") {
    ana_arriba = ana_c1; ana_abajo = ana_c2; ana_cintura = ana_neutro; ana_acc = ana_c3;
  } else if (esArriba === "claro" || esArriba === "claro-rostro") {
    ana_arriba = ana_c2; ana_abajo = ana_c1; ana_cintura = ana_neutro; ana_acc = ana_c3;
  } else {
    ana_arriba = ana_c1; ana_abajo = ana_neutro; ana_cintura = ana_c2; ana_acc = ana_c3;
  }

  // ── 3. COMPLEMENTARIA ───────────────────────────────────────
  // Un color dominante (80%) + su acento complementario (20%)
  // El dominante ocupa la prenda principal, el acento en accesorio
  var comp_dominante = esArriba === "oscuro" ? pal.oscuros[1] : pal.medios[1];
  var comp_acento    = pal.acento[0];
  var comp_neutro    = pal.neutros[1];

  var comp_arriba, comp_abajo, comp_acc;
  if (esArriba === "oscuro") {
    comp_arriba = comp_dominante; comp_abajo = comp_neutro; comp_acc = comp_acento;
  } else if (esArriba === "claro" || esArriba === "claro-rostro") {
    comp_arriba = comp_neutro; comp_abajo = comp_dominante; comp_acc = comp_acento;
  } else {
    comp_arriba = comp_dominante; comp_abajo = pal.oscuros[0]; comp_acc = comp_acento;
  }

  return {
    regla: regla,
    mono: {
      arriba: mono_arriba,
      abajo:  mono_abajo,
      acento: mono_acento,
      nota: "Tres tonos del mismo color — el más sofisticado y que más alarga la silueta. Funciona siempre."
    },
    analoga: {
      arriba:  ana_arriba,
      abajo:   ana_abajo,
      cintura: ana_cintura,
      acento:  ana_acc,
      nota: "Colores vecinos que fluyen naturalmente — armónico, rico y completamente dentro de tu paleta estacional."
    },
    complementaria: {
      arriba:    comp_arriba,
      abajo:     comp_abajo,
      accesorio: comp_acc,
      nota: "Un color dominante con un acento de contraste en el 10-20% — impacto con elegancia."
    }
  };
}

// ── RENDER ───────────────────────────────────────────────────────
function renderCombinaciones() {
  var container = document.getElementById('combinaciones-content');
  if (!container) return;

  var combis = getCombinaciones(CONFIG.ESTACION, CONFIG.CUERPO);
  var regla  = combis.regla;

  var out = '';
  out += '<h2 class="sec-title">✦ Combinaciones de Color</h2>';
  out += '<p class="sec-intro">Tres formas de combinar tu paleta con elegancia y fundamento — adaptadas a tu silueta <strong>' + CONFIG.CUERPO + '</strong> para que el color trabaje a tu favor.</p>';

  // Regla de silueta
  out += '<div class="combi-regla-box">';
  out += '<div class="combi-regla-tag">Regla para tu silueta</div>';
  out += '<div class="combi-regla-titulo">' + regla.regla + '</div>';
  out += '<div class="combi-regla-logica">' + regla.logica + '</div>';
  out += '</div>';

  // ── 1. MONOCROMÁTICA ──
  out += buildCombinacion(
    "01",
    "Monocromática",
    "Tres tonos · Un solo color",
    "La más sofisticada. Un solo color en tres intensidades — oscuro, medio y claro. Alarga la silueta, comunica lujo y es completamente infalible.",
    combis.mono,
    [
      { label: "Arriba", color: combis.mono.arriba },
      { label: "Abajo",  color: combis.mono.abajo  },
      { label: "Acento", color: combis.mono.acento  }
    ],
    combis.mono.nota,
    "#5B7B6F"
  );

  // ── 2. ANÁLOGA ──
  out += buildCombinacion(
    "02",
    "Análoga",
    "Colores vecinos · Máxima armonía",
    "Colores que viven juntos en la rueda cromática. Fluyen naturalmente entre sí porque comparten temperatura y espíritu. La favorita de House of Color para looks de 4-5 prendas.",
    combis.analoga,
    [
      { label: "Arriba",  color: combis.analoga.arriba  },
      { label: "Abajo",   color: combis.analoga.abajo   },
      { label: "Cintura", color: combis.analoga.cintura },
      { label: "Acento",  color: combis.analoga.acento  }
    ],
    combis.analoga.nota,
    "#C2714F"
  );

  // ── 3. COMPLEMENTARIA ──
  out += buildCombinacion(
    "03",
    "Complementaria",
    "80% dominante · 20% contraste",
    "Un color toma el protagonismo en el 80% del look — el otro aparece solo como acento. La proporción es la clave: demasiado de ambos se vuelve caótico, pero en este balance es poderoso y elegante.",
    combis.complementaria,
    [
      { label: "Prenda principal", color: combis.complementaria.arriba    },
      { label: "Prenda base",      color: combis.complementaria.abajo     },
      { label: "Accesorio clave",  color: combis.complementaria.accesorio }
    ],
    combis.complementaria.nota,
    "#9B8E7C"
  );

  container.innerHTML = out;
}

function buildCombinacion(num, titulo, subtitulo, descripcion, data, prendas, nota, accentColor) {
  var swatchesHTML = prendas.map(function(p) {
    var isLight = parseInt(p.color.hex.slice(1,3), 16) > 200 &&
                  parseInt(p.color.hex.slice(3,5), 16) > 200 &&
                  parseInt(p.color.hex.slice(5,7), 16) > 200;
    var borderStyle = isLight ? 'border:1px solid rgba(0,0,0,0.12);' : '';
    return '<div class="combi-swatch-item">' +
      '<div class="combi-swatch-circle" style="background:' + p.color.hex + ';' + borderStyle + '"></div>' +
      '<div class="combi-swatch-label">' + p.label + '</div>' +
      '<div class="combi-swatch-name">' + p.color.n + '</div>' +
      '</div>';
  }).join('');

  // Visual outfit blocks
  var outfitHTML = buildOutfitVisual(prendas, num);

  return '<div class="combi-card">' +
    '<div class="combi-card-header" style="border-left:3px solid ' + accentColor + '">' +
      '<div class="combi-num" style="color:' + accentColor + '">' + num + '</div>' +
      '<div>' +
        '<div class="combi-titulo">' + titulo + '</div>' +
        '<div class="combi-subtitulo">' + subtitulo + '</div>' +
      '</div>' +
    '</div>' +
    '<p class="combi-descripcion">' + descripcion + '</p>' +
    '<div class="combi-visual-row">' +
      outfitHTML +
      '<div class="combi-swatches">' + swatchesHTML + '</div>' +
    '</div>' +
    '<div class="combi-nota">✦ ' + nota + '</div>' +
  '</div>';
}

function buildOutfitVisual(prendas, num) {
  // Simple SVG figure showing color placement
  var p = prendas;
  var topColor    = p[0] ? p[0].color.hex : '#888';
  var bottomColor = p[1] ? p[1].color.hex : '#666';
  var accentColor = p[2] ? p[2].color.hex : '#C2714F';
  var beltColor   = p[3] ? p[3].color.hex : accentColor;

  var hasBelt = prendas.length >= 4;

  return '<div class="combi-outfit">' +
    '<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" class="combi-svg">' +
      // Head
      '<ellipse cx="50" cy="18" rx="12" ry="14" fill="#D4A882" />' +
      // Neck
      '<rect x="46" y="30" width="8" height="6" fill="#D4A882" />' +
      // Top/blouse
      '<path d="M28 36 Q50 32 72 36 L75 90 Q50 94 25 90 Z" fill="' + topColor + '" />' +
      // Sleeves
      '<path d="M28 36 L16 62 Q14 66 18 67 L26 68 L28 55 Z" fill="' + topColor + '" />' +
      '<path d="M72 36 L84 62 Q86 66 82 67 L74 68 L72 55 Z" fill="' + topColor + '" />' +
      // Belt/cintura
      (hasBelt ? '<rect x="25" y="88" width="50" height="7" rx="2" fill="' + beltColor + '" />' : '') +
      // Skirt/pants
      '<path d="M25 ' + (hasBelt ? '94' : '90') + ' L22 155 Q50 160 78 155 L75 ' + (hasBelt ? '94' : '90') + ' Q50 ' + (hasBelt ? '97' : '93') + ' 25 ' + (hasBelt ? '94' : '90') + ' Z" fill="' + bottomColor + '" />' +
      // Accessory dot (bag/shoes)
      '<circle cx="84" cy="120" r="7" fill="' + accentColor + '" opacity="0.9" />' +
      '<circle cx="84" cy="120" r="4" fill="' + accentColor + '" opacity="0.6" />' +
    '</svg>' +
    '<div class="combi-outfit-label">Look ' + num + '</div>' +
  '</div>';
}


function renderCuerpo() {
  var tipo = CONFIG.CUERPO;
  var data = DATOS_CUERPO[tipo] || DATOS_CUERPO["Triángulo"];
  if (!data) return;

  var superioresHTML = data.superiores.map(function(i){ return '<div class="list-item">\u2022 ' + i + '</div>'; }).join('');
  var inferioresHTML = data.inferiores.map(function(i){ return '<div class="list-item">\u2022 ' + i + '</div>'; }).join('');
  var evitarHTML     = data.evitar.map(function(i){ return '<div class="list-item" style="color:#C2714F">\u2717 ' + i + '</div>'; }).join('');

  var out = '';
  out += '<h2 class="sec-title">\u2736 Tu Silueta: ' + tipo + '</h2>';
  out += '<p class="sec-intro">' + data.descripcion + '</p>';
  out += '<div class="two-cols">';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 teal">\u2736 Prendas Superiores</h3>' + superioresHTML + '</div>';
  out += '<div class="white-card" style="margin-bottom:0"><h3 class="card-h3 teal">\u2736 Prendas Inferiores</h3>' + inferioresHTML + '</div>';
  out += '</div>';
  out += '<div class="white-card" style="margin-top:18px"><h3 class="card-h3 brown">\u2736 Mejor evitar</h3>' + evitarHTML + '</div>';
  out += '<div class="dark-box" style="text-align:center;margin-top:18px">';
  out += '<h3 style="color:#7A9080;margin-bottom:12px;font-size:18px">\u2736 El principio que lo cambia todo</h3>';
  out += '<p style="font-family:\'Inter\',sans-serif;font-size:15px;line-height:1.9"><strong style="color:#C2714F">' + data.principio + '</strong></p>';
  out += '</div>';

  document.getElementById('cuerpo-content').innerHTML = out;
}

document.addEventListener('DOMContentLoaded', function() {
  renderCuerpo();
  renderCabello();
  renderCabellaColor();
  renderColorimetria();
  renderCapsulas();
  renderMetales();
  renderPaleta();
  renderMaquillaje();
  renderCombinaciones();
  renderNovia();
  initNoviaTab();
  var nb = document.getElementById('bienvenida-nombre');
  if (nb) nb.textContent = 'Querida ' + CONFIG.NOMBRE + ',';
  var be = document.getElementById('bienvenida-estacion');
  if (be) be.textContent = CONFIG.ESTACION;
  var bc = document.getElementById('bienvenida-cuerpo');
  if (bc) bc.textContent = CONFIG.CUERPO;
});

function show(id, btn) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
