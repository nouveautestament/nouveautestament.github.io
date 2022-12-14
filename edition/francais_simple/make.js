booknametonumber = {
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
'BARNABAS':28,
}


head_html = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>NOUVELLE DISPOSITION</title>
`

css_web = `
		<style>
		
		html {
			margin:30px;
			background-color:#f2dec6;
		}


		body {
			font-family: sans-serif;
			font-size:17px;
		}


		.chap {
			font-size:20px;
			margin:10px;
		}

		.ver {
			font-size:17px;
		}

		.text {
			font-size:17px;
			line-height:1.5em;

		}

		</style>
	</head>
<body>
`;



css_papier = `
		<style>
		
		html {
			margin:0px;
		}


		body {
			margin:0px;
			font-family: Serif;
			font-size:11px;
		}


		.chap {
			font-size:14px;
		}

		.ver {
			font-size:12px;
		}

		.text {
			font-size:12px;
		}

		</style>
	</head>
<body>
`;


body_html_all	= '';

chapitreb		= 0;
livreb			= '';

fs			= require('fs');
file		= require('fs');
file2		= require('fs');
result	= fs.readFileSync('nt-manuel-seb-final.txt', 'utf8');

result2 = fs.readFileSync('barnabas.txt', 'utf8');

result = result+"\n"+result2


line = result.split(/\r?\n/);


for (nb=0;nb!=line.length;nb++)
{
	if (line[nb] != '')
	{

/**

        V1      MATTHIEU:1:1 Bible de genèse de Iésou de Christ de fils de David de fils de Abraam.
        V5      1:1:1:MATTHIEU:3:1:2021:SEBASTIEN-D-G Bible de la genèse de Iésous Christ, fils de Dauid, fils de Abraam.
                0 1 2 3        4 5 6    7             		
**/

		lcvt		= line[nb].split(' ');
		lcv			= lcvt[0];
		texte		= line[nb].replace(lcv,"");
	
		texte		= texte.replace(/^ +| +$/,"")
		//console.log('-'+texte)
	
		lcv_split	= lcv.split(':');
		
		nomdulivre	= lcv_split[0];
		livre		= booknametonumber[lcv_split[0]];
		chapitre	= lcv_split[1];
		verset		= lcv_split[2];
		
		/*
		livre		= lcv_split[0];
		chapitre	= lcv_split[1];
		verset		= lcv_split[2];
		nomdulivre	= lcv_split[3];
		langue		= lcv_split[4];
		classement	= lcv_split[5];
		date		= lcv_split[6];
		traducteur	= lcv_split[7];
		*/

		
		//console.log(lcv+' '+nb)

		if (livreb != livre)
		{
			chapitreb	= 0;
			if (livreb != '')
				file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');
			file2.writeFileSync(livre+'.html',head_html+css_web, 'utf8');
		}


		if (chapitre == 1 && verset == 1)
		{
			body_html_all	+= '\n<h3><center>'+nomdulivre+'</center></h3>\n';
			file2.appendFileSync(livre+'.html','\n<h3><center>'+nomdulivre+'</center></h3>\n', 'utf8');
		}


		if (chapitreb != chapitre)
		{
			body_html_all	+= '<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n';
			file2.appendFileSync(livre+'.html','<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n', 'utf8');
		}


		if (verset.length > 1)
			verset2 = verset
		else
			verset2 = '0'+verset

		body_html_all	+= '<br><span class="ver">'+verset2+'</span>&ensp;&ensp;<span class="text">'+texte+'</span>\n';




		file2.appendFileSync(livre+'.html','<br><span class="ver">'+verset2+'</span>&ensp;&ensp;<span class="text">'+texte+'</span>\n', 'utf8');

		if (livre == 27 && chapitre == 22 && verset == 21)
			file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');

		livreb		= livre;
		chapitreb	= chapitre;
	}


}

file.writeFileSync('all.html',head_html+css_papier+body_html_all+'</body></html>', 'utf8');
