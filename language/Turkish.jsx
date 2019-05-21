import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
     <em>Grand Theft Auto: San Andreas</em>, olarak bilinen mevcut çok oyunculu modifikasyon ile tamamen geriye dönük uyumlu olacak. <em>San Andreas Multiplayer.</em> için çok oyunculu modifikasyon geliyor.
    </p>
    <br />
    <p>
      Bu, mevcut <strong> SA:MP istemcisinin ve tüm komut dosyalarının open ile çalışacağı anlamına gelir. open.mp</strong>, yanı sıra çok oyunculu sunucu tarafında birçok hata düzeltmek ve geçici çözümler için gerek kalmadan düzeltilecektir.
    </p>
    <p>
     Kamu bülteniyle ilgili haberlerle ilgileniyorsanız veya projeye katkıda bulunmak istiyorsanız, <a href="https://www.burgershot.gg/showthread.php?tid=99">Forum üzerinden</a> daha fazla bilgi edinebilirsiniz.
    </p>
    <h1>
      <FAQLink>SSS</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>SSS</h1>
    <hr />
    <h2>open.mp Nedir?</h2>
    <p>open.mp (Open Multiplayer, OMP) - SA:MP güncellemeleri ve geliştirilmesi ile ilgili sorunlara yanıt olarak oluşturulan  San Andreas Multiplayer için yedek olarak geliştirilen çok oyunculu mod. İlk sürüm yalnızca sunucu için bir yedek sağlayacaktır. Sa:MP istemcisi olan oyuncular bu sunucuya bağlanabilir. open.mp, olarak daha ilginç güncellemeleri yayınlayacağız.</p>
    <hr />
    <h2>Bu bir kopya mı?</h2>
    <p>Hayır, bu proje yıllar boyunca biriken bilgi ve tecrübeyi dikkate alarak sıfırdan oluşturulmuştur. SA:MP kopyalama girişimleri daha önce gerçekleşti, ancak hepsinin iki ana problemi olduğuna inanıyoruz:</p>
    <ol>
      <li>Hepsi SA:MP kaçak koduna dayanıyordu. Bu modların yazarları SA:MP kodunu kullanma hakkı yoktu ve hem ahlaki hem de hukuki açıdan açıkça savunmasızdı. Kesinlikle bu kodu kullanmayı reddediyoruz. Bu, geliştirme sürecini biraz zorlaştırıyor, ancak uzun vadede doğru karar verdiğimize inanıyoruz.</li>
      <li>Aynı anda çok fazla şeyi yeniden icat etmeye çalıştılar. Komut dosyası motorunu değiştirmeye, mevcut özellikleri silmeye ve yenilerini eklemeye ya da uyumsuz bir şekilde işleri optimize etmeye çalıştılar. Çünkü hepsi değilse de, bazı komut dosyalarınızı yeniden yazmanız gerekir. Ayrıca yeni özellikler eklemek ve değiştirmek istiyoruz, ancak sunucu sahiplerinin kendi kodlarını değiştirmek zorunda kalmadan kodumuzu kullanmalarına izin vermek için çalışıyoruz.</li>
    </ol>
    <hr />
    <h2>Bu işi neden yapıyorsunuz?</h2>
    <p>
Her ne kadar topluluk üzerinden öneri sunarak, eleştirerek ve yardım sunarak resmi SA:MP gelişimini tekrar tekrar canlandırmaya çalışmış olsak da, hiçbir gelişme olmamıştır. Bu muhtemelen SA:MP geliştiricisinin ilgisizliğinden kaynaklanıyor. Kendinde, bu ilgi eksikliğinin farkında olmadı ve ne yazık ki hedefi olmadı ve bu nedenle daha fazla geliştirme olmadı. Kurucu, SA:MP geliştirmekyerine, her şeyi mezara götürmeye ve en az çabayla mümkün olduğunca uzun süre hayatta kalmaya karar verdi. Bazıları bunun sebebini gelir sebeplerinden dolayı olduğunu söylüyor, ancak herhangi bir kanıt yok. Güçlü ve aile temelli topluluğun yoğun ilgisine rağmen, kurucu, modifikasyonun sadece 1 veya 2 yıl daha devam edeceğine ve SA:MP’yi yapmak için çok çalışmış olduğu halde topluluğun gerekli değeri vermediğine inandı.    </p>
    <br />
    <p>Biz katılmıyoruz</p>
    <hr />
    <h2>Kalcor / SAMP  hakkında ne düşünüyorsunuz?</h2>
    <p>Sa:MP'yi seviyoruz, bu yüzden buradayız ve bunu Kalcor'a borçluyuz. Değişiklikler için yıllar boyunca çalıştı ve bu katkılar göz ardı edilmemeli veya unutulmamalıdır. Open.mp yol açma sebebimiz, son birkaç karara itiraz ettiğimiz için yapıldı.Bu yüzden, SA: MP'yi Kalcor'suz ruhu ile sürdürmeye çalışmak için talihsiz bir karar vermeye zorlandık.Bu bizzat kendisine karşı yapılan bir eylem değildir ve buna karşı bir saldırı olarak görülmemelidir. Kişilere karşı yapılan hakaretlere kim olduklarına bakılmaksızın tahammül etmeyeceğiz. open.mp; hakkında kişilere saldırı - hakaret etmeden makul bir tartışma yapabiliriz. </p>
    <hr />
    <h2>Bu toplumu bölmek değil midir?</h2>
    <p>Böyle bir niyetimiz yok. Ancak amaçımız bir kitleyi bölmek değil, her şeyin kaybolduğunu - silindiğini izlemek yerine bunu kurtarmak daha iyidir. SA:MP resmi forumundan çok sayıda insan yasaklandı (ve bazı durumlarda tüm emeklerini kaldırdılar), ancak Kalcor, resmi forumun SA:MP topluluğu değil, yalnızca bir kişi olduğunu belirtti.Birçok oyuncu ve sunucu sahibi foruma hiç katılmamış; bu yüzden bu insanlarla konuşmak toplumu daha da birleştirecek.</p>
    <hr />
    <h2>Bu "Open" Multiplayer olduğu için, bu proje açık kaynak kodlu olacak mı?</h2>
    <p>Evet, planımız bu. Bu arada, geliştirme sürecinin geri bildirimi ve şeffaflığı (kendi içinde ilerleyen) açısından açıklık sağlamaya çalışıyoruz ve mümkün olduğu zaman, diğer önemli sorunların çözüldüğünde ve istikrarlı bir gelişme süreci elde edilir edilmez açık kaynak koduna paylaşmaya çalışacağız.</p>
    <hr />
    <h2>Open.mp ne zaman çıkacak?</h2>
    <p>Bu eski bir sorudur ve ne yazık ki bunun için şu cevaba sahibiz; hazır olduğunda. Böyle bir projenin ne kadar süreceğini bilmek mümkün değil. </p>
    <hr />
    <h2>Nasıl yardımcı olabilirim?</h2>
    <p>Foruma bir göz atın. Sadece bunun için bir konumuz var ve daha fazla yardım ihtiyaçı mevcut olduğunda bu konuyu güncel tutacağız. Projenin planlanandan biraz daha erken bir şekilde ortaya çıkmasına rağmen, şimdiden ilk lansmana gidiyoruz, ancak bu daha fazla yardımın ihtiyaçımız olmadığı anlamına gelmiyor. Projeye ilgi duyduğunuz ve inandığınız için şimdiden teşekkür ederiz:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=361">
      <u>Yardım Konusu</u>
    </a>
    <hr />
    <h2>burgershot.gg nedir?</h2>
    <p>Burgershot.gg bir oyun forumudur, başka bir şey değildir. Birçok insan dahil olmuştur ve OMP'nin bazı güncellemeleri ve gelişmeleri orada yayınlanmaktadır, ancak bunlar iki bağımsız projedir.</p>
    <hr />
    <h2> "OpenMP" hakkında nedir?</h2>
    <p>
      <a href="https://ru.wikipedia.org/wiki/OpenMP">Open Multiprocessing</a> - olarak bilinen "OpenMP", farklı projedir, bizim projemiz - "open.mp". olarak isimlendirilir. Bunlar ikisi tamamen farklı projelerdir.
    </p>
  </div>
);
