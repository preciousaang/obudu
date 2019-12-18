import axios from "axios";
const fetch = require("isomorphic-fetch");
require("isomorphic-fetch");

let fetchProductUrl = `${process.env.GRIDSOME_API_URL}/storefront/fetch`;
let dummy_store = `${process.env.GRIDSOME_STORENAME}`;

if(dummy_store == undefined){
    // Attempt to get Config JSON
    fetch("./config.json")
      .then(response => response.json())
      .then(json => {
        console.log("The Config contents are: ", json);
        fetchProductUrl = `${json["GRIDSOME_API_URL"]}/storefront/fetch`;
        dummy_store = json["GRIDSOME_STORENAME"];
      })
      .catch(err => console.log("Unable to locate config file", err));

}


const actions = {
  async fetchHomeProducts({ state, commit }) {
    return new Promise(async (resolve, reject) => {
      let reqUrl = `${fetchProductUrl}/${dummy_store}`;
      let response = await axios.get(reqUrl).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
        console.log(response.data);
        commit("setProducts", response.data);
      } else {
        reject("Unable to fetch products");
      }
    });
  }
};

export default actions;