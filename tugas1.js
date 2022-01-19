/*=============================================*/
/* 10 METHOD BAWAAN JAVASCRIPT DAN CONTOHNYA */
/*=============================================*/

/*=============================================*/
/*             

1. METHODE REPLACE

Metode replace menggantikan nilai yang ditentukan dengan nilai lain dalam string:

Contoh :

*/

let text = "Please visit Microsoft!"; // nilai awal
let newText = text.replace("Microsoft", "W3Schools"); // penggunaan replace

console.log(newText) // hasil : Please visit W3Schools

/*=============================================*/



/*=============================================*/
/*             

2. METHODE toUpperCase

Methode toUpperCase untuk Mengubah ke Huruf Besar

Contoh :

*/

let text1 = "Hello World!"; // inisialisasi variabel pertama dengan nilai string hello world
let text2 = text1.toUpperCase(); // penggunaan toUpperCase (text2 adalah text 1 yang di Uppercase)
console.log(text2) // hasil : HELLO WORLD!

/*=============================================*/


/*=============================================*/
/*             

3. METHODE toLowerCase

Methode toLowerCase untuk Mengubah ke Huruf Kecil

Contoh :

*/

let lowerText = "Hello World!";       // String
let newLowerText = lowerText.toLowerCase(); // penggunaan toLowerCase (text2 adalah text 1 yang di Lowercase)

console.log(newLowerText);

/*=============================================*/



/*=============================================*/
/*             

4. METHODE CONCAT

Methode concat digunakan untuk menggabungkan dua atau lebih string

Contoh :

*/

let firstName = "Ahmad";
let lastName = "Zaky";
let fullName = firstName.concat(" ", lastName);

console.log(fullName);

/*=============================================*/



/*=============================================*/
/*             

4. METHODE TRIM

Methode trim digunakan untuk menghilangkan spasi putih dari kedua sisi string

Contoh :

*/

let trimText = "      Hallo Zaky      ";
let newTrimText = trimText.trim();

console.log(newTrimText);

/*=============================================*/




/*=============================================*/
/*             

5. METHODE JOIN

Methode Join merupakan fungsi untuk menggabungkan array ke dalam sebuah string

Contoh :

*/

const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]; 
console.log(buah.join(" dan ")) // hasil : Pisang dan Jeruk dan Apel dan Mangga

/*=============================================*/



/*=============================================*/
/*             

6. METHODE REVERSE

Methode Reverse digunakan untuk membalikan urutan dari elemen didalam array


Contoh :

*/

const buah1 = ["Pisang", "Jeruk", "Apel", "Mangga"]; 
buah.reverse(); // Penggunaan Methode Reverse
console.log(buah.toString()); // Hasil Mangga, Apel, Jeruk, Pisang


/*=============================================*/




/*=============================================*/
/*             

7. METHODE SLICE

Methode Slice digunakan untuk memotong array menjadi array baru


Contoh :

*/

let angka = [1,2,3,4,5,6,7,8]


let angka2 = angka.slice(2,4) //slice dari index ke 2 sampai 4
console.log(angka2.toString()); //hasil : 3,4

let angka3 = angka.slice(4) //slice dari index ke 4 sampai akhir
console.log(angka3.toString()); //hasil : 5,6,7,8

let angka4 = angka.slice(-2) //slice dari index ke 2 dari akhir array
console.log(angka4.toString()); //hasil : 7,8

let angka5 = angka.slice(-5,-2) //slice dari index ke 5 dari akhir array sampai index 2 dari akhir array
console.log(angka5.toString()); //hasil : 3,4

/*=============================================*/



/*=============================================*/
/*             

8. METHODE SPLICE

Methode Splice bisa dikatakan method serba bisa karena dapat digunakan untuk memotong array, menambahkan elemen array
bahkan melakukan keduanya sekaligus


Contoh :

*/

let abc = [1,2,3,4,5,6,7,8]
console.log(abc.toString()); // hasil : 1,2,3,4,5,6,7,8

//splice dari index ke 4
let xyz = abc.splice(4)

console.log(abc.toString()); // hasil : 1,2,3,4 
console.log(xyz.toString()); // hasil : 5,6,7,8

//SPLICE 2 ARGUMEN
//Jika memiliki 2 argumen maka argumen kedua berfungsi untuk menentukan seberapa banyak elemen yang akan dihapus
let x = [1,2,3,4,5,6,7,8]
console.log(x.toString());
let y = x.splice(5,3) // Menghapus 5 elemen dimulai dari index ke 4
console.log(x.toString()); // menampilkan elemen yang terhapus
console.log(y.toString()); // menampilkan sisa elemen yang ada

//SPLICE 3,4 ARGUMEN dan seterusnya
//Jika memiliki 3 argumen maka argumen kedua berfungsi untuk menentukan seberapa banyak elemen yang akan dihapus
let spliceText = [1,2,3,4,5,6,7,8]

//masukan elemen x,y,z mulai dari elemen ke 4
let newSpliceText = spliceText.splice(4,0,"x","y","z")
console.log(spliceText.toString());

/*=============================================*/



/*=============================================*/
/*             

9. METHODE POP

Metode POP digunakan untuk menghapus elemen terakhir dari array

Contoh :

*/

let popText = ["a","b","c"]

popText.pop();

console.log(popText.toString());

/*=============================================*/



/*=============================================*/
/*             

10. METHODE TO STRING

Metode toString digunakan untuk mengkonversi array menjadi string

Contoh :

*/

let arrayText = ["a","b","c","d","e"]
let toStringText = arrayText.toString();

console.log(toStringText);

/*=============================================*/
