## TP final Técnicas y Herramientas de Software: Proyecto de simulación de blockchain

**Integrantes del grupo**

- Julieta Screpnik   julietascrepnik@gmail.com
- Jeronimo Sola      cuchujero@hotmail.com
- Raul Sanchez       fueguino84@gmail.com


**Comandos para correr el proyecto**

- npm install
- npm start

**Comando para correr tests**

- npm run test

**Comando para obtener cobertura de tests**

- npm run testCoverage

**Documentación**

**Diagrama de clases**

![alt text](https://i.ibb.co/BykPGCj/diagrama2.png)


**Decisiones de diseño**


**Patrones de diseño utilizados**

Los patrones de diseño que elegimos fueron: Patrón Composite y Patrón Strategy.

Usamos el patrón Composite para definir los diferentes tipos de transacciones que hay en una blockchain porque permite que el software sea flexible, facilmente escalable y este caracterizado por objetos fácilmente implementables, intercambiables, reutilizables y testeables. Al implementar este patron los objetos simples y complejos pueden ser tratados de la misma manera y de este modo se puede crear una estructura de objetos fácilmente inteligible que permite al cliente un acceso altamente eficiente.


Usamos el patrón Strategy para definir los mecanismos de generación y verificación de hash utilizando MD5 y SHA256 porque le permite al cliente elegir el mecanismo que mas le conviene en tiempo de ejecución y cambiarlo de manera dinamica segun se necesite. 


