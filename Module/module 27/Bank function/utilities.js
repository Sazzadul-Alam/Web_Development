function getInputValueById(InputID) {
    const inputField = document.getElementById(InputID);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementID) {
    const element = document.getElementById(elementID);
    const elementValue = parseFloat(element.innerText);
    return elementValue;

}
function setElementvaluebyID(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}
