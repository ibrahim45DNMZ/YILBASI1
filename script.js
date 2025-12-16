// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // DOM ELEMENTS
    const giftBox = document.getElementById('giftBox');
    const vaseContainer = document.getElementById('vaseContainer');
    const bouquet = document.getElementById('bouquet');
    const message = document.getElementById('message');
    const snowContainer = document.getElementById('snow-container');
    
    // STATE
    let giftBoxOpened = false;
    let bouquetOpened = false;
    
    // MESSAGES
    const messages = [
        'Sihirli kokina buketi açıldı! ✨',
        'Yeni yıl hediyeleri geldi! 🎁',
        'Mutlu Yıllar! 🎉',
        'Kokina buketi seni bekliyor! 🌿',
        'Sağlık ve mutluluk dileğiyle! 💚',
        'Yeni yılın bereketli olsun! 🌟'
    ];
    
    // ===== GIFT BOX CLICK HANDLER =====
    giftBox.addEventListener('click', () => {
        if (!giftBoxOpened) {
            giftBoxOpened = true;
            
            // Hide gift box
            giftBox.style.opacity = '0';
            giftBox.style.transform = 'translateX(-50%) scale(0.8)';
            giftBox.style.pointerEvents = 'none';
            giftBox.style.transition = 'all 0.5s ease-out';
            
            // Show vase after animation
            setTimeout(() => {
                vaseContainer.style.display = 'block';
                
                // Open bouquet
                setTimeout(() => {
                    bouquet.classList.add('open');
                    showMessage();
                    createSnow();
                }, 300);
            }, 500);
        }
    });
    
    // Touch support for gift box
    giftBox.addEventListener('touchstart', (e) => {
        e.preventDefault();
        giftBox.click();
    });
    
    // ===== MESSAGE DISPLAY =====
    function showMessage() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const messageText = message.querySelector('.message-text');
        messageText.textContent = randomMessage;
        message.classList.add('show');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            message.classList.remove('show');
        }, 5000);
    }
    
    // ===== SNOW EFFECT =====
    function createSnow() {
        // Clear previous snowflakes
        snowContainer.innerHTML = '';
        
        // Create initial snowflakes
        for (let i = 0; i < 40; i++) {
            createSnowflake();
        }
        
        // Create continuous snowflakes
        setInterval(() => {
            if (giftBoxOpened) {
                createSnowflake();
            }
        }, 200);
    }
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random size (2-8px)
        const size = Math.random() * 6 + 2;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        
        // Random position
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.top = '-10px';
        
        // Random opacity
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        
        // Random duration
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 2;
        
        // Apply animation
        snowflake.style.animation = fall ${duration}s linear ${delay}s forwards;
        
        snowContainer.appendChild(snowflake);
        
        // Remove after animation
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, (duration + delay) * 1000);
    }
    
    // ===== INITIAL MESSAGE =====
    const initialMessage = message.querySelector('.message-text');
    initialMessage.textContent = 'Hediye kutusuna tıkla!';
    message.classList.add('show');
});

// ===== SNOW ANIMATION KEYFRAMES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(600px) translateX(${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
