// Your code here.
// Note that you do NOT need the data for this function!

const getUrl = function(row){
 if(row !== null){return row[1];}
  else {return null;}
}


// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
