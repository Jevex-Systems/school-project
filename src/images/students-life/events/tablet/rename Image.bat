@echo off
setlocal enabledelayedexpansion

:: Отримати назву поточної директорії (папки)
for %%a in ("%cd%") do set "foldername=%%~nxa"

:: Проходження по всіх файлах у директорії
for %%f in (*) do (
    set "filename=%%~nf"

    :: Якщо файл починається з Image, замінити "Image" на назву папки
    if "!filename:~0,5!"=="Image" (
        set "newname=!foldername!!filename:~5!"
    ) else (
        set "newname=!filename!"
    )

    :: Видалити все після першого символу "_"
    for /f "delims=_" %%i in ("!newname!") do set "newname=%%i"

    :: Перейменувати файл, якщо ім'я змінилося
    if not "!newname!"=="!filename!" (
        ren "%%f" "!newname!%%~xf"
    )
)

echo Завершено!
pause
exit /b
