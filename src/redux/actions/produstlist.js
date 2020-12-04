import axios from "axios";
export default async function GetProducts() {
  let data = null;
  let URL = "https://5fc885db2af77700165ad663.mockapi.io/api/v1/product";
  await axios
    .get(URL)
    .then((response) => {
      data = response.data;
    })
    .catch(() => {});
  return await data;
}
