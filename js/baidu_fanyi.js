function httpPost(URL, temp) {

    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";

    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        temp.appendChild(opt);
    }

    document.body.appendChild(temp);
    temp.submit();

    return temp;
}


function fanyi_jiami(keyword,appid,salt,sec_key){
	    var temp = document.createElement("form");
	    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
	var str=appid+keyword+10000+sec_key;
	console.log(str);
	var md5_str="8f6fdd65b342346d6487c8d6484d73df"
	
	var url="http://api.fanyi.baidu.com/api/trans/vip/translate";
	
	var opt1= document.createElement("textarea");
        opt1.name = "q";
        opt1.value = keyword;
        temp.appendChild(opt1);
     
     var opt2= document.createElement("textarea");
        opt2.name = "form";
        opt2.value = "auto";
        temp.appendChild(opt2);
        
        var opt3= document.createElement("textarea");
        opt3.name = "to";
        opt3.value = "zh";
        temp.appendChild(opt3);
        
        var opt4= document.createElement("textarea");
        opt4.name = "appid";
        opt4.value = appid;
        temp.appendChild(opt4);
        
        var opt5= document.createElement("textarea");
        opt5.name = "salt";
        opt5.value = 10000;
        temp.appendChild(opt5);
        
        var opt6= document.createElement("textarea");
        opt6.name = "sign";
        opt6.value = md5_str;
        temp.appendChild(opt6);
        
        //document.body.appendChild(temp);
    	temp.submit();

    	return temp;
}


function fanyi(){
	var url="http://api.fanyi.baidu.com/api/trans/vip/translate";
	var app_id="20180320000138153";
	var sec_key="nZAlQtnWF9AwU87UjKX6";
	var ip="111.111.111.111"
	
	var keyword="hello";//需要翻译的内容
	
	var suiji=Math.ceil((Math.random()+1)*10000);
	fanyi_jiami(keyword,app_id,suiji,sec_key);
}
