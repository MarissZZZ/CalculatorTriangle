/* funkcija nolasa formā ievadītās vērtības un 
ja ievadīto malu garumi ir lielāki par 0,
tad funkcija atgrie vērtības `m1, m2, m3`,
pretējā gadījuma atgriež `False`
*/

function nolasa() {
    const malas = document.getElementsByClassName("mala");
    const m1 = parseFloat(mala1.value); // ievadīto informāciju atgriež kā decimālu skaitli
    const m2 = parseFloat(mala2.value); // ievadīto informāciju atgriež kā decimālu skaitli
    const m3 = parseFloat(mala3.value); // ievadīto informāciju atgriež kā decimālu skaitli

    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 }
    } else {
        console.log(false);
        return (false);
    }

    // perimetra aprēķināšana

    function perimetrs(m1, m2, m3) {

        const m = nolasa();
        m1 = m.m1; m2 = m.m2; m3 = m.m3;
        console.log(m1, m2, m3);

        const p = m1 + m2 + m3;
        console.log(p);
        return (p);
        // vajag atgriezt izrēķināto perimetru
    }


    function pusperimetrs(m1, m2, m3) {
        const pusp = p / 2;
        console.log(pusp);
        return (pusp);
        // vajag atgriezt izrēķināto pusperimetru
    }

    function laukums(m1, m2, m3) {
        const pusp = perimeter(m1, m2, m3) / 2;
        const laukums1 = (math.sqrt(pusp * (pusp - m1)(pusp - m2)(pusp - m3)))
        console.log(laukums1);
        return (laukums1);
    }
}
