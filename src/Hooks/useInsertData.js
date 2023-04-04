import baseUrl from "../Api/BaseUrl";
const useInsertData = async (url, parms) => {
  const res = await baseUrl.post(url, parms);
  return res;
};
const useInsertDataImage = async (url, parms) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseUrl.post(url, parms, config);
  console.log(res.status);
  return res;
};
export { useInsertData, useInsertDataImage };
