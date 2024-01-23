// let createFood = () => {
//   console.log("yes");
// };

import showDataForm, { getDataForm } from "./controller-v1.js";

window.createFood = () => {
  console.log("yes create");
  let data = getDataForm();
  showDataForm(data);
};
