//problem:2
function isJavaScriptFile(String) {

    if (String.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }

}
const file = isJavaScriptFile("File.js");
console.log(file);