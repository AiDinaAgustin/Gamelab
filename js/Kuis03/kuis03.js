// Fungsi untuk menghasilkan data penawaran rumah secara acak
function generateData() {
    let data = [];

    for (let i = 0; i < 1200; i++) {
        let penawaran = {
            kawasan: { banjir: Math.random() < 0.2, longsor: Math.random() < 0.2, industri: Math.random() < 0.3 },
            luas: { tanah: Math.floor(Math.random() * 500) + 700, bangunan: Math.floor(Math.random() * 300) + 400 },
            fasilitas: { kolamRenang: Math.random() < 0.5, parkirLuas: Math.random() < 0.7, kebunBelakang: Math.random() < 0.6 }
        };

        data.push(penawaran);
    }

    return data;
}

// Fungsi untuk menyeleksi rumah sesuai kriteria
function seleksiRumah(penawaran) {
    // Cek kriteria kawasan
    if (penawaran.kawasan.banjir === false && penawaran.kawasan.longsor === false && penawaran.kawasan.industri === false) {
        // Cek kriteria luas tanah dan bangunan
        if (penawaran.luas.tanah >= 800 && penawaran.luas.bangunan >= 400) {
            // Cek kriteria fasilitas
            if (penawaran.fasilitas.kolamRenang && penawaran.fasilitas.parkirLuas && penawaran.fasilitas.kebunBelakang) {
                return true; // Memenuhi semua kriteria
            }
        }
    }

    return false; // Tidak memenuhi salah satu atau lebih kriteria
}

// Fungsi untuk menampilkan rumah yang memenuhi kriteria
function tampilkanRumahYangMemenuhiKriteria(data) {
    for (let i = 0; i < data.length; i++) {
        if (seleksiRumah(data[i])) {
            console.log(`Rumah ${i + 1}: Memenuhi semua kriteria.`);
        } else {
            console.log(`Rumah ${i + 1}: Tidak memenuhi kriteria.`);
        }
    }
}

// Generate data penawaran rumah secara acak
let penawaranRumah = generateData();

// Tampilkan seluruh data hasil generate 
// console.log(penawaranRumah);

// Panggil fungsi untuk menampilkan rumah yang memenuhi kriteria
tampilkanRumahYangMemenuhiKriteria(penawaranRumah);
