import blackPawns from "./img/horse.png";
export const createBoard = () => {
  const vertical = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const horizontal = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let squares = [];

  for (let i = 0; i < vertical.length; i++) {
    for (let k = 0; k < horizontal.length; k++) {
      let num = i + k;
      if (num % 2 == 0) {
        squares.push(<div className="whiteSquare"></div>);
      } else {
        squares.push(<div className="blackSquare"></div>);
      }
    }
  }
  console.log(squares);
  return squares;
};
