
// client-side js
// run by the browser each time your view template is loaded

var textInput = document.getElementById('userInput');
var kanaP = document.getElementById('kana');
var wordDefinition = document.getElementById('definition');
var correctPic = document.getElementById('correct');
var wrongPic = document.getElementById('wrong');

var keyList = [];
var keyListIndex = 0;
var lastIndicies = [];
var lastIndiciesInsertVal = 0;
var feedbackDisplayTime = 600;

var kanaToRomajiDict = {};


 
//**********HELPER FUNCTIONS**********
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


//***********************************

function showAnswer(){
  textInput.value = kanaToRomajiDict[kanaP.innerText].romaji;
}


function setNewKana(){
  lastIndicies.splice(lastIndiciesInsertVal, 1, keyListIndex);
  lastIndiciesInsertVal = (lastIndiciesInsertVal + 1) % 3;
  
  
  var newIndex = getRandomInt(keyList.length);
  //make sure it's not the same one
  while(isInArray(newIndex, lastIndicies)){
    newIndex = getRandomInt(keyList.length);
  }
  
  keyListIndex = newIndex;
  
  //set values on the page
  kanaP.innerText = keyList[keyListIndex];
  wordDefinition.innerText = kanaToRomajiDict[keyList[keyListIndex]].meaning;
  textInput.value = '';
}

function hideFeedback(extraFunc){
  correctPic.style.display = 'none';
  wrongPic.style.display = 'none';
  if (typeof extraFunc != 'undefined'){
    extraFunc();  
  }
  
}

 // event handler function
	function onKeyDownHandler(e) {
	    var key = window.event ? e.keyCode : e.which;
      if (key == 13){
        
        if (textInput.value == kanaToRomajiDict[kanaP.innerText].romaji){
          correctPic.style.display = 'inline-block';
          wrongPic.style.display = 'none';
          window.setTimeout(hideFeedback, feedbackDisplayTime, setNewKana);
          
        }
        else{
          correctPic.style.display = 'none';
          wrongPic.style.display = 'inline-block';
          window.setTimeout(hideFeedback, feedbackDisplayTime);
        }
        
      }
	}

document.addEventListener('DOMContentLoaded', function(){
	 //ON DOCUMENT READY
  
  //initialization
  
  for (var key in kanaToRomajiDict){
    keyList.push(key);
  }
  setNewKana();
  
  // attach handler to the keydown event of the document
  if (document.attachEvent) {
    document.attachEvent('onkeydown', onKeyDownHandler);
  }
  else {
    document.addEventListener('keydown', onKeyDownHandler);
  }
  
});


kanaToRomajiDict = {
  "あう":{ romaji:"au", meaning:"to meet"},
"あく":{ romaji:"aku", meaning:"to open"},
"あける":{ romaji:"akeru", meaning:"to open"},
"あげる":{ romaji:"ageru", meaning:"to give"},
"あそぶ":{ romaji:"asobu", meaning:"to play"},
"あびる":{ romaji:"abiru", meaning:"to take a shower"},
"あらう":{ romaji:"arau", meaning:"to wash"},
"ある":{ romaji:"aru", meaning:"to be, to exist"},
"ある":{ romaji:"aru", meaning:"to possess"},
"あるく":{ romaji:"aruku", meaning:"to walk"},
"いう":{ romaji:"iu", meaning:"to say, to tell"},
"いく":{ romaji:"iku", meaning:"to go"},
"いる":{ romaji:"iru", meaning:"need, must haven be required"},
"いる":{ romaji:"iru", meaning:"to exist"},
"いれる":{ romaji:"ireru", meaning:"to insert, to put in"},
"うたう":{ romaji:"utau", meaning:"to sing"},
"うまれる":{ romaji:"umareru", meaning:"to be born"},
"うる":{ romaji:"uru", meaning:"to sell"},
"おきる":{ romaji:"okiru", meaning:"to get up, to stand up"},
"おく":{ romaji:"oku", meaning:"to put"},
"おくる":{ romaji:"okuru", meaning:"to send"},
"おす":{ romaji:"osu", meaning:"to push"},
"おぼえる":{ romaji:"oboeru", meaning:"to memorize, to remember"},
"およぐ":{ romaji:"oyogu", meaning:"to swim"},
"おりる":{ romaji:"oriru", meaning:"to get off"},
"おわる":{ romaji:"owaru", meaning:"to end"},
"かう":{ romaji:"kau", meaning:"to buy"},
"かえす":{ romaji:"kaesu", meaning:"to return an object"},
"かえる":{ romaji:"kaeru", meaning:"to return home"},
"かかる":{ romaji:"kakaru", meaning:"to take time or money"},
"かく":{ romaji:"kaku", meaning:"to write"},
"かける":{ romaji:"kakeru", meaning:"to wear"},
"かける":{ romaji:"kakeru", meaning:"to make a phone call"},
"かす":{ romaji:"kasu", meaning:"to lend"},
"かぶる":{ romaji:"kaburu", meaning:"to put on a hat"},
"かりる":{ romaji:"kariru", meaning:"to borrow"},
"きえる":{ romaji:"kieru", meaning:"to go out, to vanish"},
"きく":{ romaji:"kiku", meaning:"to listen"},
"きる":{ romaji:"kiru", meaning:"to cut"},
"きる":{ romaji:"kiru", meaning:"to wear, to put on"},
"くる":{ romaji:"kuru", meaning:"to come"},
"けす":{ romaji:"kesu", meaning:"to turn off, to switch off"},
"こたえる":{ romaji:"kotaeru", meaning:"to answer"},
"こまる":{ romaji:"komaru", meaning:"to be in trouble"},
"さく":{ romaji:"saku", meaning:"to blossom"},
"さす":{ romaji:"sasu", meaning:"to open an umbrella"},
"しぬ":{ romaji:"shinu", meaning:"to die, to pass away"},
"しまる":{ romaji:"shimaru", meaning:"to close"},
"しめる":{ romaji:"shimeru", meaning:"to close"},
"しめる":{ romaji:"shimeru", meaning:"to fasten a belt"},
"しる":{ romaji:"shiru", meaning:"to know"},
"すう":{ romaji:"suu", meaning:"to breath, to smoke"},
"すむ":{ romaji:"sumu", meaning:"to live, to reside somewhere"},
"する":{ romaji:"suru", meaning:"to do"},
"すわる":{ romaji:"suwaru", meaning:"to sit"},
"だす":{ romaji:"dasu", meaning:"to take out, hand in"},
"たつ":{ romaji:"tatsu", meaning:"to stand"},
"たのむ":{ romaji:"tanomu", meaning:"to ask, to request"},
"たべる":{ romaji:"taberu", meaning:"to eat"},
"ちがう":{ romaji:"chigau", meaning:"to be different"},
"つかう":{ romaji:"tsukau", meaning:"to use"},
"つかれる":{ romaji:"tsukareru", meaning:"to get tired"},
"つく":{ romaji:"tsuku", meaning:"to arrive"},
"つくる":{ romaji:"tsukuru", meaning:"to make, to produce"},
  
"アベック":{ romaji:"abekku", meaning:"romantic couple"},
"アフターサービス":{ romaji:"afutaa saabisu", meaning:"customer service"},
"アイドル":{ romaji:"aidoru", meaning:"(teen) idol"},
"アイス":{ romaji:"aisu", meaning:"ice"},
"アイスクリーム":{ romaji:"aisukuriimu", meaning:"ice cream"},
"アイゼン":{ romaji:"aizen", meaning:"crampons"},
"アメフト":{ romaji:"amefuto", meaning:"American football"},
"アメリカンドッグ":{ romaji:"amerikandoggu", meaning:"corn dog"},
"アニメ":{ romaji:"anime", meaning:"animation"},
"アニソン":{ romaji:"anison", meaning:"an anime song"},
"アンケート":{ romaji:"ankeeto", meaning:"questionnaire"},
"アンニュイ":{ romaji:"annyui", meaning:"ennui"},
"アンサー":{ romaji:"ansaa", meaning:"reply to a question"},
"アパート":{ romaji:"apaato", meaning:"apartment (US)"},
"アポ":{ romaji:"apo", meaning:"appointment"},
"アロエ":{ romaji:"aroe", meaning:"aloe"},
"アルバイト":{ romaji:"arubaito", meaning:"part-time job"},
"アールブイ":{ romaji:"aarubui", meaning:"truck"},
"アルコール":{ romaji:"arukooru", meaning:"álcool"},
"アウトコース":{ romaji:"autokoosu", meaning:"outside"},
"バーゲン":{ romaji:"baagen", meaning:"a sale at a store"},
"バイキング":{ romaji:"baikingu", meaning:"smorgasbord"},
"バイク":{ romaji:"baiku", meaning:"a motorcycle"},
"バカンス":{ romaji:"bakansu", meaning:"holiday"},
"ブックカバー":{ romaji:"bukkukabaa", meaning:"dust jacket"},
"バックミラー":{ romaji:"bakkumiraa", meaning:"rear-view mirror"},
"バックナンバー":{ romaji:"bakkunanbaa", meaning:"back issue"},
"バックネット":{ romaji:"bakkunetto", meaning:"a backstop (in baseball)"},
"バリアフリー":{ romaji:"bariafurii", meaning:"Accessible facilities for handicapped persons"},
"バリカン":{ romaji:"barikan", meaning:"Hand or electric operating hair trimmer"},
"バター":{ romaji:"bataa", meaning:"butter"},
"バッティング":{ romaji:"battingu", meaning:"Swing the bat in baseball"},
"ベビーカー":{ romaji:"bebiikaa", meaning:"stroller (US)"},
"ベッドタウン":{ romaji:"beddotaun", meaning:"bedroom suburbs"},
"ビー玉":{ romaji:"biidama", meaning:"ball)"},
"ビジネスホテル":{ romaji:"bijinesuhoteru", meaning:"budget hotel"},
"ビロード":{ romaji:"biroodo", meaning:"velvet"},
  

}