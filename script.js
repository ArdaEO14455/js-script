// function getJoke() {
//   return new Promise((resolve, reject) => {
//     try {
//       req = new XMLHttpRequest()
//       req.addEventListener('load', event => resolve(event.target.response.joke))
//       req.open('GET', 'https://icanhazdadjoke.com/')
//       req.setRequestHeader('Accept', 'application/json')
//       req.responseType = 'json'
//       req.send()
//     }
//     catch (e) {
//       reject(e)
//     }
//   })
// }
// -----------------------------------------------------------------------------

// 'fetch' incorporates XMLHttpRequest, but allows for better functionality.
// Notes:
// 'fetch' by definition returns a Promise, which wraps the request. as such, .then could be used

async function fetchJoke() {
      try {
        const res = await fetch('https://icanhazdadjoke.com/', {
          headers: { 'Accept': 'application/json' }
        })
        const data = await res.json() //call the data type to 
        return data.joke
      }
      catch (err) {
        throw err
      }
    }

function loadJokes(jokes=[]) {
    const allJokes = JSON.parse(localStorage.jokes ? localStorage.jokes : '[]').concat(jokes)//if a list of old jokes exists in local storage, get old jokes out of local storage, and parse it, otherwise use an empty array
    localStorage.jokes = JSON.stringify(allJokes)//stringify the new joke and concatenate it with the parsed old jokes (or empty array) together, appending the new joke into the list of old jokes in local storage.
    document.querySelector('ul').innerHTML = allJokes.map(joke => `<li>${joke}</li>`).join('')
    }


function get5Jokes() {
const jokePromises = []
for (let i = 0; i < 5; i++) {
    jokePromises.push(fetchJoke())
}

Promise.all(jokePromises) //take all Promise instances
    .then(loadJokes) //call .then and load each joke
    .catch(err => console.error(err)) //catch errors in the case that the promise rejects
}
  
  
document.querySelector('button').addEventListener('click', get5Jokes)

loadJokes()


//   async function asyncGetJoke() { //to make an asynchronous function, make sure to use the 'async' property, and then await prior to the called function that retrieves the data. but note, 'async' returns whatever value is returned from the function as a promise.
    // fetchJoke()
    // .then(result => console.log (result)) // remember, result is a promise, so '.then' is needed to retrieve the resolved value of the promise


    //------------------------------------------------
    // return await fetchJoke() //but remember, you can only use 'await' inside an async function.

// IMPORTANT: returning a value from an async functiion is equivalent to manually creating a promise and calling resolve

//   asyncGetJoke().then(x => consolee.log(x))

  console.log('End of Main')


  //how to work with session vs local storage

  // $ localStorage to access and manipulate items in the local storage
    // $ sessionStorage to access and manipulate items in the session storage

//most items inputted (even numbers) will be stored as a string. to get around this, items need to use variable = JSON.stringify({content}), and use JSON.parse<variable> to parse the json content back into its origianl format.