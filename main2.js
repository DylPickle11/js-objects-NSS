/* Brenda Code */

console.log("hamster stuff", hamster["name"]);

console.log(`The first hamster child is ${hamster.children[0]}, ${hamster.children[1]}, ${hamster.children[2]}`);

for (i= 0; i < hamster.children.length; i++) {
  console.log(`Hamster child: ${i + 1} is ${hamster.children[i]}`); 
}

hamster.children.forEach((item, index) =>{
  console.log(`Hamster child ${index} ${item}`);
});





/* Wardrobe */
console.log(wardrobe.height, 
            wardrobe.manufacturer,
            wardrobe.contents,
            wardrobe.depth,
            wardrobe.width)

/* State of Empire*/
/* 1*/
console.log(`Dimension of the empire state building
     stories:${empireStateBuilding.stories}
     height: ${empireStateBuilding.height}
     square feet: ${empireStateBuilding.squareFeet}
     east west length: ${empireStateBuilding.eastWestLength}
     north south length: ${empireStateBuilding.northSouthLength}`)
/* 2*/
console.log(`Remaining five properties: 
    ${empireStateBuilding['address']}
    ${empireStateBuilding['constructionDate']}
    ${empireStateBuilding['cost']}
    ${empireStateBuilding['owner']}
    ${empireStateBuilding['architect']}`
)

const address = empireStateBuilding['address'];
const constructionDate = empireStateBuilding['constructionDate'];
const cost = empireStateBuilding['cost'];
const owner = empireStateBuilding['owner'];
const architect = empireStateBuilding['architect'];


/* Nashville Software School*/

const partTime = nashvilleSoftwareSchool.instructors.partTime
for (let  i= 0; i < partTime.length; i++) {
  console.log( `Part-time faculty: ${partTime[i]}`);
}

const fullTime = nashvilleSoftwareSchool.instructors.fullTime
for (let i =0; i < fullTime.length; i++) {
  console.log( `Full-time faculty: ${fullTime[i]}`);
}

console.log(partTime[0]);
console.log(fullTime[4]);

/* Beatles*/

const name  = beatles.members[1].name;
const formed = beatles.history.formed;
const disbanded = beatles.history.disbanded;
const born = beatles.members[1].birth;
const album = beatles.albums[3];

console.log(`${name} was in the Beatles from ${formed} to ${disbanded}.He was born in ${born}. He contributed heavily to the ${album} Album.`)
