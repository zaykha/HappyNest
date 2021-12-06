
// --------------------------------product BG-------------------------------------

var a;
var quantity =1;
var nameamt;

function hover(ele) {
   var id = ele.id;
   a = id.slice(4);
var selected = document.getElementById('FO10g' + a);
var selected100 = document.getElementById('FO100g' + a);
var selectedCA = document.getElementById('customFO' + a);
var fcb = document.getElementById('fcbh' + a);

selected.addEventListener("focus",
    function(){
        fcb.classList.add('bg10g');
        fcb.classList.remove('bg100g');
        fcb.classList.remove('bg1k');
    document.getElementById('amountFO' + a).style.visibility= 'hidden';
    nameamt = '10g'; 
     
});

selected100.addEventListener("focus",
function(){
    fcb.classList.remove('bg10g');
    fcb.classList.add('bg100g');
    fcb.classList.remove('bg1k');
    document.getElementById('amountFO' + a).style.visibility= 'hidden';
   nameamt = '100g';
});

selectedCA.addEventListener("focus",
function(){
    fcb.classList.remove('bg10g');
    fcb.classList.remove('bg100g');
    fcb.classList.add('bg1k');
    document.getElementById('amountFO'+ a).style.visibility= 'visible';
    nameamt= 'custom weight';
});

}
// --------------------------------------basket------------------------------------

document.getElementById('basket').addEventListener('click',function(){
    document.getElementById('basket').classList.add('icontoggle');
    document.getElementById('backbasket').classList.add('icontoggle');
    document.getElementById('bskwrapper').classList.add('bsktoggle');
    
    document.getElementById('basket').classList.remove('micontoggle');
    document.getElementById('backbasket').classList.remove('micontoggle');
    document.getElementById('bskwrapper').classList.remove('mbsktoggle');
    
    document.getElementById('basket').style.zIndex= '27';
    
    }
    )
    
    document.getElementById('backbasket').addEventListener('click',function(){
        document.getElementById('basket').classList.remove('icontoggle');
        document.getElementById('backbasket').classList.remove('icontoggle');
        document.getElementById('bskwrapper').classList.remove('bsktoggle');
    
        document.getElementById('basket').classList.add('micontoggle');
        document.getElementById('backbasket').classList.add('micontoggle');
        document.getElementById('bskwrapper').classList.add('mbsktoggle');
    
        document.getElementById('basket').style.zIndex= '30';
        
    }
    )
// -------------------------------------------------------checkout---------------------------------------------

var adk = document.getElementsByClassName('ADKbtn');

const divs = document.querySelectorAll('.ADKbtn');

var checkid;
var uniqueid=0;
var ttlarr= [];
var ttlarrctm= [];
var number=1;
var newnumber;
var ctmarr;

function pluss(q){
    var qttaddbtn =parseFloat(q.parentNode.children[3].textContent,0);
     var fqttaddbtn =qttaddbtn+number;

    var priceaddbtn = parseFloat(q.parentNode.children[1].textContent.slice(4));
    var fttladdbtn = priceaddbtn * fqttaddbtn;

     q.parentNode.children[3].textContent= fqttaddbtn;
     q.parentNode.children[5].textContent= 'total : '+ 'USD '+ fttladdbtn;
    
     var ttlitemsinbsk = [];
    var loopingitems = document.getElementById('items').children;
    
    for(let h=0; h<loopingitems.length; h++){
       var itemprice= parseFloat(loopingitems[h].children[5].textContent.slice(12));
       ttlitemsinbsk.push(itemprice);
       var gttlcashaddbtn=ttlitemsinbsk.reduce((a, b) => a + b, 0);
        var grandttladdbtn= document.getElementById('gttl');
        grandttladdbtn.textContent='USD '+parseFloat(gttlcashaddbtn).toFixed(2);
    }
 }

function minuss(q){
    var qttminusbtn =parseFloat(q.parentNode.children[3].textContent,0);
    var fqttminusbtn =qttminusbtn-number;
    var grandttladdbtn= document.getElementById('gttl');
   

   var priceminusbtn = parseFloat(q.parentNode.children[1].textContent.slice(4));
   var fttlminusbtn = priceminusbtn * fqttminusbtn;

    q.parentNode.children[3].textContent= fqttminusbtn;
    q.parentNode.children[5].textContent= 'total : '+ 'USD '+ fttlminusbtn;
   
    var ttlitemsinbsk = [];
    var loopingitems = document.getElementById('items').children;
   
   for(let h=0; h<loopingitems.length; h++){
      var itemprice= parseFloat(loopingitems[h].children[5].textContent.slice(12));
      ttlitemsinbsk.push(itemprice);
      var gttlcashaddbtn=ttlitemsinbsk.reduce((a, b) => a + b, 0);
       grandttladdbtn.textContent='USD '+parseFloat(gttlcashaddbtn).toFixed(2);
   }
   if(fqttminusbtn<=0){
    q.parentNode.remove();
    checkid = 0;
}
}

function deleteed(q){
    var gttlremoval = parseFloat(document.getElementById('gttl').textContent.slice(4));
    var amttoremove = parseFloat(q.parentNode.lastChild.previousSibling.textContent.slice(12));
    var newgttl = gttlremoval - amttoremove;
    document.getElementById('gttl').textContent='USD ' + newgttl;

    q.parentNode.remove();
      checkid=0;
}
var item = document.getElementById('items');
var shoppingitem = document.getElementById('shoppingitem');
// var item = document.getElementById('items');

divs.forEach(el => el.addEventListener('click', event => {
   
    
    
    var pid = event.target.parentNode.id;
    var pdv = document.getElementById(pid);
    var pdiv = event.target.parentNode;
    var x = pid.slice(4);

    var teng = document.getElementById('FO10g'+ x);
    
    var radiobtn=pdiv.querySelectorAll('input[type=radio]');

    if(document.getElementById('amountFO'+ x).value>=1000 ){
        window.alert('Please contact us for more than 1000g purchase');
        pdiv.querySelector('input[type=number]').value=0;
}
else if(document.getElementById('amountFO'+ x).value <=0 && radiobtn[2].checked){
    window.alert('Please input the amount');
    pdiv.querySelector('input[type=number]').value=0;
}
else{
      
    var radiobtn=pdiv.querySelectorAll('input[type=radio]');
    var amt;
    var weightid;
    

    for (let i = 0 ; i<radiobtn.length; i++){
        var rchecked=radiobtn[i].checked;
        
        var tengchecked = radiobtn[0].checked; 
        var hungchecked = radiobtn[1].checked; 
        var custgchecked = radiobtn[2].checked; 

        
        var ctm=document.getElementById('amountFO'+ x).value;
        var pergram = teng.value/10;
        var discount = parseFloat(ctm/100*10).toFixed(2);
        var fvalue = ctm * pergram - discount;

         if(rchecked){   
            var checkingsecond = 'div'+radiobtn[i].id;
            
        amt= radiobtn[i].value;
        weightid = radiobtn[i].id;
        // checkid!=weightid
        var condition;
        
        if(item.children.length>0){
            for(let l=0; l<item.children.length; l++){          
                var itemchildcheck=item.children[l].id;            
                if(itemchildcheck!=checkingsecond){
                    condition=2;                   
                }else if(itemchildcheck === checkingsecond) {
                    condition=1;   
                    ctmarr= item.children[l].children[0].textContent.replace(/[A-Za-z]/g,'');
                    ;break
                } 
            }
        }
        console.log(ctmarr);
        if(condition!=1 || item.children.length<=0){
            uniqueid++;
        var c = pdv.children[0].textContent;

        // nameamt= '@'+ctm+'g';
        const pname = document.createElement("p");
        const ptext = document.createTextNode(c + ' ' + nameamt);
        pname.setAttribute('id', 'pname-bsk'+ weightid);
        pname.setAttribute('class', 'pnamebsk');
        pname.appendChild(ptext);

        const pprice = document.createElement("p");
        const pricetxt = document.createTextNode('USD '+ amt);
        pprice.setAttribute('id', 'pprice-bsk' + weightid);
        pprice.setAttribute('class', 'pnamebsk');
        pprice.appendChild(pricetxt);
    
    
        const plus = document.createElement("button");
        const textplus = document.createTextNode("+");
        plus.setAttribute('onclick','pluss(this)');
        plus.setAttribute('id', 'plus'+ weightid);
        plus.setAttribute('class', 'pnamebsk');
        plus.appendChild(textplus);
    
        const qtt = document.createElement("p");
        const qtttxt = document.createTextNode(quantity);
        qtt.setAttribute('id', 'quantity'+weightid);
        qtt.setAttribute('value', 1);
        qtt.setAttribute('class', 'pnamebsk');
        qtt.appendChild(qtttxt);
    
        const minus = document.createElement("button");
        const textminus = document.createTextNode("-");
        minus.setAttribute('onclick','minuss(this)');
        minus.setAttribute('id', 'minus'+weightid);
        minus.setAttribute('class', 'pnamebsk');
        minus.appendChild(textminus);
    
        var total;
        total = amt * quantity ;
        const ttlbsk = document.createElement("p");
        const ttltxt = document.createTextNode('total : '+ 'USD '+ total);
        ttlbsk.setAttribute('id', 'ttlbsk'+weightid);
        ttlbsk.setAttribute('class', 'pnamebsk');
        ttlbsk.appendChild(ttltxt);

        const deleteifa = document.createElement("i");
        deleteifa.setAttribute('class', 'fa fa-trash');
    
        const deleteitem = document.createElement("button");
        deleteitem.setAttribute('onclick','deleteed(this)')
        deleteitem.setAttribute('id', 'delete'+weightid);
        deleteitem.setAttribute('class', 'pnamebsk');
        deleteitem.appendChild(deleteifa);
    
        const itemdiv = document.createElement("div");
        itemdiv.setAttribute('class', 'itemdivv');
        itemdiv.setAttribute('id', 'div'+weightid);
    
        
    
            itemdiv.appendChild(pname);
            itemdiv.appendChild(pprice);
            itemdiv.appendChild(plus);
            itemdiv.appendChild(qtt);
            itemdiv.appendChild(minus);
            itemdiv.appendChild(ttlbsk);
            itemdiv.appendChild(deleteitem);
    
            item.appendChild(itemdiv);
            
            checkid=weightid;
            // console.log(itemdiv);
            if(radiobtn[2].checked){

                document.getElementById('ttlbsk'+ weightid).textContent = 'total : '+ 'USD '+ parseFloat(fvalue).toFixed(2);
                document.getElementById('pprice-bsk'+ weightid).remove();
                document.getElementById('plus'+ weightid).remove();
                document.getElementById('minus'+ weightid).remove();
                document.getElementById('quantity'+ weightid).remove();
                document.getElementById('pname-bsk'+ weightid).textContent =pdv.children[0].textContent +' '+parseFloat(ctm) + 'g @';
                ctmarr=ctm;
                // console.log(ctmarr);
                
            }
    }else {
        
        var createddiv= document.getElementById("quantity" + weightid);
        var createdttl= document.getElementById("ttlbsk" + weightid);
        if(radiobtn[2].checked){

            
            var fctm= parseFloat(ctmarr) + parseFloat(ctm);
            var updatectm = parseFloat(createdttl.textContent.slice(12)) + fvalue;
           console.log(ctmarr);
            document.getElementById("ttlbsk" + weightid).textContent = 'total : '+ 'USD '+parseFloat(updatectm).toFixed(2) ;
            document.getElementById('pname-bsk'+ weightid).textContent =pdv.children[0].textContent +' '+parseFloat(fctm) + 'g @';
          
           console.log(ctmarr);

        }else{
        var int = parseFloat(createddiv.textContent);
        newnumber = int + number;
        createddiv.textContent= newnumber;
    
        itemttl=newnumber*amt;
        createdttl.textContent= 'total : USD '+itemttl;

        }
               
    }

    var ttlitemsinbsk = [];
    var loopingitems = document.getElementById('items').children;
    var checkoutdisplayamt = document.getElementById('ttlamountchkout');
   
        for(let h=0; h<loopingitems.length; h++){
            var itemprice= parseFloat(loopingitems[h].lastChild.previousSibling.textContent.slice(12));
            ttlitemsinbsk.push(itemprice);
            var gttlcashaddbtn=ttlitemsinbsk.reduce((a, b) => a + b, 0);
             var grandttladdbtn= document.getElementById('gttl');
             grandttladdbtn.textContent='USD '+parseFloat(gttlcashaddbtn).toFixed(2);
             checkoutdisplayamt.textContent='USD '+ parseFloat(gttlcashaddbtn).toFixed(2);
         }
             pdiv.querySelector('input[type=number]').value=0;
             
    break;
         
    }else if(!tengchecked && !hungchecked && !custgchecked){
        window.alert('please select a value');
     break;
    }
    
}
}}
));

// ---------------------------------------checkoutbtn-------------------------------------------------------------------------------------
var navlogin =document.getElementById('rightnav');
var loginpagereal =document.getElementById('loginn');

var checkoutbtnclick = document.getElementById('checkout-btn');
var loginpage = document.getElementById('login');
var addmoreitem = document.getElementById('backbsk');
var registerfirst = document.getElementById('registerfirst');


checkoutbtnclick.addEventListener('click',function(){
    if(item.children.length<=0){
        alert('please add your item to basket');
    }else{
loginpage.style.zIndex=3;
    }
    
})

addmoreitem.addEventListener('click', function(){
loginpage.style.zIndex=-1;
})


registerfirst.addEventListener('click', function(){
    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';
    document.getElementById('register').style.zIndex='13';
    loginpagereal.style.zIndex= '-2';
    

})

var registered = document.getElementById('registered');
var companylogodiv = document.getElementById('companylogo');
var maleregister = document.getElementById('male');
var femaleregister = document.getElementById('female');
var loginremove = document.getElementById('login-card');
var checkoutana = document.getElementById('checkoutana');



registered.addEventListener('click', function(){
    document.getElementById('register').style.zIndex='-1';
    navlogin.remove();
    var mfavatar;

    if(maleregister.checked){
        mfavatar = '/images/maleregister.jpg';
    }else if(femaleregister.checked){
        mfavatar = '/images/femaleregister1.jpg';
    }else{
        mfavatar = '/images/maleregister.jpg'
    }
    
    var fname = document.getElementById('fname').value;
    
    const character = document.createElement("div");
    // character.setAttribute('onclick','deleteed(this)')
    character.setAttribute('id', 'character');
    character.setAttribute('class', 'pnamebsk');

    const characteravatar = document.createElement('img');
    characteravatar.setAttribute('id', 'avatarimg');
    characteravatar.setAttribute('src', mfavatar);

    var fnametext= document.createElement('h3');
    fnametext.textContent='Hello ' + fname;
    character.appendChild(characteravatar);
    character.appendChild(fnametext);
    companylogodiv.appendChild(character);

    loginremove.remove();
    checkoutana.remove();

    var checkoutloggedin = document.createElement('button');
    checkoutloggedin.setAttribute('id', 'checkoutloggedin');
    checkoutloggedin.textContent='Check Out';
    checkoutloggedin.setAttribute('onclick', 'tocheckoutpage()');
    loginpage.appendChild(checkoutloggedin);


});

var loginenter = document.getElementById('loginenter');
loginenter.addEventListener('click', function(){
    document.getElementById('loginn').style.zIndex=-1;

    var checkoutloggedin = document.createElement('button');
    checkoutloggedin.setAttribute('id', 'checkoutloggedin');
    checkoutloggedin.textContent='Check Out';
    checkoutloggedin.setAttribute('onclick', 'tocheckoutpage()')

    
    loginremove.remove();
    checkoutana.remove();
    loginpage.appendChild(checkoutloggedin);
});


var shoppinggttl = document.getElementById('shoppinggttl');
var basketcontent = document.getElementById('basketcontent');
var checkoutpage= document.getElementById('checkoutpage');
var grandttldiv = document.getElementById('grand-total');
var bskwrappercheckout = document.getElementById('bskwrapper')


checkoutana.addEventListener('click', function(){
    shoppingitem.appendChild(item);
    checkoutpage.style.zIndex= 100;
    shoppinggttl.appendChild(grandttldiv);
    checkoutpage.style.visibility='visible';
}
);

 function tocheckoutpage(){
    shoppingitem.appendChild(item);
    checkoutpage.style.zIndex= 100;
    shoppinggttl.appendChild(grandttldiv);
    checkoutpage.style.visibility='visible';
}
;

var backcheckout = document.getElementById('longarrowcheckout');
backcheckout.addEventListener('click', function(){
    basketcontent.appendChild(item);
    checkoutpage.style.zIndex= -1;
    bskwrappercheckout.appendChild(grandttldiv);
    checkoutpage.style.visibility='hidden';

    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';
    
}
);
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
var cover = document.getElementById('cover');

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


// ---------------------------------------feedback---------------------------------------------------------------------------
var submitfbbtn = document.querySelectorAll('button[class=submitctus]');
var backtoctus = document.getElementById('replyctus');
var frontpagectus = document.getElementById('cover');
var parentreplyctus = document.getElementById('replyctus');
var logintopay = document.getElementById('logintopay');
var navcontact = document.getElementById('navcontact');
function zindexmove(){
    parentreplyctus.style.zIndex = -1;
};

function submitctus(oe){

 if(!oe.parentNode.querySelector('input[type=email]').value){
     alert('please fill in your email address');
 }else{
    backtoctus.style.zIndex = 21;
 }
}
    


function formats(ele,e){
    if(ele.value.length<19){
      ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }else{
      return false;
    }
  }
  function onlyNumbers(e)
  {
    var c=e.which?e.which:e.keyCode; 
    if(c<48||c>57)
    {
      return false;
    }
  }

  function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
  }

  var ccpay = document.getElementById('cc');
  var pppay = document.getElementById('pp');
  var ccinfo = document.getElementById('ccinfo');
  var paypal = document.getElementById('paypal');

  function ccclicked(e){
      ccinfo.style.visibility= 'visible';
      ccinfo.style.zIndex = 10;

      paypal.style.visibility= 'hidden';
      paypal.style.zIndex = 9;
      
      ccpay.style.backgroundColor= 'green';
      pppay.style.backgroundColor= 'black';
  }
  
  function ppclicked(e){
    ccinfo.style.visibility= 'hidden';
    ccinfo.style.zIndex = 9;

    paypal.style.visibility= 'visible';
    paypal.style.zIndex = 10;
    
    ccpay.style.backgroundColor= 'black';
    pppay.style.backgroundColor= 'green';
}



navlogin.addEventListener('click', function (){
    loginpagereal.style.zIndex= 20;
    loginpagereal.style.visibility='visible';
    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';
});

navcontact.addEventListener('click', function (){
    loginpagereal.style.zIndex= -2;
    document.getElementById('register').style.zIndex='-3';
    cover.style.zIndex=13;

    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';
});

logintopay.addEventListener('click', function (){
    loginpagereal.style.zIndex= 20;

    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';
});

var postpayment =  document.getElementById('postpayment');
var proceed =  document.getElementById('payfinal');
proceed.addEventListener('click', function(){
    postpayment.style.zIndex= 200;
    checkoutpage.style.visibility='hidden';
    checkoutpage.style.zIndex= -1;

    document.getElementById('basket').classList.remove('icontoggle');
    document.getElementById('backbasket').classList.remove('icontoggle');
    document.getElementById('bskwrapper').classList.remove('bsktoggle');

    document.getElementById('basket').classList.add('micontoggle');
    document.getElementById('backbasket').classList.add('micontoggle');
    document.getElementById('bskwrapper').classList.add('mbsktoggle');

    document.getElementById('basket').style.zIndex= '30';   
}
)

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
);

// --------------------------------product BG-------------------------------------
