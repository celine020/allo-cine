// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);

var target = document.getElementById('cardcine');

console.log(target);



for(i=0;i<moovies.length; i ++ ){
var card=  
`
<div class="col-md-6">
<img class="card-img" src= " `+ moovies[i].Poster + `" alt="Card image cap">
</div>
<div class="col-md-6">
    <p class="card-text"> ` + moovies[i].Title + `,<br>
                     `+ moovies[i].Year + ` <br>
                     `+ moovies[i].Genre + ` <br>
                     `+ moovies[i].Actors+ ` <br>
                     `+ moovies[i].Plot + ` <br>
                     </p>

</div>
`




target.innerHTML = target.innerHTML + card



}

