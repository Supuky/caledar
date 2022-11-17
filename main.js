const inputDate = document.querySelector('#inputDate');

inputDate.addEventListener('change', (event) => {
    const monthDays = document.querySelector('.days');
    // console.log(event.target.value);
    const date = new Date(event.currentTarget.value);
    // console.log(date);
    const year = date.getFullYear();
    // console.log(year);
    const month = date.getMonth();
    // console.log(month);
    //inputで押した日
    const today = date.getDate();
    // console.log(today);

    //先月の最後の日
    const lastDay = new Date(date.getFullYear(),
    date.getMonth()+1, 0).getDate();
    // console.log(lastDay);
    
    //今月の最後の日
    const prevLastDay = new Date(date.getFullYear(),
    date.getMonth(), 0).getDate();
    // console.log(prevLastDay);

    //   スタートの日index 6/1=wed = 3   (0<index<6)
    const firstDayIndex = new Date(date.getFullYear(),
    date.getMonth(), 0).getDay();
    const prevDays = firstDayIndex + 1;
       
    //   最後の日のインデックス (0<index<6)
    const lastDayIndex = new Date(date.getFullYear(),
    date.getMonth()+1, 0).getDay();
    // console.log(lastDayIndex);

    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ];

    //htmlのh1タグに代入 inputで受け取った月をmonths[]の中に！！
    document.querySelector('.date h1').innerHTML = months[month];

    document.querySelector('.date p').innerHTML = `${year}年`;

    //日数
    let days = "";
    
    //先月の日付
    for(let x = prevDays; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    };
    
    // 今月の日付
    for(let i = 1; i <= lastDay; i++) {
        //inputでもらった値にクラスtodayをつける
        if(i === today && date.getMonth() === month) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    };
    
    //来月の日付
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

})

// //現在の日付時刻を取得
// const date = new Date();

// const renderCalendar = () => {
//     date.setDate(1);
    
//     const monthDays = document.querySelector('.days');
    
//     //今月の最後の日
//     const lastDay = new Date(date.getFullYear(),
//     date.getMonth()+1, 0).getDate();
    
//     //今月の最後の日
//     const prevLastDay = new Date(date.getFullYear(),
//     date.getMonth(), 0).getDate();
    
    
//     //スタートの日index 6/1=wed = 3   (0<index<6)
//     const firstDayIndex = date.getDay();
       
      //最後の日のインデックス (0<index<6)
//     const lastDayIndex = new Date(date.getFullYear(),
//     date.getMonth()+1, 0).getDay();
    
//     const nextDays = 7 - lastDayIndex - 1;
    
//     const months = [
//         "1月",
//         "2月",
//         "3月",
//         "4月",
//         "5月",
//         "6月",
//         "7月",
//         "8月",
//         "9月",
//         "10月",
//         "11月",
//         "12月",
//     ];
    
//     //htmlのh1タグに代入 inputで受け取った月をmonths[]の中に！！
//     document.querySelector('.date h1').innerHTML = months[date.getMonth()];

//     document.querySelector('.date p').innerHTML = `${date.getFullYear()}年`;
    
//     //日数
//     let days = "";
    
//     //先月の日付
//     for(let x = firstDayIndex; x > 0; x--) {
//         days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
//     };
    
//     // 今月の日付
//     for(let i = 1; i <= lastDay; i++) {
//         //inputでもらった値にクラスtodayをつける
//         if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
//             days += `<div class="today">${i}</div>`;
//         } else {
//             days += `<div>${i}</div>`;
//         }
//     };
    
//     //来月の日付
//     for(let j = 1; j <= nextDays; j++) {
//         days += `<div class="next-date">${j}</div>`;
//         monthDays.innerHTML = days;
//     }

// }


// document.querySelector('.prev').addEventListener('click', function() {
//     date.setMonth(date.getMonth() - 1);
//     renderCalendar()
// });
// document.querySelector('.next').addEventListener('click', function() {
//     date.setMonth(date.getMonth() + 1);
//     renderCalendar()
// });

// renderCalendar()