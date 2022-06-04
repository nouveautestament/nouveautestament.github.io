sed -r "s/^([0-9]+)-(.*?)$/ sed -i  -r  \"s\/[0-9]+:\/\1:\/4\"      \2.txt      /" classement.txt | sh
