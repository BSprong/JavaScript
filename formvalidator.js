function validat() {
validateOntvanger();
validateOnderwerp();
validateTekst();
validateNaam();
validateEmail();
validateAdres();
validatePostcode();
validateWoonplaats();
}
//invoerveld bericht
function validateTekst()
{
if (document.getElementById('berichtText').value == ''){
alert ("typ text in Bericht");
}	
}

//invoerveld e-mail
function validateEmail()
{
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(document.getElementById('email').value)){         
		//alert("niet valide e-mail adres");   
		//return false;
    }
	
	else{   
		alert("niet valide e-mailadres"); 
    }	
}
//radio buttons ontvanger
function validateOntvanger()
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
 }
}

//radio buttons onderwerp
function validateOnderwerp()
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
// var aanvulling =false;
//if(aanvulling.value == '')
//{
	//alert("vul aanvulling in");
//}


//invoerveld naam
function validateNaam()
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
function validateAdres()
{
if (document.getElementById('adres').value == ''){
alert ("Geef uw adres op");
}	
}
//invoerveld postcode
function validatePostcode()
{
if (document.getElementById('postcode').value == ''){
alert ("Geef uw postcode op");
}	
}

//invoerveld woonplaats
function validateWoonplaats()
{
if (document.getElementById('woonplaats').value == ''){
alert ("Geef uw woonplaats op");
}	
}

