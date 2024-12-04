const now = new Date();

console.log(now);

console.log(typeof now);

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log('timestamp:',now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());