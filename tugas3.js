const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {


//validasi type data
if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== 'number' || !Array.isArray(dataArray)) {
    console.log('Data yang dimasukan tidak sesuai');
    return 0;
}

  // jika nilai awal lebih besar dari pada nilai akhir
if (nilaiAwal > nilaiAkhir) {
    console.log('Nilai awal harus lebih kecil dari nilai akhir'); //tampil pesan ini
    return 0; //mengakhiri program
}

  // jika datarray kurang dari 5
if (dataArray.length <= 5) {
    console.log('Jumlah dataArray harus lebih dari 5'); //tampil pesan ini
    return 0; // mengakhiri program
}

  // mengambil data yang lebih dari nilai awal dan yg kurang dari nilai akhir
// const hasil = dataArray.filter(el => el >= nilaiAwal && el <= nilaiAkhir)

const hasil = dataArray.filter(function (el) {
  return el >= nilaiAwal && el <=nilaiAkhir
})


  // melakukan sortir terhadap array yang telah didapat
const final = hasil.sort((a, b) => a - b)

console.log(final);
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
