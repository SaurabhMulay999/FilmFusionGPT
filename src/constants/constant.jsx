export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
    }
};
  
export const CDNURL = "https://image.tmdb.org/t/p/w500/";