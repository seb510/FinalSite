// Функція для Валідації форми при заповненні Ім'я та паролю

function validateform() {
    let name = document.myform.name.value;
    let password = document.myform.password.value;

    if (name == null || name.length <  3) {
        alert("Поле з ім'ям не заповнене");
        return false;
    } else if (password.length < 6){
        alert("Пароль повинен складатися неменш як з 6 символів");
        return false;
    }
}

// Функція для Валідації форми при заповненні email

function validateemail() {
    let x = document.myform.email.value;
    let atpostion = x.indexOf("@");
    let dotpostion = x.lastIndexOf(".");

    if (atpostion < 1 || dotpostion < atpostion + 2 || dotpostion + 2 >= x.length){
        alert("Будь-ласка введіть занак @" + atpostion +
        "або ви не поставили крапку" + dotpostion);
        return false;
    }
}