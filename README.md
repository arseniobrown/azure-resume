# azure-resume
My own azure resume, following [ACG project video.](https://youtu.be/ieYrBWmkfno)

## First steps
- Frontend folder contains the website.
- main.js contains vistor counter code.

```js
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = ''; // Replace this with the actual API URL.

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            count = response.count; // Fix the typo in "response"
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error); // Fix the typo in "catch"
        });
    return count;
};
```