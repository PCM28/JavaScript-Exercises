const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
 var valores = ages.filter(function (age) {
     if(age>18) return age;
 });
 console.log(valores);