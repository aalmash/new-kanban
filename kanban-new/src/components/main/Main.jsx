import { statusList } from "../../../data";
import { Column } from "../column/Column";

export const Main = ({cards}) => {
  
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, id) => (
              <Column 
              key={id}
              title={status}
              cards={cards.filter((card) => card.status === status)}
              ></Column>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
