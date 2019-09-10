import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
    მომავალი multiplayer მოდიფიკაცია თამაშისთვის - <em>Grand Theft Auto: San Andreas</em> რომელიც უკუთავსებადი იქნება ერთ-ერთ, ამჟამინდელ მოდიფიკაციასთან <br /><em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
    ეს ნიშნავს რომ <strong>მიმდინარე SA:MP კლიენტი და სკრიპტები იმუშავებს open.mp ზე</strong>. ამას გარდა, ბევრი ბაგი იქნება გასწორებული თვით სოფტში და აღარ მოგიწევთ დამატებითი რაღაც-რაღაცების გამოყენება.
    </p>
    <p>
    გაინტერესებს როდისაა დაგეგმილი პირველი საჯარო გამოშვება ან გინდა დაეხმარო პროექტის?, ეწვიე <a href="https://www.burgershot.gg/showthread.php?tid=99">ამ სტატიას ფორუმზე</a> მეტი ინფორმაციისთვის.
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
    <h2>რა არის open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) არის შემცველი მოდიფიკაცია San Andreas -ის თვის, ინიციატივა გამოიწვია პრობლემების ზრდამ განახლებებზე და მენეჯმენთზე SA-MP ში. პირველი გამოშვება იქნება მხოლოდ და მხოლოდ სერვერისთვის. ამჟამინდელი SA-MP ის კლიენტით მომხმარებელს შეეძლება დაუკავშირდეს სერვერს. მომავალში კი გამოვა open.mp კლიენტი რომელსაც მეტი, საინტერესო განახლებები ექნება.</p>
    <hr />
    <h2>არის ეს განშტოება?</h2>
    <p>არა. ეს არის აბსოლიტურად ბოლომდე თავიდან წერა, აქვს საკმაოდ დიდი დადებითი მხარე დიდხნიანი ცოდნისა და გამოცდილების სახით. უკვე იყო SA:MP განშტოებების შექმნის მცდელობები, მაგრამ ჩვენ გვჯერა რომ მათ ქონდათ ორი ძირითადი პრობლემა:</p>
    <ol>
      <li>ისინი დაფუძნებული იყვნენ "გაჟონილი" SA-MP ის კოდზე. ამ მოდიფიკაციების ავტორებს არ ჰქონდათ ამ კოდით სარგებლობის უფლება და ისინი ყოველთვის უკანა ფლანგზე იდგნენ მორალურადაც და ლეგალურადაც. ჩვენ რათქმაუნდა უარს ვამბობთ ამ კოდის გამოყენებაზე. ეს ოდნავ აფერხებს განვითარების სისწრაფეს მაგრამ ეს სწორი ნაბიჯია სტაბილურად გასაშვებად.</li>
      <li>მათ ცადეს თავიდან გამოეგონებინათ ძალიან ბევრი რამ ერთ ჯერზე: სკრიპტინიგ ძრავის შეცვლა, შესაძლებლობების მოშორება სხვა შესაძლებლობების დამატებისას, სხვადასხვა რაღაცების ერთმანეთთან შეუთავსებლად დაკავშირება. ეს იწვევს იმ სერვერების განვითარების შეფერხებას, რომელსაც დიდი რაოდენობის მოთამაშეები და კარგად დამუშავებული სათამაშო სკრიპტი აქვს, მათ მოუწევდათ თავიდან დაეწერათ ბევრი რამ. ჩვენ სერიოზულად ვაპირებთ დავამატოთ ბევრი ახალი რამ, მაგრამ ჩვენ ასევე ვზრუნავთ მიმდინარე სერვერებზე, მათ ვუწყობთ ხელს რომ გამოიყენონ ჩვენი კოდი თავიანთი კოდის შეცვლის გარეშე.</li>
    </ol>
    <hr />
    <h2>რატომ კეთდება?</h2>
    <p>მიუხედავად დიდი მცდელობებისა SA-MP ის დეველოფმენთში ოფიციალურად ჩართვისა სხვადასხვა ფორმებით: რჩევებით,  ვინმეზე რამის თხოვნით და შეთავაზებებით ბეტა ტესტერის პოზიციაზე; ასევე მოთამაშეებისგან სიახლეების მოთხოვნით.. მაგრამ ჩვენ არანაირი პროგრესი არ დაგვინახავს. ეს ყოველივე მიჩნეული იყო როგორც ინტერესის დაკარგვა ამ მოდის გაუმჯობესებაში, რაც თავისმხრივ პრობლემა არაა, მაგრამ არც წარმატებაა. იმის მაგივრად რომ განვითარება გაგრძელებულიყო თუნდაც იმ ხალხის მიერ ვისაც ეს უნდოდა, დამაარებელს სურდა მიექცია ყურადღება, აერთებდა სხვადასხვა საქმეებს მინიმალური შედეგის მისაღებად. ზოგი ფიქრობს რომ ეს დაბალი შემოსავლის ბრალია, მაგრამ ამის არანაირი მტკიცებულება არ არსებობს. მიუხედავად დიდი ინტერესისა და მზარდი მოთამაშეების რიცხვისა, მას ჯეროდა რომ მხოლოდ 1 ან 2 წელი ჰქონდა დარჩენილი ამ მოდს, და ის საზოგადოება რომელმაც წვლილი ჩადო გაეხადა SA-MP ი ის, რაც დღეს არის, არ იმსახურებდა ამ საქმის გაგრძელებას.</p>
    <br />
    <p>ჩვენ არ ვეთანხმებით.</p>
    <hr />
    <h2>რა არის თქვენი აზრი კალკორის/SA:MP/სხვა რამის შესახებ?</h2>
    <p>We love SA:MP, that's why we're here in the first place - and we owe creating that to Kalcor. He has done a huge amount for the mod over the years, and that contribution should not be forgotten or ignored. The actions leading to open.mp were taken because we disagreed with several recent decisions, and despite repeated attempts to guide the mod in a different direction, no solution was seen to be forthcoming. Thus we were forced to make the unfortunate decision to try and continue SA:MP in spirit without Kalcor. This is not an action taken against him personally, and should not be seen as an attack on him personally. We will not tollerate any personal insults against anyone - regardless of where they stand on the open.mp issue; we should be able to have a reasonable debate without resorting to ad-hominem attacks.</p>
    <hr />
    <h2>არ არის ეს საზოგადოების გაყოფა?</h2>
    <p>That is not our intention. Ideally no split would be required at all, but splitting off some and saving that part is better than watching the whole thing wither away. In fact, since this mod was announced a large number of non-English communities have re-engaged with the English community. These communities were slowly pushed out and side-lined previously, so their re-inclusion is actually bringing a split community back together. A large number of people have been banned from the official SA:MP forums (and in some cases, their entire post history purged), but Kalcor himself has pointed out that the official forums are not SA:MP, merely a part of SA:MP. Many players and server owners have never posted on, or even joined those forums; so talking to these people again is unifying yet more parts of the community.</p>
    <hr />
    <h2>ვინაიდან და რადგანაც ის არის "Open" Multiplayer, გახსნილი სორსი იქნება?</h2>
    <p>Eventually that is the plan, yes. For now we are trying to make the development open in terms of communication and transparency (which in itself is an improvement), and will move towards open-sourcing as and when we can, once things are all sorted and settled down.</p>
    <hr />
    <h2>როდის გაეშვება?</h2>
    <p>ეს საკმაოდ ძველი შეკითხვაა, რომელსაც სამწუხაროდ ერთადერთი, ასევე ძველი პასუხი აქვს: როცა მზად იქნება. არ არსებობს გზა ვიცოდეთ მსგავს პროექტს რამდენი ხანი დაჭირდება. It has been quietly running for a while now, and has already seen a few fluctuations in activity level, depending on how busy people are. But rest-assured it is well on the way, and progressing fast thanks to some fundamental design decisions (we'll say more about the architecture later).</p>
    <hr />
    <h2>როგორ შეგიძლია დაგვეხმარო?</h2>
    <p>თვალი ადევნე ფორუმს. ჩვენ გვაქვს სტატია გახსნილი ამ თემაზე რომელსაც შევინარჩუნებთ განახლებულს როცა მეტი სამუშაო გახდება შესაძლებელი. მაშინ როცა პროექტი მანამდე გამჟავნდა ვიდრე დაგეგმილი გვქონდა, ჩვენ უკვე ახლოს ვართ საწყის გამოშვებასთან, მაგრამ, ეს არ ნიშავს რომ მეტი დახმარება არ დაფასდება. მადლობა წინასწარ ამ პროექტში დაინტერესებისთვის და იმედის ქონისთვის:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>სტატია - "How to help" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>რა არის burgershot.gg?</h2>
    <p>burgershot.gg არის გეიმინგ ფორუმი, სხვა არაფერი. ბევრი ადამიანი არის ჩართული ორივეში და გარკვეული OMP განვითარება-განახლებები იპოსტება აქ, მაგრამ, ეს ორი სხვადასხვა დამოუკიდებელი პროექტებია. burgershot.gg არ არის OMP ფორუმი, არც OMP არის burgershot-ის საკუთრება. მაშინვე როცა OMP საიტი სრულად გაეშვება, ეს ორიც განთავისუფლდება ერთმანეთისგან (SA-MP იც დაჰოსტილი იყო GTAForums მიერ სანამ საკუთარ საიტს გაუშვებდა).</p>
    <hr />
    <h2>რას ვფიქრობთ OpenMP -ზე?</h2>
    <p>Open Multi-Processing პროექტი არის "OpenMP", ჩვენ ვართ "open.mp". აბსოლიტურად განსხვავებული.</p>
  </div>
);
