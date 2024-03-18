function copiarTexto() {
    // Selecciona el elemento que contiene el texto que deseas copiar
    var elemento = document.getElementById("texto_a_copiar");
    
    // Crea un área de texto oculta para copiar el texto dentro de ella
    var areaDeTexto = document.createElement("textarea");
    areaDeTexto.value = elemento.textContent; // Copia el texto dentro del área de texto
    
    // Añade el área de texto al DOM
    document.body.appendChild(areaDeTexto);
    
    // Selecciona y copia el texto dentro del área de texto
    areaDeTexto.select();
    document.execCommand("copy");
    
    // Elimina el área de texto del DOM ya que no se necesita más
    document.body.removeChild(areaDeTexto);
    
    // Muestra una alerta de que el texto ha sido copiado
    alert("Texto copiado: " + areaDeTexto.value);
  }