import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Uma modificação em desenvolvimento para <em>Grand Theft Auto: San Andreas</em> que será totalmente compatível com a modificação multiplayer existente <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Isto significa <strong>que clientes existentes do SA:MP e todos scripts SA:MP existentes irão funcionar com o open.mp</strong> e, adicionalmente, varios bugs com o sistema do servidor serão arrumados sem necessidades de trabalhos manuais por parte do usuário.
    </p>
    <p>
      Se você está curioso para saber quando será o lançamento ou como você pode contribuir para o projeto, por favor veja <a href="https://www.burgershot.gg/showthread.php?tid=99"> este tópico no fórum</a> para mais informações.
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
    <h2>O que é open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) é um mod multiplayer substituto para San Andreas, iniciado em resposta ao infeliz aumento de problemas com atualizações e gerenciamento do SA:MP. O lançamento inicial vai ser uma substituição fácil para o software de servidor. Clientes SA:MP serão capazes de conectar neste servidor. No futuro, um novo cliente open.mp vai ser disponibilizado, permitindo o lançamento de atualizações mais interessantes.</p>
    <hr />
    <h2>Isso é uma cópia/reaproveitamento de código?</h2>
    <p>Não. Este projeto foi totalmente reescrito, tendo a vantagem de décadas de conhecimento e experiências. Tivemos tentativas de reaproveitar o código do SA:MP antes, mas acreditamos que isso traria dois maiores problemas:</p>
    <ol>
      <li>Eles foram baseados em um código fonte vazado do SA:MP. Os autores dessas modificações tinham nenhum direito legal sobre este código, e assim sempre estiveram com uma desvantagem, tanto moral como legal. Nós nos recusamos a usar este código. Isto deixa o desenvolvimento um pouco mais lento, mas é a escolha certa a se fazer.</li>
      <li>Eles tentaram reinventar muito de uma vez. Ou por substituindo todo o motor de desenvolvimento, ou removendo e adicionando características, ou apenas por melhorar coisas de maneira incompativel. Isto impede que servidores com imensas bases de código e base de jogadores pudessem se mudar, já que teriam que reescrever alguns, se não todos, os seus códigos - um trabalho muito exaustivo. Nós temos a intenção de adicionar características, e melhorar as coisas com o passar do tempo, mas estamos também focados em dar suporte a servidores existentes, permitindo que eles usem nosso código sem alterar o deles.</li>
    </ol>
    <hr />
    <h2>Por que vocês estão fazendo isso?</h2>
    <p>Mesmo após numerosas tentativas de empurrar o desenvolvimento do SA:MP oficialmente, na forma de sugestões, vários pedidos, e ofertas de ajuda por parte do time de membros beta; uma comunidade literalmente implorando por qualquer atualização que seja; nenhum progresso foi visto. Isto foi percebido pela falta de interesse do fundador, o que não é um problema, mas não havia nenhuma linha de sucessão. Em vez de entregar o desenvolvimento nas mãos de alguém interessado em continuar a trabalhar na modificação, o fundador simplesmente escolheu trazer tudo abaixo consigo mesmo. Alguns clamam que isto foi por razões de ganância passiva, mas não há evidências disso. Apesar do enorme interesse e de uma comunidade forte e familiar, ele acreditava que restavam apenas 1-2 anos na modificação e que a comunidade que havia trabalhado tanto para fazer o SA:MP o que é hoje, não merecia uma continuação.</p>
    <br />
    <p>Nós discordamos.</p>
    <hr />
    <h2>Quais as suas opiniões sobre Kalcor/SA:MP/Tanto faz?</h2>
    <p>Nós amamos SA:MP, é por isso que estamos aqui em primeiro lugar - graças ao Kalcor. Ele fez muito pelo mod ao longo dos anos, e essa contribuição não deve ser esquecida ou ignorada. As ações que levaram ao open.mp foram tomadas porque discordamos de várias decisões recentes, e apesar de repetidas tentativas de guiar o mod em uma direção diferente, nenhuma solução nova foi vista. Portanto, fomos forçados a tomar a infeliz decisão de tentar continuar SA:MP em espírito sem o Kalcor. Esta não é uma ação tomada contra ele pessoalmente, e não deve ser vista como um ataque a ele. Não vamos tolerar insultos pessoais contra ninguém - independentemente de onde eles estejam na questão open.mp; devemos ser capazes de ter um debate razoável sem recorrer a ataques.</p>
    <hr />
    <h2>Não estaria isso apenas dividindo a comunidade?</h2>
    <p>Essa não é a nossa intenção. Idealmente, nenhuma divisão seria necessária, mas dividir alguns e salvar essa parte é melhor do que assistir a coisa toda desaparecer. De fato, desde que esse mod foi anunciado, um grande número de comunidades não inglesas se engajaram novamente com a comunidade inglesa. Essas comunidades foram lentamente deixadas de fora anteriormente, então a reinclusão delas está na verdade juntando uma comunidade anteriormente dividida. Um grande número de pessoas foi banida dos fóruns oficiais de SA:MP (e em alguns casos, todo o histórico de postagens foi removido), mas o próprio Kalcor apontou que os fóruns oficiais não são SA:MP, apenas uma parte de SA:MP. Muitos jogadores e donos de servidores nunca postaram ou participaram desses fóruns; então falar novamente com essas pessoas é unir ainda mais partes da comunidade.</p>
    <hr />
    <h2>Já que isto é "Open" Multiplayer, este projeto será de código aberto?</h2>
    <p>Eventualmente esse é o plano, sim. Por enquanto, estamos tentando tornar o desenvolvimento aberto em termos de comunicação e transparência (o que, em si mesmo, é uma melhoria), e avançaremos para o código aberto quando pudermos, uma vez que tudo esteja resolvido.</p>
    <hr />
    <h2>Quando será lançado?</h2>
    <p>Esta é a questão antiga, infelizmente, tem a velha resposta: quando estiver pronto. Simplesmente não há como saber quanto tempo levará um projeto como esse. Ele esteve funcionando silenciosamente há algum tempo e já viu algumas flutuações no nível de atividade, dependendo de como as pessoas estão ocupadas. Mas a certeza está bem encaminhada, e progredindo rapidamente graças a algumas decisões fundamentais de design (mais adiante falaremos sobre a arquitetura).</p>
    <hr />
    <h2>Como eu posso ajudar?</h2>
    <p>Fique de olho nos fóruns. Temos um tópico exatamente para isso e vamos mantê-lo atualizado à medida que mais trabalhos se tornarem disponíveis. Embora o projeto tenha sido revelado um pouco antes do planejado, já estamos a caminho de um lançamento inicial, mas isso não significa que mais ajuda não seja apreciada. Agradeço antecipadamente por se interessar e por acreditar no projeto:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Tópico sobre como ajudar" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>O que é burgershot.gg?</h2>
    <p>O burgershot.gg é um fórum de jogos, nada mais. Muitas pessoas estão envolvidas em ambos, e algumas atualizações e desenvolvimento do OMP são postadas lá, mas são dois projetos independentes. Eles não são os fóruns do OMP, nem o OMP é uma propriedade do burgershot. Uma vez que o site completo do OMP esteja em funcionamento, os dois podem ser desconectados um do outro (assim como o SA:MP já foi hospedado pelo GTAForums antes de seu próprio site estar ativo).</p>
    <hr />
    <h2>E sobre o OpenMP?</h2>
    <p>O projeto Open Multi-Processing é chamado "OpenMP", nós somos "open.mp". Totalmente diferente.</p>
  </div>
);
