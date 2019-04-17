import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Nadolazeći multiplayer mod za <em>Grand Theft Auto: San Andreas</em> koji će biti u potpunosti kompatibilan sa već postojećim multiplayer modom, <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      To znači da će <strong>postojeći SA:MP klijent i sve postojeće SA:MP skripte biti kompatibilne sa open.mp-om,</strong>a osim toga, mnoge pogreške bit će ispravljene i u samom serveru što znači da više neće biti potrebe za zaobilaznim rješenjima.
    </p>
    <p>
      Ako se pitate kada je planirano javno izdanje ili kako Vi možete pomoći pridonijeti projektu, molimo posjetite <a href="https://www.burgershot.gg/showthread.php?tid=99">ovu temu</a> za više informacija.
    </p>
    <h1>
      <a href={faq}>Često postavljana pitanja</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>Često postavljana pitanja</h1>
    <hr />
    <h2>Što je open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) je zamjenski multiplayer mod za GTA: San Andreas, pokrenut kao odgovor na sve brojnije probleme u vezi novih ažuriranja i u vođenju SA:MP-a. Prvo izdanje će biti instant zamjena samo za server. Postojeći SA:MP klijenti moći će se spojiti na ovaj server. Nešto kasnije će se razviti i novi open.mp klijent, koji će omogućiti još zanimljivija nova ažuriranja.</p>
    <hr />
    <h2>Je li ovo samo još jedna kopija?</h2>
    <p>Ne. Ovo je u potpunosti novi kôd, uzimajući u obzir desetljeća znanja i iskustva. Bilo je pokušaja kopiranja SA:MP-a i ranije, ali vjerujemo da su imali dva glavna problema:</p>
    <ol>
      <li>Bazirani su na procurenom SA:MP izvornom kodu. Autori tih modova nisu imali zakonsko pravo korištenja tog kôda i uvijek su zbog toga bili jedan korak unazad, moralno i zakonski. Mi odbijamo koristiti taj kôd. Ovo malo škodi brzini razvoja ali je ispravan potez u konačnici.</li>
      <li>Pokušali su promijeniti previše toga odjednom. Bilo to zamijenom cijelog skripterskog jezika ili uklanjanjem mogućnosti dok su dodavane nove, ili jednostavno nekompatibilnim podešavanjem. To je zauzvrat spriječilo prebacivanje servera sa velikim baznim kôdom i velikim brojem igrača, jer bi trebali ponovno napisati dio, ako ne i čitav svoj kôd, što je velik poduhvat. Mi ćemo u potpunosti nastojati dodati mogućnosti i izgladiti stvari tijekom vremena ali se isto tako fokusiramo podržati postojeće servere i omogućiti im korištenje našeg kôda bez potrebe da mijenjaju svoj.</li>
    </ol>
    <hr />
    <h2>Zbog čega radite ovo?</h2>
    <p>Unatoč brojnim pokušajima da "poguramo" razvoj SA:MP-a službenim kanalima, u obliku prijedloga, druženja i ponuda pomoći iz tima beta testera; uz cijelu zajednicu koja je vapila za nečim novim; nije bilo napretka. Vjerovalo se da je to jednostavno zbog nedostatka interesa od strane vodstva moda, što nije problem samo po sebi, ali nije bilo linije nasljedstva. Umjesto da preda "ključeve carstva" onima koji su zainteresirani raditi na modu, osnivač je želio sve povući dolje sa sobom, dok je istovremeno razvlačio stvari što je dulje moguće, uz minimalan napor. Neki tvrde da je to iz razloga pasivnih prihoda, ali za to nema dokaza. Unatoč velikom zanimanju te jakoj i obiteljskoj zajednici, vjerovao je da je preostalo još godinu-dvije životu moda i da zajednica, koja je radila toliko naporno da učini SA:MP onim što je danas, nije zaslužila nastavak.</p>
    <br />
    <p>Mi se ne slažemo.</p>
    <hr />
    <h2>Iz naziva "Open" Multiplayer, hoće li ovo biti otvorenog kôda?</h2>
    <p>U konačnici to je plan, da. Za sada nastojimo učiniti razvoj otvoren u smislu komunikacije i transparentnosti (što je samo po sebi napredak), i pokušat ćemo objaviti kôd kada možemo, nakon što se sve sredi.</p>
    <hr />
    <h2>Kako Ja mogu pomoći?</h2>
    <p>Napravili smo temu upravo za to, i ažurirat ćemo je kada još posla bude dostupno. Iako je projekt otkriven nešto ranije no što je planirano, već smo na dobrom putu prema prvom izdanju, ali to ne znači da još pomoći nije veoma cijenjeno. Hvala Vam unaprijed za Vaš interes, i što vjerujete u ovaj projekt:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Kako pomoći" tema (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Što je burgershot.gg?</h2>
    <p>burgershot.gg je gaming forum, ništa više. Puno ljudi je uključeno u oboje i dio objava vezanih uz razvitak OMP-a se tamo objavljuje, no to su dva nezavisna projekta. To nije OMP forum, niti je OMP vlasništvo burgershot-a. Jednom kada potpuna OMP stranica bude pokrenuta, to dvoje može biti odvojeno jedno od drugog (jednako kako je i SA:MP bio hostan od strane GTAForums stranice prije nego su stvorili vlastitu).</p>
    <hr />
    <h2>A što je sa OpenMP?</h2>
    <p>Open Multi-Processing projekt je "OpenMP", mi smo "open.mp". Potpuno nevezano.</p>
  </div>
);
