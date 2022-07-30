function print(data) {
    const h1Nd = document.createElement("h1");
    h1Nd.innerHTML = data.name;

    const h2Nd = document.createElement("h2");
    h2Nd.innerHTML = data.age;

    const h3Nd = document.createElement("h3");
    h3Nd.innerHTML = data.count;

    document.body.appendChild(h1Nd);
    document.body.appendChild(h2Nd);
    document.body.appendChild(h3Nd);
}

fetch('https://api.agify.io?name=michael')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    print(data);
  });