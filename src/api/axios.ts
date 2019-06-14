import { apiAxios } from ".";

export const URL_PREFIX = '/api'

export function getUserInfo(url: any) {
    return apiAxios("GET", URL_PREFIX + url)
}
export function getProduct(url: any) {
    return apiAxios("GET", URL_PREFIX + url)
}