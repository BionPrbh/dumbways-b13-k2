const siswaKelasA = ['wahyu','jono','agus','roni','rohman','ujang']
let kehadiran = 'wahyuagusronirohman'

const absenSiswa = (kelas, absensi) => {
  for (let x = 0; x < kelas.length; x++) {
    let siswa = kelas[x]
    let result = "hadir"
    for (let y = 0; y < siswa.length; y++) {
      let status = absensi.indexOf(siswa[y])
      if (status === -1) {
        result = "tidak hadir"
      }  
    }
    console.log(siswa+" => "+result)
  }
} 


console.log(absenSiswa(siswaKelasA, kehadiran))