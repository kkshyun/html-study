cal = [
  0,
  (a) => ((cal[0] += a), cal[5].push(cal[0])),
  (a) => ((cal[0] -= a), cal[5].push(cal[0])),
  (a) => ((cal[0] *= a), cal[5].push(cal[0])),
  (a) => ((cal[0] /= a), cal[5].push(cal[0])),
  [],
];
cal[1](4);
cal[2](1);
cal[3](10);
cal[4](2);
cal[1](4);
const [total] = cal;
console.log(cal[0] === total);
console.log(cal[0]);
console.log(cal[5]);
