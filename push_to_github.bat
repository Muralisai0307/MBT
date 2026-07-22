@echo off
echo Initializing Git repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "Initial commit of MBT homepage redesign"

echo Setting main branch...
git branch -M main

echo Adding remote origin...
git remote add origin https://github.com/Muralisai0307/MBT.git

echo Pushing to GitHub...
git push -u origin main

echo.
echo Done! Press any key to exit.
pause >nul
