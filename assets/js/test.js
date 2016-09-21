// [
// {"id" : "abcd","val1" : 1,"val2": 1, "val3" : 0},
// {"id" : "abcd","val1" : 1,"val2": 1, "val3" : 1},
// {"id" : "efgh","val1" : 0,"val2": 0, "val3" : 1}
// ]

// var b = {}, arr = [];
// for (var id in a) {
//   var oa = a[id], ob = b[oa.id];
//   if (!ob) arr.push(ob = b[oa.id] = {}); 
//   for (var k in oa) ob[k] = k==='id' ? oa.id : (ob[k]||0)+oa[k];
// }
// console.log(arr)