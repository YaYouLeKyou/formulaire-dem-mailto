/* 
## Les sélecteurs d'Element javascript
https://www.zonecss.fr/cours-css-javascript/les-selecteurs-javascript.html#BaNKaXB0000.codepen
## Balise HTML ou XHTML INPUT
http://www.aliasdmc.fr/balise/zone_html_input.html#BaNKaXB0000.codepen
## mailto valeurs possible
http://www.aliasdmc.fr/balise/zone_html_a.html#BaNKaXB0000.codepen
## Les formulaires - Cours Javascript
http://www.aliasdmc.fr/coursjavas/cours_javascript84.html#BaNKaXB0000.codepen
*/



document.addEventListener('DOMContentLoaded', function () {
  //au cas ou
  document.forms["mon_form"].addEventListener('reset', deforrmatText);
  document.forms["mon_form"].setAttribute("data-action", document.forms["mon_form"].action)
});

function sendMail(oEvent) {
  var oForm = oEvent.currentTarget.form,
    sMailto = oForm.getAttribute("data-action") + "?"
  sMailto += "body=" + encodeURIComponent(forrmatText(oForm));
  ["bcc", "subject"].forEach(function (sValue) {
    if (oForm[sValue]) {
      sMailto += "&" + sValue + "=" + encodeURIComponent(oForm[sValue].value);
      oForm[sValue].disabled = true;
    }
  })
  oForm.action = sMailto;
  oForm.submit()
  deforrmatText({ target: oForm });
}//fct

function forrmatText(oForm) {
  var sMessage = "",
    oRiadio = oForm.querySelector("[name='civilite']:checked"), sRadioVal = '';
  if (oRiadio != null) {
    sRadioVal = oRiadio.value;
  }//if
  sMessage += "Civilité : " + sRadioVal + "\n";
  radioDisabled(oForm.querySelectorAll("[name='civilite']"), true);
  sMessage += "Nom : " + oForm["nom"].value + "\n";
  oForm["nom"].disabled = true;
  sMessage += "Prénom : " + oForm["prenom"].value + "\n";
  oForm["prenom"].disabled = true;
  sMessage += "Email : " + oForm["email"].value + "\n";
  oForm["email"].disabled = true;
  sMessage += "Tel : " + oForm["tel"].value + "\n";
  oForm["tel"].disabled = true;
  sMessage += "Date de départ : " + oForm["date_arrivee"].value + "\n";
  oForm["date_arrivee"].disabled = true;
  sMessage += "Date d' arrivée : " + oForm["date_fin"].value + "\n";
  oForm["date_fin"].disabled = true;
  sMessage += "Type logement : " + oForm["type_logement_a_demenager"].value + "\n";
  oForm["type_logement_a_demenager"].disabled = true;
  sMessage += "Lieu de départ : " + oForm["depart"].value + "\n";
  oForm["depart"].disabled = true;
  sMessage += "Type logement depart : " + oForm["type_logement_depart"].value + "\n";
  oForm["type_logement_depart"].disabled = true;
  sMessage += "Lieu d' arrivée : " + oForm["arrive"].value + "\n";
  oForm["arrive"].disabled = true;
  sMessage += "Type logement arrivee : " + oForm["type_logement_arrivee"].value + "\n";
  oForm["type_logement_arrivee"].disabled = true;
  sMessage += "Cubage et listing :" + oForm["cubage"].value + "\n";
  oForm["cubage"].disabled = true;
  sMessage += "Infos complémentaires : " + oForm["infos"].value + "\n";
  oForm["infos"].disabled = true;

  return sMessage;
}//fct
/*
* Enleve les disabled
*/
function deforrmatText(oEvent) {
  var oForm = oEvent.target;
  oForm["bcc"].disabled = false;
  oForm["subject"].disabled = false;
  oForm["nom"].disabled = false;
  oForm["prenom"].disabled = false;
  oForm["tel"].disabled = false;
  oForm["email"].disabled = false;
  oForm["date_arrivee"].disabled = false;
  oForm["date_fin"].disabled = false;
  oForm["depart"].disabled = false;
  oForm["arrive"].disabled = false;
  oForm["cubage"].disabled = false;
  oForm["infos"].disabled = false;
  oForm["type_logement_a_demenager"].disabled = false;
  oForm["type_logement_depart"].disabled = false;
  oForm["type_logement_arrivee"].disabled = false;
  radioDisabled(oForm.querySelectorAll("[name='civilite']"), false);
  oForm.action = oForm.getAttribute("data-action");
}//fct

function radioDisabled(aEls, bVal) {
  console.log(aEls);
  if (aEls != null) {
    var iNb = aEls.length;
    for (var i = 0; i < iNb; i++) {
      aEls[i].disabled = bVal;
    }//for
  }//if
}//fct