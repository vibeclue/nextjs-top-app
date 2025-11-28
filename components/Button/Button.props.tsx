import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;  // что бы можно было прокинуть текст для компонента
    appearance: 'primary' | 'ghost';  // цвет кнопки (или фиолетовый(--primary: #7653FC;) или прозрачный)
}