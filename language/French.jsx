import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Est un nouveau mode multijoueur pour <em>Grand Theft Auto: San Andreas</em> qui est compatible à 100 % avec le mode multijoueur San Andreas Multiplayer (SAMP).
    </p>
    <br />
    <p>
      Ce qui veut dire que  <strong>le client ainsi que l'ensemble des scripts disponible pour SA:MP fonctionneront sur open.mp</strong> avec en plus, des corrections de bugs côté serveur sans avoir recours à des solutions de contournement.
    </p>
    <p>
      Si vous voulez vous tenir informé de la date de sortie, ou si vous souhaitez contribuer au projet,  vous pouvez lire <a href="https://www.burgershot.gg/showthread.php?tid=99">ce post forum/a> pour plus d'informations.
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
    <h2>C'est quoi open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) est un mode multijoueur alternatif pour le jeu Grand Theft Auto : San Andreas, initialement, crée dû à l’augmentation des problèmes lors de mise à jour et de la méthode de gestion de SA:MP, il a pour but de remplacer le côté serveur, ce qui veut dire que le client SA:MP pourra s’y connecter. Dans le futur, une nouvelle version d’open.mp sera disponible, avec la sortie de mise à jour plus intéressantes.</p>
    <hr />
    <h2>Est-ce que c'est une copie?</h2>
    <p>Non, il s’agit là d’un projet « from scratch » (réécriture totale), mettant à profit des décennies de connaissances et d’expérience, il y a eu dans le passé des tentatives de reprise du code source de SA :MP, mais deux problèmes viennent s’exposer à ce cas-ci : </p>
    <ol>
      <li>Ils étaient basés sur le code source leak de SA:MP, les auteurs de ces modes n’avaient aucun droit légal sur le code et étaient donc exposé à divers problèmes tant légaux que moraux. Nous refusons carrément d'utiliser ce code. Cela entrave légèrement la vitesse de développement, mais permet une garantie totale sur le long terme.</li>
      <li>Ils ont fait des changements trop brusques. Soit en remplaçant le moteur de script, soit en remplaçant des fonctionnalités et en, en supprimant certaines. Cela empêchant les serveurs existants dotés d'énormes bases de code de migrer sur ces autres modes, car ils devraient tout simplement, réécrire une partie, voire la totalité de leur code. Nous avons bien l'intention d'ajouter des fonctionnalités et de peaufiner les choses au fil du temps, mais nous nous concentrons également sur la prise en charge des serveurs existants, leur permettant d'utiliser notre code sans modifier le leur.</li>
    </ol>
    <hr />
    <h2>Quelles sont les raisons qui t'ont poussé à faire ça ?</h2>
    <p>
    Malgré de nombreuses tentatives visant à faire progresser officiellement le développement du programme SA: MP, sous forme de suggestions, de commentaires animés et d'aide de la part des membres de la phase bêta ; à côtés d'une communauté qui réclame quelque chose de nouveau ; aucun progrès n'a été vu. On pensait généralement que c'était simplement dû à un manque d'intérêt de la part de la direction du projet, ce qui n'est pas un problème en soi, mais il n'y avait pas de ligne de succession. Plutôt que de laisser le développement incomber à ceux qui sont intéressés à continuer à travailler sur le mode, le fondateur a simplement voulu tout maîtriser, tout en faisant apparemment avancer les choses le plus longtemps possible pour un effort minimal. Certains prétendent que c'est pour des raisons de revenu passif, mais il n'y a aucune preuve de cela. Malgré un intérêt énorme et une communauté forte et familiale, il pensait qu'il ne restait plus qu'un ou deux ans dans le mode et que la communauté qui avait travaillé si dur pour faire de SA: MP ce qu'elle est aujourd'hui ne méritait pas de continuation.
    </p>
    <br />
    <p>Chose que nous ne cautionnons pas.</p>
    <hr />
    <h2>Sera t-il Open Source</h2>
    <p>Sur le long terme, c'est le plan, oui. Mais pour le moment, nous essayons de rendre le développement ouvert sur le plan de la communication et de la transparence (ce qui est en soi une amélioration), et nous allons passer le projet en open source à mesure que nous le pourrons, une fois que tout sera réglé.</p>
    <hr />
    <h2>Comment puis-je y contribuer ?</h2>
    <p>Toutes les informations sur le forum. Nous avons un sujet qui parle de ça. Bien que le projet ait été annoncé, il s’agit d’une première publication, qui n’est pas toujours appréciée de façon massive. Merci d'avance de votre intérêt pour le projet:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Comment puis-je y contribuer ?" sujet (burgershot.gg)</u>
    </a>
    <hr />
    <h2>C’est quoi Burgershot.gg?</h2>
    <p>burgershot.gg est un forum de jeu, rien de plus. Un grand nombre de personnes sont impliquées. Certains développements et mises à jour d'OMP y sont publiés, mais il s'agit de deux projets indépendants. Ce n’est pas le forum officiel d’OMP, et OMP n'est pas une propriété de Burgershot. Une fois que le site d’OMP sera complet est opérationnel, les deux pourront être séparés (un peu comme SA: MP qui fut jadis hébergé par GTAForums avant que son propre site ne soit opérationnel).</p>
    <hr />
    <h2>Qu'en est-il de OpenMP?</h2>
    <p>OpenMP c'est: "Open Multi-Processing project", nous sommes "open.mp". Ce sont deux choses totalement différentes.</p>
  </div>
);
