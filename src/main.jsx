import React, { useRef, useState } from "react";
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

const experienceCards = [
  {
    cardLabel: "Pengalaman",
    slides: [
      {
        image: null,
        type: "Internasional",
        period: "2024",
        title: "ASEAN University Games 2024",
        subtitle: "Livearena.id",
        description:
          "Berperan sebagai volunteer pada ajang olahraga tingkat ASEAN antar mahasiswa, ASEAN University Games 2024.",
      },
      {
        image: null,
        type: "Olahraga Regional",
        period: "2025",
        title: "PORPROV Jawa Timur IX 2025",
        subtitle: "Livearena.id",
        description:
          "Terlibat sebagai volunteer dalam Pekan Olahraga Provinsi Jawa Timur IX 2025, mendukung penyelenggaraan berbagai cabang olahraga.",
      },
      {
        image: null,
        type: "Olahraga",
        period: "2022",
        title: "Walikota Cup 2022",
        subtitle: "Livearena.id",
        description:
          "Bertugas sebagai volunteer dalam penyelenggaraan Walikota Cup 2022, mendukung kelancaran kegiatan olahraga di Kota Malang.",
      },
      {
        image: null,
        type: "Olahraga",
        period: "2023",
        title: "Piala GABSI Kota Malang 2023",
        subtitle: "Livearena.id",
        description:
          "Terlibat aktif sebagai volunteer dalam penyelenggaraan Piala GABSI Kota Malang 2023.",
      },
    ],
  },
  {
    cardLabel: "Hobi & Minat",
    slides: [
      {
        image: null,
        type: "Musik",
        period: "Sejak kecil",
        title: "Mendengarkan Musik",
        subtitle: "Hiburan & Inspirasi",
        description:
          "Musik menemani hampir setiap aktivitas — dari belajar, mengerjakan proyek, hingga sekadar bersantai. Genre favorit bervariasi tergantung suasana hati.",
      },
      {
        image: null,
        type: "Seni Visual",
        period: "Hobi aktif",
        title: "Desain & Estetika",
        subtitle: "UI / Konten Visual",
        description:
          "Tertarik pada hal-hal yang enak dilihat — dari tata letak antarmuka, pemilihan warna, hingga komposisi visual sederhana.",
      },
      {
        image: null,
        type: "Eksplorasi",
        period: "Rutin",
        title: "Belajar Hal Baru",
        subtitle: "Teknologi & Pengetahuan",
        description:
          "Senang mengeksplorasi topik baru — baik yang berkaitan dengan teknologi, produktivitas, maupun hal-hal di luar bidang studi.",
      },
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function GalleryCard({ cardLabel, slides }) {
  const total = slides.length;
  // Clone: [last, ...slides, first] for seamless looping
  const looped = [slides[total - 1], ...slides, slides[0]];
  const [current, setCurrent] = useState(1); // start at index 1 (first real slide)
  const [lightbox, setLightbox] = useState(false);
  const trackRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollTimer = useRef(null);

  // Real slide index (strips clone offset)
  const realIndex = current === 0 ? total - 1 : current === looped.length - 1 ? 0 : current - 1;
  const slide = slides[realIndex];

  const scrollToIndex = (index, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.offsetWidth, behavior: smooth ? "smooth" : "instant" });
  };

  const goTo = (index) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    scrollToIndex(index);
    setCurrent(index);
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      isScrolling.current = false;
      // After reaching clone, silently jump to real slide
      const track = trackRef.current;
      if (!track) return;
      if (index === 0) {
        // jumped to clone of last → snap to real last
        track.scrollTo({ left: total * track.offsetWidth, behavior: "instant" });
        setCurrent(total);
      } else if (index === looped.length - 1) {
        // jumped to clone of first → snap to real first
        track.scrollTo({ left: 1 * track.offsetWidth, behavior: "instant" });
        setCurrent(1);
      }
    }, 400);
  };

  const prev = () => goTo(current - 1 < 0 ? 0 : current - 1);
  const next = () => goTo(current + 1 >= looped.length ? looped.length - 1 : current + 1);

  // Scroll to initial position on mount (no animation)
  React.useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: 1 * track.offsetWidth, behavior: "instant" });
  }, []);

  // Close lightbox on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="gallery-card">
        {/* Image swipe area */}
        <div className="gallery-card-top">
          <div className="gallery-track" ref={trackRef}>
            {looped.map((s, i) => (
              <div className="gallery-slide" key={i}>
                {s.image ? (
                  <img src={s.image} alt={s.title} />
                ) : (
                  <div className="gallery-placeholder">
                    <span>✳</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Expand button — always visible */}
          <button
            className="gallery-expand-btn"
            onClick={() => setLightbox(true)}
            aria-label="Perbesar foto"
            title="Perbesar foto"
          >
            ⤢
          </button>

          <span className="gallery-type-badge">{slide.type}</span>

          {/* Prev / Next — infinite loop, always enabled */}
          {slides.length > 1 && (
            <>
              <button
                className="gallery-nav-btn gallery-nav-prev"
                onClick={prev}
                aria-label="Sebelumnya"
              >
                ‹
              </button>
              <button
                className="gallery-nav-btn gallery-nav-next"
                onClick={next}
                aria-label="Berikutnya"
              >
                ›
              </button>
            </>
          )}

          {slides.length > 1 && (
            <div className="gallery-dots-overlay">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`gallery-dot${i === realIndex ? " active" : ""}`}
                  onClick={() => goTo(i + 1)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info area — changes per slide */}
        <div className="gallery-card-body">
          <p className="gallery-card-label">{cardLabel}</p>
          <p className="gallery-period">{slide.period}</p>
          <h3 className="gallery-title">{slide.title}</h3>
          <p className="experience-org">{slide.subtitle}</p>
          <p className="exp-card-desc">{slide.description}</p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto diperbesar"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(false)}
            aria-label="Tutup"
          >
            ✕
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {slide.image ? (
              <img src={slide.image} alt={slide.title} />
            ) : (
              <div className="lightbox-no-img">
                <span>✳</span>
                <p>Belum ada foto untuk ditampilkan</p>
              </div>
            )}
            <p className="lightbox-caption">
              <strong>{slide.title}</strong> · {slide.subtitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
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
          <div className="gallery-cards-grid">
            {experienceCards.map((card) => (
              <GalleryCard
                key={card.cardLabel}
                cardLabel={card.cardLabel}
                slides={card.slides}
              />
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
