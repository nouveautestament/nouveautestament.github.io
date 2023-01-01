



book = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1 CORINTHIENS',
8:'2 CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1 THESSALONICIENS',
14:'2 THESSALONICIENS',
15:'1 TIMOTHEE',
16:'2 TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1 PIERRE',
22:'2 PIERRE',
23:'1 JEAN',
24:'2 JEAN',
25:'3 JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}

xbook = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1CORINTHIENS',
8:'2CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1THESSALONICIENS',
14:'2THESSALONICIENS',
15:'1TIMOTHEE',
16:'2TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1PIERRE',
22:'2PIERRE',
23:'1JEAN',
24:'2JEAN',
25:'3JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}

booknb = {
'MATTHIEU':1,
'MARC':2,
'LUC':3,
'JEAN':4,
'ACTES':5,
'ROMAINS':6,
'1CORINTHIENS':7,
'2CORINTHIENS':8,
'GALATES':9,
'EPHESIENS':10,
'PHILIPPIENS':11,
'COLOSSIENS':12,
'1THESSALONICIENS':13,
'2THESSALONICIENS':14,
'1TIMOTHEE':15,
'2TIMOTHEE':16,
'TITE':17,
'PHILEMON':18,
'HEBREUX':19,
'JACQUES':20,
'1PIERRE':21,
'2PIERRE':22,
'1JEAN':23,
'2JEAN':24,
'3JEAN':25,
'JUDAS':26,
'APOCALYPSE':27,
}



intro =
`<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>HELLENE</title>

		<script src='panzoom.min.js'></script>
		<script src='sinaiticus.js'></script>
		<script src='alexandrinus.js'></script>
		<script src='vaticanus.js'></script>
		<script src='ephraemi_rescriptus.js'></script>
		<script src='bezae.js'></script>
		<script src='washingtonianus.js'></script>

		<style>
			html {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
			}
			
			
			body {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
				
				font-family:		sans-serif;
			}
			
			a {
				
				color:				black;
				text-decoration:	none;
			}

			a:hover {
				
				text-decoration:	underline;
			}
			
			table {
				
				margin-top:			3px;
				font-size:			13px;
			}

			table td {
				
				padding-right:		15px;
			}
			
			table tr:nth-child(even) {
				
				background: #eee;
			}
			
			table tr:hover {
				
				background: #ccc;
				
			}
			
			
			#left {
				
				margin:0;
				padding:0;
				
				width:100%;
				height:100%;
				
				float:left;
				overflow: auto;
			
			}
			
			
			#right {
				
				margin:0;
				padding:0;
				
				width:0%;
				height:100%;
				
				float:left;
				overflow: hidden;
			}

			

			#inleft {
				
				padding:5px;
			}

			
			img {
				
				border: 2px dashed rgba(28,110,164,0.32);
				border-radius: 14px;
			}
			
			.sinaiticus, .alexandrinus, .vaticanus, .ephraemi_rescriptus, .bezae, .washingtonianus, .westcott_hort, .tischendorf {
			
				cursor:	pointer;
				color:	blue;
			}
			
			#banniere {
			
				margin:0px;
				padding:0px;
				
				color:white;
				background-color:#172028;
				
				
				
				/*white-space:nowrap;*/
				/*display: flex;*/
			}
		
			.blocban {
				
				margin:0px;
				padding:10px;
				
				display:inline-block;
				
				font-size:0.9em;
				color:white;
				text-decoration:none;
			}
			
			
			.blocban:hover {
				
				text-decoration:none;
				background-color:#3f4346;
			}

			rtxt {
				color: green;
			}
			
			wits {
				color: red;
			}
			
			table b {
				display: block;
				color: orange;
				margin-bottom: 3px;
			}
		</style>
	</head>

<body>

<div id="left">
<div id="banniere"><!--
	--><span class="blocban">Ȼ</span><!--
	--><a class="blocban" href="../../index.html">INDEX</a><!--
	--><a class="blocban" href="../../nd/nd.html">ND</a><!--
	--><a class="blocban" href="../hellene/1-1.html">HELLENE</a><!--
	--><a class="blocban" href="../romain/1-1.html">ROMAIN</a><!--
	--><a class="blocban" href="../francais/1-1.html">FRANCAIS</a><!--
	--><a class="blocban" href="../technique/1-1.html">TECHNIQUE</a><!--
	--><a class="blocban" href="../../lemme/lemmes.html">LEMME</a><!--
	--><a class="blocban" href="../../lemme/conflits.html">CONFLIT</a><!--
	--><a class="blocban" href="../../dictionnaire/index.html">BAILLY</a><!--
	--><a class="blocban" href="../../minidico/dictionnaire.html">MINIDICO</a><!--
	--><a class="blocban" href="../../guematrie/index.html">GUÉMATRIE</a><!--
	--><a class="blocban" href="https://github.com/nouveautestament/">CODE</a>
</div>
<div id="inleft">

<p><a href="1-1.html">MATTHIEU</a>&ensp;<a href="2-1.html">MARC</a>&ensp;<a href="3-1.html">LUC</a>&ensp;<a href="4-1.html">JEAN</a>&ensp;<a href="5-1.html">ACTES</a>&ensp;</p>

<p><a href="6-1.html">ROMAINS</a>&ensp;<a href="7-1.html">1CORINTHIENS</a>&ensp;<a href="8-1.html">2CORINTHIENS</a>&ensp;<a href="9-1.html">GALATES</a>&ensp;<a href="10-1.html">EPHESIENS</a>&ensp;<a href="11-1.html">PHILIPPIENS</a>&ensp;<a href="12-1.html">COLOSSIENS</a>&ensp;</p>

<p><a href="13-1.html">1THESSALONICIENS</a>&ensp;<a href="14-1.html">2THESSALONICIENS</a>&ensp;<a href="15-1.html">1TIMOTHEE</a>&ensp;<a href="16-1.html">2TIMOTHEE</a>&ensp;<a href="17-1.html">TITE</a>&ensp;<a href="18-1.html">PHILEMON</a>&ensp;<a href="19-1.html">HEBREUX</a>&ensp;</p>

<p><a href="20-1.html">JACQUES</a>&ensp;<a href="21-1.html">1PIERRE</a>&ensp;<a href="22-1.html">2PIERRE</a>&ensp;<a href="23-1.html">1JEAN</a>&ensp;<a href="24-1.html">2JEAN</a>&ensp;<a href="25-1.html">3JEAN</a>&ensp;<a href="26-1.html">JUDAS</a>&ensp;<a href="27-1.html">APOCALYPSE</a></p><br>`;




end = `
</tbody></table>
<br>
</div></div>

<div id="right">
	<div id="inright">
		<img onload="loader();" id="box" src=""></div>
	</div>
</div>

</body>
<script>



show	= 0;
current	= ""

			
element = document.getElementById('inright')
elempic = document.getElementById('box')

nbmakelc	= 0;
lcarray 	= {}


xbook = {
1:'MATTHIEU',
2:'MARC',
3:'LUC',
4:'JEAN',
5:'ACTES',
6:'ROMAINS',
7:'1CORINTHIENS',
8:'2CORINTHIENS',
9:'GALATES',
10:'EPHESIENS',
11:'PHILIPPIENS',
12:'COLOSSIENS',
13:'1THESSALONICIENS',
14:'2THESSALONICIENS',
15:'1TIMOTHEE',
16:'2TIMOTHEE',
17:'TITE',
18:'PHILEMON',
19:'HEBREUX',
20:'JACQUES',
21:'1PIERRE',
22:'2PIERRE',
23:'1JEAN',
24:'2JEAN',
25:'3JEAN',
26:'JUDAS',
27:'APOCALYPSE'
}


function show_number(link)
{
	classn = link.split('/')[0]
	page = link.match(/[0-9]+/)
	
	boxes = document.querySelectorAll('.bb'); boxes.forEach(box => {box.remove();});
	

	if (classn == "sinaiticus")
	{
		for (b=0 ; b!=sinaiticus.length ; b++)
		{
			splitsin = sinaiticus[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}


	if (classn == "alexandrinus")
	{
		for (b=0 ; b!=alexandrinus.length ; b++)
		{
			splitsin = alexandrinus[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}	
	
	if (classn == "vaticanus")
	{
		for (b=0 ; b!=vaticanus.length ; b++)
		{
			splitsin = vaticanus[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}
	
	
	if (classn == "ephraemi_rescriptus")
	{
		for (b=0 ; b!=ephraemi_rescriptus.length ; b++)
		{
			splitsin = ephraemi_rescriptus[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}
	
	

	if (classn == "bezae")
	{
		for (b=0 ; b!=bezae.length ; b++)
		{
			splitsin = bezae[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}


	if (classn == "washingtonianus")
	{
		for (b=0 ; b!=washingtonianus.length ; b++)
		{
			splitsin = washingtonianus[b].split(':')
			if (splitsin[3] == page)
			{
				//console.log(splitsin)
				putn = document.createElement('div')
				putn.className = "bb"
				putn.textContent = xbook[splitsin[0]]+' '+splitsin[1]+' '+splitsin[2];
				putn.style.cssText = \`	position: absolute;
										left:	\`+splitsin[4]+\`px;
										top:	\`+splitsin[5]+\`px;
										padding: 10px;
										color:white;
										font-size: 45px;
										display: inline-block;
										white-space: nowrap;
										background: rgba(78, 78, 78,.7);\`
				putn.setAttribute("onmouseover", "this.style.opacity=0;");						
				putn.setAttribute("onmouseout", "this.style.opacity=1;");						
										
				document.getElementById('inright').appendChild(putn)
			}
		}
	}	
	
	
}

		


function view(link)
{

	//clean
	document.getElementById('box').src = ""

	
	//get info
	classn = link.split('/')[0]
	page = link.match(/[0-9]+/)
	
	if (classn != current)
	{
		
		show_number(link)
		
		
		
		
		if (current != "")
		{
			//CLOSE
			for (xnc = 0 ; xnc != document.getElementsByClassName(current).length ; xnc++ )
			{
				document.getElementsByClassName(current)[xnc].innerHTML = current.toUpperCase()
			}
		}
		
		//OPEN
		for (xnc = 0 ; xnc != document.getElementsByClassName(classn).length ; xnc++ )
		{
			document.getElementsByClassName(classn)[xnc].innerHTML = " [  ECHAP "+classn.toUpperCase()+" ]"
		}
		
		document.getElementById('left').style.width = "50%";
		document.getElementById('right').style.width = "50%";
		
		document.getElementById('box').src = '../../'+link;
		
		current = classn;
		show = 1;
		
		//resize
		//pvx = document.getElementById('inright').offsetWidth/document.getElementById('box').offsetWidth
		//panzoom(element).zoomAbs(0,0,0.1);
		
	}
	
	else if (classn == current)
	{
		
		//CLOSE
		for (xnc = 0 ; xnc != document.getElementsByClassName(classn).length ; xnc++ )
		{
			document.getElementsByClassName(classn)[xnc].innerHTML = classn.toUpperCase()
		}
		
		document.getElementById('left').style.width = "100%";
		document.getElementById('right').style.width = "0%";
		show = 0;
		
		current = "";
	
	}

	window.location = (""+window.location).replace(/#.*?$/,'')+"#V"+eimiv;
}




instance = panzoom(element, 
	{
		maxZoom: 100,
		minZoom: 0.01,
		initialX: 0,
		initialY: 0,
		initialZoom: 0.2,
		filterKey: function() 
		{
			return true;
		}
	});



function loader()
{
	
	pvx=document.getElementById('inright').offsetWidth/document.getElementById('box').offsetWidth;
	instance.dispose()
	
	instance = panzoom(element, 
	{
		maxZoom: 100,
		minZoom: 0.01,
		initialX: 0,
		initialY: 0,
		initialZoom: pvx,
		filterKey: function() 
		{
			return true;
		}
	});
	

	
}






document.onkeydown = checkKey;

function checkKey(e) 
{

	if (elempic.getAttribute("src") != "")
	{

		pic = elempic.src.match(/([0-9]+).jpg/)[1]

		e = e || window.event;

		//console.log(e.keyCode)
		
		if (e.keyCode == '27') {
			
			if (elempic.src.indexOf('sinaiticus') != -1)
				view('sinaiticus')
			
			else if (elempic.src.indexOf('alexandrinus') != -1)
				view('alexandrinus')
			
			else if (elempic.src.indexOf('vaticanus') != -1)
				view('vaticanus')
			
			else if (elempic.src.indexOf('ephraemi_rescriptus') != -1)
				view('ephraemi_rescriptus')

			else if (elempic.src.indexOf('bezae') != -1)
				view('bezae')

			else if (elempic.src.indexOf('washingtonianus') != -1)
				view('washingtonianus')
			
			else if (elempic.src.indexOf('westcott_hort') != -1)
				view('westcott_hort')
			
			else if (elempic.src.indexOf('tischendorf') != -1)
				view('tischendorf')
			
			
		}
		
		
		//else if (e.keyCode == '38') {document.getElementById('left').scrollTop = 0;}
		
		//else if (e.keyCode == '40') {document.getElementById('left').scrollTop = 999999;}

		
		else if (e.keyCode == '37') {
			
			if (pic > 0)
			{
					pic--
				
				
				if (elempic.src.indexOf('sinaiticus') != -1)
				{
					elempic.src = "../../sinaiticus/"+pic+".jpg";
					show_number("sinaiticus/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('alexandrinus') != -1)
				{
					elempic.src = "../../alexandrinus/"+pic+".jpg";
					show_number("alexandrinus/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('vaticanus') != -1 && pic > 0)
				{
					elempic.src = "../../vaticanus/"+pic+".jpg";
					show_number("vaticanus/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('ephraemi_rescriptus') != -1)
				{
					elempic.src = "../../ephraemi_rescriptus/"+pic+".jpg";
					show_number("ephraemi_rescriptus/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('bezae') != -1)
				{
					elempic.src = "../../bezae/"+pic+".jpg";
					show_number("bezae/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('washingtonianus') != -1 && pic > 0)
				{
					elempic.src = "../../washingtonianus/"+pic+".jpg";
					show_number("washingtonianus/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('westcott_hort') != -1)
				{
					elempic.src = "../../westcott_hort/"+pic+".jpg";
					show_number("westcott_hort/"+pic+".jpg")
				}
				
				else if (elempic.src.indexOf('tischendorf') != -1)
				{
					elempic.src = "../../tischendorf/"+pic+".jpg";
					show_number("tischendorf/"+pic+".jpg")
				}
				
			}
		}
		
		else if (e.keyCode == '39') 
		{
			
			if (elempic.src.indexOf('sinaiticus') != -1)
			{
				if (pic < 296)
					pic++
				
				elempic.src = "../../sinaiticus/"+pic+".jpg";
				show_number("sinaiticus/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('alexandrinus') != -1)
			{
				if (pic < 295)
					pic++
				
				elempic.src = "../../alexandrinus/"+pic+".jpg";
				show_number("alexandrinus/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('vaticanus') != -1)
			{
				if (pic < 295)
					pic++
				
				elempic.src = "../../vaticanus/"+pic+".jpg";
				show_number("vaticanus/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('ephraemi_rescriptus') != -1)
			{
				if (pic < 285)
					pic++
				
				elempic.src = "../../ephraemi_rescriptus/"+pic+".jpg";
				show_number("ephraemi_rescriptus/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('bezae') != -1)
			{
				if (pic < 416)
					pic++
				
				elempic.src = "../../bezae/"+pic+".jpg";
				show_number("bezae/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('washingtonianus') != -1)
			{
				if (pic < 388)
					pic++
				
				elempic.src = "../../washingtonianus/"+pic+".jpg";
				show_number("washingtonianus/"+pic+".jpg")
			}
			
			
			else if (elempic.src.indexOf('westcott_hort') != -1)
			{
				if (pic < 547)
					pic++
				
				elempic.src = "../../westcott_hort/"+pic+".jpg";
				show_number("westcott_hort/"+pic+".jpg")
			}
			
			else if (elempic.src.indexOf('tischendorf') != -1)
			{
				if (pic < 2014)
					pic++
				
				elempic.src = "../../tischendorf/"+pic+".jpg";
				show_number("tischendorf/"+pic+".jpg")
			}
			
		}
		


	}

}






</script>


</html>

`








chbook = {
1:'<a href="1-1.html">CH1</a>&ensp;<a href="1-2.html">CH2</a>&ensp;<a href="1-3.html">CH3</a>&ensp;<a href="1-4.html">CH4</a>&ensp;<a href="1-5.html">CH5</a>&ensp;<a href="1-6.html">CH6</a>&ensp;<a href="1-7.html">CH7</a>&ensp;<a href="1-8.html">CH8</a>&ensp;<a href="1-9.html">CH9</a>&ensp;<a href="1-10.html">CH10</a>&ensp;<a href="1-11.html">CH11</a>&ensp;<a href="1-12.html">CH12</a>&ensp;<a href="1-13.html">CH13</a>&ensp;<a href="1-14.html">CH14</a>&ensp;<a href="1-15.html">CH15</a>&ensp;<a href="1-16.html">CH16</a>&ensp;<a href="1-17.html">CH17</a>&ensp;<a href="1-18.html">CH18</a>&ensp;<a href="1-19.html">CH19</a>&ensp;<a href="1-20.html">CH20</a>&ensp;<a href="1-21.html">CH21</a>&ensp;<a href="1-22.html">CH22</a>&ensp;<a href="1-23.html">CH23</a>&ensp;<a href="1-24.html">CH24</a>&ensp;<a href="1-25.html">CH25</a>&ensp;<a href="1-26.html">CH26</a>&ensp;<a href="1-27.html">CH27</a>&ensp;<a href="1-28.html">CH28</a>&ensp;',
2:'<a href="2-1.html">CH1</a>&ensp;<a href="2-2.html">CH2</a>&ensp;<a href="2-3.html">CH3</a>&ensp;<a href="2-4.html">CH4</a>&ensp;<a href="2-5.html">CH5</a>&ensp;<a href="2-6.html">CH6</a>&ensp;<a href="2-7.html">CH7</a>&ensp;<a href="2-8.html">CH8</a>&ensp;<a href="2-9.html">CH9</a>&ensp;<a href="2-10.html">CH10</a>&ensp;<a href="2-11.html">CH11</a>&ensp;<a href="2-12.html">CH12</a>&ensp;<a href="2-13.html">CH13</a>&ensp;<a href="2-14.html">CH14</a>&ensp;<a href="2-15.html">CH15</a>&ensp;<a href="2-16.html">CH16</a>&ensp;',
3:'<a href="3-1.html">CH1</a>&ensp;<a href="3-2.html">CH2</a>&ensp;<a href="3-3.html">CH3</a>&ensp;<a href="3-4.html">CH4</a>&ensp;<a href="3-5.html">CH5</a>&ensp;<a href="3-6.html">CH6</a>&ensp;<a href="3-7.html">CH7</a>&ensp;<a href="3-8.html">CH8</a>&ensp;<a href="3-9.html">CH9</a>&ensp;<a href="3-10.html">CH10</a>&ensp;<a href="3-11.html">CH11</a>&ensp;<a href="3-12.html">CH12</a>&ensp;<a href="3-13.html">CH13</a>&ensp;<a href="3-14.html">CH14</a>&ensp;<a href="3-15.html">CH15</a>&ensp;<a href="3-16.html">CH16</a>&ensp;<a href="3-17.html">CH17</a>&ensp;<a href="3-18.html">CH18</a>&ensp;<a href="3-19.html">CH19</a>&ensp;<a href="3-20.html">CH20</a>&ensp;<a href="3-21.html">CH21</a>&ensp;<a href="3-22.html">CH22</a>&ensp;<a href="3-23.html">CH23</a>&ensp;<a href="3-24.html">CH24</a>&ensp;',
4:'<a href="4-1.html">CH1</a>&ensp;<a href="4-2.html">CH2</a>&ensp;<a href="4-3.html">CH3</a>&ensp;<a href="4-4.html">CH4</a>&ensp;<a href="4-5.html">CH5</a>&ensp;<a href="4-6.html">CH6</a>&ensp;<a href="4-7.html">CH7</a>&ensp;<a href="4-8.html">CH8</a>&ensp;<a href="4-9.html">CH9</a>&ensp;<a href="4-10.html">CH10</a>&ensp;<a href="4-11.html">CH11</a>&ensp;<a href="4-12.html">CH12</a>&ensp;<a href="4-13.html">CH13</a>&ensp;<a href="4-14.html">CH14</a>&ensp;<a href="4-15.html">CH15</a>&ensp;<a href="4-16.html">CH16</a>&ensp;<a href="4-17.html">CH17</a>&ensp;<a href="4-18.html">CH18</a>&ensp;<a href="4-19.html">CH19</a>&ensp;<a href="4-20.html">CH20</a>&ensp;<a href="4-21.html">CH21</a>&ensp;',
5:'<a href="5-1.html">CH1</a>&ensp;<a href="5-2.html">CH2</a>&ensp;<a href="5-3.html">CH3</a>&ensp;<a href="5-4.html">CH4</a>&ensp;<a href="5-5.html">CH5</a>&ensp;<a href="5-6.html">CH6</a>&ensp;<a href="5-7.html">CH7</a>&ensp;<a href="5-8.html">CH8</a>&ensp;<a href="5-9.html">CH9</a>&ensp;<a href="5-10.html">CH10</a>&ensp;<a href="5-11.html">CH11</a>&ensp;<a href="5-12.html">CH12</a>&ensp;<a href="5-13.html">CH13</a>&ensp;<a href="5-14.html">CH14</a>&ensp;<a href="5-15.html">CH15</a>&ensp;<a href="5-16.html">CH16</a>&ensp;<a href="5-17.html">CH17</a>&ensp;<a href="5-18.html">CH18</a>&ensp;<a href="5-19.html">CH19</a>&ensp;<a href="5-20.html">CH20</a>&ensp;<a href="5-21.html">CH21</a>&ensp;<a href="5-22.html">CH22</a>&ensp;<a href="5-23.html">CH23</a>&ensp;<a href="5-24.html">CH24</a>&ensp;<a href="5-25.html">CH25</a>&ensp;<a href="5-26.html">CH26</a>&ensp;<a href="5-27.html">CH27</a>&ensp;<a href="5-28.html">CH28</a>&ensp;',
6:'<a href="6-1.html">CH1</a>&ensp;<a href="6-2.html">CH2</a>&ensp;<a href="6-3.html">CH3</a>&ensp;<a href="6-4.html">CH4</a>&ensp;<a href="6-5.html">CH5</a>&ensp;<a href="6-6.html">CH6</a>&ensp;<a href="6-7.html">CH7</a>&ensp;<a href="6-8.html">CH8</a>&ensp;<a href="6-9.html">CH9</a>&ensp;<a href="6-10.html">CH10</a>&ensp;<a href="6-11.html">CH11</a>&ensp;<a href="6-12.html">CH12</a>&ensp;<a href="6-13.html">CH13</a>&ensp;<a href="6-14.html">CH14</a>&ensp;<a href="6-15.html">CH15</a>&ensp;<a href="6-16.html">CH16</a>&ensp;',
7:'<a href="7-1.html">CH1</a>&ensp;<a href="7-2.html">CH2</a>&ensp;<a href="7-3.html">CH3</a>&ensp;<a href="7-4.html">CH4</a>&ensp;<a href="7-5.html">CH5</a>&ensp;<a href="7-6.html">CH6</a>&ensp;<a href="7-7.html">CH7</a>&ensp;<a href="7-8.html">CH8</a>&ensp;<a href="7-9.html">CH9</a>&ensp;<a href="7-10.html">CH10</a>&ensp;<a href="7-11.html">CH11</a>&ensp;<a href="7-12.html">CH12</a>&ensp;<a href="7-13.html">CH13</a>&ensp;<a href="7-14.html">CH14</a>&ensp;<a href="7-15.html">CH15</a>&ensp;<a href="7-16.html">CH16</a>&ensp;',
8:'<a href="8-1.html">CH1</a>&ensp;<a href="8-2.html">CH2</a>&ensp;<a href="8-3.html">CH3</a>&ensp;<a href="8-4.html">CH4</a>&ensp;<a href="8-5.html">CH5</a>&ensp;<a href="8-6.html">CH6</a>&ensp;<a href="8-7.html">CH7</a>&ensp;<a href="8-8.html">CH8</a>&ensp;<a href="8-9.html">CH9</a>&ensp;<a href="8-10.html">CH10</a>&ensp;<a href="8-11.html">CH11</a>&ensp;<a href="8-12.html">CH12</a>&ensp;<a href="8-13.html">CH13</a>&ensp;',
9:'<a href="9-1.html">CH1</a>&ensp;<a href="9-2.html">CH2</a>&ensp;<a href="9-3.html">CH3</a>&ensp;<a href="9-4.html">CH4</a>&ensp;<a href="9-5.html">CH5</a>&ensp;<a href="9-6.html">CH6</a>&ensp;',
10:'<a href="10-1.html">CH1</a>&ensp;<a href="10-2.html">CH2</a>&ensp;<a href="10-3.html">CH3</a>&ensp;<a href="10-4.html">CH4</a>&ensp;<a href="10-5.html">CH5</a>&ensp;<a href="10-6.html">CH6</a>&ensp;',
11:'<a href="11-1.html">CH1</a>&ensp;<a href="11-2.html">CH2</a>&ensp;<a href="11-3.html">CH3</a>&ensp;<a href="11-4.html">CH4</a>&ensp;',
12:'<a href="12-1.html">CH1</a>&ensp;<a href="12-2.html">CH2</a>&ensp;<a href="12-3.html">CH3</a>&ensp;<a href="12-4.html">CH4</a>&ensp;',
13:'<a href="13-1.html">CH1</a>&ensp;<a href="13-2.html">CH2</a>&ensp;<a href="13-3.html">CH3</a>&ensp;<a href="13-4.html">CH4</a>&ensp;<a href="13-5.html">CH5</a>&ensp;',
14:'<a href="14-1.html">CH1</a>&ensp;<a href="14-2.html">CH2</a>&ensp;<a href="14-3.html">CH3</a>&ensp;',
15:'<a href="15-1.html">CH1</a>&ensp;<a href="15-2.html">CH2</a>&ensp;<a href="15-3.html">CH3</a>&ensp;<a href="15-4.html">CH4</a>&ensp;<a href="15-5.html">CH5</a>&ensp;<a href="15-6.html">CH6</a>&ensp;',
16:'<a href="16-1.html">CH1</a>&ensp;<a href="16-2.html">CH2</a>&ensp;<a href="16-3.html">CH3</a>&ensp;<a href="16-4.html">CH4</a>&ensp;',
17:'<a href="17-1.html">CH1</a>&ensp;<a href="17-2.html">CH2</a>&ensp;<a href="17-3.html">CH3</a>&ensp;',
18:'<a href="18-1.html">CH1</a>&ensp;',
19:'<a href="19-1.html">CH1</a>&ensp;<a href="19-2.html">CH2</a>&ensp;<a href="19-3.html">CH3</a>&ensp;<a href="19-4.html">CH4</a>&ensp;<a href="19-5.html">CH5</a>&ensp;<a href="19-6.html">CH6</a>&ensp;<a href="19-7.html">CH7</a>&ensp;<a href="19-8.html">CH8</a>&ensp;<a href="19-9.html">CH9</a>&ensp;<a href="19-10.html">CH10</a>&ensp;<a href="19-11.html">CH11</a>&ensp;<a href="19-12.html">CH12</a>&ensp;<a href="19-13.html">CH13</a>&ensp;',
20:'<a href="20-1.html">CH1</a>&ensp;<a href="20-2.html">CH2</a>&ensp;<a href="20-3.html">CH3</a>&ensp;<a href="20-4.html">CH4</a>&ensp;<a href="20-5.html">CH5</a>&ensp;',
21:'<a href="21-1.html">CH1</a>&ensp;<a href="21-2.html">CH2</a>&ensp;<a href="21-3.html">CH3</a>&ensp;<a href="21-4.html">CH4</a>&ensp;<a href="21-5.html">CH5</a>&ensp;',
22:'<a href="22-1.html">CH1</a>&ensp;<a href="22-2.html">CH2</a>&ensp;<a href="22-3.html">CH3</a>&ensp;',
23:'<a href="23-1.html">CH1</a>&ensp;<a href="23-2.html">CH2</a>&ensp;<a href="23-3.html">CH3</a>&ensp;<a href="23-4.html">CH4</a>&ensp;<a href="23-5.html">CH5</a>&ensp;',
24:'<a href="24-1.html">CH1</a>&ensp;',
25:'<a href="25-1.html">CH1</a>&ensp;',
26:'<a href="26-1.html">CH1</a>&ensp;',
27:'<a href="27-1.html">CH1</a>&ensp;<a href="27-2.html">CH2</a>&ensp;<a href="27-3.html">CH3</a>&ensp;<a href="27-4.html">CH4</a>&ensp;<a href="27-5.html">CH5</a>&ensp;<a href="27-6.html">CH6</a>&ensp;<a href="27-7.html">CH7</a>&ensp;<a href="27-8.html">CH8</a>&ensp;<a href="27-9.html">CH9</a>&ensp;<a href="27-10.html">CH10</a>&ensp;<a href="27-11.html">CH11</a>&ensp;<a href="27-12.html">CH12</a>&ensp;<a href="27-13.html">CH13</a>&ensp;<a href="27-14.html">CH14</a>&ensp;<a href="27-15.html">CH15</a>&ensp;<a href="27-16.html">CH16</a>&ensp;<a href="27-17.html">CH17</a>&ensp;<a href="27-18.html">CH18</a>&ensp;<a href="27-19.html">CH19</a>&ensp;<a href="27-20.html">CH20</a>&ensp;<a href="27-21.html">CH21</a>&ensp;<a href="27-22.html">CH22</a>&ensp;',
}


//sort alphanum
//const sortalphanum = (a, b) => a.localeCompare(b, 'en', { numeric: true })




fichier	= require('fs');


require('./lcv_sinaiticus.js')
require('./lcv_alexandrinus.js')
require('./lcv_vaticanus.js')
require('./lcv_ephraemi_rescriptus.js')
require('./lcv_bezae.js')
require('./lcv_washingtonianus.js')
require('./lc_westcott_hort.js')
require('./lc_tischendorf.js')


apparat_critique       =  fichier.readFileSync('../../database/cr/apparat_critique.txt',       'utf8');
sinaiticus_a           =  fichier.readFileSync('../../database/el/sinaiticus_a.txt',           'utf8');
sinaiticus_b           =  fichier.readFileSync('../../database/el/sinaiticus_b.txt',           'utf8');
sinaiticus_c           =  fichier.readFileSync('../../database/el/sinaiticus_c.txt',           'utf8');
sinaiticus_d           =  fichier.readFileSync('../../database/el/sinaiticus_d.txt',           'utf8');
alexandrinus_a         =  fichier.readFileSync('../../database/el/alexandrinus_a.txt',         'utf8');
alexandrinus_b         =  fichier.readFileSync('../../database/el/alexandrinus_b.txt',         'utf8');
alexandrinus_c         =  fichier.readFileSync('../../database/el/alexandrinus_c.txt',         'utf8');
vaticanus_a            =  fichier.readFileSync('../../database/el/vaticanus_a.txt',            'utf8');
vaticanus_b            =  fichier.readFileSync('../../database/el/vaticanus_b.txt',            'utf8');
vaticanus_c            =  fichier.readFileSync('../../database/el/vaticanus_c.txt',            'utf8');
vaticanus_d            =  fichier.readFileSync('../../database/el/vaticanus_d.txt',            'utf8');
ephraemi_rescriptus_a  =  fichier.readFileSync('../../database/el/ephraemi_rescriptus_a.txt',  'utf8');
ephraemi_rescriptus_b  =  fichier.readFileSync('../../database/el/ephraemi_rescriptus_b.txt',  'utf8');
ephraemi_rescriptus_c  =  fichier.readFileSync('../../database/el/ephraemi_rescriptus_c.txt',  'utf8');
ephraemi_rescriptus_d  =  fichier.readFileSync('../../database/el/ephraemi_rescriptus_d.txt',  'utf8');
bezae_a                =  fichier.readFileSync('../../database/el/bezae_a.txt',                'utf8');
bezae_b                =  fichier.readFileSync('../../database/el/bezae_b.txt',                'utf8');
bezae_c                =  fichier.readFileSync('../../database/el/bezae_c.txt',                'utf8');
washingtonianus_a      =  fichier.readFileSync('../../database/el/washingtonianus_a.txt',      'utf8');
washingtonianus_b      =  fichier.readFileSync('../../database/el/washingtonianus_b.txt',      'utf8');
nestle_aland_28        =  fichier.readFileSync('../../database/el/nestle_aland_28.txt',        'utf8');
westcott_hort          =  fichier.readFileSync('../../database/el/westcott_hort.txt',          'utf8');
tischendorf            =  fichier.readFileSync('../../database/el/tischendorf.txt',            'utf8');
stephanus              =  fichier.readFileSync('../../database/el/stephanus.txt',              'utf8');
scrivener              =  fichier.readFileSync('../../database/el/scrivener.txt',              'utf8');
king_james             =  fichier.readFileSync('../../database/el/king_james.txt',             'utf8');
sbl                    =  fichier.readFileSync('../../database/el/sbl.txt',                    'utf8');
robinson_et_pierpont   =  fichier.readFileSync('../../database/el/robinson_et_pierpont.txt',   'utf8');
nouvelle_disposition   =  fichier.readFileSync('../../database/el/nouvelle_disposition.txt',   'utf8');


bible = 
apparat_critique       +
sinaiticus_a           +
sinaiticus_b           +
sinaiticus_c           +
sinaiticus_d           +
alexandrinus_a         +
alexandrinus_b         +
alexandrinus_c         +
vaticanus_a            +
vaticanus_b            +
vaticanus_c            +
vaticanus_d            +
ephraemi_rescriptus_a  +
ephraemi_rescriptus_b  +
ephraemi_rescriptus_c  +
ephraemi_rescriptus_d  +
bezae_a                +
bezae_b                +
bezae_c                +
washingtonianus_a      +
washingtonianus_b      +
nestle_aland_28        +
westcott_hort          +
tischendorf            +
stephanus              +
scrivener              +
king_james             +
sbl                    +
robinson_et_pierpont   +
nouvelle_disposition   ;


bible = bible.split(/\r\n?|\n/).sort(new Intl.Collator('en',{numeric:true, sensitivity:'accent'}).compare)



data		= '';
backchap	= 1;
backlivre	= 1;
backverset	= 0;



for (line = 0 ; line != bible.length ; line++)
{
	
	
	if (bible[line] != "")
	{
	
	
	
	//1:25:6:MATTHIEU:5:390:ALEXANDRINUS_A
	//0 1  2 3        4 5   6

	
	info		= bible[line].split(' ')

	lcv			= info[0].split(':')
	livre		= lcv[0]
	chapitre	= lcv[1]
	verset		= lcv[2]
	bookname	= lcv[3]
	position	= lcv[4]
	date		= lcv[5]
	traducteur	= lcv[6]
	
	xlcv	= livre+':'+chapitre+':'+verset;
	texte	= bible[line].replace(info[0]+" ","")
	
	
	//console.log(line+'--> '+backlivre+':'+backchap+':'+backverset+' '+bible[line]+' '+livre+' '+chapitre)
	



	if ((chapitre != backchap || livre != backlivre))
	{
		introv = '';
		for (nx=0 ; nx != backverset ; nx++)
		{
			nb_for = nx+1;
			introv += '<a href="#V'+nb_for+'">V'+nb_for+'</a>&ensp;';
		}

		intros	=	intro;
		intros	+=	chbook[backlivre]+'<br><br>'+introv
		intros	=	intros.replace('>'+xbook[backlivre]+'<','><b>[ '+xbook[backlivre]+' ]</b><');
		intros	=	intros.replace('>'+'CH'+backchap+'<','><b>[ CH'+backchap+' ]</b><')


		//data = intro;

		fichier.writeFileSync(backlivre+'-'+backchap+'.html',intros+data+end, 'utf8');
		data = '';
		
		
	}

	
	



	
	if (backverset != verset)
{

	if (verset != 1)
		data +=`</tbody></table>`


		data +=`
<br><br><div id="V`+verset+`"></div><a href="#banniere"><b>`+xbook[livre]+' '+chapitre+' '+verset+`</b></a> 
<a href="../hellene/`+livre+`-`+chapitre+`.html#V`+verset+`">EL</a> 
<a href="../romain/`+livre+`-`+chapitre+`.html#V`+verset+`">RO</a> 
<a href="../francais/`+livre+`-`+chapitre+`.html#V`+verset+`">FR</a> 
<a href="../technique/`+livre+`-`+chapitre+`.html#V`+verset+`">TE</a>
<table cellspacing="0"><tbody>
`;


}

	
	
	
	if (traducteur.indexOf('SINAITICUS') != -1)
	{
		
		if (lcv_sinaiticus[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="sinaiticus" onclick="eimiv='+verset+';view(\'sinaiticus/'+lcv_sinaiticus[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		}
		
		else
		{
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		}

	}
	
	else if (traducteur.indexOf('ALEXANDRINUS') != -1)
	{
		
		if (lcv_alexandrinus[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="alexandrinus" onclick="eimiv='+verset+';view(\'alexandrinus/'+lcv_alexandrinus[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}
	
	
	else if (traducteur.indexOf('VATICANUS') != -1)
	{
		
		if (lcv_vaticanus[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="vaticanus" onclick="eimiv='+verset+';view(\'vaticanus/'+lcv_vaticanus[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}
	
	
	
	
	else if (traducteur.indexOf('EPHRAEMI') != -1)
	{
		
		if (lcv_ephraemi_rescriptus[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="ephraemi_rescriptus" onclick="eimiv='+verset+';view(\'ephraemi_rescriptus/'+lcv_ephraemi_rescriptus[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}
	
	

	
	else if (traducteur.indexOf('BEZAE') != -1)
	{
		
		if (lcv_bezae[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="bezae" onclick="eimiv='+verset+';view(\'bezae/'+lcv_bezae[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}
	
	else if (traducteur.indexOf('WASHINGTONIANUS') != -1)
	{
		
		if (lcv_washingtonianus[xlcv])
		{
			data	+= 
			'<tr><td nowrap class="washingtonianus" onclick="eimiv='+verset+';view(\'washingtonianus/'+lcv_washingtonianus[xlcv]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}	
	
	

	else if (traducteur.indexOf('WESTCOTT_HORT') != -1)
	{
	
		if (lc_westcott_hort[bookname+':'+chapitre])
		{
			data	+= 
			'<tr><td nowrap class="westcott_hort" onclick="eimiv='+verset+';view(\'westcott_hort/'+lc_westcott_hort[bookname+':'+chapitre]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}


	else if (traducteur.indexOf('TISCHENDORF') != -1)
	{
	
		if (lc_tischendorf[bookname+':'+chapitre])
		{
			data	+= 
			'<tr><td nowrap class="tischendorf" onclick="eimiv='+verset+';view(\'tischendorf/'+lc_tischendorf[bookname+':'+chapitre]+'.jpg\');">'+traducteur+'</a></td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'
		
		}

		else
		{
			
			data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'	
		}

	}
	
	
	else
		data += 
			'<tr><td nowrap>'+traducteur+'</td>'+
			'<td>'+date+'</td>'+
			'<td>'+texte+'</td></tr>'





	
	


	backlivre	= livre;
	backchap	= chapitre;
	backverset	= verset;
	
	}
	
	
	
	
	
}


		intro_ver='';
		for (nb=0 ; nb != backverset ; nb++)
		{
			nb_for = nb+1;
			intro_ver += '<a href="#V'+nb_for+'">V'+nb_for+'</a>&ensp;';
		}


		intros	=	intro;
		intros	+=	chbook[backlivre]+'<br><br>'+intro_ver
		intros	=	intros.replace('>'+xbook[livre]+'<','><b>[ '+xbook[livre]+' ]</b><');
		intros	=	intros.replace('>'+'CH'+chapitre+'<','><b>[ CH'+chapitre+' ]</b><')


		//data = intro;

		fichier.writeFileSync(backlivre+'-'+backchap+'.html',intros+data+end, 'utf8');
		data = '';

