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



biblos = {
1:'ΚΑΤΑ ΜΑΘΘΑΙΟΝ',
2:'ΚΑΤΑ ΜΑΡΚΟΝ',
3:'ΚΑΤΑ ΛΟΥΚΑΝ',
4:'ΚΑΤΑ ΙΩΑΝΝΗΝ',
5:'ΠΡΑΞΕΙΣ ΑΠΟΣΤΟΛΩΝ',
6:'ΠΡΟΣ ΡΩΜΑΙΟΥΣ',
7:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α',
8:'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β',
9:'ΠΡΟΣ ΓΑΛΑΤΑΣ',
10:'ΠΡΟΣ ΕΦΕΣΙΟΥΣ',
11:'ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ',
12:'ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ',
13:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α',
14:'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β',
15:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Α',
16:'ΠΡΟΣ ΤΙΜΟΘΕΟΝ Β',
17:'ΠΡΟΣ ΤΙΤΟΝ',
18:'ΠΡΟΣ ΦΙΛΗΜΟΝΑ',
19:'ΠΡΟΣ ΕΒΡΑΙΟΥΣ',
20:'ΙΑΚΩΒΟΥ',
21:'ΠΕΤΡΟΥ Α',
22:'ΠΕΤΡΟΥ Β',
23:'ΙΩΑΝΝΟΥ Α',
24:'ΙΩΑΝΝΟΥ Β',
25:'ΙΩΑΝΝΟΥ Γ',
26:'ΙΟΥΔΑ',
27:'ΑΠΟΚΑΛΥΨΙΣ ΙΩΑΝΝΟΥ'
}




function super_alignement(a, b)
{
	
	   var T = Array(a.length + 1).fill(0).map(()=>new Array(b.length + 1).fill(0));
        
		
		for (i=0 ; i <= a.length; i++)
        {
            T[i][0] = i;
        }
		
        for (i=0 ; i <= b.length; i++)
        {
            T[0][i] = i;
        }

		
        for (i=1 ; i <= a.length; i++)
        {
            for (j=1 ; j <= b.length; j++)
            {
				
				
				
				/*
				if (i == j && a[i-1] == 'Μαρία' && b[j-1] == 'Μαριὰμ')
				{
					
					
					
					//console.log(a.join(' '))
					//console.log(b.join(' '))
					//b[j-1] = a[i-1]
						
					
					
						
						
				}
				*/
				
				/*
				if (i == j && a[i-1] != b[j-1] && a[i-1].indexOf('εἱσ') != -1)
				{
					atest = a[i-1].replace(/[\[\]\·\;\.\,]/g,"")
					btest = b[j-1].replace(/[\[\]\·\;\.\,]/g,"").replace(/^ἵσ/,'εἱσ')
					
					
					
					if (atest == btest)
					{
						//console.log(a.join(' '))
						//console.log(b.join(' '))
						
						b[j-1] = a[i-1]
						
						
					}
					
						
						
				}
				*/
				
				/*
				if (i == j && (a[i-1].indexOf('[') != -1 || a[i-1].indexOf(']') != -1))
				{
					
					atest = a[i-1].replace(/[\[\]\·\;\.\,]/g,"")
					btest = b[i-1].replace(/[\[\]\·\;\.\,]/g,"")
					//console.log(a[i-1]+' '+atest)
					
					
					if (atest == btest) b[j-1] = a[i-1]
					
				}
				*/
				
				
				
				
                if (a[i-1] == b[j-1])
				//if (compare (a[i-1], b[j-1]) >= 80)
                {
					//if (a[i-1] != b[j-1]) console.log(a[i-1] +' '+ b[j-1])
					
                    T[i][j] = T[i-1][j-1];	
                }
                else
                {
                    T[i][j] = Math.min(T[i-1][j],T[i][j-1]) + 1;
                }
            }
        }
		
		
		
        var aa = [];
        var bb = [];
		
        for (i=a.length, j = b.length; i > 0 || j > 0; )
        {
            if (i > 0 && T[i][j] == T[i - 1][j] + 1)
            {
				i--;
                aa.push(a[i]+" { --- }");
                bb.push("{ "+a[i]+" }");
				
				
            }
            else
            if (j > 0 && T[i][j] == T[i][j - 1] + 1)
            {
				j--
                bb.push(b[j]+" { --- }");
                aa.push("{ "+b[j]+" }");
				
            }
            else
            if (i > 0 && j > 0 && T[i][j] == T[i - 1][j - 1])
            {
				i--
				j--
                aa.push(a[i]);
                bb.push(b[j]);
				
            }
        }
		
	return [aa.reverse(), bb.reverse()]
	
}


function clean_signe(phrase){
	
	phrase = phrase.replace(/[\u2e00-\u2e0d]/g,"")
	phrase = phrase.replace(/[*¹²³°˸◆]/g,"")
	
	
	return phrase;
}


function clean_standard(phrase){
	
	
	//espace
	phrase = phrase.replace(/ /g," ")
	
	phrase = phrase.replace(/ά/g,"ά")
	phrase = phrase.replace(/ή/g,"ή")
	phrase = phrase.replace(/᾿/g,"᾽")
	phrase = phrase.replace(/;/g,";")
	
	//ponc
	phrase = phrase.replace(/ +\./g,".")
	phrase = phrase.replace(/ +\·/g,"·")
	phrase = phrase.replace(/ +\;/g,";")
	//phrase = phrase.replace(/,/g," , ")
	phrase = phrase.replace(/ +\,/g,",")
	
	phrase = phrase.replace(/ +/g," ")
	phrase = phrase.replace(/^ +| +$/g,"")
	
	return phrase;
}


body_html_all	= '';
body_html		= '';
chapitreb		= 0;
livreb			= '';
count			= 0;

fs			= require('fs');
file		= require('fs');
file2		= require('fs');

ndh		= fs.readFileSync('../../database/EL/nouvelle_disposition.txt', 'utf8').split(/\r?\n/);
na28	= fs.readFileSync('../../database/EL/NESTLE_ALAND_28.txt',         'utf8').split(/\r?\n/);




for (nb=0;nb!=ndh.length;nb++)
{
	if (ndh[nb] != '')
	{

		/**

			1:1:1:MATTHIEU:22:2016:NESTLE_ALAND_28 Βίβλος γενέσεως Ἰησοῦ Χριστοῦ υἱοῦ Δαυὶδ υἱοῦ Ἀβραάμ.
			0 1 2 3        4  5    6               7             		
		
		**/

		//NDH
		s_ndh			= ndh[nb].split(' ');
		info_ndh		= s_ndh[0];
		t_ndh			= ndh[nb].replace(info_ndh+" ","");
		livre_ndh		= info_ndh.split(':')[0]
		chapitre_ndh	= info_ndh.split(':')[1]
		verset_ndh		= info_ndh.split(':')[2]	
	
		//NA28
		s_na28			= na28[nb].split(' ');
		info_na28		= s_na28[0];
		t_na28			= na28[nb].replace(info_na28+" ","");
		t_na28			= clean_signe(t_na28)
		livre_na28		= info_na28.split(':')[0]
		chapitre_na28	= info_na28.split(':')[1]
		verset_na28		= info_na28.split(':')[2]	
	

		lcv_split	= info_ndh.split(':');
		livre		= lcv_split[0];
		chapitre	= lcv_split[1];
		verset		= lcv_split[2];
		nomdulivre	= biblos[livre];

	
	
	
		
		tc_na28	= clean_standard(t_na28)
		tc_ndh	= clean_standard(t_ndh)
	
		//CHECK
		if (chapitre_na28 != chapitre_ndh || verset_na28 != verset_ndh)
		{
			console.log(livre_seb+' '+chapitre_seb+' '+verset_seb)
		}
		
		
		
		
		//CHECK
		if (t_ndh != tc_ndh)
		{
			console.log()
			console.log(t_ndh)
			console.log(tc_ndh)
			console.log(t_na28)
		}
		
		
		texte = t_ndh
		
		
		if (tc_na28 != tc_ndh)
		{
			//count++
			//console.log(count)
			//console.log("na28:	"+tc_na28)
			//console.log("ndh:	"+tc_ndh)
			
			
			/*
			if (tc_ndh.split(' ') == "" && tc_na28.split(' ') == "")
			{
				ndh_na28 = [ [], [] ]
				console.log(lcv_split)
			}


			else if (tc_ndh.split(' ') == "" && tc_na28.split(' ') != "")
			{
				ndh_na28 = [ Array(tc_na28.split(' ').length).fill('xxx'), tc_na28.split(' ') ]
			}



			else if (tc_ndh.split(' ') != "" && tc_na28.split(' ') == "")
			{
				ndh_na28 = [  tc_ndh.split(' '), Array(tc_ndh.split(' ').length).fill('xxx') ]
			}


			else
				
			*/
			
			
			ndh_na28 = super_alignement( tc_ndh.split(' ')  ,   tc_na28.split(' '))
			
			
			
			
			//console.log(ndh_na28)
			
			//CHECK
			if (ndh_na28[0].length != ndh_na28[1].length)
				console.log(ndh_na28)
			
			
			texte = ndh_na28[0].join(' ')
			
			
			// !!! Matthieu 17.21, supprimé dans le NA28 !!!
			if (texte.indexOf('{  }') != -1)
			{
				texte = texte.replace('{  } ','')
				//console.log(texte)
			}
				
			
			
		}
	






		if (livreb != livre)
		{
			chapitreb	= 0;
			//if (livreb != '') file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');
			
			//file2.writeFileSync(livre+'.html',head_html+css_web, 'utf8');
			if (livreb != '')
				file2.writeFileSync(livreb+'.html',head_html+css_web+body_html+'</body></html>', 'utf8');
			
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
			body_html_all	+= '<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n';
			body_html		+= '<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n';
			//file2.appendFileSync(livre+'.html','<br><br><div class="chap">'+nomdulivre+' &ensp;'+chapitre+'</div>\n', 'utf8');
		}


		body_html_all	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html_all	+= '<span class="text">'+texte+'</span>\n';

		body_html	+= '<span class="ver"><b>'+verset+'</b></span> ';
		body_html	+= '<span class="text">'+texte+'</span>\n';

		//file2.appendFileSync(livre+'.html','<span class="ver"><b>'+verset+'</b></span> <span class="text">'+texte+'</span>\n', 'utf8');

		if (livre == 27 && chapitre == 22 && verset == 21) 
		{
			//file2.appendFileSync(livreb+'.html','</body></html>', 'utf8');
			file2.writeFileSync(livreb+'.html',head_html+css_web+body_html+'</body></html>', 'utf8');
		}

		livreb		= livre;
		chapitreb	= chapitre;
	





	}

}

file.writeFileSync('all.html',head_html+css_papier+body_html_all+'</body></html>', 'utf8');
