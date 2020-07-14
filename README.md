# Pokebowl Backend

We'll be exploring a 2D Array to see how that feels before we start using them in a bigger app.


### Workflow

* You'll be running `jest --watch-all`, but working in two separate files, one per function. Each one has a corresponding test file you can check out to see how each test is working.


### Tasks

You'll only need two functions to pass these tests.

* `getRow` - given a string, looks through the `pokemon` array and returns the sub-array that contains it

```javascript
getRow('pikachu') //-> ['pikachu', 'https://pokeapi.co/api/v2/pokemon/25/']

getRow('charmander') //-> ['charmander', 'https://pokeapi.co/api/v2/pokemon/4/']
```

* `getUrl` - given a row sub-array (like the example outputs above), returns the URL from it.

```javascript
getUrl(['pikachu', 'https://pokeapi.co/api/v2/pokemon/25/']) //-> 'https://pokeapi.co/api/v2/pokemon/4/'

`getUrl(['charmander', 'https://pokeapi.co/api/v2/pokemon/4/']) //-> 'https://pokeapi.co/api/v2/pokemon/4/'`
```
 

### Hints

* Pay careful attention to what type of data your inputs and outputs are supposed to be!
* Also important: `getRow` will need to pull in the `pokemon` data from `pokemon.js`. That's our "database"!
