// Menentukan jumlah baris
const baris = 10;

// Deklarasi variabel untuk menyimpan string bintang
let polaBintang = ""; 

for (let i = 0; i <= 1; i++) {
    
    // Menambahkan bintang di baris
    for (let k = 1; k <= i; k++) {
      polaBintang += "*";
    }
  
    // Menambahkan baris baru
    polaBintang += "\n";
  }
// Looping untuk setiap baris
for (let i = 2; i <= baris; i++) {
    
  // Menambahkan spasi di awal baris
  for (let j = 1; j <= baris - i; j++) {
    polaBintang += " ";
  }

  // Menambahkan bintang di baris
  for (let k = 1; k <= i; k++) {
    polaBintang += "*";
  }

  // Menambahkan baris baru
  polaBintang += "\n";
}

// Menampilkan pola bintang di konsol
console.log(polaBintang);
