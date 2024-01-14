const date = new Date();
const date2 = new Date(date.getTime() + 7 * 60 * 60 * 1000);
const today = date.getDay();
const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const siswa = [
    "Abdul Hadi", "Aditya Alfitodinova", "Akmal Sopandi", "Aldri Septi", "Anggira Alfadilah", "Arifa Setiawati",
    "Arkan Mustofa P", "Bagas Purnama Alam", "Berni Naufal", "Dhimas Try Saputra", "Faisal Alfarizi", "Fitra Ramadanu",
    "Frega Nanda", "Hadiat Rashad", "Ihfan", "Keke Yulia", "Kent Nathan", "M. Fathir Satra",
    "M. Fajar Ilham", "M. Ghailan", "Muthia Khoirun Nisa", "Nabila Rizkia Putri", "Narendra Yakez", "Radit Nur Rizki",
    "Rafi Fauzi Rohman", "Rahel Ardiano", "Raihan Akmal", "Rasya Akbar", "Reyvan Fasyaditha", "Rian yanuar",
    "Rifwan M Taufiq", "Salfa Faizal Firdaus", "Salwa Rahma Agustin", "Sindi Wiranti", "Syafitri Alifmana", "Zulkifli Nasution"
]

piket = {
    0: `<h2>PIKET</h2>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    `,
    1: (() => {
        let info = '';
        for (let i = 0; i < 6; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
    2: (() => {
        let info = '';
        for (let i = 6; i < 12; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
    3: (() => {
        let info = '';
        for (let i = 12; i < 18; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
    4: (() => {
        let info = '';
        for (let i = 18; i < 24; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
    5: (() => {
        let info = '';
        for (let i = 24; i < 30; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
    6: (() => {
        let info = '';
        for (let i = 30; i < 36; i++) {
            info = info + `<p>${siswa[i]}</p>`;
        }
        return info;
    })(),
}

const mapel = {
    0: "B. Indonesia", 
    1: "Matematika", 
    2: "Sejarah", 
    3: "PKK", 
    4: "Mikrotik", 
    5: "Basis Data", 
    6: "PBO", 
    7: "PABP", 
    8: "B. Inggris", 
    9: "Jepang", 
    10: "WEB", 
    11: "PKN", 
    12: "PJOK"
}


pelajaran = {
    0: `<h2>PIKET</h2>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    <P>Libur</P>
    `,
    1: `<h2>PELAJARAN</h2>
    <P>${mapel[1]}</P>
    <P>${mapel[3]}</P>
    <P>${mapel[0]}</P>
    <P>${mapel[11]}</P>
    `,
    2: `<h2>PELAJARAN</h2>
    <P>${mapel[6]}</P>
    <P>${mapel[8]}</P>
    <P>${mapel[7]}</P>
    <P>${mapel[0]}</P>
    <P>${mapel[1]}</P>
    `,
    3: `<h2>PELAJARAN</h2>
    <P>${mapel[3]}</P>
    <P>${mapel[12]}</P>
    <P>${mapel[7]}</P>
    <P>${mapel[10]}</P>
    `,
    4: `<h2>PELAJARAN</h2>
    <P>${mapel[6]}</P>
    <P>${mapel[10]}</P>
    <P>${mapel[9]}</P>
    <P>${mapel[4]}</P>
    `,
    5: `<h2>PELAJARAN</h2>
    <P>${mapel[3]}</P>
    <P>${mapel[4]}</P>
    <P>${mapel[5]}</P>
    `,
    6: `<h2>PELAJARAN</h2>
    <P>${mapel[2]}</P>
    <P>${mapel[8]}</P>
    <P>${mapel[10]}</P>
    `
}

function hariIni(){
    const senin = document.getElementById('senin')
    const selasa = document.getElementById('selasa')
    const rabu = document.getElementById('rabu')
    const kamis = document.getElementById('kamis')
    const jumat = document.getElementById('jumat')
    const sabtu = document.getElementById('sabtu')

    if(today == 1){
        senin.innerHTML = "HARI INI"
    }else if(today == 2){
        selasa.innerHTML = "HARI INI"
    }else if(today == 3){
        rabu.innerHTML = "HARI INI"
    }else if(today == 4){
        kamis.innerHTML = "HARI INI"
    }else if(today == 5){
        jumat.innerHTML = "HARI INI"
    }else if(today == 6){
        sabtu.innerHTML = "HARI INI"
    }
}

hariIni()

function dataPiket() {
    if (today == 0) {
        return piket[0]
    }else if(today == 1) {
        return '<h2>PIKET</h2>' + piket[1]
    }else if(today == 2) {
        return '<h2>PIKET</h2>' + piket[2]
    }else if(today == 3) {
        return '<h2>PIKET</h2>' + piket[3]
    }else if(today == 4) {
        return '<h2>PIKET</h2>' + piket[4]
    }else if(today == 5) {
        return '<h2>PIKET</h2>' + piket[5]
    }else if(today == 6) {
        return '<h2>PIKET</h2>' + piket[6]
    }
}

function dataPelajaran() {
    if (today == 0) {
        return pelajaran[0]
    }else if(today == 1){
        return pelajaran[1]
    }else if(today == 2){
        return pelajaran[2]
    }else if(today == 3){
        return pelajaran[3]
    }else if(today == 4){
        return pelajaran[4]
    }else if(today == 5){
        return pelajaran[5]
    }else if(today == 6){
        return pelajaran[6]
    }
}

function senin(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Senin"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[1]
    pelajarandt.innerHTML = pelajaran[1]
}
function selasa(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Selasa"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[2]
    pelajarandt.innerHTML = pelajaran[2]
}
function rabu(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Rabu"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[3]
    pelajarandt.innerHTML = pelajaran[3]
}
function kamis(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Kamis"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[4]
    pelajarandt.innerHTML = pelajaran[4]
}
function jumat(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Jum'at"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[5]
    pelajarandt.innerHTML = pelajaran[5]
}
function sabtu(){
    const hari = document.getElementById('hari')
    const piketdt = document.getElementById('piket-jadwal')
    const pelajarandt = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = "Sabtu"
    piketdt.innerHTML = '<h2>PIKET</h2>' + piket[6]
    pelajarandt.innerHTML = pelajaran[6]
}

function update() {
    const date = new Date();
    const date2 = new Date(date.getTime() + 7 * 60 * 60 * 1000);
    const today = date.getDay();
    const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const hari = document.getElementById('hari')
    const piket = document.getElementById('piket-jadwal')
    const pelajaran = document.getElementById('pelajaran-jadwal')

    hari.innerHTML = week[today]
    piket.innerHTML = dataPiket()
    pelajaran.innerHTML = dataPelajaran()
}
update()
