fetch('scripts/temples.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple = jsonObject;
    temple.forEach(displayTemples);
  });

  function displayTemples(temple) {  
    // populate grid
    let templeDiv = document.createElement('div');
    templeDiv.classList.add("temple")

    let rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    rowDiv.classList.add("half-content");


    // 1st div 
    let col1Div = document.createElement('div');
    col1Div.classList.add('col-half');
    col1Div.classList.add('p-15');

    let img = document.createElement('img');
    img.setAttribute('src', temple.temple_image);
    img.classList.add('img');
    col1Div.appendChild(img);

    rowDiv.appendChild(col1Div);

    // 2nd div 
    let col2Div = document.createElement('div');
    col2Div.classList.add('col-half');
    col2Div.classList.add('p-15');

    let h2 = document.createElement('h2');
    h2.innerText = temple.temple_name
    col2Div.appendChild(h2);
    
    let templeAddress = document.createElement('p');
    templeAddress.innerHTML = `Address:<br>${temple.temple_address}`;
    col2Div.appendChild(templeAddress);

    let templeNumber = document.createElement('p');
    templeNumber.innerHTML = `Number:<br>${temple.temple_number}`;
    col2Div.appendChild(templeNumber);

    let templeServices = document.createElement('p');
    templeServices.innerHTML = `Services:<br>${temple.temple_services}`;
    col2Div.appendChild(templeServices);


    let closuresP = document.createElement('p');
    closuresP.innerText = "Closures:";
    col2Div.appendChild(closuresP);

    let closures = temple.temple_closures;
    
    for(let i = 0; i < closures.length; i++) {
        console.log(closures[i])
        let ul1 = document.createElement('ul');
        let li1 = document.createElement('li');
        li1.innerText = closures[i].year;
        ul1.appendChild(li1);

        let closure = temple.temple_closures[i].closures;
        let ul2 = document.createElement('ul');

        for (let it = 0; it < closure.length; it++) {
            let closureLi = document.createElement('li');
            closureLi.innerText = closure[it];
            ul2.appendChild(closureLi);
        }
        ul1.appendChild(ul2);
        col2Div.appendChild(ul1);
    }

    

    // Append to row
    rowDiv.appendChild(col2Div);

    // add to temple div
    templeDiv.appendChild(rowDiv)

    
    let hr = document.createElement('hr');
    hr.classList.add('hr-40');

    document.querySelector("#temples").appendChild(templeDiv);
    document.querySelector("#temples").appendChild(hr);

  }