
function myfun() {
    let nav=document.querySelector(".nav");
    let navList=document.querySelectorAll(".navList>item>a");

   // let backTop=document.querySelector(".backTop");
    window.onscroll=function() {
        let a = document.documentElement.scrollTop;
      //  let b = document.documentElement.scrollTop;
        navList.forEach(function (ele) {
            if (a > 0) {
                ele.classList.add("item-actived");
            } else {
                ele.classList.remove("item-actived");
            }
        })
        if (a > 0) {
            nav.classList.add("actived");
        } else {
            nav.classList.remove("actived");
        }
    }

}

function comeIn() {
    var about = document.getElementsByClassName('about');
    var down = document.getElementsByClassName('dropdown');
    about.onmouseover = function() {
        window.console.log('success')
        down.style.display = 'block';
    };
    about.onmouseout = function() {
        down.style.display = 'none';
    };
}


export { //很关键
    myfun,
    comeIn
}
//回到顶部
//     {
//         backTop.onclick=function () {
//             let l=document.documentElement.scrollTop;
//             let s=25*l/500;
//             let st=setInterval(function(){
//                 l-=s;
//                 if(l<=0){
//                     l=0;
//                     clearInterval(st);
//                 }
//                 document.documentElement.scrollTop=l;
//             },25)
//         }
//     }




//轮播

//进入网页动态
{

    /*let flowerItemRight=document.querySelectorAll(".flowerItem:nth-child(even)");
    let flowerItemLeft=document.querySelectorAll(".flowerList:nth-child(odd)");
    window.onscroll=function(){
        let re1=document.documentElement.scrollTop;
        let target1=flowerItemLeft.offsetTop-window.innerHeight;
        if(re1>target1){
             flowerItemRight.className.add("bounceInLeft");
             flowerItemLeft.className.add("bounceInLeft");
        }}*/
}

