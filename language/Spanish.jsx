import React from "react";

export const BODY = () => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Un mod multijugador en desarollo para <em>Grand Theft Auto: San Andreas</em> que será totalmente compatiable con
      el mod multijugador existente <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Esto significa que <strong>el cliente SA:MP existente y todos los scripts de SA:MP existentes funcionarán con
      open.mp</strong> y adicionalmente varios bugs estarán corregidos en el software del server sin la necesidad de
      arreglos manuales por parte del usuario.
    </p>
    <p>
      Si te estas preguntando cuando será el lanzamiento publico o como puedes ayudar a contribuir, por favor mira{" "}
      <a href="https://www.burgershot.gg/showthread.php?tid=99">este tema en el foro</a> (en inglés) para mas información.
    </p>
    <h1>
      <a href="/faq">FAQ (Preguntas frecuentes)</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ (Preguntas frecuentes)</h1>
    <hr />
    <h2>Que es open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) es un mod multijugador sustituto para San Andreas, iniciado como respuesta a el
      desafortunado aumento en problemas con actualizaciones y administración de SA:MP. Es totalmente compatible con él,
      diseñado como un reemplazo instantaneo, permitiendo a clientes SA:MP ya existentes jugar en servidores OMP junto a
      clientes nuevos OMP, proveyendo actualizaciones y nuevas características que antes se han estancado.
    </p>
    <hr />
    <h2>Es un fork/una bifurcación?</h2>
    <p>
      No. Esta es una reescritura completa, tomando ventaga de decadas de conocimiento y experiencia. Han habido
      intentos de bifurcarse de SA:MP antes, pero creemos que estos tenian dos problemas mayores:
    </p>
    <ol>
      <li>
        Estaban basados en código filtrado de SA:MP. Los autores de estos mods no tenían derechos legales para poder
        usar este código, y por eso siempre estuvieron en líos, tanto moral como legalmente. Nos rehusamos directamente
        a usar este código. Esto desacelera un poco la velocidad de desarollo, pero es un movimiento clave a la larga.
      </li>
      <li>
        Intentaron reinventar mucho a la vez. Ya sea reemplazando el motor de scripting, o sacando características
        mientras añadían otras, o cambiando las cosas de maneras no compatibles. Esto prevenía a servidores existentes
        con scripts y cantidad de players grandes de mudarse, ya que tendrian que reescribir un poco, si es que no todo,
        de su código - un trabajo potencialmente masivo. Nosotros tenemos la intención de añadir características, y
        cambiar cosas con el tiempo, pero tambien nos concentramos en soportar servidores existentes, permitiendoles
        usar nuestro código sin tener que cambiar el suyo.
      </li>
    </ol>
    <hr />
    <h2>Por que hacen esto?</h2>
    <p>
      A pesar de numerosos intentos de empujar el desarollo de SA:MP hacia adelante oficialmente, en la forma de
      sugerencias, repetidamente pidiendo, y ofertas de ayuda del equipo beta; junto a una comunidad gritando por algo
      nuevo; no se vio nada de progreso. Esto siempre se percibió simplemente como una falta de interés de parte del
      líder del mod, lo cual no es un problema en si, pero no había ninguna señal de continuación. En vez de entregar
      el desarollo del mod a alguno que estuviera interesado a trabajar en el, el fundador simplemente quería traerse
      todo abajo con él mismo, mientras aparentemente mantenía las cosas mientras podía con un mínimo esfuerzo. Algunos
      decían que esto era por razones de ganancias pasivas, pero no hay evidencia de eso. A pesar del interés inmenso
      y una comunidad fuerte, el pensaba que el mod solo tenía 1-2 años de vida, y la comunidad que trabajaba tan duro
      para hacer SA:MP lo que es hoy en día no se merecía una continuación.
    </p>
    <br />
    <p>No estamos de acuerdo.</p>
    <hr />
    <h2>Ya que es "Open" (abierto) Multiplayer, será open-soruce (código abierto)?</h2>
    <p>
      Eventualmente ese es el plan, sí. Por ahora estamos intentando hacer el desarollo abierto de manera comunicativa y
      transparente (que en sí mismo ya es una mejora), y se movera hacia abrir el código cuando podamos, una vez las
      cosas esten bien planeadas.
    </p>
    <hr />
    <h2>¿Como puedo ayudar?</h2>
    <p>
      Manténte atento a los foros. Tenemos un tema exactamente para esto, y tenemos la intención de mantenerlo
      actualizado mientras tengamos cosas que enseñar. Aunque el proyecto fue revelado mucho antes de lo esperado,
      estamos en un muy bien camino para un lanzamiento inicial, pero eso no significa que mas ayuda no es masivamente
      apreciada. Gracias de antemano por tener interés, y creer en el proyecto:
    </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Tema "How to help" (como ayudar) (burgershot.gg)</u>
    </a>
    <hr />
    <h2>¿Que es burgershot.gg?</h2>
    <p>
      burgershot.gg es un foro de gaming, nada más. Un montón de gente están involucrados en ambos, y algo de desarollo
      y actualizaciones de OMP están siendo publicados ahí, pero son dos projectos independientes. No són los foros OMP,
      y tampoco es OMP propiedad de burgershot. Una vez que tengamos un sitio de OMP completo y andando, los dos pueden
      ser separados (tal cual como SA:MP una vez era hosteado por GTAForums antes de que tuvieran su propio sitio).
    </p>
    <hr />
    <h2>Que hay de OpenMP?</h2>
    <p>
      El projecto "Open Multi-Processing" (Multiprocesamiento abiert) es "OpenMP", nosotros somos "open.mp". Muy
      diferente.
    </p>
  </div>
);
