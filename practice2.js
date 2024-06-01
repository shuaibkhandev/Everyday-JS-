const sentence = "JS Is My Favourite Proramming Langugae.";
const vowels = ["a", "e", "i", "o", "u"];

let total = 0;
sentence.split("").forEach((item) => {
  if (vowels.includes(item.toLowerCase())) {
    total++;
  }
});

console.log(total);
