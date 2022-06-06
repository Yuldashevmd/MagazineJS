function modals() {
    // Modal
    function modal() {
        let signIn = document.querySelector('.subcribe__text__blog');
        let modalSignIn = document.querySelector('.signIn');
        let closeModal = document.querySelector('#closeModal');

        signIn.addEventListener('click', () => {
            modalSignIn.style.display = 'flex';
        });
        closeModal.addEventListener('click', () => {
            modalSignIn.style.display = 'none';
        });
        window.onclick = function(event) {
            if (event.target == modalSignIn) {
                modalSignIn.style.display = "none";
            }
        }
    }

    function eyeModel() {
        let closeEye = document.querySelector('#closeEye');
        let openEye = document.querySelector('#openEye');
        let password = document.querySelector('#userPassword');

        closeEye.addEventListener('click', () => {
            password.type = 'text';
            closeEye.style.display = 'none';
            openEye.style.display = 'block';
        });
        openEye.addEventListener('click', () => {
            password.type = 'password';
            closeEye.style.display = 'block';
            openEye.style.display = 'none';
        });
    }

    modal();
    eyeModel();

}
module.exports = modals;