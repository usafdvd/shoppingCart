export const currencyFormatter = (price, currency) => {
  // Taking in currency in case we decided to display 
  // different types of currency based on backend data for this project
  let prefix = "";
  switch (currency) {
    case "USD" :
      prefix = "$"
      break;
    default :
      prefix = "$"
  }
  // for this project purpose, just writing for USD and formatting to two digit floats
  return `${prefix}${parseFloat(price).toFixed(2)}`
}