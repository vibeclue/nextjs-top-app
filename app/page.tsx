
import { Button, Htag, Ptag, Tag, Rating } from "@/components";
import { Menu } from "@/components/ui/Menu/Menu";


// ФИГМА: https://www.figma.com/design/Cy3uqi4SSRfk89hLq85lbN/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=1-2&t=lGdd2H9HOXI1SZRr-0

export default function Home() {

    return (
    <>
        <Htag tag='h1'>Что-то</Htag>
        <Button appearance='primary' arrow='right'>Кнопка</Button>
        <Button appearance='ghost' arrow='down'>Кнопка</Button>
        <Ptag size='s'>Малый: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>
        <Ptag size='m'>Средний: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>
        <Ptag size='l'>Большой: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>

        <Tag size='s' color='ghost'>ghost</Tag>
        <Tag size='m' color='red'>Красный </Tag>
        <Tag size='s' color='green'>Green </Tag>
        <Tag size='m' color='primary'>primary </Tag>
        <Tag size='m' color='red' href='https://www.npmjs.com/package/@svgr/webpack?activeTab=readme'>Ссылка</Tag>

        <Menu/>

    </>
  );
}

