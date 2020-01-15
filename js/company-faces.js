let companyWorker = document.querySelectorAll('.person-item');
let companyWorkerInfo = document.querySelectorAll('.person-item_modal');

let arrowLeftSwitch = document.querySelector('.switch-modals-arrow.left');
let arrowRightSwitch = document.querySelector('.switch-modals-arrow.right');
let closeCross = document.querySelector('.close-cross');

let menuSwitch;
let blockSwitch;

// open modal window
for (let i = 0; i < companyWorker.length; i++) {
    companyWorker[i].addEventListener('click', function () {
        companyWorkerInfo[i].classList.add('open-modal');
        arrowLeftSwitch.classList.add('arrow-show');
        arrowRightSwitch.classList.add('arrow-show');
        closeCross.classList.add('close-cross_act');
        document.body.classList.add('hide-overflow');
        menuSwitch = $('.person-item_modal.open-modal').find('.switch-containers-btns');
        for (let i = 0; i < menuSwitch.length; i++) {
            menuSwitch[i].classList.add('current');
        }
        blockSwitch = $('.person-item_modal.open-modal').find('.mix-container-item');
        for (let i = 0; i < blockSwitch.length; i++) {
            blockSwitch[i].classList.add('current');
        }
    });
};

// close modal window
function closeModal() {
    document.querySelector('.person-item_modal.open-modal').classList.remove('open-modal');
    arrowLeftSwitch.classList.remove('arrow-show');
    arrowRightSwitch.classList.remove('arrow-show');
    closeCross.classList.remove('close-cross_act');
    document.body.classList.remove('hide-overflow');
    for (let i = 0; i < menuSwitch.length; i++) {
        menuSwitch[i].classList.remove('current');
    }
    for (let j = 0; j < blockSwitch.length; j++) {
        blockSwitch[j].classList.remove('current');
    }
};

// ESC close modal window
document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
        document.querySelector('.person-item_modal.open-modal').classList.remove('open-modal');
        arrowLeftSwitch.classList.remove('arrow-show');
        arrowRightSwitch.classList.remove('arrow-show');
        closeCross.classList.remove('close-cross_act');
        document.body.classList.remove('hide-overflow');
        menuSwitch = $('.person-item_modal.open-modal').find('.switch-containers-btns');
        for (let i = 0; i < menuSwitch.length; i++) {
            menuSwitch[i].classList.remove('current');
        }
        blockSwitch = $('.person-item_modal.open-modal').find('.mix-container-item');
        for (let i = 0; i < blockSwitch.length; i++) {
            blockSwitch[i].classList.remove('current');
        }
    }
});

// switch blocks
document.addEventListener('click', function () {
    if (document.body.classList.contains('hide-overflow')) {
        document.querySelector('.switch-containers-btns.feedback.current').addEventListener('click', function () {
            for (let i = 0; i < menuSwitch.length; i++) {
                blockSwitch[i].classList.remove('active-block');
                menuSwitch[i].classList.remove('active-btn');
            }
            blockSwitch[0].classList.add('active-block');
            menuSwitch[0].classList.add('active-btn');
        });
        document.querySelector('.switch-containers-btns.sert.current').addEventListener('click', function () {
            for (let i = 0; i < menuSwitch.length; i++) {
                blockSwitch[i].classList.remove('active-block');
                menuSwitch[i].classList.remove('active-btn');
            }
            blockSwitch[1].classList.add('active-block');
            menuSwitch[1].classList.add('active-btn');
        });
        document.querySelector('.switch-containers-btns.publish.current').addEventListener('click', function () {
            for (let i = 0; i < menuSwitch.length; i++) {
                blockSwitch[i].classList.remove('active-block');
                menuSwitch[i].classList.remove('active-btn');
            }
            blockSwitch[2].classList.add('active-block');
            menuSwitch[2].classList.add('active-btn');
        });
    }
})

let currentModal;
let nextModal;

function nextPerson() {
    for (let i = 0; i < companyWorkerInfo.length; i++) {
        if (companyWorkerInfo[i].classList.contains('open-modal') && i != companyWorkerInfo.length - 1) {
            currentModal = companyWorkerInfo[i];
            nextModal = companyWorkerInfo[i + 1];
        }
    }
    currentModal.classList.remove('open-modal');
    nextModal.classList.add('open-modal');
    for (let i = 0; i < menuSwitch.length; i++) {
        menuSwitch[i].classList.remove('current');
    }
    for (let j = 0; j < blockSwitch.length; j++) {
        blockSwitch[j].classList.remove('current');
    }
    menuSwitch = $('.person-item_modal.open-modal').find('.switch-containers-btns');
    for (let i = 0; i < menuSwitch.length; i++) {
        menuSwitch[i].classList.add('current');
    }
    blockSwitch = $('.person-item_modal.open-modal').find('.mix-container-item');
    for (let i = 0; i < blockSwitch.length; i++) {
        blockSwitch[i].classList.add('current');
    }
};

function prevPerson() {
    for (let i = 0; i < companyWorkerInfo.length; i++) {
        if (companyWorkerInfo[i].classList.contains('open-modal') && i != 0) {
            currentModal = companyWorkerInfo[i];
            nextModal = companyWorkerInfo[i - 1];
        }
    }
    currentModal.classList.remove('open-modal');
    nextModal.classList.add('open-modal');
    for (let i = 0; i < menuSwitch.length; i++) {
        menuSwitch[i].classList.remove('current');
    }
    for (let j = 0; j < blockSwitch.length; j++) {
        blockSwitch[j].classList.remove('current');
    }
    menuSwitch = $('.person-item_modal.open-modal').find('.switch-containers-btns');
    for (let i = 0; i < menuSwitch.length; i++) {
        menuSwitch[i].classList.add('current');
    }
    blockSwitch = $('.person-item_modal.open-modal').find('.mix-container-item');
    for (let i = 0; i < blockSwitch.length; i++) {
        blockSwitch[i].classList.add('current');
    }
};