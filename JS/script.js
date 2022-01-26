window.onload = initialisation;
let sectionPrincipale;
function initialisation() {
    //Récupérer l'élément HTML sectionPrincipale

    //Récupérer mon bouton valider
    //Et y ajouter un évènement avec onclick ou addEventListener
    //En l'occurence, on va appeler la fonction effectuerRecherche
}

async function effectuerRecherche() {
    //On récupère l'input barreRecherche
    //On récupère la valeur avec input.value
    //On fait le fetch en utilisant l'url de l'api et en y insérant la recherche
    //https://www.giantbomb.com/api/games/?api_key=[CLE API]&format=json&filter=name:[RECHERCHE]
    //On récupère données avec response.json() (asynchrone) > variable resultat
    //Le tableau des jeux sera dans resultat.results
    //Je créé un tableau pour accueillir les instances de Jeu
    //Je boucle sur resultat.results
    //Pour chaque jeu, je fais new Jeu(resultat.results[i])
    //J'ai une instance de Jeu, je la push dans mon tableau
    //J'apelle afficherListeJeux() en lui donnant mon tableau en paramètres
}

function afficherListeJeux(tableauJeux) {
    //Je vide sectionPrincipale sectionPrincipale.innerHTML = "";
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
}

function afficherJeu(jeu) {
    //Je vide sectionPrincipale
    //Je créé ma div ficheJeu
    const divFicheJeu = document.createElement("div");
    divFicheJeu.classList.add("ficheJeu");
    //Je détermine son innerHTML
    divFicheJeu.innerHTML = `
        <div class="premierePartieFiche">
                        <h2>Nom du jeu</h2>
                        <button>Ajouter aux favoris</button>
                        <img src="https://www.giantbomb.com/a/uploads/scale_small/11/110673/3026329-gb_default-16_9.jpg">
                    </div>
                    <div class="deuxiemePartieFiche">
                        <div class="plateformes">
                            <p>PC</p>
                            <p>PC</p>
                            <p>PC</p>
                            <p>PC</p>
                            <p>+99</p>
                        </div>
                        <h3>Sortie : 1997</h3>
                    </div>
                    <div class="descriptionCourte">
                        <p>A top-down isometric helicopter shoot 'em up originally for the Sega Genesis, which was later ported to a variety of platforms. It is best known for its open-ended mission design and was followed by several sequels.</p>
                    </div>
                    <div class="descriptionComplete">
                        <h2>Overview</h2><p>Desert Strike: Return to the Gulf is an isometric helicopter shoot 'em up from Electronic Arts. The player is a fighter pilot who must take down mission-critical targets across a number of maps. The player is free to pursue these missions in any order, and must also keep an eye on the fuel, damage, and ammo gauges.</p><p>Desert Strike is the first of the prolific <a href=\"/strike-series/3025-143/\" data-ref-id=\"3025-143\">Strike</a> series, and was followed with <a href=\"/jungle-strike/3030-2180/\" data-ref-id=\"3030-2180\">Jungle Strike</a> and <a href=\"/urban-strike/3030-9336/\" data-ref-id=\"3030-9336\">Urban Strike</a> on the Genesis. Two more games, <a href=\"/soviet-strike/3030-2422/\" data-ref-id=\"3030-2422\">Soviet Strike</a> and <a href=\"/nuclear-strike/3030-11731/\" data-ref-id=\"3030-11731\">Nuclear Strike</a>, were released later for 32-bit systems.</p><h2>Story</h2><p>A year after the Gulf War, General Ibn Kilbaba takes over a small <a href=\"/unnamed-middle-eastern-location/3035-179/\" data-ref-id=\"3035-179\">Arab emirate</a> and plans to start World War III. Using an <a href=\"/ah-64-apache/3055-2463/\" data-ref-id=\"3055-2463\">AH-64 Apache</a>, the player must open the way for ground troops and finally take on the \"Madman\" himself.</p><h2>Gameplay</h2><p>The game is played from an isometric perspective in open levels that allow free movement in all directions by scrolling the screen with the movement of the helicopter. Each level consists of many varying objectives that range anywhere from destroying enemy bases and vehicles to capturing enemy troops or rescuing friendly ones. While bases and vehicles are simply destroyed, both friendly and enemy troops must be taken back to base for extraction. The AH-64 Apache has limited cargo space, so multiple trips to and from the base may be necessary. These objectives aren't always linear, and can often be tackled in whatever order the player chooses. This combination of free movement and non-linear structure separated Desert Strike from many of the other contemporary shooters.</p><p>There are three weapons of varying strength and usefulness available to the AH-64 Apache: machine guns, hydra missiles, and hellfire missiles, which increase in strength respectively. Each of these weapons has a limited number of ammo which can only be replenished by picking up ammo crates on the mission or by resupplying back at the base. Similarly, the AH-64 Apache only has a limited amount of fuel that will drain slowly over the course of each level. If the fuel runs out, the helicopter crashes and the player loses a life. Refueling works exactly the same as restocking ammo.</p><p>Lives are lost when either the AH-64 Apache takes too much damage and is destroyed, or when it runs out of fuel. After three lives have been lost, the game is over. Due to the nature of the game's freedom, each level requires a certain amount of planning and strategy in order to complete all of the objectives while still having enough fuel, ammo, and health to survive.</p><h2>Ports</h2><p>Due to its popularity on the <a href=\"/sega-genesis/3055-4659/\" data-ref-id=\"3055-4659\">Sega Genesis</a> in 1992, the game was then ported to the <a href=\"/amiga/3045-1/\" data-ref-id=\"3045-1\">Amiga</a>, <a href=\"/sega-master-system/3045-8/\" data-ref-id=\"3045-8\">Master System</a>, and <a href=\"/snes/3045-9/\" data-ref-id=\"3045-9\">SNES</a> in the same year. Two years later in 1994, it was released on the <a href=\"/pc/3045-94/\" data-ref-id=\"3045-94\">PC</a>. It was also ported to most handheld systems such as the <a href=\"/lynx/3045-7/\" data-ref-id=\"3045-7\">Lynx</a> in 1993, <a href=\"/game-gear/3045-5/\" data-ref-id=\"3045-5\">Game Gear</a> in 1994, <a href=\"/game-boy/3045-3/\" data-ref-id=\"3045-3\">Game Boy</a> in 1995, <a href=\"/game-boy-advance/3045-4/\" data-ref-id=\"3045-4\">Game Boy Advance</a> in 2002, and finally the <a href=\"/psp/3045-18/\" data-ref-id=\"3045-18\">PSP</a> in 2006 as part of <a href=\"/ea-replay/3030-10965/\" data-ref-id=\"3030-10965\">EA Replay</a>.</p>
                    </div>        
    `;
    //J'append dans sectionPrincipale
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

    fichierJson;

    constructor(fichierJson) {

        this.nom = fichierJson.name;
        this.plateformes = fichierJson.platforms;
        this.nbPlateformes = this.plateformes.length;
        this.image = fichierJson.image.original_url;
        this.imageMiniature = fichierJson.image.small_url;

        if (fichierJson.original_release_date !== null) {
            this.dateDeSortie = fichierJson.original_release_date;
        } else {
            this.dateDeSortie = fichierJson.expected_release_year;
        }

        this.descriptionCourte = fichierJson.deck;
        this.descriptionComplete = fichierJson.description;
    }

    static setMisEnFavoris(){
        this.misEnFavoris = !this.misEnFavoris;
    }
}