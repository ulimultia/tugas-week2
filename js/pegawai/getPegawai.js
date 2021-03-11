fetch('./assets/data/pegawai.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(employees) {
        showEmployee(employees);
    })

function showEmployee(data) {
    // console.log(data);
    let print = ''
    for (let i = 0; i < data.length; i++) {
        print += `
            <tr>
                <td class="text-center">${i+1}</td>
                <td>${data[i].nama}</td>
                <td class="text-center">${data[i].devisi}</td>
                <td class="text-center">${data[i].jabatan}</td>
                <td class="text-end">Rp ${data[i].gaji},-</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning text-light" data-bs-toggle="modal" data-bs-target="#editData${i+1}"><i class=" fas fa-pen "></i></button>
                    <!-- Modal Edit-->
                    <div class="modal fade" id="editData${i+1}" tabindex="-1" aria-labelledby="editData${i+1}Label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editData${i+1}Label">Edit Data Pegawai</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-start">
                                    <form>
                                        <div class="mb-3">
                                            <label for="edNamaPegawai${i+1}" class="form-label">Nama Lengkap</label>
                                            <input type="text" class="form-control" id="edNamaPegawai${i+1}" value="${data[i].nama}">
                                        </div>
                                        <div class="mb-3">
                                            <label for="edNamaDevisi${i+1}" class="form-label">Devisi</label>
                                            <input type="text" class="form-control" id="edNamaDevisi${i+1}" value="${data[i].devisi}">
                                        </div>
                                        <div class="mb-3">
                                            <label for="edNamaJabatan${i+1}" class="form-label">Jabatan</label>
                                            <input type="text" class="form-control" id="edNamaJabatan${i+1}" value="${data[i].jabatan}">
                                        </div>
                                        <div class="mb-5">
                                            <label for="edNamaGaji${i+1}" class="form-label">Gaji</label>
                                            <input type="text" class="form-control" id="edNamaGaji${i+1}" value="${data[i].gaji}">
                                        </div>
                                        <div class="mb-3 text-end">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                            <button type="button" class="btn btn-primary" onclick="swalEdit(${i+1})">Edit</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal End -->
                    <button class="btn btn-sm btn-danger " onclick="swalDelete()"><i class="fas fa-trash "></i></button>
                    <button class="btn btn-sm btn-info text-light"><i class="fas fa-info-circle "></i></button>
                </td>
            </tr>
        `
    }

    // console.log("isi print:", print);
    const baris = document.getElementById("isi-table");
    baris.innerHTML = print
}