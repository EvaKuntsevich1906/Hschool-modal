const input = document.querySelector(`.input`)

const validation = (arrparam) => {
    if (arrparam.length === 0) throw new Error(`Пустой массив`)
    //if ( регулярное выражение)
    return true
}

let openKit = false;
input.addEventListener(`click`, () => {
        const kit = document.querySelector(`.kit`);
        const arr = [`Businessman`, `Employee`, `Freelancer`, `Retired`]
    if (openKit === false) {
        if (validation(arr)) {
            for (let i = 0; i < arr.length; i++) {
                const p = document.createElement('p');
                p.className = `class-p${i}`;
                p.style = `
                    width: 280px;
                    height: 44px;
                    allign-items:center;
                    padding-left: 16px;
                    padding-top: 12px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    color: #666666;
                    border: none;`
                kit.appendChild(p);
                document.querySelector(`.class-p${i}`).innerHTML = arr[i]
            }
            openKit = true;
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            document.querySelector(`.class-p${i}`).remove();
        }
        openKit = false;
    }
})