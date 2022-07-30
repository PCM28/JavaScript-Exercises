fetch('https://breakingbadapi.com/api/characters')
  .then((response) => {return response.json();})
  .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const pNd = document.createElement("p");
            const imgNd = document.createElement("img");//Como añadir src
            pNd.innerHTML = data[i].name;
            imgNd.setAttribute("src",data[i].img);
            document.body.appendChild(pNd);
            document.body.appendChild(imgNd);
        }

        //console.log(pNd);//No colocar entre comillar dentro del () por que lee un string no un valor 
        //console.log(data[0].name);//Lo mismo aquí que la línea 8
        
    ;});