	 var totalOfArticles = 8;
	 var lastExistingPage = 3;
	 
	 var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
	 var listPage;
	 
	 function listPreload(sideOrNot)
	 {

		var $div;
		$div = $('<div>');
		$div.load("list.html", function(){
		listPage = $($div).html();
		if(sideOrNot !== "noSide")
		{
			loadArticles(1,'_side');
		}
		loadArticles(1,'');
		});
	 }
	 
	 function loadArticles(page, noneORside)
	 {
	 	document.getElementById("artCont1"+noneORside).style.display = "block";
	 	document.getElementById("artCont2"+noneORside).style.display = "block";
		document.getElementById("artCont3"+noneORside).style.display = "block";
		var postedArticles =  3*(page - 1);
		
			var startChar1 = listPage.indexOf("##h" + (totalOfArticles - postedArticles)) + 4;		
			var endChar1 = listPage.indexOf("h" + (totalOfArticles - postedArticles) + "##");
			var header1 = listPage.substring(startChar1, endChar1);
			$("#artHeader1"+noneORside).html(header1);

			var startChar1_t = listPage.indexOf("##text" + (totalOfArticles - postedArticles)) + 7;
			var endChar1_t = listPage.indexOf("text" + (totalOfArticles - postedArticles) + "##");
			var text1 = listPage.substring(startChar1_t, endChar1_t);
			$("#artText1"+noneORside).html(text1);
			
			document.getElementById("artPic1"+noneORside).src = "art/art" + (totalOfArticles - postedArticles) + "_s.jpg";
			document.getElementById("artHref1"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artPicHref1"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artHeader1"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			postedArticles++;
			
			if ((totalOfArticles - postedArticles) == 0)
			{
				document.getElementById("artCont2"+noneORside).style.display = "none";
				document.getElementById("artCont3"+noneORside).style.display = "none";
				return;
			}
			
			var startChar2 = listPage.indexOf("##h" + (totalOfArticles - postedArticles)) + 4;		
			var endChar2 = listPage.indexOf("h" + (totalOfArticles - postedArticles) + "##");
			var header2 = listPage.substring(startChar2, endChar2);
			$("#artHeader2"+noneORside).html(header2);

			var startChar2_t = listPage.indexOf("##text" + (totalOfArticles - postedArticles)) + 7;
			var endChar2_t = listPage.indexOf("text" + (totalOfArticles - postedArticles) + "##");
			var text2 = listPage.substring(startChar2_t, endChar2_t);
			$("#artText2"+noneORside).html(text2);
			
			document.getElementById("artPic2"+noneORside).src = "art/art" + (totalOfArticles - postedArticles) + "_s.jpg";
			document.getElementById("artHref2"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artPicHref2"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artHeader2"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			postedArticles++;

			
			if ((totalOfArticles - postedArticles) == 0)
			{
				document.getElementById("artCont3"+noneORside).style.display = "none";
				return;
			}
			
			var startChar3 = listPage.indexOf("##h" + (totalOfArticles - postedArticles)) + 4;		
			var endChar3 = listPage.indexOf("h" + (totalOfArticles - postedArticles) + "##");
			var header3 = listPage.substring(startChar3, endChar3);
			$("#artHeader3"+noneORside).html(header3);

			var startChar3_t = listPage.indexOf("##text" + (totalOfArticles - postedArticles)) + 7;
			var endChar3_t = listPage.indexOf("text" + (totalOfArticles - postedArticles) + "##");
			var text3 = listPage.substring(startChar3_t, endChar3_t);
			$("#artText3"+noneORside).html(text3);
			
			document.getElementById("artPic3"+noneORside).src = "art/art" + (totalOfArticles - postedArticles) + "_s.jpg";
			document.getElementById("artHref3"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artPicHref3"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";
			document.getElementById("artHeader3"+noneORside).href = "art" + (totalOfArticles - postedArticles) + ".html";

	 }

	 function makeActive(pageNumber)
	 {
	 	var p = document.getElementsByClassName("pageLinks");
		for (var i = 0; i < p.length; i++) {
			if(p[i].className.length > 9) p[i].className = "pageLinks";
		}
		document.getElementById("link" + pageNumber).className = "pageLinks active";
		loadArticles(pageNumber, '');
		var articleRegEx = /art\d.html/;
		if(lastPathSegment == "index.html" || articleRegEx.test(lastPathSegment) || lastPathSegment == "") 
		{
			document.getElementById("link" + pageNumber + "_side").className = "pageLinks active";
			loadArticles(pageNumber, '_side');
		}
		
	 }

	 
function scaleMonth(monthNumber)
{
	var scaleIndex = 1.14;
	var z = 600;
	document.getElementById('month' + monthNumber).style.transform = "scale( " + (scaleIndex+0.03) + ", " + scaleIndex + ")";
	document.getElementById('month' + monthNumber).style.webkitTransform = "scale( " + (scaleIndex+0.03) + ", " + scaleIndex + ")";
	document.getElementById('month' + monthNumber).style.MozTransform = "scale( " + (scaleIndex+0.03) + ", " + scaleIndex + ")";
	document.getElementById('month' + monthNumber).style.msTransform = "scale( " + (scaleIndex+0.03) + ", " + scaleIndex + ")";
	document.getElementById('month' + monthNumber).style.oTransform = "scale( " + (scaleIndex+0.03) + ", " + scaleIndex + ")";
	document.getElementById('month' + monthNumber).style.zIndex = z;
	scaleNext(monthNumber);
}

function scalePrevious(monthNumber){
	var currentMonthNumber = parseInt(monthNumber);
	var scaleIndex = 1.14;
	var z = 600;
	var trans = 0.25;
		for (var i = currentMonthNumber-1; i > 0; i--)
			{
				scaleIndex = scaleIndex - 0.05;
				z = z - 100;
				trans = trans + 0.3;
				document.getElementById('month' + i).style.transform = "scale(" + (scaleIndex+0.05) + "," + scaleIndex + ")";
				document.getElementById('month' + i).style.zIndex = z;
				document.getElementById('month' + i).style.transition = trans + "s";			
			}
	}
	
function scaleNext(monthNumber){
	var currentMonthNumber = parseInt(monthNumber);
	var scaleIndex = 1.14;
	var z = 600;
	var trans = 0.25;
		for (var i = currentMonthNumber+1; i < 6; i++)
			{
				scaleIndex = scaleIndex - 0.05;
				z = z - 100;
				trans = trans + 0.3;
				document.getElementById('month' + i).style.transform = "scale(" + (scaleIndex+0.05) + "," + scaleIndex + ")";
				document.getElementById('month' + i).style.zIndex = z;
				document.getElementById('month' + i).style.transition = trans + "s";			
			}
		scalePrevious(monthNumber);
	}
function callBackAll()
{
	document.getElementById('month3').style.transform = "scale(1.17,1.14)";
	document.getElementById('month2').style.transform = "scale(1.14,1.09)";
	document.getElementById('month4').style.transform = "scale(1.14,1.09)";
	document.getElementById('month1').style.transform = "scale(1.09,1.04)";
	document.getElementById('month5').style.transform = "scale(1.09,1.04)";
	document.getElementById('month3').style.zIndex = "600";
	document.getElementById('month2').style.zIndex = "500";
	document.getElementById('month4').style.zIndex = "500";
	document.getElementById('month1').style.zIndex = "400";
	document.getElementById('month5').style.zIndex = "400";
}

function letArrowsWork()
{
	$( ".nextPage" ).click(function() {
	var currentPage;
	var appendix;
	
	if(lastPathSegment == "index.html")
	{
		if ($('#sidebar').css('display') == "none")
		{
			appendix = "";
		}
		else
		{
			appendix = "_side";
		}
	}
	else
	{
			appendix = "";
	}
	
	for (var i = 1; i <= lastExistingPage; i++) {
		if (document.getElementById("link" + i + appendix).className == "pageLinks active")
		{
			currentPage = i;
			break;
		}
	}
		if (currentPage == lastExistingPage)
		{
			return;
		}
		else
		{
			var next = currentPage + 1;
			makeActive(next);
		}

	  
	});
	
	$( ".prevPage" ).click(function() {
	var currentPage;
	var appendix;
	
	if(lastPathSegment == "index.html")
	{
		if ($('#sidebar').css('display') == "none")
		{
			appendix = "";
		}
		else
		{
			appendix = "_side";
		}
	}
	else
	{
			appendix = "";
	}
	
	for (var i = 1; i <= lastExistingPage; i++) {
		if (document.getElementById("link" + i + appendix).className == "pageLinks active")
		{
			currentPage = i;
			break;
		}
	}
		if (currentPage == 1)
		{
			return;
		}
		else
		{
			var prev = currentPage - 1;
			makeActive(prev);
		}

	
	});
}
	function sendForm(type)
	{
		var errors = 0;
		var captchaValue = document.getElementById('numberInput').value;
		var emailValue = document.getElementById('email').value;
		var nameValue = document.getElementById('name').value;
		var messageValue = document.getElementById('message').value;
		var checkInValue = document.getElementById('inp1').value;
		var checkOutValue = document.getElementById('inp2').value;
		var adultsValue = document.getElementById('inp3').value;
		var childValue = document.getElementById('inp4').value;
		
		document.getElementById("success").style.display="none";
		var warnings = document.getElementsByClassName("warnings");
		for (var i = 0; i < warnings.length; i++) 
		{
			warnings[i].style.display="none";
		}
		
		if(captchaValue != needed)
		{
			document.getElementById("wrongCaptcha").style.display="block";
			errors++;
		}
		
		var reMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(emailValue);
		if(reMail == false)
		{
			document.getElementById("wrongEmail").style.display="block";
			errors++;
		}
		
		if(nameValue == "")
		{
			document.getElementById("wrongName").style.display="block";
			errors++;
		}
		
		if((type == 1) && (messageValue == ""))
		{
			document.getElementById("wrongMessage").style.display="block";
			errors++;
		}
		
	if(type == 2){
		var reDateIn = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(checkInValue);
		var reDateOut = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/.test(checkOutValue);

		if((checkInValue == false) || (checkOutValue == false))
		{
			document.getElementById("wrongDateFormat").style.display="block";
			errors++;
		}
		
		var dd1 = checkInValue.substring(0, 2);
		var dd2 = checkOutValue.substring(0, 2);
		var mm1 = checkInValue.substring(3, 5);
		var mm2 = checkOutValue.substring(3, 5);
		var yy1 = checkInValue.substring(6, 10);
		var yy2 = checkOutValue.substring(6, 10);
		if(yy2 < yy1)
		{
			errors++;
			document.getElementById("wrongDateOrder").style.display="block";
		}
		else
		{
			if(mm2 < mm1)
			{
				errors++;
				document.getElementById("wrongDateOrder").style.display="block";
			}
			if(mm1 == mm2)
			{
				if(dd2 <= dd1)
				{
					errors++;
					document.getElementById("wrongDateOrder").style.display="block";
				}
			}
		}
		
	}
	
	
		var reAdults = /^[0-9]*$/.test(adultsValue);
		var reChild = /^[0-9]*$/.test(childValue);
		
		if((reAdults == false) || (reChild == false))
		{
			alert(99);
			document.getElementById("wrongPeople").style.display="block";
			error++;
		}
		else
		{
			if(adultsValue <= 0)
			{
				document.getElementById("wrongAdults").style.display="block";
				error++;
			}
		}

		if(errors > 0) return;
		
		if(type == 1)
		{
			$.ajax({
			url: "//formspree.io/bilokrynytska@ukr.net", 
			method: "POST",
			data: {message: "E-Mail: " + emailValue + "\n" + "Имя: " + nameValue + "\n" + "Сообщение: " + messageValue},
			dataType: "json"
			});
			document.getElementById("success").style.display="block";
			document.getElementById("toHide").style.display="none";
		}
		if(type == 2)
		{
			$.ajax({
			url: "//formspree.io/bilokrynytska@ukr.net", 
			method: "POST",
			data: {message: "Заезд: " + checkInValue  + "\n" + "Выезд: " + checkOutValue  + "\n" +  "Взрослые: " + adultsValue  + "\n" +  "Дети до 7 лет:" + childValue  + "\n" +  "E-Mail: " + emailValue + "\n" + "Имя: " + nameValue + "\n" + "Сообщение: " + messageValue},
			dataType: "json"
			});
			document.getElementById("success").style.display="block";
			document.getElementById("toHide").style.display="none";
		}
		//document.contactform.submit();
 	}
	
function openQuery()
{
	document.getElementById("overlay").style.display="block";
	document.getElementById("query").style.display="block";
	var body = document.body;
	var html = document.documentElement;
	var x = Math.max(body.scrollHeight, body.clientHeight, html.scrollHeight, html.clientHeight);
	document.getElementById("overlay").style.height = x + "px";
}
function closeQuery()
{
	document.getElementById("query").style.display="none";
	document.getElementById("overlay").style.display="none";
			var warnings = document.getElementsByClassName("warnings");
		for (var i = 0; i < warnings.length; i++) 
		{
			warnings[i].style.display="none";
		}
}


var activePicker;
var inactivePicker;
function setPicker(id)
{
	activePicker = id;
	if(activePicker=="picker1"){inactivePicker="picker2";}
	else{inactivePicker="picker1"}
	
	document.getElementById(inactivePicker).style.color = "grey";
	document.getElementById(inactivePicker).style.transform = "scale(1)";
	document.getElementById(activePicker).style.color = "#11AA11";
	document.getElementById(activePicker).style.transform = "scale(1.6)";
}

	

	
	
	
	
	
	
	




