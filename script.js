function changeOnHover(element, newImageUrl) {
    if (element.tagName === 'IMG') {
        // Caso seja uma tag <img>
        const originalImageUrl = element.src; 

        element.addEventListener('mouseover', () => {
            element.src = newImageUrl;
        });

        element.addEventListener('mouseout', () => {
            element.src = originalImageUrl;
        });
    } else if (element.style.backgroundImage) {
        const originalImageUrl = element.style.backgroundImage; 

        element.addEventListener('mouseover', () => {
            element.style.backgroundImage = `url('${newImageUrl}')`;
        });

        element.addEventListener('mouseout', () => {
            element.style.backgroundImage = originalImageUrl;
        });
    }
}

function applyHoverEffect(selector, newImages) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
        if (newImages[index]) { 
            changeOnHover(element, newImages[index]);
        }
    });
}


const productImages = document.querySelectorAll('.product img');
const productNewImages = [
    'laranjagatoalt.png', 
    'leitegatoalt.png', 
    'racaoalt.png' 
];

const serviceItems = document.querySelectorAll('.service-item');
const serviceNewImages = [
    'groomingalt.png', 
    'boardingalt.png', 
    null,
    'veterinaryalt.png', 
    'trainingalt.png' 
];

if (productImages.length > 0) {
    applyHoverEffect('.product img', productNewImages);
}

if (serviceItems.length > 0) {
    applyHoverEffect('.service-item', serviceNewImages);
}