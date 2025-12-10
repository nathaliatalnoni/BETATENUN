// ====== UTIL STORAGE (pakai _v2 supaya data lama tidak dipakai) ======
const STORAGE_KEYS = {
    USERS: "tenun_users_v2",
    TENUN: "tenun_items_v2",
    BOOKINGS: "tenun_bookings_v2",
    CURRENT_USER: "tenun_current_user_v2"
};

function loadData(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw);
    } catch (e) {
        console.error("Error load", key, e);
        return fallback;
    }
}

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentUser() {
    const id = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    if (!id) return null;
    const users = loadData(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === id) || null;
}

function setCurrentUser(idOrNull) {
    if (!idOrNull) {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } else {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, idOrNull);
    }
    renderAuthInfo();
}

// ====== INIT DUMMY DATA ======
function initDummyData() {
    let users = loadData(STORAGE_KEYS.USERS, null);
    let tenun = loadData(STORAGE_KEYS.TENUN, null);
    let bookings = loadData(STORAGE_KEYS.BOOKINGS, null);

    if (!users || users.length === 0) {
        users = [{
                id: "u1",
                nama: "Rumah Tenun Bakunase",
                email: "bakunase@tenun.test",
                password: "123456",
                role: "pemilik",
                dendaType: "sewa_lagi",
                alamat: "Jl. Delima No.59, Bakunase, Kec. Kota Raja, Kota Kupang, Nusa Tenggara Timur 85142",
                maps: "https://maps.app.goo.gl/a8d1JD1p14u7eGYm8",
                wa: "082266019897",
                waIntl: "6282266019897",
                ig: "@rumahtenun_bakunase",
                igUrl: "https://www.instagram.com/rumahtenun_bakunase",
                fotoProfil: "images/logo-u1.jpg"
            },
            {
                id: "u2",
                nama: "Selera Entete",
                email: "entete@tenun.test",
                password: "123456",
                role: "pemilik",
                dendaType: "flat",
                dendaFlat: 30000,
                alamat: "Jl. Soverdi No. 9 Oebufu, Kec. Oebobo, Kota Kupang, Nusa Tenggara Timur 85111",
                maps: "https://maps.app.goo.gl/H6hrmtHPd6KwjNKZ6",
                wa: "0821 3889 0176 / 0823 5947 7373",
                waIntl: "6282138890176",
                ig: "@selera_entete_artshop",
                igUrl: "https://www.instagram.com/selera_entete_artshop",
                fotoProfil: "images/logo-u2.jpg"
            },
            {
                id: "u3",
                nama: "Penyewa Demo",
                email: "penyewa@tenun.test",
                password: "123456",
                role: "penyewa"
            }
        ];
        saveData(STORAGE_KEYS.USERS, users);
    }

    if (!tenun || tenun.length === 0) {
        tenun = [{
                id: "t1",
                nama: "Tenun Alor",
                motif: "-",
                daerah: "Alor",
                warna: "Biru",
                hargaPerHari: 150000,
                ukuran: "All size",
                deskripsi: "-",
                foto: "images/alorbiru1u1.jpg",
                ownerId: "u1",
                aktif: true,
                reviews: []
            },
            {
                id: "t2",
                nama: "Tenun Rote Prada Emas",
                motif: "-",
                daerah: "Rote",
                warna: "Hitam-Merah",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/rotepradau1.jpg",
                ownerId: "u1",
                aktif: true,
                reviews: []
            },
            {
                id: "t4",
                nama: "Tenun Nagekeo",
                motif: "-",
                daerah: "Nagekeo",
                warna: "Oranye",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/nagekeou2.jpg",
                ownerId: "u2",
                aktif: true,
                reviews: []
            },
            {
                id: "t5",
                nama: "Tenun Mollo",
                motif: "-",
                daerah: "Mollo",
                warna: "Hitam",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/mollou2.jpg",
                ownerId: "u2",
                aktif: true,
                reviews: []
            },
            {
                id: "t6",
                nama: "Tenun Buna",
                motif: "-",
                daerah: "Timor",
                warna: "Merah",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/timorbunau2.jpg",
                ownerId: "u2",
                aktif: true,
                reviews: []
            },
            {
                id: "t7",
                nama: "Tenun Rote",
                motif: "-",
                daerah: "Rote",
                warna: "Hitam",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/roteu2.jpg",
                ownerId: "u2",
                aktif: true,
                reviews: []
            },
            {
                id: "t8",
                nama: "Tenun Bajawa",
                motif: "-",
                daerah: "Bajawa",
                warna: "Hitam",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/bajawau1.jpg",
                ownerId: "u1",
                aktif: true,
                reviews: []
            },
            {
                id: "t9",
                nama: "Tenun Bajawa",
                motif: "-",
                daerah: "Bajawa",
                warna: "Hitam",
                hargaPerHari: 150000,
                ukuran: "All Size",
                deskripsi: "-",
                foto: "images/bajawa2u1.jpg",
                ownerId: "u1",
                aktif: true,
                reviews: []
            }
        ];
        saveData(STORAGE_KEYS.TENUN, tenun);
    }

    if (!bookings || bookings.length === 0) {
        bookings = [];
        saveData(STORAGE_KEYS.BOOKINGS, bookings);
    }
}

// ====== VIEW HANDLING ======
const VIEW_IDS = {
    home: "view-home",
    tenunList: "view-tenun-list",
    tenunDetail: "view-tenun-detail",
    tokoDetail: "view-toko-detail",
    login: "view-login",
    register: "view-register",
    dashboard: "view-dashboard",
    about: "view-about"
};

function showView(key) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const id = VIEW_IDS[key];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
}

function parseHash() {
    const hash = window.location.hash || "#/";
    const parts = hash.replace("#", "").split("/").filter(Boolean);
    return parts;
}

function router() {
    const parts = parseHash();

    if (parts.length === 0 || parts[0] === "") {
        showView("home");
        return;
    }

    switch (parts[0]) {
        case "":
            showView("home");
            break;
        case "tenun":
            if (parts[1]) {
                const id = parts[1];
                showView("tenunDetail");
                renderTenunDetail(id);
            } else {
                showView("tenunList");
                renderTenunList();
            }
            break;
        case "toko":
            if (parts[1]) {
                const ownerId = parts[1];
                showView("tokoDetail");
                renderTokoDetail(ownerId);
            } else {
                showView("home");
            }
            break;
        case "login":
            showView("login");
            break;
        case "register":
            showView("register");
            break;
        case "dashboard":
            showView("dashboard");
            renderDashboard();
            break;
        case "about":
            showView("about");
            break;
        default:
            showView("home");
    }
}

window.addEventListener("hashchange", router);

// ====== AUTH INFO UI ======
function renderAuthInfo() {
    const container = document.getElementById("authInfo");
    const user = getCurrentUser();

    if (!user) {
        container.style.display = "none";
        return;
    }

    const roleLabel = user.role === "pemilik" ? "Pemilik" : "Penyewa";
    container.style.display = "block";
    container.innerHTML = `
    <div class="flex-between">
      <div class="auth-info">
        <span>Login sebagai <strong>${user.nama}</strong></span>
        <span class="badge badge-role">${roleLabel}</span>
        <span class="muted">${user.email}</span>
      </div>
      <div class="flex">
        <button class="secondary small" onclick="location.hash='#/dashboard'">Ke Dashboard</button>
        <button class="danger small" onclick="logout()">Logout</button>
      </div>
    </div>
  `;
}

function logout() {
    setCurrentUser(null);
    router();
}

// ====== TENUN LIST ======
function renderTenunList() {
    const listEl = document.getElementById("tenunListContainer");
    const tenun = loadData(STORAGE_KEYS.TENUN, []).filter(t => t.aktif !== false);
    const bookings = loadData(STORAGE_KEYS.BOOKINGS, []);

    const motifVal = document.getElementById("filterMotif").value.trim().toLowerCase();
    const daerahVal = document.getElementById("filterDaerah").value.trim().toLowerCase();
    const warnaVal = document.getElementElementById("filterWarna").value.trim().toLowerCase();
    const hargaMaxVal = Number(document.getElementById("filterHargaMax").value || 0);
    const tMulaiVal = document.getElementById("filterTanggalMulai").value;
    const tSelesaiVal = document.getElementById("filterTanggalSelesai").value;

    let filtered = tenun;

    if (motifVal) {
        filtered = filtered.filter(t => (t.motif || "").toLowerCase().includes(motifVal));
    }
    if (daerahVal) {
        filtered = filtered.filter(t => (t.daerah || "").toLowerCase().includes(daerahVal));
    }
    if (warnaVal) {
        filtered = filtered.filter(t => (t.warna || "").toLowerCase().includes(warnaVal));
    }
    if (hargaMaxVal > 0) {
        filtered = filtered.filter(t => t.hargaPerHari <= hargaMaxVal);
    }

    if (tMulaiVal && tSelesaiVal) {
        const start = new Date(tMulaiVal);
        const end = new Date(tSelesaiVal);
        filtered = filtered.filter(t => {
            const related = bookings.filter(
                b => b.tenunId === t.id && ["accepted", "sent"].includes(b.status)
            );
            for (const b of related) {
                const bs = new Date(b.startDate);
                const be = new Date(b.endDate);
                if (dateRangeOverlap(start, end, bs, be)) {
                    return false;
                }
            }
            return true;
        });
    }

    if (filtered.length === 0) {
        listEl.innerHTML = `<div class="card"><p>Tidak ada tenun yang cocok dengan filter.</p></div>`;
        return;
    }

    const users = loadData(STORAGE_KEYS.USERS, []);

    listEl.innerHTML = filtered
        .map(t => {
                const avgRating = hitungRatingRata2(t.reviews || []);
                const owner = users.find(u => u.id === t.ownerId);
                return `
        <div class="card">
          <img src="${t.foto}" alt="${t.nama}" class="tenun-img" />
          <h3>${t.nama}</h3>
          <p class="muted">${t.motif} • ${t.daerah} • Warna ${t.warna}</p>
          <p><strong>Rp ${formatRupiah(t.hargaPerHari)} / hari (set lengkap)</strong></p>
          <p class="muted">Tenun saja / aksesoris saja: Rp 75.000 / hari</p>
          <p class="muted">${t.ukuran}</p>
          <p class="muted">Toko: ${
            owner
              ? `<a href="#/toko/${owner.id}" class="highlight">${owner.nama}</a>`
              : "Tidak diketahui"
          }</p>
          ${
            avgRating
              ? `<p class="rating">★ ${avgRating.toFixed(1)} (${t.reviews.length} review)</p>`
              : `<p class="muted">Belum ada review</p>`
          }
          <button onclick="location.hash='#/tenun/${t.id}'">Lihat Detail</button>
        </div>
      `;
    })
    .join("");
}

// ====== DETAIL TENUN & BOOKING ======
function renderTenunDetail(id) {
  const container = document.getElementById("tenunDetailContainer");
  const tenun = loadData(STORAGE_KEYS.TENUN, []).find(t => t.id === id);

  if (!tenun) {
    container.innerHTML = `<div class="card"><p>Tenun tidak ditemukan.</p></div>`;
    return;
  }

  const users = loadData(STORAGE_KEYS.USERS, []);
  const owner = users.find(u => u.id === tenun.ownerId);
  const avgRating = hitungRatingRata2(tenun.reviews || []);

  container.innerHTML = `
    <div class="card">
      <button class="secondary small" onclick="window.history.back()">← Kembali</button>
      <div class="grid" style="margin-top:12px;align-items:flex-start;">
        <div>
          <img src="${tenun.foto}" alt="${tenun.nama}" class="tenun-img" />
          <p class="muted">
            Pemilik: <strong>${owner ? owner.nama : "Tidak diketahui"}</strong><br/>
            ${
              owner
                ? `<button class="small secondary" style="margin-top:4px;" onclick="location.hash='#/toko/${owner.id}'">Lihat profil toko</button>`
                : ""
            }
          </p>
          <p class="muted">${owner ? getDendaText(owner, tenun.hargaPerHari) : ""}</p>
          <p class="muted">Asal daerah: <strong>${tenun.daerah}</strong></p>
          <p class="muted">Motif: <strong>${tenun.motif}</strong></p>
          <p class="muted">Warna: <strong>${tenun.warna}</strong></p>
          <p class="muted">Ukuran: ${tenun.ukuran}</p>
          <p>
            <strong>Set lengkap: Rp ${formatRupiah(tenun.hargaPerHari)} / hari</strong><br/>
            <span class="muted">Tenun saja: Rp 75.000 / hari</span><br/>
            <span class="muted">Aksesoris saja: Rp 75.000 / hari</span>
          </p>
          <p style="margin-top:6px;">${tenun.deskripsi}</p>
          ${
            avgRating
              ? `<p class="rating" style="margin-top:6px;">★ ${avgRating.toFixed(
                  1
                )} rata-rata dari ${tenun.reviews.length} review</p>`
              : `<p class="muted" style="margin-top:6px;">Belum ada rating untuk tenun ini.</p>`
          }
        </div>
        <div>
          <h3>Booking / Sewa</h3>
          <p class="muted">
            Tanggal pengambilan & pengembalian tidak dihitung sebagai hari sewa (gratis).<br/>
            Biaya hanya dihitung dari tanggal mulai sampai tanggal selesai sewa.
          </p>
          <div id="bookingAlert"></div>
          <form id="bookingForm">
            <input type="hidden" id="bookingTenunId" value="${tenun.id}" />
            <label>Jenis sewa</label>
            <select id="bookingType" required>
              <option value="set">Set lengkap (Rp ${formatRupiah(
                tenun.hargaPerHari
              )} / hari)</option>
              <option value="tenun">Tenun saja (Rp 75.000 / hari)</option>
              <option value="aksesoris">Aksesoris saja (Rp 75.000 / hari)</option>
            </select>

            <label>Tanggal pengambilan</label>
            <input type="date" id="bookingPickup" required />

            <label>Tanggal mulai sewa</label>
            <input type="date" id="bookingStart" required />

            <label>Tanggal selesai sewa</label>
            <input type="date" id="bookingEnd" required />

            <label>Tanggal pengembalian</label>
            <input type="date" id="bookingReturn" required />

            <p id="bookingSummary" class="muted" style="margin-top:6px;">
              Total biaya akan dihitung otomatis.
            </p>
            <button type="submit">Sewa Sekarang</button>
          </form>

          <h3 style="margin-top:18px;">Review & Rating</h3>
          <div id="reviewList">
            ${
              tenun.reviews && tenun.reviews.length > 0
                ? tenun.reviews
                    .map(r => {
                      const u = users.find(x => x.id === r.userId);
                      return `
                        <div style="margin-bottom:8px;border-bottom:1px solid #e5e7eb;padding-bottom:6px;">
                          <span class="rating">★ ${r.rating}</span>
                          <span class="muted">oleh ${u ? u.nama : "Penyewa"}</span>
                          <p>${r.comment}</p>
                          <p class="muted">${r.date}</p>
                        </div>
                      `;
                    })
                    .join("")
                : `<p class="muted">Belum ada review.</p>`
            }
          </div>
        </div>
      </div>
    </div>
  `;

  const bookingForm = document.getElementById("bookingForm");
  const bookingPickup = document.getElementById("bookingPickup");
  const bookingStart = document.getElementById("bookingStart");
  const bookingEnd = document.getElementById("bookingEnd");
  const bookingReturn = document.getElementById("bookingReturn");
  const bookingSummary = document.getElementById("bookingSummary");
  const bookingAlert = document.getElementById("bookingAlert");
  const bookingType = document.getElementById("bookingType");

  function updateBookingSummary() {
    bookingAlert.innerHTML = "";
    const sPickup = bookingPickup.value;
    const s = bookingStart.value;
    const e = bookingEnd.value;
    const sReturn = bookingReturn.value;

    if (!s || !e) {
      bookingSummary.textContent = "Total biaya akan dihitung otomatis.";
      return;
    }

    const pickupDate = sPickup ? new Date(sPickup) : null;
    const start = new Date(s);
    const end = new Date(e);
    const returnDate = sReturn ? new Date(sReturn) : null;

    if (end < start) {
      bookingSummary.innerHTML =
        `<span class="muted">Tanggal selesai sewa tidak boleh sebelum tanggal mulai sewa.</span>`;
      return;
    }
    if (pickupDate && pickupDate > start) {
      bookingSummary.innerHTML =
        `<span class="muted">Tanggal pengambilan harus sebelum atau sama dengan tanggal mulai sewa.</span>`;
      return;
    }
    if (returnDate && returnDate < end) {
      bookingSummary.innerHTML =
        `<span class="muted">Tanggal pengembalian harus setelah atau sama dengan tanggal selesai sewa.</span>`;
      return;
    }
    if (pickupDate && returnDate && returnDate < pickupDate) {
      bookingSummary.innerHTML =
        `<span class="muted">Tanggal pengembalian tidak boleh sebelum tanggal pengambilan.</span>`;
      return;
    }

    const hari = hitungJumlahHari(start, end);
    const type = bookingType ? bookingType.value : "set";
    const perHari = type === "set" ? tenun.hargaPerHari : 75000;
    const total = hari * perHari;
    bookingSummary.innerHTML = `
      <span>
        Total hari sewa (mulai s/d selesai): <strong>${hari} hari</strong><br/>
        Perkiraan biaya: <strong>Rp ${formatRupiah(total)}</strong>
        (Rp ${formatRupiah(perHari)} / hari)<br/>
        Catatan: Tanggal pengambilan & pengembalian tidak dikenakan biaya.
      </span>
    `;
  }

  bookingPickup.addEventListener("change", updateBookingSummary);
  bookingStart.addEventListener("change", updateBookingSummary);
  bookingEnd.addEventListener("change", updateBookingSummary);
  bookingReturn.addEventListener("change", updateBookingSummary);
  if (bookingType) {
    bookingType.addEventListener("change", updateBookingSummary);
  }

  bookingForm.addEventListener("submit", e => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user || user.role !== "penyewa") {
      bookingAlert.innerHTML =
        `<div class="alert error">Silakan login sebagai <strong>penyewa</strong> terlebih dahulu.</div>`;
      return;
    }

    const sPickup = bookingPickup.value;
    const s = bookingStart.value;
    const eDate = bookingEnd.value;
    const sReturn = bookingReturn.value;
    const type = bookingType ? bookingType.value : "set";

    if (!sPickup || !s || !eDate || !sReturn) {
      bookingAlert.innerHTML =
        `<div class="alert error">Semua tanggal (pengambilan, mulai, selesai, pengembalian) harus diisi.</div>`;
      return;
    }

    const pickupDate = new Date(sPickup);
    const start = new Date(s);
    const end = new Date(eDate);
    const returnDate = new Date(sReturn);

    if (end < start) {
      bookingAlert.innerHTML =
        `<div class="alert error">Tanggal selesai sewa tidak boleh sebelum tanggal mulai sewa.</div>`;
      return;
    }
    if (pickupDate > start) {
      bookingAlert.innerHTML =
        `<div class="alert error">Tanggal pengambilan harus sebelum atau sama dengan tanggal mulai sewa.</div>`;
      return;
    }
    if (returnDate < end) {
      bookingAlert.innerHTML =
        `<div class="alert error">Tanggal pengembalian harus setelah atau sama dengan tanggal selesai sewa.</div>`;
      return;
    }
    if (returnDate < pickupDate) {
      bookingAlert.innerHTML =
        `<div class="alert error">Tanggal pengembalian tidak boleh sebelum tanggal pengambilan.</div>`;
      return;
    }

    const bookings = loadData(STORAGE_KEYS.BOOKINGS, []);
    const conflicts = bookings.filter(
      b =>
        b.tenunId === tenun.id &&
        ["accepted", "sent"].includes(b.status) &&
        dateRangeOverlap(start, end, new Date(b.startDate), new Date(b.endDate))
    );
    if (conflicts.length > 0) {
      bookingAlert.innerHTML =
        `<div class="alert error">Tanggal sewa tersebut tidak tersedia, sudah ada sewa lain.</div>`;
      return;
    }

    const hari = hitungJumlahHari(start, end);
    const perHari = type === "set" ? tenun.hargaPerHari : 75000;
    const total = hari * perHari;

    const newBooking = {
      id: "b" + Date.now(),
      tenunId: tenun.id,
      penyewaId: user.id,
      ownerId: tenun.ownerId,
      pickupDate: sPickup,
      startDate: s,
      endDate: eDate,
      returnDate: sReturn,
      hari,
      hargaPerHari: perHari,
      bookingType: type,
      total: total,
      status: "pending",
      paymentStatus: "unpaid",
      createdAt: new Date().toISOString(),
      messages: []
    };
    bookings.push(newBooking);
    saveData(STORAGE_KEYS.BOOKINGS, bookings);

    bookingAlert.innerHTML =
      `<div class="alert">Permintaan sewa dikirim. Status: <strong>Menunggu konfirmasi pemilik</strong>.</div>`;
    bookingForm.reset();
    bookingSummary.textContent = "Total biaya akan dihitung otomatis.";
  });
}

// ====== PROFIL TOKO ======
function renderTokoDetail(ownerId) {
  const container = document.getElementById("tokoDetailContainer");
  const users = loadData(STORAGE_KEYS.USERS, []);
  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  const owner = users.find(u => u.id === ownerId && u.role === "pemilik");

  if (!owner) {
    container.innerHTML = `<div class="card"><p>Toko tidak ditemukan.</p></div>`;
    return;
  }

  const produkToko = tenun.filter(t => t.ownerId === owner.id && t.aktif !== false);
  const dendaText = getDendaText(owner, 150000);
  const foto = owner.fotoProfil || "https://via.placeholder.com/150x150?text=Toko";

  const waNumberForLink = (owner.waIntl || owner.wa || "").toString().replace(/[^0-9]/g, "");
  const waLink = waNumberForLink
    ? `<a class="chip" href="https://wa.me/${waNumberForLink}" target="_blank">WhatsApp</a>`
    : "";

  const mapsLink = owner.maps
    ? `<a class="chip" href="${owner.maps}" target="_blank">Lihat di Maps</a>`
    : "";

  const igLink = owner.igUrl
    ? `<a class="chip" href="${owner.igUrl}" target="_blank">Instagram</a>`
    : owner.ig
    ? `<span class="chip">${owner.ig}</span>`
    : "";

  const produkHtml =
    produkToko.length > 0
      ? `
        <div class="grid" style="margin-top:10px;">
          ${produkToko
            .map(
              t => `
              <div class="card">
                <img src="${t.foto}" alt="${t.nama}" class="tenun-img" />
                <h3>${t.nama}</h3>
                <p class="muted">${t.motif} • ${t.daerah} • Warna ${t.warna}</p>
                <p><strong>Rp ${formatRupiah(t.hargaPerHari)} / hari (set lengkap)</strong></p>
                <p class="muted">Tenun saja / aksesoris saja: Rp 75.000 / hari</p>
                <button onclick="location.hash='#/tenun/${t.id}'">Lihat Detail</button>
              </div>
            `
            )
            .join("")}
        </div>
      `
      : `<p class="muted" style="margin-top:8px;">Belum ada produk tenun di toko ini.</p>`;

  container.innerHTML = `
    <div class="card">
      <button class="secondary small" onclick="window.history.back()">← Kembali</button>
      <div class="toko-header">
        <img src="${foto}" alt="${owner.nama}" class="toko-avatar" />
        <div>
          <h2>${owner.nama}</h2>
          ${owner.alamat ? `<p class="muted">Alamat: ${owner.alamat}</p>` : ""}
          <p class="muted">Email: ${owner.email}</p>
          ${owner.wa ? `<p class="muted">No. WA: ${owner.wa}</p>` : ""}
          ${owner.ig ? `<p class="muted">Instagram: ${owner.ig}</p>` : ""}
          <p class="muted">${dendaText}</p>
          <div class="toko-contact">
            ${waLink}
            ${mapsLink}
            ${igLink}
          </div>
        </div>
      </div>
      <h3 style="margin-top:10px;">Produk Tenun</h3>
      ${produkHtml}
    </div>
  `;
}

// ====== DASHBOARD SATU PINTU ======
function renderDashboard() {
  const subtitleEl = document.getElementById("dashboardSubtitle");
  const contentEl = document.getElementById("dashboardContent");
  const user = getCurrentUser();

  if (!user) {
    subtitleEl.textContent = "Belum login";
    contentEl.innerHTML = `<div class="alert error">Anda harus login untuk melihat dashboard.</div>`;
    return;
  }

  if (user.role === "penyewa") {
    subtitleEl.textContent = "Dashboard Penyewa";
    renderDashboardPenyewa(contentEl, user);
  } else if (user.role === "pemilik") {
    subtitleEl.textContent = "Dashboard Pemilik";
    renderDashboardPemilik(contentEl, user);
  } else {
    subtitleEl.textContent = "";
    contentEl.innerHTML = `<div class="alert error">Role tidak dikenal.</div>`;
  }
}

function renderDashboardPenyewa(container, user) {
  const bookings = loadData(STORAGE_KEYS.BOOKINGS, []).filter(b => b.penyewaId === user.id);
  const tenun = loadData(STORAGE_KEYS.TENUN, []);

  if (bookings.length === 0) {
    container.innerHTML = `<p class="muted">Belum ada riwayat sewa. <a href="#/tenun" class="highlight">Cari tenun sekarang</a>.</p>`;
    return;
  }

  const rows = bookings
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(b => {
      const t = tenun.find(x => x.id === b.tenunId);
      const statusLabel = mapStatusLabel(b.status);
      const pillClass = mapStatusClass(b.status);
      const canReview = b.status === "returned" && !sudahReviewTenun(t, user.id);
      const typeLabel = mapBookingTypeLabel(b.bookingType);
      const paymentLabel = mapPaymentStatusLabel(b.paymentStatus);
      const canPay = b.paymentStatus !== "paid" && b.status !== "rejected";

      return `
      <tr>
        <td>${t ? t.nama : "-"}<br/><span class="muted">${typeLabel}</span></td>
        <td>
          <div class="muted">Ambil: ${b.pickupDate || "-"}</div>
          <div>${b.startDate} s/d ${b.endDate}</div>
          <div class="muted">Kembali: ${b.returnDate || "-"}</div>
        </td>
        <td>Rp ${formatRupiah(b.total)}</td>
        <td><span class="status-pill ${pillClass}">${statusLabel}</span></td>
        <td>${paymentLabel}</td>
        <td>
          <button class="small secondary" onclick="location.hash='#/tenun/${b.tenunId}'">Detail</button>
          ${
            canReview
              ? `<button class="small" onclick="beriReview('${b.tenunId}')">Beri Review</button>`
              : ""
          }
          <button class="small secondary" onclick="openChat('${b.id}')">Chat</button>
          ${
            canPay
              ? `<button class="small" onclick="prosesPembayaranWeb('${b.id}')">Bayar Sekarang</button>`
              : ""
          }
        </td>
      </tr>
    `;
    })
    .join("");

  container.innerHTML = `
    <p class="muted">Sewaanku:</p>
    <table>
      <thead>
        <tr>
          <th>Tenun</th>
          <th>Tanggal</th>
          <th>Total</th>
          <th>Status</th>
          <th>Pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderDashboardPemilik(container, user) {
  const tenun = loadData(STORAGE_KEYS.TENUN, []).filter(t => t.ownerId === user.id);
  const allBookings = loadData(STORAGE_KEYS.BOOKINGS, []).filter(b => b.ownerId === user.id);
  const users = loadData(STORAGE_KEYS.USERS, []);

  const pendapatan = allBookings
    .filter(b => b.status === "returned")
    .reduce((sum, b) => sum + b.total, 0);

  const tenunRows =
    tenun.length > 0
      ? tenun
          .map(t => {
            const avgRating = hitungRatingRata2(t.reviews || []);
            return `
            <tr>
              <td>${t.nama}</td>
              <td>${t.motif}</td>
              <td>${t.daerah}</td>
              <td>Rp ${formatRupiah(t.hargaPerHari)}</td>
              <td>${t.aktif === false ? "Nonaktif" : "Aktif"}</td>
              <td>
                <button class="small secondary" onclick="toggleAktifTenun('${t.id}')">
                  ${t.aktif === false ? "Aktifkan" : "Nonaktifkan"}
                </button>
                <button class="small danger" onclick="hapusTenun('${t.id}')">Hapus</button>
              </td>
            </tr>
            <tr>
              <td colspan="6" class="muted">
                ${
                  avgRating
                    ? `Rating rata-rata: ★ ${avgRating.toFixed(1)} dari ${t.reviews.length} review`
                    : "Belum ada review"
                }
              </td>
            </tr>
          `;
          })
          .join("")
      : `<tr><td colspan="6" class="muted">Belum ada tenun. Tambahkan di bawah.</td></tr>`;

  const bookingRows =
    allBookings.length > 0
      ? allBookings
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(b => {
            const t = tenun.find(x => x.id === b.tenunId);
            const penyewa = users.find(u => u.id === b.penyewaId);
            const statusLabel = mapStatusLabel(b.status);
            const pillClass = mapStatusClass(b.status);
            const actionButtons = buildBookingOwnerActions(b.id, b.status);
            const typeLabel = mapBookingTypeLabel(b.bookingType);
            const paymentLabel = mapPaymentStatusLabel(b.paymentStatus);

            return `
            <tr>
              <td>${t ? t.nama : "-"}<br/><span class="muted">${typeLabel}</span></td>
              <td>
                <div class="muted">Ambil: ${b.pickupDate || "-"}</div>
                <div>${b.startDate} s/d ${b.endDate}</div>
                <div class="muted">Kembali: ${b.returnDate || "-"}</div>
              </td>
              <td>${penyewa ? penyewa.nama : "-"}</td>
              <td>Rp ${formatRupiah(b.total)}</td>
              <td><span class="status-pill ${pillClass}">${statusLabel}</span></td>
              <td>${paymentLabel}</td>
              <td>
                ${actionButtons}
                <button class="small secondary" onclick="openChat('${b.id}')">Chat</button>
              </td>
            </tr>
          `;
          })
          .join("")
      : `<tr><td colspan="7" class="muted">Belum ada permintaan sewa.</td></tr>`;

  container.innerHTML = `
    <div class="alert">
      Pendapatan selesai (status Dikembalikan): <strong>Rp ${formatRupiah(pendapatan)}</strong>
    </div>

    <h3>Tenun Saya</h3>
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>Motif</th>
          <th>Daerah</th>
          <th>Harga / hari</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>${tenunRows}</tbody>
    </table>

    <h3 style="margin-top:16px;">Tambah Tenun Baru</h3>
    <form id="formTambahTenun">
      <div class="grid">
        <div>
          <label>Nama tenun</label>
          <input type="text" id="tenunNama" required />
        </div>
        <div>
          <label>Motif</label>
          <input type="text" id="tenunMotif" required />
        </div>
        <div>
          <label>Daerah asal</label>
          <input type="text" id="tenunDaerah" required />
        </div>
        <div>
          <label>Warna dominan</label>
          <input type="text" id="tenunWarna" required />
        </div>
        <div>
          <label>Harga sewa per hari (set lengkap)</label>
          <input type="number" id="tenunHarga" required min="0" />
        </div>
        <div>
          <label>Upload foto tenun</label>
          <input type="file" id="tenunFotoFile" accept="image/*" />
          <p class="muted tiny-text">Jika tidak memilih foto, sistem akan memakai gambar default.</p>
        </div>
      </div>
      <label>Ukuran</label>
      <input
        type="text"
        id="tenunUkuran"
        placeholder="Contoh: panjang 2m, lebar 80cm"
      />
      <label>Deskripsi</label>
      <textarea id="tenunDeskripsi"></textarea>
      <button type="submit">Simpan Tenun</button>
    </form>

    <h3 style="margin-top:20px;">Permintaan Sewa</h3>
    <table>
      <thead>
        <tr>
          <th>Tenun</th>
          <th>Tanggal</th>
          <th>Penyewa</th>
          <th>Total</th>
          <th>Status</th>
          <th>Pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>${bookingRows}</tbody>
    </table>
  `;

  document.getElementById("formTambahTenun").addEventListener("submit", async e => {
    e.preventDefault();
    await tambahTenunBaru();
  });
}

function toggleAktifTenun(id) {
  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  const item = tenun.find(t => t.id === id);
  if (!item) return;
  item.aktif = item.aktif === false ? true : false;
  saveData(STORAGE_KEYS.TENUN, tenun);
  renderDashboard();
}

function hapusTenun(id) {
  if (!confirm("Yakin ingin menghapus tenun ini?")) return;
  let tenun = loadData(STORAGE_KEYS.TENUN, []);
  tenun = tenun.filter(t => t.id !== id);
  saveData(STORAGE_KEYS.TENUN, tenun);
  renderDashboard();
}

// helper konversi file -> dataURL (base64)
function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Gagal membaca file"));
    reader.readAsDataURL(file);
  });
}

async function tambahTenunBaru() {
  const user = getCurrentUser();
  if (!user || user.role !== "pemilik") return;

  const nama = document.getElementById("tenunNama").value.trim();
  const motif = document.getElementById("tenunMotif").value.trim();
  const daerah = document.getElementById("tenunDaerah").value.trim();
  const warna = document.getElementById("tenunWarna").value.trim();
  const harga = Number(document.getElementById("tenunHarga").value || 0);
  const ukuran = document.getElementById("tenunUkuran").value.trim();
  const deskripsi = document.getElementById("tenunDeskripsi").value.trim();
  const fileInput = document.getElementById("tenunFotoFile");

  if (!nama || !motif || !daerah || !warna || !harga) {
    alert("Nama, motif, daerah, warna, dan harga wajib diisi.");
    return;
  }

  let foto = "https://via.placeholder.com/400x250?text=Tenun";
  if (fileInput && fileInput.files && fileInput.files[0]) {
    try {
      foto = await fileToDataURL(fileInput.files[0]);
    } catch (err) {
      console.error("Gagal baca file foto", err);
      alert("Foto gagal dibaca, sistem akan memakai gambar default.");
    }
  }

  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  tenun.push({
    id: "t" + Date.now(),
    nama,
    motif,
    daerah,
    warna,
    hargaPerHari: harga,
    ukuran,
    deskripsi,
    foto,
    ownerId: user.id,
    aktif: true,
    reviews: []
  });
  saveData(STORAGE_KEYS.TENUN, tenun);
  alert("Tenun berhasil ditambahkan.");
  document.getElementById("formTambahTenun").reset();
  renderDashboard();
}

function buildBookingOwnerActions(bookingId, status) {
  if (status === "pending") {
    return `
      <button class="small" onclick="updateBookingStatus('${bookingId}','accepted')">Terima</button>
      <button class="small danger" onclick="updateBookingStatus('${bookingId}','rejected')">Tolak</button>
    `;
  }
  if (status === "accepted") {
    return `<button class="small" onclick="updateBookingStatus('${bookingId}','sent')">Tandai Dikirim</button>`;
  }
  if (status === "sent") {
    return `<button class="small" onclick="updateBookingStatus('${bookingId}','returned')">Tandai Dikembalikan (Selesai)</button>`;
  }
  return `<span class="muted">-</span>`;
}

function updateBookingStatus(bookingId, newStatus) {
  const bookings = loadData(STORAGE_KEYS.BOOKINGS, []);
  const b = bookings.find(x => x.id === bookingId);
  if (!b) return;
  b.status = newStatus;
  saveData(STORAGE_KEYS.BOOKINGS, bookings);
  renderDashboard();
}

// ====== REVIEW ======
function beriReview(tenunId) {
  const user = getCurrentUser();
  if (!user) return;

  const ratingStr = prompt("Beri rating (1-5):");
  if (!ratingStr) return;
  const rating = Number(ratingStr);
  if (Number.isNaN(rating) || rating < 1 || rating > 5) {
    alert("Rating harus antara 1 sampai 5.");
    return;
  }
  const comment = prompt("Tulis review singkat:");
  if (!comment) return;

  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  const item = tenun.find(t => t.id === tenunId);
  if (!item) return;

  if (!Array.isArray(item.reviews)) item.reviews = [];
  item.reviews.push({
    userId: user.id,
    rating,
    comment,
    date: new Date().toISOString().slice(0, 10)
  });

  saveData(STORAGE_KEYS.TENUN, tenun);
  alert("Terima kasih, review tersimpan.");
  router();
}

function sudahReviewTenun(tenunItem, userId) {
  if (!tenunItem || !Array.isArray(tenunItem.reviews)) return false;
  return tenunItem.reviews.some(r => r.userId === userId);
}

// ====== LOGIN & REGISTER HANDLER (register auto-login) ======
function initAuthForms() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginAlert = document.getElementById("loginAlert");
  const registerAlert = document.getElementById("registerAlert");

  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      loginAlert.innerHTML = "";
      const email = document.getElementById("loginEmail").value.trim().toLowerCase();
      const password = document.getElementById("loginPassword").value;
      const users = loadData(STORAGE_KEYS.USERS, []);
      const user = users.find(
        u => u.email.toLowerCase() === email && u.password === password
      );
      if (!user) {
        loginAlert.innerHTML = `<div class="alert error">Email atau password salah.</div>`;
        return;
      }
      setCurrentUser(user.id);
      loginForm.reset();
      location.hash = "#/dashboard";
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      registerAlert.innerHTML = "";
      const nama = document.getElementById("registerNama").value.trim();
      const email = document.getElementById("registerEmail").value.trim().toLowerCase();
      const password = document.getElementById("registerPassword").value;
      const role = document.getElementById("registerRole").value;

      if (!nama || !email || !password) {
        registerAlert.innerHTML = `<div class="alert error">Semua field wajib diisi.</div>`;
        return;
      }
      let users = loadData(STORAGE_KEYS.USERS, []);
      if (users.some(u => u.email.toLowerCase() === email)) {
        registerAlert.innerHTML = `<div class="alert error">Email sudah terdaftar.</div>`;
        return;
      }
      const newUser = {
        id: "u" + Date.now(),
        nama,
        email,
        password,
        role
      };
      users.push(newUser);
      saveData(STORAGE_KEYS.USERS, users);

      // AUTO LOGIN setelah register
      setCurrentUser(newUser.id);
      registerAlert.innerHTML = `<div class="alert">Akun berhasil dibuat. Anda sudah login otomatis.</div>`;
      registerForm.reset();
      location.hash = "#/dashboard";
    });
  }
}

// ====== FILTER FORM HANDLER ======
function initFilterForm() {
  const form = document.getElementById("filterForm");
  const resetBtn = document.getElementById("filterResetBtn");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      renderTenunList();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.getElementById("filterMotif").value = "";
      document.getElementById("filterDaerah").value = "";
      document.getElementById("filterWarna").value = "";
      document.getElementById("filterHargaMax").value = "";
      document.getElementById("filterTanggalMulai").value = "";
      document.getElementById("filterTanggalSelesai").value = "";
      renderTenunList();
    });
  }
}

// ====== CHAT & PEMBAYARAN ======
function mapBookingTypeLabel(type) {
  switch (type) {
    case "set":
      return "Set lengkap";
    case "aksesoris":
      return "Aksesoris saja";
    case "tenun":
    default:
      return "Tenun saja";
  }
}

function mapPaymentStatusLabel(status) {
  switch (status) {
    case "paid":
      return "Sudah dibayar (via web)";
    default:
      return "Belum dibayar";
  }
}

function prosesPembayaranWeb(bookingId) {
  const user = getCurrentUser();
  if (!user) return;
  const ok = confirm(
    "Lanjutkan pembayaran di web untuk booking ini?\n\nCatatan: Ini hanya simulasi, belum terhubung ke payment gateway nyata."
  );
  if (!ok) return;

  const bookings = loadData(STORAGE_KEYS.BOOKINGS, []);
  const b = bookings.find(x => x.id === bookingId);
  if (!b) return;
  b.paymentStatus = "paid";
  b.paidAt = new Date().toISOString();
  b.paymentChannel = "web-demo";
  saveData(STORAGE_KEYS.BOOKINGS, bookings);
  alert("Pembayaran berhasil dicatat di sistem.");
  renderDashboard();
}

function escapeHtml(str) {
  return (str || "").replace(/[&<>"']/g, ch => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#039;";
      default:
        return ch;
    }
  });
}

// =========== FLOATING CHAT ===========
function initFloatingChat() {
  const btn = document.createElement("button");
  btn.id = "floatingChatBtn";
  btn.textContent = "Chat";
  btn.style.position = "fixed";
  btn.style.right = "20px";
  btn.style.bottom = "20px";
  btn.style.zIndex = "999";
  btn.style.borderRadius = "999px";
  btn.style.padding = "10px 16px";
  btn.style.border = "none";
  btn.style.background =
    "linear-gradient(135deg, #2563eb, #4f46e5)";
  btn.style.color = "#fff";
  btn.style.boxShadow = "0 12px 25px rgba(15,23,42,0.45)";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "0.9rem";

  const panel = document.createElement("div");
  panel.id = "floatingChatPanel";
  panel.style.position = "fixed";
  panel.style.right = "20px";
  panel.style.bottom = "70px";
  panel.style.width = "320px";
  panel.style.maxHeight = "420px";
  panel.style.background = "#f9fafb";
  panel.style.borderRadius = "18px";
  panel.style.boxShadow = "0 20px 40px rgba(15,23,42,0.6)";
  panel.style.border = "1px solid rgba(148,163,184,0.5)";
  panel.style.display = "none";
  panel.style.zIndex = "998";
  panel.style.overflow = "hidden";
  panel.style.fontSize = "0.85rem";

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  btn.addEventListener("click", () => {
    if (panel.style.display === "none") {
      panel.style.display = "flex";
      panel.style.flexDirection = "column";
      renderChatHome();
    } else {
      panel.style.display = "none";
    }
  });
}

function renderChatHome() {
  const panel = document.getElementById("floatingChatPanel");
  const user = getCurrentUser();
  if (!panel) return;

  if (!user) {
    panel.innerHTML = `
      <div style="padding:10px 12px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
        <strong>Chat Booking</strong>
        <button onclick="document.getElementById('floatingChatPanel').style.display='none'" style="border:none;background:transparent;cursor:pointer;color:red;font-weight:bold;">✕</button>
      </div>
      <div style="padding:10px;">
        <p class="muted">Silakan login untuk menggunakan fitur chat.</p>
      </div>
    `;
    return;
  }

  const allBookings = loadData(STORAGE_KEYS.BOOKINGS, []).filter(
    b => b.penyewaId === user.id || b.ownerId === user.id
  );
  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  const users = loadData(STORAGE_KEYS.USERS, []);

  const listHtml =
    allBookings.length > 0
      ? allBookings
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(b => {
            const t = tenun.find(x => x.id === b.tenunId);
            const otherUserId = user.id === b.penyewaId ? b.ownerId : b.penyewaId;
            const otherUser = users.find(u => u.id === otherUserId);
            const typeLabel = mapBookingTypeLabel(b.bookingType);
            return `
              <div style="padding:8px 10px;border-bottom:1px solid #e5e7eb;cursor:pointer;" onclick="openChat('${b.id}')">
                <div><strong>${t ? t.nama : "-"}</strong></div>
                <div class="muted">${typeLabel}</div>
                <div class="muted">Dengan: ${otherUser ? otherUser.nama : "-"}</div>
              </div>
            `;
          })
          .join("")
      : `<div style="padding:10px;"><p class="muted">Belum ada booking untuk chat.</p></div>`;

  panel.innerHTML = `
    <div style="padding:10px 12px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
      <strong>Chat Booking</strong>
      <button onclick="document.getElementById('floatingChatPanel').style.display='none'" style="border:none;background:transparent;cursor:pointer;color:red;font-weight:bold;">✕</button>
    </div>
    <div style="flex:1;overflow-y:auto;">${listHtml}</div>
  `;
}

function openChat(bookingId) {
  const panel = document.getElementById("floatingChatPanel");
  const user = getCurrentUser();
  if (!panel) return;

  // pastikan panel terlihat
  panel.style.display = "flex";
  panel.style.flexDirection = "column";

  if (!user) {
    renderChatHome();
    return;
  }

  const bookings = loadData(STORAGE_KEYS.BOOKINGS, []);
  const b = bookings.find(x => x.id === bookingId);
  if (!b) {
    renderChatHome();
    return;
  }

  if (!Array.isArray(b.messages)) b.messages = [];
  saveData(STORAGE_KEYS.BOOKINGS, bookings);

  const tenun = loadData(STORAGE_KEYS.TENUN, []);
  const users = loadData(STORAGE_KEYS.USERS, []);
  const t = tenun.find(x => x.id === b.tenunId);
  const otherUserId = user.id === b.penyewaId ? b.ownerId : b.penyewaId;
  const otherUser = users.find(u => u.id === otherUserId);

  const title = `Booking: ${t ? t.nama : ""}`;
  const sub = otherUser ? `Chat dengan: ${otherUser.nama}` : "";

  const msgsHtml =
    b.messages.length > 0
      ? b.messages
          .slice()
          .sort((m1, m2) => new Date(m1.time || 0) - new Date(m2.time || 0))
          .map(m => {
            const isMe = m.senderId === user.id;
            return `
              <div style="
                margin:4px 0;
                display:flex;
                ${isMe ? "justify-content:flex-end;" : "justify-content:flex-start;"}
              ">
                <div style="
                  max-width:80%;
                  padding:6px 8px;
                  border-radius:10px;
                  font-size:0.8rem;
                  background:${isMe ? "#2563eb" : "#e5e7eb"};
                  color:${isMe ? "#fff" : "#111827"};
                ">
                  <div style="font-weight:600;font-size:0.75rem;margin-bottom:2px;">
                    ${isMe ? "Saya" : otherUser ? otherUser.nama : "Law. chat"}
                  </div>
                  <div>${escapeHtml(m.text)}</div>
                  <div style="font-size:0.7rem;opacity:0.8;margin-top:2px;">
                    ${m.time ? new Date(m.time).toLocaleString("id-ID") : ""}
                  </div>
                </div>
              </div>
            `;
          })
          .join("")
      : `<p class="muted" style="font-size:0.8rem;">Belum ada pesan. Mulai percakapan sekarang.</p>`;

  panel.innerHTML = `
    <div style="padding:8px 10px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-weight:600;font-size:0.9rem;">${title}</div>
        <div class="muted" style="font-size:0.78rem;">${sub}</div>
      </div>
      <div>
        <!-- X untuk kembali ke list booking chat -->
        <button
          onclick="renderChatHome()"
          style="border:none;background:transparent;cursor:pointer;font-size:0.9rem;color:red;font-weight:bold;"
        >✕</button>
      </div>
    </div>
    <div id="chatMessages" style="flex:1;overflow-y:auto;padding:6px 8px;">
      ${msgsHtml}
    </div>
    <form id="chatForm" style="padding:6px 8px;border-top:1px solid #e5e7eb;display:flex;gap:4px;">
      <input type="hidden" id="chatBookingId" value="${b.id}" />
      <textarea id="chatInput" placeholder="Tulis pesan..." required
        style="flex:1;resize:none;font-size:0.8rem;padding:6px 8px;border-radius:8px;border:1px solid #d1d5db;max-height:70px;"></textarea>
      <button type="submit" style="border:none;border-radius:999px;padding:6px 10px;background:#2563eb;color:#fff;font-size:0.8rem;cursor:pointer;">Kirim</button>
    </form>
  `;

  const chatForm = document.getElementById("chatForm");
  const chatMessages = document.getElementById("chatMessages");

  // scroll ke bawah
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatForm.addEventListener("submit", e => {
    e.preventDefault();
    const messageTextEl = document.getElementById("chatInput");
    const messageText = messageTextEl.value.trim();
    if (!messageText) return;

    const bookingsNow = loadData(STORAGE_KEYS.BOOKINGS, []);
    const bookingNow = bookingsNow.find(x => x.id === bookingId);
    if (!bookingNow) return;
    if (!Array.isArray(bookingNow.messages)) bookingNow.messages = [];
    bookingNow.messages.push({
      senderId: user.id,
      text: messageText,
      time: new Date().toISOString()
    });
    saveData(STORAGE_KEYS.BOOKINGS, bookingsNow);
    messageTextEl.value = "";
    openChat(bookingId);
  });
}

// ====== HELPER FUNCTIONS ======
function formatRupiah(num) {
  return Number(num || 0).toLocaleString("id-ID");
}

function hitungJumlahHari(startDate, endDate) {
  const ms = endDate.getTime() - startDate.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return days < 1 ? 1 : days;
}

function dateRangeOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart <= bEnd && bStart <= aEnd;
}

function mapStatusLabel(status) {
  switch (status) {
    case "pending":
      return "Menunggu Konfirmasi";
    case "accepted":
      return "Diterima (Siap diambil)";
    case "rejected":
      return "Ditolak";
    case "sent":
      return "Dipinjam";
    case "returned":
      return "Dikembalikan / Selesai";
    default:
      return status;
  }
}

function mapStatusClass(status) {
  switch (status) {
    case "pending":
      return "status-pending";
    case "accepted":
      return "status-accepted";
    case "rejected":
      return "status-rejected";
    case "sent":
      return "status-sent";
    case "returned":
      return "status-returned";
    default:
      return "";
  }
}

function hitungRatingRata2(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + Number(r.rating || 0), 0);
  return sum / reviews.length;
}

function getDendaText(owner, hargaSewa) {
  if (!owner) return "";
  if (owner.dendaType === "sewa_lagi") {
    return `Denda keterlambatan: Rp ${formatRupiah(
      hargaSewa
    )} (dianggap menyewa lagi 1 hari)`;
  }
  if (owner.dendaType === "flat") {
    return `Denda keterlambatan: Rp ${formatRupiah(
      owner.dendaFlat || 0
    )} per hari keterlambatan`;
  }
  return "Kebijakan denda diatur langsung oleh toko.";
}

// ====== INIT ======
document.addEventListener("DOMContentLoaded", () => {
  initDummyData();
  initAuthForms();
  initFilterForm();
  renderAuthInfo();
  router();
  initFloatingChat(); // tombol chat melayang
});