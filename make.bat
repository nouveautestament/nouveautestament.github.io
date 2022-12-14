@echo off
cls

echo TRADUCTION
echo ==========
cd traduire
echo traduire
node make.js >> NOUVELLE_DISPOSITION.txt
move /Y NOUVELLE_DISPOSITION.txt ..\database\FR\
cd..

echo:
echo INTERLINEAIRE
echo =============
cd interlineaire
cd hellene
echo hellene
node make
cd ..
cd francais
echo francais
node make
cd ..
cd technique
echo technique
node make
cd ..
cd ..

echo:
echo TRS
echo ===
cd trs
node make.js
cd ..

echo:
echo LEMME
echo =====
cd lemme
echo lemme
node make
cd ..