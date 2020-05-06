//banner
    {
        let prev=document.querySelector(".prev");
        let next=document.querySelector(".next");
        let inner=document.querySelector(".inner");
        let banner=document.querySelector(".banner");
        let now=1;

        function move(){
            inner.style.transition="all 1s";
            now++;
            inner.style.marginLeft=now*-100+"vw";
        }
        let st=setInterval(move,2000);
        inner.addEventListener("transitionend",function(){
            flag=true;
            if(now===3){
                inner.style.transition="none";
                inner.style.marginLeft="-100vw";
                now=1;
            }
            if(now===0){
                inner.style.transition="none";
                inner.style.marginLeft="-200vw";
                now=2;
            }
        })
        banner.onmouseenter=function () {
            clearInterval(st);
        }
        banner.onmouseleave=function () {
            st=setInterval(move,2000);
        }
        window.onblur=function () {
            clearInterval(st);
        }
        window.onfocus=function () {
            st=setInterval(move,3000);
        }
        let flag=true;
        next.onclick=function(){
            if(flag){
                flag=false;
                move();
            }
        }
        prev.onclick=function () {
            if(flag){
                flag=false;
                now-=2;
                move();
            }
        }
    }



{
    let nav=document.querySelector(".nav");
    let navList=document.querySelectorAll(".navList>li>a");
    let backTop=document.querySelector(".backTop");
    let p=document.querySelector(".flowerContent>h3");
    let f=document.querySelectorAll("flowerItem:nth-of-type(even)");
    window.onscroll=function(){
        let a=document.documentElement.scrollTop;
        let b=document.documentElement.scrollTop;
        let re=document.documentElement.scrollTop;
        let target=p.offsetTop-window.innerHeight;
        //let flowerItem=document.querySelectorAll(".flowerItem");
        if (re > target) {
            p.classList.add("bounceInLeft");
        }
        if(b>window.innerHeight){
            backTop.style.display="block";
        }else{
            backTop.style.display="none";
        }
        navList.forEach(function(ele){
            if(a>0){
                ele.classList.add("active");
            }else{
                ele.classList.remove("active");
            }
        })
        if(a>0){
            nav.classList.add("active");
        }else{
            nav.classList.remove("active");
        }

    }
//回到顶部
    {
        backTop.onclick=function () {
            let l=document.documentElement.scrollTop;
            let s=25*l/500;
            let st=setInterval(function(){
                l-=s;
                if(l<=0){
                    l=0;
                    clearInterval(st);
                }
                document.documentElement.scrollTop=l;
            },25)
        }
    }
}



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

