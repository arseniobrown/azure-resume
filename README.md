# azure-resume
My own azure resume, following [ACG project video.](https://youtu.be/ieYrBWmkfno)

## First steps
- Frontend folder contains the website.
- main.js contains vistor counter code.

## Problems I faced from the start and and some of the changes I plan to make 

-  Could not get the dotnet to work 
- Resolved by do a couple of google searches on line and found that I needed to change the envirment vairables in windows [may work for you.](https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-remove-and-reinstall-Microsoft-Visual-C-Runtime-Libraries.html) 



## Example to the main.js for updates to the counter 


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