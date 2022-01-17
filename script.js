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


/* function pusperimetrs(m1, m2, m3) {

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
 
    let pusp = m1 + m2 + m3 / 2;
    console.log(pusp);
    return (pusp);  
    // vajag atgriezt izrēķināto pusperimetru
} */

function laukums(m1, m2, m3) {

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;

    const pusp = perimetrs(m1, m2, m3) / 2;
    let laukums1 = Math.sqrt(pusp * (pusp - m1) * (pusp - m2) * (pusp - m3));
    console.log(laukums1);
    return (laukums1);
}

function irTrijsturis(m1, m2, m3) {

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;

    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

function rezultats() {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;

    console.log(m1, m2, m3);

    if (!nolasa()) {
        t = "Nekorekti ievadīti dati, trijstūra malu vērtībām ir jābūt lielākām par 0";

    } else {
        if (irTrijsturis(m1, m2, m3) == false) {
            t = "Trijstūris neeksistē, jo jebkuru 2 malu garumu summai ir jābūt lielākai par trešo malu!";

        } else {
            t = "Trijstūris ar malu garumiem " + m1 + ", " + m2 + " un " + m3 + " eksistē.";

            const p = perimetrs(m1, m2, m3);
            const s = Math.round(laukums(m1, m2, m3) * 100) / 100;
            t += " Perimetrs ir " + p + " un laukums ir " + s + ".";

            if (m1==m2 && m2==m3) {

                t +=" Tas ir vienādmalu trijsūris.";
            }

        }
        

        console.log(t);
        return t;
    }
}

function izvadaTekstu() {
    // jāizsauc funkcija rezultats();
    const teksts = rezultats();
    // elementā ar id "izvade" izvada tekstu
    console.log(teksts);
    const sakne = document.getElementById("izvade");
    const raksti = document.createElement("p");
    sakne.innerHTML = teksts;
    sakne.appendChild(raksti);

}

