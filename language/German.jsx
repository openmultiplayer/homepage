import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>Ein in Arbeit stehender Mehrspieler-Mod für <em>Grand Theft Auto: San Andreas</em>, der vollständig mit dem bereits existierendem Mehrpsieler-Mod <em>San Andreas Multiplayer</em> kompatibel ist.</p>
    <br />
    <p>Somit <strong>funktionieren sowohl der originale SA:MP Client, als auch die existierenden SA:MP Skripte mit open.mp</strong>. Zusätzlich werden viele Fehler innerhalb der Server Software behoben ohne das man Hacks dafür benötigt, oder Probleme anderweitig umgehen muss.</p>
    <p>Falls du dich fragst wann dieser Mehrspieler-Mod für jeden veröffentlicht wird, oder wenn du uns dabei helfen möchtest am Projekt teilzunehmen, dann besuche für weitere Informationen <a href="https://www.burgershot.gg/showthread.php?tid=99">diesen Forum Beitrag</a>.</p>
    <h1>
      <a href="/faq">FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Was ist open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) ist eine Alternative zum Mehrspieler-Mod San Andreas Multiplayer, der durch die aufkommenden Probleme aufgrund von fehlenden Aktualisierungen und schlechter Gemeindeverwaltung erstellt wurde. Die erste Veröffentlichung wird nur eine vollständige Ergänzung für den Server sein. Bereits existierende SA:MP Clients können sich mit dem Server verbinden. In der Zukunft wird ein neuer open.mp Client verfügbar sein, wodurch es möglich wird weitere interessante Aktualisierungen zu veröffentlichen.</p>
    <hr />
    <h2>Ist das eine Abzweigung von SA:MP?</h2>
    <p>Nein, der Quellcode wurde komplett von Anfang an selbst geschrieben, mit dem Vorteil Wissen und Jahrzente lange Erfahrungen in das Projekt reingebracht werden. Es existieren Versuche aus SA:MP abzuzweigen, doch daraus enstehen zwei relevante Probleme:</p>
    <ol>
      <li>Diese basieren auf eine durchgesickerte Version von SA:MP. Die Autoren solcher Modifikationen haben keine rechtliche Erlaubnis Quellcode zu San Andreas Multiplayer zu verwenden, und somit ist das moralisch und rechtlich gesehen nicht vertretbar. Wir wollen uns von solchen Praktiken fernhalten. Zwar dauert so die Entwicklung länger, jedoch ist es auf Langzeit die einzige richtige Entscheidung.</li>
      <li>Sie haben versucht zu viele Dinge zur gleichen Zeit neu zu erfinden. Entweder haben sie die Skript-Engine ersetzt, oder Features entfernt während sie andere Features hinzugefügt haben, oder sie haben bestimmte Sachen bis sie inkompatibel sind abgeändert. Dies hinderte das bereits existierende Server mit großem Codebasis hinüber wechseln können, somit müsste man deren Quellcode teilweise umschreiben bishin zu komplett neu schreiben, wodurch das ein massives Unterfangen wäre. Wir wollen neue Features hinzufügen, Sachen über die Zeit abändern, doch zugleich wollen wir bereits existierende Server dabei unterstützen. Wobei sie unseren Code nutzen können, ohne ihren eigenen Code abzuändern.</li>
    </ol>
    <hr />
    <h2>Wieso macht ihr euch diese Arbeit?</h2>
    <p />
    <p>Obwohl die Community bereits mehrmals durch Vorschläge, Kritik und dem Anbieten von Hilfe versucht hat, die offizielle SA:MP-Entwicklung wieder in Gang zu bringen, gab es keine Besserungen. Dies ist wahrscheinlich auf ein fehlendes Interesse der SA:MP Entwickler zurückzuführen. An sich ist dieses fehlende Interesse nicht verwerflich, jedoch gab es leider keinen Nachfolger und somit keine Weiterentwicklung. Anstatt die Entwicklung, an die die daran interessiert sind, weiterzugeben, entschied der Gründer alles mit ins Grab zu nehmen und dabei solange wie nur irgendwie möglich alles mit minimal nötigem Aufwand am Leben zu halten. Trotz des großen Interesse der starken und sehr familiären Gemeinschaft, glaubte der Gründer das der Mod nur ein oder zwei weitere Jahre überleben würde und die Gemeinschaft für den aktuellen Zustand von SA:MP verantwortlich ist und keine Fortführung der Entwicklung verdient.</p>
    <br />
    <p>Wir sind der anderen Meinung.</p>
    <hr />
    <h2>Da es "Open" Multiplayer heißt, wird es auch Open Source sein?</h2>
    <p>Eventuell ist dies der Plan. Vorerst konzentrieren wir uns auf eine offene und transparente Entwicklung und arbeiten auf eine Veröffentlichung des Quellcodes hin.</p>
    <hr />
    <h2>Wie kann ich dabei behilflich sein?</h2>
    <p>Besuche das Forum, dort haben wir einen Beitrag zu diesem Thema erstellt. Wir versuchen diesen Beitrag immer aktuell zu halten. Sobald mehr Arbeit zur Verfügung steht, werden Informationenn dazu im Forum Beitrag verfügbar sein. Obwohl das Projekt etwas früher als geplant an die Öffentlichkeit gelangt ist, und wir bereits auf gutem Wege sind die erste Version zu veröffentlichen, ist trotzdem jede Hilfe willkommen. Schon vorab danken wir dir für dein Interesse, und das du an dieses Projekt glaubst:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"How to help" (Wie kann ich helfen) Beitrag (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Was ist burgershot.gg?</h2>
    <p>burgershot.gg ist hauptsächlich ein Gaming-Forum. Einige der dort registrierten Leute sind sowohl Videospieler, solwohl als auch in der Entwicklung von OMP involviert. Zudem werden dort die relevanten Neuigkeiten bezüglich OMP veröffentlicht, jedoch sind burgershot.gg und OMP nicht ein und dasselbe Projekt. Auch ist OMP nicht das Eigentum von burgershot.gg. Sobald OMP seinen eigenen Webspace bekommt, können die OMP Inhalte von burgershot.gg migriert werden. Dies ist vergleichbar mit SA:MP, welches damals noch kein eigenes Forum hatte, sondern die GTAForums nutzte.</p>
    <hr />
    <h2>Was ist mit OpenMP?</h2>
    <p>Dies ist das "Open Multi-Processing (OpenMP)" Projekt, aber wir sind "open.mp". Sehr großer Unterschied!</p>
  </div>
);
