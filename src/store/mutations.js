import Vue from 'vue'

export default {
    SET_ARTICLE: (state, articles) => {
        let temps = [];
        articles.map((item)=> {
            temps.push({
                Ftitle: item.Ftitle,
                Fauthor: item.Fauthor
            })
        });
        state.articles = temps;
    }
}
