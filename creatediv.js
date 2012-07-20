function createDiv(txt, zahl)
{
  newDiv = document.createElement("div");
  newDiv.className = "ui-widget-content";
  newDiv.innerHTML = txt;
  newDiv.id = zahl;
  return newDiv;
}

function createEntry(oldtxt, newtxt, zahl)
{
  newEntry = oldtxt;
  newEntry += '<div id="' + zahl +'" class="categorizedEntry">';
  newEntry += newtxt;
  newEntry += '<button class="returnButton"></button></div>';
  return newEntry;
}

