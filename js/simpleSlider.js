/*
 * jQuery Slider Plugin
 * Version : 
 * author  :
 * website :
 * Date    :
 
 * NOTE : "jQuery v2.0.2 used while developing"
*/

(function($){
	//console.log(jQuery(document));	
	$.fn.simpleSlider = function(){
			
			var slider = $(this); //sldier container
			var sliderChildren = slider.children();
			var	slideCount = slider.children().length; //count for slides
		    var slideArray = new Array(slideCount); //array to store image src		
			var currentSlide;
			slideArray = [sliderChildren];
			//console.log(slider.children().length);
			//console.log(slideArray);
			console.log(slideArray);
			
			
			//*Slider Initiolization strats ----
			// Contain default settings
			function setHeight(){
				var windowHeight = $(window).height(); 
				slider.height(windowHeight);
				}
			
			var initSlider = function(){
					//make the slier empty
					slider.html('');
					
					//set height to slider
					setHeight();
										
                    //fill the slider 										
					for (var i = 0 ; i < slideCount ; i++)
					{
						slideArray[i] = sliderChildren[i];						
						slider.append("<div class=\"slide slide"+i+"\">");											
						console.log(slideArray[i]);
						
					}//for ends	
					//load only one image at first time 
					slider.find(".slide0")
						.append(slideArray[0])
						.addClass('activeSlide');
					currentSlide = 0;					
				}//initialization ends
		    			
			//append next prev buttons
			var navButtons = function(){
					//append buttons					
					slider.append("<div class='nav-buttons'><a class='nxt-btn'>NEXT</a><a class='prev-btn'>PREV</a>")
				}//nav buttons
				
			//wondows resize : get auto height for slider
			$(window).resize(function(){
				setHeight();
				});
				
							
			initSlider();
			navButtons();	
			console.log(slider.find('.activeSlide'));	
			console.log(slideArray);
			console.log($("slide.slide1.activeSlide"));
			//*Slider Initiolization ends ----
			
			function nextSlide(){
				
				slider.find(".activeSlide")			
					.fadeOut(1000)
					.removeClass('activeSlide');
				currentSlide++;
				//slider.find('.active').fadeIn(500);					
				if(currentSlide >= slideCount)
				{
					currentSlide = 0;
				}
				console.log(currentSlide);
				
				
				slider.find(".slide"+currentSlide+"")
						.append(slideArray[currentSlide])
						.fadeIn(1000)
						.addClass('activeSlide');
			}//next slide ends
		
		
			function prevSlide(){
				
				slider.find(".activeSlide")			
					.fadeOut(1000)
					.removeClass('activeSlide');
				currentSlide--;
				//slider.find('.active').fadeIn(500);					
				if(currentSlide < 0)
				{
					currentSlide = slideCount-1;
				}
				console.log(currentSlide);
				
				
				slider.find(".slide"+currentSlide+"")
						.append(slideArray[currentSlide])
						.fadeIn(1000)
						.addClass('activeSlide');
			}//next slide ends
		
			//next button click
			$('.nxt-btn').click(function(){
				nextSlide();
				
				});
			
			//prev button click
			$('.prev-btn').click(function(){
				prevSlide();
				
				});
		};	
	})(jQuery);

