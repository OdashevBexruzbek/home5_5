const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const phone = document.getElementById('phone_num').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const lang = document.getElementById('language').value;
const desc = document.getElementById('desc').value;
const password = document.getElementById('pasword').value;
const password2 = document.getElementById('pasword2').value;
const save_btn = document.getElementById('save')

function validate(name, age, email, ail, password, password2){
    // ism tekshirish
    if (!name.value){
        alert("Ism kiritilishi shart");
        name.focus();
        name.style.outlineColor = 'red';
        return false;
    } else{
        name.style.outlineColor = 'blue'
    }

    if (name.value.length < 3){
        name.focus()
        name.style.outlineColor = 'red';
        return false;
    } else{
        name.style.outlineColor = 'blue'
    }

    return true;
}

if(password !== password2) {
    alert("Parollar mos kelmadi!");
    return;
}

save_btn && save_btn.addEventListener('click', () => {
    e.preventDefault();

    if (validate(name, surname, age, phone, email, lang, desc,
        password, password2, save_btn)){
            console.log('otdi');
        }else {
            console.log('otmadi');
        }
})

class User {
    constructor(ismi, familiyasi, phone, yoshi, email, lang, desc, passwrod) {
        this.ismi = ismi;
        this.familiyasi = familiyasi;
        this.phone = phone;
        this.yoshi = yoshi;
        this.email = email;
        this.lang = lang;
        this.desc = desc;
        this.password = passwrod;
    }

    sahifadaChiqar() {
        const malumotlarDiv = document.createElement('div');
        malumotlarDiv.innerHTML = `<p>Ism: ${this.ismi}</p>
                                    <p>Familiya: ${this.familiyasi}</p>
                                    <p>Telefon raqam: ${this.phone}</p>
                                    <p>Yosh: ${this.yoshi}</p>
                                    <p>Email: ${this.email}</p>
                                    <p>Til: ${this.lang}</p>
                                    <p>Fikringiz: ${this.desc}</p>
                                    <p>Parolingiz: ${this.password}</p>`;
        document.body.appendChild(malumotlarDiv);
    }

    malumotlarniSaqlash() {
        localStorage.setItem('foyMalumotlari', JSON.stringify(this));
        alert('Malumotlar saqlandi!');
    }

    static olinganMalumotlarniKorsat() {
       const savedMalumotlar = localStorage.getItem('foyMalumotlari');
        if (savedMalumotlar) {
            const parsedMalumotlar = JSON.parse(savedMalumotlar);
            const foydalanuvchi = new Foydalanuvchi(parsedMalumotlar.ismi, parsedMalumotlar.familiyasi, parsedMalumotlar.yoshi, parsedMalumotlar.email);
            foydalanuvchi.sahifadaChiqar();
        }
    }
}

function doValidate() {
    if (!validateEmail(document.appointment.requiredphone.value) || !validatePhone(document.appointment.requiredphone.value)) {
        alert("Invalid Email");
        return false;
    }
}

User.olinganMalumotlarniKorsat();