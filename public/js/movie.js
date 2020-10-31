jQuery(function($){
	//Initializing variables
	var $searchField = $("#search"),
		$spinner = $('<div class="spinner centered">'+
			'<div class="rect1"></div>'+
			'<div class="rect2"></div>'+
			'<div class="rect3"></div>'+
			'<div class="rect4"></div>'+
			'<div class="rect5"></div>'+
			'</div>'),
		omdbMovieURL = "http://www.omdbapi.com/?apikey=d907039c=";
	$('form').submit(function(e){
		e.preventDefault();

		
		var movieSearch = $searchField.val(), //Grabbing movie title search
		yearSearch = $('#year').val(),  //Grabbing year searched
		omdbMovieRequest = omdbMovieURL + encodeURIComponent(movieSearch) +"&y="+ encodeURIComponent(yearSearch), //encoding & formulate string
		moviesHTML = "",
		img = "";

		$('#movies').html($spinner);
		//logging the GET request string

		
		//the callback function to be called when ajax receives data
		
		function displayMovies(data) {
			if(data.Response === "True"){
				//Code for if ajax returned with information
				$.each(data.Search, function(i, movies){
					img = '<a href="http://www.imdb.com/title/'+movies.imdbID+
						'/"><img class="movie-poster" src="'+ movies.Poster +'"></a>';
					if(movies.Poster === "N/A"){
						img = '<a href="http://www.imdb.com/title/'+movies.imdbID+
							'/"><i class="material-icons poster-placeholder">crop_original</i></a>';
					}

					moviesHTML += '<li><div class="poster-wrap">';
					moviesHTML += img +
						'</div><span class="movie-title">' + movies.Title +
						'</span><span class="movie-year">' + movies.Year +
						'</span></li>'

				}); // end of each
			}
			//error cases
			else{
				if(data.Error === "Movie not found!"){
					//put error code for no found movies here
					setMoviesOnError("No movies found that match: "+movieSearch+".");
				}
				else if(data.Error === "Something went wrong."){
					//error code for something went wrong.
					setMoviesOnError("An error occurred in processing your request, please try again.");
				}
				else{
					//final statement for errors
					setMoviesOnError("Something unexpected occurred, please try again.");
				}
			}
			$('#movies').html(moviesHTML);
		}

		//invoking the ajax call method to get the json data from the omdb.
		$.getJSON(omdbMovieRequest, displayMovies).fail(
			//this is the callback function to be called when the ajax request fails.
			function(jqXHR){
			setMoviesOnError("An error occurred while connecting with the movie Server, please try to search again.");
			$('#movies').html(moviesHTML);

		}); //end fail function

		
		
		
		 
		function setMoviesOnError(str){
			moviesHTML = " <li class='no-movies centered'>" +
				"<i class='material-icons icon-help'>help_outline</i>"+ str +"</li>";
		}

	}); // end submit function
}); //end jquery function