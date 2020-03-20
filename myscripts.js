var location_season = new Array();
	location_season["frwio"]=300;
	location_season["kelat"]=250;
	location_season["sljes"]=100;
	location_season["grzim"]=400;

	function getLocation() {

		var locSelect = document.getElementById('location');
		return location_season[locSelect.value];
	}

	function getNumberofdays() {

	var start_date = Date.parse(document.getElementById('start_date').value);
	var end_date = Date.parse(document.getElementById('end_date').value);

	var result = Math.round((end_date-start_date)/86400000);

	return result;

	}

	function getNumberofpeople() {
		var numpeople = parseInt(document.getElementById('people').value)

		if (numpeople == 1)
		var paymentforpeople = 0;
		else
		var paymentforpeople = (numpeople-1) * 65;

		return paymentforpeople;
	}

	function costs() {

		var start_date = Date.parse(document.getElementById('start_date').value);
		var end_date = Date.parse(document.getElementById('end_date').value);
		var location = document.getElementById('location');

		var totalcosts = getLocation() * getNumberofdays() + getNumberofpeople() * getNumberofdays() ;
		var valid = document.getElementById('price');
		var dzis = Date.parse(new Date());
		var wczoraj = dzis - 86400000;

		if (location.value == ""){
			document.getElementById('price').innerHTML = "Proszę wybrać kierunek podróży";
			valid.style.display = "block";
		}
		else if (start_date <= wczoraj){
				document.getElementById('price').innerHTML = "Data początkowa jest błędna!";
				valid.style.display = "block";
		}
		else if (end_date <= start_date){
				document.getElementById('price').innerHTML = "Wybierz poprawne daty podróży!";
				valid.style.display = "block";
		}
		else {
			document.getElementById('price').innerHTML = "Twoje przybliżone koszty:&nbsp;<strong>" + totalcosts + "&nbsp;zł</strong>";
				valid.style.display = "block";	
		}	
	}

	function getDate() {
		document.getElementById("start_date").valueAsDate = new Date();

		var start_date = Date.parse(document.getElementById('start_date').value);
		var sd = start_date + 86400000;

		document.getElementById("end_date").valueAsDate = new Date(sd);
	}

	function validation() {

		var fullname = document.getElementById('fullname');
		var email = document.getElementById('email');
		var content = document.getElementById('content');
		var location = document.getElementById('location');
		var start_date = Date.parse(document.getElementById('start_date').value);
		var end_date = Date.parse(document.getElementById('end_date').value);

		var error = document.getElementById('error');

		if (fullname.value == "") {
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>imienia i nazwiska</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (email.value == ""){
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>adresu e-mail</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (content.value == ""){
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>treści zgłoszenia</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (location.value == ""){
			document.getElementById('error').innerHTML = "Nie wybrałeś/aś <strong>destynacji</strong>!";
			error.style.display = "block";
			return false;
		}
		else {
			document.getElementById('error').innerHTML = "<strong>Twoje zgłoszenie wysłano!</strong>";
			error.style.display = "block";
			error.style.color = "green";
			return true;
		}

	}
	function validationcontact() {

		var fullname = document.getElementById('fullname');
		var email = document.getElementById('email');
		var title = document.getElementById('title');
		var content = document.getElementById('content');

		var error = document.getElementById('error');

		if (fullname.value == "") {
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>imienia i nazwiska</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (email.value == ""){
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>adresu e-mail</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (title.value == ""){
			document.getElementById('error').innerHTML = "Nie wybrałeś/aś <strong>tytułu wiadomości</strong>!";
			error.style.display = "block";
			return false;
		}
		else if (content.value == ""){
			document.getElementById('error').innerHTML = "Nie podałeś/aś <strong>treści wiadomości</strong>!";
			error.style.display = "block";
			return false;
		}
		
		else {
			document.getElementById('error').innerHTML = "<strong>Twoją wiadomość wysłano!</strong>";
			error.style.display = "block";
			error.style.color = "green";
			return true;
		}

	}
	window.onload = function() {
		getDate();
	};