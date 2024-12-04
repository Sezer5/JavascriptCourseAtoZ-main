const startDate = new Date('08/15/2018 9:45:00');
const now = new Date();

console.log(startDate);

const diff = now.getTime() - startDate.getTime();

console.log(diff);

const mins = Math.round(diff/1000/60);

console.log(`Video Çekmeye Başlanan Dakika Farkı ${mins}`);

const hours = Math.round(mins/60);

console.log(`Video Çekmeye Başlanan saat Farkı ${hours}`);

const days = Math.round(hours/24);

console.log(`Video Çekmeye Başlanan gün Farkı ${days}`);

const years = Math.round(days/365);

console.log(`Video Çekmeye Başlanan yıl Farkı ${years}`);

const timestamp = diff;

console.log(new Date(timestamp));
