import baseUrl from "../Api/BaseUrl";
const useDeleteData = async (url, parms) => {
    const res = await baseUrl.delete(url, parms)
    return res.data

}
export default useDeleteData