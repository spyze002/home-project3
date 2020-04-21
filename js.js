//for the first game
function ageInDays(){

    var birthyear = prompt('which year where you born?');
    var calculation = (2020- birthyear)* 355;
    var h1 = document.createElement('h1');
    var textAnswer= document.createTextNode ('you are'+calculation+ 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}

//cat generator game
function generateCat(){
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}