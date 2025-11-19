/**
 * WhatsApp Chat Widget - Simple Integration
 * 
 * Usage:
 * 1. Add this script to your HTML: <script src="whatsapp-widget.js"></script>
 * 2. Initialize: WhatsAppWidget.init('YOUR_PHONE_NUMBER', 'Your message');
 * 
 * Example:
 * <script>
 *   WhatsAppWidget.init('1234567890', 'Hello! I need help.');
 * </script>
 */

(function() {
    'use strict';
    
    const WhatsAppWidget = {
        config: {
            phoneNumber: '',
            message: 'Hello! I would like to get in touch.',
            position: 'bottom-right', // 'bottom-right', 'bottom-left'
            showOnMobile: true,
            showOnDesktop: true
        },
        
        init: function(phoneNumber, message, options = {}) {
            // Merge options with defaults
            this.config = Object.assign(this.config, {
                phoneNumber: phoneNumber,
                message: message || this.config.message
            }, options);
            
            // Validate phone number
            if (!this.config.phoneNumber) {
                console.error('WhatsApp Widget: Phone number is required');
                return;
            }
            
            // Check if widget already exists
            if (document.getElementById('whatsapp-widget-button')) {
                return; // Already initialized
            }
            
            // Check device type
            const isMobile = window.innerWidth <= 768;
            if (isMobile && !this.config.showOnMobile) return;
            if (!isMobile && !this.config.showOnDesktop) return;
            
            this.createWidget();
        },
        
        createWidget: function() {
            // Create button element
            const button = document.createElement('a');
            button.id = 'whatsapp-widget-button';
            button.href = this.generateLink();
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            button.setAttribute('aria-label', 'Chat with us on WhatsApp');
            button.className = 'whatsapp-widget-btn';
            
            // Add WhatsApp icon SVG
            button.innerHTML = `
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="white"/>
                </svg>
            `;
            
            // Inject styles
            this.injectStyles();
            
            // Add to page
            document.body.appendChild(button);
        },
        
        generateLink: function() {
            const cleanPhone = this.config.phoneNumber.replace(/\D/g, '');
            const encodedMessage = encodeURIComponent(this.config.message);
            return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
        },
        
        injectStyles: function() {
            if (document.getElementById('whatsapp-widget-styles')) {
                return; // Styles already injected
            }
            
            const style = document.createElement('style');
            style.id = 'whatsapp-widget-styles';
            style.textContent = `
                .whatsapp-widget-btn {
                    position: fixed;
                    ${this.config.position === 'bottom-left' ? 'left: 30px;' : 'right: 30px;'}
                    bottom: 30px;
                    width: 60px;
                    height: 60px;
                    background: #25D366;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 9999;
                    text-decoration: none;
                    animation: whatsapp-pulse 2s infinite;
                }
                
                .whatsapp-widget-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
                }
                
                .whatsapp-widget-btn:active {
                    transform: scale(0.95);
                }
                
                .whatsapp-widget-btn svg {
                    width: 35px;
                    height: 35px;
                }
                
                @keyframes whatsapp-pulse {
                    0% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                    50% {
                        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
                    }
                    100% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                }
                
                @media (max-width: 768px) {
                    .whatsapp-widget-btn {
                        ${this.config.position === 'bottom-left' ? 'left: 20px;' : 'right: 20px;'}
                        bottom: 20px;
                        width: 56px;
                        height: 56px;
                    }
                    
                    .whatsapp-widget-btn svg {
                        width: 32px;
                        height: 32px;
                    }
                }
            `;
            
            document.head.appendChild(style);
        }
    };
    
    // Export to global scope
    window.WhatsAppWidget = WhatsAppWidget;
})();

