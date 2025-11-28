import { Button, Htag } from "@/components";

// ФИГМА: https://www.figma.com/design/Cy3uqi4SSRfk89hLq85lbN/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=1-2&t=lGdd2H9HOXI1SZRr-0
export default function Home() {

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
    </>
  );
}
