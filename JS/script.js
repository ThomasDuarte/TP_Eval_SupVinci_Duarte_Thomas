
export default class Jeux{
    nom = "";
    nbPlateformes = -1;
    plateformes = [];
    image = "";
    imageMiniature = "";
    dateDeSortie = "";
    descriptionCourte = "";
    descriptionComplete = "";
    misEnFavoris = false;

    catalogueJson;

    constructor(fichierJson) {
        this.catalogueJson = fichierJson;

        this.nom = fichierJson.name;
    }

    static setMisEnFavoris(){
        this.misEnFavoris = !this.misEnFavoris;
    }
}