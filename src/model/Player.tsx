import Team from "./Team";
import Position from "./enums/Position";

class player{
    name: string;
    team: Team;
    position: Position;
    number: number;
    height: number;
    age: number;

    points: number;
    goals: number;
    assists: number;
    shotsOnGoal: number;
    shotPercentage: number;
    avgTimeOnIce: number;
    plusMinus: number;

    constructor(
        name: string, 
        team: Team, 
        position: Position, 
        number: number, 
        height: number, 
        age: number,
        points: number,
        goals: number,
        assists: number,
        shotsOnGoal: number,
        shotPercentage: number,
        avgTimeOnIce: number,
        plusMinus: number) {

        this.name = name;
        this.team = team;
        this.position = position;
        this.number = number;
        this.height = height;
        this.age = age;
        this.points = points;
        this.goals = goals;
        this.assists = assists;
        this.shotsOnGoal = shotsOnGoal;
        this.shotPercentage = shotPercentage;
        this.avgTimeOnIce = avgTimeOnIce;
        this.plusMinus = plusMinus;
    }
}