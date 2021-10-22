// //========import=====================
import country from './tamplate/country.hbs'
import countryList from './tamplate/country-list.hbs'
import ApiSearch from './fetchCountries'
import './styles.css'

let debounce = require('lodash.debounce');
import {alert} from '@pnotify/core';
//import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';
// //====refs==========================
let inputSearch = document.querySelector('.input')
let list = document.querySelector('.country_list')

const gallery = document.querySelector('.gallery')
const ApiSearchCountrie = new ApiSearch()
//console.log(ApiSearchCountrie);
inputSearch.addEventListener('input',debounce(onSearch,500))

function onSearch(e){
    e.preventDefault()
    

    ApiSearchCountrie.query = e.target.value
    if(ApiSearchCountrie.query.length === 0){
        clearCountryInfo()
    }
    foundCountry()
}
function foundCountry(){
    ApiSearchCountrie.fetchCountrie().then(response=>{
        if(response.length === 1){
        clearCountryInfo()
        makeCountryInfo(response)
        }
        else if(response.length > 1 && response.length <= 10){
        clearCountryInfo()
        makeCountryList(response)
        }
        else if(response.length >= 10){
            alert({text: 'too many matches found. Please, enter a more specific query',
            delay: 1000,})
        }
    })
}

function makeCountryInfo(response){
    list.insertAdjacentHTML('beforeend', country(response));
}
function makeCountryList(response){
    list.insertAdjacentHTML('beforeend', countryList(response));
}
function clearCountryInfo(){
    list.innerHTML = ('');
}
    
////////////////////////////////
