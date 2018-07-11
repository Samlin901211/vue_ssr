import axios from 'axios'
export default {
    FETCH_ARTICLE: ({ commit, state }, { id }) => {
        return axios.get('http://musicfe.cn/ajax/article/get', {
            params: {
                data: JSON.stringify({
                    where: {Fid: id}
                })
            }
        }).then((res) => {
            console.log(res.data.data.length);
            commit('SET_ARTICLE', res.data.data)
        }).catch((e)=> {
            console.log(e)
        });
    },
}
