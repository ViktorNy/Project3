# Product REST - API

## Projektbeskrivning
Projektet är ett simpelt REST-API där man genom olika endpoints kan hantera resursen produkter. 
Servern (server.js) använder sig av en router (products.router.js) som sköter routingen av 
inkommande requests. Beroende på vad för sorts request som görs kallas en funktion i products.controllers.js.
Denna fil sköter i sin tur kontakten med databasen (en json-fil) genom att använda sig av file system-modulen
för att läsa och skriva till json-filen.  

## Uppfyllda krav
### Godkänt
[x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
[x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
[x] Datan som API:et hanterar sparas lokalt i serverfilen (Gjorde detta först, men ändrade sedan till en JSON-fil p.g.a. VG-kravet.)
[x] Git & GitHub har använts.
[x] Projektmappen innehåller en README.md fil
[x] Uppgiften lämnas in i tid

### Väl Godkänt
[x] Alla punkter för godkänt är uppfyllda
[x] All data ska vara sparad i en JSON-fil istället för i serverfilen
[x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort.
[] Ett simpelt klient-gränssnitt skall finnas för att anropa API:ets olika endpoints, samt
visa upp resultatet vid GET anrop
[x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

## Hur projektet byggs och körs


