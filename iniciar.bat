@echo off
title Viston Landing Page - Iniciando...

:: Node.js portatil
set "NODE_DIR=%USERPROFILE%\nodejs-portable\node-v22.16.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"

:: Pasta do projeto
set "PROJETO=%~dp0"
cd /d "%PROJETO%"

echo ============================================
echo    VISTON LANDING PAGE - AMBIENTE LOCAL
echo ============================================
echo.
echo  Node.js: %NODE_DIR%
echo  Pasta:   %PROJETO%
echo.

:: Verifica se o Node.js portatil existe
if not exist "%NODE_DIR%\node.exe" (
    echo [ERRO] Node.js portatil nao encontrado em:
    echo        %NODE_DIR%
    echo.
    echo Verifique se a pasta existe.
    pause
    exit /b 1
)

echo [OK] Node.js detectado com sucesso!
echo.
echo Iniciando servidor Vite...
echo.

call npm run dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo [AVISO] Iniciando diretamente via Node...
    "%NODE_DIR%\node.exe" "%PROJETO%node_modules\vite\bin\vite.js"
)

pause
