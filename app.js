 (function (){
  console.log('sanity check');

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
      console.log(this.responseText); //typeof is a string
      console.log(response); //data parsed into readable text (JSON Object)
      console.log(response.name);

     var name = document.getElementById('person4HomeWorld');
      name.innerHTML = response.name; //JSON Object back to text
   }
     function findPlanet(id){
      oReq2.addEventListener('load', getPlanet);
      oReq2.open('GET', `http://swapi.co/api/planets/${id}`); //Darth Vader Homeworld
      oReq2.send();
   }
   findPlanet(1);

 })();