///////////modal call

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal() : false
modal.onkeydown = event => event.code === 'Escape' ? closeModal() : false
modal.onkeydown = event => event.code === 'Backspace'

////////////////////slaider/////////////////////
// const tabParent = document.querySelector(".tabheader__items");
// const tabItems = document.querySelectorAll(".tabheader__item");
// const tabContent = document.querySelectorAll(".tabcontent");
//
// const hideContent = () => {
//     tabContent.forEach((i) => {
//         i.style.display = "none";
//     });
//     tabItems.forEach((j) => {
//         j.classList.remove("tabheader__item_active");
//     });
// };
//
// hideContent();
//
// const showContent = (n = 0) => {
//     tabContent[n].style.display = "block";
//     tabItems[n].classList.add("tabheader__item_active");
// };
//
// showContent();
//
// let c = 0;
// const slider = () => {
//     setInterval(() => {
//         if (c === 4) c = 0;
//         hideContent();
//         showContent(c);
//         c++;
//     }, 3500);
// };
//
// slider();


//////////////////slider2


const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}
/////////////////////////





{
    const items = document.querySelectorAll('.item')
    const expand = (item, i) => {
        items.forEach((it, ind) => {
            if (i === ind) return
            it.clicked = false
        })
        gsap.to(items, {
            width: item.clicked ? '15vw' : '8vw',
            duration: 2,
            ease: 'elastic(1, .6)'

        })
        item.clicked = !item.clicked
        gsap.to(item, {
            width: item.clicked ? '42vw' : '15vw',
            duration: 2.5,
            ease: 'elastic(1, .3)'
        })

    }
    items.forEach((item, i) => {
        item.clicked = false
        item.addEventListener('click', () => expand(item, i))
    })
}
