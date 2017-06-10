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

   // function buildList(){
    // var response = JSON.parse(this.responseText);
    // console.log('***this is response = ',response);
    // console.log('***this is a response.title = ',response.title);

     //this the getPlanets function
     // function getPlanets(){
      // var planets = JSON.parse(this.responseText);
      // console.log('***this is planets.name = ',planets.name);
     // }

     //for loop to pull the url of the planets
      // console.log('***this is response.planets (url) = ',response.planets);
      // for (var i = 0; i < response.planets.length; i++){
        // var planets = new XMLHttpRequest();
        // planets.addEventListener('load', getPlanets);
        // planets.open('GET', response.planets[i]);
        // console.log('***this is response.planets[i] = ', response.planets[i]);
        // planets.send();
     // }
   // }



   function getData(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', callback);
    xhr.open(method, url);
    xhr.send();
    }

  function getTitles(){
    var films = JSON.parse(this.responseText);
    //console.log('*** all the films =  ',films);
    //console.log('*** all the film objects =  ',films.results);
    //console.log('*** Object title @ 0 =  ',films.results[0].title);
    for (i = 0; i < films.results.length; i++){
      console.log('*** this is the title =  ', films.results[i].title);
      //console.log('*** this is the urls = ', films.results[i].planets);
      var arrayOfPlanets = films.results[i].planets;
      //console.log('*** this is the array of planets = ',arrayOfPlanets);
        for (var j = 0; j <arrayOfPlanets.length; j++){
          //console.log('*** this is arrayOfPlanets @ j = ', arrayOfPlanets[j]);
          getData('GET', arrayOfPlanets[j], getPlanets);
        }

   }
  }

  function getPlanets(){
    var planets = JSON.parse(this.responseText);
    //console.log(planets);
    console.log(planets.name);
  }





  getData('GET', 'http://swapi.co/api/films', getTitles);
  })();


/*function xhr(method, url, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener('load', callback);
  request.open(method, url)
  request.send()
}


xhr('GET', 'http://swapi.co/api/films', getFilms)

function getFilms() {
  var films = this.responseText;
  for (var i = 0; i < films.length) {
    xhr('GET', 'aosfdhpasiodfhaf${films.whatever}', getIndividualFilm)
  }
}


getIndividualFilm() {
  indivdiual film = this.responseText
}

*/

