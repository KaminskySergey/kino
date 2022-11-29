// import {fetchFilms} from './fetchFilms'
import "./components/fetchFilms"


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



const BASE_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

const SEARCH_API = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
const PAGE = '&page=1'

const list = document.querySelector('.list')
console.log(list);
const listGallery = document.querySelector('.list-film')
const form = document.querySelector('form')
const input = document.querySelector('.input')
const gallery = document.querySelector('.container__gallery')
console.log(gallery);
let inputValue
input.addEventListener('input', onInput)

function onInput(evt){
    inputValue = input.value;
    
}
fetchFilmsTop()

async function fetchFilmsTop(){
    
    const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
       method: 'GET',
       headers: {
           'X-API-KEY': '984ce7e4-6635-4617-b147-99beac578db1',
           'Content-Type': 'application/json',
       },
   })
   const response = await res.json()
   console.log(response);
   moviesResp(response)
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 10,
        width: 250,
        height: 250,
        loop: true,
        center: true,
        margin: 10,
    }
        
    );
    
  });
}
//==========================================================================

async function fetchFilms(){
    
    const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${inputValue}&page=1&pageCounter=10`, {
       method: 'GET',
       headers: {
           'X-API-KEY': '984ce7e4-6635-4617-b147-99beac578db1',
           'Content-Type': 'application/json',
       },
   })
   const responseSearch = await res.json()
   console.log(responseSearch.films.length);
   if(responseSearch.films.length > 0){
    gallery.classList.remove('before-height')

   }
   moviesGallegy(responseSearch)
   
}

// рендер топ-20
function moviesResp(data){
data.films.map((film) => {
    const markup = markupFilm(film)
list.insertAdjacentHTML('beforeend', markup)
    
})
}
// рендер галереи
function moviesGallegy(data){
    data.films.map((film) => {
        const markupList = markupFilmSearch(film)
        listGallery.insertAdjacentHTML('beforeend', markupList)
    })
}


form.addEventListener('submit', onSubmit)

function onSubmit(evt){
    evt.preventDefault()
    
    fetchFilms()
    clearContainer()
}

function clearContainer(){
    listGallery.innerHTML = '';
}

function markupFilm({posterUrlPreview, nameEn, rating, year}){
    return `
    <img class="img-carusel" src="${posterUrlPreview}" alt="${nameEn}">
    `
}


function markupFilmSearch({posterUrlPreview, nameEn, rating, year}){
    return `
    <li class="list-item__film">
          <a href="#" class="list-item__link">
          <img src="${posterUrlPreview}" width="200" alt="${nameEn}">
          <div class="photo-card">
            <h2 class="photo-card__name">${nameEn}</h2>
            <p class="photo-card__rating">${rating}</p>
            <p class="photo-card__years">${year}</p>
          </div></a>
        </li>`
}


// async function fetchFilmOne(url){
//     const res = await fetch(url)
//     const response = await res.json()
//     console.log(response)
//     searshFilms(response)
// }


// function searshFilms(data){
//     console.log(data.Search);
//     data.Search.map((el) => {
//         const markupOne = markupFilmSearch(el)
        
//     listOne.insertAdjacentHTML('beforeend', markupOne)
//     })
//     }



