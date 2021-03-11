document.getElementById("add-simpan").onclick = function() {
    addFormValidation()
};

function addFormValidation() {
    let nama = document.getElementById("namaPegawai").value;
    let devisi = document.getElementById("namaDevisi").value;
    let jabatan = document.getElementById("namaJabatan").value;
    let gaji = document.getElementById("namaGaji").value;
    let form = document.getElementById("formAddPegawai");

    nameChecker(nama);
    devisiChecker(devisi);
    jabatanChecker(jabatan);
    gajiChecker(gaji);

    if (nameChecker(nama) === true &&
        devisiChecker(devisi) === true &&
        jabatanChecker(jabatan) === true &&
        gajiChecker(gaji) === true) {
        Swal.fire({
                icon: 'success',
                title: 'BERHASIL!!!',
                text: 'Data berhasil ditambahkan ...'
            })
            .then(() => {
                location.reload();
            });
        form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Data gagal ditambahkan, cek kembali isi formulir ...'
        })
    }
}

function nameChecker(nama) {
    let notif = document.getElementById("namaHelp");

    if (nama === '') {
        notif.innerHTML = 'Tidak boleh kosong!';
        notif.style.color = 'red';
        return false;
    } else {
        notif.innerHTML = 'Sesuai!';
        notif.style.color = 'green';
        return true;
    }
}

function devisiChecker(devisi) {
    let notif = document.getElementById("devisiHelp");

    if (devisi === '') {
        notif.innerHTML = 'Tidak boleh kosong!';
        notif.style.color = 'red';
        return false;
    } else {
        notif.innerHTML = 'Sesuai!';
        notif.style.color = 'green';
        return true;
    }
}

function jabatanChecker(jabatan) {
    let notif = document.getElementById("jabatanHelp");

    if (jabatan === '') {
        notif.innerHTML = 'Tidak boleh kosong!';
        notif.style.color = 'red';
        return false;
    } else {
        notif.innerHTML = 'Sesuai!';
        notif.style.color = 'green';
        return true;
    }
}

function gajiChecker(gaji) {
    let notif = document.getElementById("gajiHelp");
    console.log(gaji)
    if (gaji === '') {
        notif.innerHTML = 'Tidak boleh kosong!';
        notif.style.color = 'red';
        return false;
    } else if (isNaN(gaji) === true) {
        console.log(gaji)
        notif.innerHTML = 'Harus angka!';
        notif.style.color = 'red';
        return false;
    } else {
        notif.innerHTML = 'Sesuai!';
        notif.style.color = 'green';
        return true;
    }
}


function swalEdit(index) {
    let nama = document.getElementById("edNamaPegawai" + index).value;
    let devisi = document.getElementById("edNamaDevisi" + index).value;
    let jabatan = document.getElementById("edNamaJabatan" + index).value;
    let gaji = document.getElementById("edNamaGaji" + index).value;

    nameChecker(nama);
    devisiChecker(devisi);
    jabatanChecker(jabatan);
    gajiChecker(gaji);

    if (nameChecker(nama) === true &&
        devisiChecker(devisi) === true &&
        jabatanChecker(jabatan) === true &&
        gajiChecker(gaji) === true) {
        Swal.fire({
                icon: 'success',
                title: 'BERHASIL!!!',
                text: 'Data berhasil ditambahkan ...'
            })
            .then(() => {
                location.reload();
            });;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'GAGAL!!!',
            text: 'Data gagal ditambahkan, cek kembali isi formulir ...'
        })
    }
}