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
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }
    
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Hearing");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            //URL parsen
            let requestUrl: string = _request.url;
            let url: Url.UrlWithParsedQuery = Url.parse(requestUrl, true);           
            //Über den Pfad auslesen, was nun getan werden soll
            let clientInformation: ClientInformation = { prename: "huhu", lastname: "", age: ""};
            //JSON string erstellen
            let jsonString: string = JSON.stringify(url.query);

            let mongoURL: string = "mongodb+srv://andrejk98:Maestro98@gissose.ny3jr.mongodb.net/Test?retryWrites=true&w=majority";

            let options: Mongo.MongoClientOptions = {useNewUrlParser:  true, useUnifiedTopology: true};
            let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();

            let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
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