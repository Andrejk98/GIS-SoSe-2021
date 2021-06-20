"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    //Synchrone Funktion SendData, welche die URL erweitert
    function sendDataHtml() {
        let url = "https://testgissose2021.herokuapp.com/html";
        //Daten asus Formular auslesen
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        //asynchrone Funktion communicate aufrufen, welche die Anfrage per fetch an den server schickt
        communicateHtml(url);
    }
    async function communicateHtml(_url) {
        //Anfrage an den Server
        let response = await fetch(_url);
        //Antwort vom server
        let responseString = await response.text();
        let answerOutput = document.getElementById("answer");
        answerOutput.innerHTML = responseString;
    }
    function sendDataJson() {
        let url = "https://testgissose2021.herokuapp.com/json";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateJson(url);
    }
    async function communicateJson(_url) {
        let response = await fetch(_url);
        let responseString = await response.json();
        console.log(responseString);
    }
    async function deleteAll(_event) {
        let url = "https://testgissose2021.herokuapp.com/reset";
        let response = await fetch(url);
        let responseString = await response.text();
        console.log(responseString);
        const serverResponse = document.getElementById("answer");
        print(responseString);
        function print(_url) {
            serverResponse.innerHTML = _url;
        }
        serverResponse.innerHTML = "Deleted Database1";
    }
    let deleteData = document.getElementById("deleteData");
    deleteData.addEventListener("click", deleteAll);
    //document.querySelector("#deleteAll").addEventListener("click", deleteAll);
    document.querySelector("#sendDataHtml").addEventListener("click", sendDataHtml);
    document.querySelector("#sendDataJson").addEventListener("click", sendDataJson);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map