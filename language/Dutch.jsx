import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Een in ontwikkeling zijnde multiplayer mod voor <em>Grand Theft Auto: San Andreas</em> die volledig compatible is
      met de bestaande multiplayer mod <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Dat betekent dat <strong>de bestaande SA:MP client en alle huidige SA:MP scripts te gebruiken zijn met open.mp</strong> en,
      daarnaast veel bug fixes met zich meedraagt zonder dat andere hulpprogramma's of trucjes nodig zijn.
    </p>
    <p>
      Als je benieuwd bent naar de release date of interesse hebt om een bijdrage te leveren, kan je{" "}
      <a href="https://www.burgershot.gg/showthread.php?tid=99">deze forumpost</a> lezen voor meer informatie.
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
      open.mp (Open Multiplayer, OMP) is a vervangende multiplayer mod voor San Andreas, als reactie op de
      toenemende hoeveelheid van problemen rondom updates en moderatie in SA:MP. Het is volledig te gebruiken als
      vervanger, zodat gebruikers van de bestaande SA:MP client direct op OMP servers kunnen spelen naast OMP clients,
      met daarbij bovenop alle functionaliteit die eerder nog niet geïmplenteerd was.
    </p>
    <hr />
    <h2>Is dit een fork?</h2>
    <p>
      Nee. Dit project is volledig herschreven, en combineert tientallen jaren kennis en ervaring. Er zijn eerdere pogingen
      geweest om een fork van SA:MP te maken, maar wij vinden dat hier twee problemen aan zitten:
    </p>
    <ol>
      <li>
        Deze pogingen waren gebouwd op uitgelekte broncode van SA:MP. De makers van deze mods hadden geen wettelijk recht
        voor deze code, en liepen dus altijd achter op zowel moreel als rechterlijk niveau. Wij weigeren om met deze
        gelekte code te werken. Dit kan effect hebben op de ontwikkelingstijd, maar op de lange termijn vinden
        wij dit de juiste keuze.
      </li>
      <li>
        Ze namen teveel hooi op de vork, zoals het vervanging van de scripting language, het vervangen en tegelijkertijd toevoegen
        van nieuwe features, of andere aanpassingen die niet goed samenwerkten. Dit verhindert dat servers met veel spelers
        en veel code meekomen, omdat het enorm veel werk vereist om zo veel functies te herschrijven naar een nieuwe infrastructuur.
        Wij gaan zeker nieuwe functionaliteit toevoegen en veranderingen maken, maar we willen er eerst voor zorgen
        dat we bestaande servers en spelers direct toegang kunnen geven tot open.mp.
      </li>
    </ol>
    <hr />
    <h2>Waarom doen jullie dit?</h2>
    <p>
      Ondanks de pogingen om de ontwikkeling van SA:MP door te laten gaan, door middel van ideeën, door te vragen en zelfs
      door direct hulp te bieden in een community die al jaren lang om updates vroeg; er werd geen voortgang gemaakt. Het
      is waarschijnlijk dat dit komt doordat de moderators en ontwikkelaars geen verdere interesse hadden; 
      dit is op zich geen probleem, maar er was niemand die het touw oppakte. In plaats van het overhandigen van
      verdere ontwikkeling aan een nieuw team besloot de eigenaar om alles voor zichzelf te nemen en met minimale
      inspanning proberen de boel bij elkaar te houden. Ondanks de sterke wil van de community is de originele mod tot
      heden amper verder ontwikkeld. 
    </p>
    <br />
    <p>Wij besluiten de draad op te pakken.</p>
    <hr />
    <h2>Omdat het "Open" Multiplayer is, wordt dit project open-source?</h2>
    <p>
      Ja, dat is uiteindelijk de bedoeling. We zijn nu bezig de updates rond de ontwikkeling openbaar en
      transparent te maken, wat op zichzelf al een verbetering is. Zodra het mogelijk is gaan we open.mp open-source maken.
    </p>
    <hr />
    <h2>Kan ik helpen?</h2>
    <p>
      Via het forum kan je op de hoogte blijven. We hebben hier speciaal een topic voor gemaakt, en we zullen
      het updaten wanneer nieuwe informatie beschikbaar is. Ondanks dat het project wat eerder openbaar is geraakt dan
      onze bedoeling was, zijn we wel goed onderweg naar een eerste release. We kunnen alsnog veel hulp gebruiken.
      We willen je alvast bedanken voor je interesse! Je kan het betreffende topic hier vinden:
    </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"How to help" topic (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Wat is burgershot.gg?</h2>
    <p>
      burgershot.gg is een vrijstaand gaming forum. Veel gebruikers zijn betrokken bij beide projecten, en sommige
      open.mp updates zullen hier gepost worden, maar uiteindelijk staan ze los van elkaar. Dit zijn niet de open.mp
      forums. Zodra de complete open.mp website online is zullen de twee projecten van elkaar losgetrokken worden 
      (net zoals SA:MP ooit op GTAForums werd gehost).
    </p>
    <hr />
    <h2>En OpenMP dan?</h2>
    <p>Het Open Multi-Processing project gebruikt de naam "OpenMP" al, wij zijn "open.mp". Er zit geen overlap tussen.</p>
  </div>
);
