import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Een opkomende multiplayer modificatie voor <em>Grand Theft Auto: San Andreas</em> die volledig achterwaarts compatibel zal zijn met de bestaande multiplayer modificatie <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Dit betekent dat <strong>de bestaande SA:MP client en alle bestaande SA:MP scripts zullen werken met open.mp</strong>. Verder zullen er nog een aantal bugs opgelost worden met behulp van de server software, zodat het gebruik van hacks of andere workarounds niet langer nodig zal zijn.
    </p>
    <p>
      Mocht je je afvragen voor wanneer de publieke release gepland staat, of hoe je zelf kan bijdragen aan dit project, bekijk dan zeker <a href="https://www.burgershot.gg/showthread.php?tid=99">dit forum topic</a> voor meer informatie.
    </p>
    <h1>
      <FAQLink>FAQ</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Wat is open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) is een alternatieve multiplayer modificatie voor San Andreas, gestart als reactie op de spijtige toename van problemen met updates en het management van SA:MP. De eerste versie zal enkel een alternatief voor de server bevatten, en bestaande SA:MP clients zullen met deze server verbindingen kunnen maken. In een later stadium zal een aparte open.mp client worden toegevoegd die het mogelijk zal maken om interessantere updates uit te brengen.</p>
    <hr />
    <h2>Is het een fork?</h2>
    <p>Nee. Dit is compleet opnieuw geschreven, profijt van een decennium aan kennis en ervaring. Er zijn pogingen geweest om SA:MP te forken, maar wij geloven dat deze twee belangrijke problemen hadden:</p>
    <ol>
      <li>Ze baseerden zich op gelekte SA:MP broncode. De makers van deze modificaties hadden niet het recht om de broncode legaal te gebruiken en werden, zowel op moreel als legaal vlak, in het defensief gedrongen. Wij weigeren ronduit om deze code te gebruiken. Dit belemmert de ontwikkelings snelheid enigszins maar het is de juiste zet op de lange termijn.</li>
      <li>Ze probeerden te veel in één keer opnieuw uit te vinden; het vervangen van de scripting engine, het verwijderen van functionaliteiten terwijl nieuwe toegevoegd werden, of gewoon dingen die veranderd werden op een tegenstrijdige manier. Dit weerhield bestaande servers met enorme hoeveelheden code en spelers om over te stappen; hun broncode zouden ze grotendeels, zoniet in zijn geheel, hebben moeten herschrijven. Een hachelijke onderneming. Wij zijn absoluut van plan om in der loop der tijd ook nieuwe mogelijkheden toe te voegen, maar wel op zo'n manier dat bestaande servers hier geen hinder van ondervinden; wij veranderen onze code zodat zij de hunne niet hoeven te veranderen.</li>
    </ol>
    <hr />
    <h2>Waarom doen jullie dit?</h2>
    <p>Ondanks een ontelbaar aantal pogingen om de ontwikkeling van SA:MP nieuw leven in te blazen - met behulp van suggesties, hulp vanuit het beta team en een gemeenschap die schreeuwt om vernieuwing - werd er geen vooruitgang geboekt. Algemeen werd aangenomen dat dit simpelweg om desinteresse ging bij de leiding. Dat is op zich niet zo erg, maar er was geen lijn van opvolging. In plaats van de fakkel door te geven zou de ontwikkelaar als het ware liever met het schip ten onder gaan, terwijl hij in de tussentijd met minimale inspanningen het schip drijvend probeert te houden. Er gaan geruchten dat dit vanwege een passief inkomen is, maar dat is niet bewezen. Ondanks overwelgende interesse en een sterke en familiaire gemeenschap geloofde de ontwikkelaar dat de mod nog slechts 1 à 2 jaar te leven had en dat de gemeenschap die zo hard gewerkt had om SA:MP te maken wat het vandaag is geen voortzetting verdiende.</p>
    <br />
    <p>Wij zijn het daar niet mee eens.</p>
    <hr />
    <h2>Deze mod heet "Open" Multiplayer. Betekent dat dat de mod open source zal worden?</h2>
    <p>Op den duur is dat het plan, ja. Voor nu zijn we aan het proberen om de ontwikkeling open te houden qua communicatie en transparantie (wat op zichzelf al een verbetering is). We zullen stappen ondernemen om het project open source te maken zodra alles geregeld is en de rust is weergekeerd.</p>
    <hr />
    <h2>Hoe kan ik helpen?</h2>
    <p>Hou je ogen open op het forum. We hebben een topic voor exact deze vraag, en zullen het updaten wanneer er meer werk beschikbaar wordt. Hoewel het project iets eerder onthuld werd dan bedoeld zijn we reeds goed op weg naar een eerste release, maar dat betekent uiteraard niet dat meer help niet enorm gewaardeerd wordt. Alvast bedankt dat je interesse hebt en gelooft in dit project:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Hoe te helpen" topic (burgershot.gg, Engels)</u>
    </a>
    <hr />
    <h2>Wat is burgershot.gg?</h2>
    <p>burgershot.gg is een gaming forum, niets meer niets minder. Veel van de mensen zijn betrokken in beiden, en sommige OMP ontwikkelingen en updates worden daar gepubliceerd, maar het zijn twee onafhankelijke projecten. Het is niet het OMP forum, noch is OMP eigendom van burgershot. Als er eenmaal een complete OMP site online is, kunnen de twee gescheiden worden (net als dat SA:MP ooit gehost werd door GTAForums voordat haar eigen site online stond).</p>
    <hr />
    <h2>Hoe zit het met OpenMP?</h2>
    <p>Het Open Multi-Processing project is "OpenMP", wij zijn "open.mp". Compleet verschillend.</p>
  </div>
);
