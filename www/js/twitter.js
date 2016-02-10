var oauth;
var callbackUrl = "https://google.com";

$(function(){
    console.log("ready");

    oauth = OAuth({
        consumerKey: "CyQnVcfqyP9MP4mfj2fmP757R",
        consumerSecret: "ToPmQWfBwNbKX8V0lrMtMSY8jNibn8Zw1KoeO24Rbwlw0RWmWQ",
        callbackUrl: callbackUrl,
        requestTokenUrl: "https://api.twitter.com/oauth/request_token",
        authorizationUrl: "https://api.twitter.com/oauth/authorize",
        accessTokenUrl: "https://api.twitter.com/oauth/access_token"
    });
});

function connect(){
    var d = new $.Deferred();
    
    console.log("connecting");
    oauth.fetchRequestToken(function (url){
        showAuthWindow(url);
        
        d.resolve();
    }, function (data){
        console.log(JSON.stringify(data));
    });
    
    return d.promise();
}

function showAuthWindow(url){
    console.log("showing");
    var browser = window.open(url, '_blank', 'location=yes');
    browser.addEventListener('loadstart', function(event){
        if (event.url.indexOf(callbackUrl) >= 0){
            
            event.url.match(/oauth_verifier=([a-zA-Z0-9]+)/);
            oauth.setVerifier(RegExp.$1);
            
            oauth.fetchAccessToken(function (data){
                
                setUserOAuth(data).then(getTwits()).then(browser.close());
            
            }, function (data){
                console.log(JSON.stringify(data));      
            });
        }
    });
}

function getTwits(){
    console.log("getting");
    
    $('#btnLogin').hide();
    
    var d = new $.Deferred();
    
    oauth.getJSON("https://api.twitter.com/1.1/statuses/user_timeline.json",
            function(data){
                showTwits(data);
                
                d.resolve();
            }, function(data){
                console.log(JSON.stringify(data));
            }
    );
    
    return d.promise();
}

function showTwits(data){
    for (var i = 0; i < data.length; i++){
        var text = data[i].text;
        
        if (text.match(/ #PubLife/)){
            var result = text.replace(/ #PubLife/g, "");
            
            saveTweet(result);
        }
    }
}

function setUserOAuth(data){
    var user = NCMB.User.current();
    var d = new $.Deferred();
    
    console.log(data);
    
    var text = data.text;
    
    var list = text.split('&');
    var token = list[0].split('=')[1];
    var secret = list[1].split('=')[1];
    
    var dataTokenSecret = [token, secret];
    
    user.set("OAuth", dataTokenSecret);  
    user.save(null, {
        success: function(){
            console.log("setUserOAuth()");
            console.log(user.get("userName"));
            d.resolve();
        },
        error: function(){   
        }
    });
    
    return d.promise();
}

function saveTweet(text){
    var PostClass = NCMB.Object.extend("Post");
    var query = new NCMB.Query(PostClass);
    var d = new $.Deferred();
    var len;
    
    query.equalTo("text", text);
    
    query.find().then(function(object){
        len = object.length;
    }).then(function(){
        if (!(len > 0)){
            d.resolve();
            console.log("save");
            
            var user = NCMB.User.current();
            var id = user.id;
            
            savePost(text, id);
        }
        else {
            console.log("already");
        }
    });
    
    return d.promise();
}

function getMyTweet(){
    var user = NCMB.User.current();
    var data = user.get("OAuth");
    
    var token = data[0];
    var secret = data[1];
      
    oauth.setAccessToken(token, secret)

    getTwits();
}

function getUserInfo(query){
    var user = NCMB.User.current();
    
    return user.get(query);
}
