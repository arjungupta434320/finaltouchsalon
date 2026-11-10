@echo off
title Final Touch Unisex Salon - Build
echo ========================================================
echo   FINAL TOUCH UNISEX SALON - COMPILE PRODUCTION BUILD
echo ========================================================
echo.
cd /d "%~dp0"

echo Building production-ready assets into the dist folder...
call npm run build
echo.
echo Build finished! The files inside 'dist' are ready to deploy anywhere.
pause
