# Universo de Harry Potter - Angular

![Angular](https://img.shields.io/badge/Angular-20.3.1-red) ![License](https://img.shields.io/badge/License-MIT-blue) ![Build](https://img.shields.io/badge/Build-Passing-brightgreen)

Proyecto final de un curso de Angular que integra componentes, servicios, comunicación padre-hijo, ruteo y formularios reactivos, ambientado en el universo de **Harry Potter**.  



<img  alt="git-harry-potter" src="https://github.com/user-attachments/assets/a2c62e3a-bd62-4c46-8181-7d44a37f2287" />

🔗 [Ver proyecto en línea](https://harrypotter-universe.vercel.app/welcome)  

---

## ⚡ Funcionalidades

- **Inicio:** Mensaje de bienvenida con variable booleana y sección de personajes usando interpolación y *ngIf.  
- **Casas de Hogwarts:** Tarjetas giratorias, carrusel de imágenes (*ngFor, *ngClass), chat interactivo con Dobby, datos desde servicio.  
- **Hechizos:** Lista de hechizos desde servicio local y API externa, comunicación padre-hijo (@Input/@Output), modal con animación (*ngIf).  
- **Secretos:** Carrusel de secretos con animación de transición, imágenes y descripciones.  
- **Expreso de Hogwarts:** Formulario reactivo con cálculo de total, ticket modal dinámico y generación de asiento aleatorio.  

---

## 🛠 Tecnologías

- Angular 20.3.1, TypeScript, HTML5, CSS3  
- Reactive Forms y directivas estructurales (`*ngIf`, `*ngFor`)  
- Servicios e inyección de dependencias  
- Consumo de APIs con HttpClient  
- Ruteo con RouterOutlet (`home`, `casas`, `hechizos`, `secretos`, `expreso`)  

---

## 🚀 Instalación y ejecución

```bash
# Clonar repositorio
git clone https://github.com/yasarevalo05-code/harrypotter-universe.git

# Ingresar al proyecto
cd harrypotter-universe

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve

# Abrir en navegador
http://localhost:4200
