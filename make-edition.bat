@echo off
cls

echo EDITION
echo =======


cd edition

cd hellene
echo hellene
node make
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to odt all.html
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to pdf all.html
cd ..


cd el-fr
echo el-fr
node make
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to odt all.html
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to pdf all.html
cd ..


cd francais_brut
echo francais_brut
node make
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to odt all.html
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to pdf all.html
cd ..


cd ndfbrut-alain
echo ndfbrut-alain
node make
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to odt all.html
rem "C:\Program Files\LibreOffice\program\swriter.exe" --convert-to pdf all.html
cd ..


cd ..
