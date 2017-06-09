 (function (){
  console.log('sanity check');

  //This is instruction 6
   var oReq = new XMLHttpRequest();

    function getName(){
     var response = JSON.parse(this.responseText);
     console.log(this.responseText); //typeof is a string
     console.log(response); //data parsed into readable text (JSON Object)
     console.log(response.name);

     var name = document.getElementById('person4Name');
     name.innerHTML = response.name; //JSON Object back to text
  }
   function findName(id){
    oReq.addEventListener('load', getName);
    oReq.open('GET', `http://www.swapi.co/api/people/${id}`); //person 4 is Darth Vader
    oReq.send();
  }
  findName(4);

  var oReq2 = new XMLHttpRequest();

    function getPlanet(){
      var response = JSON.parse(this.responseText);

     var name = document.getElementById('person4HomeWorld');
      name.innerHTML = response.name;
   }
     function findPlanet(id){
      oReq2.addEventListener('load', getPlanet);
      oReq2.open('GET', `http://swapi.co/api/planets/${id}`);
      oReq2.send();
   }
   findPlanet(1);

   //This is instruction 7
   var oReq3 = new XMLHttpRequest();

    function getNewName(){
     var response = JSON.parse(this.responseText);

     var name = document.getElementById('person14Name');
     name.innerHTML = response.name;
  }
   function findNewName(id){
    oReq3.addEventListener('load', getNewName);
    oReq3.open('GET', `http://www.swapi.co/api/people/${id}`);
    oReq3.send();
  }
  findNewName(14);

  var oReq4 = new XMLHttpRequest();

    function getSpecies(){
      var response = JSON.parse(this.responseText);

     var name = document.getElementById('person14Species');
      name.innerHTML = response.name;
   }
     function findSpecies(id){
      oReq4.addEventListener('load', getSpecies);
      oReq4.open('GET', `http://swapi.co/api/species/${id}`);
      oReq4.send();
   }
   findSpecies(1);

   //This is instruction 8

   var oReq5 = new XMLHttpRequest();

    function getFilms(){
     var response = JSON.parse(this.responseText);

     var name = document.getElementById('person14Name');
     name.innerHTML = response.name;
  }
   function findFilms(id){
    oReq5.addEventListener('load', getFilms);
    oReq5.open('GET', `http://www.swapi.co/api/people/${id}`);
    oReq5.send();
  }
  findFilms(14);

 })();