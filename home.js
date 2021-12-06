<<<<<<< HEAD
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter>4 ){
        counter = 1;
    }
},5000);


// -------------------------------------------CONTACT US-----------------------------------------
var cl1 = document.getElementById('csvfb');
var cl2 = document.getElementById('pdfb');
var cl3 = document.getElementById('tracker-div');
var cl4 = document.getElementById('others');
var hl = document.getElementById('highlight');

document.getElementById('LK1').addEventListener( 'click',
    function(){
        cl1.style.left = '0' ;
        cl2.style.left = '0' ;
        cl3.style.left = '0' ;
        cl4.style.left = '0' ;
        // hl.style.left= '12.2vw';
        document.getElementById('lk1').classList.add('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK2').addEventListener( 'click',
    function(){
        cl1.style.left = '-100%' ;
        cl2.style.left = '-100%' ;
        cl3.style.left = '-100%' ;
        cl4.style.left = '-100%' ;
        // hl.style.left= '36.9vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.add('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK3').addEventListener( 'click',
    function(){
        cl1.style.left = '-200%' ;
        cl2.style.left = '-200%' ;
        cl3.style.left = '-200%' ;
        cl4.style.left = '-200%' ;
        // hl.style.left= '48vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.add('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK4').addEventListener( 'click',
    function(){
        cl1.style.left = '-300%' ;
        cl2.style.left = '-300%' ;
        cl3.style.left = '-300%' ;
        cl4.style.left = '-300%' ;
        // hl.style.left= '67vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.add('hilight');
    }
)

// -------------------------------------------------contact----------------------------------------------


function move(){
    var select = document.getElementById('contactdropdown');
    var text = select.options[select.selectedIndex].value;
    var cover = document.getElementById('cover');

    var cl1 = document.getElementById('csvfb');
    var cl2 = document.getElementById('pdfb');
    var cl3 = document.getElementById('tracker-div');
    var cl4 = document.getElementById('others');
if(text == 'svcfeedback'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)


        cl1.style.left = '0' ;
        cl2.style.left = '0' ;
        cl3.style.left = '0' ;
        cl4.style.left = '0' ;
        // hl.style.left= '12.2vw';
        document.getElementById('lk1').classList.add('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');

}else if (text == 'prdfeedback'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-100%' ;
    cl2.style.left = '-100%' ;
    cl3.style.left = '-100%' ;
    cl4.style.left = '-100%' ;
    // hl.style.left= '36.9vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.add('hilight');
    document.getElementById('lk3').classList.remove('hilight');
    document.getElementById('lk4').classList.remove('hilight');

}else if (text == 'track'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-200%' ;
    cl2.style.left = '-200%' ;
    cl3.style.left = '-200%' ;
    cl4.style.left = '-200%' ;
    // hl.style.left= '48vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.remove('hilight');
    document.getElementById('lk3').classList.add('hilight');
    document.getElementById('lk4').classList.remove('hilight');
}else {
    cover.classList.add('dispr'); 

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-300%' ;
    cl2.style.left = '-300%' ;
    cl3.style.left = '-300%' ;
    cl4.style.left = '-300%' ;
    // hl.style.left= '67vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.remove('hilight');
    document.getElementById('lk3').classList.remove('hilight');
    document.getElementById('lk4').classList.add('hilight');
}
}

var navlogin =document.getElementById('rightnav');
var loginpagereal =document.getElementById('loginn');
var navcontact = document.getElementById('navcontact');



navlogin.addEventListener('click', function (){
    loginpagereal.style.zIndex= 20;

});

navcontact.addEventListener('click', function (){
    loginpagereal.style.zIndex= -2;
    document.getElementById('register').style.zIndex='-3';
    cover.style.zIndex=13;

});

function backremove(e){
    var parentparent= e.parentNode.parentNode;
    parentparent.style.visibility='hidden';
    parentparent.style.zIndex='-3';
    cover.style.zIndex=20;
    cover.style.opacity= 1;

}

var trackbtn = document.getElementById('trackbtn');
var trackerdiv = document.getElementById('trackproduct');
var forgettrackerbtn = document.getElementById('forgettrackerbtn');
var forgettrackeriddiv = document.getElementById('forgettrackeriddiv');

trackbtn.addEventListener('click', function(){
    trackerdiv.style.zIndex = 30;
    trackerdiv.style.visibility= 'visible';
});

forgettrackerbtn.addEventListener('click', function(){
    forgettrackeriddiv.style.zIndex= 30;
    forgettrackeriddiv.style.visibility= 'visible';
    
});

function forgetpass(){
    forgettrackeriddiv.style.zIndex= 30;
    forgettrackeriddiv.style.visibility= 'visible';
}

document.getElementById('registerinloginpage').addEventListener(
    'click', function(){
        document.getElementById('register').style.zIndex='13';
        loginpagereal.style.zIndex='-2';
    }
=======
var counter =1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter>4 ){
        counter = 1;
    }
},5000);


// -------------------------------------------CONTACT US-----------------------------------------
var cl1 = document.getElementById('csvfb');
var cl2 = document.getElementById('pdfb');
var cl3 = document.getElementById('tracker-div');
var cl4 = document.getElementById('others');
var hl = document.getElementById('highlight');

document.getElementById('LK1').addEventListener( 'click',
    function(){
        cl1.style.left = '0' ;
        cl2.style.left = '0' ;
        cl3.style.left = '0' ;
        cl4.style.left = '0' ;
        // hl.style.left= '12.2vw';
        document.getElementById('lk1').classList.add('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK2').addEventListener( 'click',
    function(){
        cl1.style.left = '-100%' ;
        cl2.style.left = '-100%' ;
        cl3.style.left = '-100%' ;
        cl4.style.left = '-100%' ;
        // hl.style.left= '36.9vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.add('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK3').addEventListener( 'click',
    function(){
        cl1.style.left = '-200%' ;
        cl2.style.left = '-200%' ;
        cl3.style.left = '-200%' ;
        cl4.style.left = '-200%' ;
        // hl.style.left= '48vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.add('hilight');
        document.getElementById('lk4').classList.remove('hilight');
    }
)

document.getElementById('LK4').addEventListener( 'click',
    function(){
        cl1.style.left = '-300%' ;
        cl2.style.left = '-300%' ;
        cl3.style.left = '-300%' ;
        cl4.style.left = '-300%' ;
        // hl.style.left= '67vw';
        document.getElementById('lk1').classList.remove('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.add('hilight');
    }
)

// -------------------------------------------------contact----------------------------------------------


function move(){
    var select = document.getElementById('contactdropdown');
    var text = select.options[select.selectedIndex].value;
    var cover = document.getElementById('cover');

    var cl1 = document.getElementById('csvfb');
    var cl2 = document.getElementById('pdfb');
    var cl3 = document.getElementById('tracker-div');
    var cl4 = document.getElementById('others');
if(text == 'svcfeedback'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)


        cl1.style.left = '0' ;
        cl2.style.left = '0' ;
        cl3.style.left = '0' ;
        cl4.style.left = '0' ;
        // hl.style.left= '12.2vw';
        document.getElementById('lk1').classList.add('hilight');
        document.getElementById('lk2').classList.remove('hilight');
        document.getElementById('lk3').classList.remove('hilight');
        document.getElementById('lk4').classList.remove('hilight');

}else if (text == 'prdfeedback'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-100%' ;
    cl2.style.left = '-100%' ;
    cl3.style.left = '-100%' ;
    cl4.style.left = '-100%' ;
    // hl.style.left= '36.9vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.add('hilight');
    document.getElementById('lk3').classList.remove('hilight');
    document.getElementById('lk4').classList.remove('hilight');

}else if (text == 'track'){
    cover.classList.add('dispr');

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-200%' ;
    cl2.style.left = '-200%' ;
    cl3.style.left = '-200%' ;
    cl4.style.left = '-200%' ;
    // hl.style.left= '48vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.remove('hilight');
    document.getElementById('lk3').classList.add('hilight');
    document.getElementById('lk4').classList.remove('hilight');
}else {
    cover.classList.add('dispr'); 

    setInterval(function(){
        cover.style.display='none';
    },2000)

    cl1.style.left = '-300%' ;
    cl2.style.left = '-300%' ;
    cl3.style.left = '-300%' ;
    cl4.style.left = '-300%' ;
    // hl.style.left= '67vw';
    document.getElementById('lk1').classList.remove('hilight');
    document.getElementById('lk2').classList.remove('hilight');
    document.getElementById('lk3').classList.remove('hilight');
    document.getElementById('lk4').classList.add('hilight');
}
}

var navlogin =document.getElementById('rightnav');
var loginpagereal =document.getElementById('loginn');
var navcontact = document.getElementById('navcontact');



navlogin.addEventListener('click', function (){
    loginpagereal.style.zIndex= 20;

});

navcontact.addEventListener('click', function (){
    loginpagereal.style.zIndex= -2;
    document.getElementById('register').style.zIndex='-3';
    cover.style.zIndex=13;

});

function backremove(e){
    var parentparent= e.parentNode.parentNode;
    parentparent.style.visibility='hidden';
    parentparent.style.zIndex='-3';
    cover.style.zIndex=20;
    cover.style.opacity= 1;

}

var trackbtn = document.getElementById('trackbtn');
var trackerdiv = document.getElementById('trackproduct');
var forgettrackerbtn = document.getElementById('forgettrackerbtn');
var forgettrackeriddiv = document.getElementById('forgettrackeriddiv');

trackbtn.addEventListener('click', function(){
    trackerdiv.style.zIndex = 30;
    trackerdiv.style.visibility= 'visible';
});

forgettrackerbtn.addEventListener('click', function(){
    forgettrackeriddiv.style.zIndex= 30;
    forgettrackeriddiv.style.visibility= 'visible';
    
});

function forgetpass(){
    forgettrackeriddiv.style.zIndex= 30;
    forgettrackeriddiv.style.visibility= 'visible';
}

document.getElementById('registerinloginpage').addEventListener(
    'click', function(){
        document.getElementById('register').style.zIndex='13';
        loginpagereal.style.zIndex='-2';
    }
>>>>>>> b58be99f546881d9890ee89420d2a8873e154c89
);