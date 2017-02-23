function validat(e) {
	var valideWoon = validateWoonplaats();
	var valideOntvang = validateOntvanger();
    var valideOnderwerp = validateOnderwerp();
	var valideTekst = validateTekst();
	var valideNaam = validateNaam();
	var valideEmail = validateEmail();
	var valideAdres = validateAdres();
	var validePostcode = validatePostcode();
//validateOntvanger();

if(valideWoon == false || valideOntvang == false || valideOnderwerp == false || valideTekst == false || valideNaam == false || valideEmail == false|| valideAdres == false || validePostcode == false){
	alert("Niet valide formulier");
stopEvent(e);	
}
}



//radio buttons ontvanger
function validateOntvanger(e)
{
 var items = document.getElementsByName('doel');

var gevonden =false; 
 for (var i=0; i < items.length; i++)
 {
	 if(items[i].checked == true)
	 {
	  gevonden = true;
	  break;
	}
	
 }
 
 if(gevonden == false){
  alert("Vink aan bij de Ontvanger");
  return false;
 }
 return true;
 
}

//radio buttons onderwerp
function validateOnderwerp(e)
{
 var items = document.getElementsByName('onderwerp_van_uw_bericht');

var gevonden =false; 
 for (var i=0; i < items.length; i++)
 {
	 if(items[i].checked == true)
	 {
	  gevonden = true;
	  break;
	  
	 }
 }
 
 if(gevonden == false){
  alert("Vink aan bij het Onderwerp");
 }
}

//invoerveld bericht
function validateTekst(e)
{
if (document.getElementById('berichtText').value == ''){
alert ("typ text in Bericht");
return false;
}	
}

//invoerveld e-mail
function validateEmail(e)
{
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(document.getElementById('email').value)){         
		//alert("niet valide e-mail adres");   
		
    }
	
	else{   
		alert("niet valide e-mailadres"); 
		return false;
    }	
}



// var aanvulling =false;
//if(aanvulling.value == '')
//{
	//alert("vul aanvulling in");
//}


//invoerveld naam
function validateNaam(e)
{
if (document.getElementById('naam').value == ''){
alert ("Geef uw naam op");
}	
}

//telefoon nummer
function limitText(limitField, limitCount, limitNum) {
//functienaam(variabele 1, 2 , 3)
	if (limitField.value.length >= limitNum) {
	//als de variabele limitfield groter dan of gelijk aan variable limitnum is 
		limitField.value = limitField.value.substring(0, limitNum);
	}
		limitCount.value = limitNum - limitField.value.length;
}
//invoerveld adres
function validateAdres(e)
{
if (document.getElementById('adres').value == ''){
alert ("Geef uw adres op");
}	
}
//invoerveld postcode
function validatePostcode(e)
{
if (document.getElementById('postcode').value == ''){
alert ("Geef uw postcode op");
}
}

//invoerveld woonplaats
function validateWoonplaats(e){

if (document.getElementById('woonplaats').value == ''){
alert ("Geef uw woonplaats op");
return false;
}	
return true;
}

//slideshow
var teller = 1;
	function volgendeFoto(){
	var foto = 'photo' + teller + '.jpg';
	//alert(foto);
	showID = setTimeout("volgendeFoto()", 2000);
	//showID = identificatievariabele
	document.img1.src=foto;
	
			teller++;
	if (teller >3){
		//als de variabele teller groter is dan 3 dan naar foto 1
	teller = 1;
	}
	}
	
	function stopEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;

    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
}