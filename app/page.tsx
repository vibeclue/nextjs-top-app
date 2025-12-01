'use client'
import { Button, Htag, Ptag, Tag, Rating } from "@/components";
import { useEffect, useState } from "react";

// ФИГМА: https://www.figma.com/design/Cy3uqi4SSRfk89hLq85lbN/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=1-2&t=lGdd2H9HOXI1SZRr-0
export default function Home() {

  const [counter, setCounter] = useState<number>(0);
  

    useEffect(() => {
      console.log(`Состояние counter изменилось, теперь оно ${counter}`);
    }, [counter]);


  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(counter+1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <Ptag size='s'>Малый: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>
      <Ptag size='m'>Средний: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>
      <Ptag size='l'>Большой: Тут хотелосб бы видеть очень мног отекста ванпаовоавк ак ваыва выа </Ptag>

      <Tag size='s' color='ghost'>ghost</Tag>
      <Tag size='m' color='red'>Красный </Tag>
      <Tag size='s' color='green'>Green </Tag>
      <Tag size='m' color='primary'>primary </Tag>
      <Tag size='m' color='red' href='https://www.npmjs.com/package/@svgr/webpack?activeTab=readme'>Ссылка</Tag>

      <Rating  rating= {4} > </Rating>
    </>
  );
}
