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
