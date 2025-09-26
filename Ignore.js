"use strict";
function getLong(longName){
    let longestSave = "";
    longName.forEach(item => {
        let splitName =item.split(", ");
        splitName.forEach(list=> {
            if (longestSave.length < list.length){
                longestSave = list;
            }
        })
    })
    return longestSave;
}
console.log(getLong(["Arya, Brandon, Josephine, Teo"]));