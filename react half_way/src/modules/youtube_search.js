import $ from 'jquery';

const YTSearch = (q, key) => {
  return $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {part: 'snippet', q, type: 'video', key}
  });
};

export default YTSearch;