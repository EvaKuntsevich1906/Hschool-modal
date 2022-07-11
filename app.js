const checkName = () => {
    const name = document.querySelector(`.input_name`).value.toLowerCase().trim();
    if (name.length === 0) throw new Error(`Вы не ввели имя`);
    return true
}

const checkEmail = () => {
    const email = document.querySelector(`.input_email`).value;
    if (email.length === 0) throw new Error(`Вы не ввели электронную почту`);
    if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(email)) throw new Error(`Некорректно введен адрес электронной почты`)
    return true
}

const checkPassword = () => {
    const password = document.querySelector(`.input_password`).value;
    const doublepassword = document.querySelector(`.input_confpassword`).value;
    if (password.length < 7 && doublepassword.length < 7) throw new Error(`Пароль содержит недостаточное количество символов`);
    if (password != doublepassword) throw new Error(`Введенные пароли не совпадают`);
    return true
}

const btn = document.querySelector('.btn')
btn.addEventListener(`click`, () => {
    try {

        if (checkName() &&
            checkEmail() &&
            checkPassword()) {
            alert(`Вы успешно зарегестрированы в системе`)
        }
    } catch (err) {
        alert(err.message)
    }
})