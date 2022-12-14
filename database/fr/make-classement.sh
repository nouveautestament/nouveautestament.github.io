e=0;for x in `cat classement-list.txt`; do e=$[$e+1]  ;echo $e-$x; done >> classement.txt
