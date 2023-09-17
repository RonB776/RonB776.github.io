function put_data(){
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'put',
        body: put,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    .then((response) => {
        return response.json()
    })
};

