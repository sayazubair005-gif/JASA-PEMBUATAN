@echo off
chcp 65001 >nul
title Download Hero MLBB
setlocal

echo ==========================================
echo   DOWNLOAD HERO MLBB - ZUBAIR WEBSITE
echo ==========================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
"$ErrorActionPreference='Stop';" ^
"$items=@(" ^
"@{Name='hero-alfa.png';Url='https://raw.githubusercontent.com/Sparkies01/Splash/main/Nana/Slumber%%20Party.png'}," ^
"@{Name='hero-faruk.png';Url='https://raw.githubusercontent.com/Sparkies01/Splash/main/Balmond/Power%%20Source.png'}," ^
"@{Name='hero-zubair.png';Url='https://raw.githubusercontent.com/Sparkies01/Splash/main/Ling/Serene%%20Plume.png'}," ^
"@{Name='hero-anak-e-pak-yon.png';Url='https://raw.githubusercontent.com/Sparkies01/Splash/main/Sun/Monkey%%20King.png'}" ^
");" ^
"foreach($i in $items){Write-Host ('Mengunduh '+$i.Name+' ...'); Invoke-WebRequest -Uri $i.Url -OutFile (Join-Path $PSScriptRoot $i.Name)};" ^
"Write-Host 'Selesai. Semua gambar sudah diunduh.' -ForegroundColor Green"

if errorlevel 1 (
  echo.
  echo Download gagal. Periksa koneksi internet lalu jalankan lagi.
) else (
  echo.
  echo File tersimpan di folder ini.
)
pause
