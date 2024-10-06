//alert function
function showAlert() {
    // captures user input that was in html
    let input = document.getElementById('capture-text');
    // stores users input
    let inputVal = input.value;
    // pops up an alert that prints user input
    window.alert(`You searched for: ${inputVal}`);
};
