"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    async function sendData() {
        let url = "https://testgissose2021.herokuapp.com/sendData";
        //let url: string = "http://localhost:8100/sendData";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        let response = await fetch(url);
        //wenn eine response vorliegt ausgabe tätigen
        if (response != undefined) {
            let answerOutput = document.getElementById("confirmation");
            answerOutput.textContent = "Daten an Datenbank gesendet";
            console.log("Daten erfolgreich gesendet");
        }
    }
    async function getData() {
        //let url: string = "http://localhost:8100/getData";
        let url = "https://testgissose2021.herokuapp.com/getData";
        let response = await fetch(url);
        let responseString = await response.text();
        //HTML Code während der Laufzeit einfügen
        let serverResponse = document.getElementById("answer");
        serverResponse.innerHTML = responseString;
    }
    //Buttons
    document.querySelector("#sendData").addEventListener("click", sendData);
    document.querySelector("#printData").addEventListener("click", getData);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map