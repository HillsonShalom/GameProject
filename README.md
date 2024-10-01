# Game Planing
## API Endpoints

- register/auth/ POST
- login/auth/ POST


- games/ GET
- start/games/ POST

- moves/{gameId}/games/ WebSocket


## Socket Events

**client**
- connection     // get all connect users
- act            // get act fron the server
- finish         // the server stops the game

**server**
- connection
- act



## DTOs

- auth  { name: string, password: string }
- act   { location: number }
- game  { id: string, rival: string, date: Date, result: string }
- start { ageinst: string } => game



## .env
PORT=5555 
SECRET_KEY=my_secret_key
