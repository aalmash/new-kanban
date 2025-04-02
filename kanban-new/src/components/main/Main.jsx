import { Card } from "../card/Card";
import { Column } from "../column/Column";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              columnTitle={"Без статуса"}
              cards={<Card color={"_green"} theme={"Research"} />}
            />
            <Column
              columnTitle={"Нужно сделать"}
              cards={<Card color={"_orange"} theme={"Web Design"} />}
            />
            <Column
              columnTitle={"В работе"}
              cards={
                <>
                  <Card color={"_green"} theme={"Research"} />
                  <Card color={"_orange"} theme={"Web Design"} />
                  <Card color={"_purple"} theme={"Copywriting"} />
                </>
              }
            />
            <Column
              columnTitle={"Тестирование"}
              cards={<Card color={"_green"} theme={"Research"} />}
            />
            <Column
              columnTitle={"Готово"}
              cards={<Card color={"_purple"} theme={"Copywriting"} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
