"use strict";
let fname = document.getElementById('fname');
let desig = document.getElementById('desig');
let desc = document.getElementById('desc');
let mail = document.getElementById('mail');
let phone = document.getElementById('phone');
let web = document.getElementById('web');
let locat = document.getElementById('location');
let upload = document.getElementById('upload');
let edutitle1 = document.getElementById('edutitle1');
let uni1 = document.getElementById('uni1');
let edutitle2 = document.getElementById('edutitle2');
let uni2 = document.getElementById('uni2');
let edutitle3 = document.getElementById('edutitle3');
let uni3 = document.getElementById('uni3');
let lang1 = document.getElementById('lang1');
let prof1 = document.getElementById('prof1');
let lang2 = document.getElementById('lang2');
let prof2 = document.getElementById('prof2');
let lang3 = document.getElementById('lang3');
let prof3 = document.getElementById('prof3');
let skl1 = document.getElementById('skl1');
let skl2 = document.getElementById('skl2');
let skl3 = document.getElementById('skl3');
let skl4 = document.getElementById('skl4');
let skl5 = document.getElementById('skl5');
let skl6 = document.getElementById('skl6');
let skl7 = document.getElementById('skl7');
let skl8 = document.getElementById('skl8');
let skl9 = document.getElementById('skl9');
let skl10 = document.getElementById('sk110');
let int1 = document.getElementById('int1');
let int2 = document.getElementById('int2');
let int3 = document.getElementById('int3');
let int4 = document.getElementById('int4');
let int5 = document.getElementById('int5');
let int6 = document.getElementById('int6');
let curwork = document.getElementById('curwork');
let durwork = document.getElementById('durwork');
let curworkm1 = document.getElementById('curworkm1');
let curworkm2 = document.getElementById('curworkm2');
let curworkm3 = document.getElementById('curworkm3');
let curworkm4 = document.getElementById('curworkm4');
let curworkm5 = document.getElementById('curworkm5');
let pastwork = document.getElementById('curworkm1');
let durpast = document.getElementById('durpast');
let pastworkm1 = document.getElementById('pastworkm1');
let pastworkm2 = document.getElementById('pastworkm2');
let pastworkm3 = document.getElementById('pastworkm3');
let pastworkm4 = document.getElementById('pastworkm4');
let pastworkm5 = document.getElementById('pastworkm5');
let ccone = document.getElementById('ccone');
let cconeref = document.getElementById('cconeref');
let cctwo = document.getElementById('cctwo');
let cctworef = document.getElementById('cctworef');
let ccthree = document.getElementById('ccthree');
let ccthreeref = document.getElementById('ccthreeref');
let ccfour = document.getElementById('ccfour');
let ccfourref = document.getElementById('ccfourref');
let submitbtn = document.getElementById('submitbtn');
let form = document.getElementById('resform');
form?.addEventListener('submit', (s) => {
    s.preventDefault();
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('desig', desig.value);
    localStorage.setItem('desc', desc.value);
    localStorage.setItem('mail', mail.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('web', web.value);
    localStorage.setItem('locat', locat.value);
    localStorage.setItem('upload', upload.value);
    localStorage.setItem('edutitle1', edutitle1.value);
    localStorage.setItem('uni1', uni1.value);
    localStorage.setItem('edutitle2', edutitle2.value);
    localStorage.setItem('uni', uni2.value);
    localStorage.setItem('edutitle3', edutitle3.value);
    localStorage.setItem('uni3', uni3.value);
    localStorage.setItem('lang1', lang1.value);
    localStorage.setItem('prof1', prof1.value);
    localStorage.setItem('lang2', lang2.value);
    localStorage.setItem('prof2', prof2.value);
    localStorage.setItem('lang3', lang3.value);
    localStorage.setItem('prof3', prof3.value);
    localStorage.setItem('skl1', skl1.value);
    localStorage.setItem('skl2', skl2.value);
    localStorage.setItem('skl3', skl3.value);
    localStorage.setItem('skl4', skl4.value);
    localStorage.setItem('skl5', skl5.value);
    localStorage.setItem('skl6', skl6.value);
    localStorage.setItem('skl7', skl7.value);
    localStorage.setItem('skl8', skl8.value);
    localStorage.setItem('skl9', skl9.value);
    localStorage.setItem('skl10', skl10.value);
    localStorage.setItem('int1', int1.value);
    localStorage.setItem('int2', int2.value);
    localStorage.setItem('int3', int3.value);
    localStorage.setItem('int4', int4.value);
    localStorage.setItem('int5', int5.value);
    localStorage.setItem('int6', int6.value);
    localStorage.setItem('curwork', curwork.value);
    localStorage.setItem('durwork', durwork.value);
    localStorage.setItem('curworkm1', curworkm1.value);
    localStorage.setItem('curworkm2', curworkm2.value);
    localStorage.setItem('curworkm3', curworkm3.value);
    localStorage.setItem('curworkm4', curworkm4.value);
    localStorage.setItem('curworkm5', curworkm5.value);
    localStorage.setItem('pastwork', pastwork.value);
    localStorage.setItem('durpast', durpast.value);
    localStorage.setItem('pastworkm1', pastworkm1.value);
    localStorage.setItem('pastworkm2', pastworkm2.value);
    localStorage.setItem('pastworkm3', pastworkm3.value);
    localStorage.setItem('pastworkm4', pastworkm4.value);
    localStorage.setItem('pastworkm5', pastworkm5.value);
    localStorage.setItem('ccone', ccone.value);
    localStorage.setItem('cconeref', cconeref.value);
    localStorage.setItem('cctwo', cctwo.value);
    localStorage.setItem('cctworef', cctworef.value);
    localStorage.setItem('ccthree', ccthree.value);
    localStorage.setItem('ccthreeref', ccthreeref.value);
    localStorage.setItem('ccfour', ccfour.value);
    localStorage.setItem('ccfourref', ccfourref.value);
    localStorage.setItem('int1', int1.value);
});
