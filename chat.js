

let url = 'https://ronpy7.pythonanywhere.com/postMessage';
let get_url = 'https://ronpy7.pythonanywhere.com/getMessages';

function sendMessage(){
    

    let text = document.getElementById("write_area").value
    document.getElementById("write_area").value = ""
    fetch(url, { method: 'post', body: text})
        .then(Result => Result.text())
        .then(string => {
    
        })
        .catch(errorMsg => { console.log(errorMsg); });
}



function getAllMessages(){
    fetch(get_url, { method: 'get'})
    .then(Result => Result.json())
    .then(messages => {
 
        addChild(messages);
    })
    .catch(errorMsg => { console.log(errorMsg); });
}




function addChild(messages){
    let msg = document.getElementById("messages")
    msg.replaceChildren()
    for (let i = 0; i < messages.length ; i++){
        let Newmessage = document.createElement("p")
        Newmessage.innerText = messages[i]
        msg.appendChild(Newmessage)
    }
}

setInterval(() => {
   getAllMessages() 
}, 1000);
    