answers = ["A", "B", "B", "B", "A", "A", "B", "B"];
$(document).ready(function(){
    $("label").click(function(){
        if(!$(this).hasClass("blocked")){
            rname=$(this).attr("for");
            $("label[for="+rname+"]").addClass("blocked");
            $("label[for="+rname+"] > input").attr("checked",false);
            $(this).children("input").attr("checked",true);
            if( $(this).children("input").attr("value")==answers[(rname.substr(1, 1))-1] ){
                $(this).addClass("green");
            }
            else{
                $(this).addClass("red");
            }
            $(this).children("input").attr("checked",true);
        }
    });
});

// when something with class album-list-cover is clicked, run some code
$('.email-prompt-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var cartoonUrl = $(this).attr('cartoon')
  // log the album cover url to the console
  console.log(cartoonUrl)
  
  // clear the initial text from the div with id album-art
  $('#cartoon-art').empty()
  
  // set the background-image of the div with id album-art to url(...)
  // I use a string literal to concatenate 'url(' + albumCoverUrl + ')'
  
  $('#cartoon-art').css('background-image', `url(${cartoonUrl})`)
})

$("#btn").click(function(){
    $("input[name='correctAnswer']").each(function(){
      if($(this).val() !== "1"){
        $(this).prop("checked", false);
        $(this).addClass('clear');
      }
    });
  });

