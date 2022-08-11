const characterUrl = 'https://www.breakingbadapi.com/api/characters?limit=10';
fetch(characterUrl).then(function(data){
    return data.json().then(function(project){
    let data1="";
    localStorage.setItem("testJSON", JSON.stringify(project));

    product_string=localStorage.getItem("testJSON");
    testJSON = JSON.parse(product_string);
    project.map(function(sri){
        sri.updatedName = `${sri.name} Sri Eshwar college`;
    });
    project.map(function(values){
        data1+=`<div class="container">
        <h1 class="name">
            Name : ${values.updatedName}
        </h1>
        <img  class="img" src=${values.img} alt="img">
        <p>
            Nickname : ${values.nickname}
        </p>
        <p class="status">
          Status : ${values.status}
        </p>
        <p class="birthday">
            D.O.B : ${values.birthday}
        </p>
        <p class="studies">
            College : 
        </p>
    </div>`;
    });
    document.getElementById("container").innerHTML=data1;
})
}).catch((error)=>{
    console.log(error);
})