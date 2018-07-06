import axios from 'axios';

export default {
    getArticles: () => {
        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5423effdca6f40f18ce47a8ba829b027&q=' + query + '&begin_date=' + beginDate + '&end_date=' + endDate + '&sort=newest');
    }
}