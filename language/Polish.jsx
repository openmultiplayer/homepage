import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Nadchodzący multiplayer do <em>Grand Theft Auto: San Andreas</em>, który będzie w pełni kompatybilny z aktualnie istniejącym <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Oznacza to, <strong>że aktualny klient SA:MP i wszystkie skrypty SA:MP będą działały na open.mp</strong>, a dodatkowo wiele błędów zostanie naprawionych bez konieczności stosowania wspomagaczy (hacks) i obejść.
    </p>
    <p>
      Jeżeli zastanawiasz się kiedy zostanie wydana oficjalna wersja projektu bądź w jaki sposób możesz się do niego przyczynić, zapoznaj się z <a href="https://www.burgershot.gg/showthread.php?tid=99">tym tematem na forum</a>, aby uzyskać niezbędne informacje.
    </p>
    <h1>
      <a href={faq}>FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Czym jest open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) to zastępczy multiplayer do San Andreas, zainicjowany w odpowiedzi na wzrost problemów z aktualizacjami i zarządzaniem SA:MP. Pierwsze wydanie będzie wyłącznie zastępczym zamiennikiem serwera. Aktualny klient SA:MP będzie mógł połączyć się z tym serwerem. W przyszłości udostępnimy nowy klient open.mp, który pozwoli na wydanie ciekawszych aktualizacji.</p>
    <hr />
    <h2>Czy jest to fork?</h2>
    <p>Odpowiedź na to pytanie brzmi nie. Kod zostanie napisany wykorzystując przy tym dziesięciolecia wiedzy i doświadczenia. Faktem jest iż były już próby rozwidlenia SA:MP, jednak wystąpiły dwa duże problemy:</p>
    <ol>
      <li>Projekty bazowały na wycieku kodu źródłowego SA:MP. Autorzy nie mieli praw do tego kodu, dlatego też byli w trudniej sytuacji, zarazem moralnie jak i prawnie. Odmawiamy bezpośredniego użycia tego kodu. Co prawda utrudnia to szybkość rozwoju, ale jest właściwym posunięciem patrząc w przyszłość.</li>
      <li>Próbowali zrobić zbyt wiele. Zarówno zmiana całego silnika, usuwanie starych funkcji i dodawanie nowych lub poprostu wprowadzanie poprawek w niekompatybilny sposób. Uniemożliwia to przenoszenie serwerów z olbrzymią ilością kodu i danych kont graczy, ponieważ należałoby przepisać część swojego kodu, jeśli nie cały - potencjalnie czasochłonne przedsięwzięcie. Z czasem planujemy dodać nowe funkcje, udoskonalić istniejące rzeczy, aczkolwiek chcemy również skupić się na wsparciu dla istniejących serwerów pozwalając im używać ich kodu bez wprowadzania jakichkolwiek zmian.</li>
    </ol>
    <hr />
    <h2>Dlaczego to robimy?</h2>
    <p>Liczne próby oficjalnego przyspieszenia rozwoju SA:MP w formie sugestii, pospieszania i ofert pomocy zespołu beta; Społeczność domagająca się czegoś nowego; Pomimo tego wszystkiego nie zauważyliśmy żadnego postępu. Powszechnie uważano, że jest to po prostu brak zainteresowania ze strony założyciela projektu, co nie jest problemem samo w sobie, ale był nim brak przekazania dowódctwa. Zamiast przekazywać rozwój wszystkim tym, którzy są zainteresowani kontynuowaniem pracy nad projektem, założyciel chciał po prostu wziąć wszystko na siebie, pozornie robiąc rzeczy tak długo, jak to możliwe, przy minimalnym wysiłku. Niektórzy twierdzili, że powodem były bierne dochody, ale nie ma na to dowodów. Pomimo ogromnego zainteresowania ze strony silnej i rodzinnej społeczności wierzył, że projektowi zostało tylko od jednego do dwóch lat, a społeczność, która tak ciężko pracowała, aby uczynić SA:MP tym czym jest teraz nie zasługuje na kontynuację projektu.</p>
    <br />
    <p>Nie zgadzamy się.</p>
    <hr />
    <h2>Jakie są wasze opinie na temat Kalcor/SA:MP/czegokolwiek?</h2>
    <p>Kochamy SA:MP i dlatego tutaj jesteśmy zawdzięczając to Kalcorowi. Zrobił bardzo dużo dla tego projektu przez lata i ten wkład nie powinien być zapomniany ani ignorowany. Działania prowadzące do rozpoczęcia prac nad open.mp zostały podjęte, ponieważ nie zgodziliśmy się z kilkoma ostatnimi decyzjami i pomimo wielokrotnych prób nakierowania projektu na właściwy tor nie przyniosło to żadnych efektów. W związku z tym byliśmy zmuszeni podjąć niefortunną decyzję, aby spróbować kontynuować SA:MP bez Kalcora. Nie jest to działanie podjęte przeciwko niemu osobiście i nie powinno być postrzegane jako atak na jego osobę. Nie będziemy tolerować żadnych obelg względem innych - niezależnie od tego jakie jest ich podejście do open.mp; powinniśmy mieć możliwość przeprowadzenia rozsądnej debaty bez uciekania się do ataków ad-hominem.</p>
    <hr />
    <h2>Czy nie jest to czasem podział społeczności?</h2>
    <p>Nie taki jest nasz zamiar. Najlepiej byłoby, gdyby w ogóle nie było żadnego podziału, ale rozdzielenie niektórych i uratowanie pewnej części jest lepsze niż oglądanie, jak cała społeczność upada. W rzeczywistości od czasu ogłoszenia tego projektu wiele osób spoza Anglii ponownie zaangażowało się w społeczność angielską. Grupy takich ludzi były powoli spychane na bok, tak więc ich ponowne włączenie łączy podzieloną społeczność. Duża liczba osób została zablokowana na oficjalnym forum SA:MP (a w niektórych przypadkach wszystkie ich wpisy zostały usunięte), ale sam Kalcor wskazał, że forum to nie cały SA:MP, a jedynie jego część. Wielu graczy i właścicieli serwerów nigdy nie umieściło wpisów na tym forum ani nie założyło nawet konta; zatem rozmowa z tymi ludźmi pozwoli zjednoczyć jeszcze większą część społeczności.</p>
    <hr />
    <h2>Skoro jest to "Open" Multiplayer, czy będzie to open-source?</h2>
    <p>Ostatecznie jest taki plan. Aktualnie staramy się, aby rozwój projektu był otwarty pod względem komunikacji i przejrzystości (co samo w sobie jest poprawą), a także zmierzał w kierunku otwartego kodu źródłowego kiedy tylko będziemy mogli nad tym pracować, a wszystko będzie odpowiednio uporządkowane.</p>
    <hr />
    <h2>Kiedy projekt zostanie wydany?</h2>
    <p>To jest odwieczne pytanie, niestety ma odwieczną odpowiedź: w momencie, gdy skończymy. Po prostu nie ma sposobu, aby dowiedzieć się, ile czasu może zająć taki projekt. Działamy już od jakiegoś czasu i widzieliśmy kilka wahań poziomu aktywności, w zależności od tego, jak bardzo ludzie są zajęci. Możemy jednak zapewnić, że jesteśmy już na dobrej drodze i widać postęp, dzięki pewnym podstawowym decyzjom projektowym (później udzielimy więcej informacji na temat architektury).</p>
    <hr />
    <h2>Jak mogę pomóc?</h2>
    <p>Obserwuj nasze forum. Mamy temat stworzony na te potrzeby i będziemy go aktualizować wraz z postępem prac. Pomimo tego, że projekt został ujawniony nieco wcześniej niż pierwotnie zamierzano, jesteśmy na dobrej drodze do wypuszczenia pierwszego wydania, nie oznacza to jednak, że pomoc nie jest mile widziana. Z góry dziękujemy za zainteresowanie i wiarę w projekt:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Temat - "Jak pomóc" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Czym jest burgershot.gg?</h2>
    <p>burgershot.gg to forum o tematyce gier, nic więcej. Duża ilość osób jest zaangażowana w obydwa projekty, dodatkowo niektóre prace nad OMP są tam publikowane, jednak należy pamiętać, że są to dwa niezależnie projekty. Nie jest to forum OMP, ani OMP nie jest własnością burgershot. Po uruchomieniu oficjalnej strony OMP, projekty mogą zostać wyodrębnione (tak jak SA: MP był kiedyś hostowany przez GTAForums, zanim jego własna strona została uruchomiona).</p>
    <hr />
    <h2>Co z OpenMP?</h2>
    <p>Projekt "The Open Multi-Processing" to "OpenMP", natomiast nasze przedsięwzięcie to "open.mp". Całkowicie różne rzeczy.</p>
  </div>
);
