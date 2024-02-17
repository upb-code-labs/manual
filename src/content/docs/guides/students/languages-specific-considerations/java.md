---
title: Consideraciones especiales para enviar soluciones en Java en la plataforma Code Labs
description: Una guía para que los estudiantes envíen soluciones en Java en la plataforma Code Labs.
---

## Consideraciones generales

Te sugerimos tener en cuenta las siguientes consideraciones al enviar soluciones en Java para la plataforma Code Labs:

1. Se espera un comportamiento ético por parte de los estudiantes. El envío de código malicioso será penalizado por la institución educativa y puede conllevar a repercusiones legales de acuerdo a la ley `1273 de 2009` de la República de Colombia o cualquier otra ley aplicable.

2. Cualquier cambio en el archivo `pom.xml` será ignorado. La razón de esto se explica en la sección de [estructura de carpetas](#estructura-de-carpetas).

3. A modo de buena práctica, evita incluir el directorio `target` en el archivo `zip` que contenga tu solución. Este directorio es generado por `Maven` y contiene los archivos compilados del proyecto. La plataforma Code Labs generará el directorio `target` automáticamente al ejecutar las pruebas, por lo que no es necesario incluirlo y solo aumentará el tamaño del archivo `zip`.

### Estructura de carpetas

En caso del lenguaje Java, una vez que extraigas el archivo `zip` con el template, encontrarás **una única** carpeta con la siguiente estructura:

```bash
java_template/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    └── test/
        └── java/
```

Ten en cuenta que solo la carpeta `src/main/java` es relevante para escribir tu solución, ahí es donde deberás crear tus paquetes y escribir tu código. **Los cambios realizados en la carpeta `src/test/java` serán reemplazados por los `tests` escritos por los profesores y los cambios realizados en el archivo `pom.xml` serán ignorados por razones de seguridad**.

:::caution
Asegúrate de que el archivo `zip` que subas a la plataforma tenga la misma estructura que la mostrada anteriormente. Si subes un archivo `zip` con más de una carpeta, o la carpeta `java_template` no es la carpeta raíz del archivo `zip`, la plataforma no podrá leer tu solución y, por tanto, el veredicto de las pruebas será un fallo.
:::

:::tip
Puedes renombrar la carpeta `java_template` si lo deseas y la plataforma seguirá siendo capaz de leer tu solución. Solo asegúrate de que la carpeta renombrada se mantenga en la raíz del archivo `zip`. Por ejemplo, si renombras la carpeta `java_template` a `solution_1`, la estructura del contenido del archivo `zip` debería ser:

```bash
solution_1/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    └── test/
        └── java/
```

:::
