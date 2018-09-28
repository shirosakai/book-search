/**

 created by shiro on 2018/09/15
 */

// import gapi from 'gapi';

// GoogleBooksAPIのAPIキー
const MY_API_KEY = 'AIzaSyB1uqd4wzARisYjXw8Flam-slAO4W9MIcY';

export default class GetBookData {
    /**
     * GoogleBookAPI を使って検索ワードに該当する書籍情報の一覧を取得する
     * 最大取得件数10件
     *      GoogleBooksApiが便利...書影も取れる
     *      https://developers.google.com/books/docs/v1/reference/volumes
     *      検索... https://developers.google.com/books/docs/v1/reference/volumes/list
     *
     * @param {string} searchWord
     * @param {number} startIndex
     */
    static async getFromGoogleBook(searchWord, startIndex = 0) {
        const reqUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchWord)}&startIndex=${startIndex}&key=${MY_API_KEY}`;
        const resp = await fetch(reqUrl);
        return resp.json();
    }

    /**
     * 検索ワードに該当するすべての書籍情報の一覧を取得する
     * @param {string} searchword
     * @param {number} limit 上限件数
     * @return {Promise<Array>}
     */
    static async getAllFromGoogleBook(searchword, limit = 100) {
        const resultItems = [];

        let index = 0;
        let itemCnt = 0;

        while (true) {
            const resp = await GetBookData.getFromGoogleBook(searchword, index);
            if (resp.items != null) {
                resultItems.push(...resp.items);
                itemCnt = resp.items.length;
                index += itemCnt;
                if (resultItems.length >= limit) {
                    return resultItems.slice(0, limit);
                }
            } else break;
        }

        return resultItems;
    }
}
