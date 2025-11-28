import { ReactNode } from "react";

export interface HtagProps {
    tag: 'h1' | 'h2' | 'h3'; // tag ='h1'/'h2'/..
    children: ReactNode; // что бы можно было прокинуть текст для компонента
}