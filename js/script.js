window.onload=function(){
  var merrywrap=document.getElementById("merrywrap");
  var box=merrywrap.getElementsByClassName("giftbox")[0];
  var step=1;
  var stepMinutes=[2000,2000,1000,1000];
  function init(){
          box.addEventListener("click",openBox,false);
  }
  function stepClass(step){
    merrywrap.className='merrywrap';
    merrywrap.className='merrywrap step-'+step;
  }
  function openBox(){
    if(step===1){
      box.removeEventListener("click",openBox,false); 
    }  
    stepClass(step); 
    if(step===3){ 
    } 
    if(step===4){ 
       return;
    }     
    setTimeout(openBox,stepMinutes[step-1]);
    step++;  
  }
   
  init();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  const openBox = $('.giftbox');
  const sound = $('#volume');
  let audio = new Audio('./audio/box.mp3');
      
  openBox.click(function() {
    document.getElementById('number').innerHTML = getRandomInt(1, 5);
    audio.play();
    audio = new Audio('./audio/magic.mp3');
    audio.play();
    sound.addClass('on');      
  });
  sound.click(function() {
    if(sound.hasClass('on')) {
      sound.removeClass('on');
      audio.pause();
      sound.addClass('off');
    } else {
      sound.removeClass('off');
      audio.play();
      sound.addClass('on');
    }      
  });

  
  // // send form footer
  // $('.giftbox').click(function() {
  //   const myurl_string = window.location.href;
  //   const myurl = new URL(myurl_string);
  //   const name = myurl.searchParams.get('name');
  //   const phone = myurl.searchParams.get('phone');
  //   const number = $('#number').text();

  //   var xhr = new XMLHttpRequest();
  //     var url = 'https://api.hsforms.com/submissions/v3/integration/submit/6761453/61785fb2-96f0-4d23-bfd6-6ec29b16c585'
  //     // Example request JSON:
  //     var data = {
  //       "fields": [
  //         {
  //           "name": "firstname",
  //           "value": name
  //         },
  //         {
  //           "name": "mobilephone",
  //           "value": phone
  //         },
  //         {
  //           "name": "present",
  //           "value": number
  //         }
  //       ]
  //     }
  //     var final_data = JSON.stringify(data)
  //     xhr.open('POST', url);
  //     // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  //     xhr.setRequestHeader('Content-Type', 'application/json');
  //     xhr.onreadystatechange = function() {
  //         if(xhr.readyState == 4 && xhr.status == 200) { 
  //             $('.form__block').addClass('disable');
  //           $('.send__message').addClass('active');
  //         } else if (xhr.readyState == 4 && xhr.status == 400){
  //           $('.form__block').addClass('disable');
  //           $('.notsend__message').addClass('active');
  //           console.log(xhr.responseText);
  //         } else if (xhr.readyState == 4 && xhr.status == 403){ 
  //             $('.form__block').addClass('disable');
  //           $('.notsend__message').addClass('active');
  //           console.log(xhr.responseText);        
  //         } else if (xhr.readyState == 4 && xhr.status == 404){ 
  //             $('.form__block').addClass('disable');
  //           $('.notsend__message').addClass('active');
  //           console.log(xhr.responseText);
  //         }
  //        } 
  //     // Sends the request      
  //     xhr.send(final_data)
  // });
});