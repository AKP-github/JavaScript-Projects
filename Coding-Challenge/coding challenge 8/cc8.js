////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name 
and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 10000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, 
destructuring, etc.

*/

class Element{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element{
    constructor(name, buildYear, trees, area, ){
        super(name,buildYear);
        this.trees = trees;
        this.area = area;
    }
    treeDensity(){
        let density = (this.trees / this.area);
        console.log(`The tree density of ${this.name} is  ${density} trees/sq.km.`);
    }
}

class Street extends Element{
    constructor(name, buildYear, length, size = 'Normal'){  // or size = 3;
        super(name, buildYear);
        this.length  = length;
        this.size = size;
        
    }
    classifyStreet(){
        console.log(`${this.name} , built in ${this.buildYear} has ${this.size} size.`);
    }

    /*
        classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
    */
}

const allParks = [ new Park('Nicco Park',1995,1200,100),
                   new Park('Eco Park',2010,2000,200),
                   new Park('Botanical Garden',1910,3000,150)];

const allStreets = [new Street('Park Street',1900, 12, 'Big'),
                    new Street('C.R Avenue',1972,5,'Small'),
                    new Street('M.G Road',1985,10),
                    new Street('G.T Road',1500,1855)];


 function calc(arr) {
    
const sum = arr.reduce((prev, cur, index) => prev + cur, 0);     //    reduces an array to a single value                
return [sum, sum / arr.length];
}
function reportParks(p){
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);                                  // Destructuring
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
   
}

function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);


































































