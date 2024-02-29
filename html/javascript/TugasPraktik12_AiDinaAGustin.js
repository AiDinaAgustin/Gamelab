function addNumbers(a, b) {
    // 1. Periksa tipe data input
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Input harus berupa angka!"); // Teknik try and catch
    }
  
    // 2. Hitung penjumlahan
    const sum = a + b;
  
    // 3. Tampilkan hasil
    return sum;
  }
  
  // 4. Jalankan fungsi dengan input yang berbeda
  try {
    console.log(addNumbers(1, 2)); // Output: 3
    console.log(addNumbers("1", 2)); // Error: Input harus berupa angka!
  } catch (error) {
    console.error(error.message); // Teknik try and catch
  }
  