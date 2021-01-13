import React from 'react';
import './loading.css';
import colorChange from './colorChange';

colorChange();

export default function Loading(){
    return (
        <div id="loadingSvg">

            <svg width="150" height="180" viewBox="0 0 161 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 161.5L2.5 80.5H50V161.5Z" fill="#FF3D60" stroke="black"/>
            <path d="M111.5 73L48 79.5L87.5 198.5L111.5 73Z" fill="#FF3D60" stroke="black"/>
            <path d="M160 80.5L112.5 72L103 184.5L160 80.5Z" fill="#FF3D60" stroke="black"/>
            <path d="M11.5 143L2 81L25.25 121.25L48.5 161.5L11.5 143Z" fill="#EA4461" stroke="black"/>
            <path d="M50 162L87.5 197.5L50 84V162Z" fill="#E0457D" stroke="black"/>
            <path d="M103 183.5L88 196.5L112.5 75L103 183.5Z" fill="#E0457D" stroke="black"/>
            <path d="M142 139L160 80.5L131.5 132L103 183.5L142 139Z" fill="#EA4461" stroke="black"/>
            <path d="M25.5001 56.5L2.00013 80.9999L47.5001 80.9999L25.5001 56.5Z" fill="#EA4461" stroke="black"/>
            <path d="M25.5708 29.8721L47.5001 79.9999L25.5708 56.4999L25.5708 29.8721Z" fill="#FF3D60" stroke="black"/>
            <path d="M25.1102 31.7488L2 80L25.1102 56.5L25.1102 31.7488Z" fill="#E0457D" stroke="black"/>
            <path d="M82.5 51.5L48 78.8265L113 72.9294L82.5 51.5Z" fill="#EA4461" stroke="black"/>
            <path d="M82.5379 12.9295L111 71.9294L82.5379 52.5L82.5379 12.9295Z" fill="#FF3D60" stroke="black"/>
            <path d="M82 14.9294L48.2669 78.7919L82 52.5L82 14.9294Z" fill="#E0457D" stroke="black"/>
            <path d="M129 15L114.5 72L159 79.5L150.5 21L129 15Z" fill="#EA4461" stroke="black"/>
            <path d="M82.5 14.5L94 0.5H110.5L129 14.5L115 77.5L82.5 14.5Z" fill="#FF3D60"/>
            <path d="M110.5 0.5H94L82.5 14.5L115 77.5M110.5 0.5L129 14.5L115 77.5M110.5 0.5L115 77.5" stroke="black"/>
            <path d="M25 30H53L64 13.5H82.5L47.5 80.5L25 30Z" fill="#FF3D60"/>
            <path d="M53 30H25L47.5 80.5M53 30L64 13.5H82.5L47.5 80.5M53 30L47.5 80.5" stroke="black"/>
            <path d="M33.5 20L25 30H51L65 13.5H51L33.5 20Z" fill="#E0457D" stroke="black"/>
            </svg>

        </div>
    )
}