
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    // İnputlarin deyerlerinin tapilmasi ve bezi elave deyisenlerin yaradilmasi
    const inputs = document.querySelectorAll('input'),
        userName = document.getElementById('userName').value,
        fullName = document.getElementById('fullName').value,
        mail = document.getElementById('mail').value,
        birthDay = document.getElementById('birthDay').value.trim(),
        birthDayDate = birthDay.split('.')[0],
        birthDayMonth = birthDay.split('.')[1],
        birthDayYear = birthDay.split('.')[2],
        phone = document.getElementById('phone').value.trim(),
        nationalityId = document.getElementById('nationalityId').value.trim(),
        today = new Date();
        arrSubmit = [];


    // Yoxlanis ücün her bir inputa uygun RegExplerin yaradilmasi 
    const regUserName = new RegExp (/[@!_<>#]/g),
        regFullName = new RegExp (/[^a-zA-Z-Яа-яЁё ' ']/g),
        regEmail = new RegExp (/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/g),
        regEmail2 = new RegExp (/[a-zA-Z]+/g),
        a = mail.match(regEmail2).join(''),
        b = mail.match(regEmail2).join('').toUpperCase(),
        regPhone = new RegExp (/[^0-9 ' ']/g),
        regBirthDay = new RegExp(/[^0-9 .]/g),
        regNationalityId = new RegExp(/[^0-9]/g);
   
    // Her hansisa inputun boş olub olmamasinin yoxlanilmasi
    for ( item of Array.from(inputs) ) {
        if (item.value.trim() === '') return  alert('Bütün xanaları zəhmət olmasa doldurun')
        else return check();
    };

    // Eger hec bir input bos deyilse onlarin düz daxil edilmesinin yoxlanilmasi
    function check() {
        
        // UserName inputunun yoxlanilmasi
        let addFalse1 = () => {
            alert('userName 10 simvoldan artiq ola bilmez');
            arrSubmit.push(false);
        };
        if (userName.trim().length > 10) addFalse1()
        else if (userName.match(regUserName)) addFalse1();
     
        // FullName inputunun yoxlanilmasi
        if (fullName.match(regFullName)) {
            alert('fullName yalniz herflerden ibaret ol biler');
            arrSubmit.push(false);
        }
        if (fullName.split(' ').length < 2) {
            alert('fullName tam daxil edin');
            arrSubmit.push(false);
        }

        // Mail inputunun yoxlanilmasi
        let addFalse3 = () => {
            alert('e-maili duzgun daxil edin');
            arrSubmit.push(false);
        };
        if (!mail.match(regEmail)) addFalse3();
        for (let i = 0; i < a.length; i++) {
            if(a[i] == b[i]) addFalse3()
        };

        // BirthDay inputunun yoxlanilmasi
        let addFalse4 = () => {
            alert('Dogum tarixinizi düzgün formatda daxil edin');
            arrSubmit.push(false);
        };
        if (birthDayDate > 31 || birthDayMonth > 12) addFalse4()
        else if (!birthDay.match(regBirthDay)) {
            let errorBirthday = () => {
                alert('Qeydiyyat yalniz +18 istifadeciler üçündür');
                arrSubmit.push(false);
            };
            if (today.getFullYear() - birthDayYear < 18) {
                errorBirthday()
            } else if (today.getFullYear() - birthDayYear == 18){
                if(today.getMonth() + 1 < birthDayMonth) {
                    errorBirthday()
                } else if (today.getMonth()  < birthDayDate) {
                    if (today.getDate() < 7) {
                        errorBirthday()
                    }
                }
            };
        } 
        else addFalse4();

        // Phone inputun yoxlanilmasi
        let addFalse5 = () => {
            alert('Nomreni duzgun daxil edin');
            arrSubmit.push(false);
        };
        if ((phone.split(' ').join('').length == 13 && !phone.split(' ').join('').slice(1,13).match(regPhone)) || phone.split(' ').join('').length == 10 && !phone.split(' ').join('').slice(1,10).match(regPhone)) {
            if (phone.split(' ').join('').length == 13 && phone[0] == '+' && phone.split(' ').join('').substring(6, 4) == '55' || phone.split(' ').join('').substring(6, 4) == '77') {
            } else if (phone.split(' ').join('').length == 10  && phone.split(' ').join('').substring(3,0) == '055' || phone.split(' ').join('').substring(3,0) == '077') {
            } 
            else {
                addFalse5()
            };
        } else addFalse5();
        
        // nationalityId inputun yoxlanilmasi
        let addFalse6 = () => {
            alert('Sexsiyyet senedin melumatlarin duzgun daxil edin');
            arrSubmit.push(false);
        };
        let nat = nationalityId.split(' ').join('');
        if ((nat.length == 11 && nat.slice(0,3) == 'AZE' && !nat.slice(3,11).match(regNationalityId) ||
             nat.length == 9 && nat.slice(0,2) == 'AA' && !nat.slice(2,9).match(regNationalityId))) {
        } else {
            addFalse6()
        };

        // Son merhelenin yerine yetirilmesi 
        for (let i = 0; i < arrSubmit.length; i++) {
            if (arrSubmit[i] == false) alert('Emeliyyat ugursuz baş tutdu')
        }
        if (arrSubmit.length == 0) alert('Emeliyyat ugurla bas tutdu')
    };
});
