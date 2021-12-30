

var loginItem = document.querySelector('.js-navbar-item-login');
var registerItem = document.querySelector('.js-navbar-item-register');
var modalLogin = document.querySelector('.modal');
var modalBody = document.querySelector('.modal__body');
var loginModal = document.querySelector('.js-auth-form-login');
var registerModal = document.querySelector('.js-auth-form-register');
var switchBtn = Array.from(document.querySelectorAll('.auth-form__switch-btn'));
var selectPriceSort = document.querySelector('.select-input-list');
var downIconPriceSort = document.querySelector('.select-input-icon-down');
function showModal() {
    modalLogin.classList.add('open');
}

function hideModal() {
    modalLogin.classList.remove('open');
}

function showLogin() {
    loginModal.classList.remove('close');
}

function hideLogin() {
    loginModal.classList.add('close');
}

function showRegister() {
    registerModal.classList.remove('close');
}

function hideRegister() {
    registerModal.classList.add('close');
}

loginItem.onclick = function () {
    showModal(); showLogin(); hideRegister();
};

registerItem.onclick = function () {
    showModal(); hideLogin(); showRegister();
}

switchBtn.forEach(function (e) {
    e.onclick = function () {
        registerModal.classList.toggle('close');
        loginModal.classList.toggle('close');
    }
});

modalLogin.addEventListener('click', hideModal);
modalBody.addEventListener('click', function (e) {
    e.stopPropagation();
});

downIconPriceSort.onclick = function() {
    selectPriceSort.classList.toggle('openBlock');
}

var categoryItem = Array.from(document.querySelectorAll('.category__item'));

categoryItem.forEach(function (item) {
    item.onclick = function (e) {
        e.preventDefault();
        categoryItem.forEach(function (checkActive) {
            if (checkActive.classList.contains('category__item-active')) {
                checkActive.classList.remove('category__item-active');
            }
        });
        item.classList.add('category__item-active');
    };
});