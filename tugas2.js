const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
];


function searchName (kataKunci, limit, cb) { 

    // untuk merubah katakunci jadi lowercase
    let keyword = kataKunci.toLowerCase()

    //fungsi filtering untuk jadi callback di fungsi filter (result)
    function filtering (el) { //parameter el untuk merepresentasi tiap elemen yang ada dalam name      
        let namaKecil = el.toLowerCase() //merubah elemen menjadi lowercase
        //namaKecil ini akan menampung nilai yang sudah dilowercase
        //Contoh : Abigail = abigail
        let kata = namaKecil.includes(keyword) //mengecek keyword true atau false
        //variabel kata menampung hasil dari elemen yang sudah dilowercase dalam variabel namaKecil
        //kemudian variabel nama kecil itu akan dicek apakah dia mengandung keyowrd yang kita cari
        // misal mencari keyword an , cek abigail apakah true atau false, dia false karena tidak mengandung an

        return (kata)
    }

    const result = name.filter(filtering) 
    const final = result.slice(0, limit) //memotong array dari index ke 0 sampai limit ditentukan

    cb (final) //menampung nilai yang sudah disaring
}

function printFinal(hasil) { //memanggil callback 
    console.log(hasil);
}

searchName('AN', 5, printFinal)