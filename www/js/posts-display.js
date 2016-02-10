ons.bootstrap();

function vardump(arr,lv,key) {
var dumptxt = "",
    lv_idt = "",
    type = Object.prototype.toString.call(arr).slice(8, -1);
if(!lv) lv = 0;
for(var i=0;i<lv;i++) lv_idt += "    ";
if(key) dumptxt += lv_idt + "[" + key + "] => ";

if(arr == null || arr == undefined){
    dumptxt += arr + '\n';
} else if(type == "Array" || type == "Object"){
    dumptxt += type + "...{\n";
    for(var item in arr) dumptxt += vardump(arr[item],lv+1,item);
    dumptxt += lv_idt + "}\n";
} else if(type == "String"){
    dumptxt += '"' + arr + '" ('+ type +')\n';
}  else if(type == "Number"){
    dumptxt += arr + " (" + type + ")\n";
} else {
    dumptxt += arr + " (" + type + ")\n";
}
return dumptxt;
}
var contents;
var selectedContent;
var selectedCategory = "all";

$(document).ready(function(){
    $("body").on("click", "#page1-timeline > .timeline-li", function(){
      selected = this.id;
      selectedContent = contents[selected];
      //alert(contents[selected].get("text"));
        app.navi.pushPage('userpage1.html');
    });
    //$("#slidemenu").on("click", ".list__item__line-height", function(){
    //	alert(this.id);
    //});
});

 document.addEventListener("pageinit",function(e){
     
 if(e.target.id =="main"){
  
  	//alert(selectedCategory);
    var PostClass = NCMB.Object.extend("Post");
    var query = new NCMB.Query(PostClass);
    
    if(selectedCategory != "all"){
    	query.equalTo("category", selectedCategory);
    }
    
    query.find().then(function(tweets){
      contents = tweets.concat();
      var i = 0;
     // console.log( vardump(tweets[0]['id']));
      //console.log( vardump(results[0]["_serverData"]["text"]) );
      
      datalength = 4;
      //var datalength = tweets.length;
      
      var tl = $(".timeline");
      
      //var textitem = $(".timeline-li").clone();
      
        for (var i=0; i<datalength; i++) {
          var tweet = tweets[i];
          
          var id = tweet.get("userId");
          console.log(id);
          //var UserClass = new NCMB.User();
    	  var query = new NCMB.Query("user");
    	  query.get(id, {
    	  	success:function(user){
    	  		console.log(user.get("text"));
    	  		//console.log(results[0].get("text"));
    	  	},
    	  	error: function(object, error){
    	  		console.log('ooooo');
    	  	}
    	  });
    	  
        //console.log(tweet.id + " - " + tweet.get("text"));
          tl.append('<ons-list-item id="'+i+'" class="timeline-li" modifier="tappable"><ons-row><ons-col><div class="timeline-from"><span class="timeline-name">UserName1</span></div><div class="timeline-message">' + tweet.get("text") + '</div><div id="line"><br><i class="fa fa-thumbs-o-up" id="iine">50</i> <i class="fa fa-comment-o" id="res">20</i><br><br><br></div><div id="haikei"><br></div></ons-col></ons-row></ons-list-item>');         
                
                  //$('#testtesttest').each(function(){
                 //     $(this).attr('id', i);
                  //});
                 
                

        }
        
        ons.compile(tl); 
        
    });
  
  }
  
 },false);
 


 
 
 
 //カテゴリ分けしたページの投稿
 
 document.addEventListener("pageinit",function(e){
    
 

     
 if(e.target.id =="detail"){
  
  //alert(ideaContent + ' detail');
  
  il = $(".idealine");
  il.append('<ons-list-item class="timeline-li" modifier="tappable"><ons-row><ons-col><div class="timeline-from"><span class="timeline-name">UserName1</span></div><div class="timeline-message">' + selectedContent.get("text") + '</div><i class="fa fa-thumbs-o-up" id="iine">50</i></ons-col></ons-row></ons-list-item>');
  
  parentId = selectedContent.id;
  //alert(parentId);
  
          //alert(ideaContent + 'main');
    var ReplyClass = NCMB.Object.extend("Reply");
    var query = new NCMB.Query(ReplyClass);
    query.equalTo("postId", parentId);
    
    query.find().then(function(tweets){
      var i = 0;
      var datalength = tweets.length;

    var rl = $(".resline");
 
    for (var i=0; i<datalength; i++) {
            var tweet = tweets[i];
          rl.append('<ons-list-item id="testtesttest" class="timeline-li" modifier="tappable"><ons-row><ons-col><div class="timeline-from"><span class="timeline-name">UserName1</span></div><div class="timeline-message">' + tweet.get("text") + '</div><div id="line"><br></div></ons-col></ons-row></ons-list-item>');     	
                
                 $('#testtesttest').each(function(){
                     $(this).attr('id', 'rep' + i);
                 });

  }
       ons.compile(il);
 ons.compile(rl);
        
    });


 }
 },false);
 
 
 
 document.addEventListener("pageinit",function(e){
    
 	if(e.target.id =="category"){
 	$("#slidemenu").on("click", ".list__item__line-height", function(){
    	selectedCategory = this.id;
    });
 	//alert('Oh');
 	}
  
 },false);


 
// document.addEventListener("click",function(e){
//     
// if(e.target.id =="rpl"){
//     $(".resline").append('<ons-list-item class="timeline-li" modifier="tappable"><ons-row><ons-col><div class="timeline-from"><span class="timeline-name">UserName1</span></div><div class="timeline-message">TextTextTextTextTextTextText<br>TextTextTextTextTextTextText  #PubLife</div><i class="fa fa-thumbs-o-up" id="iine">50</i></ons-col></ons-row></ons-list-item>');
//     
// }
// },false);
//  

document.addEventListener("pageinit",function(e){

     
 if(e.target.id =="mypagedayo"){
  
    app.mynavi.pushPage("mypagetoukou.html");

 }
 },false);
 
 
 
 

