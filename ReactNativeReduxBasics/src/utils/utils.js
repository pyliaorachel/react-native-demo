import _ from 'lodash';


export function subtractObjects(src, toSubtract) {
  const srcCopy = Object.assign({}, src);

  function customizer(a, b) {
    if (_.isNumber(a)) {
      return (a >= b) ? (a - b) : 0;
    }
  }
   
  return _.mergeWith(srcCopy, toSubtract, customizer);
}

export function addObjects(src, toAdd) {
  const srcCopy = Object.assign({}, src);
  
  function customizer(a, b) {
    if (_.isNumber(a)) {
      return a + b;
    }
  }
    
  return _.mergeWith(srcCopy, toAdd, customizer);
}