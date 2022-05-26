let snake=document.querySelector('.snake')

let snake2=document.querySelector('#border')
window.addEventListener('keyup',test);
let leftX=0
let topX=0



function test(e){
    
   
    if(e.keyCode==39){
        setInterval(()=>{
            leftX++
            snake.style.left=`${leftX}px`
            // console.log(leftX);
            if(leftX>550){
             leftX=0
            }
           
               
        },1)

   
  
    }



    else if(e.keyCode==37){
  
        let set2=setInterval(()=>{
            leftX--
            snake.style.left=`${leftX}px`
            if(leftX<0){
                leftX=550
               }
        },1)
       
      
            }



            if(e.keyCode==40){
              
                let set3=  setInterval(()=>{
                    topX++
                    snake.style.top=`${topX}px`
                    if(topX>550){
                        topX=0
                       }
                },1)
                    }



                    if(e.keyCode==38){
                       
                        let set4=  setInterval(()=>{
                            topX--
                            snake.style.top=`${topX}px`
                            if(topX<0){
                                topX=550
                               }
                        },1)
                            }
}

setInterval(()=>{
    let random=Math.floor(Math.random()*540)
    let random1=Math.floor(Math.random()*500)
    // console.log(random1);
    // console.log(random);
    // console.log(random1);
    const para = document.createElement("div");
   
   para.classList.add('active')
   para.style.top=`${random}px`
   para.style.left=`${random1}px`

snake2.appendChild(para);
let divsay=document.querySelectorAll('.active')


if(divsay.length==2){
    const divsay2=document.querySelector('.active:nth-child(1)')
//  console.log('salam');
 divsay2.remove();
 
    //     console.log(leftX);
    // console.log(topX);   
}
setInterval(()=>{
    
    // console.log(leftX);
    if( random==topX-50 && random1==leftX-50){
        console.log('berbaredir');
       
    }
},10)
},10000)



