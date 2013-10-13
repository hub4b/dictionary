device = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) device = true;

function search(term) {
	$.ajax({
		type: "POST", url: "http://www.koutaniemi.com/scripts/translate.php",
		success: function(d) {
			if(!d) $("#result").html("ei tuloksia // ничего не найдено");
			else $("#result").html(d);
		}
	});
}

$(document).ready(function() {
	
	$('#term').bind('keypress', function(e) { search($('#term').val()); });
	
	
});