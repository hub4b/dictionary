device = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) device = true;

function search(term) {
	$.ajax({
		data: { term: term },
		type: "POST", url: "http://www.koutaniemi.com/scripts/translate.php",
		success: function(d) {
			if(!d) $("#result").html("<center>ei tuloksia / ничего не найдено</center>");
			else $("#result").html(d);
		}
	});
}

$(document).ready(function() {
	
	$('#term').bind('keyup', function(e) { search($('#term').val()); });
	
	
});