var async = require('async');
const listLocations = (locations)=>{
// locations.forEach((location)=>{

function waitFor(location){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve(location);
},1000)
       
    })
}
async.eachSeries(locations,async (location)=>{

let data = await waitFor(location);
console.log('here');
console.log(data);
})
};
var locations = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
listLocations(locations)