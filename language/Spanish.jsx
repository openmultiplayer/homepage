import React from "react";

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Un mod multijugador en desarollo para <em>Grand Theft Auto: San Andreas</em> que será totalmente compatible con
      el mod multijugador ya existente <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Esto significa que <strong>el cliente SA:MP existente y todos los scripts del mismo funcionarán en
      open.mp</strong> y además varios errores estarán corregidos en el software del servidor sin la necesidad de
      arreglos manuales por parte del usuario.
    </p>
    <p>
      Si te estás preguntando cuando será el primer lanzamiento publico o cómo puedes ayudar a contribuir, por favor mira{" "}
      <a href="https://www.burgershot.gg/showthread.php?tid=99">este tema en el foro</a> (en inglés) para mas información.
    </p>
    <h1>
      <FAQLink>FAQ (Preguntas frecuentes)</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ (Preguntas frecuentes)</h1>
    <hr />
    <h2>¿Qué es open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) es un mod multijugador sustituto para San Andreas, iniciado como respuesta al
      desafortunado aumento de problemas en actualizaciones y la administración de SA:MP. El lanzamiento inicial será 
      un reemplazo directo del software para el servidor solamente. Los clientes SA:MP ya existentes podrán conectarse
      a este servidor. En el futuro, un nuevo cliente para open.mp estará disponible, permitiéndo lanzar más
      actualizaciones interesantes.
    </p>
    <hr />
    <h2>¿Es un fork/una bifurcación?</h2>
    <p>
      No. Esta es una reescritura completa, tomando ventaja de decadas de conocimiento y experiencia. Han habido
      intentos de bifurcarse de SA:MP antes, pero creemos que estos tenian dos graves problemas:
    </p>
    <ol>
      <li>
        Estaban basados en código filtrado de SA:MP. Los autores de estos mods no tenían derechos legales para poder
        usar este código, y por eso siempre tuvieron una desventaja, tanto moral como legal. Nos rehusamos directamente
        a usar este código. Esto desacelera un poco la velocidad de desarollo, pero es un movimiento clave a la larga.
      </li>
      <li>
        Intentaron reinventar mucho a la vez. Ya sea reemplazando el motor de scripting, o sacando características
        mientras añadían otras, o cambiando las cosas de maneras no compatibles. Esto impedía a servidores existentes
        con scripts largos y una base de jugadores muy grande mudarse, ya que tendrian que reescribir poco, si es que no todo,
        su código - un trabajo extraordinariamente grande. Nuestra intención es ir añadiendo características y
        cambiando las cosas, con el tiempo, pero tambien estamos concentrados en soportar servidores existentes, permitiéndoles
        usar nuestro código sin tener que cambiar el suyo.
      </li>
    </ol>
    <hr />
    <h2>¿Por qué hacen esto?</h2>
    <p>
      A pesar de numerosos intentos por impulsar el desarollo de SA:MP hacia adelante oficialmente, en la forma de
      sugerencias, peticiones repetidas, y ofertas de ayuda de miembros del mismo equipo de beta-testing; junto a una 
      comunidad pidiendo a gritos algo nuevo; no se veía nada de progreso. Esto siempre se percibía simplemente como una 
      falta de interés por parte del líder del mod, lo cual no es un problema en si, pero no había ninguna señal de continuación. 
      En vez de permitir que los demás pudieran contribuir al desarrollo del mod, el fundador simplemente quería traerse
      todo abajo con él mismo, mientras aparentemente mantenía las cosas cuando podía con un mínimo esfuerzo. Algunos
      decían que esto era por razones de ganancias pasivas, pero no hay evidencia de eso. A pesar del interés inmenso
      y una fuerte comunidad, el pensaba que el mod solo tenía 1-2 años de vida, y la comunidad que trabajaba tan duro
      para hacer SA:MP lo que es hoy en día, no se merecía una continuación.
    </p>
    <br />
    <p>Nosotros no estamos de acuerdo.</p>
    <hr />
    <h2>Ya que es "Open" (abierto) Multiplayer, ¿será open-source (código abierto)?</h2>
    <p>
      Eventualmente ese es el plan, sí. Por ahora estamos intentando hacer el desarollo "abierto" en términos de comunicación y
      transparencia (que en sí, ya es una mejora), y se moverá hacia hacer el código abierto una vez las
      cosas estén bien planeadas.
    </p>
    <hr />
    <h2>¿Cómo puedo ayudar?</h2>
    <p>
      Manténte atento al foro. Tenemos un tema exactamente para esto, y tenemos la intención de mantenerlo
      actualizado mientras tengamos cosas que enseñar. Aunque el proyecto fue revelado mucho antes de lo esperado,
      estamos en un muy bien camino para un lanzamiento inicial, pero eso no significa que mas ayuda no sea enormemente
      apreciada. Gracias de antemano por tener interés, y creer en el proyecto:
    </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Tema "How to help" (como ayudar) (burgershot.gg) (en inglés)</u>
    </a>
    <hr />
    <h2>¿Qué es burgershot.gg?</h2>
    <p>
      burgershot.gg es un foro de gaming, nada más. Un montón de gente está involucrada en ambos, y algo del desarollo
      y actualizaciones sobre OMP están siendo publicados ahí, pero son dos proyectos independientes. No són los foros OMP,
      y tampoco es OMP propiedad de burgershot. Una vez que tengamos un sitio para OMP completo y andando, los dos podrán ser
      separados el uno del otro (muy así como SA:MP estuvo alguna vez hospedado en GTAForums antes de que tuvieran su propio 
      sitio).
    </p>
    <hr />
    <h2>¿Qué hay de OpenMP?</h2>
    <p>
      El proyecto "Open Multi-Processing" (Multi-procesamiento abierto) es "OpenMP", nosotros somos "open.mp". Hay mucha
      diferencia.
    </p>
  </div>
);
