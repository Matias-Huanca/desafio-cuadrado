function main() {
  const cuadrado = document.querySelector(".cuadrado-rojo");
  // console.log(cuadrado);
  // cuadrado.style.marginLeft = "100px";

  //Escuchamos el evento en toda la ventana del navegador "evento - KEYDOWN"
  document.addEventListener("keydown", (e) => {
    // Parseamos marginLeft
    const marginLeftText = cuadrado.style.marginLeft.replace("px", "");
    const parsMarginLeft = parseInt(marginLeftText || 0);
    console.log("Valor de MarginLeft:", parsMarginLeft);

    // Parseamos marginTop
    const marginTopText = cuadrado.style.marginTop.replace("px", "");
    const parsMarginTop = parseInt(marginTopText || 0);
    console.log("Valor de MarginTop:", parsMarginTop);

    // Cambios en la prop. marginLeft
    let newMarginLeft = parsMarginLeft;
    // Cambios en la prop. marginTop
    let newMarginTop = parsMarginTop;

    // Escuchando eventos de las teclas flechas
    if (e.code == "ArrowLeft") {
      newMarginLeft--;
      console.log("izquierda");
    } else if (e.code == "ArrowRight") {
      newMarginLeft++;
      console.log("derecha");
    } else if (e.code == "ArrowUp") {
      newMarginTop--;
      console.log("arriba");
    } else if (e.code == "ArrowDown") {
      newMarginTop++;
      console.log("abajo");
    }
    // Pisamos valor de MarginLeft
    cuadrado.style.marginLeft = newMarginLeft + "px";
    // Pisamos valor de MarginTop
    cuadrado.style.marginTop = newMarginTop + "px";
  });
}
main();
