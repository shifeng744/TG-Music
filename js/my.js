//滚动条的 滚动距离
function scroll() {
    if (document.body.scrollTop){
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
    else{
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }
}

//动态创建小圆点
var page=document.querySelectorAll(".main");
var oUl=document.querySelector(".Dot ul")
for(i=0;i<page.length;i++){
	var oLi=document.createElement("li");
	oUl.appendChild(oLi);
}
var aLi=document.querySelectorAll(".Dot ul li");
var timer=null,speed=0,iTarget=0,key=0;
var arr=["pg1-left 2s ease-out"]
for(var i=0;i<aLi.length;i++){
	aLi[i].onmouseover=function(){
		
		//console.log(1)
	}
	aLi[0].className="cur"
}


  init();


    //初始化
    function init(){
        for(var i=0; i<aLi.length; i++){
            bindEvnet(i); //点击事件
            
        }
    }

    //点击按钮
    function bindEvnet(index){
        aLi[index].id=index;
        aLi[index].onclick=function(){
            //要找到目标点，动谁的属性
            iTarget=page[this.id].offsetTop;
            for(var i=0;i<aLi.length;i++){
            	aLi[i].className=""
            }
            aLi[this.id].className="cur";
           
            key=this.id; //核心代码
            sw(key);
            buff(iTarget,key);
        }
    }

    //缓冲运动
    function buff(iTarget,key) {
        clearInterval(timer);
        var scrollTop=0;
        timer = setInterval(function () {
            scrollTop=scroll().top;
            //动谁的
            speed = (iTarget - scrollTop) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            window.scrollTo(0,scrollTop + speed);
			
            if (speed == 0) {
                clearInterval(timer)
                
               	
               	
              
                
            }
        }, 30);
        
    };

    var timer1=null;
     document.onmousewheel=function (ev) {
         clearTimeout(timer1);
         timer1=setTimeout(function(){
             var oEvent=ev || event;
             if(oEvent.wheelDelta > 0){
                //console.log("向上");
                 key--;
                 if(key<=0){
                 	key=0;
                 }
                 iTarget=window.innerHeight * key;  //目标点

             }else{
                 key++;
                 if(key>=page.length){
                 	key=page.length-1;
                 }
                 iTarget=window.innerHeight * key;  //目标点
             }
             for(var i=0;i<aLi.length;i++){
					if(iTarget>page[i].offsetTop-50){
						for(var j=0;j<aLi.length;j++){
							aLi[j].className=""
						}
						aLi[i].className="cur";
						
					}
				}
            sw(key);
             buff(iTarget)

         },100);
		

     //console.log(oEvent.wheelDelta)
     }
    
	function sw(key){
		for(var i=0;i<page.length;i++){
			if(key==1){
				page[1].setAttribute("class","page02 main page switch")
			}
			else if(key==2)
			{
				page[2].setAttribute("class","page03 main page switch")
				
			}
			else if(key==3)
			{
				page[3].setAttribute("class","page04 main page switch")
				
			}
			else if(key==4)
			{
				page[4].setAttribute("class","page05 main page switch")
				
			}
    }
	}
    
