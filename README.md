# Product REST - API

## Projektbeskrivning
Projektet är ett simpelt REST-API byggt med express-modulen där man genom olika endpoints kan hantera resursen produkter. Servern (server.js) använder sig av en router (products.router.js) som sköter routingen av 
inkommande requests. Beroende på vad för sorts request som görs kallas en funktion i products.controllers.js.
Denna funktionerna i denna fil sköter i sin tur kontakten med databasen (en json-fil) genom att använda sig av file system-modulen för att läsa och skriva till json-filen. Funktioner för att läsa från och skriva till databasen har lyfts ut till egna funktioner, då dessa återanvänds ofta. Nya produkter adderade till databasen får ett automatiskt genererat id, för detta använder projektet sig av en UUID-modul. Se "Hur projektet byggs och körs" för instruktioner om installation.  

Länk till git-repo: https://github.com/ViktorNy/Project3

## Uppfyllda krav
### Godkänt
- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen (Gjorde detta först, men ändrade sedan till en JSON-fil p.g.a. VG-kravet.)
- [x] Git & GitHub har använts.
- [x] Projektmappen innehåller en README.md fil
- [x] Uppgiften lämnas in i tid

### Väl Godkänt
- [x] Alla punkter för godkänt är uppfyllda
- [x] All data ska vara sparad i en JSON-fil istället för i serverfilen
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

## Hur projektet byggs och körs
**OBS: Node.js och NPM krävs: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm**
1. Klona ner/ladda ner projekt.
2. Kör följande kommandon i konsolen (det är dessa dependencies som finns):  
- npm i nodemon
- npm i express
- npm i uuid
3. Kör följande kommando i konsolen för att starta programmet: npm start
4. För att testa programmet kan server.rest användas för att skicka requests
