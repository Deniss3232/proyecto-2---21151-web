# Proyecto 2 - Calculadora React

## Descripción

Este proyecto consiste en una calculadora desarrollada utilizando React y TypeScript.

La aplicación fue creada utilizando componentes reutilizables y un hook personalizado para manejar la lógica de las operaciones matemáticas.

La calculadora incluye validaciones especiales solicitadas en el proyecto, como:

- límite máximo de 9 caracteres
- manejo de errores
- números negativos
- operaciones básicas
- operaciones extra
- pruebas automatizadas
- documentación visual con Storybook

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Vitest
- Storybook
- ESLint

---

## Funcionalidades implementadas

### Operaciones básicas

- Suma
- Resta
- Multiplicación
- División
- Igualdad

### Funcionalidades extra

- Operación módulo
- Punto decimal
- Cambio de signo (+/-)
- Botón de limpieza
- Manejo de errores
- Validación de límite de caracteres

---

## Reglas implementadas

- El display no permite más de 9 caracteres
- Los números negativos muestran ERROR
- Los números demasiado grandes muestran ERROR
- El punto decimal cuenta dentro del límite
- Los números adicionales después del límite son ignorados

---

## Cómo instalar el proyecto

Clonar el repositorio:

```bash
git clone https://github.com/Deniss3232/proyecto-2---21151-web.git
```

Entrar a la carpeta del proyecto:

```bash
cd proyecto-2---21151-web
```

Instalar dependencias:

```bash
npm install
```

---

## Cómo correr la aplicación

```bash
npm run dev
```

---

## Cómo correr los tests

```bash
npm test
```

---

## Cómo correr Storybook

```bash
npm run storybook
```

---

## Cómo correr el lint

```bash
npm run lint
```

---

## Estructura del proyecto

```text
src/
 ├── components/
 ├── hooks/
 ├── stories/
 ├── App.tsx
 └── main.tsx
```

---

## Autor

Denis Rodriguez 21151
