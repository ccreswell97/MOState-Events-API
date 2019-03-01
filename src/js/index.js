'use strict';

const ul = document.getElementById('events'); 
const url = 'http://people.missouristate.edu/chadkillingsworth/csc590/calendar/?date=02/14/2019'; 


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    console.log(data);
    for (let i = 0; i < data.feed.entry.length; i++) {
        let event = data.feed.entry[i].title.$t; 
        let li = document.createElement('li');
        li.innerText = event;
        ul.appendChild(li);
    }
})
.catch(function(error) {
    console.log(error);
});