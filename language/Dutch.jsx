import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Een opkomende multiplayer modificatie voor <em>Grand Theft Auto: San Andreas</em> die volledig achterwaarts compatibel is 
      met de bestaande multiplayer modificatie <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Dit betekent dat <strong>de bestaande SA:MP cliënt en alle bestaande SA:MP scripts zullen werken met open.mp</strong> en,
      in combinatie met dit, veel bugs ook gefixed zullen worden in de server's software zonder de benodigdheid van hacks en
      andere alternatieven.
    </p>
    <p>
      Als u zich afvraagt wanneer de publieke publicatie is gepland of hoe u kan helpen met het bijdragen aan dit project, bekijk dan{" "}
      <a href="https://www.burgershot.gg/showthread.php?tid=99">dit forum topic</a> voor meer informatie.
    </p>
    <h1>
      <a href="/faq">FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Wat is open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) is een vervangende multiplayer modificatie voor San Andreas, gestart als reactie op de
      spijtige toename van problemen met updates en het management van SA:MP. Het is volledig achterwaards compatibel, ontworpen
      als een vervanging dat het mogelijk maakt om met bestaande SA:MP cliënten te spelen op OMP servers samen met nieuwe OMP cliënten, terwijl
      updates en nieuwe features worden aangeboden die elders zijn gestrand.
    </p>
    <hr />
    <h2>Is het een fork?</h2>
    <p>
      Nee. Dit is compleet opnieuw geschreven, profijt van een decennium van kennis en ervaring. Er zijn pogingen geweest
      om SA:MP te forken, maar wij geloven dat deze twee belangrijke problemen hadden:
    </p>
    <ol>
      <li>
        Ze waren gebasseerd op gelekte SA:MP broncode. De makers van deze modificaties hadden geen legaal recht tot deze broncode, 
        en liepen dus risico, beide moraal en legaal. Wij weigeren ronduit om deze code te gebruiken. Dit belemmert
        de ontwikkelings snelheid ietsjes, maar is de juiste zet op de lange termijn.
      </li>
      <li>
        Ze probeerden te veel in één keer opnieuw uit te vinden. Ofwel het vervangen van de scripting engine, of het verwijderen van features terwijl
        nieuwe toegevoegd werden, of gewoon dingen veranderen op een tegenstrijdige manier. Dit weerhoudt bestaande servers met enorme
        codebases en playerbases om over te stappen, omdat ze sommige delen, zo niet alles, van hun broncode moeten herschrijven - een
        potentieel grote onderneming. Wij menen het volledig om nieuwe features toe te voegen, en dingen te wijzigen, na verloop van tijd, maar wij zijn ook
        gefocust op het ondersteunen van bestaande servers, wat het mogelijk maakt voor hun om onze broncode te gebruiken zonder die van hun te veranderen.
      </li>
    </ol>
    <hr />
    <h2>Waarom doen jullie dit?</h2>
    <p>
      Ondanks een ontelbaar aantal pogingen om de ontwikkeling van SA:MP officieel vooruit te duwen, in de aard van suggesties, lastigvallen, en
      voorstellen van hulp vanuit de bèta team; samen met een gemeenschap schreeuwend voor iets nieuws; was er geen progressie
      geboekt. Dit was uitgebreid geloofd om simpelweg desinteresse op het vlak van modificatie leiderschap te tonen, dat
      opzich geen groot probleem is, maar er was geen troonopvolging. Inplaats van het overhandigen van de ontwikkeling
      aan degene die geinteresseerd zijn in het vervolgen van het werk aan de modificatie, wilde de oprichter simpelweg alles met zichzelf naar beneden
      halen, terwijl hij blijkbaar zolang als mogelijk de modificatie in stand wilt houden met minimale moeite. Sommigen claimen dat dit voor
      passieve inkomen redenen is, maar daar is geen bewijs voor. Ondanks veel interesse, en een sterke en overerfbare
      gemeenschap, geloofde hij dat er nog maar 1-2 jaar over waren voor de modificatie, en dat de gemeenschap die zo hard gewerkt had
      om SA:MP te maken wat het vandaag is, geen voortzetting verdiende.
    </p>
    <br />
    <p>Wij zijn het daarmee oneens.</p>
    <hr />
    <h2>Omdat het "Open" Multiplayer is genoemd, gaat het openbronsoftware worden?</h2>
    <p>
      Op den duur is dat het plan, ja. Voor nu zijn we aan het proberen om de ontwikkeling publiek te houden, wat betreft communicatie en
      transparantie (Wat op zichzelf al een verbetering is), en stappen over op open-sourcing zoals en wanneer we kunnen, eenmaal
      wanneer alles uitgezocht is en alles een plaatsje heeft gevonden.
    </p>
    <hr />
    <h2>Hoe kan ik helpen?</h2>
    <p>
      Houd je ogen open op het forum. We hebben een topic voor exact deze vraag, en zullen het actueel houden wanneer meer werk beschikbaar
      is. Hoewel het project iets eerder onthuld werd dan bedoeld, zijn we reeds goed onderweg voor een
      initiële uitgave, maar dat betekent niet dat meer help niet enorm gewaardeerd wordt. Dank bij voorbaat voor
      het interesse tonen, en geloven in het project:
    </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Hoe te helpen" topic (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Wat is burgershot.gg?</h2>
    <p>
      burgershot.gg is een gaming forum, niets meer niets minder. Veel van de mensen zijn betrokken in beiden, en sommige OMP ontwikkelingen
      en updates worden daar gepubliceerd, maar het zijn twee onafhankelijke projecten. Ze zijn niet de OMP forums, noch is OMP een
      burgershot eigendom. Als er eenmaal een complete OMP site online is, kunnen de twee losgemaakt worden van elkaar (net als dat
      SA:MP ooit gehost was onder GTAForums voordat haar eigen site online stond).
    </p>
    <hr />
    <h2>Hoe zit het met OpenMP?</h2>
    <p>Het Open Multi-Processing project is "OpenMP", wij zijn "open.mp". Compleet verschillend.</p>
  </div>
);
