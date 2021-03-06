namespace P_3_4Server {
 
    async function sendForm(_event: Event): Promise<void>  {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        console.log("Sending HTML to Server");

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        // url = "https://testgissose2021.herokuapp.com/dataAdd" + "?" + query.toString();
        url = "http://localhost:8100/dataAdd" + "?" + query.toString();
        console.log(url);
        const response: Response = await fetch(url);
        const respString: string = await response.text();
        console.log(response);
        print(respString);

        function print(_url: string): void {
            serverResponse.innerHTML = respString;
        }

        console.log("Text Printet On Website");

        clearForm();

    }

    function clearForm(): void {

        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";


    }

    async function read(_event: Event): Promise<void> {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        console.log("Server wird angefragt");

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        //url = "https://testgissose2021.herokuapp.com/readData" + "?" + query.toString();
        url = "http://localhost:8100/readData" + "?" + query.toString();
        const response: Response = await fetch(url);
        const receivedObj: string = await response.text();

        print(receivedObj);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }

        serverResponse.innerHTML = "Printed Database";
        serverResponse.innerHTML = receivedObj;

    }

    async function resetDatabase(_event: Event): Promise<void> {

        const serverResponse: HTMLElement = document.getElementById("abc");

        let url: string = "";

        url = "https://testgissose2021.herokuapp.com/resetDatabase";

        const response: Response = await fetch(url);
        const receivedObj: string = await response.text();

        print(receivedObj);

        function print(_url: string): void {
            serverResponse.innerHTML = _url;
        }
        
        serverResponse.innerHTML = "Deleted Database";

    }


    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");
    submit.addEventListener("click", sendForm);
    
    let readData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginJson");
    readData.addEventListener("click", read);

    let deleteData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("deleteData");
    deleteData.addEventListener("click", resetDatabase);


}