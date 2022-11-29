export  function fetchFilms(url){
    
    fetch(url, {
       method: 'GET',
       headers: {
           'X-API-KEY': '984ce7e4-6635-4617-b147-99beac578db1',
           'Content-Type': 'application/json',
       },
   })
   
}

import jquery from "jquery";

export default (window.$ = window.jQuery = jquery);