"use strict";

// assumes bulkLimit is "-", "L", or an integer
function bulkWithinLimit(bulk, bulkLimit) {
  if (bulkLimit == "-") {
    return true;
  } else {
    if (bulk == "" || bulk == "L") {
      return true;
    }

    bulkLimit = Number.parseInt(bulkLimit);
    bulk = Number.parseInt(bulk);

    if (Number.isInteger(bulkLimit) && Number.isInteger(bulk) && bulk <= bulkLimit) {
      return true;
    }
  }

  return false;
}

function valueToGP(value) {
  let multiplier = 1;

  if (typeof(value) == "string") {
    value = value.trim().replaceAll(",", "").toLowerCase();

    if (value.endsWith("cp")) {
      value = value.slice(0, -2);
      multiplier = 0.01;
    } else if (value.endsWith("sp")) {
      value = value.slice(0, -2);
      multiplier = 0.1;
    } else if (value.endsWith("gp")) {
      value = value.slice(0, -2);
    } else if (value.endsWith("pp")) {
      value = value.slice(0, -2);
      multiplier = 10;
    }

    value = +value;
  }

  if (Number.isFinite(value)) {
    return value * multiplier;
  } else {
    return 0;
  }
}

function gpString(value) {
  return value.toLocaleString({ maximumFractionDigits: 2 }) + " gp";
}

const Denominations = ["gp", "sp", "cp"];

function coinString(value) {
  let coins = [];
  let coinValue = 1;

  for (let denomination of Denominations) {
    if (value >= coinValue) {
      let count = Math.floor(value / coinValue);
      coins.push(`${count} ${denomination}`);
      value -= count * coinValue;
    }

    coinValue /= 10;
  }

  return coins.join(", ");
}

function gpValueWithinLimit(value, valueLimit) {
  value = valueToGP(value);
  return 0 < value && value <= valueLimit;
}

function takeRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];

  array.splice(index, 1);

  return element;
}

const CoinsURL = "Rules.aspx?ID=182";

function selectItems(collections, options) {
  let candidates = [];

  for (let collection of collections) {
    for (let item of collection) {
      if (bulkWithinLimit(item.bulk, options.bulkLimit)) {
        candidates.push(item);
      }
    }
  }

  if (candidates.length == 0) {
    return null;
  }

  let result = [];
  let currentValue = 0;

  while (true) {
    if (options.valueLimit > 0) {
      let remainingValue = options.valueLimit - currentValue;
      candidates = candidates.filter((item) => gpValueWithinLimit(item.value, remainingValue));

      if (candidates.length == 0) {
        break;
      }
    }

    let item = takeRandomElement(candidates);
    let value = valueToGP(item.value);

    result.push(item);
    currentValue += value;

    if (options.itemLimit > 0 && result.length == options.itemLimit) {
      break;
    }
  }

  result.sort((a, b) => valueToGP(b.value) - valueToGP(a.value));

  if (currentValue < options.valueLimit) {
    let coinsValue = options.valueLimit - currentValue;
    result.push({ name: coinString(coinsValue), value: gpString(coinsValue), bulk: "", url: CoinsURL });
  }

  return result.length > 0 ? result : null;
}

function createElement(type, contents) {
  let element = document.createElement(type);
  element.append(contents);

  return element;
}

const BaseURL = "https://2e.aonprd.com/";

function generate() {
  let options = {
    itemLimit: Number.parseInt(document.getElementById("itemLimit").value),
    valueLimit: valueToGP(document.getElementById("valueLimit").value),
    bulkLimit: document.getElementById("bulkLimit").value,
    collections: [],
  };

  options.itemLimit = Math.max(1, options.itemLimit);

  for (let name of CollectionNames) {
    if (document.getElementById(`${name}Enable`).checked) {
      options.collections.push(name);
    }
  }

  let collections = options.collections.map((name) => getCollection(name));

  let items = selectItems(collections, options);

  if (items) {
    let table = document.createElement("table");

    let header = document.createElement("tr");
    header.append(createElement("th", "Name"), createElement("th", "Value"), createElement("th", "Bulk"));

    table.append(header);

    let totalValue = 0;

    for (let item of items) {
      totalValue += valueToGP(item.value);

      let name = createElement("a", item.name);
      name.setAttribute("href", `${BaseURL}${item.url}`);

      let tr = document.createElement("tr");
      tr.append(createElement("td", name), createElement("td", item.value), createElement("td", item.bulk));

      table.append(tr);
    }

    let totalsRow = document.createElement("tr");
    totalsRow.append(createElement("td", "Total"), createElement("td", gpString(totalValue)), createElement("td", ""));

    table.append(totalsRow);

    let output = document.getElementById("output");
    output.prepend(table);
  }

  let queryLink = document.getElementById("queryLink");
  queryLink.text = "Link to these settings";

  let searchParams = new URLSearchParams(options);
  queryLink.href = `${document.location.pathname}?${searchParams}`;
}

function processQueryString() {
  let searchParams = new URLSearchParams(document.location.search);

  if (searchParams.has("itemLimit")) {
    document.getElementById("itemLimit").value = searchParams.get("itemLimit");
  }

  if (searchParams.has("valueLimit")) {
    document.getElementById("valueLimit").value = searchParams.get("valueLimit");
  }

  if (searchParams.has("bulkLimit")) {
    document.getElementById("bulkLimit").value = searchParams.get("bulkLimit");
  }

  if (searchParams.has("collections")) {
    let collections = searchParams.get("collections").split(",");

    for (let name of CollectionNames) {
      let element = document.getElementById(`${name}Enable`);
      element.checked = collections.includes(name);
      console.log(element);
    }
  }
}

processQueryString();
document.getElementById("generate").addEventListener("click", generate);
