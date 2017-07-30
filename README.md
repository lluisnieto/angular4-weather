# Altran Test Angular 2

Crear una aplicación en Angular v 2 que permita consumir la API de
http://openweathermap.org/api

## La aplicación debe cumplir los siguientes requisitos:

- El proyecto debe estar en Angular 2
- El proyecto debe estar con git en github.com en un repositorio público
- Se debe crear un componente de Angular que consuma la API OpenWeatherMap y
debe renderizar la temperatura de las siguientes ciudades:
i. Santiago
ii. Buenos Aires
iii. Lima
iv. Sao Pablo
- El componente debe almacenar dichas temperaturas en Store
- El componente debe refrescar las temperaturas de las ciudades y actualizarlas en
Store cada 3 min.
- Se debe mantener un historial de las temperaturas
- Las vistas debe tener un mínimo de diseño y usabilidad (Bootstrap, Foundation, ...)
Casos de uso
- El componente debe obtener la información de la api de OpenWheaterMap.
- Las temperaturas se debe refrescar cada 3 min. y actualizar en la Store.
Subir el código a un repositorio público (github preferiblemente) y pasarnos la URL
para examinarlo.

## Angular CLI

Obligatorio tener dependencia global angular-cli para poder compliar
$ npm install -g @angular/cli@latest

## Servidor de desarrollo

Ejecuta `npm start` para un servidor dev. Ir a `http://localhost:4200/`. La app se recagará automáticamente al cambiar archivos de código.

## Más ayuda

Para conseguir más ayuda de 'angular-cli' ejecuta 'ng help' o ir a la página [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

## Vista previa

http://www.motocross.es/temp/ng2-weather/

## Contacto

Lluis Nieto Soler -> anconetano@gmail.com