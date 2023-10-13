/********************************/
/******** BOUTONS LIKE **********/
/********************************/

document.querySelector('#bouton-like-dessin').addEventListener('click', afficheDessin);
document.querySelector('#bouton-like-lecture').addEventListener('click', afficheLecture);
document.querySelector('#bouton-like-voyage').addEventListener('click', afficheVoyage);
document.querySelector('#bouton-like-musique').addEventListener('click', afficheMusique);
document.querySelector('#bouton-like-sport').addEventListener('click', afficheSport);

function afficheDessin() {
    document.querySelector('.like-dessin').style.display = 'block';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-sport').style.display = 'none';

    document.querySelector('#bouton-like-dessin').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    document.querySelector('#bouton-like-lecture').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-voyage').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-musique').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-sport').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}

function afficheLecture() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'block';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-sport').style.display = 'none';

        document.querySelector('#bouton-like-dessin').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-lecture').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    document.querySelector('#bouton-like-voyage').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-musique').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-sport').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}

function afficheVoyage() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'block';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-sport').style.display = 'none';

    document.querySelector('#bouton-like-dessin').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-lecture').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-voyage').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    document.querySelector('#bouton-like-musique').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-sport').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}

function afficheMusique() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'block';
    document.querySelector('.like-sport').style.display = 'none';

    document.querySelector('#bouton-like-dessin').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-lecture').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-voyage').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-musique').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    document.querySelector('#bouton-like-sport').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}

function afficheSport() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-sport').style.display = 'block';

    document.querySelector('#bouton-like-dessin').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-lecture').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-voyage').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-musique').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    document.querySelector('#bouton-like-sport').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
}


/********************************/
/********* HOVER TRIPS **********/
/********************************/

document.querySelector('#img-voyage-amsterdam').addEventListener('mouseover', updateTextAmsterdam);
document.querySelector('#img-voyage-rome').addEventListener('mouseover', updateTextRome);
document.querySelector('#img-voyage-angleterre').addEventListener('mouseover', updateTextAngleterre);
document.querySelector('#img-voyage-croatie').addEventListener('mouseover', updateTextCroatie);
document.querySelector('#img-voyage-maurice').addEventListener('mouseover', updateTextMaurice);
document.querySelector('#img-voyage-repdom').addEventListener('mouseover', updateTextRepdom);
document.querySelector('#img-voyage-quebec').addEventListener('mouseover', updateTextQuebec);
document.querySelector('#img-voyage-venise').addEventListener('mouseover', updateTextVenise);

function updateTextAmsterdam() {
    document.querySelector('.voyage-txt').innerHTML = 'Amsterdam, Pays-Bas';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-amsterdam').style.opacity = 0.8;
}

function updateTextRome() {
    document.querySelector('.voyage-txt').innerHTML = 'Rome, Italie';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-rome').style.opacity = 0.8;
}

function updateTextAngleterre() {
    document.querySelector('.voyage-txt').innerHTML = 'Angleterre';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-angleterre').style.opacity = 0.8;
}

function updateTextCroatie() {
    document.querySelector('.voyage-txt').innerHTML = 'Croatie';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-croatie').style.opacity = 0.8;
}

function updateTextMaurice() {
    document.querySelector('.voyage-txt').innerHTML = 'Île Maurice';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-maurice').style.opacity = 0.8;
}

function updateTextRepdom() {
    document.querySelector('.voyage-txt').innerHTML = 'Punta Cana, République Dominicaine';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-repdom').style.opacity = 0.8;
}

function updateTextQuebec() {
    document.querySelector('.voyage-txt').innerHTML = 'Québec, Canada';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-quebec').style.opacity = 0.8;
}

function updateTextVenise() {
    document.querySelector('.voyage-txt').innerHTML = 'Venise, Italie';
    document.querySelector('.voyage-txt').style.opacity = 0.8;
    //document.querySelector('#img-voyage-venise').style.opacity = 0.8;
}

document.querySelector('#img-voyage-amsterdam').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-rome').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-angleterre').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-croatie').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-maurice').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-repdom').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-quebec').addEventListener('mouseout', updateText);
document.querySelector('#img-voyage-venise').addEventListener('mouseout', updateText);


function updateText() {
    document.querySelector('.voyage-txt').innerHTML = 'Survolez une image';
    document.querySelector('.voyage-txt').style.opacity = 0.5;
    //document.querySelectorAll('.img-voyage').style.opacity = 1;
}


/********************************/
/********* PLAY MUSIC ***********/
/********************************/

let music_joji = document.querySelector('.music-joji');
document.querySelector('#img-bouton-play-joji').addEventListener('click', playMusicJoji);

function playMusicJoji() {
    if (music_joji.paused) {
        music_joji.play();
        document.querySelector('#img-bouton-play-joji').src = '../img/bouton-pause.png';
    } else {
        music_joji.pause();
        document.querySelector('#img-bouton-play-joji').src = '../img/bouton-play.png';
    }
}

let music_nepal = document.querySelector('.music-nepal');
document.querySelector('#img-bouton-play-nepal').addEventListener('click', playMusicNepal);

function playMusicNepal() {
    if (music_nepal.paused) {
        music_nepal.play();
        document.querySelector('#img-bouton-play-nepal').src = '../img/bouton-pause.png';
    } else {
        music_nepal.pause();
        document.querySelector('#img-bouton-play-nepal').src = '../img/bouton-play.png';
    }
}

let music_yuzmv = document.querySelector('.music-yuzmv');
document.querySelector('#img-bouton-play-yuzmv').addEventListener('click', playMusicYuzmv);

function playMusicYuzmv() {
    if (music_yuzmv.paused) {
        music_yuzmv.play();
        document.querySelector('#img-bouton-play-yuzmv').src = '../img/bouton-pause.png';
    } else {
        music_yuzmv.pause();
        document.querySelector('#img-bouton-play-yuzmv').src = '../img/bouton-play.png';
    }
}

let music_georgio = document.querySelector('.music-georgio');
document.querySelector('#img-bouton-play-georgio').addEventListener('click', playMusicGeorgio);

function playMusicGeorgio() {
    if (music_georgio.paused) {
        music_georgio.play();
        document.querySelector('#img-bouton-play-georgio').src = '../img/bouton-pause.png';
    } else {
        music_georgio.pause();
        document.querySelector('#img-bouton-play-georgio').src = '../img/bouton-play.png';
    }
}

let music_top = document.querySelector('.music-top');
document.querySelector('#img-bouton-play-top').addEventListener('click', playMusicTop);

function playMusicTop() {
    if (music_top.paused) {
        music_top.play();
        document.querySelector('#img-bouton-play-top').src = '../img/bouton-pause.png';
    } else {
        music_top.pause();
        document.querySelector('#img-bouton-play-top').src = '../img/bouton-play.png';
    }
}