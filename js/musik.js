// här är listan med låtar
var songs = ["Eminem: Darkness"," Eminem: Stan  <br> Queen: Bohemian Rhapsody"," Queen: Keep yourself alive"," <br> Michael Jackson: Thriller","4 non blonds: Whats up"," <br> Wiz Khalifa: See you again","Charlie Puth: We dont talk anymore"," <br> Prince: Purple Rain"," Elton John: Your song"," <br> Elton John: Tiny dancer"," Stevie Wonder: Pasttime paradise"," <br> Stevie Wonder: Superstition" ," Stevie Wonder: Master Blaster"];
// här är funktionen som söker
function search(){
    var finns = document.getElementById("inbox").value;
// här skriver den ut om låten finns
    console.log(finns)
    if (songs. includes(finns)){
    var resultat = document.getElementById('res');
    resultat.innerHTML = "Now Playing: " + finns; }

    // hör skriver den ut om låten inte finns 
    else {
        var y= document.getElementById('res');
        y.innerHTML='Hittade inte låten'
        
    }
    if (resultat.innerHTML==finns){
        document.getElementById('li').style.display="none"
        }
        else{
        document.getElementById('li').style.display="inline-block"
        }
    
}
var minlista= document.getElementById('li');
minlista.innerHTML=songs;


var h =document.getElementById('res');
console.log(h.innerHTML);
