var myvar = "valor global";
 
(function() {
  console.log('Valor antes de función ' + myvar);
  let x = "XXX";
  console.log('Valor después de función ' + x);
})();