# Task: Inisialisasi Project Web API (Bun + ElysiaJS + Drizzle ORM + MySQL)

## Deskripsi Singkat
Tujuan dari task ini adalah menginisialisasi struktur project backend baru pada direktori ini menggunakan **Bun** sebagai runtime & package manager, **ElysiaJS** sebagai web framework, serta **Drizzle ORM** bersandingan dengan database **MySQL**.

Dokumen ini berfungsi sebagai panduan eksekusi tingkat tinggi (*high-level guidance*) bagi pengembang atau AI agent.

---

## 🛠️ Tech Stack & Dependencies
- **Runtime & Package Manager:** Bun
- **Framework Web:** ElysiaJS (`elysia`)
- **ORM:** Drizzle ORM (`drizzle-orm`)
- **Database Driver:** `mysql2`
- **Dev Tools:** `drizzle-kit` (untuk migrasi dan manajemen schema)

---

## 📋 Langkah-Langkah Implementasi (High-Level Checklist)

### 1. Inisialisasi Project Bun
- Jalankan inisialisasi project Bun pada direktori ini (`bun init` atau setup `package.json`).
- Pastikan konfigurasi `tsconfig.json` sudah terkonfigurasi dengan baik untuk TypeScript modern.

### 2. Instalasi Dependencies
- Install paket utama:
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- Install paket development:
  - `drizzle-kit`
  - `@types/bun` / `@types/node` (jika diperlukan)

### 3. Konfigurasi Environment Variables (`.env`)
- Buat file `.env` dan `.env.example` untuk menyimpan variabel koneksi database:
  - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (atau `DATABASE_URL`).

### 4. Setup Database Client & Drizzle ORM
- Buat file konfigurasi Drizzle (`drizzle.config.ts`) untuk mengatur lokasi schema dan dialect MySQL.
- Buat modul database client di folder `src/db/` (misal `index.ts`) untuk menginisialisasi koneksi `mysql2` dengan instance Drizzle.
- Buat contoh schema sederhana (misal tabel `users` di `src/db/schema.ts`) untuk keperluan pengujian awal.

### 5. Buat Entrypoint Server ElysiaJS
- Buat file utama server di `src/index.ts`.
- Inisialisasi instance Elysia app.
- Tambahkan endpoint basic health check (misal `GET /` atau `GET /health`) untuk memastikan server berjalan dengan baik.

### 6. Konfigurasi Scripts & Verifikasi
- Tambahkan script `dev` dan `start` pada `package.json` menggunakan perintah `bun run --watch src/index.ts`.
- Tambahkan script untuk migrasi Drizzle (`db:generate`, `db:push`, atau `db:studio`).
- Verifikasi bahwa aplikasi dapat berjalan tanpa error dan dapat merespons HTTP request.
