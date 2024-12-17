/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronuon = ["the", "our", "yours", "mine", "their", "his"];
  let adj = ["great", "big", "little", "super", "old", "poor"];
  let noun = ["jogger", "racoon", "jiraf", "elephant", "bull", "cat"];
  let extension = [".com", ".net", ".io", ".ar", ".es", ".org"]

  let newDomain = '';
  pronuon.map((itemPronoun) => {
    adj.map((itemAdj) => {
      noun.map((itemNoun) => {
        extension.map((itemExtension) => {
          newDomain += `
        <li class="list-group-item bg-secondary border border-info border-4 rounded mb-2 text-white d-flex justify-content-between">
        ${itemPronoun}${itemAdj}${itemNoun}${itemExtension}
        <i class="fas fa-link m-1"></i></li>
        `
        })
      })
    })
  })
  document.querySelector("#map-method").innerHTML = newDomain;
};