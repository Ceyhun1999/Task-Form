const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input'),
        userName = document.getElementById('userName').value,
        fullName = document.getElementById('fullName').value,
        mail = document.getElementById('mail').value,
        birthDay = document.getElementById('birthDay').value,
        phone = document.getElementById('phone').value,
        nationalityId = document.getElementById('nationalityId').value;

    const regUserName = new RegExp (/[@!_<>#]/g),
        regFullName = new RegExp (/[^a-zA-Z-Яа-яЁё' ']/g),
        regEmail = new RegExp (/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/g),
        regPhone = new RegExp (/[^0-9 + ' ']/g),
        regNationalityId = new RegExp(/[^a-zA-Z ' ']/g)

    inputs.forEach((item) => {
        if (item.value.trim() === '') {
            return alert('Заполните все поля пожалуйста')
        }; 
    });
    if (userName.trim().length > 10) alert('userName 10 simvoldan artiq ola bilmez') 
    else if (userName.match(regUserName)) alert('userName qadagan simvollardan ibaretdir (@, !, _, <, > və #)');
    if (fullName.match(regFullName)) alert('fullName yalniz herflerden ibaret ol biler');
    if (fullName.split(' ') <= 2) alert('fullName tam daxil edin') ;
    if (!mail.match(regEmail)) alert('e-maili duzgun daxil edin');
    if (+birthDay < 18) alert('Qeydiyyat yalniz +18 vetendaslar üçündür');
    const number = phone.split(' ').join('').trim();
    function errorNum() {
        alert('Nömreni düzgün daxil edin')
    };
    if (!number.match(regPhone)) {
        if(number.length == 13) {
            if (number.slice(0,4) == '+994') {
                if (number.substr(4, 2) == '77' || number.substr(4, 2) == '55') return true
                else alert('Qeydiyyat yalniz nar ve bakcell mobile müştərileri üçündür')
            }
        } else if (number.length == 10) {
            if (number[0] == '0') {
                if (number.substr(1, 2) != '51' && number.substr(1, 2) != '77') return true
                else alert('Qeydiyyat yalniz nar ve bakcell mobile müştərileri üçündür')
            }
            else errorNum();
        } 
        else errorNum();
    } 
    else errorNum();
});


