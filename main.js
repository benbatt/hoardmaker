// assumes maximumBulk is "-", "L", or an integer
function bulkWithinLimit(bulk, maximumBulk) {
  if (maximumBulk == "-") {
    return true;
  } else {
    if (bulk == "" || bulk == "L") {
      return true;
    }

    maximumBulk = Number.parseInt(maximumBulk);
    bulk = Number.parseInt(bulk);

    if (Number.isInteger(maximumBulk) && Number.isInteger(bulk) && bulk <= maximumBulk) {
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

function gpValueWithinLimit(value, maximumValue) {
  value = valueToGP(value);
  return 0 < value && value <= maximumValue;
}

function takeRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];

  array.splice(index, 1);

  return element;
}

function selectItems(collections, filters) {
  let candidates = [];

  for (let collection of collections) {
    for (let item of collection) {
      if (bulkWithinLimit(item.bulk, filters.maximumBulk)) {
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
    if (filters.maximumValue > 0) {
      let remainingValue = filters.maximumValue - currentValue;
      candidates = candidates.filter((item) => gpValueWithinLimit(item.value, remainingValue));

      if (candidates.length == 0) {
        break;
      }
    }

    let item = takeRandomElement(candidates);
    let value = valueToGP(item.value);

    result.push(item);
    currentValue += value;

    if (filters.itemLimit > 0 && result.length == filters.itemLimit) {
      break;
    }
  }

  return result.length > 0 ? result : null;
}

function createElement(type, contents) {
  let element = document.createElement(type);
  element.append(contents);

  return element;
}

let gear = Papa.parse(gearData, { header: true });
let consumables = Papa.parse(consumablesData, { header: true });

const BaseURL = "https://2e.aonprd.com/";

function generate() {
  let filters = {
    maximumValue: valueToGP(document.getElementById("valueLimit").value),
    maximumBulk: document.getElementById("bulkLimit").value,
  };

  if (filters.maximumValue == 0) {
    filters.itemLimit = 5;
  } else {
    filters.itemLimit = 0;
  }

  let items = selectItems([gear.data, consumables.data], filters);

  if (items) {
    let table = document.createElement("table");

    let header = document.createElement("tr");
    header.append(createElement("th", "Name"), createElement("th", "Value"), createElement("th", "Bulk"));

    table.append(header);

    let totalValue = 0;

    items.sort((a, b) => valueToGP(b.value) - valueToGP(a.value));

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
}

document.getElementById("generate").addEventListener("click", generate);
