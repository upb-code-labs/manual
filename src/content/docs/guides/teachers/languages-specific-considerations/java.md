---
title: Consideraciones especiales para escribir pruebas en Java en la plataforma Code Labs
description: Una guía para que los profesores escriban pruebas en Java en la plataforma Code Labs.
---

## Consideraciones generales

La plataforma Code Labs utiliza la Sandbox de pruebas de código abierto [`Ares`](https://github.com/ls1intum/Ares) para ejecutar las pruebas en el lenguaje Java. Si deseas conocer más sobre las características de `Ares`, puedes consultar la [documentación de Ares](https://ls1intum.github.io/Ares/) y si no estás familiarizado con el framework `JUnit 5`, puedes consultar la [documentación oficial de JUnit 5](https://junit.org/junit5/docs/current/user-guide/).

Adicionalmente, te sugerimos tener en cuenta las siguientes consideraciones al escribir pruebas en Java para la plataforma Code Labs:

1. Siempre agrega la anotación `@Timeout` a los métodos de prueba para limitar el tiempo que pueden ejecutarse las pruebas. Para saber más sobre la anotación `@Timeout`, puedes consultar la [sección de Timeouts](https://ls1intum.github.io/Ares/#_timeouts) de la documentación de Ares.

En resumen, tus archivos de pruebas deberían verse similares al siguiente ejemplo:

```java
package your_package_name;

import org.junit.jupiter.api.*;

public class YourTests {
    @Test
    @Timeout(value = 1, unit = java.util.concurrent.TimeUnit.SECONDS)
    public void testName() {
        /*
        Your test code here
        */
    }
}
```

:::note
Siempre agregamos un límite de 2 minutos para ejecutar todas las pruebas. Incluso si no agregas la anotación `@Timeout` a los métodos de prueba, la ejecución se detendrán después de 2 minutos y si agregas una anotación `@Timeout` con un valor mayor a 2 minutos, será ignorada y las pruebas se detendrán después de 2 minutos.
:::

2. Las anotaciones `@Hidden` y `@Public` de la librería [`Ares`](https://ls1intum.github.io/Ares/#_integrating_ares) no son soportadas en la plataforma Code Labs ya que son específicas de la plataforma [`Artemis`](https://github.com/ls1intum/Artemis).

3. **NO** es posible ejecutar pruebas que requieran interacción con el sistema operativo, como abrir sockets, utilizar puertos del host, etc. La plataforma Code Labs está diseñada para ejecutar **pruebas unitarias** y no pruebas de integración o pruebas que requieran interacción con el sistema operativo.

4. Si en las pruebas se requiere importar clases o interfaces que se encuentren dentro de la carpeta `src/main/java`, asegúrate de indicar a tus estudiantes que ellos también deben crear las mismas clases o interfaces **con el mismo nombre y en el mismo paquete** en sus soluciones. La razón de esto se explica en la sección de [estructura de carpetas](#estructura-de-carpetas).

5. **NO** es posible agregar nuevas dependencias a las pruebas. Cualquier cambio en el archivo `pom.xml` será ignorado. La razón de esto se explica en la sección de [estructura de carpetas](#estructura-de-carpetas).

6. A modo de buena práctica, evita incluir el directorio `target` en el archivo `zip` que contenga las pruebas. Este directorio es generado por `Maven` y contiene los archivos compilados del proyecto. La plataforma Code Labs generará el directorio `target` automáticamente al ejecutar las pruebas, por lo que no es necesario incluirlo y solo aumentará el tamaño del archivo `zip`.

## Estructura de carpetas

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

Ten en cuenta que solo la carpeta `src/test/java` es relevante para escribir las pruebas. **Los cambios realizados en la carpeta `src/main/java` serán reemplazados por las soluciones de los estudiantes al ejecutar las pruebas y los cambios realizados en el archivo `pom.xml` serán ignorados por razones de seguridad**.

:::caution
Asegúrate de que el archivo `zip` que subas a la plataforma tenga la misma estructura que la mostrada anteriormente. Si subes un archivo `zip` con más de una carpeta, o la carpeta `java_template` no es la carpeta raíz del archivo `zip`, la plataforma no podrá leer las pruebas y los estudiantes no podrán enviar sus soluciones.
:::

:::tip
Puedes renombrar la carpeta `java_template` si lo deseas y la plataforma seguirá siendo capaz de leer las pruebas. Solo asegúrate de que la carpeta renombrada se mantenga en la raíz del archivo `zip`. Por ejemplo, si renombras la carpeta `java_template` a `test_block_1`, la estructura del contenido del archivo `zip` debería ser:

```bash
test_block_1/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   └── resources/
    └── test/
        └── java/
```

:::
