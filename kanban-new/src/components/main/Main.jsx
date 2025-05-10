import { statusList } from "../../../data";
import { Container } from "../../Global.styled";
import { Column } from "../column/Column";
import * as S from "./Main.styled";

export const Main = ({ cards }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status, id) => (
              <Column
                key={id}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              ></Column>
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};
