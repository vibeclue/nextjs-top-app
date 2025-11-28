import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;  // что бы можно было прокинуть текст для компонента
    appearance: 'primary' | 'ghost';  // цвет кнопки (или фиолетовый(--primary: #7653FC;) или прозрачный)
    arrow?: 'right' | 'down' | 'none';  // стрелка на кнопке
}