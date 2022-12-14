



tablegrec = {
'Α':'A',
'α':'a',
'Β':'B',
'β':'b',
'Γ':'G',
'γ':'g',
'Δ':'D',
'δ':'d',
'Ε':'E',
'ε':'e',
'Ζ':'Z',
'ζ':'z',
'Η':'Ê',
'η':'ê',
'Θ':'Th',
'θ':'th',
'Ι':'I',
'ι':'i',
'Κ':'K',
'κ':'k',
'Λ':'L',
'λ':'l',
'Μ':'M',
'μ':'m',
'Ν':'N',
'ν':'n',
'Ξ':'Ks',
'ξ':'ks',
'Ο':'O',
'ο':'o',
'Π':'P',
'π':'p',
'Ρ':'R',
'ρ':'r',
'Σ':'S',
'σ':'s',
'ς':'s',
'Τ':'T',
'τ':'t',
'Υ':'Y',
'υ':'y',
'Φ':'PH',
'φ':'ph',
'Χ':'Ch',
'χ':'ch',
'Ψ':'Ps',
'ψ':'ps',
'Ω':'Ô',
'ω':'ô',
'-':'-',
'–':'–',
'_':'_',
'[':'[',
']':']',
'⟦':'⟦',
'⟧':'⟧',
' ':' ',
'ʹ':'ʹ',
'1':'1'}

function grectofrench(grw) {
	

	grw=grw.split('');
	send='';
	for (z=0; z != grw.length;z++)
	{
		if (!tablegrec[grw[z]])
			console.log('ERROR : '+grw[z])
		
		send+=tablegrec[grw[z]];
	}
	return send;
}






file1		= require('fs')
file2		= require('fs')

require('../database/lemme.js')

sebastien_te	= file1		.readFileSync('../database/te/nouvelle_disposition_te.txt',"utf-8")
sebastien_te	= sebastien_te	.split('\n')


sebastien_fr	= file1			.readFileSync('../database/fr/nouvelle_disposition.txt',"utf-8")
sebastien_fr	= sebastien_fr	.split('\n')


require('./biblehub.js');
require('./perseus.js');
require('./james.js');

//HTML
intro = `<!DOCTYPE html>
<html lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>LEMME</title>

		<style>
			html {
				margin:0;
				padding:0;
			}
			
			body {
				font-family: sans-serif;
				margin:0px;
				padding:0px;
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
			
			#main {
				margin: 5px;
			}
		
			h2 {
				font-family: serif;
			}
		
			a {
				color:				black;
				text-decoration:	none;
			}

			a:hover {
				text-decoration:	underline;
			}
			
			.c {
				background-color:	#c6ffc5;
			}
			
			.l {
				font-size:13px;
			}
			
			table tr:nth-child(even) {
				
				background: #eee;
			}
			
			table tr:hover {
				
				background: #ccc;
			}		
			
			td {
				padding-right:		10px;
			}

			
			#ttop {
				text-align: center;
				font-family: serif;
				font-size:28px;
			}
			
			#tleft, #tcenter, #tright {
				display: inline-block;
				min-width: 15%;
			}
			
			#tleft {
				text-align: left;
			}
			
			#tcenter {
				text-align: center;
			}
			
			#tright {
				text-align: right;
			}
			
		</style>
	</head>
<body>



<div id="banniere"><!--
	--><span class="blocban">Ȼ</span><!--
	--><a class="blocban" href="../index.html">INDEX</a><!--
	--><a class="blocban" href="../nd/nd.html">ND</a><!--
	--><a class="blocban" href="../interlineaire/hellene/1-1.html">HELLENE</a><!--
	--><a class="blocban" href="../interlineaire/romain/1-1.html">ROMAIN</a><!--
	--><a class="blocban" href="../interlineaire/francais/1-1.html">FRANCAIS</a><!--
	--><a class="blocban" href="../interlineaire/technique/1-1.html">TECHNIQUE</a><!--
	--><a class="blocban" href="../lemme/lemmes.html">LEMME</a><!--
	--><a class="blocban" href="../lemme/conflits.html">CONFLIT</a><!--
	--><a class="blocban" href="../dictionnaire/index.html">BAILLY</a><!--
	--><a class="blocban" href="../minidico/dictionnaire.html">MINIDICO</a><!--
	--><a class="blocban" href="../guematrie/index.html">GUÉMATRIE</a><!--
	--><a class="blocban" href="https://github.com/nouveautestament/">CODE</a>
</div>

<div id="main">


`



//HTML
end = `</body><div></html>`



function clean(xxx)
{
	xxx = xxx.toLowerCase();
	xxx = xxx.replace(/[\.;;,\[\]\·]/g,'')
	xxx = xxx.replace(/[\⟦\⟧]/g,'')
	xxx = xxx.replace(/[()]/g,'')
	
	return xxx;
}






lemmes = ''
conflits = ''
x = 0

inco = 0

arraylem = []

//add lemme in array
for (lem in lemme)
{
	arraylem.push(lem)
}


for (lem in lemme)
{

	

	
	trad	= lemme[lem][0]
	exemp	= lemme[lem][1]
	morph	= lemme[lem][2]
	origin	= lemme[lem][3]


	nlem = lem.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
	nlem = grectofrench(nlem)
	
	dd1 = ""
	dd2 = ""
	dd3 = ""
	
	
	if (!arraylem[x-1]) { dd1=""; dd2=arraylem[x+1]; }
		//main = '<span style="font-size:18px;font-family: serif;"><a href="lemmes.html">Πάντα</a><br><a href="'+arraylem[x+1]+'.html">'+arraylem[x+1]+'</a></span>'
	
	else if (!arraylem[x+1]) { dd1=arraylem[x-1]; dd2=""; }
		//main = '<span style="font-size:18px;font-family: serif;"><a href="'+arraylem[x-1]+'.html">'+arraylem[x-1]+'</a><br><a href="lemmes.html">Πάντα</a></span>'
	
	else { dd1=arraylem[x-1]; dd2=arraylem[x+1]; }
		//main = '<span style="font-size:18px;font-family: serif;"><a href="'+arraylem[x-1]+'.html">'+arraylem[x-1]+'</a><br><a href="lemmes.html">Πάντα</a><br><a href="'+arraylem[x+1]+'.html">'+arraylem[x+1]+'</a></span>'

	
	//console.log(dd1)
	
	main = `<div id="ttop"><span id="tleft"><a href="`+dd1+`.html">`+dd1+`</a></span><span id="tcenter"><a href="lemmes.html">ΠΑΝΤΑ</a></span><span id="tright"><a href="`+dd2+`.html">`+dd2+`</a></span></div>`
	
	main  += '<h2>' + lem + ' ('+nlem+')</h2>\n'

	main += '<h3>' + trad + '</h3>\n'
	
	//main += '<br>'+nlem
	
/*
	main += '<br>'+exemp

	main += '<br><span style="color:red">'+morph+'</span>'

	main += '<br>'+origin

	if (james[lem])
		main += '<br><br>'+james[lem]
	
	if (perseus[lem])
		main += '<br><br>'+perseus[lem]

	if (biblehub[lem])
		main += '<br><br>'+biblehub[lem]

	
*/

	main += '<table cellspacing="0">'
	
	main += '<tr><td>Morphologie</td><td><span style="color:red">'+morph+'</span></td></tr>'
	
	main += '<tr><td>Origine</td><td>'+origin+'</td></tr>'
	
	
	originsplit = origin.replace(/[\(\)\[\]\⟦\⟧,;\.]/g," ").split(/\s+/g)
	for (nos = 0 ; nos != originsplit.length ; nos++)
	{
		if (lemme[originsplit[nos]])
			main += '<tr><td><a target="_blank" href="'+originsplit[nos]+'.html">'+originsplit[nos]+'</a></td><td>'+lemme[originsplit[nos]][0]+'</td></tr>'
		
	}
	
	
	
	
	
	main += '<tr><td>Définition A</td><td>'+exemp+'</td></tr>'

	

	

	if (james[lem])
		main += '<tr><td>Définition B</td><td>'+james[lem]+'</td></tr>'
	
	if (perseus[lem])
		main += '<tr><td>Définition C</td><td>'+perseus[lem]+'</td></tr>'

	if (biblehub[lem])
		main += '<tr><td>Définition D</td><td>'+biblehub[lem]+'</td></tr>'
	
	
	main += '<tr><td>Wiktionary	EL</td><td><a target="_blank" href="https://el.wiktionary.org/wiki/'+lem+'">https://el.wiktionary.org/wiki/'+lem+'</a></td></tr>'
	main += '<tr><td>Wiktionary	EN</td><td><a target="_blank" href="https://en.wiktionary.org/wiki/'+lem+'">https://en.wiktionary.org/wiki/'+lem+'</a></td></tr>'
	main += '<tr><td>Wiktionary	FR</td><td><a target="_blank" href="https://fr.wiktionary.org/wiki/'+lem+'">https://fr.wiktionary.org/wiki/'+lem+'</a></td></tr>'
	
	main += '<tr><td nowrap>MULTI GREEK</td><td><a target="_blank" href="https://lsj.gr/index.php?search='+lem+'">lsj.gr # '+lem+'</a></td></tr>'
	main += '<tr><td>BAILLY</td><td><a target="_blank" href="../dictionnaire/index.html#'+lem+'">bailly # '+lem+'</a></td></tr>'
	
	
	main += '</table>'
	
	concordance = []
	main2 = ''

	for (l = 0 ; l != sebastien_te.length ; l++)
	{     
		
		if (sebastien_te[l].indexOf('='+lem+'=') != -1)
		{
				
			te		= sebastien_te[l].split(' ');
			fr		= sebastien_fr[l].split(' ');
			
			lcvteinfo	= te[0].split(':');
			lcvfrinfo	= fr[0].split(':');

			lcvte = lcvteinfo[0]+':'+lcvteinfo[1]+':'+lcvteinfo[2]
			lcvfr = lcvfrinfo[0]+':'+lcvfrinfo[1]+':'+lcvfrinfo[2]
			
			//check 3
			if (lcvte != lcvfr)
				console.log(lcvte + ' '+ lcvfr)
		
		
			textete = sebastien_te[l].replace(te[0]+' ', "").split(' ')
			textefr = sebastien_fr[l].replace(fr[0]+' ', "").split('#')
			
			
			//lcv = '<br>'+lcvteinfo[3]+' '+lcvteinfo[1]+' '+lcvteinfo[2]+'<br>'
			
			main2 +=	'<br><b>'+lcvteinfo[3]+' '+lcvteinfo[1]+' '+lcvteinfo[2]+'</b> '+
						'<a target="_blank" href="../interlineaire/hellene/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">EL</a> '+
						'<a target="_blank" href="../interlineaire/romain/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">RO</a> '+
						'<a target="_blank" href="../interlineaire/francais/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">FR</a> '+
						'<a target="_blank" href="../interlineaire/technique/'+lcvteinfo[0]+'-'+lcvteinfo[1]+'.html#V'+lcvteinfo[2]+'">TE</a><br>'
			
			elline = ''
			frline = ''
			for (y=0 ; y!=textete.length ; y++)
			{
				split2 = textete[y].split('=')
				
				if (split2[1] == lem)
				{
					
					
					elline += '<span class="c">'+split2[0]+'</span><span class="l">('+split2[2]+')</span> '
					frline += '<span class="c">'+textefr[y]+'</span> '

					
				
					concordance.push ('<td>'+clean(split2[0])+'</td>'+'<td>'+split2[2]+'</td><td>'+clean(textefr[y])+'</td>')
						
	
					
				}
				else
				{
					elline += split2[0]+' '
					frline += textefr[y]+' '
				}
				
				
			}

			main2 += elline+'<br><br>'+frline+'<br><br>\n' 

		}
		
	}


	if (concordance.length != 0)
	{
		
		
		main +=	'<br><br><table cellspacing="0"><tr>'+
					'<td><b>Hellène</b></td>'+
					'<td><b>Morphologie</b></td>'+
					'<td><b>Traduction</b></td>'+
					'<td><b>Répétition</b></td>'+
					'</tr>'
		
		//console.log(concordance.length)
		
		//uniq count
		var uniqs = concordance.reduce((acc, val) => 
		{
			acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
			return acc;
		}, {});
		
		//console.log(uniqs)
		
		for (uc in uniqs)
		{
			
			main += '<tr>'+uc+'<td>'+uniqs[uc]+'</td></tr>'
			
			
		}
		
		main += '<tr><td colspan="3">TOTAL</td><td>'+concordance.length+'</td></tr>'
		main +=	'</table>';
	}

	main += '<br><br><br>\n'

	main += main2
	
	introi = intro.replace('LEMME',lem)
	
	
	file2.writeFileSync(lem + '.html' , introi + main + end , "utf-8")
	
	
	
	x++;
	lemmes += '<tr><td><b>'+x+'</b></td><td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad+'</td></tr>\n'
	


	//conflits
	for (lem2 in lemme)
	{
		trad1	= trad.split(',')[0]
		trad2	= lemme[lem2][0].split(',')[0]
		
		if (lem != lem2)
		{
			if (trad1 == trad2)
			{
				if
				(
					conflits.indexOf
					(
						'<td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad1+'</td><td><a target="_blank" href="'+lem2+'.html">'+lem2+'</a></td><td>'+trad2+'</td></tr>\n'
					) == -1
					
					&&
					
					conflits.indexOf
					(
						'<td><a target="_blank" href="'+lem2+'.html">'+lem2+'</a></td><td>'+trad2+'</td><td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad1+'</td></tr>\n'
					) == -1
					
					&& trad1 != "moi"
					&& trad1 != "si"
					&& trad1 != "nous"
					&& trad1 != "toi"
					&& trad1 != "ces"
					&& trad1 != "vous"
					&& trad1 != "votre"
					&& trad1 != "cette"
				)
				
				
				{
					inco++;
					conflits += '<tr><td><b>'+inco+'</b></td><td><a target="_blank" href="'+lem+'.html">'+lem+'</a></td><td>'+trad1+'</td><td><a target="_blank" href="'+lem2+'.html">'+lem2+'</a></td><td>'+trad2+'</td></tr>\n'
				}
				
			}
		}

	}
	


}



file2.writeFileSync('lemmes.html' , intro + '<table cellspacing="0">' + lemmes + '</table>' + end , "utf-8")

file2.writeFileSync('conflits.html' , intro + '<table cellspacing="0">' + conflits + '</table>' + end , "utf-8")
