# Procesverslag

Gekozen Use Case: In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.

## Idee:
Het idee was om een lijst met films te hebben in een grid. Deze films hebben een hartje waar op geklikt kan worden. Als hierop geklikt wordt komt er in de navigatie balk een link genaamd 'Watchlist' die aangeeft hoeveel films er gekozen zijn.
![alt text](https://github.com/hulsts002/frontend-voor-designers-1920/blob/master/opdracht1/img/Readme/Schets.png "Schets")

## Versie 1:
Het idee heb ik uitgewerkt en werkend gemaakt. Als er op een hartje geklikt wordt veranderd deze van kleur en veranderd het nummer boven aan de pagina naast het woord 'Watchlist' naar het aantal films dat is toegevoegd.
![alt text](https://github.com/hulsts002/frontend-voor-designers-1920/blob/master/opdracht1/img/Readme/Versie1.png "Versie 1")

## Versie 1.1:
Nadat de les voorbij was heb ik verder gewerkt aan de 'Watchlist'. Ik had tot nu toe dat er een cijfer veranderd zou worden als ik op een hartje van een bepaalde film heb geklikt. Maar nu ben ik gaan werken aan dat je ook daadwerkelijk ziet welke films er in de Watchlist zijn gezet.
Dit heb ik gedaan door middel van een dropdown, waarin te zien is welke film is toegevoegd. Wanneer er nogmaals op een hartje geklikt wordt, wordt de film weer verwijderd uit de lijst.
![alt text](https://github.com/hulsts002/frontend-voor-designers-1920/blob/master/opdracht1/img/Readme/Versie1.1.png "Versie 1.1")

## Versie 2:
Ik heb feedback ontvangen in de les. Hieruit is gekomen dat het over het algemeen goed uitzag. Er kunnen wel wat kleine aanpassingen gedaan worden zoals het hartje meer laten opvallen en eventueel in de dropdown lijst een kruisje toevoegen zodat er een extra manier komt om een film te verwijderen uit de lijst.




# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

## Use cases
- In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.
- In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.
- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest.
- Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.

## Werkwijze
Kies een van de Use Cases, schets eerst een ontwerp voor de interactie. Codeer in HTML, CSS en JavaScript en test verschillende versies van je ontwerp in een browser.

## Planning
1. Les 1: Briefing opdracht 1 en beginnen met schetsen en coderen
2. Les 2: Eerste versie testen
2. Les 3: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [Github](https://github.com).

## Resources

### Wat doe je ook alweer in JavaScript?
1. Gebruik de [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) om een element in je html te selecteren
2. Koppel een [evenListener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) aan het element om een mouse-event te detecteren
3. Gebruik het [Classlist object](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) om een css class aan een element toe te voegen of weg te halen.

Voor wat complexere micro-interacties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de:

- eventlistener: [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)
- eventlistener: [animationend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
