	 var totalOfArticles = 7;
	 var lastExistingPage = 3;
	 
	 var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
	 
	 function loadArticles(page, noneORside)
	 {
	 	document.getElementById("artCont1"+noneORside).style.display = "block";
	 	document.getElementById("artCont2"+noneORside).style.display = "block";
		document.getElementById("artCont3"+noneORside).style.display = "block";
		var postedArticles =  3*(page - 1);
		
			var $div;
			$div = $('<div>');
			$div.load("art" + (totalOfArticles - postedArticles) + ".html #header1", function(){
			var withHTML = $($div).html();
			var withoutHTML = $(withHTML).text();
			$("#artHeader1"+noneORside).html(withoutHTML);
			});
			var $div_t;
			$div_t = $('<div>');
			$div_t.load("art" + (totalOfArticles - postedArticles) + ".html #text1", function(){
			var withHTML = $($div_t).html();
			var withoutHTML = $(withHTML).text();
			$("#artText1"+noneORside).html(withoutHTML);
			});
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
			var $div2;
			$div2 = $('<div>');
			$div2.load("art" + (totalOfArticles - postedArticles) + ".html #header1", function(){
			var withHTML = $($div2).html();
			var withoutHTML = $(withHTML).text();
			$("#artHeader2"+noneORside).html(withoutHTML);
			});
			var $div2_t;
			$div2_t = $('<div>');
			$div2_t.load("art" + (totalOfArticles - postedArticles) + ".html #text1", function(){
			var withHTML = $($div2_t).html();
			var withoutHTML = $(withHTML).text();
			$("#artText2"+noneORside).html(withoutHTML);
			});
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
			var $div3;
			$div3 = $('<div>');
			$div3.load("art" + (totalOfArticles - postedArticles) + ".html #header1", function(){
			var withHTML = $($div3).html();
			var withoutHTML = $(withHTML).text();
			$("#artHeader3"+noneORside).html(withoutHTML);
			});
			var $div3_t;
			$div3_t = $('<div>');
			$div3_t.load("art" + (totalOfArticles - postedArticles) + ".html #text1", function(){
			var withHTML = $($div3_t).html();
			var withoutHTML = $(withHTML).text();
			$("#artText3"+noneORside).html(withoutHTML);
			});
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
	function sendForm()
	{
		var captchaValue = document.getElementById('numberInput').value;
		var emailValue = document.getElementById('email').value;
		var nameValue = document.getElementById('name').value;
		var messageValue = document.getElementById('message').value;
		
		document.getElementById("success").style.display="none";
		var warnings = document.getElementsByClassName("warnings");
		for (var i = 0; i < warnings.length; i++) 
		{
			warnings[i].style.display="none";
		}
		
		if(captchaValue != needed)
		{
			document.getElementById("wrongCaptcha").style.display="block";
		}
		
		var reMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(emailValue);
		if(reMail == false)
		{
			document.getElementById("wrongEmail").style.display="block";
		}
		
		if(nameValue == "")
		{
			document.getElementById("wrongName").style.display="block";
		}
		
		if(messageValue == "")
		{
			document.getElementById("wrongMessage").style.display="block";
		}
		
		if(captchaValue != needed || reMail == false || nameValue == "" || messageValue == "") return;
		
		//document.getElementById('myForm').action="http://formspree.io/bilokrynytska@ukr.net";
		 $.ajax({
        url: "//formspree.io/bilokrynytska@ukr.net", 
        method: "POST",
        data: {message: "E-Mail: " + emailValue + "\n" + "Имя: " + nameValue + "\n" + "Сообщение: " + messageValue},
        dataType: "json"
		});
		document.getElementById("success").style.display="block";
		document.getElementById("toHide").style.display="none";
		//document.contactform.submit();
 	}
	





