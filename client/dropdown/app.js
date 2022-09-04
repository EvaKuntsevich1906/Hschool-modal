const input = document.querySelector(`.input`);
const img = document.querySelector(`.img`);
const kit = document.querySelector(`.kit`);
const inp_img = document.querySelector(`.inp_img`)
let openKit = false;
const downarrow = `background-image: url(../dropdown/image/Chevron.png);
padding-left: 84px;
width: 10px;
height: 5px;`
const toparrow = `background-image: url(../dropdown/image/Chevron-2.png);
padding-left: 84px;
width: 10px;
height: 5px;`



const validation = (arrparam) => {
    if (arrparam.length === 0) throw new Error(`Пустой массив`)
    return true
}

inp_img.addEventListener(`click`, () => {
    try {       
        img.style = `${toparrow}`;
        const arr = [`Businessman`, `Employee`, `Freelancer`, `Retired`]
        if (!openKit) {
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
                    font-size: 16px;
                    color: #666666;`
                    kit.appendChild(p);
                    document.querySelector(`.class-p${i}`).innerHTML = arr[i];
                }
                openKit = true;
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                document.querySelector(`.class-p${i}`).remove();
            }
            openKit = false;
            img.style = `${downarrow}`;
        }
    } catch (err) {
        alert(err.message)
    }
})

kit.addEventListener(`click`, (event) => {
    try {
        
        input.value = event.target.textContent;
        img.style = `${downarrow}`;
        kit.innerHTML=''
    } catch (err) {
        alert(err.message)
    }
})