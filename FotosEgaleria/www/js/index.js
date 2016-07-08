(function () {
    document.getElementById("camera").addEventListener("click", capturarFoto);
    document.getElementById("albumFoto").addEventListener("click", abrirAlbumDeFotos);

    function capturarFoto() {
        navigator.camera.getPicture(captureSuccess, onFail, {
            quality: 50,

            //Tipo de retorno da imagem
            destinationType: navigator.camera.DestinationType.FILE_URI
        });
    }

    function abrirAlbumDeFotos() {
        navigator.camera.getPicture(captureSuccess, onFail, {
            quality: 100,

            //Tipo de retorno da imagem
            destinationType: navigator.camera.DestinationType.FILE_URI,

            //Local da onde buscará a imagem, o padrão é abrir a camera  
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG
        });
    }

    //callback que receberá o caminho da imagem e atribuirá no source da tag img
    function captureSuccess(foto) {
        var largeImage = document.getElementById('foto');
        largeImage.style.display = 'block';
        largeImage.src = foto;
    }

    //callback de falha
    function onFail(message) {
        alert("Erro: " + message);
    }
})();