
var m = document.getElementsByClassName("main")
 var nem1 = document.getElementById("inp1")
    var nem2 = document.getElementById("inp2")

function game() {

    // alert("abc")

    var s = document.getElementsByClassName("start")

 
    // m[0].style.display ="block";
    // s[0].style.display = "none";

    // console.log(m[0])

     var nem1 = document.getElementById("inp1")
    var nem2 = document.getElementById("inp2")

      var um1 = document.getElementById("uname1")
    var um2 = document.getElementById("uname2")

    var u_1 = document.getElementById("user_1")
    var u_2 = document.getElementById("user_2")

    var epn = document.getElementById("epnum")

   if(nem1.value !="" && nem2.value !="" ){
       

        m[0].style.display ="block";
        s[0].style.display = "none";

        um1.innerHTML=nem1.value+" : "
        um2.innerHTML=nem2.value+" : "

        u_1.innerHTML=nem1.value
        u_2.innerHTML=nem2.value

   }

   else{
        epn.innerHTML="<p> ! Enter players name </p>"


   }

  

    // um1.innerHTML=nem1.value+" : "
    // um2.innerHTML=nem2.value+" : "

    // u_1.innerHTML=nem1.value
    // u_2.innerHTML=nem2.value

    
}





var sum1 = 0;
var sum2 = 0; 



function fun1(){


var b1 = document.getElementById("box1")
var ans = document.getElementById("ansbox")

var u1 = document.getElementById("user1")
var u2 = document.getElementById("user2")


var img1 = document.getElementById("image1")
var img2 = document.getElementById("image2")

var btn1_1 = document.getElementById("btn1")

    // btn1_1.style.transform = "rotate(360deg)"
    // btn1_1.style.transition = "all 5s"


var a1 = Math.trunc(Math.random()*6)
var a2 = Math.trunc(Math.random()*6)


var arr1 = ['1','2','3','4','5','6'];

var arr2 = ['1','2','3','4','5','6'];

    img1.src =("pic"+arr1[a1]+".png") 
    img2.src =("pic"+arr2[a2]+".png")

// console.log(img1.src)

// console.log(arr1[a1])
// console.log(arr2[a2])


        if(arr1[a1] > arr2[a2]){
            ans.innerHTML="<h4>"+nem1.value+" win</h4>"
            sum1 += 1;
            u1.innerHTML=sum1
            
            // console.log(sum1);

            

        }
        else if(arr1[a1] < arr2[a2]){
            ans.innerHTML="<h4>"+nem2.value+" win</h4>"
            sum2 +=1;
            u2.innerHTML=sum2

        }
        else{
            ans.innerHTML="<h4>Match tie</h4>"

        }

   

}


function fun2(){
    var m = document.getElementsByClassName("main")

        // var ansbox1= document.getElementById("ansbox")
        var last1= document.getElementById("last")
        var mod1= document.getElementById("modal1")
        var lnem1 = document.getElementById("lpnem1")
        var lnem2 = document.getElementById("lpnem2")

        var lsc1 = document.getElementById("lscore1")
        var lsc2 = document.getElementById("lscore2")

        var lh = document.getElementById("lh3")



        // var gif1= document.getElementById("gifimg1")
        // var gif2= document.getElementById("gifimg2")

        // m[0].style.display = "none";
        mod1.style.display="flex"
        // last1.style.display = "flex";

        // console.log(ans1)

        // if(sum1!="" && sum2!=""){
        //     ansbox1.style.display = "block";

        // }
        // else{
        //     alert("play game")
        // }

        lnem1.innerHTML=nem1.value
        lnem2.innerHTML=nem2.value

        lsc1.innerHTML=sum1
        lsc2.innerHTML=sum2

        console.log("lh: " +lh)


    if(sum1 > sum2){
            lh.innerHTML=nem1.value+" wins!!!"
        // gif1.style.display="block"
    }
    else if(sum1 < sum2){
        lh.innerHTML=nem2.value+" wins!!!"


    }
    else if(sum1 =="" || sum2==""){
        lh.innerHTML="Match Ends"

    }
    else{
        lh.innerHTML=" Match is tie"

    }

}


function startnew(){
    var s = document.getElementsByClassName("start")
    var mod1= document.getElementById("modal1")

    var u1 = document.getElementById("user1")
    var u2 = document.getElementById("user2")
    
    var ans = document.getElementById("ansbox")



    s[0].style.display = "block";      //start page
    m[0].style.display ="none";      //main page
    mod1.style.display="none"         //last page (modal)

    nem1.value=""                   //start page input 1
    nem2.value=""                   //start page input 2

    sum1=0
    sum2=0


    u1.innerHTML=""                 //score main page 1
    u2.innerHTML=""                 //score main page 2

    ans.innerHTML=""                //result main page

}

function mcloseb(){

     var s = document.getElementsByClassName("start")
    var mod1= document.getElementById("modal1")
    
    var u1 = document.getElementById("user1")
    var u2 = document.getElementById("user2")

    var ans = document.getElementById("ansbox")


    s[0].style.display = "block";      //start page
    m[0].style.display ="none";      //main page
    mod1.style.display="none"         //last page (modal)

    nem1.value=""
    nem2.value=""

    sum1=0
    sum2=0

    u1.innerHTML=""
    u2.innerHTML=""

    ans.innerHTML=""
}