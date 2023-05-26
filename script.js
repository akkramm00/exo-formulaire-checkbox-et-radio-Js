//déclaration des variables 

let checkbox = document.querySelector("#consentement")
let radio = document.getElementByName("btn-radio")
let select = document.getElementById("pays")
let message = documentquerySelector("#message")
// Une fois que la checkbox cochée,une fenetre pop-up indiqant"vous accéptez de recevoir la newqletter" apparait
// Dans le cas ou l'utilisateur ne souhaite pas recevoir de newsletter, il pourra sélectionner lle bouton radio "non"


checkbox.addEventListener('change' ,(e)=> {
    if(e.target.checked) {
        alert('Vous accéptez de recevoir la newsletter')
        for(item of radio) {
            if(item.value == oui) {
                item.checked = true
            }
        }
    }else{
        for(item of radio) {
            item.checked = (item.value === 'non')
        }
    }
});

// Affichons un message dans le spam #message indiquant le payssélectionné lorsque le choix du pays sera modifié:
// element.innerText permet d'écrire une chaine de caractères dans un élément HTML :

select.addEventListener('change', (e) => {
    message.innerText = `Vous avez indiqué étre en ${event.target.value}`
});
