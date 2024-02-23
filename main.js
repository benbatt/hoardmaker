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

function levelWithinLimit(level, levelLimit) {
  if (levelLimit == "-") {
    return true;
  } else {
    levelLimit = Number.parseInt(levelLimit);
    level = Number.parseInt(level);

    if (Number.isInteger(levelLimit) && Number.isInteger(level) && level <= levelLimit) {
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

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomElement(array) {
  return array[randomIndex(array)];
}

function randomWeightedElement(array, weightFunction) {
  let totalWeight = array.reduce((weight, element) => weight + weightFunction(element), 0);

  let t = Math.random() * totalWeight;

  let currentWeight = 0;
  let index = array.findIndex(element => { currentWeight += weightFunction(element); return t < currentWeight; });

  return { element: array[index], index };
}

function selectSpell(predicate) {
  let candidates = getSpells().filter(predicate);

  return randomElement(candidates);
}

function cloneItem(item) {
  return {
    name: item.name,
    value: item.value,
    bulk: item.bulk,
    level: item.level,
    rarity: item.rarity,
    url: item.url,
    transform: item.transform,
  };
}

function createElement(type, contents) {
  let element = document.createElement(type);
  element.append(contents);

  return element;
}

const BaseURL = "https://2e.aonprd.com/";

function createAnchor(contents, url) {
  let anchor = createElement("a", contents);
  anchor.setAttribute("href", `${BaseURL}${url}`);

  return anchor;
}

function createCompoundItemName(template, itemURL, componentName, componentURL) {
  let itemLinkStart = template.indexOf("[") + 1;
  let itemLinkEnd = template.indexOf("]");

  let spellIndex = template.indexOf("$");

  let itemLink = createAnchor(template.substring(itemLinkStart, itemLinkEnd), itemURL);
  let infix = template.substring(itemLinkEnd + 1, spellIndex);
  let suffix = template.substring(spellIndex + 1);

  let result = document.createElement("span");
  result.append(itemLink, infix);

  if (componentURL) {
    result.append(createAnchor(componentName, componentURL));
  } else {
    result.append(componentName);
  }

  result.append(suffix);

  return result;
}

function selectAmmunition(filter) {
  if (filter) {
    filter = filter.split("|");
    return randomElement(Ammunition.filter((a) => filter.includes(a.name)));
  } else {
    return randomElement(Ammunition);
  }
}

const Transformations = new Map([
  [ "ammunition", function(item, parameters) {
    let result = cloneItem(item);

    let ammunition = selectAmmunition(parameters.filter);
    result.name = createCompoundItemName(parameters.name, item.url, ammunition.displayName, ammunition.url);

    return result;
  }],
  [ "continuation", function(item, parameters) {
    let level = +parameters.level;

    let spell = selectSpell((spell) => {
      if (+spell.level != level) {
        return false;
      }

      if (!spell.actions.match(/\[one-action|two-actions\]/)) {
        return false;
      }

      let match = spell.duration.match(/^(\d+) (minute|hour)s?$/);

      if (!match) {
        return false;
      }

      if ((match[2] == "minute" && +match[1] < 10) || (match[2] == "hour" && +match[1] > 1)) {
        return false;
      }

      return true;
    });

    let result = cloneItem(item);
    result.name = createCompoundItemName(parameters.name, item.url, spell.name, spell.url);

    return result;
  }],
  [ "deity", function(item, parameters) {
    let deity = randomElement(Deities);

    let result = cloneItem(item);
    result.name = createCompoundItemName(parameters.name, item.url, deity.name);

    return result;
  }],
  [ "gem", function(item, parameters, options) {
    let result = cloneItem(item);
    result.name = randomElement(Gems[parameters.group]);

    let multiplier = Math.floor(Math.random() * 4 + 1);
    result.value = coinString(valueToGP(parameters.baseValue) * multiplier);
    result.allowRepeats = true;

    return result;
  }],
  [ "spell", function(item, parameters) {
    let level = +parameters.level;
    let spell = selectSpell((spell) => (+spell.level) == level);

    let result = cloneItem(item);
    result.name = createCompoundItemName(parameters.name, item.url, spell.name, spell.url);

    return result;
  }],
  [ "tool", function(item, parameters, options) {
    let tool = randomElement(Tools.filter((t) => t.type == parameters.filter));

    let result = cloneItem(item);
    result.name = tool.displayName;

    return result;
  }],
  [ "weapon", function(item, parameters, options) {
    let weapons = getCollection("weapons").items.filter((w) => bulkWithinLimit(w.bulk, options.bulkLimit));
    let weapon = randomElement(weapons);

    let result = cloneItem(item);
    result.name = createCompoundItemName(parameters.name, item.url, weapon.name, weapon.url);
    result.bulk = weapon.bulk;

    return result;
  }],
  [ "widening", function(item, parameters) {
    let level = +parameters.level;
    let spell = selectSpell((spell) => {
      if ((+spell.level) != level) {
        return false;
      }

      if (spell.duration.length > 0) {
        return false;
      }

      if (!(spell.actions.includes("[one-action]") || spell.actions.includes("[two-actions]"))) {
        return false;
      }

      if (spell.area.match(/cone|line/)) {
        return true;
      }

      let match = spell.area.match(/(\d+)-foot burst/);

      if (match && +match[1] >= 10) {
        return true;
      }

      return false;
    });

    let result = cloneItem(item);
    result.name = createCompoundItemName(parameters.name, item.url, spell.name, spell.url);

    return result;
  }],
]);

function parseParameters(parameters) {
  let pairs = parameters.split("&");

  let result = {};

  for (let pair of pairs) {
    let [name, value] = pair.split("=");
    result[name] = value;
  }

  return result;
}

function applyTransformation(item, options) {
  if (item.transform) {
    let parameters = parseParameters(item.transform)
    return Transformations.get(parameters.type)(item, parameters, options);
  } else {
    return item;
  }
}

const CoinsURL = "Rules.aspx?ID=182";

function selectItems(collections, options) {
  let candidates = [];

  for (let collection of collections) {
    for (let item of collection) {
      if (bulkWithinLimit(item.bulk, options.bulkLimit) && levelWithinLimit(item.level, options.levelLimit)) {
        candidates.push({ item, value: valueToGP(item.value) });
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
      candidates = candidates.filter(c => (0 < c.value && c.value <= remainingValue));

      if (candidates.length == 0) {
        break;
      }
    }

    let { element, index } = randomWeightedElement(candidates, function(c) {
      if (c.item.rarity == "Uncommon") {
        return c.value / 5;
      } else if (c.item.rarity == "Rare") {
        return c.value / 25;
      } else {
        return c.value;
      }
    });

    let item = applyTransformation(element.item, options);

    if (!item.allowRepeats) {
      candidates.splice(index, 1);
    }

    result.push(item);
    currentValue += valueToGP(item.value);

    if (options.itemLimit > 0 && result.length == options.itemLimit) {
      break;
    }
  }

  if (currentValue < options.valueLimit) {
    let coinsValue = options.valueLimit - currentValue;
    result.push({
      name: coinString(coinsValue),
      value: gpString(coinsValue),
      bulk: "",
      level: "",
      rarity: "",
      url: CoinsURL
    });
  }

  return result.length > 0 ? result : null;
}

function generate() {
  let options = {
    itemLimit: Number.parseInt(document.getElementById("itemLimit").value),
    valueLimit: valueToGP(document.getElementById("valueLimit").value),
    bulkLimit: document.getElementById("bulkLimit").value,
    levelLimit: document.getElementById("levelLimit").value,
    collections: [],
  };

  options.itemLimit = Math.max(1, options.itemLimit);

  for (let name of Collections.keys()) {
    if (document.getElementById(`${name}Enable`).checked) {
      options.collections.push(name);
    }
  }

  let collections = options.collections.map((name) => getCollection(name).items);

  let items = selectItems(collections, options);

  if (items) {
    let table = document.createElement("table");

    let header = document.createElement("tr");
    header.append(createElement("th", "Name"), createElement("th", "Value"), createElement("th", "Bulk"),
      createElement("th", "Level"), createElement("th", "Rarity"));

    table.append(header);

    let totalValue = 0;

    for (let item of items) {
      totalValue += valueToGP(item.value);

      let name;

      if (typeof(item.name) == "string") {
        name = createAnchor(item.name, item.url);
      } else {
        name = item.name;
      }

      let tr = document.createElement("tr");
      tr.append(createElement("td", name), createElement("td", item.value), createElement("td", item.bulk),
        createElement("td", item.level), createElement("td", item.rarity));

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

function createCollectionControls() {
  let itemTypes = document.getElementById("itemTypes");

  for (let entry of Collections.entries()) {
    let div = document.createElement("div");

    let id = `${entry[0]}Enable`;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("id", id);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("checked", true);

    div.append(checkbox);

    let label = createElement("label", entry[1].displayName);
    label.setAttribute("for", id);

    div.append(label);

    itemTypes.append(div);
  }
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

  if (searchParams.has("levelLimit")) {
    document.getElementById("levelLimit").value = searchParams.get("levelLimit");
  }

  if (searchParams.has("collections")) {
    let collections = searchParams.get("collections").split(",");

    for (let name of Collections.keys()) {
      let element = document.getElementById(`${name}Enable`);
      element.checked = collections.includes(name);
    }
  }
}

createCollectionControls();
processQueryString();
document.getElementById("generate").addEventListener("click", generate);
