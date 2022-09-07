const btn = document.querySelector('.btn');

const checkName = (name) => {
    if (name.length === 0) throw new Error(`Вы не ввели имя`);
    return true
}

const checkEmail = (email) => {
    if (email.length === 0) throw new Error(`Вы не ввели электронную почту`);
    if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(email)) throw new Error(`Некорректно введен адрес электронной почты`)
    return true
}

const checkPassword = (password, doublepassword) => {
    if (password.length <= 7 && doublepassword.length <= 7) throw new Error(`Пароль содержит недостаточное количество символов`);
    if (password !== doublepassword) throw new Error(`Введенные пароли не совпадают`);
    return true
}

btn.addEventListener(`click`, async () => {
    try {
        const name = document.querySelector(`.input_name`).value.toLowerCase().trim();
        const email = document.querySelector(`.input_email`).value.trim();
        const password = document.querySelector(`.input_password`).value.trim();
        const doublepassword = document.querySelector(`.input_confpassword`).value.trim();
        const allUsers = document.querySelector(".allUsers")

        // if (checkName(name) &&
        //     checkEmail(email) &&
        //     checkPassword(password, doublepassword)) {
        let ob = {
            name: name,
            email: email,
            password: password
        }
        const response = await fetch(`http://localhost:5000/api/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
        const jsonresponse = await response.json()
        alert(`Вы успешно зарегестрированы в системе!`);

        const resName = await fetch(`http://localhost:5000/api/register`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        const nickNames = await resName.json()
        console.log(nickNames);
        const allUsersNames = [];

        for (let i = 0; i < nickNames.length; i++) {
            allUsersNames.push(nickNames[i].name)

        }
        allUsers.innerHTML = allUsersNames
    } catch (err) {
        alert(err.message)
    }

});