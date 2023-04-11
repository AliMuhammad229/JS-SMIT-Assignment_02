// Q: 01
function addnumberedClosure(number_01) {
    return function (number_02) {
        return number_01 + number_02;
    };
}

const addFive = addnumberedClosure(5);
console.log(addFive(10));


// Q: 02
function search_number(array, number) {
    if (array.length === 0) {
        return false;
    }
    if (array[0] === number) {
        return true;
    } 
    else {
       return search_number(array.slice(1), number);
    }
}
let num_arr = [1,2,3,4,5,6,7,8,9,10];
console.log(search_number(num_arr, 11));


// Q: 03
function addNewPara(text) {
    const newPara = document.createElement("p");
    newPara.textContent = text;
    document.body.appendChild(newPara);

}
addNewPara("Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.");


// Q: 04
function addNewElement_in_ul(list) {
    const ul_list = document.getElementById("newList");
    const new_List = document.createElement("li");
    new_List.textContent = list;
    ul_list.appendChild(new_List);
}

addNewElement_in_ul("WajidUllah");


// Q: 05
function changeBgColor(element, color) {
    element.style.backgroundColor = color;
}

const for_element = document.getElementById("newList");
changeBgColor(for_element, "green");


// Q: 06
function saveObjectLocalStorage(key, Object) {
    localStorage.setItem(key, JSON.stringify(Object));
}

const myObject = {
    name: 'Ali Muhammad',
    age: 23,
    email: 'aliqasim.am7@gmail.com',
    course: 'JS Crash Course - SMIT'
};
saveObjectLocalStorage("myObject", myObject);

// Q: 07
function retrievedObjectLocalStorage(key, Object) {
    localStorage.setItem(key, JSON.stringify(Object));
    const retrievedObject = localStorage.getItem(Object);
    return JSON.parse(retrievedObject);
}

const myObject = {
    name: 'Ali Muhammad',
    age: 23,
    email: 'aliqasim.am7@gmail.com',
    course: 'JS Crash Course - SMIT'
};
console.log(retrievedObjectLocalStorage("myObject", myObject));


// Q: 08
function saveObjtoLS(Obj) {
    for (const keys in Obj) {
        if (Object.hasOwnProperty.call(Obj, keys)) {
          localStorage.setItem(keys, Obj[keys]);
        }
    }

    const newObject = {};
    for (const keys in Obj) {
      if (Object.hasOwnProperty.call(Obj, keys)) {
        newObject[keys] = localStorage.getItem(keys);
      }
    }
    return newObject;
}

const myObject = {
    name: 'Ali Muhammad',
    age: 23,
    email: 'aliqasim.am7@gmail.com',
    course: 'JS Crash Course - SMIT'
};
const retrievedObj = saveObjtoLS(myObject);
console.log(retrievedObj);
