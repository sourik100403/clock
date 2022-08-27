let changeTheme = document.querySelector('#changeTheme');

// changeTheme.addEventListener('click',(e)=>{    
    
//     console.log('click');
//     let clockContainer = document.getElementById('clockContainer');

//      clockContainer.style.background = `url('watchface2.png')`;
         
//     clockContainer.style.backgroundSize = '100%';
    
// })

changeTheme.addEventListener('click',()=>{
    location.reload();
})





setInterval(() => {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    seconds = date.getSeconds();
    // console.log(hour,minute,seconds);

    hrotation = 30* hour + minute/2 + seconds/120 ;
    mrotation = 6*minute + seconds/10 ;
    srotation = 6*seconds;

    // console.log(hrotation,mrotation,srotation)

    clockHour.style.transform = `rotate(${hrotation}deg)`;
    clockMinute.style.transform = `rotate(${mrotation}deg)`;
    clockSecond.style.transform = `rotate(${srotation}deg)`;



}, 1000);



////logic

// for hours
// 12 hr = 360deg
// 1 hr = 30 deg
// h hr = 30h
// it will also rotate due to minutes and seconds 
// due to minutes
// 60 min = 30 deg // 60 min me 1 ghanta aur 1 ghanta ke liye 30deg rotation to iske hisab se 1 min ke liye 30/60 deg rotation.
// 1min = 30/60 or 1/2 
// m min = m/2

// due to seconds
// 3600 sec = 30deg // 1hr = 3600s
// 1 sec = 30/3600 deg or 1/120//
// s sec = s/120;




// //for minutes
// 60 min = 360 deg
// 1 min = 6 deg
// m min = 6m deg
// due to seconds 
// 1 min = 6 deg 
// 60 s = 6deg
// 1s = 6/60 or 1/10 deg
// s s = s/10deg


// //for seconds
// 60 sec = 360deg
// 1 sec = 6deg
// s sec = 6s deg 

