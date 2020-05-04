

 (function(window){
  
  var hellospeaker = {};
   hellospeaker.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var byespeaker = {};

for (var i = 0; i < hellospeaker.name.length; i++) {

  
  var firstLetter = hellospeaker.name[i].charAt(0).toLowerCase();

  
  if (firstLetter == 'j') 
  {
    speak(hellospeaker.name[i]);
  } 
  else
  {
    SpReak(hellospeaker.name[i]);
  }
}
 window.hellospeaker = hellospeaker;
 window.byespeaker = byespeaker;

})(window);