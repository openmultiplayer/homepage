import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Multiplayer mod kūrimas <em>Grand Theft Auto: San Andreas</em> kuri bus visiškai suderinama su
      esamas multiplayer mod <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Tai reiškia, kad <strong>SA:MP klientas: veikiantys ir visi esami SA:MP scenarijai veiks
      open.mp</strong> ir be to, keletas ištaisytų klaidų serverio programinėje įrangoje be poreikio
      Naudotojo rankiniai susitarimai.
    </p>
    <p>
      Jei įdomu, kada bus paskelbtas viešas pranešimas arba kaip galite padėti prisidėti, prašome ieškoti{" "}
      <a href="https://www.burgershot.gg/showthread.php?tid=99">šią temą forume</a> (English).
    </p>
    <h1>
      <a href={faq}>FAQ (Dažniausiai užduodami klausimai)</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ (Dažniausiai užduodami klausimai)</h1>
    <hr />
    <h2>¿Que es open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) yra pakaitinis multiplayer mod San Andreas, inicijuotas atsakant į
      nesėkmingai padidėjo problemų, susijusių su SA: MP, atnaujinimu ir administravimu. Jis visiškai suderinamas su juo,
      sukurtas kaip momentinis keitimas, leidžiantis esamiems SA: MP klientams žaisti OMP serveriuose kartu su
      naujiems OMP klientams, teikiant atnaujinimus ir naujas funkcijas, kurios anksčiau buvo sustabdytos.
    </p>
    <hr />
    <h2>Ar tai šakutė / bifurkacija?</h2>
    <p>
      Ne. Tai yra pilnas perrašymas, pasinaudojant dešimtmečių žiniomis ir patirtimi. Buvo
      Bandymai padalinti iš SA: MP anksčiau, bet mes manome, kad jie turėjo dvi pagrindines problemas:
    </p>
    <ol>
      <li>
        Jie buvo pagrįsti SA: MP filtruotu kodu. Šių modų autoriai neturėjo teisinių teisių
        naudokite šį kodą, ir dėl to jie visada buvo nepalankūs, tiek moraliniai, tiek teisiniai. Mes tiesiogiai atsisakome
        naudoti šį kodą. Tai truputį sulėtina plėtros greitį, tačiau tai yra pagrindinis žingsnis ilgainiui.
      </li>
      <li>
        Kartu jie bandė išradinėti daug. Pakeiskite skriptų variklį arba pašalinkite funkcijas
        pridedant kitus arba keičiant daiktus nesuderinamais būdais. Tai neleido esamiems serveriams
        su skriptais ir dideliu žaidėjų skaičiumi, nes jie turėtų perrašyti šiek tiek, jei ne visus,
        jūsų kodas - potencialiai didžiulis darbas. Mes ketiname pridėti funkcijų ir
        laikui bėgant keiskite dalykus, bet taip pat sutelkiame dėmesį į esamų serverių palaikymą, leidžiant juos
        Naudokite mūsų kodą be jūsų pakeitimo.
      </li>
    </ol>
    <hr />
    <h2>Kodėl jie tai daro?</h2>
    <p>
      Nepaisant daugelio bandymų stumti SA: MP priekį oficialiai, kaip
      beta testavimo komandos pasiūlymai, daug užsakymų ir pagalbos pasiūlymų; šalia bendruomenės, šaukiančio kažko
      naujas; nebuvo padaryta jokios pažangos. Tai visada buvo suvokiama paprasčiausiai kaip interesų trūkumas
      modo lyderis, kuris pats savaime nėra problema, tačiau tęsimo požymių nebuvo. Vietoj pristatymo
      modo kūrimas visiems, kurie buvo suinteresuoti dirbti, įkūrėjas tiesiog norėjo
      visi žemyn su savimi, matydami dalykus, kol jis gali su minimaliomis pastangomis. Kai kurie
      jie sakė, kad tai buvo dėl pasyvios naudos, tačiau tai nėra. Nepaisant didžiulio susidomėjimo
      ir stipri bendruomenė, jis manė, kad modas buvo tik 1-2 metai, o bendruomenė taip sunkiai dirbo
      daryti SA: MP, ką jis šiandien, nenusipelno tęsti.
    </p>
    <br />
    <p>Mes nesutinkame</p>
    <hr />
    <h2>Kadangi tai yra "Open" (atidarytas) Multiplayer, Ar tai bus atviras (atvirasis šaltinis)?</h2>
    <p>
      Galiausiai tai yra planas, taip. Dabar mes stengiamės padaryti atvirą plėtrą komunikaciniu būdu ir
      skaidrus (kuris savaime jau yra tobulinimas) ir pereis prie kodo atidarymo, kai mes galime
      viskas gerai suplanuota.
    </p>
    <hr />
    <h2>Kaip aš galiu padėti?</h2>
    <p>
      Laikykitės forumų. Turime tiksliai tam skirtą temą, ir mes ketiname ją išlaikyti
      atnaujinami, kai turime dalykų, kuriuos reikia mokyti. Nors projektas buvo atskleistas daug anksčiau nei tikėtasi,
      mes esame labai geras kelias pradiniam išleidimui, bet tai nereiškia, kad daugiau pagalbos nėra masiškai
      vertinamas Iš anksto dėkojame už susidomėjimą ir tikėkite projektu:
    </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Tema "How to help" (kaip padėti) (burgershot.gg) (English)</u>
    </a>
    <hr />
    <h2>Kas yra burgershot.gg?</h2>
    <p>
      burgershot.gg yra žaidimų forumas, nieko daugiau. Daugelis žmonių dalyvauja abiejuose ir kažką vystymosi
      jame skelbiami OMP atnaujinimai, tačiau jie yra du nepriklausomi projektai. Tai ne OMP forumai,
      ir nė viena nėra OMP, priklausanti burgershot. Kai turėsime pilną OMP svetainę ir vaikščioti, abi gali
      būti atskirti (kaip ir SA: MP vieną kartą priėmė GTAForums, kol jie turėjo savo svetainę).
    </p>
    <hr />
    <h2>Ką apie OpenMP?</h2>
    <p>
      Projektas "Open Multi-Processing" (Open multiprocessing) yra "OpenMP", mes esame "open.mp". Labai
      skiriasi
    </p>
  </div>
);
