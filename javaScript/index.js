let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [{
        id: 1,
        name: 'Life is Strange (Chloe)',
        image1: './Imagens/logos/Life-Is-Strange-chloe-PNG-Image.png',
        image2: './Imagens/Life is strange (1).png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 2,
        name: 'Life is Strange (Rachel)',
        image1: './Imagens/logos/Life-Is-Strange-RACHEL-PNG.png ',
        image2: './Imagens/Life is strange (2).png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 3,
        name: 'Life is Strange (Max)',
        image1: './Imagens/logos/Max.png',
        image2: './Imagens/Life is strange (3).png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 4,
        name: 'Studio Ghibli (Princesa Mononoke)',
        image1: './Imagens/logos/112-1127462_princess-mononoke-svg-hd-png-download-removebg-preview.png',
        image2: './Imagens/Mononoke.png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 5,
        name: 'Studio Ghibli (A viagem de Chihiro)',
        image1: './Imagens/logos/no-face-png-11553956834wsuuppzvkh-removebg-preview.png',
        image2: './Imagens/Ghibli (1).png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 6,
        name: 'Studio Ghibli (Ponyo)',
        image1: './Imagens/logos/png-clipart-line-art-drawing-color-cartoon-sketch-ponyo-angle-white-removebg-preview (1).png',
        image2: './Imagens/Ghibli (2).png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
    {
        id: 7,
        name: 'The Last Of Us',
        image1: './Imagens/logos/tlou-logo.png',
        image2: './Imagens/The Last of Us.png',
        old_price: 'R$25',
        curr_price: 'R$20'
    },
]


let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div id=${e.id} class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <form>
                            <button formaction="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Comprar</button>
                        </form>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})