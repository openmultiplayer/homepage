import React from 'react';

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
      a este servidor. En el futuro, un nuevo cliente para open.mp estará disponible, permitiendo lanzar más
      actualizaciones interesantes.
    </p>
    <hr />
    <h2>¿Es un fork/una bifurcación?</h2>
    <p>
      No. Esta es una reescritura completa, tomando ventaja de décadas de conocimiento y experiencia. Han habido
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
      y una fuerte comunidad, él pensaba que al mod le quedaban solo 1-2 años de vida, y la comunidad que trabajaba tan duro
      para hacer SA:MP lo que es hoy en día, no se merecía una continuación.
    </p>
    <br />
    <p>Nosotros no estamos de acuerdo.</p>
    <hr />
    <h2>¿Cuáles son sus opiniones sobre Kalcor/SA:MP/lo que sea?</h2>
    <p>
      Nos encanta SA:MP, es por eso que estamos aquí en primer lugar, y se lo debemos a Kalcor. A lo largo de los años,
      ha hecho una gran cantidad de cosas para el mod, y esa contribución no debe ser olvidada o ignorada. Las acciones que llevaron
      a open.mp se tomaron porque no estábamos de acuerdo con varias decisiones recientes y, a pesar de los repetidos intentos
      de guiar el mod en una dirección diferente, no se vio ninguna solución. Por lo tanto, nos vimos obligados a tomar la desafortunada
      decisión de intentar continuar con SA:MP en espíritu sin Kalcor. Esta no es una acción que se tome contra él personalmente, y no
      debe considerarse como un ataque personal. No cobraremos ningún tipo de insultos personales contra nadie, independientemente de su
      posición en el tema open.mp; Deberíamos poder tener un debate razonable sin tener que recurrir a ataques ad-hominem.
    </p>
    <hr />
    <h2>¿No es esto simplemente dividir a la comunidad?</h2>
    <p>
      Esa no es nuestra intención. Lo ideal es que no se requiera ninguna división, pero separar un poco y guardar esa parte
      es mejor que mirar cómo se marchita todo. De hecho, desde que se anunció este mod, una gran cantidad de comunidades que no están
      en inglés se han vuelto a comprometer con la comunidad inglesa. Estas comunidades fueron empujadas lentamente, por lo que su
      reincorporación en realidad está uniendo a una comunidad dividida. Un gran número de personas han sido excluidas de los foros
      oficiales de SA:MP (y en algunos casos, se ha purgado todo su historial de publicaciones), pero el mismo Kalcor ha señalado
      que los foros oficiales no son SA:MP, solo una parte de SA:MP Muchos jugadores y propietarios de servidores nunca han publicado,
      o incluso se han unido a esos foros; así que hablar con estas personas
      de nuevo es unificar aún más partes de la comunidad.
    </p>
    <hr />
    <h2>Ya que es "Open" (abierto) Multiplayer, ¿será open-source (código abierto)?</h2>
    <p>
      Eventualmente ese es el plan, sí. Por ahora estamos intentando hacer el desarollo "abierto" en términos de comunicación y
      transparencia (que en sí, ya es una mejora), y se moverá hacia hacer el código abierto una vez las
      cosas estén bien planeadas.
    </p>
    <hr />
    <h2>¿Cuándo saldrá open.mp?</h2>
    <p>
      Esta es la pregunta histórica, desafortunadamente tiene la respuesta antigua: cuando se hace. Simplemente no hay manera de saber
      cuánto tiempo tomará un proyecto como este. Ha estado funcionando silenciosamente por un tiempo, y ya ha visto algunas
      fluctuaciones en el nivel de actividad, dependiendo de cuán ocupadas estén las personas que lo desarrollan. Pero tenga la
      seguridad de que está en camino y progresando rápidamente gracias a algunas decisiones de diseño fundamentales.
    </p>
    <hr />
    <h2>¿Cómo puedo ayudar?</h2>
    <p>
      Permanece atento al foro. Tenemos un tema exactamente para esto, y tenemos la intención de mantenerlo
      actualizado mientras tengamos cosas que enseñar. Aunque el proyecto fue revelado mucho antes de lo esperado,
      estamos en un muy bien camino para un lanzamiento inicial, pero eso no significa que más ayuda no sea enormemente
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
      y actualizaciones sobre OMP están siendo publicados ahí, pero son dos proyectos independientes. No son los foros OMP,
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
