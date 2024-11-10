# Dashboard IGC

GRI CMS is a Content Management System designed to manage educational content efficiently. It provides a user-friendly interface for creating, updating, and deleting courses. The system is built using modern web technologies including React for the frontend, Express.js for the backend, and MongoDB for the database.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

- **User Authentication**: Secure login and registration for users.
- **Responsive Design**: Works on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Axios, Typescript
- **Styling**: Tailwind CSS

## Getting Started

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/ottoedu-cms.git
   cd ottoedu-cms
   ```

## Folder structure

Berikut adalah struktur folder proyek Anda dalam bentuk teks yang dapat Anda salin:

```
DASHBOARD-SKELETON
│
├── config                  # Konfigurasi yang berhubungan dengan proyek
│   ├── tailwind            # Konfigurasi untuk Tailwind CSS
│   └── tsconfig            # Konfigurasi TypeScript
│
├── public                  # File yang akan diakses publik, seperti index.html
│
├── src                     # Source code utama
│   ├── assets              # Sumber daya statis seperti gambar, stylesheets, dan SVG
│   │   ├── images
│   │   ├── styles
│   │   └── svg
│   │
│   ├── domain              # Layer domain yang berisi logika bisnis
│   │   ├── entities        # Berisi model data atau entitas bisnis utama
│   │   └── useCases        # Impelementasi logika bisnis aplikasi. Misalnya, proses autentikasi
│   │
│   ├── infrastructure      # Layer infrastruktur untuk komunikasi dan konfigurasi
│   │   ├── api             # Komunikasi dengan backend/API
│   │   ├── redux           # Manajemen state dengan Redux
│   │   ├── services        # Layanan yang mendukung logika bisnis
│   │   └── lib             # Library atau utilitas yang digunakan di banyak tempat
│   │
│   └── presentation        # Layer presentasi, mengatur tampilan
│       ├── components      # Berisi komponen yang dapat digunakan kembali
│       ├── pages           # Komponen yang yang mewakili halaman
│       └── routes          # Pengaturan routing untuk aplikasi
│
├── tests                   # Folder tes
│   ├── e2e                 # Tes end-to-end
│   └── integration         # Tes integrasi
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

Berikut ini penjelasan kegunaan setiap folder dalam struktur yang Anda miliki:

#### 1. **config**

- **tailwind:** Berisi konfigurasi untuk Tailwind CSS, yang merupakan framework CSS utility-first.
- **tsconfig:** Berisi konfigurasi TypeScript untuk proyek Anda.

#### 2. **public**

- Biasanya digunakan untuk menyimpan file yang akan diakses secara publik seperti `index.html`, favicon, atau file manifest.

#### 3. **src**

- **assets:** Menyimpan sumber daya statis seperti gambar, stylesheets, dan SVG.
- **domain:**
  - **entities:** Mendefinisikan entitas bisnis dan model data utama yang digunakan di seluruh aplikasi.
  - **useCases:** Menyimpan logika bisnis aplikasi yang mengeksekusi operasi spesifik sesuai dengan kasus penggunaan aplikasi.
- **infrastructure:**
  - **api:** Berisi semua panggilan API, konfigurasi axios, atau setup lain untuk komunikasi dengan server atau layanan eksternal.
  - **redux:** Menangani state management, termasuk:
    - **actions:** Definisi action Redux untuk interaksi user.
    - **reducers:** Reducer Redux yang mengelola perubahan state berdasarkan actions.
    - **selectors:** Fungsi untuk mengambil bagian tertentu dari state.
    - **store.ts:** Konfigurasi store Redux.
  - **services:** Fungsi atau layanan yang tidak secara langsung terkait dengan API tapi mendukung logika bisnis seperti formatter, validators.
  - **lib:** Utility atau library helper yang dapat digunakan di mana saja dalam kode Anda.
- **presentation:**
  - **components:** Komponen UI yang dapat digunakan kembali.
  - **containers:** Komponen yang terhubung langsung dengan Redux atau konteks yang menyediakan data dan handlers ke komponen lain.
  - **pages:** Komponen yang mewakili halaman pada aplikasi Anda.
  - **routes:** Konfigurasi routing aplikasi Anda, menentukan path dan komponen yang terkait dengan path tersebut.

#### 4. **tests**

- **e2e:** Tes end-to-end yang mensimulasikan penggunaan aplikasi secara keseluruhan untuk memastikan semua integrasi berfungsi dengan baik.
- **integration:** Tes integrasi yang menguji kolaborasi antar modul atau layanan.
- **test**

Struktur ini membantu Anda menjaga kode yang bersih dan terpisah menurut fungsinya, memudahkan dalam pengembangan dan pemeliharaan kode.

## Clean Architecture

Keuntungan menggunakan pendekatan **Clean Architecture** pada proyek ReactJS antara lain:

1. **Separation of Concerns (Pemutusan Kekhawatiran)**  
   Setiap layer dalam Clean Architecture memiliki tanggung jawab yang jelas dan terpisah, seperti UI (user interface), domain, data, dan bisnis logic. Ini memudahkan pengelolaan dan perubahan kode tanpa mempengaruhi bagian lain secara langsung.

2. **Mudah Diuji (Testability)**  
   Karena lapisan domain yang independen, logika bisnis dapat dengan mudah diuji dengan unit testing tanpa harus melibatkan dependensi eksternal seperti API atau database. Hal ini mengarah pada pengembangan kode yang lebih aman dan dapat diandalkan.

3. **Scalability (Skalabilitas)**  
   Clean Architecture mempermudah skalabilitas proyek karena struktur yang modular dan terorganisir. Dengan pemisahan yang baik antara komponen-komponen, menambahkan fitur baru atau mengubah fungsionalitas yang ada menjadi lebih efisien.

4. **Maintainability (Kemudahan Pemeliharaan)**  
   Dengan struktur yang bersih dan jelas, Clean Architecture memudahkan pemeliharaan kode dalam jangka panjang. Pengembang baru dapat memahami proyek dengan lebih cepat, dan perubahan atau perbaikan bug dapat dilakukan dengan lebih mudah.

5. **Reusability (Dapat Digunakan Kembali)**  
   Komponen yang dibuat di lapisan domain atau use case bisa lebih mudah digunakan kembali di proyek lain karena tidak terikat langsung dengan framework atau implementasi khusus.

6. **Independensi Framework**  
   Pendekatan Clean Architecture menjaga agar kode di lapisan domain dan use case tidak bergantung pada framework tertentu, seperti React, yang memudahkan ketika harus melakukan migrasi ke teknologi lain.

7. **Fokus pada Bisnis Logika**  
   Clean Architecture memastikan logika bisnis tetap menjadi inti dari aplikasi. Hal ini memungkinkan pengembang untuk fokus pada solving masalah bisnis, tanpa terjebak dalam detail teknis implementasi.

Dengan menggunakan Clean Architecture pada proyek ReactJS, kamu akan mendapatkan struktur yang lebih terorganisir, modular, dan lebih mudah dipelihara seiring bertambahnya kompleksitas proyek.

## API ASSET

Handling several service such:

1. <a href="#post-login">Login</a>
2. <a href="#account-info">Account Info</a>

#### Post Login

- Method: `POST`
- Endpoint: `cms-otto-edu/v1/cms-login`
- Headers:
  ```json
  {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  ```
- Body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- Response:

  ```json
  {
    "meta": {
      "responseCode": "00" | "01",
      "responseMessage": "Success" | "Failed"
    },
    "data": {
      "resource": "account",
    }
  }
  ```

#### Get Key

- Method: `GET`
- Endpoint: `imkas-sdk/v1/accounts/keys`
- Headers:
  ```json
  {
    "Authorization" : ${BEARER_TOKEN},
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  ```
- Response:
  ```json
  {
      "code": "integer",
      "status": "string",
      "message": "string",
      "data": "array" | null
  }
  ```

#### Account Info

- Method: `GET`
- Endpoint: `imkas-sdk/v1/accounts/info?mobile_phone_number=${PHONE}`
- Headers:
  ```json
  {
    "Authorization" : ${BEARER_TOKEN},
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  ```
- Response:
  ```json
  {
      "code": "integer",
      "status": "string",
      "message": "string",
      "data": "array" | null
  }
  ```

#### Get OTP

- Method: `GET`
- Endpoint: `imkas-sdk/v1/accounts/${PHONE}/otp`
- Headers:
  ```json
  {
    "Authorization" : ${BEARER_TOKEN},
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  ```
- Response:
  ```json
  {
      "code": "integer",
      "status": "string",
      "message": "string",
      "data": "array" | null
  }
  ```
