import { Card } from "../card/Card";

export const Column = ({ title, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">{cards.map((card) => {
        return (
          <Card
          key={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date}
          ></Card>
        )
      })}</div>
    </div>
  );
};
