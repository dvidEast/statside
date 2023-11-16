import Confrence from "./enums/Confrence";
import Division from "./enums/Division";

class Team {
    name: string;
    city: string;
    division: Division;
    confrence: Confrence;


    constructor(name: string, city: string, division: Division, confrence: Confrence) {
        this.name = name;
        this.city = city;
        this.division = division;
        this.confrence = confrence;
    }
}

export default Team;