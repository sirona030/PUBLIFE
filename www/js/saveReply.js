// This is a JavaScript file

function replyAppearance(){
    $("#replyinput").animate({top:'14%'});
    $("#replycontents").animate({top:'85px'});
}


        
function replySubmit(){
//投稿を登録する
    //入力フォームの内容を取得したときの処理
        var text = document.getElementById("replytext").value;
        
            if(text===''){
                alert("入力してください");
            }else{
            var postId = selectedContent.id;
            console.log(text);
            
            var user = NCMB.User.current();
            if(user!==null){
                console.log("logined");
            console.log(user.get("userName"));
            console.log(user.id);
            //Replyクラスのインスタンスを作成
            var ReplyClass = NCMB.Object.extend("Reply");
            var post = new ReplyClass();
            //値を設定
            post.set("text",text);
            post.set("userId",user.id);
            post.set("postId",postId);
            //保存を実行
            post.save(null, {
            //保存に成功した場合はメッセージを表示
            success: function (){
                console.log("Success");
            },
            //保存に失敗した場合はエラー内容を表示
            error: function (obj, error){
                console.log("Failed");
            }
        });
        }else{
            var check = confirm("投稿にはログインが必要です");
            if(check){
                app.slidingMenu.setMainPage('page3.html', {closeMenu: true});
            }else{
            }
        }

        var reset_target =  document.getElementById("replytext");
        reset_target.value = '';
        $("#replyinput").animate({top:'-90px'});
        $("#replycontents").animate({top:'0px'});
    }

}


function cancelSubmit(){
    var reset_target =  document.getElementById("replytext");
    alert(selectedContent.id);
    reset_target.value = '';
    $("#replyinput").animate({top:'-90px'});
    $("#replycontents").animate({top:'0px'});
}