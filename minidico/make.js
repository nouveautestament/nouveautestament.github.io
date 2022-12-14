head_html = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">


		<title>MINIDICO</title>

		<style>

			html, body {
			
				margin:0;
				padding:0;
				
				color:black;
				
				font-family: serif;
			}

			#banniere {
			
				margin:0px;
				padding:0px;
				
				color:white;
				background-color:#172028;
				font-family: sans-serif;
				
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
				
				background-color:#3f4346;
			}
		

			#main {
				font-size:17px; /* font-size:11px; */
				margin:60px auto;
				padding:0;
				
				width:80%;
			}
			
			#left {
			
				margin:0;
				padding:0;
				
				width:70%;
			
				float:left;
			}
			
			#inleft {
			
				padding-right:70px;
				color:#313131;
			}
			
			#right {
			
				margin:0;
				padding:0;
				
				width:30%;
				
				float:left;
			}

			#titre1 {
			
				font-size:2em;
				font-family:serif;
			}
			
			#titre2 {
			
				font-size:1.7em;
				font-family:serif;
			}

			.min {
			
				font-size: 0.8em;
			}
			
			p {
			
				line-height: 1.5em;
			}


			b {
				
				font-family: sans-serif;

			}

		</style>
	</head>

<body>


<div id="banniere"><!--
	--><span class="blocban">Ȼ</span><!--
	--><a class="blocban" href="../index.html">INDEX</a><!--
	--><a class="blocban" href="../agora/index.html">AGORA</a><!--
	--><a class="blocban" href="../nd/nd.html">ND</a><!--
	--><a class="blocban" href="../interlineaire/hellene/1-1.html">HELLENE</a><!--
	--><a class="blocban" href="../interlineaire/romain/1-1.html">ROMAIN</a><!--
	--><a class="blocban" href="../interlineaire/francais/1-1.html">FRANCAIS</a><!--
	--><a class="blocban" href="../interlineaire/technique/1-1.html">TECHNIQUE</a><!--
	--><a class="blocban" href="../lemme/lemmes.html">LEMME</a><!--
	--><a class="blocban" href="../lemme/conflits.html">CONFLIT</a><!--
	--><a class="blocban" href="../dictionnaire/lsj.html">LSJ</a><!--
	--><a class="blocban" href="../dictionnaire/bailly.html">BAILLY</a><!--
	--><a class="blocban" href="../minidico/dictionnaire.html">MINIDICO</a><!--
	--><a class="blocban" href="../guematrie/index.html">GUÉMATRIE</a><!--
	--><a class="blocban" href="https://github.com/nouveautestament/">CODE</a>
</div>



<div id="main">`;


head_html2 = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">


		<title>MINIDICO</title>

		<style>

			html, body {
			
				margin:0;
				padding:0;
				
				color:black;
				
				font-family: serif;
				font-size:12px;
			}

			#banniere {
			
				margin:0px;
				padding:0px;
				
				color:white;
				background-color:#172028;
				font-family: sans-serif;
				
				/*white-space:nowrap;*/
				/*display: flex;*/
			}
		

			
			
			.blocban:hover {
				
				background-color:#3f4346;
			}
		

			
			#left {
			
				margin:0;
				padding:0;
				
				width:70%;
			
				float:left;
			}
			
			#inleft {
			
				padding-right:70px;
				color:#313131;
			}
			
			#right {
			
				margin:0;
				padding:0;
				
				width:30%;
				
				float:left;
			}



			h1 {
				font-size:20px;
			}

			b {
				
				font-family: sans-serif;

			}

		</style>
	</head>

<body>`



body_html = "\n";

fs			= require('fs');
file		= require('fs');
result		= fs.readFileSync('dictionnaire.txt', 'utf8');


line = result.match(/^.*$/mg);
debl = '';

for (nb=0;nb!=line.length;nb++)
{
	
	if (line[nb] != '')
	{
	
		word = line[nb].split('=');


		if (word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") != debl)
			body_html += '<h1>'+word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")+'</h1>\n';
	
		body_html	+= '<div><b>'+word[0]+'</b>&ensp; '+word[1]+'</div>\n';
		debl		= word[0][0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	}
  
}

file.writeFileSync('dictionnaire.html',head_html+body_html+'</div></body>\n</html>', 'utf8');
file.writeFileSync('dictionnaire2.html',head_html2+body_html+'</div></body>\n</html>', 'utf8');
