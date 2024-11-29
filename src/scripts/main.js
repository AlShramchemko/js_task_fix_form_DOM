'use strict';

const divElement = document.getElementsByClassName('field');



for (let i = 0; i < divElement.length; i++){
  const labName = divElement[i].firstElementChild.getAttribute('name');

  let massLbName = labName.split('');
  massLbName[0] = massLbName[0].toUpperCase();
  const str = massLbName.join('');

  divElement[i].firstElementChild.setAttribute('placeholder', str);

  const lab = document.createElement("label");
  lab.innerHTML = labName.toUpperCase();
  lab.setAttribute('for',  labName);

  divElement[i].prepend(lab);
}
