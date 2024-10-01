import fs from 'fs/promises'
import { v4 } from 'uuid';
import User from '../models/profileModel'
import Game from '../models/gameModel';

const profURL = 'data/profiles.json'
const gameURL = 'data/games.json'

class dbContext {
    constructor(
        public profiles: User[] = [],
        public games   : Game[] = []
    ){
        this.load();
    }

    async add(item: User | Game ): Promise<string|undefined>{
        try {
            item.id = v4();
            if (item instanceof User){
                this.profiles.push(item);
            } else {
                this.games.push(item);
            }
            this.save();
            return item.id;
        } catch(err) {
            return undefined
        }
    }

    async load(){
        try {
            const profs = await fs.readFile(profURL, 'utf-8');
            this.profiles = JSON.parse(profs) as User[];
            const games = await fs.readFile(gameURL, 'utf-8');
            this.games = JSON.parse(games) as Game[];
        } catch(err) {
            console.log('it couldn\'t read the data!');
        }
    }

    async save(){
        fs.writeFile(profURL, JSON.stringify(this.profiles), 'utf-8')
        fs.writeFile(gameURL, JSON.stringify(this.games   ), 'utf-8')
    }
    
}

export default dbContext