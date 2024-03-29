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

function valueToCoins(value) {
  let coins = [];
  let roundedValue = 0;

  let coinValue = 1;

  for (let denomination of Denominations) {
    if (value >= coinValue) {
      let count = Math.floor(value / coinValue);
      coins.push(`${count} ${denomination}`);
      value -= count * coinValue;
      roundedValue += count * coinValue;
    }

    coinValue /= 10;
  }

  return { name: coins.join(", "), value: roundedValue };
}

function coinString(value) {
  return valueToCoins(value).name;
}

function randomInteger(minimum, maximum) {
  minimum = Math.floor(minimum);
  maximum = Math.floor(maximum);

  let range = maximum - minimum + 1;

  return minimum + Math.floor(Math.random() * range);
}

function randomIndex(array) {
  return randomInteger(0, array.length - 1);
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
  [ "art", function(item, parameters, options) {
    let artObjects = getArtObjects(parameters.group).items.filter((o) => bulkWithinLimit(o.bulk, options.bulkLimit));
    let artObject = randomElement(artObjects);

    let result = cloneItem(item);
    result.name = artObject.name;
    result.bulk = artObject.bulk;

    let multiplier = randomInteger(1, 4);
    result.value = coinString(valueToGP(parameters.baseValue) * multiplier);
    result.allowRepeats = true;

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

    let multiplier = randomInteger(1, 4);
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

function itemMatchesOptions(item, options) {
  if (options.bulkLimit && !bulkWithinLimit(item.bulk, options.bulkLimit)) {
    return false;
  }

  if (options.levelLimit && !levelWithinLimit(item.level, options.levelLimit)) {
    return false;
  }

  if (options.exactLevel && item.level != options.exactLevel) {
    return false;
  }

  return true;
}

const CoinsURL = "Rules.aspx?ID=182";

function createCurrencyItem(gpValue) {
  let { name, value } = valueToCoins(gpValue);

  if (name.length > 0) {
    return {
      name,
      value: gpString(value),
      bulk: "",
      level: "",
      rarity: "",
      url: CoinsURL
    };
  } else {
    return null;
  }
}

function selectItems(collections, options) {
  let candidates = [];

  for (let collection of collections) {
    for (let item of collection) {
      if (itemMatchesOptions(item, options)) {
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

  return result.length > 0 ? result : null;
}

function getOptions() {
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

  return options;
}

function generate() {
  if (document.getElementById("modeByLevel").checked) {
    generateByLevel();
  } else if (document.getElementById("modeCustom").checked) {
    generateCustom();
  }
}

function generateByLevel() {
  let preset = getSelectedPreset();
  let remainingValue = preset.totalValue - preset.currency;

  let items = [];

  let itemCount = preset.items.reduce((sum, itemPreset) => sum + itemPreset.count, 0);

  for (let itemPreset of preset.items) {
    let options = {
      itemLimit: itemPreset.count,
      valueLimit: remainingValue,
      bulkLimit: "",
      exactLevel: itemPreset.level,
    };

    let collections = [];

    for (let entry of Collections) {
      if (itemPreset.tags.every(tag => entry[1].tags.includes(tag))) {
        collections.push(getCollection(entry[0]).items);
      }
    }

    let result = selectItems(collections, options);

    if (result) {
      for (let j = 0; j < itemPreset.count && j < result.length; ++j) {
        items.push(result[j]);
        remainingValue -= valueToGP(result[j].value);
      }
    }
  }

  let currencyItem = createCurrencyItem(remainingValue + preset.currency);

  if (currencyItem) {
    items.push(currencyItem);
  }

  displayItems(items);
}

function generateCustom() {
  let options = getOptions();
  let collections = options.collections.map((name) => getCollection(name).items);

  let items = selectItems(collections, options);

  if (items) {
    let currentValue = items.reduce((total, item) => total + valueToGP(item.value), 0);

    if (currentValue < options.valueLimit) {
      let item = createCurrencyItem(Math.random() * (options.valueLimit - currentValue));

      if (item) {
        items.push(item);
      }
    }

    displayItems(items);
  }
}

function displayItems(items) {
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

function updateQueryLink() {
  let options = getOptions();

  let queryLink = document.getElementById("queryLink");
  queryLink.text = "Link to these settings";

  let searchParams = new URLSearchParams(options);
  queryLink.href = `${document.location.pathname}?${searchParams}`;
}

function updateTaggedCollections(tag, enable) {
  for (let entry of Collections.entries()) {
    if (entry[1].tags.includes(tag)) {
      let checkbox = document.getElementById(`${entry[0]}Enable`);
      checkbox.checked = enable;
    }
  }

  updateQueryLink();
}

function createCollectionControls() {
  let itemTypes = document.getElementById("itemTypes");

  let tags = new Set();

  for (let entry of Collections.entries()) {
    for (let tag of entry[1].tags) {
      tags.add(tag);
    }

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

  let itemTags = document.getElementById("itemTags");

  for (let tag of tags.values()) {
    let div = document.createElement("div");

    let id = `tag${tag}`;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("id", id);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("checked", true);
    checkbox.addEventListener("input", (event) => { updateTaggedCollections(tag, checkbox.checked); });

    div.append(checkbox);

    let label = createElement("label", tag);
    label.setAttribute("for", id);

    div.append(label);

    itemTags.append(div);
  }
}

function ordinal(number) {
  let digits = Math.floor(number) % 100;

  if (4 <= digits && digits <= 20) {
    return number + "th";
  }

  let ones = digits % 10;

  if (ones == 1) {
    return number + "st";
  } else if (ones == 2) {
    return number + "nd";
  } else if (ones == 3) {
    return number + "rd";
  } else {
    return number + "th";
  }
}

function getSelectedPreset() {
  let level = document.getElementById("partyLevel").value;
  return getPresetByLevel(+level);
}

function showLevelPreset() {
  let preset = getSelectedPreset();

  let text = `Total value ${preset.totalValue}; currency ${preset.currency}`;

  for (let item of preset.items) {
    text += `; ${ordinal(item.level)} level (${item.tags.join(', ')}) x${item.count}`;
  }

  document.getElementById("presetDisplay").innerText = text;
}

const ControlIDs = [
  "itemLimit",
  "valueLimit",
  "bulkLimit",
  "levelLimit",
]

const Modes = [
  "ByLevel",
  "Custom",
];

function setControlMode(activeMode) {
  document.getElementById(`mode${activeMode}`).checked = true;

  for (let mode of Modes) {
    document.getElementById(`controls${mode}`).style.display = (mode == activeMode) ? "" : "none";
  }
}

function initialiseControls() {
  createCollectionControls();

  let searchParams = new URLSearchParams(document.location.search);

  for (let id of ControlIDs) {
    let element = document.getElementById(id);
    element.addEventListener("input", updateQueryLink);

    if (searchParams.has(id)) {
      element.value = searchParams.get(id);
    }
  }

  for (let mode of Modes) {
    document.getElementById(`mode${mode}`).addEventListener("click", (event) => { setControlMode(mode); });
  }

  document.getElementById("partyLevel").addEventListener("input", (event) => { showLevelPreset(); });

  if (searchParams.has("collections")) {
    let collections = searchParams.get("collections").split(",");

    for (let name of Collections.keys()) {
      let element = document.getElementById(`${name}Enable`);
      element.addEventListener("input", updateQueryLink);
      element.checked = collections.includes(name);
    }
  }

  updateQueryLink();
  setControlMode("Custom");
  showLevelPreset();

  document.getElementById("generate").addEventListener("click", generate);
}

initialiseControls();
