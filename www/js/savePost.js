// This is a JavaScript file
//投稿を登録する
function savePost(text, id){
    //TLのポストが取得できたときの処理
        var text = text;
        console.log(text);
        //Postクラスのインスタンスを作成
        var PostClass = NCMB.Object.extend("Post");
        var post = new PostClass();
        //値を設定
        post.set("text", text);
        post.set("userId", id);
        
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
}
