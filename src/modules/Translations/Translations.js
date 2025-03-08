import i18next from "i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .use(i18nextBrowserLanguagedetector)
  .init({
    fallbackLng: "Uz",
    resources: {
      Uz: {
        translation: {
          home: "Ma'lumotlar",
          about: "Biz xaqimizda",
          korxona: "Korxonalar",
          news: "Yangiliklar",
          faq: "Afzalliklarimiz",
          contact: "Aloqa",
          allelement: "Hamma narsada a'lo",
          btnProject: "Bizning loyihalarimiz",
          contactBtn: "Bog'lanish",
          title: "Bizning xizmatlarimiz",
          text: "Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz mumkin",
          text2: "Hujjatlarni rasmiylashtirish",
          text3: "Ta`mirlash tuzatish xizmati",
          text4: "Professionallar jamoasi",
          ourCompany: "Bizning kompaniyada",
          employees: "Xodimlar soni",
          objects: "Ob'ektlar",
          special: "Maxsus jihozlar",
          market: "bozorda 14 yil",
          homes: "Sizning orzuingizdagi uy",
          ourProjects: "Bizning loyihalarimiz ",
          ProjectsText:
            "Bu keng ko'lamli ijtimoiy ahamiyatga ega loyiha. Toshkentdagi madaniy-ko'ngilochar klaster yangi diqqatga sazovor joylardan biridir.",
          ProjectsText2:
            "O'zbekiston aholisiga qulaylik yaratish maqsadida yaratilgan ko'p funksiyali turar-joy majmuasi.",
          ProjectsText3: "Poytaxt markazidagi muhtasham turar-joy massivi.",
          ProjectsText4:
            "Fonon - O'zbekistonda 2020 yilda italyan zavodlari negizida qurilgan zargarlik buyumlari ishlab chiqarish zavodi. Fonon - Markaziy Osiyoda Yevropa va Sharq uslubida qimmatbaho metallardan zargarlik buyumlari ishlab chiqaradigan yagona yirik korxona",
          ProjectsText5:
            "Tashkent City xalqaro biznes markazida joylashgan xalqaro bolalar bog'chasi va maktabi.",
          ProjectsText6:
            "Bu xalqaro darajada bilim beradigan ta'lim muassasasi",
          Allnews: "Barcha yangiliklarimiz",
          BtnText: "Batafsil bilish",
          NewsTitle: "Qurilish loyihasi menejeri kim?",
          NewsTitle2: "Barchani kelayotgan 2024 yil bilan tabriklayman!",
          NewsTitle3: "Manzil",
          NewsTitle4:
            "Biz sizni Discover Invest ko'p funksiyali ob'ektlari bilan tanishtirishda davom etamiz.",
          NewsText:
            "Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib topshirilgan qurilish ob'ektini muvaffaqiyatli amalga oshirish uchun mas'uldir. U rejalashtirish bosqichidan va loyiha hujjatlarini tasdiqlashdan tortib, ishga tushirishgacha bo'lgan butun jarayonni boshqaradi. binoning, va ba'zan ham loyihadan keyingi yordamni amalga oshiradi. Eng so'nggi",
          NewsText2:
            "Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin ham qulaylik muhitini yaratadi va qulay navigatsiya tizimi sizga kerakli qavatga osongina chiqishga yoki hududga chiqishga yordam beradi.",
          NewsText3:
            "Transport infratuzilmasi shaharning istalgan nuqtasiga osongina ko'chib o'tishga imkon beradi: siz faqat kerakli va kerakli yo'nalishni tanlashingiz kerak.",
          NewsText4:
            "Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p funksiyali ob'ektlari bilan tanishtirishda davom etamiz. Ulardan biri Toshkent shahrining Yangixoyat tumanida barpo etilgan 'Yangi Choshtepa turar-joy majmuasidir. Qurilishning umumiy maydoni 12 gektarni tashkil etadi. Shu kungacha 29 ta uy-joy qurildi. qurilgan.",
          BuildText:
            "Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va infratuzilmani qurish va ulardan foydalanish bilan bog'liq ekologik jihatlar uchun to'liq javobgarlikni o'z zimmasiga oladi.",
          ContactText: "Savol, taklif va murojaatlar bormi?",
          name: "Ismingiz",
          PhoneNumber: "Telefon raqamingiz",
          Massage: "Sizning xabaringiz...",
          FormBtn: "Yuborish",
          sending: "Murojaatingiz qabul qilindi!",
          Subscribe: "Ijtimoiy tarmoqlarimizga obuna bo'ling",
          Company: "Kompaniyamiz",
          ImgText:
            "Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz: kompaniya binolar va infratuzilmani qurish va ulardan foydalanish bilan bog'liq ekologik jihatlar uchun to'liq javobgarlikni o'z zimmasiga oladi.",
          AboutName: "ATAEV BAHODIR BUILD haqida",
        },
      },
      Ru: {
        translation: {
          home: "Информация",
          about: "Насчет нас",
          korxona: "Предприятия",
          faq: "Наши преимущества",
          news: "Новости",
          contact: "Коммуникация",
          allelement: "Совершенство во всём",
          btnProject: "Наши проекты",
          contactBtn: "Связь",
          title: "Наши услуги",
          text: "Вы можете бесплатно получить информацию у специалистов нашей компании",
          text2: "Положительные отзывы клиентов",
          text3: "Гарантия на все работы",
          text4: "Команда профессионалов",
          ourCompany: "Наша компания",
          employees: "Количество сотрудников",
          objects: "Объекты",
          special: "Спец.техника",
          market: "2 года на рынке",
          homes: "Дом вашей мечты",
          ourProjects: "Наши проекты ",
          ProjectsText:
            "Это масштабный социально-значимый проект. Культурно-развлекательный кластер в Ташкенте является одной из новых достопримечательностей.",
          ProjectsText2:
            "Многофункциональный жилой комплекс, созданный для обеспечения комфорта жителям Узбекистана.",
          ProjectsText3: "Грандиозный жилой квартал в сердце столицы.",
          ProjectsText4:
            "Fonon – завод по производству ювелирных изделий в Узбекистане построенный на основе итальянских в 2020 году. Fonon является единственным крупным предприятием в Средней Азии, производящим украшения из драгоценных металлов в европейском и восточном стиле",
          ProjectsText5:
            "Международный детский сад и школа расположенный в международном деловом центре Tashkent City.",
          ProjectsText6:
            "Это образовательное учреждение, которое даёт знание на международном уровне.",
          Allnews: "Все наши новости",
          BtnText: "Учить больше",
          NewsTitle: "Кто такой менеджер строительного проекта?",
          NewsTitle2: "Холлы",
          NewsTitle3: "Месторасположение",
          NewsTitle4:
            "Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest.",
          NewsText:
            "В компании Discover Invest существует несколько менеджеров строительного проекта. Это – специалист, отвечающий за успешную реализацию вверенного ему участка строительства. Он управляет всем процессом, от этапа планирования и согласования проектной документации до ввода здания в эксплуатацию, а иногда выполняет и послепроектное сопровождение. Последние",
          NewsText2:
            "Утонченный интерьерный дизайн холлов создаст атмосферу уюта еще до входа в квартиру, а удобная система навигации поможет легко добраться до нужного вам этажа или выхода на территорию",
          NewsText3:
            "Транспортная инфраструктура позволяет с легкостью перемещаться в любую точку города: Вам остается только выбрать желаемое и нужное направление.",
          NewsText4:
            "Мы продолжаем знакомить Вас с многофункциональными объектами Discover Invest. Один из них жилой комплекс Янги Чоштепа построенный в Янгихаятском районе города Ташкента. Общая площадь постройки составляет 12 га. На сегодняшний день построены 29 домов.",
          BuildText:
            "Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее. Мы заботимся об окружающей среде: компания берет на себя полную ответственность за экологические аспекты, связанные со строительством и эксплуатацией зданий и инфраструктуры",
          ContactText: "Есть вопросы, предложения и пожелания?",
          name: "Твое имя",
          PhoneNumber: "Ваш номер телефона",
          Massage: "Ваше сообщение...",
          FormBtn: "Отправка",
          sending: "Ваша заявка принята!",
          Subscribe: "Подпишитесь на наши социальные сети",
          Company: "Наша компания",
          ImgText:
            "Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее. Мы заботимся об окружающей среде: компания берет на себя полную ответственность за экологические аспекты, связанные со строительством и эксплуатацией зданий и инфраструктуры",
          AboutName: "Об АТАЕВЕ БАХОДИРЕ",
        },
      },
      En: {
        translation: {
          home: "Information",
          about: "About Us",
          korxona: "Enterprises",
          faq: "Our advantages",
          news: "News",
          contact: "Communication",
          allelement: "Excellence in everything",
          btnProject: "Our Projects",
          contactBtn: "Connection",
          title: "Our services",
          text: "You can get free information from our company's specialists",
          text2: "Documents clearance",
          text3: "Repair correction service",
          text4: "Team of professionals",
          ourCompany: "Our company",
          employees: "Number of employees",
          objects: "Objects",
          special: "Special equipment",
          market: "14 years on the market",
          homes: "Your dream home",
          ourProjects: "Our Projects ",
          ProjectsText:
            "This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.",
          ProjectsText2:
            "Multifunctional residential complex created to provide comfort to the residents of Uzbekistan.",
          ProjectsText3:
            "A grandiose residential area in the heart of the capital.",
          ProjectsText4:
            "Fonon is a jewelry production plant in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry from precious metals in European and Oriental styles,",
          ProjectsText5:
            "International kindergarten and school located in the international business center of Tashkent City.",
          ProjectsText6:
            "This is an educational institution that provides knowledge at an international level",
          Allnews: "All our news",
          BtnText: "Learn More",
          NewsTitle: "Who is a construction project manager?",
          NewsTitle2: "Congratulations to everyone on the upcoming 2024!",
          NewsTitle3: "Location",
          NewsTitle4:
            "We continue to introduce you to the multifunctional objects of Discover Invest.",
          NewsText:
            "The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest",
          NewsText2:
            "The sophisticated interior design of the halls will create an atmosphere of comfort even before entering the apartment, and a convenient navigation system will help you easily get to the floor you need or exit to the territory",
          NewsText3:
            "The transport infrastructure allows you to easily move to anywhere in the city: you just have to choose the desired and desired direction.",
          NewsText4:
            "We continue to introduce you to the multifunctional objects of Discover Invest. One of them is the Yangi Choshtepa residential complex built in the Yangihayat district of Tashkent. The total construction area is 12 hectares. To date, 29 houses have been built.",
          BuildText:
            "We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for environmental aspects associated with the construction and operation of buildings and infrastructure",
          ContactText: "Do you have any questions, suggestions or requests?",
          name: "Your name",
          PhoneNumber: "Your phone number",
          Massage: "Your message...",
          FormBtn: "Sending",
          sending: "Your application has been accepted!",
          Subscribe: "Subscribe to our social networks",
          Company: "Our company",
          ImgText:
            "We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for environmental aspects associated with the construction and operation of buildings and infrastructure",
          AboutName: "About ATAEV BAHODIR BUILD",
        },
      },
    },
  });
