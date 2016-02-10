// This is a JavaScript file


function createAccount(){
    //テキストボックスからユーザー名とパスワードを取得
    var userName = $("#user_name").val();
    var password = $("#password").val();
    
    //会員クラスのインスタンスを作成
    var user = new NCMB.User();

    //インスタンスにユーザー名とパスワードを設定
    user.set("userName", userName);
    user.set("password", password);

    //会員登録を行うsignUpメソッドを実行
    user.signUp(null, {
        //登録に成功した場合はgetCurrentUserメソッドを実行
        success: function (){
            //ログイン中の会員を取得
             var user = NCMB.User.current();
            //取得した会員のユーザー名を表示する
            $("#current_user").text("サインイン中のユーザー名："　+ user.get("userName"));
            connect().then(function(){
                app.slidingMenu.setMainPage('mypage.html', {closeMenu: true});
            });
        },
        //登録に失敗した場合はエラーメッセージをコンソールに表示
        error: function (obj, error){
            if(error.code==="E409001"){
                $("#error_message").text("そのIDはすでに存在します");
            }else if(error.code===-1){
                $("#error_message").text("IDもしくはパスワードが空欄です");
            }else{
                $("#error_message").text("認証に失敗しました");                
            }
            console.log("error:" + error.code);
        }
    });
}

function signIn(){
    //テキストボックスからユーザー名とパスワードを取得
    
    var userName = $("#user_name").val();
    var password = $("#password").val();

    //会員登録を行うloginメソッドを実行
                
    NCMB.User.logIn(userName,password, {
        //登録に成功した場合はgetCurrentUserメソッドを実行
        success: function (){
            alert("Success");
            //ログイン中の会員を取得
             var user = NCMB.User.current();
            //取得した会員のユーザー名を表示する
            $("#current_user").text("ログイン中のユーザー名："　+ user.get("userName"));
            
            app.slidingMenu.setMainPage('mypage.html', {closeMenu: true});
        },
        //失敗した場合はエラーメッセージをコンソールに表示
        error: function (obj, error){
                $("#error_message").css("background-color","#E9967A");
                $("#error_message").css("height","15%");
                $("#error_message").css("padding","1%");
            if(error.code==="E401002"){
                $("#error_message").text("IDもしくはパスワードが違います");
            }else if(error.code==="E400003"){
                $("#error_message").text("IDもしくはパスワードが空欄です");
            }else{
                $("#error_message").text("認証に失敗しました");                
            }
            console.log("error:" + error.code);
        }});
}

//ログイン中のユーザー名を取得して画面に表示する
function getCurrentUser(){
    //ログイン中の会員を取得
    var user = NCMB.User.current();

    //取得した会員のユーザー名を表示する
    $("#current_user").text("ログイン中のユーザー名："　+ user.get("userName"));
} 
