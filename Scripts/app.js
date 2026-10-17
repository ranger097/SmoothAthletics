const mainDiv = document.getElementById("main");
const searchInput = document.getElementById("search");
const FAQ = [
{ question: "Why buy a tshirt ?",
  answer: "because its cool" },
{ question: "are tshirts dope ?",
  answer: "yeah our tshirts are dope" },
{ question: "bro where you get that shirt",
  answer: "online type shit bro" },
{ question: "Why buy a tshirt ?",
  answer: "because its cool" },
{ question: "are tshirts dope ?",
  answer: "yeah our tshirts are dope" },
{ question: "bro where you get that shirt",
  answer: "online type shit bro" },
{ question: "Why buy a tshirt ?",
  answer: "because its cool" },
{ question: "are tshirts dope ?",
  answer: "yeah our tshirts are dope" },
{ question: "bro where you get that shirt",
  answer: "online type shit bro" }
];

function renderFAQ(items) {
mainDiv.innerHTML = items.map(item => `
<div class="faq_container">
<h3>${item.question}</h3>
<p>${item.answer}</p>
</div>
`).join(""); 
}

renderFAQ(FAQ);

searchInput.addEventListener("input", () => {
const term = searchInput.value.trim().toLowerCase();
const results = FAQ.filter( item => 
item.question.toLowerCase().includes(term) ||
item.answer.toLowerCase().includes(term)
);

renderFAQ(results);
});



