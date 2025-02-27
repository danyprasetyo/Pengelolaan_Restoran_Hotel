    function toast(tipe, pesan) {
        if (tipe == 'success') {
            Swal.fire({
                title: pesan,
                icon: 'success',
                timer: 2000
            })
        } else if (tipe == 'info') {
            Swal.fire({
                icon: 'info',
                title: 'Info data!',
                // text: 'Data Berhasil Disimpan!',
                timer: 1500
            });
        } else if (tipe == 'errors') {
            var pesans = '';
            $.each(pesan, function (key, value) {
                pesans += '<li>' + value + '</li>';
            });
            Swal.fire({
                icon: 'error',
                html: pesans,
            });
        } else {
            return 0;
        }

    }
