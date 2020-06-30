///////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Asynchronous Javascripts with callbacks

/*
function getRecipe(){
    setTimeout( () => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);
        setTimeout( id => {
            const recipe = {
                title : 'Fresh Tomato Pasta',
                publisher : 'Anuj Kr Prasad'};                   
                console.log(`${id} : ${recipe.title}`);

                setTimeout(publisher =>{
                    const recipe2 = { title : 'Italian Pizza',
                    publisher : 'Anuj Kr Prasad'};
                    console.log(recipe2);
                },1500, recipe.publisher);
        }, 1500, recipeID[2]);
    },1500);
}
getRecipe();
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Promise 

/* Promise is an object that keeps track whether a certain event has happened already or not.
Determines what happens after the event(asynchronous) has haeppened.
*/

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve,reject) =>{
        setTimeout(ID => {
            const recipe = {
                title : 'Fresh Tomato Pasta',
                publisher : 'Anuj Kr Prasad'};                   
                resolve(`${ID} : ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = { title : 'Italian Pizza',
                    publisher : 'Anuj Kr Prasad'};
                    resolve(`${pub} : ${recipe.title}`);
        }, 1500, publisher);
    });
};
/*
getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Anuj Kr Prasad');
})
.then(recipe => {
    console.log(recipe);
})

.catch(error => {
    console.log('error !');
});
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ASYNC AWAIT
/*
async function getRecipesAW(){
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Anuj Kr Prasad');
    console.log(related);
    return recipe;                                          // return value from async function
}

getRecipesAW().then(result => console.log(`${result} is the best ever.`))

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AJAX and APIS

/* Making AJAX call Fetch with Promises */

function getWeather(woeid){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)

    .then(result => {
        //console.log(result);
        return result.json();
    })
    .then(data => {
        //console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Today temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => {
        console.log(error);
    });
    
}

getWeather(2487956);
getWeather(44418);


/* Making AJAX call with ASYNC/AWAIT and Promises */

async function getWeatherAW(woeid){
    try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
    const data = await result.json();
    //console.log(data);

    const tomorrow = data.consolidated_weather[1];
    console.log(`Tomorrow temperatures in ${data.title} will stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
    return data;
    } catch(error){
        alert(error);
    }
}
getWeatherAW(2487956);

getWeatherAW(44418).then(data => {console.log(data)});

