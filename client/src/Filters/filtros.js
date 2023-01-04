export const types = (type, array) => {
  if (array.length) return array.filter((p) => p.type.includes(type));
  return [];
};

export const ordered = (order, array) => {
  let names = array.map((o) => o.name);
  let fuerza = array.map((o) => o.fuerza);
  let set = [];

  switch (order) {
    case "a-z":
      names = names.sort();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) set.push(po);
        });
      });
      return set;
    case "z-a":
      names = names.sort().reverse();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) set.push(po);
        });
      });
      return set;
    case "fuerza+":
      fuerza = fuerza.sort((a, b) => b - a);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) set.push(p);
        });
      });
      set = set.filter((e, i) => set.indexOf(e) === i);
      return set;
    case "fuerza-":
      fuerza = fuerza.sort((a, b) => a - b);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) set.push(p);
        });
      });
      set = set.filter((e, i) => set.indexOf(e) === i);
      return set;
    default:
      return array;
  }
};
