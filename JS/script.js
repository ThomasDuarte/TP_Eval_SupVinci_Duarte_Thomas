window.onload = initialisation;
let sectionPrincipale = document.querySelector("section");
let mapJeux = new Map();
let mesJeux = new Map();

function initialisation() {
    //Récupérer l'élément HTML sectionPrincipale
    //this.sectionPrincipale = document.querySelector("section");
    if (sectionPrincipale) {
        throw new Error("Balise Section introuvable");
    }
    //Récupérer mon bouton valider
    const boutonValider = document.querySelector(".boutonValider");
    if (!boutonValider) {
        throw new Error("boutonValider introuvable");
    }
    //Et y ajouter un évènement avec onclick ou addEventListener
    boutonValider.addEventListener("click", afficherListeJeux);

    //Récupérer mon bouton favoris
    const boutonFavoris = document.querySelector(".boutonFavoris");
    if (!boutonFavoris) {
        throw new Error("boutonFavoris introuvable");
    }
    //Et y ajouter un évènement avec onclick ou addEventListener
    boutonFavoris.addEventListener("click", afficherListeFavoris);
    }

async function telechargerDonnees() {
    mapJeux.clear();
    //On récupère l'input barreRecherche
    const saisieBarreRecherche = document.querySelector(".barreRecherche").value;
    //On fait le fetch en utilisant l'url de l'api et en y insérant la recherche

    let urlApi = "https://www.giantbomb.com/api/games/?api_key=1b6fb650c9161a0081d213a2a2efa859fb367212&format=json&filter=name:";
    try{
        if(saisieBarreRecherche != null) {
            const urlRequete = urlApi + saisieBarreRecherche;
            const resultatListeJeux = await fetch(urlRequete);
            const jsonResultatListeJeux = await resultatListeJeux.json();

            //Le tableau des jeux (listeJeux) sera dans resultat.results
            const listeJeux = jsonResultatListeJeux.results;
            if (!listeJeux || !Array.isArray(listeJeux)) {
                throw new Error("Données réponse non conformes !");
            }
            listeJeux.forEach(jsonJeu =>{
                const jeu = new Jeu(jsonJeu);
                mapJeux.set(jeu.guId, jeu);
            });
/*  Commentaires
            //Le tableau des jeux (listeJeux) sera dans resultat.results
            const listeJeux = jsonResultatListeJeux.results;
            if (!listeJeux || !Array.isArray(listeJeux) || listeJeux.length === 0) {
                throw new Error("Données réponse non conformes !");
            }
            //Je créé un tableau pour accueillir les instances de Jeu
            const tableauPromiseJeux = [];
            //Je boucle sur resultat.results
            listeJeux.forEach(objListe=>{
                const promiseJeux = fetch(objListe.url);
                //J'ai une instance de Jeu, je la push dans mon tableau
                tableauPromiseJeux.push(promiseJeux);
            });
            //Tableau des promises jeux
            const jsonJeux = await Promise.all(tableauPromiseJeux);

            //Pour chaque jeu, je fais new Jeu(resultat.results[i])
            for (let i = 0; i < listeJeux.length; i++) {
                const jsonJeu = jsonJeux[i];
                const jeu = new Jeu(jsonJeu);
            }
            //J'apelle afficherListeJeux() en lui donnant mon tableau en paramètres
*/
            console.log(mapJeux);
            return mapJeux;
        }else{
            alert("Veuillez saisir le nom de jeux à rechercher");
            return null;
        }
    }catch (e) {
        console.error(e);
        alert("Erreur pendant le téléchargement des jeux");
    }
}

async function afficherListeJeux() {
    let sectionPrincipale = document.querySelector("section");
    //Je vide sectionPrincipale sectionPrincipale.innerHTML = "";
    sectionPrincipale.innerHTML = "";
    //Mettre Loader (Penser a le Styliser)
    const loader = document.createElement("div");
    loader.classList.add("loader");
    sectionPrincipale.innerHTML = "";
    sectionPrincipale.append(loader);

    const mapJeux = await telechargerDonnees();
    console.log(mapJeux);
    sectionPrincipale.innerHTML = "";
    const conteneur = document.createElement("div");
    conteneur.classList.add("conteneur");
    sectionPrincipale.append(conteneur);

    mapJeux.forEach(jeu =>{
        const apercuJeu = document.createElement("div");
        apercuJeu.classList.add("apercuJeu");
        apercuJeu.innerHTML = `
            <img src="${jeu.image}">
            <div class="plateformes"></div>
            <h3>${jeu.nom}</h3>
        `;
        //Récupérer mon bouton apercuJeu
        //Et y ajouter un évènement avec onclick ou addEventListener
        apercuJeu.addEventListener("click", () =>{
            afficherJeu(jeu);
        });
        conteneur.append(apercuJeu);
    });

    /*
    sectionPrincipale.innerHTML = "";
    //Je boucle sur tableauxJeux
    //Pour chaque jeu :
    //Je créé ma div apercuJeu
    const divApercuJeu = document.createElement("div");
    divApercuJeu.classList.add("apercuJeu");
    //Je détermine son innerHTML
    divApercuJeu.innerHTML = `
        <img src="${jeu.imageMiniature}">
        <div class="plateformes"></div>
        <h3>Hyperballoid Deluxe: Survival Pack</h3>        
    `;
    //Je défini un évènement click sur divApercuJeu, qui appellera afficherFicheJeu()
    //J'append dans sectionPrincipale

     */

}

function afficherJeu(jeu) {
    let sectionPrincipale = document.querySelector("section");
    //Je vide sectionPrincipale
    sectionPrincipale.innerHTML = "";
    //Je créé ma div ficheJeu
    const divFicheJeu = document.createElement("div");
    divFicheJeu.classList.add("ficheJeu");
    //Je détermine son innerHTML
    divFicheJeu.innerHTML = `
        <div class="premierePartieFiche">
                        <h2>${jeu.nom}</h2>
                        <button class="ajouterFavoris">Ajouter aux favoris</button>
                        <button class="retirerFavoris">Retirer des favoris</button>
                        <img src=${jeu.imageMiniature}>
                    </div>
                    <div class="deuxiemePartieFiche">
                        <div class="plateformes">
                            <p>PC</p>
                            <p>PC</p>
                            <p>PC</p>
                            <p>PC</p>
                            <p>+99</p>
                        </div>
                        <h3>${jeu.dateDeSortie}</h3>
                    </div>
                    <div class="descriptionCourte">
                        ${jeu.descriptionCourte}
                    </div>
                    <div class="descriptionComplete">
                        ${jeu.descriptionComplete}
                    </div>        
    `;

    const boutonAjouter = divFicheJeu.querySelector(".ajouterFavoris");
    const boutonRetirer = divFicheJeu.querySelector(".retirerFavoris");

    boutonAjouter.addEventListener("click", () =>{
        ajouterAMesFavoris(jeu);
    });

    boutonRetirer.addEventListener("click", () =>{
        retirerJeu(jeu);
    });

    sectionPrincipale.append(divFicheJeu);
    //J'append dans sectionPrincipale
}

function ajouterAMesFavoris(jeu) {
    mesJeux.set(jeu.guId, jeu);
    sauvegarderMesJeux();
}

function sauvegarderMesJeux() {
    const tableauMesJeux = Array.from(mesJeux.values());
    window.localStorage.setItem("mesJeux", JSON.stringify(tableauMesJeux));
}

function chargerMesJeux() {
    mesJeux = new Map();
    const json = window.localStorage.getItem("mesJeux");
    if (!json) {
        return mesJeux;
    }
    const tableauParse = JSON.parse(json);
    tableauParse.forEach(jeuObj =>{
        const jeuFavoris = new Jeu(jeuObj.fichierJson);
        mesJeux.set(jeuFavoris.guId, jeuFavoris);
    });
    return mesJeux;
}

function retirerJeu(monJeu) {
    mesJeux.delete(monJeu.guId);
    sauvegarderMesJeux();
}

function afficherListeFavoris(){

    let sectionPrincipale = document.querySelector("section");
    //Je vide sectionPrincipale sectionPrincipale.innerHTML = "";
    sectionPrincipale.innerHTML = "";
    //Mettre Loader (Penser a le Styliser)
    const loader = document.createElement("div");
    loader.classList.add("loader");
    sectionPrincipale.innerHTML = "";
    sectionPrincipale.append(loader);

    const mapJeux = chargerMesJeux();
    console.log(mapJeux);

    if(mapJeux.size > 0) {
        sectionPrincipale.innerHTML = "";
        const conteneur = document.createElement("div");
        conteneur.classList.add("conteneur");
        sectionPrincipale.append(conteneur);

        mapJeux.forEach(jeu => {
            const apercuJeu = document.createElement("div");
            apercuJeu.classList.add("apercuJeu");
            apercuJeu.innerHTML = `
            <img src="${jeu.image}">
            <div class="plateformes"></div>
            <h3>${jeu.nom}</h3>
        `;
            //Récupérer mon bouton apercuJeu
            //Et y ajouter un évènement avec onclick ou addEventListener
            apercuJeu.addEventListener("click", () => {
                afficherJeu(jeu);
            });
            conteneur.append(apercuJeu);
        });
    }else{
        sectionPrincipale.innerHTML=`
            <div style=" width: 100%; text-align: center">
            <h2 style="color: black"">Aucun jeu en favoris</h2>
            </div>
        `;
    }
}

class Jeu{
    nom = "";
    plateformes = [];
    nbPlateformes = -1;
    image = "";
    imageMiniature = "";
    dateDeSortie = "";
    descriptionCourte = "";
    descriptionComplete = "";
    misEnFavoris = false;
    guId = "";

    fichierJson;

    constructor(fichierJson) {

        this.fichierJson = fichierJson;
        this.nom = fichierJson.name;
        this.plateformes = fichierJson.platforms;
        //this.nbPlateformes = this.plateformes.length;
        this.image = fichierJson.image.original_url;
        this.imageMiniature = fichierJson.image.small_url;
        this.guId = fichierJson.guid;

        if (fichierJson.original_release_date !== null) {
            this.dateDeSortie = "Sortie : " + fichierJson.original_release_date;
        } else {
            this.dateDeSortie = "Sortie prévue : " + fichierJson.expected_release_year;
        }

        this.descriptionCourte = fichierJson.deck;
        this.descriptionComplete = fichierJson.description;
    }

    static setMisEnFavoris(){
        this.misEnFavoris = !this.misEnFavoris;
    }
}