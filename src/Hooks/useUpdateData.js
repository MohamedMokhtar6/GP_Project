import baseUrl from "../Api/BaseUrl";
const useUpdateData = async (url, parms) => {
    const res = await baseUrl.put(url, parms)
    return res.data

}
const useUpdateDataImage = async (url, parms) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.put(url, parms, config)
    console.log(res.status)
    return res

}
export { useUpdateData, useUpdateDataImage }