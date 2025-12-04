import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Страница'
}

export default function PageProducts({ params }: {params: { alias: string } }) {
    const  { alias } = params;
    return(
        <div>Products ok {alias}</div>
    );
}