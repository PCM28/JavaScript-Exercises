const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulNd = document.createElement("ul");
const liNd = [apps.length];

//------------- First - part ---------------------
// liNd.innerHTML = apps[0];
// ulNd.appendChild(liNd);
// document.body.appendChild(ulNd);

//--------------Second - part---------------------
for (let i = 0; i < apps.length; i++) {
    liNd[i] = document.createElement("li");
    liNd[i].innerHTML = apps[i];
    ulNd.appendChild(liNd[i]);
}
//--------------Third - part---------------------
// for (let i = 0; i < apps.length; i++) {
//     liNd[i] = document.createElement("li");
//     liNd[i].innerHTML = apps[i];// Manera que agregarlo: innerHTML = "(Aquí el i) "; ya que lo lee como texto
//     ulNd.appendChild(liNd[i]);
// }

//--------------Fourth - part---------------------//Aquí usando el for...of, es posible, si es así como?
// for (let i = 0; i < apps.length; i++) {
//     liNd[i] = document.createElement("li");
//     liNd[i].innerHTML = apps[i];// Manera que agregarlo: innerHTML = "(Aquí el i) "; ya que lo lee como texto
//     ulNd.appendChild(liNd[i]);
// }

document.body.appendChild(ulNd);