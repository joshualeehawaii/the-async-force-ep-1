 (function (){
  console.log('sanity check');

  //This is instruction 6
  var oReq = new XMLHttpRequest();

  function getName(){
   var response = JSON.parse(this.responseText);
   //console.log(this.responseText);
   //console.log(response);
   //console.log(response.name);

   var name = document.getElementById('person4Name');
   name.innerHTML = response.name;
  }

   function findName(id){
    oReq.addEventListener('load', getName);
    oReq.open('GET', `http://www.swapi.co/api/people/${id}`);
    oReq.send();
  }

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

   //boilerplate function to grab data
   function getData(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', callback);
    xhr.open(method, url);
    xhr.send();
  }

  var titleDisplay = document.getElementById('filmList');

  function getTitles(){
    var films = JSON.parse(this.responseText);
    //console.log('*** all the films =  ',films);
    //console.log('*** all the film objects =  ',films.results);
    //console.log('*** Object title @ 0 =  ',films.results[0].title);
    for (i = 0; i < films.results.length; i++){
      console.log('*** this is the title =  ', films.results[i].title);
      //console.log('*** this is the urls = ', films.results[i].planets);
      //console.log('*** this is the array of planets = ',arrayOfPlanets);

      var filmTitle = document.createElement('h2');
      filmTitle.classname = 'filmTitle';
      filmTitle.innerHTML = films.results[i].title;
      titleDisplay.appendChild(filmTitle);

      var planetName = document.createElement('ul');
      planetName.className = "planetName";
      titleDisplay.appendChild(planetName);

      var arrayOfPlanets = films.results[i].planets;
      for (var j = 0; j <arrayOfPlanets.length; j++){
        //console.log('*** this is arrayOfPlanets @ j = ', arrayOfPlanets[j]);
        //lock in planet name
        var planetListItem = document.createElement('li');
        planetName.appendChild(planetListItem);

        (function(myPlanetListItem){
          getData('GET', arrayOfPlanets[j], function(){
          var planets = JSON.parse(this.responseText);
          //console.log(planets);
          console.log('*** planet names = ', planets.name);
          var planetLists = document.createElement('h4');
          planetLists.className = 'planets';
          planetLists.innerHTML = planets.name;
          myPlanetListItem.appendChild(planetLists);
        });
       })(planetListItem);
      }
    }
  }

  findName(4);
  findSpecies(1);
  findNewName(14);
  findPlanet(1);
  getData('GET', 'http://swapi.co/api/films', getTitles); //this gets the titles and the planets

})();

