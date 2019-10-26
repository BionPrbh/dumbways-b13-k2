// X adalah total belanja pembelian barang 
// Y adalah jumlah uang yang dimasukkan ke dalam mesin 

let x = 220000
let y = 250000

const transactionProcessor = (tagihan, jumlahYangDibayarkan) => {
  let cashback = 0
  if (tagihan > 200000) {
    cashback = (tagihan*0.1)
  }
  let hargaSetelahPerhitungan = tagihan - cashback
  let kembalian = jumlahYangDibayarkan - hargaSetelahPerhitungan


  const daftarPecahan = [50000,20000,10000,5000]
  for (let n = 0; n < daftarPecahan.length; n++) {
    if (kembalian/daftarPecahan[n] >= 1) {
      let jumlahPecahan = Math.floor(kembalian/daftarPecahan[n])
      let nominalPecahan = daftarPecahan[n]
      console.log(jumlahPecahan+" X "+nominalPecahan)
      let pengurangKembalian = jumlahPecahan*nominalPecahan
      kembalian -= pengurangKembalian
    }
  }
  if (kembalian !== 0) {
    console.log(kembalian+" Disumbangkan karena tidak ada pecahan dibawah 5000");
  }
}

console.log(transactionProcessor(x, y));
