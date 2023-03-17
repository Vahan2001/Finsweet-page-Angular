export const host = 'http://localhost:3000';
export const environment = {
    production: true,
    chooseUrl: {
        get: host + '/chooseDatas'
    },
    authorsUrl: {
        get: host + '/authorsDatas'
    },
    joinOurUrl: {
        get: host + '/joinOurDatas'
    },
    allPostsUrl: {
        get: host + '/allPostsDatas'
    }
};