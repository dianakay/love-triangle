/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var x,y,z,a;
  var sum=0;
  for (var i=0; i<preferences.length; i++) {
	  x=preferences[i]-1;
	  if (x==i) continue;
	  y=preferences[x]-1;
	  if (y==x) continue;
	  z=preferences[y]-1;
	  if (z==y) continue;
	  a=preferences[z]-1;  
  if (i==z) {
	  sum=sum+1;
  }
  }
  return sum / 3;
};