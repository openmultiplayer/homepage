import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Ein in Arbeit stehender Mehrspieler-Mod für <em>Grand Theft Auto: San Andreas</em>, der vollständig mit dem bereits existierendem Mod <em>SA:MP (San Andreas Multiplayer) komaptibel ist</em>.
    </p>
    <br />
    <p>
      Somit <strong>funktionieren sowohl der originale SA:MP Client, als auch die existierenden SA:MP Scripts mit open.mp</strong>. Zusätzlich werden viele der im SA:MP Server existierenden Bugs behoben werden, ohne das Scriptseitig verrückte Workarounds nötig sind.
    </p>
    <p>
      Falls du dich fragst, zu wann das erste öffentliche Release geplant ist oder wie du zum Projekt beitragen kannst, dann <a href="https://www.burgershot.gg/showthread.php?tid=99">schaue für mehr Informationen ins Forum</a>.
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
    <h2>Was ist open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) ist eine Alternative zum Mehrspieler-Mod <em>San Andreas Multiplayer</em>, der durch die aufkommenden Probleme aufgrund von fehlenden Updates und schlechtem Communitymanagement erstellt wurde. Es bietet volle Rückwärts-Kompatibilität und dient als Ersatz für den existierenden SA:MP Server. Somit können neben den neuen OMP Clients auch die alten SA:MP Clients genutzt werden. Zudem wird es neue Fehlerbehebungen und Funktionen geben, welche bei SA:MP leider auf der Strecke gelassen wurden.
    </p>
    <hr />
    <h2>Ist es eine Abwandlung von SA:MP?</h2>
    <p>Nein, der Quellcode wurde komplett von Anfang an selbst geschrieben. Es gab zuvor von Anderen bereits Versuche einen Fork zu erstellt, dieser hatte jedoch folgende Probleme:</p>
    <ol>
      <li>Die Forks haben auf in der Vergangenheit geleaktem SA:MP Quellcode basiert. Die Autoren des Forks hatten nicht die Rechte den Quellcode zu benutzen und haben somit sowohl ethish als auch legal nicht korrekt gehandelt. Wir wollen uns von solchen Praktiken fernhalten. Zwar dauert so die Entwicklung länger, jedoch ist es auf Langzeit die einzige richtige Entscheidung.</li>
      <li>Sie haben versucht zu viele Dinge zur gleichen Zeit neu zu erfinden. Es wurde versucht die Scripting engine zu ersetzen, neue Features hinzuzufügen und existierende zu löschen. Durch all diese Entscheidung und dessen Timing gab es zudem inkompatible Änderungen. Dies hinderte bereits bestehende SA:MP Server am Wechsel auf die neue Codebase, da sie einen Großteil ihrer Scripts hätten umschreiben müssen. Diese Änderungen Kosten zu viel Zeit und sind ein zu großes Risiko, da dadurch möglicherweise auch neue Fehler verursacht werden. Daher können Server mit großen Spieleranzahlen diese Änderungen nicht einfach durchführen. Auch wir wollen neue Funktionen hinzufügen und Dinge verändern, jedoch werden wir uns als Hauptziel setzen, immer Rückwärtskompatibel zu bleiben, um den Serverbesitzern zu erlauben unseren Code benutzen zu können, ohne dafür den eigenen anpassen zu müssen.</li>
    </ol>
    <hr />
    <h2>Wieso macht ihr euch diese Arbeit?</h2>
    <p>Obwohl die Community bereits mehrmals durch Vorschläge, Kritik und dem Anbieten von Hilfe versucht hat, die offizielle SA:MP-Entwicklung wieder in Gang zu bringen gab es keine Besserungen. Dies ist wahrscheinlich auf ein fehlendes Interesse der SA:MP Entwickler zurückzuführen. An sich ist dieses fehlende Interesse nicht verwerflich, jedoch gab es leider keinen Nachfolger und somit keine Weiterentwicklung. Anstatt die Entwicklung, an die die daran interessiert sind, weiterzugeben, entschied der Gründer alles mit ins Grab zu nehmen und dabei solange wie nur irgendwie möglich alles mit minimal nötigem Aufwand am Leben zu halten. Trotz des großen Interesse der starken und sehr familiären Community, glaubte der Gründer das der Mod nur 1 oder 2 weitere Jahre überleben würde und die Community für den aktuellen Zustand von SA:MP verantwortlich ist und keine Fortführung der Entwicklung verdient.</p>
    <br />
    <p>Wir sind andere Meinung.</p>
    <hr />
    <h2>Da es "Open" Multiplayer heißt, wird es auch quelloffen sein?</h2>
    <p>Eventuell ist dies der Plan. Vorerst konzentrieren wir uns auf eine offene und transparente Entwicklung und arbeiten auf eine Veröffentlichung des Quellcodes hin.</p>
    <hr />
    <h2>Wie kann ich helfen?</h2>
    <p>Schau ins Forum, dort haben wir einen Thread zu diesem Thema. Wir versuchen den Thread immer aktuell zu behalten und mit Neuigkeiten zu versehen sobald mehr Arbeit zur verfügung steht. Obwohl das Projekt etwas eher an die Öffentlichkeit gelangt ist als geplant und wir bereits auf gutem Wege zu einem ersten Release sind, ist trotzdem jede Hilfe willkommen. Schon vorab danken wir dir für dein Interesse und das du an dieses Projekt glaubst:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Wie helfe ich" Thread (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Was ist burgershot.gg?</h2>
    <p>burgershot.gg ist hauptsächlich ein Gaming-Forum. Einige der dort angemeldeten Leute sind sowohl Gamer als auch in der OMP Entwicklung involvierte Personen. Zudem werden dort die relevanten Neuigkeiten bezüglich OMP veröffentlicht, jedoch sind burgershot.gg und OMP nicht ein und dasselbe Projekt. Auch ist OMP nicht das Eigentum von burgershot.gg. Sobald OMP seinen eigenen Webspace bekommt, können die OMP Inhalte von burgershot.gg wegmigriert werden. Dies ist vergleichbar mit SA:MP, welches damals noch kein eigenes Forum hatte, sondern die GTAForums nutzte.</p>
    <hr />
    <h2>Was ist mit OpenMP?</h2>
    <p>Dies ist das "Open Multi-Processing (OpenMP)", aber wir sind "open.mp". Großer Unterschied!</p>
  </div>
);
