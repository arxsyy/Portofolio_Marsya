import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  "Database Management",
  "Quality Assurance",
  "System Analysis",
  "SQL",
  "UI Testing",
  "Documentation",
];

const projects = [
  {
    number: "01",
    type: "Mobile App · Computer Vision",
    title: "DermaScan",
    description:
      "Konsep aplikasi mobile untuk membantu mendeteksi kondisi kulit wajah melalui kamera ponsel dengan pendekatan computer vision.",
    tags: ["Computer Vision", "Mobile", "Analysis"],
    status: "Project Based Learning",
  },
  {
    number: "02",
    type: "Information System · Database",
    title: "Sistem Informasi Inventaris Laboratorium",
    description:
      "Perancangan sistem untuk membantu pengelolaan data inventaris, peminjaman, dan pengembalian alat laboratorium.",
    tags: ["Database", "System Analysis", "Documentation"],
    status: "Project Based Learning",
  },
];

const experiences = [
  {
    period: "2022 — 2025",
    role: "Event Volunteer",
    organization: "Livearena.id",
    description:
      "Terlibat sebagai volunteer dalam beberapa kegiatan olahraga, termasuk Walikota Cup 2022, Piala GABSI Kota Malang 2023, ASEAN University Games 2024, dan PORPROV Jawa Timur IX 2025.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label="Marsya, kembali ke beranda"
        >
          Marsya<span>.</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#skills">Keahlian</a>
          <a href="#projects">Proyek</a>
          <a href="#experience">Pengalaman</a>
          <a className="nav-contact" href="#contact">
            Hubungi saya <Arrow />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Terbuka untuk kesempatan belajar &
              kolaborasi
            </p>
            <p className="intro">Halo, saya</p>
            <h1>
              Marsyalia<span className="name-dot"></span>
              <br />
              <em>Fernanda</em>
            </h1>
            <p className="hero-description">
              Mahasiswa Teknik Informatika yang tertarik pada pengembangan
              teknologi dan solusi sistem digital. Senang mengeksplorasi ide,
              memahami bagaimana sebuah sistem bekerja, serta menghubungkan
              teknologi dengan kebutuhan nyata. Selalu terbuka untuk belajar,
              berkembang, dan mendapatkan pengalaman baru.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Lihat proyek <Arrow />
              </a>
              <a className="button button-light" href="#about">
                Kenalan yuk
              </a>
            </div>
            <p className="location">
              Malang, Indonesia <span>·</span> Politeknik Negeri Malang
            </p>
          </div>

          <div className="hero-art" aria-label="Area foto profil">
            <div className="photo-shadow" />
            <div className="photo-frame">
              <img
                src="/profile.png"
                alt="Foto profil Marsya"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="photo-fallback">
                <span>MF</span>
                <small>Tambahkan foto profil</small>
              </div>
            </div>
            <div className="hello-note">
              hello
              <br />
              there!
            </div>
            <span className="sparkle sparkle-one">✳</span>
            <span className="art-caption">
              curious mind.
              <br />
              creative heart.
            </span>
          </div>
        </section>

        <section className="about section-shell section-block" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Senang memahami,
              <br />
              <em>terus berkembang.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Saya merupakan mahasiswa Teknik Informatika di Politeknik Negeri
              Malang yang memiliki ketertarikan pada bidang teknologi informasi,
              khususnya pengelolaan database, quality assurance, dan analisis
              sistem. Saya senang memahami kebutuhan, mengolah informasi, serta
              mempelajari proses perancangan sistem agar dapat berjalan secara
              efektif dan sesuai dengan tujuan.
            </p>
            <p>
              Dalam kegiatan perkuliahan maupun pengerjaan proyek, saya terbiasa
              bekerja sama dalam tim, menyelesaikan tugas secara terstruktur,
              dan menghadapi berbagai tantangan baru. Saya merupakan pribadi
              yang mudah beradaptasi, bertanggung jawab, serta memiliki semangat
              untuk terus belajar dan mengembangkan kemampuan.
            </p>
          </div>
        </section>

        <section className="skills section-shell section-block" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / WHAT I DO</p>
            <h2>
              Hal yang sedang
              <br />
              <em>saya pelajari.</em>
            </h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">0{index + 1}</span>
                <span>{skill}</span>
                <Arrow />
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-shell section-block" id="projects">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Beberapa hal yang
                <br />
                <em>pernah dikerjakan.</em>
              </h2>
            </div>
            <p className="section-aside">
              Project perkuliahan dan proses belajar yang terus berkembang.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-visual">
                  <span>{project.number}</span>
                  <i>✳</i>
                </div>
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="experience section-shell section-block"
          id="experience"
        >
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              Belajar dari
              <br />
              <em>pengalaman.</em>
            </h2>
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.role}>
                <p className="experience-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-org">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <p className="eyebrow">05 / SAY HELLO</p>
          <h2>
            Punya ide untuk
            <br />
            <em>dikerjakan bersama?</em>
          </h2>
          <p className="contact-copy">
            Saya terbuka untuk kesempatan belajar, kolaborasi, dan pengalaman
            baru.
          </p>
          <a
            className="button button-dark"
            href="mailto:emailkamu@example.com"
          >
            Kirim email <Arrow />
          </a>
          <p className="contact-hint">
            Ganti alamat email ini dengan email aktifmu.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home">
          marsya<span>.</span>
        </a>
        <p>Dirancang dengan rasa ingin tahu · © 2026 Marsya Fernanda</p>
        <a href="#home">Kembali ke atas ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
