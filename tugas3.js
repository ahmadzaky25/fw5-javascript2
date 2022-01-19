// function seleksiNilai (nilaiAwal,nilaiAkhir,dataArray){
    
//     //cek validasi type data
//     if(typeof nilaiAwal != 'number' || typeof nilaiAkhir != 'number' || !Array.isArray(dataArray)){
//         console.log("Data tidak Sesuai");
//         return 0;
//     }


//     //cek nilai awal lebih kecil dari nilai akhir
//     if(nilaiAwal < nilaiAkhir) {
//         console.log("Nilai Awal harus lebih kecil dari Nilai Akhir");
//         return 0;
//     }

//     //cek dataArray harus lebih dari 5
//     if(dataArray.length > 5){
//         console.log("Data Array harus lebih dari 5");
//         return 0;
//     }


// }

// let data = seleksiNilai.filter(cekData);

// function cekData(hasil) {
//     return hasil >= nilaiAwal && hasil <= hasilAkhir
// }


// const hasilAkhir = cekData.sort()


// console.log(hasilAkhir);

// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);


function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    //cek Nilai Awal apakah lebih kecil dari nilai akhir
    if (nilaiAwal < nilaiAkhir) {
        //cek dataArray memiliki lebih dari 5 data
      if (dataArray.length > 5) {
        let res = [];
        dataArray.forEach((item) => {
          if (item >= nilaiAwal && item <= nilaiAkhir) {
            res.push(item);
          }
        });
        console.log(res.sort((a, b) => a - b));
      } else {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
      }
    } else {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
  }
  
//   seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(0, 50, [10, 100, 28, 12]);