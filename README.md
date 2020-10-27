# API del GestionCovid. TTPS 2020
Proyecto para gestionar pacientes covid - TTPS 2020 - UNLP

## Sobre la tecnologia

El proyecto está creado con Net Core 2.2.0 (https://dotnet.microsoft.com/download/dotnet-core/2.2).

Utiliza Entity Framework como ORM y persiste en una BBDD Sql Server.

## Iniciar el proyecto
Para iniciar el proyecto es necesaria la instalacion de netcore y de sql. Una vez hecho esto, en la carpeta princial donde se encuentra el archivo "GestionCovid.sln", abrimos la consola y usamos el comando *dotnet run*.

El proyecto abrirá en tu navegador el url "https://localhost:44350/swagger".

Swagger nos permite probar todos los endpoints desde esa misma web.

Para correr las migraciones (crear la base de datos o actualizarla al modelo actual) se puede utilizar el endpoint */api/migrate*

Además, el endpoint */api/generate-data* nos va a crear una informacion basica en la BBDD para poder iniciar a trabajar.

Creará un usuario de tipo "admin" con email: admin y password: admin
