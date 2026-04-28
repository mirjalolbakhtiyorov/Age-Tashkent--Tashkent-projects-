<!DOCTYPE html>
<html lang="uz">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Age |Toshkent - Toshkent</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />


 <!-- Favicon -->
  <link rel="icon" type="image/png" href="./image/logo_circle_cropped.png">
 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- header.css style -->
  <link rel="stylesheet" href="./main/header.css">

  <!-- footer.css style -->
  <link rel="stylesheet" href="./main/footer.css">

  <!-- map.css style-->
  <link rel="stylesheet" href="./main/map.css">

  <!-- panel css-->
  <link rel="stylesheet" href="./main/panel.css">
</head>

<body>



  <!-- HEADER -->
  <header class="main-header">
    <nav class="main-header__navbar">
      <ul class="main-header__item">
        <li>
          <a class="main-header__item-links">Age <span
              style="font-weight: bolder;"><b></b><b>Toshkent</b><b></b></span></a>
        </li>
        <li>
          <a class="main-header__item-links" href="#">Binolar yoshi xaritasi</a>
          <select id="place-select">
            <option value="Toshkent">Toshkent</option>
            <option value="Chirchiq">Chirchiq</option>
            <option value="xiva">Xiva</option>
          </select>
        </li>

        <div class="position-right">
          <li>
            <a class=" li-link_hover main-header__item-links open-hmodal" data-hmodal="loyiha" href="#">Loyiha
              haqida</a>
          </li>
          <li>
            <a class=" li-link_hover main-header__item-links open-hmodal" data-hmodal="infografiya"
              href="#">Infografiya</a>
          </li>
          <li>
            <a class=" li-link_hover main-header__item-links open-hmodal" data-hmodal="boglanish" href="#">Biz bilan
              bo‘g‘lanish</a>
          </li>
          <li>
            <a class="main-header__item-links" href="#">
              <select id="lang-select">
                <option value="uz"><a style="text-decoration: none;" href="index.html">O‘zbek</a></option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
            </a>
          </li>
          <li>
            <a class="main-header__item-links position-right__social-link" href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a class="main-header__item-links position-right__social-link" href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </header>

  <!-- HEADER MODALS -->
  <div class="hmodal-backdrop" id="hmodal-loyiha">
    <div class="hmodal">
      <button class="hmodal-close">&times;</button>


      <div class="head_overlay">
        <div class="head_modal">
          <h2>Loyiha haqida</h2>
          <div class="tabs">
            <div class="tab head_active" data-tab="tab1">Hammassi nimadan boshlangan</div>
            <div class="tab" data-tab="tab2">Loyiha ishtirokchilari</div>
            <div class="tab" data-tab="tab3">Boshqa loyihalarimiz</div>
          </div>

          <div id="tab1" class="tab-content head_active">

            <p style="text-indent: 20px;">
              Age Tashkent loyihasi — Toshkent hokimiyati huzuridagi Raqamli rivojlanish departamentining o‘nlab
              mutaxassislari birgalikda olib borgan ishlari natijasidir. Ular birgalikda Toshkentning, shahar
              meʼmorchiligining boy tarixini va merosini o‘z ko‘zi bilan ko‘rish va uni haqqoniy baholash imkonini
              beradigan mahsulotni yaratishga muvaffaq bo‘ldi.
            </p>

            <p style="text-indent: 20px;">Loyihaning o‘zi AQSH, so‘ngra Yevropa va Rossiya tomonidan davom ettirilgan
              Niderlandiyaning Building Age Maps chellenjidan ilhomlanib yaratilgan. O‘zbekiston Markaziy Osiyoda
              binolarning yoshi bo‘yicha bunday interfaol xarita paydo bo‘lgan birinchi mamlakat bo‘ldi.</p>
            <img class="infografiya_images" src="./image/loyiha 1.png" alt="" srcset="">
            <h1 style="text-align: center;">Loyihaning texnik asoslari</h1>
            <p style="text-indent: 20px;">«Menga ilk bor Building Age Maps konsept sifatida ko‘rsatilganda, ochig‘ini
              aytganda, cho‘chidim» - deydi Age Tashkent ning front-end yaratuvchisi Marat Ayupov. — «Axir u yerda har
              bir blok, har bir bino interfaol: uyning yoshini, qanday materiallardan qurilgani va u bilan bog‘liq biron
              bir madaniy-tarixiy kontekst borligini ko‘rish mumkin edi».
            </p>
            <p style="text-indent: 20px;">Dastlab uning asosida Building Age Maps ga o‘xshash loyiha yaratish mumkin
              bo‘lgan texnologiyani tanlash masalasi ko‘ndalang turdi. Shunda Marat oddiy xaritaga koordinatalarni
              joylashtirish va ularning tashqi ko‘rinishini istalgancha o‘zgartirish mumkin bo‘lgan maʼlumotlar formati
              – geojson dan foydalanishga qaror qildi.</p>
            <p style="text-indent: 20px;">
              Texnologiyaning o‘zi ishlab chiqish uchun qulay ekanligiga qaramay, odamlar undan foydalanishda qiynalishi
              maʼlum bo‘ldi — geojson kompyuterlar, noutbuklar va smartfonlar uchun juda “og‘ir”. «Biz uchun
              tizimimizdan har bir talaba va hatto o‘quvchi eng oddiy moslama orqali ham foydalana olishi muhim edi» —
              deydi Marat.
            </p>
            <p style="text-indent: 20px;">Maratning ishida hamkasbi, texnik direktor, DevOps muhandisi Shoxrux Komolov
              katta yordam berdi. Shoxrux loyihaning ahamiyati tarixni urganish uchun katta deb hisoblaydi — “Tarixni
              bilish insonning rivojlanishiga, yangi xatolardan qochishiga va eski xatolarni takrorlamaslikka yordam
              beradi, deb hisoblayman. Bugungi kunda shahrimiz tarixini interaktiv va qiziqarli o‘rganish imkonini
              beruvchi texnologiyalar mavjudligidan xursandman”, — deydi u. Marat bilan birgalikda u loyihani
              optimallashtirish bilan shug‘ullangan: uni shunday takomillashtirdiki natijada har kim saytni hech qanday
              muammosiz ishlata oladi.</p>
            <img class="infografiya_images" src="./image/loyiha 2.png" alt="" srcset="">
            <p>Tizimni optimallashtirish uchun, dasturchi o‘zining katta maʼlumotlar bazasiga bog‘lanishga asoslangan
              uslubiyotidan foydalandi. Natija shunday bo‘ldiki, endi foydalanuvchi ularning ustiga maʼlumotlar
              kiritilgan oddiy rasmlarni yuklab oladi. Bu vaqt va resurslar jihatidan ancha tejamli bo‘lib, vazifasiga
              ko‘ra geojson texnologiyasidan qolishmas edi. Bunday qarorga kelishda Maratga Geointellektdagi hamkasblari
              yordam berdi: «Hech kimning kodini o‘g‘irlamaganimizdan, hamkasblardan yordam so‘ragan bo‘lsak-da, o‘z
              kodimizni yaratganimizdan juda faxrlaman» deb taʼkidlaydi dasturchi.</p>

            <p>Axborot manbalari va ishonchlilik
              Anglashinarlikki, uylar va binolarning qurilgan vaqti haqida bunday keng hajmli maʼlumotlar bazasini
              to‘plash oson ish emas. Bu borada loyihaning ilmiy rahbari Kamoliddin Fayzullayev yaqindan yordam berdi.
            </p>
            <p>«Age Tashkent loyihasi boshlanishidan avval biz Toshkentning 12 darvozasini o‘rganish bilan mashg‘ul
              edik» — deydi olim. — «Buning uchun bizga tarixiy maʼlumotlar, arxivlar, qadimiy xaritalar va boshqa
              maʼlumotlar kerak bo‘ldi, biz ularni turli manbalardan so‘rab topdik va so‘ngra ularga ishlov berib,
              o‘rganib chiqdik».</p>

            <p>
              Kamoliddin Saidovichning vazifasi barcha maʼlumotlarning ishonchliligini o‘rganib chiqishdan iborat edi –
              aynan u moslik nuqtasini aniqlash, turli yillardagi ko‘chalar konfiguratsiyasini solishtirish, u yoki bu
              inshootlar qaysi davrda paydo bo‘lganligini aniqlash uchun 1865 dan 2019 yilgacha bo‘lgan xaritalarni
              solishtirish bilan shug‘ullandi. Qiziqarli bir jihat aniqlandiki, 1865 yildan 1960 yilgacha bo‘lgan davrda
              Toshkent mahallalari va ko‘chalarning joylashuvi deyarli o‘zgarmagan ekan. 1966 yildagi zilzila tufayli
              boshlangan global qayta qurishdan so‘ng jiddiy o‘zgarishlar kuzatilgan.
            </p>
            <img class="infografiya_images" src="./image/loyiha 3.png" alt="" srcset="">
            <p>Geoaxborot tizimlari bo‘limining boshlig‘i O‘tkir Shermanovning jamoasi bino va uy-joylarning yoshini
              aniqlashga yordam berdi.</p>

            <p>«Niderlandiyada binolarning yoshiga oid loyiha borligi, va Toshkentda ham shunga o‘xshash loyihani amalga
              oshirish istagi haqida aytib berishganda, menga bu g‘oya juda maʼqul keldi», - deydi O‘tkir. « — Biz
              darhol jamoani to‘play boshladik: dastruchilar, GIS mutaxassislari, xaritachilar, kontent-menejerlar va
              maʼmuriy xodimlar zarur edi».</p>

            <p>Tarixiy maʼlumotlardan tashqari, loyihada zamonaviy statistikadan ham foydalanilgan. Loyiha tahlilchilari
              G‘ayrat Burxonov, Mansur Jahonov va Nomonjon Xoshimov Toshkentda 1917 yildan hozirgi paytgacha nechta bino
              qurilganliginini aks ettiruvchi dolzarb statistika pulini to‘plashdi. Bundan tashqari, tahlilchilar har
              bir inshootning necha qavatdan iborat ekanligini va ularni qurish paytida foydalanilgan materiallar turini
              aniqlashdi.</p>
            <p>
              Xaritalarni chizish va ularni taxt qilish
              Xaritani chizish uchun jamoaga toporejalar: shaharning 1865 yildan 2021 yilgacha bo‘lgan turli yillarga
              oid xaritalar zarur edi. Ammo buning o‘zi yetarli emas edi, binolarning vektorli tasvirlari ham kerak
              bo‘ldi – natijada ularni qo‘lda chizishdi. Bunday chizmalar turar-joy mavzelari va xususiy uylarni ham
              qamrab oldi: hozirgacha ularning chegarasi biron bir xaritada aks ettirilmagan edi.
            </p>
            <p>Barcha binolar vektorli tasvir formatida chizib bo‘lingach, jamoa ularning yoshini aniqlashga kirishdi –
              buning uchun ular turli xaritalarni ustma ust qo‘yib, qiyoslashdi: masalan, agar bino 1940-yillarning
              xaritasida mavjud bo‘lsa, u o‘sha davrda qurilgan obyekt sifatida qayd qilindi. Shuningdek jamoa tomonidan
              foydalanuvchilar osonlik bilan kompyuter orqali Toshkentdagi madaniy meros obyektlari to‘g‘risida
              qo‘shimcha maʼlumotlar olishi uchun imkoniyat yaratildi.
            </p>
            <p>
              Ayni paytda loyiha ishiga topograflar va GIS-muhandislar, masalan, Jonibek Kutlimratov va Qobil Karimboyev
              qo‘shildi. Ular 2021 yilning oktyabridan loyiha ustida ishlay boshladi va darhol qo‘lda xususiy
              uy-joylarni belgilashga kirishib ketishdi, holbuki Toshkentda bunday uylarning soni 175 600 tani tashkil
              etadi. Ayni paytda, mutaxassislar 2019 yildan shu paytgacha qurilgan barcha yangi bino va obyektlarni
              xaritada aks ettirdi. Natijada xaritaga 336 152 obyekt chizmasi kiritildi, buni qo‘lda amalga oshirishga
              660 soat uzluksiz mehnat sarflandi.
            </p>
            <p>Loyiha rahbari Axror Asilxodjayev topograflarning ishi zargarlar ishidan kam bo‘lmadi deb hazilomus esga
              oladi: “Shahardagi har bir uy, har bir binoning o‘ziga xos konturi bor – biz avvaliga ularning hammasi
              chizilgan manbani topishimiz mumkin deb o‘ylagan edik, biroq maʼlum bo‘ldiki bunday manba yo‘q va
              topograflar ishni o‘z zimmalariga oldilar va sabr-toqat bilan o‘z qo‘llari bilan hamma binolarni chizib
              chiqdilar. Axror, shuningdek, topograflar biror joyda xatoga yo‘l qo‘ygan bo‘lishi mumkinligini
              taʼkidlaydi - "Bunday holatda, loyiha veb-saytida xato haqida xabar berish imkoniyati bor", deydi u.</p>
            <img class="infografiya_images" src="./image/loyiha 4.png" alt="" srcset="">

            <p>Oqibatda, yorqin, rang-barang xarita paydo bo‘ldi. Darvoqe, ranglar tanlovi tasodifiy emas: qadimiy
              binolar sochiluvchan materiallar, poxol va loy rangida ifodalangan, zero bu davrda qurilishda ushbu
              materiallardan foydalanilgan, so‘ngra g‘isht va SSSR davri – to‘q sariq va qizil ranglar ishlatilgan,
              so‘ngra 1966 yilgi zilzila sodir bo‘lgan, keyinchalik metro qurilgan, u ko‘k rangda ifodalanadi,
              mustaqillik davri boshlanganligi och havo rangda aks ettirilgan, yangi O‘zbekiston davri esa – yashil
              rangda mujassamlangan.</p>

            <p>Bu o‘rinda loyiha dizayneri Mavlonbek Po‘latovning xizmati katta bo‘ldi. Aynan u age.tashkent.uz
              saytining dizayni, uni mobil qurilmalarga moslashtirish va Toshkentning yangi xaritasi aks ettirilgan
              rasmiy posterini yaratish bilan shug‘ullangan. Mavlonbek taʼkidlashicha, ish shunchalik mashaqqatli ediki,
              rang va tuslarni tanlashga u 4 ish kunini sarflagan ekan. Bularning barchasi foydalanuvchilar
              maʼlumotlarni intuitiv tarzda, tushunarli, oson va qiyinchiliklarsiz qabul qila olishlari uchun zarur edi.
            </p>
            <br>
            <p>Keyingi rejalar qanday?</p><br>
            <p>
              Loyihaning g‘oyaviy ilhomlantiruvchisi Aleksey Xenning aytishicha, Age Tashkent ni rivojlantirishni
              to‘xtatmoqchi emas. “Men boshidan shahrimiz bunday loyihaga munosib ekanligiga ishonganman. Bu go‘zal
              manzara, yoki maʼlumot berganligi tufayli emas, balki bu barcha o‘zbekistonliklarning qobiliyati,
              ko‘nikmalari, intizomi va iqtidorining isboti bo‘lgani uchun – zero jamoamizda mamlaktimizning barcha
              hududlari vakillari bor” – deydi u.
            </p>
             <img class="infografiya_images" src="./image/loyiha 5.png" alt="" srcset="">
            <p>Loyiha kengayib boradi: har chorakda xaritaga yangi binolar qo‘shiladi, Age Tashkent posterlari chop
              qilinmoqda, va kelgusida merch chiqarilishi mo‘ljallanmoqda.</p>
          </div>

        </div>

        <div id="tab2" class="tab-content">
          <h1 class="title">Bizning Jamoamiz</h1>

    <div class="team-container">
        <div class="member">
            <img class="member-img" src="./image/person 1.jpg" alt="Abdullayev Sardor">
            <h2 class="member-name">Abdullayev Sardor</h2>
            <p class="member-role">To'lov va texnologiyalar bo'yicha direktor</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 2.avif" alt="Xen Aleksey">
            <h2 class="member-name">Xen Aleksey</h2>
            <p class="member-role">Direktorning birinchi o'rinbosari</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 4.avif" alt="Fayzulloyev Kamoliddin">
            <h2 class="member-name">Fayzulloyev Kamoliddin</h2>
            <p class="member-role">Direktor o'rinbosari</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 3.avif" alt="Asikodjayev Axror">
            <h2 class="member-name">Asikodjayev Axror</h2>
            <p class="member-role">Project & Product Manager</p>
        </div>
        <div class="member">
            <img class="member-img" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="Komolov Shohrux">
            <h2 class="member-name">Komolov Shohrux</h2>
            <p class="member-role">Texnik direktor va DevOps</p>
        </div>
        <div class="member">
            <img class="member-img" src="https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_640.jpg" alt="Ayyup Marat">
            <h2 class="member-name">Ayyup Marat</h2>
            <p class="member-role">Bizning sayt bilan tanishing</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 1.jpg" alt="Abdullayev Sardor">
            <h2 class="member-name">Abdullayev Sardor</h2>
            <p class="member-role">To'lov va texnologiyalar bo'yicha direktor</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 2.avif" alt="Xen Aleksey">
            <h2 class="member-name">Xen Aleksey</h2>
            <p class="member-role">Direktorning birinchi o'rinbosari</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 4.avif" alt="Fayzulloyev Kamoliddin">
            <h2 class="member-name">Fayzulloyev Kamoliddin</h2>
            <p class="member-role">Direktor o'rinbosari</p>
        </div>
        <div class="member">
            <img class="member-img" src="./image/person 3.avif" alt="Asikodjayev Axror">
            <h2 class="member-name">Asikodjayev Axror</h2>
            <p class="member-role">Project & Product Manager</p>
        </div>
        <div class="member">
            <img class="member-img" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" alt="Komolov Shohrux">
            <h2 class="member-name">Komolov Shohrux</h2>
            <p class="member-role">Texnik direktor va DevOps</p>
        </div>
        <div class="member">
            <img class="member-img" src="https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_640.jpg" alt="Ayyup Marat">
            <h2 class="member-name">Ayyup Marat</h2>
            <p class="member-role">Bizning sayt bilan tanishing</p>
        </div>
    </div>
    
    </div>
    
        </div>

        <div id="tab3" class="tab-content">
          <div class="container">
        <h1 class="main-title">His Tashkent</h1>

        <div class="top-blocks">
            <div class="content-block">
                <img src="./image/his-tashkent.png" alt="His Tashkent">
                <h2>His Tashkent</h2>
                <p>HisTashkent loyihasi sizni qadimgi Toshkent bilan tanishtiradi – biz XIX asr oxiridan to hozirgi kungacha bo'lgan poytaxt xaritalarini to'pladik va ularni real vaqtda taqqoslash imkoniyatini taqdim etdik.</p>
            </div>

            <div class="content-block">
                <h2>XALQ NAZORATI</h2>
                <img src="./image/xalq nazorati.png">
                <p>Poytaxt aholisining va Toshkent shahar xizmatlarining o'rtasida samarali hamkorlik qilish uchun interaktiv servis.</p>
            </div>
        </div>

        <div class="content-block content-block-center">
            <h2>Молодёжный портал</h2>
            <img src="./image/yoshlar-portal.png">
            <p>“Yoshlar portali” yoshlarga grantlar, tanlovlar va turli tadbirlar haqida tezkor ma’lumot olish imkoniyatini beruvchi noyob platforma hisoblanadi. Shuningdek, u kelajak avlod salohiyatini maksimal darajada oshirish uchun sifatli o'quv markazlarini tavsiya qiladi.</p>
        </div>
    </div>
        </div>
      </div>
    </div>


  </div>
  </div>

  <div class="hmodal-backdrop" id="hmodal-infografiya">
    <div class="hmodal">
      <button class="hmodal-close">&times;</button>
      <h2>Infografiya</h2>
      <p>Toshkentning ko‘p qavatli uylari: Toshkentda qanday qilib,<br>nimadan va qachondan buyon ko‘p qavatli uylar
        qurilmoqda?
      <p>Necha yildirki, Toshkentda qurilish ishlari faol olib borilmoqda: yangi ko‘p qavatli uylar paydo bo‘lmoqda,
        biznes markazlari, savdo komplekslari va turli-tuman xususiy va davlat obyektlari qurilmoqda. Agar chetdan,
        xolis nuqtai nazardan qaraganda, zamonaviy Toshkent bitta katta qurilish maydoni.</p>

      <p>Shahar hokimligi huzuridagi Raqamli rivojlanish departamenti mutaxassislari Toshkentning ko‘p qavatli uylari
        tarixini o‘rganish va O‘zbekistonning poytaxti qanchalik tez kengayib borayotganligini ko‘rish uchun tadqiqot
        o‘tkazishdi.</p>

      <p>Toshkentda ko‘p qavatli uylar qurish azaldan odat bo‘lib qolgan – 1950-yillardayoq poytaxtda yiliga 100 ta ko‘p
        qavatli uylar qurilgan. Vaqt o‘tishi bilan, bu tendensiya sustlashgandek bo‘ldi, ammo 1966 yildagi fojiali
        zilziladan so‘ng bu ko‘rsatkichlar yana-da yuqorilab ketdi.</p>

      <p>Toshkent shahrida qurilgan ko‘p qavatli uylar soni</p>
      <img class="infografiya_images" src="./image/infografiya picture q.png" alt="" srcset="">
      <p>
        Tabiiy ofat yuz bergan yili Toshkentda 600 dan ortiq ko‘p qavatli uylar qurilgan bo‘lsa, shu paytdan boshlab,
        2000 yillarning boshlarigacha qurilish ishlari deyarli to‘xtamagan. Faqat XXI asr boshida qurilishlar soni
        kamayib ketdi. 2018-2019 yillarda esa birdaniga 500 dan ziyod yangi ko‘p qavatli uylar qurildi.
      </p>

      <p>Ayni paytda, ko‘p xonadonli uylarni qurish surʼati yana pasaymoqda, lekin, ehtimol, yana bir necha yildan so‘ng
        ko‘p qavatli uylarning qurilishi “avjiga chiqishi” mumkin. Buning uchun zarur shart-sharoitlar yetarli: masalan,
        “Yangi O‘zbekiston” bog‘i hududida yangi turar-joy mavzelari qurilishi rejalashtirilgan.</p>

      <p>Shunisi diqqatga sazovorki, yildan yilga qurilish materiallarini tanlashga yondashuv ham o‘zgarib bormoqda. Bu
        qurilish ishlarining tezkorligi va iqtisodiy vaziyat bilan bog‘liq. Masalan, 1966 yilda, ko‘p va tez uy qurish
        vazifasi qo‘yilganda, ungacha ham, keyin ham deyarli ishlatilmagan material – yog‘ochdan foydalanilgan.</p>

      <p>Shuningdek, shunisi eʼtiborga loyiqki, shaharning zamonaviy tarixining ulkan davrida – 60-yillarning oxiridan
        va 00 yillargacha – ko‘p qavatli uylar qurilishi haqida so‘z ketganda, pishiq g‘ishtdan ko‘ra, beton ko‘proq
        qo‘llanilgan.</p>

      <p>Materiallar turlari bo‘yicha Toshkent shahrida ko‘p qavatli_uylar</p>
      <img class="infografiya_images" src="./image/infografiya picture 2.png" alt="">
      <p>2018 yildan boshlab esa, Toshkentda ko‘p qavatli uylar panelli temir-beton – o‘ta mustahkam va chidamli
        qurilish materialdan bunyod etilmoqda. Bu, asosan, zamonaviy binolarning balandroq va kengroq bo‘lishi bilan
        bog‘liq, yaʼni ularning chidamliligini oshirish uchun mustahkamroq materiallar zarur.</p>

      <p>Tahlillar shuni ko‘rsatadiki, 2019 yilda 1966 yilga nisbatan 200 taga kamroq ko‘p qavatli uy qurilgan, biroq
        turar-joy maydoni bo‘yicha zamonaviy binolar tarixiy binolarga deyarli yetib olgan: 880 ming kv.m.ga nisbatan
        826 ming kv.m.</p>

      <p>O‘rta hisobda 1960 yillardan boshlab, Toshkentda har yili yangi ko‘p qavatli uylar hisobidan 300 ming kv.m.ga
        yaqin turar-joy maydoni paydo bo‘lmoqda. Shu bilan birga, 2004 yildan 2008 yilgacha bunday qurilishlar deyarli
        bo‘lmagan – ko‘p qavatli uylar qurilishida haqiqiy sukunat kuzatilgan.</p>

      <p>Toshkent shahrida qurilgan ko‘p qavatli uylarning yashash maydoni</p>
      <img class="infografiya_images" src="./image/infografiya picture 3.png" alt="">

      <p>Ammo haqiqiy osmono‘par binolar faqat 2020 yilda qurila boshlandi – aynan o‘sha paytda 12 qavatdan yuqori
        bo‘lgan ko‘p sonli ko‘p qavatli uylar qurilishi boshlangan.</p>
      <p>Ungacha O‘zbekiston poytaxtida faqat 30 ga yaqin shunday uy bor edi.</p>
      <p>Dastlab, 50-yillarning boshidan 1966 yilgacha “ikki qavatli” uylar juda mashhur edi, keyin esa “to‘rt qavatli”
        uylar – ular 60-yillarning oxiridan 80-yillarning boshigacha juda faol qurilgan.
      </p>
      <p>Undan so‘ng “besh qavatli” uylar estafetani oldi va dastlabki 9 qavatli uylar paydo bo‘la boshladi.</p>
      <img class="infografiya_images" src="./image/infografiya picture 5.png" alt="">
      <p>Hatto ushbu kichik statistik namunadan ham Toshkent faol ravishda kengayib borayotgani ayon bo‘ladi. Buni tarix
        ham tasdiqlaydi – quyida siz Toshkentning 1865 yildan buyon kengayishi bilan vizual tarzda tanishish
        imkoniyatiga ega bo‘lasiz: shahar qanday rivojlangani, chegaralari qanday o‘zgargani va bugungi hajmiga qanday
        yetganligi.</p>
      <video class="infografiya_images" src="./image/video.mp4" type="video/mp4" controls></video>
    </div>
  </div>

  <div class="hmodal-backdrop" id="hmodal-boglanish">
    <div class="hmodal">
      <button class="hmodal-close">&times;</button>
      <h2>Biz bilan bog‘lanish</h2>
      <form class="hcontact-form">


        <label>Iltimos o'zingizni tanishtiring*</label>
        <input type="text" placeholder="Ism familiyangizni kiriting:">
        <label>Elektron pochta manzilingizni kiriting*</label>
        <input type="email" placeholder="Elektron pochta manzilingiz ">
        <label>Telefon raqamingizni qoldirishingiz mumkin*</label>
        <input type="email" placeholder="Telefon raqamingiz ">
        <label>Iltimos, fikrlaringizni qoldiring*</label>
        <textarea rows="4" placeholder="Xabaringizni yozing..."></textarea>
        <p>Maksimal 1200 ta belgi</p>
        <p>Biron bir ma'lumot bilan bo'lishmoqchi bo'lsangiz, uni shu erda kiritishingiz mumkin</p>
        <button type="submit">Yuborish</button>
      </form>
    </div>
  </div>
  <!-- ✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️-->
 
  <!-- Xarita -->
  
  <!-- Xarita -->
  <main id="map"></main>

  <!-- 🔒 Qulf tugmasi -->
  <button class="lock-btn" id="lockBtn">🔓</button>

  <!-- 🔹 Panel -->
  <div class="sidebar" id="sidebar">
    <div class="header">Sirli xona</div>

    <div class="section">
      <label>
        <input type="checkbox" checked> Toshkent chegarasi yillar davomida
      </label>
      <div class="year-control">
        <input type="range" id="yearRange" min="1865" max="2025" step="5" value="1865">
        <div class="year-display" id="yearDisplay">1865</div>
      </div>
      <label><input type="checkbox"> Binolar bilan ko‘rsatish</label>
    </div>

    <div class="section">
      <h4>Qadimiy devor, darvoza va ko‘chalar</h4>
      <label><input type="checkbox"> Qal’a devori</label>
      <label><input type="checkbox"> Toshkentning 12 ta darvozasi</label>
      <label><input type="checkbox"> Hozirgi ko‘chalar</label>
    </div>

    <div class="section">
      <h4>Madaniy meros obyektlari</h4>
      <label><input type="checkbox"> Arxitektura meroslari</label>
      <label><input type="checkbox"> Arxeologiya yodgorliklari</label>
    </div>
  </div>


  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

  <!--✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️-->


  <!-- footer -->


  <!-- FOOTER: left timeline, right logos & privacy -->
  <footer class="footer-section" aria-label="Footer">
    <div class="position-footer-left">
      <div class="timeline" role="list" aria-label="Timeline">
        <div class="r0" data-modal="modal0" data-title="mil. av." tabindex="0" role="button"></div>
        <div class="r1" data-modal="modal1" data-title="1000" tabindex="0" role="button"></div>
        <div class="r2" data-modal="modal2" data-title="1878" tabindex="0" role="button"></div>
        <div class="r3" data-modal="modal3" data-title="1917" tabindex="0" role="button"></div>
        <div class="r4" data-modal="modal4" data-title="1958" tabindex="0" role="button"></div>
        <div class="r5" data-modal="modal5" data-title="1966" tabindex="0" role="button"></div>
        <div class="r6" data-modal="modal6" data-title="1984" tabindex="0" role="button"></div>
        <div class="r7" data-modal="modal7" data-title="1991" tabindex="0" role="button"></div>
        <div class="r8" data-modal="modal8" data-title="2000" tabindex="0" role="button"></div>
        <div class="r9" data-modal="modal9" data-title="2008" tabindex="0" role="button"></div>
        <div class="r10" data-modal="modal10" data-title="2016" tabindex="0" role="button"></div>
      </div>

      <div class="labels" aria-hidden="true">
        <span>mil. av.</span>
        <span>1000</span>
        <span>1878</span>
        <span>1917</span>
        <span>1958</span>
        <span>1966</span>
        <span>1984</span>
        <span>1991</span>
        <span>2000</span>
        <span>2008</span>
        <span>2016</span>
        <span>2024</span>
      </div>
    </div>

    <div class="position-footer__right" role="contentinfo">
      <div class="footer-box">
        <a href="https://tashkent.uz/ru" target="_blank" rel="noopener">
          <img src="./image/toshkent shahar hokimligi.svg" alt="Tashkent emblem">
        </a>
        <p class="inline">TOSHKENT<br>CITY<br>HOKIMLIGI</p>
      </div>

      <div class="footer-box">
        <img src="./image/dep-logo.svg" alt="Department logo">
        <a href="https://digitaltashkent.uz/" target="_blank" style="text-decoration: none; letter-spacing: 0.1px;">
          <p class="inline">Bu sayt Raqamli rivojlanish departamenti <br> tomonidan ishkab chiqilgan</p>
        </a>

      </div>

      <div class="footer-box">
        <p class="inline">© AgeTashkent 2024 <br>
          <button class="btn" id="privacy-btn" aria-haspopup="dialog"><u>Maxfiylik siyosati </u><u></u></button>
        </p>

      </div>
    </div>
  </footer>

  <!-- 11 modals (unified modal bg & text color). Each modal header shows the period. -->
  <div id="modal0" class="modal" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – e.a. -1000 yillik </h3>
        <div class="period">Rangi – sariq <br>
          Ramzi – quyosh va oy</div>
      </div>
      <button class="close-btn" data-close="modal0" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">Shoshtepa — qadimiy ibodatxona-rasadxona, Toshkentning janubida, Jun arig'i bo'yida,
        Choshtepa tog'ida zamonaviyshechlik bilan manzillari o‘zgarmoqda. Bugungi kundagi zamonaviy Toshkentning ikki
        manzili (shahar) hisoblanadi va Toshkentning yoshlarini uning shakkalanish paytida hisoblashga qaror qilingan.
      </p>

      <p style="text-indent: 20px;">Yodgorlik qozonmalarida arxeolog Margarita Filanovich Toshkentning yoshi 2200 yil
        ekanligini 2007 yil 22 noyabrda YUNESKO Bosh konferensiyasining 34 sessiyasida tasdiqladi va Toshkentni 1000
        yillik yubileyini nishonlashga taklif qildi.</p>

      <p style="text-indent: 20px;">Shoshtepa asosiy yorituvchi manzilida ko'rsatilgan ulkan uslubda o'zining ranglari
        va ulkan quyosh-oy mo'jizalarini yaratadi.</p>
    </div>
  </div>

  <div id="modal1" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1000-1878 yy. </h3>
        <div class="period">Rangi – to'q sariq <br>
          Ramzi – paxsa, ushbu davrning asosiy qurilish materiali</div>
      </div>
      <button class="close-btn" data-close="modal1" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">Toshkentning eng yirik tarixiy qismi Eski shahar bo'lib, Turkiston
        general-gubernatorligi tashkil topguncha (1865 y.) shahar shu yerda joylashgan.</p>

      <p style="text-indent: 20px;">Hozirgi paytda Eski shahar 1860 yilda bo'lganidan keyin odamlar tomonidan
        o‘zgartirilgan joylar—joylar, oralar asrlar oldi me’moriy yodgorliklarga aylangan: Hastimok masjidi, Baroqxon,
        Xo’ja Akhror masjidi va boshqalar.</p>

      <p style="text-indent: 20px;">Jumladan, Mavlono madrasasi (XII asr) ham ushbu tarixiy shahar hududida joylashgan.
        O'zbekistonda islamiy madaniyatning yuksakligi to'g'risida shahar paytgacha tarixiy yodgorlar mavjud bo'lib,
        ulardan biri Qur'on nusxasi saqlanib qolgan.</p>

      <p style="text-indent: 20px;">Shuningdek, shahar o'zining xos, noyob arxitekturasi bilan xarakterlanadi, bu esa
        Shosh shahrini Toshkent tarixida yanada boyitadi.</p>
    </div>
  </div>

  <div id="modal2" class="modal" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1878-1917 yy. </h3>
        <div class="period">Rangi – och jigarrang <br>Ramzi – “Nikolay” g‘ishti</div>
      </div>
      <button class="close-btn" data-close="modal2" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">

      <p style="text-indent: 20px;">“Nikolay” g‘ishtining tarixi XIX asrning oxirida Toshkentga buyuk knyaz Romanov
        Nikolay Konstantinovichning surgun qilinishi bilan boshlandi. Nikolay o‘ziga xos ko‘rsatma berib, tadbirkorlik
        loyihasiga ega edi. Infratuzilma tomoni uchun qarorlar berilgan mablag‘a Toshkentda birinchi qurilish bo‘lib
        o‘tdi.</p>

      <p style="text-indent: 20px;">Arxitektor Vilgelm Geinselman va Aleksey Benua loyihalari asosida Buyuk Knyaz
        Nikolay uchun Toshkentda qurilgan binolarni yaratish jarayoni davom etdi. Ular asosan arxitekturaviy yo‘nalishda
        edi: Ertakar g‘ishtlar, Nikolay g‘ishtlari, “Nikolay” g‘ishtining o‘rni (eski ToshMI), Reliev turli
        madaniyatlar, tarixiy inshootlar va boshqa elementlar (Fransiya echkalari) qo‘shilgan.</p>

      <p style="text-indent: 20px;">O‘tro Osiyodagi hanuzgacha “Nikolay” g‘ishtiga oid ashoralar. Shu sababli Toshkent
        tarixining ushbu davri “Nikolay” g‘ishtiga bog‘liq bo‘lgan bir tarixiy jihat sifatida tan olinadi.</p>
    </div>
  </div>

  <div id="modal3" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1917-1958 yy.</h3>
        <div class="period">Rangi – qizil <br>
          Ramzi – sobiq Sovet Ittifoqi boshlanishi davri</div>
      </div>
      <button class="close-btn" data-close="modal3" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">

      <p style="text-indent: 20px;">Sovuq SSSR davrida O‘zbekiston katta mamlakatning ko‘h hududlaridan ajralib turar va
        haqiqiy ravishda “Sovet Sharq yulduzi” hisoblanardi. SSSR tarkibida bo‘lgan O‘zbekiston o‘z xalkining mehri va
        intilishlari bilan rivojlanardi, shuningdek, o‘zining respublika sifatida rivojlanishi, o‘z sanoat va oziq-ovqat
        sanoati rivojlanishi, o‘z sanoat va boshqa sohalarda ham rivojlanishi uchun zarur shart-sharoitlar yaratishga
        intilardi.</p>

      <p style="text-indent: 20px;">Ushbu davrda O‘zbekistonning iqtisodiy va madaniy hayoti, yangi korxonalar, qishloq
        xo‘jaligi va boshqa sohalar o‘rtasida ko‘plab aloqalar o‘rnatishga qaratilgan yirik loyihalar amalga oshirilgan.
        Respublikada iqtisodiyotni rivojlantirish, sanoatni o‘sishini ta’minlash va yangi iqtisodiy yo‘nalishlarni
        yaratishga qaratilgan dasturlar ishlab chiqildi.</p>

      <p style="text-indent: 20px;">Yangi rivojlanish jarayonlari, respublikaning iqtisodiy va madaniy hayotida yangi
        yutuqlarni ta’minladi. Shuningdek, O‘zbekiston sobiq SSSRning eng yirik paxta bazasi sifatida tanildi.</p>
    </div>
  </div>

  <div id="modal4" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1958-1966 yy</h3>
        <div class="period">Rangi – qizil <br>
          Ramzi – qizil chinning, xotira va minnatdorchilik ramzi sifatida</div>
      </div>
      <button class="close-btn" data-close="modal4" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">Toshkent tarixiining ushbu davri Sharof Rashidov nomi bilan bog‘liq. Toshkentning
        rivojlanishi va ravnaq shaharlaridan biriga aylandi.</p>

      <p style="text-indent: 20px;">Sharof Rashidov Toshkentni Osiya va Afrika davlatlari bilan xalqarо aloqalar
        o‘rnatish va Afrika rivojlanishida muhim rol o‘ynagan shahar deb bilgan. Aynan Rashidov davrida Toshkentda
        mingtaqadagi ijtimoiy, iqtisodiy va madaniy jarayonlar rivojlandi, shaharni bog‘lar, istirohat bog‘lari,
        iqtisodiy taraqqiyot va turar-joy tumanlari bilan to‘ldirdi.</p>

      <p style="text-indent: 20px;">Sharof Rashidov buyruqiga ko‘ra Alisher Navoiy teatri paydo bo‘ldi, bu o‘z navbatida
        Toshkent gullari” deb ataladigan dasturlarni amalga oshirishga olib keldi. Toshkent gullari” davrida shahar
        yangi madaniy va ijtimoiy jihatdan rivojlanish jarayonlarini boshidan kechirdi.</p>

      <p style="text-indent: 20px;">Shuningdek, Toshkentning qizil chinning bilimlari asosida, yangi madaniy muhitlar
        rivojlandi.</p>
    </div>
  </div>

  <div id="modal5" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1966-1984 yy. </h3>
        <div class="period">Rangi – ko‘k <br>
          Ramzi – Toshkent metrosi logotipining asosiy rangi</div>
      </div>
      <button class="close-btn" data-close="modal5" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">Davr – 1966-1984 yy.
        Rangi – ko‘k
        Ramzi – Toshkent metrosi logotipining asosiy rangi</p>

      <p style="text-indent: 20px;">60-chi yillarning boshida toshkentliklar yaqinda yillarda sharqshunoslar metro paydo
        bo‘lishini ta’minla olmagan edi. Metroni qurish ishlari oltminchi yillarning oxirida boshlangan. Nihoyat, 1970
        yilda Toshkentning yangi metropoliteni foydalanishga topshirildi, Alisher Navoiy stansiyasi bog‘lanishi bilan
        tanildi. Keyinchalik bu stansiya Toshkent metrosi brendi sifatida “Chilonzor” deb nomlandi.</p>

      <p style="text-indent: 20px;">Toshkent metropoliteni o‘z infrastrukturasini rivojlantirish uchun zarur bo‘lib,
        shaharni ijtimoiy hayotida markazi o‘rnini egalladi. Bu yerda stansiya – hayot va mozaikalar batartib bo‘lib
        bordi. Har bir stansiya – hayot sahnasi.</p>

      <p style="text-indent: 20px;">Shu sababli Toshkentning tarixi Toshkent metropoliteni bilan bog‘liq.</p>
    </div>
  </div>

  <div id="modal6" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;"
    style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1984-1991 yy. </h3>
        <div class="period">Rangi – ko‘k <br>
          Ramzi – ko‘k, metro vagonlari bo‘yog‘ining rangi</div>
      </div>
      <button class="close-btn" data-close="modal6" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">

      <p style="text-indent: 20px;">1984 yil dekabr oyining boshlarida metroning ikkinchi liniyasi – O‘zbekiston
        liniyasi ishga tushirildi. Ushbu liniyaning birinchi uchastkasi tarkibida “Alisher Navoiy” stansiyasi ochildi.
        Interyer rassomi R. Muhammadjonov tomonidan A. Rahimov ishlarini bezatgan. Zolotoy avtobusi yo‘naldi Navoiyning
        “Xamsa” asari sifatida asoslar nomlar Ch.Ahmadov, I.Qayumovlar tomonida yaratilgan panoramali inshootlar.</p>

      <p style="text-indent: 20px;">2014 yil stansiya dunyodagi eng o‘ta transportlarning chiqishi interyerlari
        ro‘yxatiga kiritilgan, bu ro‘yxatda Moskva, Sankt-Peterburg, Vashington, Praga, Dubay, Neopol, Shanxay, Kiyev,
        Paris va boshqa shaharlar mavjud.</p>

      <p style="text-indent: 20px;">Ushbu davrda Toshkent metro vagonlari bo‘yog‘idan ko‘rsatildi.</p>
    </div>
  </div>

  <div id="modal7" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 1991-2000 yy. </h3>
        <div class="period">Rangi – ko‘k <br>
          Ramzi – mustaqil O‘zbekiston bayrog‘ining ranglaridan biri</div>
      </div>
      <button class="close-btn" data-close="modal7" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">O‘zbekiston, mustaqil davlat sifatida dunyo xaritasida 1991 yilda paydo bo‘ldi.
        Mamlakatda bozor iqtisodiyoti amal qilishi uchun asos yaratiladigan islohotlar boshlandi.</p>
    </div>
  </div>

  <div id="modal8" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 2000-2008 yy. </h3>
        <div class="period">Rangi – ko‘k <br>
          Ramzi – mustaqil O‘zbekiston bayrog‘ining ranglari turlari</div>
      </div>
      <button class="close-btn" data-close="modal8" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">


      <p style="text-indent: 20px;">Mustaqillik yillarida O‘zbekistonda turli sohalarda katta muvaffaqiyatlarga
        erishildi. Ushbu bosqichda dunyodagi inqiroz holatlariga qaramay, respublika milliy iqtisodiyotini
        rivojlantirishda katta yutuqlarga erishdi.</p>
    </div>
  </div>

  <div id="modal9" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 2008-2016 yy</h3>
        <div class="period">Rangi – ko‘k <br>
          Ramzi – mustaqil O‘zbekiston bayrog‘ining ranglari turlari</div>
      </div>
      <button class="close-btn" data-close="modal9" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <p style="text-indent: 20px;">O‘zbekiston davlatchiligining yangi bozor iqtisodiyoti shakllanishining birinchi
        bosqichidagi vazifalarni bajardi. U ushbu bosqichni evolyutsion rivojlanishining o‘ziga xos yo‘lidan borib,
        iqtisodiyot va aholi ustidan shokli tajribalariz bosib o‘tdi.</p>
    </div>
  </div>

  <div id="modal10" style="width: 30vw; margin-right: 40vw; margin-left: -20vw;" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Davr – 2016-2024 yy. </h3>
        <div class="period">Rangi – yashil <br>
          Ramzi – mustaqil O‘zbekiston bayrog‘ining ranglari turlari</div>
      </div>
      <button class="close-btn" data-close="modal10" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">

      <p style="text-indent: 20px;">2016 yildan sentyabrida keng ko‘lamli o‘zgarishlarni e’lon qilgan Shavkat Mirziyoyev
        davlatimiz rahbari sifatida saylandi. O‘zbek amaldorlarining yangi o‘zgarishlar bo‘yicha muvofiq harakat
        qilishi, muammolar hal qilinishiga ta’sir ko‘rsatishi, OAV orqali jamoatchilik fikrini inobatga olishga
        qaratilgan siyosat dasturi bo‘lib o‘tdi.</p>

      <p style="text-indent: 20px;">Hozirgi kunda iqtisodiyotni rivojlantirish bo‘yicha — Qirg‘iziston va Tojikiston
        bilan chegaralarni o‘rganish bo‘yicha muzokaralar olib borilmoqda. Iqtisodiyotni rivojlantirish bo‘yicha
        mahalliy aholi uchun muhim bo‘lgan Davlat dasturlari va loyihalarida GES kabi energiya manbalaridan foydalanish
        ko‘zda tutilmoqda.</p>

      <p style="text-indent: 20px;">Respublikamizning agrar sohasini birlashtirishda, iqtisodiyotning rivojlanishi va
        yangi dasturlarni amalga oshirishda muhim rol o‘ynaydi.</p>
    </div>
  </div>

  <!-- Privacy Policy modal (same style) -->
  <div id="privacy-modal" class="modal" aria-hidden="true">
    <div class="modal-header">
      <div>
        <h3>Maxfiylik Siyosati</h3>
        <div class="period">Detailed policy & data processing info</div>
      </div>
      <button class="close-btn" data-close="privacy-modal" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      Maxfiylik siyosati
      <p style="text-indent: 20px;">Mazkur Shaxsiy ma’lumotlarning maxfiyligi Siyosati (keyingi o’rinlarda - Siyosat)
        "Raqamli rivojlanish departamenti" MCHJ tomonidan Foydalanuvchi haqida u Departament to’lov servisidan mobil
        yoki veb-ilova ko’rinishida, hamda "Raqamli rivojlanish departamenti" MCHJning har qanday boshqa dasturlari,
        mahsulotlari, xizmatlari (keyingi o’rinlarda - Departament Servislari) ko’rinishida foydalanishi vaqtida
        olinishi mumkin bo’lgan ma’lumotga nisbatan amal qiladi.</p>

      <p style="text-indent: 20px;">
        Siyosat faqat Departament Servislariga qo’llaniladi, Departament Servislaridan erishimli bo’lgan havolalar
        bo’yicha Foydalanuvchi o’tishi mumkin bo’lgan uchinchi shaxslarning saytlari / servislarini, jumladan uchinchi
        shaxslar tomonidan Foydalanuvchi haqidagi ma’lumotlarga ishlov berilishini nazorat qilmaydi va ular uchun
        javobgar bo’lmaydi.
      </p>
      <p style="text-indent: 20px;">
        Siyosat matni bo’yicha barcha keltirilmagan va qo’llaniladigan terminlar va ta’riflar Departament Servislarini
        Foydalanuvchilarga predmeti taqdim etish va foydalanish tartibi hisoblanadigan boshqa
        kelishuvlardashartnomalarda keltirilgan.

        Departament Servislaridan foydalanish mazkur Siyosat va uning unda ko’rsatilgan shaxsiy ma’lumotlariga ishlov
        berish shartlari bilan so’zsiz rozilikni bildiradi; ushbu shartlar bilan rozi bo’lmaslik vaziyatida
        Foydalanuvchi Departament Servislaridan foydalanishdan saqlanishi kerak.</p>

      <p style="text-indent: 20px;">
        1. Departament oladigan va ishlov beradigan Foydalanuvchilar ma’lumotlari:<br><br>
        1.1. Mazkur Siyosat doirasida Foydalanuvchining shaxsiy ma’lumoti ostida quyidagilar tushuniladi:
        <br><br>
        1.1.1. Foydalanuvchi Departament Servisidan har qandayida ro’yhatdan o’tish vaqtida yoki Departament
        Servislaridan foydalanish jarayonida mustaqil o’zi haqida taqdim etadigan shaxsiy ma’lumot, jumladan Departament
        Foydalanuvchi bilan har qanday kelishuvlarni bajarish vaqtida uzatiladigan Foydalanuvchining shaxsiy
        ma’lumotlari. Foydalanuvchi tomonidan Departamentning ma’lum servislaridan foydalanishi faqat zarur bo’lgan
        ma’lumotlarni taqdim etilgan holdagina imkoniyatli bo’lishini inobatga olish kerak.
        <br><br>
        1.1.2. Foydalanuvchining qurilmasida o’rnatilgan dasturiy ta’minot yordamida Departament Servislaridan
        foydalanish jarayonida Departamentga avtomatik tarzda yuboriladigan ma’lumotlar, jumladan IP-manzil, cookiedan
        ma’lumotlar (Foydalanuvchining brauzerida saqlanadigan matnli fayllar), Foydalanuvchining brauzeri (yoki
        Departament Servislariga kirish amalga oshiriladigan boshqa dasturlar) haqidagi ma’lumot, kirish vaqti,
        so’ralayotgan sahifaning manzili.
        <br><br>
        1.1.2.1. Departament Servislaridan foydalanishda Foydalanuvchi haqidagi quyidagi egasizlantirilgan statistik
        ma’lumotlar avtomatik to’planishi (cookiesdan) amalga oshadi, jumladan:
      </p>
      <p style="text-indent: 20px;">
        <li>saytda bajarilgan harakat turi (klik, kursorni yuritish va shunga o’xshash);</li>
        <li>harakatni amalga oshirishning sanasi va vaqti;</li>
        <li>URL sahifalar;</li>
        <li>Referer;</li>
        <li>IP (statistikada IP-manzillar bilan ishlash imkoniyatisiz);</li>
        <li>User-Agent;</li>
        <li>ClientID (cookie fayli bo’yicha brauzer identifikatori);</li>
        <li>ekranning ajrataolishligi;
          klik amalga oshirilayotgan HTML-element sinfi;</li>
        <li>Foydalanuvchining geojoylashishi;
          qurilmalar, modellar, ishlab chiqaruvchilar va boshqalar bilan hatoliklar to’g’risida hisobotlar;</li>

      <p style="text-indent: 20px;">
        Foydalanuvchining telefon kontaktlari to’g’risida ma’lumotlar;
        Departament Servislari interfeysida Foydalanuvchi tomonidan ko’rib chiqilayotgan ma’lumotlar to’g’risida
        ma’lumotlar; Departament saytida vayoki mobil ilovasida shakllarni/murojaatlarni to’ldirish, jumladan ularni
        to’ldirish vaqtidagi hatoliklari dalillari to’g’risidagi ma’lumotlar</p> <br><br>
      1.1.2.2. Departament tomonidan taqdim etilayotgan har qanday servisidan foydalanib Foydalanuvchi Departament
      statistik ma’lumotlardan va sookies fayllaridan foydalanishi, ularga tizimlar tomonidan keyingi ishlov berilishiga
      va Departament tadqiqotlarini o’tkazish, ishlarni bajarish yoki xizmatlar ko’rsatishni amalga oshirish uchun
      uchinchi shaxslarga uzatishi mumkinligiga rozilik beradi. Foydalanuvchi o’zining uskunalarida faoliyat
      yuritayotgan brauzerning sozlamalarini o’zgartirish yo’li bilan Cookies fayllari bilan mustaqil boshqarishi
      mumkin.
      <br><br>
      1.1.3. Foydalanuvchi begona resurslardan (masalan, chatlar/forumlar/ijtimoiy tarmoqlardan) foydalangan vaqtda
      Departament umumiy erishimli ma’lumotlarni olishi mumkin. Ushbu ma’lumotlar Foydalanuvchi tomonidan chop
      etilayotgan ma’lumotlar, jumladan Departament Servislari haqida sharhlar yoki mulohazalar ko’rinishidagi
      ma’lumotlarga ega bo’lishi mumkin. Departament bunday ma’lumotlarni Foydalanuvchilarga xizmat ko’rsatish sifatini
      oshirish maqsadida qo’llaydi.
      <br><br>
      1.1.4. Departament shu bilan birga qonunchilik va mazkur Siyosatning talablariga zid keladigan harakatlarni
      Departament Servisidan foydalangan holda amalga oshirishga ko’maklashadigan sharoitlarni aniqlashtirish va (yoki)
      oldini olish uchun alohida ma’lumotlarga (masalan, IP-manzil, foydalanuvchi qurilmasining identifikatori) ishlov
      berishi ham mumkin.
      <br><br>
      1.1.5. Departament o’z kontragentlaridan vayoki Hamkorlaridan Foydalanuvchi haqidagi ma’lumotlarni olishi mumkin.
      Masalan, kontragent bilan kelishuvni bajarishda, oxirgisi Departament kontagentiga uzatiladigan harakatlar
      haqidagi ma’lumot bunday Foydalanuvchi va uning o’tkazmasi orasidagi aloqani o’rnatish imkoniyatini kontragentga
      ta’minlaydigan ba’zi ma’lumotlarni Departamentga uzatishi mumkin.
      <br><br>
      2. Foydalanuvchilarning shaxsiy ma’lumotlarini yig’ish va ularga ishlov berish maqsadlari <br><br>
      2.1. Departament faqat Departament Servislarini taqdim etish yoki Foydalanuvchi bilan kelishuvlarni bajarish uchun
      zarur bo’lgan o’sha ma’lumotlarni yig’adi va saqlaydi, qonunchilik tomonidan alohida shaxsiy ma’lumotlarni
      majburiy olish va saqlash ko’zda tutilgan holatlar bundan mustasno. Shaxsiy ma’lumotlarning saqlanishi ishlov
      berish maqsadlari buni talab etgan muddatdan ortiq amalga oshirilishi kerak emas, agar faqat bunday shaxsiy
      ma’lumotlarni saqlash muddati O’zbekiston Respublikasi qonunchiligi, Departament Servislari Foydalanuvchisi
      tomonidan foydalanish to’g’risidagi Siyosat tomonidan o’rnatilmagan bo’lsa.
      <br><br>
      2.2. Foydalanuvchining Shaxsiy ma’lumotlaridan Departament quyidagi maqsadlarda foydalanishi mumkin:
      <br><br>
      2.2.1.Departament bilan kelishuvlarni, hamda Departament kontragentlari bilan tuzilgan kelishuvlarni, jumladan
      Foydalanuvchining identifikatsiyasini/soddalashtirilgan identifikatsiyasini o’tkazishni, Foydalanuvchiga barcha
      erishimli Departament servislaridan foydalanish imkoniyatini taqdim etish maqsadida bajarish;
      <br><br>
      2.2.2. Foydalanuvchi bilan aloqalarni amalga oshirish, jumladan Departament Servislaridan foydalanish /
      Departament xizmatlarini ko’rsatish, hamda Foydalanuvchining so’rovlari va talabnomalariga ishlov berish, jumladan
      Departament kontragentlariga ijro uchun bunday so’rovlarni va talabnomalarni keyingi uzatish bilan bog’liq
      xabarnomalar, so’rovlar va ma’lumotlarni jo’natish;
      <br><br>
      2.2.3. Departament Servislarini sifatini yaxshilash, ulardan foydalanish, yangi Departament Servislarini ishlab
      chiqish, personalashtirilgan Departament Servislarini Foydalanuvchiga taklif qilish;
      <br><br>
      2.2.4. Egasizlantirilgan ma’lumotlar asosida statistik va boshqa tadqiqotlarni o’tkazish;
      <br><br>
      2.2.5. Foydalanuvchilar uchun marketing aktsiyalarini, jumladan Hamkorlarkontragentlar bilan birgalikda
      Departament tomonidan tashabbus etilayotgan aktsiyalarda ishtirok etish taklifini tarqatish va aktsiya tomonidan
      ko’zlangan sovg’alar/mukofotlarni olish maqsadida o’tkazish; elektraloqa tarmoqlari, jumladan telefon, faksimil,
      harakatdagi radiotelefone aloqasi, yoki to’g’ri aloqa yo’li bilan reklama-axborot materiallarini tarqatish;
      Foydalanuvchilarga ma’lumot uchun yuboriladigan reklama materiallarini va boshqa ma’lumotlarini targetirlash.
      <br><br>
      3. Foydalanuvchining shaxsiy ma’lumotlariga ishlov berish va uning uchinchi shaxslarga uzatilish shartlari
      <br><br>
      3.1. Departament mazkur Siyosat, aniq servislarni ko’rsatish shartlari va Departamentning ichki renglamentlari
      bilan muvofiqlikda Foydalanuvchilarning shaxsiy ma’lumotlariga ishlov beradi.
      <br><br>
      3.2. Foydalanuvchining shaxsiy ma’lumotlariga nisbatan uning maxfiyligi ta’minlanadi.
      <br><br>
      3.3. Departament quyidagi holatlarda Foydalanuvchining shaxsiy ma’lumotlarini uchinchi shaxslarga berib yuborishga
      haqli.
      <br><br>
      4. Foydalanuvchi tomonidan shaxsiy ma’lumotlarni o’zgartirish va o’chirish, hamda unga kirish ruxsatini olish.
      <br><br>
      4.1. Departament Servislari doirasida Foydalanuvchiga Foydalanuvchi tomonidan taqdim etilgan ma’lumotning yoki
      uning qismini o’zgartirish (yangilash, to’ldirish) funktsional imkoniyati taqdim etiladi. SHaxsiy ma’lumotlarga
      ishlov berilishiga rozilikni chaqirib olinishi yozma ravishda rasmiylashtirilgan bo’lishi va
      info@digitaltashkent.uz elektron pochta orqali yuborilgan bo’lishi kerak.
      <br><br>
      4.1.1. Qonunchilik tomonidan qo’llaniladigan o’rnatilgan chegaralarda, Departament shaxsiy ma’lumotlar oshkor
      etilgan har bir oluvchiga shaxsiy ma’lumotlarning o’zgartirilganligi yoki o’chirib yuborilganligi haqida xabar
      beradi, bu imkonsiz bo’lganda yoki juda katta kuch talab etgandagi holatlar bundan mustasno.
      <br><br>
      4.2. Qonunchilik talablariga muvofiq Departamentga Departament Servislaridan foydalanishda olingan
      Foydalanuvchining shaxsiy ma’lumotlariga ishlov berish / saqlashni amalga oshirish majburiyati yuklanishi mumkin.
      Bunday ishlov berish / saqlash qonunchilik va mazkur Kelishuv bilan o’rnatilgan asoslar bo’yicha vaziyatlarda va
      muddatlar davomida amalga oshiriladi.
      <br><br>
      4.3. Kirishga huquqlar
      4.3.1. Qo’llaniladigan qonunchilikka muvofiq, Foydalanuvchi Departamentdan olgan ma’lumotlarga kirish huquqiga ega
      bo’lishi mumkin, ya’ni quyidagilarga nisbatan ma’lumotlarni so’rab olish huquqiga ega: (a) ishlov berish
      maqsadlari; (b) ishlov berilayotgan ma’lumotlar toifalari; (v) Foydalanuvchining shaxsiy ma’lumotlari uzatilgan
      yoki uzatiladigan oluvchilarning toifalari; (g) saqlash muddatlari yoki uni aniqlashtirish mezonlari.
      <br><br>
      4.4. Shikoyat qilishga huquq
      4.4.1. Qo’llaniluvchi qonunchilik tomonidan o’rnatilgan chegaralarda, Foydalanuvchi u tomonidan avval taqdim
      etilgan o’zining har qanday roziliklarini chaqirib olishi yoki uning shaxsiy ma’lumotlariga ishlov berishga
      nisbatan qonuniy asoslarda o’z e’tirozlarini taqdim etishga haqli. Ba’zi holatlarda rozilikning chaqirib olinishi
      Foydalanuvchi Departament Servislaridan foydalana olmasligini bildiradi.
      <br><br>
      4.4.2. Qo’llaniluvchi qonunchilikka muvofiq, Foydalanuvchi nazorat organiga shikoyat kiritish huquqiga ega.
      <br><br>
      5. Foydalanuvchilarning shaxsiy ma’lumotlarini muhofazalash uchun qo’llaniladigan choralar. <br><br>
      5.1. Departament Foydalanuvchining shaxsiy ma’lumotlarini noqonuniy yoki tasodifiy kirishlardan, yo’qotishdan,
      o’zgartirishdan, o’zgartirilishidan, bloklanishidan, nusxa olinishidan, tarqatilishidan, hamda ular bilan uchinchi
      shaxslar tomonidan noqonuniy harakatlarni oshirishdan himoyalash uchun zarur bo’lgan va etarlicha tashkiliy va
      texnik choralarni amalga oshiradi.
      <br><br>
      5.2. Foydalanuvchining shaxsiy ma’lumotlarini muhofazalash va ishlov berilishini Departament O’zbekiston
      Respublikasining "Shaxsga doir ma’lumotlar to’g’risida"gi Qonunga (02.07.2019y.dagi O’RQ-547) va shaxsiy
      ma’lumotlarning xavfsizligini ta’minlash sohasida munosabatlarni tartibga soladigan boshqa me’yoriy hujjatlarga
      muvofiq amalga oshiradi.
      <br><br>
      5.3. SHaxsiy ma’lumotlarga ishlov berishda Departament ularning xavfsizligini ta’minlaydi va ularga noqqonuniy
      yoki tasodifiy kirishdan shaxsiy ma’lumotlarni, shaxsiy ma’lumotlarni yo’qotish, o’zgartirish, bloklash, nusxa
      ko’chirish, tarqatish, hamda bunday ma’lumotlarga nisbatan maxfiylik tartibini o’rnatish va unga rioya etilishni
      nazorat qilish yo’li bilan boshqa noqonuniy harakatlardan, hamda O’zbekiston Respublikasi qonunchiligini amalga
      oshiruvchi himoyaning qo’shimcha choralarini, standartlarini va tatbiq qilish yo’li bilan Departament ichki
      tashkiliy-idoraviy hujjatlarni himoyalash uchun zaruriy tashkiliy va texnik choralarni amalga oshirish. <br><br>

      6. Maxfiylik Siyosatini o’zgartirish. Qo’llaniladigan qonunchilik
      6.1. Departament yangi tahrirdagi Kelishuvni chop etish yo’li bilan mazkur Siyosatga o’zgartirishlar va/yoki
      qo’shimchalar kiritishni Foydalanuvchiga taklif qilishga haqli. Bunday taklifni Foydalanuvchi tomonidan qabul
      qilinishi yangi shartlarda har qanday Departament Servisidan foydalanish bo’yicha konklyudent harakatlar
      hisoblanadi.
      <br><br>
      6.2. Mazkur Siyosat va Foydalanuvchi va Departament orasidagi munosabatlarga nisbatan O’zbekiston Respublikasi
      qonunchiligi va shaxsiy ma’lumotlar xavfsizligini ta’minlash sohasida munosabatlarni tartibga soladigan me’yoriy
      hujjatlar qo’llaniladi.
      <br><br>
      7. Shaxsiy ma’lumotlarga ishlov berish masalasi bo’yicha Foydalanuvchilar bilan o’zaro harakatlar <br><br>
      7.1. Mazkur Kelishuvga nisbatan masalalar yoki shikoyatlar quyidagi elektron manzilga yuborilishi mumkin:
      info@digitaltashkent.uz.
      <br><br>
      7.2. Departament mazkur Siyosatning qoidalariga nisbatan munosabatlarga ega bo’lmagan masalalarga javob
      bermaslikka haqli, bu bunday masalalarini yuborish imkoniyatidan Foydalanuvchilarni mahrum qilmaydi.
    </div>
  </div>


  <!-- add header js -->
  <script src="./js/header.js"></script>

  <!-- add footer js-->
  <script src="./js/footer.js"></script>

  <!-- add map js -->
  <script src="./js/map.js"></script>

  <!-- panel js-->
  <script src="./js/panel.js"></script>


</body>

</html>