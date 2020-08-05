(function bye (window){
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

	// STEP 9: Expose the 'byeSpeaker' object to the global scope.
	window.byeSpeaker = byeSpeaker;

})(window);