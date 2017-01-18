(function() {

//var theImages = document.querySelectorAll('.image-holder'),
//	theHeading = document.querySelector('.heading'),
//    theSubhead = document.querySelector('.main-copy h2'),
//    theSeasonText = document.querySelector('.main-copy p'),
//    appliedClass;
//grab all the images, the heading, the subheading, the season text, appliedClass

var $theImages = $('.image-holder'),
	$theHeading = $('.heading'),
	$theSubhead = $('.main-copy h2'),
	$SeasonText = $('.main-copy p'),
	appliedClass;


	function changeElements() {

		$theHeading.removeClass(appliedClass);
		$theSubhead.removeClass(appliedClass);

		//$theHeading.classList.remove(appliedClass);
		//$theSubhead.classList.remove(appliedClass);

		appliedClass = this.id;

		//$theHeading.classList.add(this.id);
		//$theSubhead.classList.add(this.id);

		$theHeading.addClass(this.id);
		$theSubhead.addClass(this.id);

		//$theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
		//$theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		$theSubhead.text(dynamicContent[event.currentTarget.id].headline);
		$theSeasonText.text(dynamicContent[event.currentTarget.id].text);
	}
	
$theImages.click(function() {
	changeElements();
	//console.log('clicked!');
});

//	[].forEach.call(theImages, function(image) {
//		image.addEventListener('click', changeElements, true);

//	}); //passing the Images, and each function images

		$theSubhead.text(dynamicContent['spring'].headline);
		$theSeasonText.text(dynamicContent['spring'].text);
		$theHeading.addClass('spring');

	//theImages[0]click;
		//$theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
		//$theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
		//$theHeading.classList.add('spring');
})();