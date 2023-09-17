let cards =
[
    'https://i.pinimg.com/1200x/8b/f7/2f/8bf72f7d1eb763e6a1ccac624694b3d8.jpg',
    'https://rare-gallery.com/uploads/posts/532849-fantasy-art.jpg',
    'https://i.pinimg.com/originals/26/dd/3b/26dd3bcef82bcdc8f4325ce2d799626d.png',
    'https://c4.wallpaperflare.com/wallpaper/586/356/924/angels-fantasy-monsters-knights-battles-creatures-1231x900-abstract-fantasy-hd-art-wallpaper-preview.jpg',
    'https://i.pinimg.com/originals/a4/cd/98/a4cd98d251d4a0f8e1d97dae5573c17d.jpg',
    'https://i.pinimg.com/736x/24/99/29/249929f34cd4ade08a48da8d97779dd9.jpg',
    'https://i.pinimg.com/originals/a1/fb/87/a1fb87503108be4cfa02e5baaee3a9ba.jpg',
    'https://i0.wp.com/www.tor.com/wp-content/uploads/2014/12/Cthulhu_rising_by_somniturne1.jpg?fit=475%2C%209999&crop=0%2C0%2C100%2C356px',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHQa5448rl_VDJH6c4bMZt71FIg5kZ7amFg&usqp=CAU',
    'https://i.pinimg.com/736x/df/30/ec/df30ec3cf0c830e3cd95568e5bb56b26--dark-creatures-alien-creatures.jpg',
    'https://i.pinimg.com/236x/05/eb/94/05eb946807ff0ec0bf93ee985945114d.jpg',
    'https://i.pinimg.com/736x/25/34/30/253430dd9990f2a0d415aa47508f2bb0--fantasy-pictures-creature-design.jpg',
];



function get_card(){
    get = cards[Math.floor(Math.random()*cards.length)]
    document.getElementById('new_card').src = get
};