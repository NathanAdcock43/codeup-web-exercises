

// TODO Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.


let gitAPI = fetch('https://api.github.com/users/NathanAdcock43/events', {headers: {'Authorization': promisesToken}});

gitAPI.then((response) => {return response.json()
        .then(results => console.log(results[0].created_at.split("T")))
        .then()
})



//