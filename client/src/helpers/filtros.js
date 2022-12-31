export const tipos = (type, array) => {
  if (array.length) return array.filter((p) => p.type.includes(type));
  return [];
};

export const ordered = (order, array) => {
  let names = array.map((o) => o.name);
  let fuerza = array.map((o) => o.fuerza);
  let orde = [];

  switch (order) {
    case "a-z":
      names = names.sort();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "z-a":
      names = names.sort().reverse();
      names.forEach((p) => {
        array.forEach((po) => {
          if (p === po.name) orde.push(po);
        });
      });
      return orde;
    case "fuerza+":
      fuerza = fuerza.sort((a, b) => b - a);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    case "fuerza-":
      fuerza = fuerza.sort((a, b) => a - b);
      fuerza.forEach((f) => {
        array.forEach((p) => {
          if (p.fuerza === f) orde.push(p);
        });
      });
      orde = orde.filter((e, i) => orde.indexOf(e) === i);
      return orde;
    default:
      return array;
  }
};
