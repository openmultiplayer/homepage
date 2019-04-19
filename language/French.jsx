import React from "react";

export const BODY = FAQLink => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Un nouveau mode pour <em>Grand Theft Auto: San Andreas</em> qui va etre full compatible avec le mode multijoueur de San Andreas existant
    </p>
    <br />
    <p>
      Cela veut dire <strong>le clien SA:MP existant et tout les scripts de SA:MP existant vont marcher avec open.mp</strong> et en addition a cela, plusieurs bugs vont etre réparer dans le logiciel du serveur sans l'utilisation des hacks et workarrounds
    </p>
    <p>
      Si vous demendez pour quand la sortie public ou comment pouvez vous contribuez au projet, visit <a href="https://www.burgershot.gg/showthread.php?tid=99">ce forum thread</a> pour plus d'informations.
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
    <h2>Quel est open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) is un mode multijoueur remplaçant pour San Andreas, créer pour l'augmentation des problèmes dans les mise a jours et la management de SA:MP, la sortie initiale va etre un remplaçant que pour les serveurs, les clients SA:MP existants vont pourvoir se connecter a ce serveur. Dans le future, un nouveau open.mp sera valable, donnant plus de mise a jour interessante quit vont sortir.</p>
    <hr />
    <h2>Est-ce que c'est fork?</h2>
    <p>No. Il s’agit d’une réécriture complète, mettant à profit des décennies de connaissances et d’expérience. Il y a eu des tentatives de bifurquer SA: MP auparavant, mais nous pensons que ces deux problèmes majeurs:</p>
    <ol>
      <li>Ils étaient basés sur le code source fuite SA: MP. Les auteurs de ces mods n'avaient aucun droit légal sur ce code et étaient donc toujours sur le pied arrière, tant moralement que légalement. Nous refusons carrément d'utiliser ce code. Cela entrave légèrement la vitesse de développement, mais constitue la bonne solution à long terme.</li>
      <li>Ils ont essayé de réinventer trop à la fois. Soit remplacer tout le moteur de script, soit supprimer des fonctionnalités tout en en ajoutant de nouvelles, soit tout simplement peaufiner des éléments incompatibles. Cela empêche les serveurs existants dotés d'énormes bases de code et de lecteurs de se déplacer, car ils devraient réécrire une partie, voire la totalité de leur code - une entreprise potentiellement gigantesque. Nous avons bien l'intention d'ajouter des fonctionnalités et de peaufiner les choses au fil du temps, mais nous nous concentrons également sur la prise en charge des serveurs existants, leur permettant d'utiliser notre code sans modifier les leurs.</li>
    </ol>
    <hr />
    <h2>Pourquoi fais-tu ça?</h2>
    <p>
      Malgré de nombreuses tentatives visant à faire progresser officiellement le développement du programme SA: MP, sous forme de suggestions, de commentaires animés et d'offres d'aide de la part de l'équipe bêta; aux côtés d'une communauté qui réclame quelque chose de nouveau; aucun progrès n'a été vu du tout. On pensait généralement que c'était simplement dû à un manque d'intérêt de la part de la direction du mod, ce qui n'est pas un problème en soi, mais il n'y avait pas de ligne de succession. Plutôt que de laisser le développement incomber à ceux qui sont intéressés à continuer à travailler sur le mod, le fondateur a simplement voulu tout maîtriser, tout en faisant apparemment avancer les choses le plus longtemps possible pour un effort minimal. Certains prétendent que c'est pour des raisons de revenu passif, mais il n'y a aucune preuve de cela. Malgré un intérêt énorme et une communauté forte et familiale, il pensait qu'il ne restait plus qu'un ou deux ans dans le mod et que la
      communauté qui avait travaillé si dur pour faire de SA: MP ce qu'elle est aujourd'hui ne méritait pas de continuation.
    </p>
    <br />
    <p>Nous désaccordons.</p>
    <hr />
    <h2>Since it is "Open" Multiplayer, will this be open-source?</h2>
    <p>Finalement, c'est le plan, oui. Pour le moment, nous essayons de rendre le développement ouvert sur le plan de la communication et de la transparence (ce qui est en soi une amélioration), et nous allons passer à l’approvisionnement ouvert à mesure que nous le pourrons, une fois que tout sera réglé et réglé.</p>
    <hr />
    <h2>Comment Je Aide?</h2>
    <p>Gardez vos yeux sur les forums. Nous avons un sujet pour quoi exactement. Bien que le projet ait été révélé, il s’agit d’une première publication, qui n’est pas toujours appréciée de façon massive. Merci d'avance de votre intérêt et de votre confiance dans le projet:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Comment Je Aide?" sujet (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Quel est burgershot.gg?</h2>
    <p>burgershot.gg est un forum de jeu, rien de plus. Un grand nombre de personnes est impliquée dans les deux processus. Certains développements et mises à jour d'OMP y sont publiés, mais il s'agit de deux projets indépendants. Ce ne sont pas les forums OMP, et OMP n'est pas une propriété de Burgershot. Une fois qu'un site OMP complet est opérationnel, les deux peuvent être extraits l'un de l'autre (un peu comme SA: MP était jadis hébergé par GTAForums avant que son propre site ne soit opérationnel).</p>
    <hr />
    <h2>Qu'en est-il de OpenMP?</h2>
    <p>The Open Multi-Processing project est "OpenMP", nous sommes "open.mp". Différent.</p>
  </div>
);
