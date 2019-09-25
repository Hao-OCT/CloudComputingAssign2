import axios from "axios";
import { quoteUrl, apiKey, apiHost } from "../config.json";

export async function getQuote(content) {
  const apiEndpoint =
    quoteUrl +
    "/US" +
    "/" +
    content.currency +
    "/en-US" +
    "/" +
    content.origin +
    "/" +
    content.destination +
    "/" +
    content.outbound;
  await axios({
    method: "GET",
    url: apiEndpoint,
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey
    },
    params: {
      inboundpartialdate: content.inbound
    }
  }).then(function(response) {
    const price = response.data.Quotes[0].MinPrice;
    if (price) alert("What a bargain, Only $" + price);
    else {
      alert("Invalid input!");
    }
  });
}
