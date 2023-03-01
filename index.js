// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(input) {
  // kodlar buraya 
  let outputArr = [];
  outputArr.push(input.split("/"));
  return outputArr[0][outputArr[0].length-1];
}
console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"))
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/ //const numbers = [3,5,7,8,9,10,11,12,28,55,6]; Test için yazıldı!!!

function ortalamaBul(numbers) {
  // kodlar buraya
  const toplam = numbers.reduce((total, sayilar) => total + sayilar,0);
  console.log(toplam); //toplam değeri test için!
  if (numbers.length>0) {return toplam/numbers.length;}
	else {return null;}
}
console.log(ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]));
/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/ //const numbers1 = [3,5,7,8,9,10,11];

function ortalamadanBuyukleriBul(numbers1, ortalamaBul) {
  // kodlar buraya
  const ortalama = ortalamaBul(numbers1);
  const numbers1Values = numbers1.filter((values) => {
    if (values >= ortalama) {return values;} 
  else {return null;}
  });
  return numbers1.length > 0 ? numbers1Values : null;
  /*Alternatif olarak filter()less solution()*/
  /*const newArr =[]; 
  const ortalama = ortalamaBul(numbers1);
  for (let i=0;i<numbers1.length;i++){
  if(numbers1[i]>=ortalama) {newArr.push(numbers1[i]);}
  }
  if (numbers1.length!==0) {return newArr;}
  else {return null;}*/
}
console.log(ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5], ortalamaBul));

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
