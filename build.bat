@echo off
title Viston Landing Page - Gerando Build...

:: Node.js portatil
set "NODE_DIR=%USERPROFILE%\nodejs-portable\node-v22.16.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"

:: Pasta do projeto
set "PROJETO=%~dp0"
cd /d "%PROJETO%"

echo ============================================
echo    VISTON LANDING PAGE - BUILD
echo ============================================
echo.

if not exist "%NODE_DIR%\node.exe" (
    echo [ERRO] Node.js portatil nao encontrado em:
    echo        %NODE_DIR%
    pause
    exit /b 1
)

call npm run build

if %ERRORLEVEL% neq 0 (
    echo [AVISO] Compilando diretamente via Node...
    "%NODE_DIR%\node.exe" "%PROJETO%node_modules\vite\bin\vite.js" build
)

echo.
echo ============================================
echo  Build finalizado com sucesso na pasta /dist!
echo ============================================
pause
