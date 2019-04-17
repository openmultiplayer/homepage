import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Un viitor mod multiplayer pentru <em>Grand Theft Auto: San Andreas</em> care va fi compatibil cu versiunile anterioare ale mod-ului multiplayer existent <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Asta inseamna ca <strong>existentul client si scripturile SA:MP vor functiona pe open.mp</strong> si, in plus, multe bug-uri vor fi rezolvate direct din software-ul server-ului fara nevoia vreunui hack sau workaround.
    </p>
    <p>
      Daca te intrebi cand va fi lansarea oficiala sau cum poti contribui la proiect, te rugam sa verifici <a href="https://www.burgershot.gg/showthread.php?tid=99">acest topic</a> pentru informatii aditionale.
    </p>
    <h1>
      <a href={faq}>FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ - Intrebari Frecvente</h1>
    <hr />
    <h2>Ce este open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) este un mod multiplayer substitut pentru San Andreas, initiat ca si raspuns la regretabila crestere a numarului de probleme cu actualizarile si administrarea SA:MP. Versiunea din urma lansarii oficiale va inlocui complet partea de server. Jucatorii existenti de SA:MP vor putea sa se conecteze la server fara efort. In viitor, un client open.mp va fi disponibil, care va permite lansarea unor noi actualizari.</p>
    <hr />
    <h2>Este acesta un fork?</h2>
    <p>Nu. Este o rescriere completa, care va fi avantajata de decenii de studiu si experienta. In trecut au existat incercari de a crea Fork-uri ale SA:MP-ului, dar credem ca acestea au avut doua probleme majore:</p>
    <ol>
      <li>Se bazau pe codul SA:MP care era folosit fara permisiune. Autorii acestor moduri nu aveau niciun drept legal pentru acel cod, si deci au fost tot timpul cu un pas inapoi, moral dar si legal. Noi refuzam sa folosim acel cod. Asta va lungi timpul de productie, dar se va dovedi a fi cea mai buna decizie.</li>
      <li>Au incercat sa reinventeze roata. Fie inlocuind motorul de scripting, fie eliminand functionalitati si adaugand altele, fie modificand functionalitati si creand incompatibilitati. Asta previne serverele cu mult cod si multi jucatori de a migra, pentru ca ar fi nevoiti sa schimbe putin, daca nu chiar tot codul - un pas incredibil de costisitor. Suntem ferm motivati sa adaugam functionalitai, sa modificam altele, cu timpul, dar avem si scopul de a suporta orice server deja existent, permitandu-le sa foloseasca acelasi cod, fara modificari.</li>
    </ol>
    <hr />
    <h2>De ce facem asta?</h2>
    <p>Desi au fost nenumarate incercari de a avansa productia SA:MP, sub forma de sugestii si oferte de ajutor din partea echipei de beta testeri; alaturi de o comunitate care cerea orice actualizare posibila; niciun progres nu a fost facut. Acest refuz a fost considerat la inceput doar o lipsa de interes din partea liderului modului respectiv, ceea ce nu era o problema, dar nu ar fi existat niciun progres. In loc sa ofere acess pentru productie celor care erau interesati sa ajute, fondatorul incerca sa lase modul sa dispara odata cu lipsa lui de interes, rezolvand doar problemele foarte majore. Unii spun ca asta s-a intamplat din cauza scaderii de venituri, dar nu exista vreo dovada pentru asta. Desi inca exista interes urias din partea comunitatii strans unite, el credea ca modul va mai trai doar 1-2 ani, si ca acea comunitate care a muncit atat de mult pentru a impinge SA:MP pana in pozitia in care este acum, nu merita un astfel de efort.</p>
    <br />
    <p>Noi suntem de alta parere.</p>
    <hr />
    <h2>Avand in vedere ca se numeste "Open" Multiplayer, codul va fi open-source?</h2>
    <p>In mod normal acesta ar fi planul. Deocamdata incercam sa facem productia "open" sub forma de comunicare si transparenta (care prin definitie duce spre progres), si vom avansa catre a face codul open-source cand vom avea posibilitatea, odata ce lucrurile se linistesc si totul este stabil.</p>
    <hr />
    <h2>Cum pot ajuta?</h2>
    <p>Stai cu ochii pe forum. Avem un topic exact pentru asta, si il vom actualiza odata ce vom avea nevoie de ajutor. Desi proiectul a fost dezvaluit mai devreme decat ar fi trebuit, suntem deja in drum spre a face lansarea initiala, dar asta nu inseamna ca si mai mult ajutor nu ar fi apreciat. Multumim anticipat pentru interes, si incredere in acest proiect:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Topic "Cum pot ajuta?" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Ce este burgershot.gg?</h2>
    <p>burgershot.gg este un forum de gaming si atat. Multi oameni s-au alaturat ambelor proiecte, si unele actualizari si schimbari la Open MP sunt postate acolo, dar sunt proiecte total independente. Burgershot nu este o proprietate Open MP, si nici invers. Odata ce un website complet al Open MP va fi disponibil, cele doua proiecte vor fi complet separate (in acelasi fel in care SA:MP facea parte, in trecut, din forumul GTAForums).</p>
    <hr />
    <h2>Dar OpenMP ce este?</h2>
    <p>Proiectul "Open Multi-Processing" este "OpenMP", noi suntem "open.mp". Doua chestii total diferite.</p>
  </div>
);
