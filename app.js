// document.getElementById('button').addEventListener('click',
//     loadData);

// function loadData() {
//         // Create an XHR object
//     const xhr = new XMLHttpRequest();

//     // OPEN
//     xhr.open('GET', 'data.txt', true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText);
//             document.getElementById('output').innerHTML = `
//             <h1>${this.responseText}</h1>
//             `
            
//         }
//     }

//     xhr.send();
// }
    
// // HTTP STATUS CODE
// // 200: "OK"
// // 403: "FORBIDDEN"
// // 404: "NOT FOUND"

//

document.querySelector('.get-jokes').addEventListener
    ('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            

            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`
                    
                });

            } else {
                output += '<li>Something went wrong </li>'
            }
            document.querySelector('.jokes').innerHTML = output;
    }
}
    xhr.send();
    e.preventDefault();
}