// This is a JavaScript file
/*
$(function(){
//	alert('55');
    //起動時にmobile backend APIキーを設定
    $.getJSON("setting.json", function(data){
        NCMB.initialize(
            data.appKey,
            data.clientKey
        );
        //alert(data.appKey);
        //alert(data.clientKey);
});

    
});
*/

$(function(){
	 NCMB.initialize(
        "44de0880b70ff35ffd300d375f29cb724ae8039ffadfbf0233fb61dfc33c4ef3",
        "7651c7231e0466b2fa0b0f4eed9cc63b4cf0fc5a6f87421c361bf5197f48fa78"
        );

});