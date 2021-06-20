import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    interface ClientInformation {
        prename: string;
        lastname: string;
        age: string;
    }


    let port: number = Number(process.env.PORT);
    if (!port)
        port = 81;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Hearing");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            //URL parsen
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);           
            //Über den Pfad auslesen, was nun getan werden soll
            let clientInformation: ClientInformation = { prename: "huhu", lastname: "", age: ""};
            //JSON string erstellen
            let jsonString: string = JSON.stringify(url.query);

            let mongoURL: string = "mongodb+srv://andrejk98:Maestro98@gissose.ny3jr.mongodb.net/Aufgabe3_4?retryWrites=true&w=majority";

            let options: Mongo.MongoClientOptions = {useNewUrlParser:  true, useUnifiedTopology: true};
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();

            let orders: Mongo.Collection = mongoClient.db("Aufgabe3_4").collection("Test");
            //HTML
            if (url.pathname == "/html") {
                //Ausgabe in Html Code
                //JSON String in interface legen
                clientInformation = JSON.parse(jsonString);
                //Überschrift
                _response.write("<h3>" + "Serverantwort:" + "</h3>");
                _response.write("<p>" + clientInformation.prename + "</p>");
                _response.write("<p>" + clientInformation.lastname + "</p>");
                _response.write("<p>" + clientInformation.age + "</p>");
            }

            //JSON
            if (url.pathname == "/json") {
                console.log(jsonString);
                _response.write(jsonString);
            }

            if (url.pathname == "/reset") {
                orders.drop();

                _response.write("Database deleted");

                console.log("trying to delete");
            }
        } 
        _response.end();
    }
}