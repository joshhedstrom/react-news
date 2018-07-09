import axios from 'axios';

export default {
  getArticles: (topic, beginDate, endDate) => {
    if (!beginDate) {
      beginDate = '';
    } else {
      beginDate.split('-').join('');
      beginDate = `&begin_date=${beginDate}`;
    }
    if (!endDate) {
      endDate = '';
    } else {
      endDate.split('-').join('');
      endDate = `&end_date=${endDate}`;
    }

    return axios.get(
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5423effdca6f40f18ce47a8ba829b027&q=' +
        topic +
        beginDate +
        endDate +
        '&sort=newest'
    );
  },

  getSavedArticles: () => {
  },

  saveArticles: (id) => {
    console.log(id)
  },

  deleteArticles: (id) => {
    console.log(id)
  },
};
