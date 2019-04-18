import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
	  Nadchodzący tryb multiplayer dla <em>Grand Theft Auto: San Andreas</em>, który będzie w pełni wstecznie kompatybilny z aktualnie egzystującym multiplayerem <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Oznacza to, że <strong>wszystkie egzystujące klienty SA-MP'a oraz wszystkie jego skrypty będą działać na platformie open.mp</strong>. Ponadto, zostanie poprawionych wiele błędów natywnie wewnątrz nowego oprogramowania bez potrzeby pobierania specjalnych do tego narzędzi lub wykorzystywania innych obejść.
    </p>
    <p>
	  Jeżeli zastanawiasz się na kiedy zaplanowano wydanie albo chciałbyś wnieść własny wkład do projektu, proszę odwiedź <a href="https://www.burgershot.gg/showthread.php?tid=99">to forum</a> po więcej informacji.
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
    <p>open.mp (Open Multiplayer, OMP) to zastępczy tryb multiplayer dla San Andreas, zainicjowany w odpowiedzi na niefortunny wzrost problemów z aktualizacjami i zarządzaniem klienta SA-MP. Wstępna wersja będzie zamiennikiem tylko dla serwera. Istniejące klienty SA-MP'a będą mogli połączyć się do serwerów naszych serwerów. W przyszłości, nowy klient open.mp stanie się dostępny, który pozwoli na idostępnianie bardziej interesujących aktualizacji.</p>
    <hr />
    <h2>Czy to jest kolejny 'fork'?</h2>
    <p>Nie. Jest to kompletnie pisane na nowo oprogramowanie, wykorzystując dziesięciolecia wiedzy i doświadczenia. Podejmowano wcześniej próby rozwidlenia (fork) SA-MP'a, ale uważamy, że miały one dwa główne problemy:</p>
    <ol>
      <li>Bazowały one na wycieku kodu źródłowego SA-MP. Autorzy tych modów nie posiadali prawnego prawa do tego kodu, a zatem rodziło to większe problemy, zarówno pod względem moralnym, jak i prawnym. Odmawiamy użycia tego kodu. To nieco utriudnia szybkość rozwoju, ale jest to właściwe posunięcie w dłuższej perspektywie.</li>
      <li>Starały się one na nowo odkryć zbyt wiele. Albo zastąpienie całego silnika skryptów, albo usunięcie funkcji podczas dodawaniach nowych lub po prostu poprawianie rzeczy w niekompatybilny sposób. Działa to w sposób negatywny dla wszystkich istniejących serwerów w przemieszczaniu się z ogromnymi bazami danych graczy i skomplikowanymi trybami gier, co w konsensusie prowadziłoby do przepisywaniu niektórych części kodu jak nie całego kodu. Z czasem zamierzamy dodawać funkcje i ulepszać rzeczy, ale skupiamy się również na wspieraniu istniejących serwerów, co pozwala im korzystać z naszego kodu bez zmiany ich.</li>
    </ol>
    <hr />
    <h2>Dlaczego to robicie?</h2>
    <p>Pomimo licznych prób w przyspieszeniu rozwoju SA-MP'a drogą oficjalną, w formie sugestii czy ofert pomocy od zespołu Beta; wraz z całą społecznością wołając o "coś" nowego; nie zaobserwowano żadnego postępu od paru lat. Powszechnie uważano, że wynikało to z powodu braku zainsteresowania ze strony właściciela trybu multiplayer, co nie jest problemem samo w sobie, ale nie było żadnej linii sukcesji. Zamiast przekazać rozwój projektu wszystkim tym, którzy są tym zainteresowani i chcą kontynuować pracę nad modem, założyciel chciał po prostu sprowadzić wszystko na siebie, pozornie łącząc rzeczy tak długo, jak to możliwe, przy minimalnym wysiłku. Niektórzy twierdzą, że jest to powiązane z pasywnym dochodem, ale niestety nie ma na to dowodów. Pomimo ogromnego zainteresowania i silnej, rodzinnej społeczności, wierzył, że mod przetrwa zaledwie rok lub dwa, a społeczność, która tak ciężko pracowała, aby uczynić SA-MP'a tym czym jest dzisiaj nie zasługują na aktualizację i nowe zmiany.</p>
    <br />
    <p>Nie zgadzamy się.</p>
    <hr />
    <h2>Jakie są nasze opinie na temat Kalcor/SA-MP/ogólnie?</h2>
    <p>Uwielbiamy SA-MP'a, dlatego jesteśmy tutaj przede wszystkim - i zawdzięczamy to Kalcor'owi. Wykonał kawał roboty dla tego modu na przestrzeni tych wszystkich lat, a tego wkładu nie należy zapominać ani ignorować. Działania prowadzące do open.mp zostały podjęte poniewasz nie zgodziliśmy sięz kilkoma ostatnimi decyzjami, i pomimo wielkrotnych prób kierowania modem w innym kierunku, żadne rozwiązanie nie było widoczne. W związku z tym byliśmy zmuszeni podjąć niefortunną decyzję, aby spróbować i kontynować SA-MP w duchu bez Kalcor'a. Nasze działania nie zostały podjęte przeciwko niemu osobiście i nie powinny być one postrzegane jako atak na niego. Nie będziemy tolerowali jakichkolwiek obelg wobec kogokolwiek - niezależnie od tego, gdzie stoją w kwestii open.mp; Powinniśmy mieć możliwość przeprowadzenia rozsądnej debaty bez uciekania się do ataków ad-hominem.</p>
    <hr />
    <h2>Czy to nie tworzy podziału społeczności?</h2>
    <p>Zdecydowanie to nie jest w naszej intencji. W idealnym świecie nie byłoby żadnego podziału, ale rozdzielenie niektórych i zapisanie tej części jest lepsze niż oglądanie jak cała rzecz obumiera. W rzeczywistości od momentu w którym ten mod został ogłoszony wiele społeczności nie-angielskich zaangażowało się w społeczność angielską. Społeczności te były już powoli wypychane na margines społeczny, więc ich ponowne włączenie się rzeczywiście przywraca podzieloną społeczność. Duża liczba ludzi została zbanowana z oficjalnego forum SA-MP (a w niektórych przypadkach ich historia postów została również usunięta), ale sam Kalcor wskazał, że oficjalne forum nie jest SA-MP, a zaledwie częścią SA-MP. Wielu graczy i właścicieli serwerów nigdy nie pisało na forum czy też się rejestrowało; więc ponowne rozmawianie z tymi ludźmi jednoczy jeszcze więcej części społeczności.</p>
    <hr />
    <h2>W związku z tym, że jesto to "Open" Multplayer, czy będzie dostępny kod źródłowy?</h2>
    <p>Docelowo tak, taki jest plan. Na razie staramy się, aby rozwój był otwarty pod względem komunikacji i przejrzystości (co samo w sobie jest ulepszeniem) i będzie to zmierzało w kierunku upublicznienia kodu źródłowego, kiedy będziemy tylko mogli, gdzie wszystko zostanie uporządkowane i uregulowane.</p>
    <hr />
    <h2>Kiedy będzie pierwszy 'release'?</h2>
    <p>To jest odwieczne pytanie, na które jest odwieczna odpowiedź: kiedy projekt będzie gotowy. Po prostu nie ma sposobu, aby dowiedzieć sie jak długo zajmie przygotowywanie takiego projektu. Od jakiegoś czasu cicho działa i już widzieliśmy kilka wahań poziomu aktywności, w zależności od tego jak bardzo ludzie są zajęci. Zapewniamy jednak, że jest już wszystko na dobrej drodze i szybko postępujemy dzięki podstawowym decyzjom projektowym (więcej na temat architektury opowiemy później).</p>
    <hr />
    <h2>Jak mogę pomóc?</h2>
    <p>Miej oczy szeroko otwarte na forum. Mamy konkretny temat na forum dotyczący pomocy i będziemy go co jakiś czas aktualizować, gdy będą potrzebne dodatkowe ręce do pracy. Podczas, gdy projekt został ujanwiony nieco wcześniej niż zamierzano, jesteśmy na dobrej drodze do pierwszego wydania, ale to nie znaczy, że więcej pomocy nie będzie potrzebne. Z góry dziękujemy za zainsteresowanie i wiarę w projekt:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Temat "Jak mogę pomóc" (w języku angielskim) (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Czym jest burgershot.gg?</h2>
    <p>burgershot.gg jest to forum o grach, nic więcej. Wiele osób jest zaangażowanych w oba tematy, a niektóre prace OMP i aktualizacje są tam publikowane, ale są to dwa niezależne projekty. Nie są to fora o OMP ani OMP nie jest własnością burgershot. Po uruchomieniu pełnej strony OMP, obie mogą zostać wyodrębnione ze sobą (tak jak SA-MP był kiedyś hostowany przez GTAForums, zanim jego własna strona została uruchomiona).</p>
    <hr />
    <h2>Czym jest OpenMP?</h2>
    <p>Projekt Open Multi-Processing jest "OpenMP", jesteśmy "open.mp". Całkowicie czymś innym.</p>
  </div>
);
