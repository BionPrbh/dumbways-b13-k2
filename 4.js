

const hitunginAja = (voucherType, nominal) => {
  const rateAsik = 0.5
  const rateMantap = 0.3

  if (voucherType === "DumbWaysAsik" && nominal >= 20000) {
    
    let diskon = nominal*rateAsik
    if (diskon > 20000) { diskon = 20000 }
    let uangYangHarusDibayar = nominal - diskon
    let kembalian = nominal-uangYangHarusDibayar
    console.log("Uang yang harus dibayar: "+uangYangHarusDibayar);
    console.log("Diskon: "+diskon);
    console.log("Kembalian: "+kembalian);

  } else if (voucherType === "DumbWaysMantap" && nominal >= 50000) {
    
    let diskon = nominal*rateMantap
    if (diskon > 40000) { diskon = 40000 }
    let uangYangHarusDibayar = nominal - diskon
    let kembalian = nominal-uangYangHarusDibayar
    console.log("Uang yang harus dibayar: "+uangYangHarusDibayar);
    console.log("Diskon: "+diskon);
    console.log("Kembalian: "+kembalian);
  
  } else if (voucherType === "DumbWaysMantap" && nominal < 50000) {
    console.log("minimal pembelanjaan 50000");
  } else if (voucherType === "DumbWaysAsik" && nominal < 20000) {
    console.log("minimal pembelanjaan 20000");
  } else if (voucherType === undefined) {
    console.log("please input your voucher");
  }
}

console.log(hitunginAja("DumbWaysAsik", 50000));
console.log(hitunginAja("DumbWaysAsik", 60000));
console.log(hitunginAja("DumbWaysAsik", 20000));
console.log(hitunginAja("DumbWaysAsik", 30000));
console.log(hitunginAja("DumbWaysAsik", 15000));

console.log(hitunginAja("DumbWaysMantap", 210000));
console.log(hitunginAja("DumbWaysMantap", 40000));
console.log(hitunginAja("DumbWaysMantap", 60000));
console.log(hitunginAja("DumbWaysMantap", 85000));

