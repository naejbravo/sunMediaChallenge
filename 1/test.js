// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
// }

//SOLUCION
for (var i = 0; i < 5; i++) {
  let ii = i;
  setTimeout(function () {
    console.log(ii);
  }, ii * 1000);
}
