function chauchat(cargador) {
    let disparo = Math.random() * 100; // Hay un 80% de probabilidad de que se quede atascada
    //console.log(disparo);
    let disparosSeguidos = 0;
    if (disparo > 80) { // Hay un 80% de probabilidad de que se quede atascada
        console.log("Illo, me he quedao pillá!");
    } else { // Si no se atasca entra en modo disparo
        for (let i = 0; i < 7; i++) {
            if (disparosSeguidos == 3) {
                disparosSeguidos = 0;
                console.log("\n");
                i--; // Esto lo hago porque si no, pasa una posición del array y se desperdicia una bala
            } else {
                console.log(cargador[i]);
                disparosSeguidos++;
            }
        }
    }
}
let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
chauchat(cargador);