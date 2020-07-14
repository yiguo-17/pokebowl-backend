// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');
const getRow = function(pkm){
  for(const poke of pokemon){
    if (poke[0] === pkm){return poke;}
  }
  return null;
}



// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
