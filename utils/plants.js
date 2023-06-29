const plants = (page, callback) => {
    const url = `https://trefle.io/api/v1/plants?token=2906BFyw7M4IAQPxAAxsK7hn-Crk_RkJTj6Jy0YzzbU&page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          if(data.success===false){
              callback(`Impossible de renvoyer vos informationError`, undefined)
          }
          else{
              callback(undefined, data); 
          }
      });
  };

module.exports = {plants};