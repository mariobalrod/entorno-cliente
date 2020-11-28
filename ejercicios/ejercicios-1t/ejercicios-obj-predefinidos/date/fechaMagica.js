const Magic = str => {
  const [dd, mm, yyyy] = str.split(" ");
  const calc = String(dd * mm);
  return calc === yyyy.slice(-calc.length);
}