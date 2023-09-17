const ATHENS_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59830.008125969856!2d23.705490577385973!3d37.990488826952515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sil!4v1691765381230!5m2!1sen!2sil";
const VENICE_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358558.39250238414!2d12.057677980238731!3d45.40455131000176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenice%2C%20Metropolitan%20City%20of%20Venice%2C%20Italy!5e0!3m2!1sen!2sil!4v1691768394652!5m2!1sen!2sil"
const RHODES_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412362.0471323591!2d27.774657217901503!3d36.16440194312776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14950af92e9b4fad%3A0x27eed014f85bd454!2sRhodes!5e0!3m2!1sen!2sil!4v1691772705135!5m2!1sen!2sil";

let i = 0 ;
let maps = [ATHENS_MAP,VENICE_MAP,RHODES_MAP] ;

function next_1(){
    if(i < maps.length-1){
        i ++ ;
        document.getElementById("the_map").src = maps[i]; 
        
    };    
};

function previous_1(){
    if (i > 0){
        i -- ; 
        document.getElementById("the_map").src = maps[i]; 
           
        
    };
};


    if(i === 0 ){
        document.getElementById("previous").disabled=true;
    };
    
    if(i === maps.length-1){
        document.getElementById("next").disabled=true;
    };

