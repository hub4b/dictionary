word = "";
device = false;
presscount = 0;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) device = true;

function test(press) {
	if(presscount==press) search();
}

function search() {
	if(word) {
		$("#result").html("<h2>Search results for '"+word+"'</h2><br>Loading, please wait...");
		$.ajax({
			data: { term: word },
			type: "GET", url: "http://www.koutaniemi.com/scripts/translate.php",
			success: function(d) {
				if(!d) $("#result").html("<h2>Search results for '"+word+"'</h2><br>ei tuloksia / ничего не найдено");
				else $("#result").html(d);
			}
		});
	} else $("#result").html("<h2>Search results for '"+word+"'</h2><br>ei tuloksia / ничего не найдено");
}

$(document).ready(function() {
	$('#term').bind('keyup', function(e) {
		if(word!=$('#term').val()) {
			word = $('#term').val();
			$("#result").html("<h2>Search results for '"+word+"'</h2><br>Loading, please wait...");
			setTimeout(test,1000,++presscount);
		}
	});
});