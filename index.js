function tinggisiswa() {
  var dani = 167
  var santi = 170
  var dika = 175

  if (dika>dani){
    if(santi>dika){
    console.log("Santi yang paling tinggi dengan tinggi",santi);
    console.log(santi, dika, dani);
    }else{
    console.log("Dika yang paling tinggi dengan tinggi",dika);
    console.log(dika, santi, dani);
    }
  }else{
    console.log("Dani yang paling tinggi dengan tinggi",dani);
    console.log(dani, santi, dika);
  }
}

tinggisiswa()
