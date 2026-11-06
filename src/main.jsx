import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles, Database, Bug, PanelsTopLeft, GraduationCap, Heart, Menu } from "lucide-react";
import "./style.css";

const projects = [
  {
    number: "01",
    title: "DermaScan",
    category: "Project Based Learning · Computer Vision",
    description: "Konsep aplikasi mobile untuk membantu mendeteksi kondisi kulit wajah melalui kamera ponsel.",
    tags: ["Computer Vision", "Mobile App", "Analysis"],
    color: "peach",
    link: "#kontak"
  },
  {
    number: "02",
    title: "Sistem Informasi Inventaris Laboratorium",
    category: "Analisis & Perancangan Sistem",
    description: "Perancangan proses pencatatan stok, peminjaman, dan pengembalian alat laboratorium.",
    tags: ["System Analysis", "Database", "UML"],
    color: "lilac",
    link: "#kontak"
  },
  {
    number: "03",
    title: "Project Perkuliahan",
    category: "Database & Web Development",
    description: "Tambahkan project terbaikmu di sini beserta kontribusi dan teknologi yang digunakan.",
    tags: ["SQL", "Database", "Web"],
    color: "mint",
    link: "#kontak"
  }
];

const skills = [
  { icon: Database, title: "Database Management", detail: "SQL, perancangan database, dan pengelolaan data" },
  { icon: Bug, title: "Quality Assurance", detail: "Dasar pengujian perangkat lunak dan identifikasi bug" },
  { icon: PanelsTopLeft, title: "System Analysis", detail: "Analisis kebutuhan dan pemodelan proses bisnis" },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = [["Tentang", "#tentang"], ["Keahlian", "#keahlian"], ["Proyek", "#proyek"], ["Kontak", "#kontak"]];

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">marsya<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka navigasi"><Menu size={21}/></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#kontak">Hubungi saya <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> Terbuka untuk kesempatan belajar & kolaborasi</div>
            <p className="hello">Halo, saya</p>
            <h1>Marsya<span className="pink-dot">.</span><br/><em>Fernanda</em></h1>
            <p className="hero-desc">Mahasiswa Teknik Informatika yang tertarik pada dunia <strong>database, quality assurance,</strong> dan <strong>analisis sistem.</strong> Senang belajar hal baru dan mengubah ide menjadi solusi yang bermanfaat.</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyek">Lihat proyek <ArrowUpRight size={17}/></a>
              <a className="button secondary" href="#kontak">Kenalan yuk</a>
            </div>
            <div className="hero-note"><MapPin size={15}/> Malang, Indonesia <span>·</span> Politeknik Negeri Malang</div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <div className="photo-initial">M</div>
                <span>Tambahkan foto profil</span>
                <small>public/profile.jpg</small>
              </div>
              <div className="photo-sticker sticker-one"><Sparkles size={19}/></div>
              <div className="photo-sticker sticker-two">hello<br/>there!</div>
            </div>
            <div className="floating-note"><span>✳</span> curious mind,<br/>creative heart.</div>
            <div className="scribble">✳</div>
          </div>
          <a className="scroll-cue" href="#tentang"><ArrowDown size={16}/> Scroll untuk mengenal saya</a>
        </section>

        <section className="about section-wrap" id="tentang">
          <div className="section-kicker">01 / TENTANG SAYA</div>
          <div className="about-grid">
            <h2>Selalu ada hal baru untuk <em>dipelajari.</em></h2>
            <div className="about-text">
              <p>Saya merupakan mahasiswa Teknik Informatika di Politeknik Negeri Malang. Saya memiliki ketertarikan pada pengelolaan database, pengujian perangkat lunak, dan analisis sistem.</p>
              <p>Saya senang bekerja dalam tim, mudah beradaptasi, dan terbuka untuk mempelajari hal-hal baru. Bagi saya, proses belajar adalah kesempatan untuk berkembang dan menghasilkan sesuatu yang lebih baik.</p>
              <div className="mini-facts">
                <div><strong>2024</strong><span>Mulai kuliah</span></div>
                <div><strong>TI</strong><span>Teknik Informatika</span></div>
                <div><strong>3C</strong><span>Kelas</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="keahlian">
          <div className="section-kicker">02 / YANG SAYA PELAJARI</div>
          <div className="section-heading"><h2>Skills & <em>interests.</em></h2><p>Bidang yang sedang saya kembangkan melalui perkuliahan dan project.</p></div>
          <div className="skill-grid">
            {skills.map(({icon: Icon, title, detail}, i) => <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={23}/></div><span className="card-number">0{i+1}</span>
              <h3>{title}</h3><p>{detail}</p>
            </article>)}
          </div>
          <div className="tools-line"><span>TOOLS YANG PERNAH DIGUNAKAN</span><div><b>MySQL</b><b>PostgreSQL</b><b>Git & GitHub</b><b>Figma</b><b>VS Code</b></div></div>
        </section>

        <section className="projects section-wrap" id="proyek">
          <div className="section-kicker">03 / BEBERAPA KARYA</div>
          <div className="section-heading"><h2>Selected <em>projects.</em></h2><p>Beberapa project yang menjadi bagian dari perjalanan belajar saya.</p></div>
          <div className="project-list">
            {projects.map(project => <article className={`project-card ${project.color}`} key={project.number}>
              <div className="project-top"><span>PROJECT {project.number}</span><a href={project.link} aria-label={`Info ${project.title}`}><ArrowUpRight size={20}/></a></div>
              <div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-desc">{project.description}</p></div>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <p className="edit-hint">✳ Ganti deskripsi, teknologi, dan tautan project dengan hasil pekerjaanmu yang sebenarnya.</p>
        </section>

        <section className="experience section-wrap">
          <div className="section-kicker">04 / PENGALAMAN</div>
          <div className="experience-card">
            <div className="experience-icon"><Heart size={22}/></div>
            <div><p className="project-category">VOLUNTEER · LIVEARENA.ID</p><h3>Event Volunteer</h3><p>Mendukung kegiatan dan operasional beberapa acara olahraga, termasuk Walikota Cup 2022, Piala GABSI Kota Malang 2023, ASEAN University Games 2024, dan PORPROV Jatim IX 2025.</p></div>
          </div>
        </section>

        <section className="contact section-wrap" id="kontak">
          <div className="contact-shape">✳</div>
          <div className="section-kicker">05 / LET'S CONNECT</div>
          <h2>Punya ide atau<br/><em>kesempatan menarik?</em></h2>
          <p>Saya terbuka untuk berdiskusi, belajar, dan berkolaborasi. Jangan ragu untuk menyapa!</p>
          <a className="button dark-button" href="mailto:emailkamu@example.com"> <Mail size={17}/> Kirim email <ArrowUpRight size={17}/></a>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          </div>
        </section>
      </main>
      <footer><a className="brand" href="#home">marsya<span>.</span></a><p>Dibuat dengan rasa ingin tahu & secangkir semangat ☕</p><span>© {new Date().getFullYear()} Marsya</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);