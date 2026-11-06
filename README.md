# Marsya Portfolio

Starter website portofolio pribadi menggunakan React + Vite + CSS biasa.

## Menjalankan project

Pastikan Node.js sudah terpasang. Buka folder project ini di VS Code, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul di terminal (biasanya http://localhost:5173).

## Bagian yang perlu kamu ganti

1. **Foto profil**: letakkan foto bernama `profile.jpg` di folder `public`. Lalu ganti blok `photo-placeholder` di `src/main.jsx` menjadi:
   ```jsx
   <img className="profile-photo" src="/profile.jpg" alt="Foto profil Marsya" />
   ```
   Tambahkan CSS:
   ```css
   .profile-photo { width:100%; height:100%; object-fit:cover; border-radius:inherit; }
   ```
2. **Email**: ganti `emailkamu@example.com` pada tombol email.
3. **GitHub dan LinkedIn**: ganti URL pada bagian kontak dengan profil milikmu.
4. **Project**: perbarui deskripsi, kontribusi, teknologi, dan tautan project sesuai hasil pekerjaanmu yang benar-benar sudah dibuat.
5. **CV**: jika ingin tombol unduh CV, letakkan file `cv.pdf` di folder `public` lalu tambahkan tautan `<a href="/cv.pdf" download>Download CV</a>`.

## Build untuk production

```bash
npm run build
```

Hasil build akan ada di folder `dist`.

## Deploy ke Vercel

1. Push seluruh project ke repository GitHub.
2. Login ke https://vercel.com menggunakan GitHub.
3. Pilih **Add New → Project**, lalu import repository.
4. Framework Preset: Vite. Build Command: `npm run build`. Output Directory: `dist`.
5. Klik **Deploy**.

Setiap push baru ke branch utama akan memicu deployment otomatis jika integrasi GitHub tetap aktif.
