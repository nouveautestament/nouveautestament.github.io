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
27:'APOCALYPSE',
}






intro =
`<!DOCTYPE html>
<html id="a" lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Nouveau Testament">
		<meta name="keywords" content="Nouveau Testament">
	
		<title>TRS</title>

		<style>
			html {
				margin:0;
				padding:0;
			}
			
			body {
				margin:0;
				padding:0;
				font-family:		sans-serif;
			}
		
			#banniere {
			
				margin:0px;
				padding:0px;
				
				color:white;
				background-color:#172028;
				
				
				
				/*white-space:nowrap;*/
				/*display: flex;*/
			}
		
			#main {
				padding: 5px;
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
		
			.lemme a {
				color:#4b86ff;
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
				font-size:			14px;
			}

			table td {
				padding:			1px;
			}

			table .td1 {
				white-space:		nowrap;
			}

			table .td2 {
				padding:			0 9px;
			}


			table tr:nth-child(even) {
				
				background: #eee;
			}

			.int {
				display:inline-block;
				margin:7px
			}


			.el {
				font-size:17px;
				font-family:Serif;
				display:block;
			}

			.fr {
				font-size:16px;
				display:block;
			}

			.info {
				font-size:13px;
				color:#888888;
				display:block;
			}

			.subinfo {
				font-size:10px;
				color:#888888;
				display:block;
			}

			.lemme {
				font-size:14px;
				color: #444444;
				display:block;
			}
			
			.trs {
				line-height:1.5em;
				font-size:14px;
				outline:none;
				border-radius:5px;
				box-shadow:3px 3px 2px 0px #999999b3;
				box-sizing:border-box;
				padding:1.5em;
				width:100%;
				height:90%;
			}
			
			#show {
				background-color: white;
				position: fixed;
				width: 100%;
				height: 90%;
				top: 0;
			}

		</style>
		
		<script>
		
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
			27:'APOCALYPSE',
		}
		
		alltrs = ""
		
		function addtrs(id)
		{
			linetrs = document.getElementById(id).value;
			
			intro = id.split('_')
			intro = xbook[intro[1]]+':'+intro[2]+':'+intro[3];
			
			alltrs += intro+' '+linetrs+"\\n"
			
		}
		
		function lire()
		{
			document.getElementById('show').style.display = "initial";
			document.getElementById('textarea_trs').value = alltrs;
		}
		
		
		function save()
		{
			alltrs = document.getElementById('textarea_trs').value;
			document.getElementById('show').style.display = "none";
			
		}
		
		
		


		document.onkeydown = checkKey;

		function checkKey(e) 
		{
			e = e || window.event;
			
			if (e.keyCode == '27') 
			{
				alltrs = document.getElementById('textarea_trs').value;
				document.getElementById('show').style.display = "none";
			}
		}
		
		</script>
	
	</head>

<body>

<div style="display:none;" id="show"><div onclick="save()" style="padding:1em;cursor:pointer;user-select:none;">[SAUVE_ECHAP]</div><textarea class="trs" id="textarea_trs"></textarea></div>

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

<p><a href="1-1.html">MATTHIEU</a>&ensp;<a href="2-1.html">MARC</a>&ensp;<a href="3-1.html">LUC</a>&ensp;<a href="4-1.html">JEAN</a>&ensp;<a href="5-1.html">ACTES</a>&ensp;</p>

<p><a href="6-1.html">ROMAINS</a>&ensp;<a href="7-1.html">1CORINTHIENS</a>&ensp;<a href="8-1.html">2CORINTHIENS</a>&ensp;<a href="9-1.html">GALATES</a>&ensp;<a href="10-1.html">EPHESIENS</a>&ensp;<a href="11-1.html">PHILIPPIENS</a>&ensp;<a href="12-1.html">COLOSSIENS</a>&ensp;</p>

<p><a href="13-1.html">1THESSALONICIENS</a>&ensp;<a href="14-1.html">2THESSALONICIENS</a>&ensp;<a href="15-1.html">1TIMOTHEE</a>&ensp;<a href="16-1.html">2TIMOTHEE</a>&ensp;<a href="17-1.html">TITE</a>&ensp;<a href="18-1.html">PHILEMON</a>&ensp;<a href="19-1.html">HEBREUX</a>&ensp;</p>

<p><a href="20-1.html">JACQUES</a>&ensp;<a href="21-1.html">1PIERRE</a>&ensp;<a href="22-1.html">2PIERRE</a>&ensp;<a href="23-1.html">1JEAN</a>&ensp;<a href="24-1.html">2JEAN</a>&ensp;<a href="25-1.html">3JEAN</a>&ensp;<a href="26-1.html">JUDAS</a>&ensp;<a href="27-1.html">APOCALYPSE</a></p>

<br>
`;


end = `
</tbody></table></div><br></body></html>`



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










fichier		= require('fs')


sebastien_te		= fichier.readFileSync('../database/TE/NOUVELLE_DISPOSITION_TE.txt', 'utf8').split('\n')
sebastien_fr		= fichier.readFileSync('../database/FR/NOUVELLE_DISPOSITION.txt', 'utf8').split('\n')

alain_dumont      =  fichier.readFileSync('../database/fr/alain-dumont.txt',      'utf8');
jacqueline        =  fichier.readFileSync('../database/fr/jacqueline.txt',        'utf8');
osty_et_trinquet  =  fichier.readFileSync('../database/fr/osty-et-trinquet.txt',  'utf8');
segond_nbs        =  fichier.readFileSync('../database/fr/segond-nbs.txt',        'utf8');
lefevre           =  fichier.readFileSync('../database/fr/lefevre.txt',           'utf8');


//FUSION NDH-NDF
//CHECK 1
if (sebastien_te.length != sebastien_fr.length)
	console.log('error length file ' + sebastien_te.length)

ndfh = ""
for (line = 0 ; line != sebastien_te.length ; line++)
{
	
	
	if (sebastien_te[line] != "")
	{
		//CHECK 2
		if (sebastien_te[line].split(' ')[0] != sebastien_fr[line].split(' ')[0])
			console.log("error info vers")
		
		ndfh += sebastien_te[line].replace(":1:2022:",":0:2022:")+'||-F-||'+sebastien_fr[line].replace(":1:2022:",":0:2022:")+"\n"
		
	}
	
}


bible =
ndfh				+
alain_dumont		+
jacqueline			+
osty_et_trinquet	+
segond_nbs			+
lefevre

bible = bible.split(/\r?\n/).sort(new Intl.Collator('en',{numeric:true, sensitivity:'accent'}).compare)













data		= '';
backchap	= 1;
backlivre	= 1;
backverset	= 0;









for (line = 0 ; line != bible.length ; line++)
{
	
	
	if (bible[line] != "")
	{
	
	
	
		//1:1:1:MATTHIEU:1:2022:SEBASTIEN
		//0 1 2 3        4 5    6

		
		info		= bible[line].split(' ')

		lcv			= info[0].split(':')
		livre		= lcv[0]
		chapitre	= lcv[1]
		verset		= lcv[2]
		bookname	= lcv[3]
		position	= lcv[4]
		date		= lcv[5]
		traducteur	= lcv[6]
		
		texte	= bible[line].replace(info[0],"")
		
		//console.log(line+'--> '+backlivre+':'+backchap+':'+backverset+' '+bible[line]+' '+livre+' '+chapitre)
		
		
		id_trs = 'trs_'+livre+'_'+chapitre+'_'+verset;


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
			data +=`\n</tbody></table>`


			data +=`\n`+
			`<br><br><div id="V`+verset+`"></div><a href="#banniere"><b>`+xbook[livre]+' '+chapitre+' '+verset+`</b></a> `+
			`<a target="_blank" href="../interlineaire/hellene/`+livre+`-`+chapitre+`.html#V`+verset+`">EL</a> `+ 
			`<a target="_blank" href="../interlineaire/romain/`+livre+`-`+chapitre+`.html#V`+verset+`">RO</a> `+ 
			`<a target="_blank" href="../interlineaire/francais/`+livre+`-`+chapitre+`.html#V`+verset+`">FR</a> `+
			`<a target="_blank" href="../interlineaire/technique/`+livre+`-`+chapitre+`.html#V`+verset+`">TE</a> \n`+
			`<span style="padding-left:1em;cursor:pointer;user-select:none;" onclick="lire()">LIRE</span>`+
			`<table cellspacing="0"><tbody>`;


		}

	
	
	
	if (traducteur == "NOUVELLE_DISPOSITION")
	{
		
		sebastien = ""
		
		splitligneseb = bible[line].split('||-F-||')

		
		textete = splitligneseb[0].replace(info[0]+" ","").split(' ')
		textefr = splitligneseb[1].replace(info[0]+" ","").split('#')
		
		if (textete != "")
		{
		
			//CREATION TR SPAN
			for (s = 0 ; s != textete.length ; s++)
			{
				
					//console.log(textete)
					//console.log(textefr)
					
					if (textete[s].split('=')[2].match(/,/))
					{
						lem1 = textete[s].split('=')[2].split(',')[0];
						lem2 = textete[s].split('=')[2].replace(lem1+',',""); 
					}

					else
					{
						lem1 = textete[s].split('=')[2];
						lem2 = '-';
					}


					sebastien +=``+
					`<div class="int">`+
					`<span class="el">`+textete[s].split('=')[0]+`</span>`+
					`<span class="fr">`+textefr[s]+`</span>`+
					`<span class="info">`+lem1+`</span>`+
					`<span class="subinfo">`+lem2+`</span>`+
					`<span class="lemme"><a target="_blank" href="../lemme/`+textete[s].split('=')[1]+`.html">`+textete[s].split('=')[1]+`</a></span>`+
					`</div>`;


			}
			
			
			//add tr
			data += `\n<tr><td class="td1">NOUVELLE_DISPOSITION</td><td class="td2">2022</td><td class="td3">`+sebastien+`</td></tr>`;
			
			data += 
			'<tr>'+
			'<td class="td1" nowrap><button onclick="addtrs(\''+id_trs+'\');this.style.background=\'#00eb00\'">NOUVELLE_DISPOSITION</button></td>'+
			'<td class="td2">'+date+'</td>'+
			'<td class="td3"><textarea id="'+id_trs+'" class="trs" style="">'+textefr.join(' ').replace(/;/g," ?")+'</textarea></td></tr>'
		
		}
		
	}
	


	else
		data += 
			'<tr>'+
			'<td class="td1" nowrap>'+traducteur+'</td>'+
			'<td class="td2">'+date+'</td>'+
			'<td class="td3">'+texte+'</td></tr>'

	
	
	
	


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






