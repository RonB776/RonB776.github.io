let items = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

function short_link(){
    let i = 0;
    let x = '';
    while(i != 7){
        item = items[Math.floor(Math.random()*items.length)];
        x += item 
        i++ ;
    }
    console.log(x)
    let main_L = document.getElementById('main_link').value
    console.log(main_L)

    document.getElementById('the_link').href = document.getElementById('full_link').value
    document.getElementById('the_link').innerHTML = main_L+x
}