"use strict";
var P_3_4Server;
(function (P_3_4Server) {
    async function sendForm(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Sending HTML to Server");
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = "https://testgissose2021.herokuapp.com/dataAdd" + "?" + query.toString();
        console.log(url);
        const response = await fetch(url);
        const respString = await response.text();
        console.log(response);
        print(respString);
        function print(_url) {
            serverResponse.innerHTML = respString;
        }
        console.log("Text Printet On Website");
        clearForm();
    }
    function clearForm() {
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
    }
    async function read(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        console.log("Server wird angefragt");
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = "https://testgissose2021.herokuapp.com/readData" + "?" + query.toString();
        const response = await fetch(url);
        const receivedObj = await response.text();
        print(receivedObj);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Printed Database";
        serverResponse.innerHTML = receivedObj;
    }
    async function resetDatabase(_event) {
        const serverResponse = document.getElementById("abc");
        let url = "";
        url = "https://testgissose2021.herokuapp.com/resetDatabase";
        const response = await fetch(url);
        const receivedObj = await response.text();
        print(receivedObj);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Deleted Database";
    }
    let submit = document.getElementById("login");
    submit.addEventListener("click", sendForm);
    let readData = document.getElementById("loginJson");
    readData.addEventListener("click", read);
    let deleteData = document.getElementById("deleteData");
    deleteData.addEventListener("click", resetDatabase);
})(P_3_4Server || (P_3_4Server = {}));
//# sourceMappingURL=script.js.map