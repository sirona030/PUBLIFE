// This is a JavaScript file



function mypageA(){
    app.mynavi.popPage("mypagetoukou2.html");
    app.mynavi.pushPage("mypagetoukou.html");
}

function mypageB(){
    app.mynavi.popPage("mypagetoukou.html");
    app.mynavi.pushPage("mypagetoukou2.html");
}
//  document.addEventListener("pageinit",function(e){
//      
//  if(e.target.id =="mypageline"){
// 
//       
//       var tl = $(".mypageline");
//       
//         for (var i=0; i<datalength; i++) {
//           var tweet = tweets[i];
//           tl.append('<ons-list-item id="'+i+'" class="timeline-li" modifier="tappable"><ons-row><ons-col><div class="timeline-from"><span class="timeline-name">UserName1</span></div><div class="timeline-message">naiyou</div><div id="line"><br><i class="fa fa-thumbs-o-up" id="iine">50</i> <i class="fa fa-comment-o" id="res">20</i><br><br><br></div><div id="haikei"><br></div></ons-col></ons-row></ons-list-item>');         
// 
//             
//         }
//         
//         ons.compile(tl); 
//         
//   }
//   
//  },false);
