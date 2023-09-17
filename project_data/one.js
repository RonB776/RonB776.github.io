function setUserInfo(){
    fetch('/{{user.username}}', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify({
           street: document.getElementById("street").value,
           city: document.getElementById("city").value,
           state: document.getElementById("state").value,
           zip: document.getElementById("zip").value
        })
      }).then(() => {
        cancel()
        location.reload()
      })
}
