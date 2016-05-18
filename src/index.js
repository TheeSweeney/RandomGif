
$( document ).ready(function() {



	$("#button").click(function(event){
		$.ajax({
			url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
			context: document.body
		}).done(function(res){
			$('#gif').css({height: res.data.fixed_height_downsampled_height, width: res.data.fixed_height_downsampled_width})
			$('#gif').attr('src', res.data.fixed_height_downsampled_url)
			console.log(res);
		})
	})
});
