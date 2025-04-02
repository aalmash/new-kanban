export const Column = ({ columnTitle, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
};
