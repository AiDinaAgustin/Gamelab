function gamelabIndonesia(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("gamelab indonesia");
      } else if (i % 3 === 0) {
        console.log("game");
      } else if (i % 5 === 0) {
        console.log("gamelab");
      } /* else{
        console.log(i); Aktifkan jika ingin menampilkan angka yang tidak termasuk kedalam kondisi diatas
      }*/
    }
  }
  
  // Uji coba program
  gamelabIndonesia(10);
  console.log("");
  gamelabIndonesia(25);
  console.log("");
  gamelabIndonesia(35);