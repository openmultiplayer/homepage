import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
    მომავალი multiplayer მოდიფიკაცია თამაშისთვის - <em>Grand Theft Auto: San Andreas</em> - რომელიც იქნება უკუთავსებადი ერთ-ერთ, ამჟამინდელ მოდიფიკაციასთან <br /><em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
    ეს ნიშნავს რომ <strong>მიმდინარე SA:MP კლიენტი და მისი არსებული სკრიპტები, უპრობლემოდ იმუშავებს open.mp-ზეც</strong>. <br />ამასთანავე ბევრი ბაგი იქნება გასწორებული სასერვერო პროგრამაშივე. შესაბამისად აღარ მოგიწევთ დამატებითი პროგრამების გამოყენება.
    </p>
    <p>
    გაინტერესებთ როდისა არის დაგეგმილი პირველი საჯარო გამოშვება ან გსურთ დაეხმაროთ პროექტს? - დამატებითი ინფორმაციისთვის წაიკითხეთ: <a href="https://www.burgershot.gg/showthread.php?tid=99">ეს სტატია</a>.
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
    <p>open.mp (Open Multiplayer) არის ერთ-ერთი მოდიფიკაცია San Andreas-ის თვის, რომლის შექმნის ინიციატივა, გამოიწვია პრობლემების ზრდამ: განახლებებსა და მენეჯმენთზე SA-MP-ში. პირველი ვერსია იქნება გამოშვებული სასერვერო პროგრამის შესაცვლელად. ამჟამინდელი SA-MP-ის კლიენტით, შესაძლებელი იქნება ამავე სერვერზე დაკავშირება. მომავალში კი open.mp-ის კლიენტი იქნება ხელმისაწვდომი, რომელიც მეტ შესაძლებლობებს შემოგვთავაზებს.</p>
    <hr />
    <h2>არის თუ არა ეს განშტოება?</h2>
    <p>არა. ეს არის კოდის აბსოლუტურად ხელახლა გადაწერა, დიდხნიანი ცოდნისა და გამოცდილების გამოყენებით.<br /> უკვე იყო SA:MP განშტოებების შექმნის მცდელობები, მაგრამ ჩვენ გვჯერა რომ მათ ქონდათ ორი ძირითადი პრობლემა:</p>
    <ol>
      <li>ისინი დაფუძნებული იყვნენ "გაჟონილი" SA-MP ის კოდზე. ამ მოდიფიკაციების ავტორებს არ ჰქონდათ ამ კოდით სარგებლობის უფლება და ისინი მორალურადაც და ლეგალურადაც ყოველთვის უკანა ფლანგზე იყვნენ.<br /> ჩვენ რა თქმა უნდა უარს ვამბობთ ამ კოდის გამოყენებაზე. ეს ოდნავ აფერხებს განვითარების სისწრაფეს მაგრამ ეს სწორი ნაბიჯია სტაბილურად გასაშვებად.</li>
      <br /><li>მათ სცადეს თავიდან გამოეგონებინათ ძალიან ბევრი რამ ერთ ჯერზე: სკრიპტინიგ ძრავის შეცვლა, შესაძლებლობების მოშორება სხვა შესაძლებლობების დამატებისას, სხვადასხვა რაღაცების ერთმანეთთან შეუთავსებლად დაკავშირება. ეს იწვევს იმ სერვერების განვითარების შეფერხებას, რომელსაც დიდი რაოდენობის მოთამაშეები და კარგად დამუშავებული სათამაშო სკრიპტი აქვს, მათ მოუწევდათ თავიდან დაეწერათ ბევრი რამ. ჩვენ სერიოზულად ვაპირებთ დავამატოთ ბევრი ახალი რამ, მაგრამ ჩვენ ასევე ვზრუნავთ მიმდინარე სერვერებზე, მათ ვუწყობთ ხელს რომ გამოიყენონ ჩვენი კოდი თავიანთი კოდის შეცვლის გარეშე.</li>
    </ol>
    <hr />
    <h2>რატომ ვაკეთებთ ჩვენ ამას?</h2>
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
    <h2>ვინაიდან და რადგანაც ის არის "Open" Multiplayer, იქნება თუ არა მისი კოდი ყველასათვის ხელმისაწვდომი?</h2>
    <p>ჩვენი პასუხი არის - კი, მაგრამ ამჟამად ჩვენ ვცდილობთ დავამყაროთ ღია კომუნიკაცია და გამჭირვალობა დეველოპმენტის შესახებ (რომელიც უკვე გამოუმჯობესებაა)</p>
    <hr />
    <h2>როდის გაეშვება?</h2>
    <p>ეს საკმაოდ რთული შეკითხვაა, რომელსაც ერთი, თუმცა არასრული პასუხი აქვს: როდესაც მზად იქნება. არ არსებობს გზა, რომელიც მიგვითითებს თუ რამდენი ხანი დასჭირდება მსგავსი პროექტის დასრულებას.<br />პროექტი დიდი ხანია რაც მუშაობის პროცესშია და მისი აქტივობა სამწუხაროდ ცვალებადია, ამის ფაქტორი კი იმ ხალხის შეზღუდული თავისუფალი დრო გახლავთ, რომლებიც პროექტზე მუშაობენ.<br />თუმცა აღსანიშნავია რომ პროექტი სწრაფად პროგრესირებს, გარკვეული მიზეზების გამო (რომლებზეც დეტალურად მომავალში ვისაუბრებთ).</p>
    <hr />
    <h2>როგორ შეგიძლია დაგვეხმარო?</h2>
    <p>თვალი ადევნე ფორუმს. ჩვენ გვაქვს გახსნილი სტატია ამ თემაზე, რომელსაც ვხდით აქტიურს მაშინვე, როდესაც მეტი ფუნქციონალი იქნება ხელმისაწვდომი. <br />მიუხედავად იმისა, რომ პროექტი დაგეგმიზლე ადრე გამჟღავნდა, ჩვენ უკვე ახლოს ვართ საწყის გამოშვებასთან, მაგრამ, ეს არ ნიშავს რომ მეტი დახმარება არ დაფასდება. მადლობა წინასწარ ამ პროექტში დაინტერესებისთვის და იმედის ქონისთვის:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>სტატია - "How to help" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>რა არის burgershot.gg?</h2>
    <p>burgershot.gg არის გეიმინგ ფორუმი, სხვა არაფერი. ბევრი ადამიანი არის ჩართული ორივე პროექტში და გარკვეული open.mp-ს განვითარება-განახლება, იპოსტება იქ, მაგრამ, ეს ორი სხვადასხვა დამოუკიდებელი პროექტია. burgershot.gg არ არის OMP ფორუმი, არც OMP არის burgershot-ის საკუთრება, როდესაც OMP საიტი სრულად გაეშვება, ეს ორიც განთავისუფლდება ერთმანეთისგან (SA-MP-იც დაჰოსტილი იყო GTAForums მიერ სანამ საკუთარ საიტს გაუშვებდა).</p>
    <hr />
    <h2>რას ვფიქრობთ OpenMP -ზე?</h2>
    <p>Open Multi-Processing პროექტი არის "OpenMP", ჩვენ ვართ "open.mp". აბსოლუტურად განსხვავებული.</p>
  </div>
);
