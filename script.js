let snake=document.querySelector('.snake')

let snake2=document.querySelector('#border');

window.addEventListener('keydown',test2)
let leftX=0
let topX=0
let k=10
let y=10



function test2(e){
  
   
    if(e.keyCode==39){
        snake.classList.add('active1')
            snake.classList.remove('active2')
            snake.classList.remove('active3')
            snake.classList.remove('active4')
            leftX+=y
            snake.style.left=`${leftX}px`
          
            if(leftX>540){
             leftX=0
            }
           
               
       
   
  
    }

    if(e.keyCode==37){
      
        snake.classList.remove('active1')
        snake.classList.add('active2')
        snake.classList.remove('active3')
        snake.classList.remove('active4')
        leftX-=y
        snake.style.left=`${leftX}px`
        
        if(leftX<0){
            leftX=540
           }

   
  
        }



        if(e.keyCode==40){
            snake.classList.remove('active2')
            snake.classList.remove('active1')
            snake.classList.remove('active3')
            snake.classList.add('active4')
                topX+=k
                snake.style.top=`${topX}px`
                if(topX>540){
                    topX=0
                   }
          
                }



                if(e.keyCode==38){
                    snake.classList.remove('active2')
                    snake.classList.remove('active1')
                    snake.classList.add('active3')
                    snake.classList.remove('active4')
                    
                  
                        topX-=k
                        snake.style.top=`${topX}px`
                        if(topX<0){
                            topX=540
                           }
                   
                        }

   
}

setInterval(test,10000)


function test(){
    let random=Math.floor(Math.random()*540)
    let random1=Math.floor(Math.random()*500)
    
    const para = document.createElement("div");
   
   para.classList.add('active')
   para.style.top=`${random}px`
   para.style.left=`${random1}px`

snake2.appendChild(para);
let divsay=document.querySelectorAll('.active')


if(divsay.length==2){
    const divsay2=document.querySelector('.active:nth-child(1)')

 divsay2.remove();
}

setInterval(yoxla,0.5)

function yoxla(){
  

  

}



}




