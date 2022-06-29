
import {useState , useEffect} from 'react' 
import './about.css' ;
import React from 'react';

export default function About () {

    const [languages , setLanguages] = useState([])
    const [currLang , setCurrLang] = useState({})


// he , ru , al , ar 

// ynet ,

let about = {

    sites : [
    {name : 'Ynet' , img : '../../assets/sites//ynet.png' , link : 'https://www.ynet.co.il/'} ,
    {name : 'Jansatta' , img : '../../assets/sites/jansatta.png', link : 'https://www.jansatta.com/'} ,
    {name : 'Themoscowtimes' , img : '../../assets/sites/moscow_times.png', link : 'https://www.themoscowtimes.com/'} ,
    {name : 'Panet' , img : '../../assets/sites/panet.png', link : 'https://www.panet.co.il/'} ,
    {name : 'Albayan' , img : '../../assets/sites/albayan.png', link : 'https://www.albayan.ae/'} ,],


    team : {
        he :  [{name : 'אבישי' , img : ''} ,
        {name : 'דמיטרי' , img : ''} ,
        {name : 'אמיר' , img : ''} ,
        {name : 'מתן' , img : ''} ,
        {name : 'עדן' , img : ''} ,
        {name : 'שרונה' , img : ''} ] ,
            

                ru : [{name : 'Авишай' , img : ''} ,
                {name : 'Дмитрий' , img : ''} ,
                {name : 'Амир' , img : ''} ,
                {name : 'Матан' , img : ''} ,
                {name : 'Эден' , img : ''} ,
                {name : 'Шарона' , img : ''} ], 

              en : [{name : 'Avishai' , img : ''} ,
              {name : 'Dmitry' , img : ''} ,
              {name : 'Amir' , img : ''} ,
              {name : 'Matan' , img : ''} ,
              {name : 'Eden' , img : ''} ,
              {name : 'Sarona' , img : ''} ] ,

              ar : [{name : 'سارونا' , img : ''} ,
              {name : 'عدن' , img : ''} ,
              {name : 'ماتان' , img : ''} ,
              {name : 'أمير' , img : ''} ,
              {name : 'ديمتري' , img : ''} ,
              {name : 'أفيشاي' , img : ''} ] 
            


    }  ,
    intro :{ 
        en : [
            "200 years ago, the biggest news of the day was, the visit of some new person to the village, Or new royal order.  A trip between counties could take months… years." ,
            "However, these days,  the world is a “small spot” in an elephant's packet, where you can Jump in by a single click ….touch … call, And cross continents in a number of hours.  So, it is good ..  , necessary!To be up to date, and get  the ‘hottest news cakes” of our “small spot ”" ,
            "The Israeli community is very diverse and speaks many languages We discovered some need for community and we delivered this application" ,
            "The application display for users, a number of the latest news  from the world's news Websites from different countries and languages The application allows to users read the news in different languages And all ways to be up to date, and knows what app around the world" ,
            "Don't forget to take a look, before you take your next fly "] ,

        ru : ["200 лет назад самой большой новостью дня был визит какого-то нового человека в деревню, или новый королевский орден.  Поездка между округами может занять месяцы... годы." ,
        "Тем не менее, в наши дни мир представляет собой «маленькое пятно» в пакете слона, куда вы можете прыгнуть одним щелчком мыши ... касанием ... звонком, и пересекайте континенты за несколько часов.  Так что, это хорошо..  необходимый! Быть в курсе событий и получать «самые горячие новостные торты» нашего «маленького пятна»." ,
        "Израильское сообщество очень разнообразно и говорит на многих языках Мы обнаружили некоторую потребность в сообществе, и мы предоставили это приложение" ,
        "Дисплей приложения для пользователей, ряд последних новостей из мировых новостей Сайты из разных стран и языков Приложение позволяет пользователям читать новости на разных языках И всеми способами быть в курсе, и знает, какое приложение по всему миру " ,
        "Не забудьте взглянуть, прежде чем лететь следующим рейсом "],

        he : ["לפני 200 שנה, החדשות הגדולות ביותר של היום היו, ביקורו של אדם חדש כלשהו בכפר, או מסדר מלכותי חדש.  טיול בין מחוזות יכול להימשך חודשים... שנים." ,
        "עם זאת, בימים אלה, העולם הוא 'נקודה קטנה' בחבילה של פיל, שבו אתה יכול לקפוץ פנימה על ידי קליק אחד ....touch ... להתקשר, ולחצות יבשות תוך מספר שעות. אז זה טוב .. הכרחי! כדי להיות מעודכן, ולקבל את 'עוגות החדשות החמות ביותר' של המקום הקטן שלנו." ,
        "הקהילה הישראלית מגוונת מאוד ודוברת שפות רבות גילינו צורך מסוים בקהילה והעברנו את היישום הזה" , 
        "תצוגת היישום למשתמשים, מספר חדשות אחרונות מאתרי החדשות בעולם ממדינות ושפות שונות האפליקציה מאפשרת למשתמשים לקרוא את החדשות בשפות שונות וכל הדרכים להיות מעודכנים, ויודעת איזו אפליקציה ברחבי העולם " , 
        "אל תשכחו להעיף מבט, לפני שאתם לוקחים את הזבוב הבא שלכם "] ,
        ar :[        "قبل 200 عام ، كانت أكبر أخبار اليوم ، زيارة شخص جديد إلى القرية ، أو أمر ملكي جديد.  قد تستغرق الرحلة بين المقاطعات شهورا ... اعوام." ,
        "ومع ذلك ، في هذه الأيام ، العالم هو 'بقعة صغيرة' في حزمة الفيل ، حيث يمكنك القفز بنقرة واحدة ....thuch ... اتصل ، وعبر القارات في عدد من الساعات. لذلك ، إنه أمر جيد .. ضروري! لتكون على اطلاع دائم ، والحصول على 'أهم كعك الأخبار' من 'بقعة صغيرة' لدينا ."  ,
        "المجتمع الإسرائيلي متنوع جدا ويتحدث العديد من اللغات اكتشفنا بعض الحاجة للمجتمع وقدمنا هذا التطبيق" , 
        "يعرض التطبيق للمستخدمين، عددا من آخر الأخبار من المواقع الإخبارية العالمية من مختلف الدول واللغات ويتيح التطبيق للمستخدمين قراءة الأخبار بلغات مختلفة وجميع الطرق لتكون محدثة، ويعرف ما التطبيق حول العالم " , 
        "لا تنس إلقاء نظرة ، قبل أن تأخذ طائرتك التالية "
    ] }
   

        
}

useEffect(() => {
    
    
  
}, [])



const displayInfo = (info)=>{
    let data = info.map((item , i) => <p key={i}>{item}</p>)
    return data ;
}

const displaySites= (sites)=>{

    let data = sites.map(item =>{
        return       <div  key={item.name}>
            <a href={item.link}>
                <div className= {` img ${item.name}`}></div>
            </a>
        </div>

    })
    return data ;
}

const displayTeam = (team)=>{
    let data = team.map((item , i) => <p key={i}>{item.name}</p>)
    return data ;
}


    return(
    <div>

        <div>
            {displayInfo(about.intro.en)}
        </div>

          <div>
            {displayInfo(about.intro.ar)}
        </div>
           <div>
            {displayInfo(about.intro.ru)}
        </div>

    

       

        <div className='sites'>
            {displaySites(about.sites)}
        </div>

    

        <div className='team'>
            {displayTeam(about.team.en)}
        </div>

        <div>technology</div>
    </div>
    )
}

