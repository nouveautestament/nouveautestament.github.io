head_html = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>NOUVEAU TESTAMENT</title>
`

css_web = `
		<style>
		
		html {
			margin:30px;
		}


		body {
			font-family: sans-serif;
			font-size:17px;
		}


		.chap {
			font-size:20px;
			float:left;
			margin:10px;
		}

		.ver {
			font-size:17px;
			font-weight:bold;
		}

		.text {
			font-size:17px;


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
			font-size:11px;
			font-weight:bold;
		}

		.text {
			font-size:11px;
		}

		</style>
	</head>
<body>
`;






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
13:'1 TESSALONICIENS',
14:'2 TESSALONICIENS',
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






body_html_all	= '';
body_html		= '';
chapitreb		= 0;
livreb			= '';

fs			= require('fs');
file		= require('fs');
file2		= require('fs');

nouvelledisposition	= fs.readFileSync('../../database/FR/NOUVELLE_DISPOSITION.txt', 'utf8').replace(/#/g,' ').split(/\r?\n/);
alain				= fs.readFileSync('../../database/FR/ALAIN-DUMONT.txt',         'utf8')                  .split(/\r?\n/);

//check 1
if (nouvelledisposition.length != alain.length)
	console.log('erreur 1')

for (nb=0;nb!=nouvelledisposition.length;nb++)
{
	
	//check 2
	if (nouvelledisposition[nb] != '' && alain[nb] != '')
	{

/**

        V5      1:1:1:MATTHIEU:1:0:2021:nouvelledisposition-D-G Βίβλος=βίβλος=nom,nominatif,féminin,singulier γενέσεως=γένεσις=nom,génitif,féminin,singulier Ἰησοῦ=Ἰησοῦς=nom,génitif,masculin,singulier Χριστοῦ=Χριστός=nom,génitif,masculin,singulier υἱοῦ=υἱός=nom,génitif,masculin,singulier Δαυὶδ=Δαυίδ=nom,génitif,masculin,singulier υἱοῦ=υἱός=nom,génitif,masculin,singulier Ἀβραάμ.=Ἀβραάμ=nom,génitif,masculin,singulier
                0 1 2 3        4 5 6    7             		
**/





		se		= nouvelledisposition[nb].split(' ');
		al		= alain[nb].split(' ');
		
		lcvseinfo	= se[0].split(':');
		lcvalinfo	= al[0].split(':');
	
		lcvse = lcvseinfo[0]+':'+lcvseinfo[1]+':'+lcvseinfo[2]
		lcval = lcvalinfo[0]+':'+lcvalinfo[1]+':'+lcvalinfo[2]
		
		//check 3
		if (lcvse != lcval)
			console.log(lcvse + ' '+ lcval)
		
		
		textese = nouvelledisposition[nb].replace(se[0]+' ', "")
		texteal = alain[nb].replace(al[0]+' ', "")
		

		
		livre		= lcvseinfo[0];
		chapitre	= lcvseinfo[1];
		verset		= lcvseinfo[2];
		nomdulivre	= lcvseinfo[3];

		


		if (livreb != livre)
		{
			chapitreb	= 0;
			if (livreb != '')
			{
				body_html_all	+= '\n</table>';
				
				file2.writeFileSync(livreb+'.html',head_html+css_web+body_html+'\n</table>\n</body></html>', 'utf8');
				
				//file2.appendFileSync(livreb+'.html','</table></body></html>', 'utf8');
			}
				
			//file2.writeFileSync(livre+'.html',head_html+css_web, 'utf8');
			
			body_html = ""
		}


		if (chapitre == 1 && verset == 1)
		{
			body_html_all	+= '\n<h3><center>'+nomdulivre+'</center></h3>\n';
			body_html		+= '\n<h3><center>'+nomdulivre+'</center></h3>\n';
			//file2.appendFileSync(livre+'.html','\n<h3><center>'+nomdulivre+'</center></h3>\n', 'utf8');
		}


		if (chapitreb != chapitre)
		{
			if (chapitre != 1)
			{
				body_html_all	+= '\n</table>';
				body_html		+= '\n</table>';
				//file2.appendFileSync(livre+'.html','</table>', 'utf8');
			}
			
			
			body_html_all	+= '\n<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n<table width="100%" cellpadding="0" cellspacing="0">';
			body_html		+= '\n<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n<table width="100%" cellpadding="0" cellspacing="0">';
			
			//file2.appendFileSync(livre+'.html','<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n<table width="100%" cellpadding="0" cellspacing="0">', 'utf8');
		}


		body_html_all	+= '\n<tr>\
<td style="border: none; padding: 0cm" width="48%" class="l" valign="top"><span class="ver">'+verset+'</span> <span class="texte">\
'+textese+'</span>\
<td width="2%"> </td>\
<td style="border: none; padding: 0cm" width="48%" class="r" valign="top"><span class="ver">'+verset+'</span> <span class="texte">\
'+texteal+'</span>\
</tr>';

		body_html	+= '\n<tr>\
<td style="border: none; padding: 0cm" width="48%" class="l" valign="top"><span class="ver">'+verset+'</span> <span class="texte">\
'+textese+'</span>\
<td width="2%"> </td>\
<td style="border: none; padding: 0cm" width="48%" class="r" valign="top"><span class="ver">'+verset+'</span> <span class="texte">\
'+texteal+'</span>\
</tr>';


		//file2.appendFileSync(livre+'.html',body_html+'\n', 'utf8');

		if (livre == 27 && chapitre == 22 && verset == 21)
			file2.writeFileSync(livreb+'.html',head_html+css_web+body_html+'\n</table>\n</body></html>', 'utf8');
			
		//file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');



		livreb		= livre;
		chapitreb	= chapitre;

		
		
	}


}


file.writeFileSync('all.html',head_html+css_papier+body_html_all+'\n</table>\n</body></html>', 'utf8');
