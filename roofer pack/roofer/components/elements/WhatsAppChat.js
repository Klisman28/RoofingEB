import Link from "next/link";
import React from "react";

export default function WhatsAppChat() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            {/* Messenger Button */}
            <Link
                href="https://m.me/ebroofingusa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#0084FF',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                }}
                className="messenger-float"
            >
                {/* Messenger SVG Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.03 2 11C2 13.66 3.39 16.04 5.55 17.59V22L9.62 19.78C10.39 19.93 11.18 20 12 20C17.52 20 22 15.97 22 11C22 6.03 17.52 2 12 2ZM13.88 15L11.12 12.5L5.75 15.5L11.5 6L14.5 8.5L19.5 5.5L13.88 15Z" />
                </svg>
            </Link>


            {/* WhatsApp Button */}
            <Link
                href="https://wa.me/17743001932"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    color: 'white',
                }}
                className="whatsapp-float"
            >
                {/* Simple WhatsApp SVG Icon */}
                <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382C17.112 14.195 15.343 13.315 15.011 13.193C14.679 13.072 14.437 13.012 14.196 13.375C13.954 13.738 13.26 14.561 13.049 14.803C12.837 15.045 12.626 15.075 12.264 14.894C11.902 14.712 10.738 14.329 9.359 13.093C8.28302 12.128 7.55602 10.938 7.34502 10.575C7.13402 10.211 7.32302 10.015 7.50402 9.835C7.66502 9.674 7.86302 9.416 8.04402 9.204C8.22502 8.992 8.28502 8.841 8.40602 8.599C8.52702 8.356 8.46602 8.145 8.37602 7.963C8.28502 7.781 7.56102 6.026 7.25902 5.302C6.96502 4.597 6.66602 4.694 6.43502 4.685C6.21602 4.676 5.97502 4.675 5.73302 4.675C5.49202 4.675 5.09902 4.766 4.76702 5.129C4.43502 5.492 3.49902 6.37 3.49902 8.156C3.49902 9.942 4.79802 11.666 4.97902 11.909C5.16002 12.151 7.50802 16.096 11.232 17.584C14.828 19.018 14.828 18.574 15.485 18.513C16.142 18.452 17.604 17.632 17.905 16.784C18.207 15.936 18.207 15.209 18.117 15.057C18.026 14.906 17.785 14.836 17.472 14.654L17.472 14.382ZM12.001 21.841C10.218 21.841 8.55202 21.366 7.09802 20.528L6.78602 20.342L3.00102 21.342L4.01502 17.625L3.81502 17.306C2.90902 15.862 2.42802 14.178 2.42802 12.422C2.42802 7.151 6.72102 2.858 12.001 2.858C17.281 2.858 21.574 7.151 21.574 12.422C21.572 17.691 17.279 21.841 12.001 21.841ZM12.001 0.6C5.46702 0.6 0.170023 5.897 0.170023 12.431C0.170023 14.73 0.835023 16.883 1.99002 18.704L0.263023 25.04L6.72602 23.336C8.32402 24.237 10.128 24.712 11.995 24.712C18.529 24.712 23.826 19.415 23.826 12.882C23.826 6.349 18.528 0.599 12.001 0.599V0.6Z" />
                </svg>
            </Link>
        </div>
    );
}
