import Kutya from "./kutyaKartya.js";
import { kutyaLISTA } from "./adat.js";

$(function () {
 let aktKutyaAdat= kutyaLISTA[0]
    new Kutya(szuloElem, aktKutyaAdat);
});