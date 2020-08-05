(function hello(window){
	var speakWord = "Hello";
	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
	// Expose the 'helloSpeaker' object to the global scope.
	window.helloSpeaker = helloSpeaker;

})(window);