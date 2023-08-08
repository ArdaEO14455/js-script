function adder(a, b) {
    return a + b
  }
  // make sure to always wrap promises in functions to allow promises to be reusable
  function adderPromise(x, y) { 
    return new Promise((resolve, reject) => {
      if (typeof x === 'number' && typeof y === 'number') {
        const answer = adder(x, y)
        setTimeout(() => resolve(answer), 2000)
      } else {
        reject('x and y must be numbers')
      }
    })
  }
  
  const results = []
  // .then allows values from within promises to be used outside the scope of the function it's nested in
  
  
  //instead of adding the below functionalities at the end of every adderPromise, create a 'resolved' or 'successful' function and a 'rejected' function that produces the correct sequence of actions for each potential path (resolved or rejected) and throw that into any other function
  const resolved = value => {  
    results.push(value)
    console.log(results)
  }
  
  const rejected = err => console.error(err)
  
  adderPromise(10, 20)
    .then(value => {
      results.push(value) //push adds the passed in value ( in this case it is 'value') to the list that .push appends
      return adderPromise(100, 50)
    })
    .then(resolved)
    .catch(rejected) //you only need one catch at the end of the chain, it will pick up any promise errors