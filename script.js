document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".menu-items");

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const menu = document.querySelector('.menu');
            if (menu) {
                menu.classList.toggle('show');
            }
        });
    }

    if (menuBtn && menuItems) {
        menuBtn.addEventListener("click", function() {
            menuItems.classList.toggle("active");
        });
    }

    window.orderNow = function(itemName) {
        console.log(`Redirecting to contact page with item: ${itemName}`);
        window.location.href = `contact.html?item=${encodeURIComponent(itemName)}`;
    };

    function prefillOrderDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const item = urlParams.get('item');
        if (item) {
            const orderDetailsTextarea = document.getElementById('order-details');
            if (orderDetailsTextarea) {
                orderDetailsTextarea.value = `Order for: ${item}`;
            }
        }
    }
    prefillOrderDetails();

    function submitOrder(event) {
        event.preventDefault();

        const form = document.getElementById('order-form');
        const confirmationMessage = document.getElementById('confirmation-message');

        confirmationMessage.textContent = 'Thank you! Your order has been received. We will contact you shortly.';
        confirmationMessage.style.color = 'green';
        confirmationMessage.style.fontWeight = 'bold';
        form.reset();

        return false;
    }

    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', submitOrder);
    }
});