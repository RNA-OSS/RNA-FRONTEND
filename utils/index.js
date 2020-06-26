export const CalculateSort = (sort) => {
  const horizontalNumber = sort % 10;
  const verticalNumber = Math.floor(sort / 10);

  let horizontal = "center";
  let vertical = "center";

  if (horizontalNumber === 1) horizontal = "flex-start";
  else if (horizontalNumber === 3) horizontal = "flex-end";
  else if (horizontalNumber === 4) horizontal = "space-between";
  else if (horizontalNumber === 5) horizontal = "space-around";

  if (verticalNumber === 1) vertical = "flex-start";
  else if (verticalNumber === 3) vertical = "flex-end";
  else if (verticalNumber === 4) vertical = "space-between";
  else if (verticalNumber === 5) vertical = "space-around";

  return [horizontal, vertical];
};

//컴포넌트로 입력받은 padding과 margin으로 입력된 값을 설정한다.
export const CalculateBox = (targetArr) => {
  let resultArr = [targetArr[0], targetArr[0], targetArr[0], targetArr[0]];

  if (targetArr.length === 2) {
    if (targetArr[1] !== undefined)
      resultArr = [targetArr[0], targetArr[1], targetArr[0], targetArr[1]];
  } else if (targetArr.length === 3) {
    if (targetArr[1] !== undefined && targetArr[2] !== undefined)
      resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[1]];
  } else if (targetArr.length === 4) {
    if (
      targetArr[1] !== undefined &&
      targetArr[2] !== undefined &&
      targetArr[3] !== undefined
    )
      resultArr = [targetArr[0], targetArr[1], targetArr[2], targetArr[3]];
  }

  return `${resultArr.toString().replace(/,/gi, "rem ")}rem`;
};

export const CalculateFlexAttribute = (targetArr) => {
  let resultString = `${targetArr[0]}`;

  if (targetArr.length > 2) {
    resultString = `${targetArr.toString().replace(/,/gi, " ")}`;
  }
  return resultString;
};
