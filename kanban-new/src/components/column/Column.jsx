import { Card } from "../card/Card";
import * as S from "./Column.styled";

export const Column = ({ title, cards }) => {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>{cards.map((card) => {
        return (
          <Card
          key={card.id}
          id={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date}
          ></Card>
        )
      })}</S.Cards>
    </S.MainColumn>
  );
};
