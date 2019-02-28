class Caller {


    constructor() {
        // Base api call url
        this.BASE_URL = "http://localhost:8000";

        // Base api call prefixes
        this.prefix = {
            service : "service/Service/",
            crud : "manage/CRUD/"
        };

        // urls
        this.urls = {
            "onlineTraining"  : this.BASE_URL+this.prefix.service+"all/formation_en_ligne",
            "allSchools"  : this.BASE_URL+this.prefix.service+"all/ecole",
            "allWays"  : this.BASE_URL+this.prefix.service+"all/chemin",
            "allStories"  : this.BASE_URL+this.prefix.service+"all/success_story",
            "allDomains"  : this.BASE_URL+this.prefix.service+"all/domaine",
            "allUsers"  : this.BASE_URL+this.prefix.service+"all/user",
            
            "addOnlineTraining"  : this.BASE_URL+this.prefix.crud+"addTo/formation_en_ligne",
            "addSchools"  : this.BASE_URL+this.prefix.service+"addTo/ecole",
            "addWays"  : this.BASE_URL+this.prefix.service+"addTo/chemin",
            "addStories"  : this.BASE_URL+this.prefix.service+"addTo/success_story",
            "addDomains"  : this.BASE_URL+this.prefix.service+"addTo/domaine",
            "addSection"  : this.BASE_URL+this.prefix.service+"addTo/section",
            "addSchoolToWays"  : this.BASE_URL+this.prefix.service+"addTo/chemin_has_ecole",
            "addOnlineTrainingToWays"  : this.BASE_URL+this.prefix.service+"addTo/chemin_has_formation_en_ligne",

            "updateOnlineTraining"  : this.BASE_URL+this.prefix.crud+"updateTo/formation_en_ligne",
            "updateSchools"  : this.BASE_URL+this.prefix.service+"updateTo/ecole",
            "updateWays"  : this.BASE_URL+this.prefix.service+"updateTo/chemin",
            "updateStories"  : this.BASE_URL+this.prefix.service+"updateTo/success_story",
            "updateDomains"  : this.BASE_URL+this.prefix.service+"updateTo/domaine",

            "deleteOnlineTraining"  : this.BASE_URL+this.prefix.crud+"deleteTo/formation_en_ligne",
            "deleteSchools"  : this.BASE_URL+this.prefix.service+"deleteTo/ecole",
            "deleteWays"  : this.BASE_URL+this.prefix.service+"deleteTo/chemin",
            "deleteStories"  : this.BASE_URL+this.prefix.service+"deleteTo/success_story",
            "deleteDomains"  : this.BASE_URL+this.prefix.service+"deleteTo/domaine",
        };
    }

    get = (methodName, params = "") => {
        return fetch(this.BASE_URL);
    }

    buildParams(params) {
        return params;
    }

}

