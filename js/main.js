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
    document.querySelector('.like-lecture').style.sport = 'none';
    console.log('affiche dessin');
}

function afficheLecture() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'block';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-lecture').style.sport = 'none';
    console.log('affiche lecture');
}

function afficheVoyage() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'block';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-lecture').style.sport = 'none';
    console.log('affiche voyage');
}

function afficheMusique() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'block';
    document.querySelector('.like-lecture').style.sport = 'none';
    console.log('affiche musique');
}

function afficheSport() {
    document.querySelector('.like-dessin').style.display = 'none';
    document.querySelector('.like-lecture').style.display = 'none';
    document.querySelector('.like-voyage').style.display = 'none';
    document.querySelector('.like-musique').style.display = 'none';
    document.querySelector('.like-lecture').style.sport = 'block';
    console.log('affiche sport');
}