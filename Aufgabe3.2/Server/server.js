"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    let port = Number(process.env.PORT);
    if (!port)
        port = 81;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    async function handleRequest(_request, _response) {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            //URL parsen
            let url = Url.parse(_request.url, true);
            //Über den Pfad auslesen, was nun getan werden soll
            let clientInformation = { prename: "huhu", lastname: "", age: "" };
            //JSON string erstellen
            let jsonString = JSON.stringify(url.query);
            let mongoURL = "mongodb+srv://andrejk98:Maestro98@gissose.ny3jr.mongodb.net/Aufgabe3_4?retryWrites=true&w=majority";
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(mongoURL, options);
            await mongoClient.connect();
            let orders = mongoClient.db("Aufgabe3_4").collection("Test");
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
            }
        }
        _response.end();
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=server.js.map