fs			= require('fs');


nouvelle_disposition_te	= fs.readFileSync('../../database/TE/nouvelle_disposition_te.txt', 'utf8').split(/\r?\n/);





//MAKE TXT

for (nb=0;nb!=nouvelle_disposition_te.length;nb++)
{
	

	if (nouvelle_disposition_te[nb] != '')
	{
		
		te		= nouvelle_disposition_te[nb].split(' ');
		textete = nouvelle_disposition_te[nb].replace(te[0]+' ', "").split(' ')
		
		
		for (x = 0 ; x != textete.length ; x++)
		{
			
			if (textete[x] != "")
			{
				
				morph_here = textete[x].split('=')[2]
				console.log(morph_here)
		
		
				// node make-morph.js | sort -V | uniq | cat -n | awk '{print "\""$2"\":\""$1"\","}'
				
				
				// node make-morph.js | sort -V | uniq | cat -n | awk '{print "<tr><td nowrap class=nb>" $1 "</td><td nowrap class=morph width=\"800\">" $2 "</td></tr>"}' | sed 's/,/, /g'
				
				
				// node make-morph.js | sort -V | uniq | cat -n | awk '{print "<tr><td nowrap class=nb>" $1 "</td><td nowrap class=morph>" $2 "</td></tr>"}' | sed 's/,/, /g'
			}
			
		}
		
	}

}

