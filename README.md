- # README

  Información sobre los encabezados de una solicitud HTTP, junto con ejemplos para cada uno de ellos.

  ## Encabezados 

  A continuación se muestra una descripción de cada una de las propiedades de los encabezados de la solicitud, junto con un ejemplo:

  - `Host`: Indica el nombre de dominio del servidor al que se envía la solicitud. Ejemplo:

    ```php
    Host: localhost
    ```

  - `Connection`: Especifica el tipo de conexión que se mantiene entre el cliente y el servidor. Ejemplo:

    ```php
    Connection: keep-alive
    ```

  - `Content-Length`: Indica la longitud en bytes del cuerpo de la solicitud. Ejemplo:

    ```php
    Content-Length: 37
    ```

  - `sec-ch-ua`: Es un encabezado de seguridad utilizado por algunos navegadores para indicar la cadena de agente de usuario compatible con las tecnologías específicas utilizadas. Ejemplo:

    ```php
    sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
    ```

  - `sec-ch-ua-platform`: Indica la plataforma en la que se está ejecutando el navegador. Ejemplo:

    ```php
    sec-ch-ua-platform: "Linux"
    ```

  - `sec-ch-ua-mobile`: Indica si el navegador se está ejecutando en modo móvil. Ejemplo:

    ```php
    sec-ch-ua-mobile: ?0
    ```

  - `User-Agent`: Proporciona información sobre el navegador y el sistema operativo del cliente que realiza la solicitud. Ejemplo:

    ```php
    User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
    ```

  - `content-type`: Indica el tipo de contenido del cuerpo de la solicitud. Ejemplo:

    ```php
    Content-Type: application/json
    ```

  - `Accept`: Especifica los tipos de contenido que el cliente acepta como respuesta del servidor. Ejemplo:

    ```php
    Accept: */*
    ```

  - `Origin`: Indica el origen de la solicitud. Ejemplo:

    ```php
    Origin: http://localhost
    ```

  - `Sec-Fetch-Site`: Indica el contexto del origen de la solicitud. Ejemplo:

    ```php
    Sec-Fetch-Site: same-origin
    ```

  - `Sec-Fetch-Mode`: Indica el modo de la solicitud. Ejemplo:

    ```php
    Sec-Fetch-Mode: cors
    ```

  - `Sec-Fetch-Dest`: Indica el destino de la solicitud. Ejemplo:

    ```php
    Sec-Fetch-Dest: empty
    ```

  - `Referer`: Indica la URL de la página desde la cual se realizó la solicitud. Ejemplo:

    ```php
    Referer: http://localhost/SpUkM01-093/PHP/
    ```

  - `Accept-Encoding`: Especifica los tipos de codificación que el cliente puede aceptar para la respuesta. Ejemplo:

    ```php
    Accept-Encoding: gzip, deflate, br
    ```

  - `Accept-Language`: Indica los idiomas que el cliente prefiere para la respuesta. Ejemplo:

    ```php
    Accept-Language: es-CO,
    ```

# EJEMPLO

## 

```php
array(16) {
  ["Host"]=>
  string(9) "localhost"
  ["Connection"]=>
  string(10) "keep-alive"
  ["Content-Length"]=>
  string(2) "37"
  ["sec-ch-ua"]=>
  string(65) ""Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24""
  ["sec-ch-ua-platform"]=>
  string(7) ""Linux""
  ["sec-ch-ua-mobile"]=>
  string(2) "?0"
  ["User-Agent"]=>
  string(101) "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
  ["content-type"]=>
  string(16) "apllication/json"
  ["Accept"]=>
  string(3) "*/*"
  ["Origin"]=>
  string(16) "http://localhost"
  ["Sec-Fetch-Site"]=>
  string(11) "same-origin"
  ["Sec-Fetch-Mode"]=>
  string(4) "cors"
  ["Sec-Fetch-Dest"]=>
  string(5) "empty"
  ["Referer"]=>
  string(33) "http://localhost/SpUkM01-093/PHP/"
  ["Accept-Encoding"]=>
  string(17) "gzip, deflate, br"
  ["Accept-Language"]=>
  string(14) "es-CO,es;q=0.9"
}
```

