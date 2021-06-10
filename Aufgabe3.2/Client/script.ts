namespace Aufgabe3_1 {
    //Synchrone Funktion SendData, welche die URL erweitert
    function sendDataHtml (): void {
        let url: RequestInfo = "https://testgissose2021.herokuapp.com/html";
        //Daten asus Formular auslesen
        let formData: FormData = new FormData(document.forms[0]);
        
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        //asynchrone Funktion communicate aufrufen, welche die Anfrage per fetch an den server schickt
        communicateHtml (url);
    }
    
    async function communicateHtml (_url: RequestInfo): Promise<void> {
        //Anfrage an den Server
        let response: Response = await fetch(_url);
        //Antwort vom server
        let responseString: string = await response.text();
        let answerOutput: HTMLElement = document.getElementById("answer");
        answerOutput.innerHTML = responseString;
    }

    function sendDataJson (): void {
        let url: string = "https://testgissose2021.herokuapp.com/json";
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        communicateJson(url);
    }

    async function communicateJson(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let responseString: string = await response.json();
        console.log(responseString);
    }


    document.querySelector("#sendDataHtml").addEventListener("click", sendDataHtml);
    document.querySelector("#sendDataJson").addEventListener("click", sendDataJson);
}