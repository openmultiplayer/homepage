import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Sebuah mod multi pemain yang akan datang untuk <em>Grand Theft Auto: San Andreas</em> yang nantinya akan sepenuhnya kompatibel dengan mod multi pemain yang sudah ada <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      Ini nantinya <strong>SA:MP client dan semua script SA:MP yang sudah ada akan bekerja dengan open.mp</strong> dan, selain itu juga, banyak bugs yang diperbaiki dalam perangkat lunak server tanpa perlu peretasan ataupun penyelesaian masalah.
    </p>
    <p>
      Jika kamu ingin tau kapan perilisan publik direncanakan atau bagaimana kamu dapat berkontribusi pada proyek ini, silahkan lihat <a href="https://www.burgershot.gg/showthread.php?tid=99">forum thread ini</a> untuk info lebih lanjut.
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
    <h2>Apa itu open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) adalah mod multi pemain pengganti San Andreas, diinisiasi sebagai respon atas tanggapan yang tidak menguntungkan dalam masalah pada pembaruan dan pengelolaan SA:MP. Perilisan awal akan menjadi pengganti drop-in untuk server saja. Client SA:MP yang ada akan tetap bisa terhubung kedalam server. Di masa depan nanti, sebuah open.mp client akan tersedia, memungkinkan pembaruan yang lebih menarik untuk dirilis.</p>
    <hr />
    <h2>Apakah ini sebuah fork?</h2>
    <p>Tidak. Ini adalah sebuah penulisan ulang lengkap, mengambil keuntungan dari puluhan tahun pengalaman dan pengetahuan. Sempat ada upaya untuk melakukan forking SA:MP sebelumnya, namun kami percaya hal ini memiliki dua masalah utama:</p>
    <ol>
      <li>Mereka berbasis kepada kode sumber SA:MP yang di leak. Author nya sendiri tidak memiliki izin yang legal untuk kode tersebut, dan dengan demikian mereka selalu berada terbelakang, baik secara moral maupun hukum. Kami langsung menolak untuk menggunakan kode tersebut. Ini sedikit menghambat kecepatan pengembangan, tapi merupakan langkah tepat dalam jangka panjang.</li>
      <li>Mereka mencoba untuk menciptakan terlalu banyak sekaligus. Baik itu mengganti skrip engine, atau menghapus fitur sambil menambahkan fitur baru, atau hanya men-tweak sesuatu dengan cara yang tidak kompatibel. Hal ini dapat mencegah sebuah server dengan basis kode dan basis player yang besar untuk berpindah, karena merkea harus membuat ulang beberapa, jika tidak semuanya, dari kode mereka - suatu usaha yang berpotensi besar. Kami sepenuhnya bermagsud untuk menambahkan fitur, dan mengubah hal-hal tertentu, seiring waktu, namun kami juga berfokus untuk mendukung server yang ada, membolehkan mereka menggunakan kode kami tanpa mengubah milik mereka.</li>
    </ol>
    <hr />
    <h2>Kenapa anda lakukan hal ini?</h2>
    <p>Meskipun telah banyak cara untuk mendorong pengembangan SA:MP kedepan secara resmi, dalam bentuk saran, pengejaran, dan bantuan dari tim beta; disamping sebuah komunitas yang menyerukan sesuatu untuk hal baru apa saja; tidak ada kemajuan sama sekali. Ini secara luas diyakini hanya karena kurangnya minat pada bagian kepemimpinan mod, yang dimana itu bukanlah sebuah masalah, namun tidak ada sama sekali garis kesuksesan. Alih-alih menyerahkan pengembangan memerintah kepada orang yang tertarik untuk masih bekerja menjadi mod, Founder nya hanya hanya ingin membawa semuanya dengan dirinya sendiri, dan tampaknya merangkai segala sesuatunya selama mungkin dengan usaha seminimal mungkin. Beberapa mengklaim bahwa ini hanyalah untuk alasan pendapatan pasif, tetapi tidak ada bukti untuk membuktikan itu. Terlepas dari minat yang besar, dan familial community yang kuat, dia percaya hanya ada 1-2 yang tersisa di dalam mod, dan beberapa komunitas yang telah bekerja begitu keras untuk membuat SA:MP seperti sekarang ini sudah tidak layak lagi untuk dilanjutkan.</p>
    <br />
    <p>Kami tidak setuju.</p>
    <hr />
    <h2>Apa pendapat anda mengenai Kalcor/SA:MP/apalah itu?</h2>
    <p>Kami cinta SA:MP, itulah kenapa kami ada disini - dan kami menciptakan nya kembali untuk Kalcor. Dia sudah membuat sejumlah besar mod selama bertahun-tahun, dan kontribusi itu seharusnya tidak boleh dilupakan atau diabaikan. Tindakan yang mengarah ke open.mp diambil karena kami tidak setuju dengan beberapa keputusan baru-baru ini, dan meskipun upaya berulang kali untuk memandu mod ke arah yang berbeda, tidak ada solusi yang terlihat akan datang. Karena itu kami terpaksa membuat keputusan yang berat ntuk mencoba dan melanjutkan SA:MP dengan semangat tanpa Kalcor. Ini bukanlah tindakan yang diambil terhadapnya secara pribadi, dan seharusnya tidak terlihat sebagai serangan terhadapnya secara pribadi. Kami tidak akan membalas penghinaan pribadi terhadap siapa pun - dan terlepas dari di mana mereka berdiri pada masalah open.mp; kita harus dapat melakukan debat yang masuk akal tanpa menggunakan serangan ad-hominem.</p>
    <hr />
    <h2>Bukankah ini hanya memecah komunitas?</h2>
    <p>Tentu saja itu bukan niat kami. Idealnya tidak perlu perpecahan yang diperlukan sama sekali, tetapi memisahkan beberapa dan menyimpan bagian itu lebih baik dibandingkan melihat segalanya lenyap. Bahkan, sejak mod ini diumumkan sejumlah besar komunitas non-Inggris telah kembali terlibat dengan komunitas Inggris. Komunitas ini akan perlahan didorong keluar dan dipagari sebelumnya, sehingga inklusi mereka benar-benar menyatukan komunitas yang terpisah. Banyak orang yang sudah ditendang dari forum SA:MP official (dan di beberapa kasus, histori postingan mereka kebanyakan dihapus), namun Kalcor sendiri telah memastikan bahwa forum tersebut bukanlah SA:MP, melainkan hanya bagian dari SA:MP, banyak player dan server owner tidak pernah memposting sesuatu, atau bahkan bergabung di forum; jadi mengambil orang orang seperti ini lagi akan menyatukan lebih banyak bagian dari komunitas.</p>
    <hr />
    <h2>Sejak proyek ini "Open" Multipayer, apakah nanti open-source?</h2>
    <p>Sebenarnya itulah rencananya, ya, Jadi kedepannya kami akan membuat pengembangan secara terbuka dengan persyaratan komunikasi dan transparansi (yang dengan sendirinya merupakan peningkatan), dan akan bergerak ke arah open-sorucing sebagaimana dan ketika kami bisa, setelah semuanya diselesaikan dan disempurnakan.</p>
    <hr />
    <h2>Kapan akan dirilis?</h2>
    <p>Ini adalah pertanyaan kuno, dan sayangnya memiliki jawaban kuno: ketika selesai. Tidak ada cara untuk mengetahui berapa lama proyek seperti ini akan berlangsung. Ini akan berjalan secara diam-diam untuk saat ini, dan sudah ada beberapa fluctations pada level aktifias, tergantung pada seberapa sibuk orang orang. Namun percayalah itu akan berjalan dengan lancar, dan berkembang dengan cepat berkat beberapa keputusan desain mendasar (kami akan sampaikan lebih banyak tentang arsitektur nanti).</p>
    <hr />
    <h2>Apa yang bisa saya bantu?</h2>
    <p>Rajin-rajinlah untuk mengunjungi forum. Kami mempunyai topik tersendiri untuk ini, dan akan terus diperbarui disaat pekerjaan baru tersedia. Walau proyek ini proyek ini lebih sedikit lebih awal dari yang diharapkan, kami kami sudah siap untuk rilis awal, tetapi itu tidak berarti lebih banyak bantuan tidak selalu dihargai secara besar. Terima kasih sebelumnya karena tertarik, dan mempercayai pada proyek ini: </p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>Topik tentang "How to help" (burgershot.gg)</u>
    </a>
    <hr />
    <h2>apa itu burgershot.gg?</h2>
    <p>burgershot.gg adalah forum gaming, tidak lebih. Ada banyak orang yang terlibat di keduanya, dan sebuah pengembangan OMP dan updates diposting di sana, namun mereka adalah dua proyek independen. Itu bukanlah sebuah OMP forum, dan juga OMP bukan properti burgershot. dan ketika Full OMP site telah berjalan, dua hal ini tentunya akan dipisahkan satu sama lain (seperti SA:MP yang awalnya di host oleh GTAForums sebelum website mereka dibuat).</p>
    <hr />
    <h2>Bagaimana dengan OpenMP?</h2>
    <p>Proyek Open Multi-Processing adalah "OpenMP", kami adalah "open.mp". Hal ini sangat berbeda.</p>
  </div>
);
