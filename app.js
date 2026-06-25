// Kids Clothing Dataset - Analyzed from workspace images
const products = [
    {
        id: 1,
        name: "Розовый комбинезон-зайчик для новорожденных",
        price: 1250,
        age: "0–12 месяцев",
        image: "./photo_2026-06-25_21-27-34.jpg"
    },
    {
        id: 2,
        name: "Голубой песочник с капюшоном «Облака»",
        price: 1100,
        age: "3–12 месяцев",
        image: "./photo_2026-06-25_21-27-39.jpg"
    },
    {
        id: 3,
        name: "Вязаный шерстяной комплект «Олененок» (5 предметов)",
        price: 2200,
        age: "6–18 месяцев",
        image: "./photo_2026-06-25_21-27-49.jpg"
    },
    {
        id: 4,
        name: "Комплект: синее худи с динозавром и джинсовые шорты",
        price: 1950,
        age: "2–5 лет",
        image: "./photo_2026-06-25_21-27-54.jpg"
    },
    {
        id: 5,
        name: "Летний комплект: красное поло в полоску и бежевые шорты",
        price: 1650,
        age: "3–6 лет",
        image: "./photo_2026-06-25_21-28-00.jpg"
    },
    {
        id: 6,
        name: "Камуфляжная куртка-ветровка Explorer на молнии",
        price: 2100,
        age: "4–8 лет",
        image: "./photo_2026-06-25_21-28-06.jpg"
    },
    {
        id: 7,
        name: "Желтый водонепроницаемый дождевик с машинками и сапоги",
        price: 2800,
        age: "3–7 лет",
        image: "./photo_2026-06-25_21-28-12.jpg"
    },
    {
        id: 8,
        name: "Классический серый костюм-тройка с бордовой бабочкой",
        price: 3200,
        age: "4–7 лет",
        image: "./photo_2026-06-25_21-28-17.jpg"
    },
    {
        id: 9,
        name: "Лавандовое праздничное платье из фатина с пайетками",
        price: 2600,
        age: "4–8 лет",
        image: "./photo_2026-06-25_21-28-22.jpg"
    },
    {
        id: 10,
        name: "Розовый вельветовый полукомбинезон с клубникой и водолазка",
        price: 1950,
        age: "3–6 лет",
        image: "./photo_2026-06-25_21-28-28.jpg"
    },
    {
        id: 11,
        name: "Ярко-желтый дождевик с вишневым принтом и зонт",
        price: 2400,
        age: "4–8 лет",
        image: "./photo_2026-06-25_21-28-33.jpg"
    },
    {
        id: 12,
        name: "Вязаный коралловый кардиган и юбка в цветочек",
        price: 1850,
        age: "3–6 лет",
        image: "./photo_2026-06-25_21-28-37.jpg"
    },
    {
        id: 13,
        name: "Джинсовая куртка с вышивкой бабочек и белое платье",
        price: 2450,
        age: "4–7 лет",
        image: "./photo_2026-06-25_21-28-43.jpg"
    },
    {
        id: 14,
        name: "Детская футболка с вышивкой «Улыбающееся солнце»",
        price: 750,
        age: "2–6 лет",
        image: "./photo_2026-06-25_21-28-48.jpg"
    },
    {
        id: 15,
        name: "Теплый зимний комбинезон с капюшоном и сапоги",
        price: 4800,
        age: "3–6 лет",
        image: "./photo_2026-06-25_21-28-52.jpg"
    }
];

// Helper to format price with space as thousand separator (e.g. 1 250)
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Generate the Telegram pre-filled message URL
function generateTelegramUrl(productName, productPrice) {
    const botBaseUrl = "https://t.me/aitalieva14_bot";
    const formattedPrice = `${formatPrice(productPrice)} сом`;
    const messageText = `Здравствуйте!\n\nХочу заказать товар:\n\nНазвание: ${productName}\nЦена: ${formattedPrice}`;
    return `${botBaseUrl}?text=${encodeURIComponent(messageText)}`;
}

// DOM Elements
const productGrid = document.getElementById("product-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

// Render Product Cards
function renderCatalog() {
    if (!productGrid) return;
    
    productGrid.innerHTML = products.map(product => {
        const tgLink = generateTelegramUrl(product.name, product.price);
        
        return `
            <article class="product-card">
                <div class="product-image-wrapper" onclick="openLightbox('${product.image}', '${product.name}')">
                    <span class="product-badge-age">${product.age}</span>
                    <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-image-overlay">
                        <div class="zoom-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-meta">
                        <div class="product-price-container">
                            <span class="product-price-label">Цена</span>
                            <div class="product-price">${formatPrice(product.price)} <span>сом</span></div>
                        </div>
                        <a href="${tgLink}" target="_blank" class="buy-btn" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 12.5c0 .28-.22.5-.5.5H7.5c-.28 0-.5-.22-.5-.5V14h10v2.5zm0-4.5H7V9.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V12z"/>
                            </svg>
                            Купить
                        </a>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// Lightbox Logic
function openLightbox(imageSrc, caption) {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    
    lightboxImage.src = imageSrc;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeLightbox() {
    if (!lightbox) return;
    
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
}

// Event Listeners
if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
    // Close on click outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper")) {
            closeLightbox();
        }
    });
}

// Escape key to close lightbox
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// Dynamic header styling on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("header--scrolled");
        } else {
            header.classList.remove("header--scrolled");
        }
    }
});

// Initialize rendering on load
document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
});

// Expose openLightbox to inline HTML clicks
window.openLightbox = openLightbox;
