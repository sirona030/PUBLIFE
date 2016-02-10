//save posts and display all posts
// 配列や連想配列、オブジェクトなどの中身を視覚的に表示する関数

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

// 適当にオブジェクト作ってみる

$(function(){
	
	var arr = ["a","b",{c:[1,2,"3"]},5,"10"];

// 確認

//console.log( vardump(arr) );

       

  //データの保存
  var text = "Test yuya.";
  console.log(text);
   //Postクラスのインスタンスを作成
  var PostClass = NCMB.Object.extend("Post");
  var post = new PostClass();
   //値を設定
  post.set("text",text);
  console.log('re');
  //保存を実行
  /*post.save(null, {
  	//保存に成功した場合はメッセージを表示
  	success: function (){
    console.log("Success");
    },
    //保存に失敗した場合はエラー内容を表示
	error: function (obj, error){
	console.log("Failed");
    }
  });
  */
  
  	var query = new NCMB.Query(PostClass);

	/*
	query.count().then(function(count){
		console.log(count);	
	});
	*/
	
	query.find().then(function(results){
	//console.log(results[1]);
	//alert(results[0]);
	var i = 0;
	while (i < 5){
  	console.log( vardump(results[i]["_serverData"]["text"]) );
 	i++;    // この文が無いと無限ループになってしまう。
 	}
	//console.log( vardump(results[0]["_serverData"]["text"]) );
	});
});
    