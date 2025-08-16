function previewPDF(path) {
  document.getElementById("pdfViewer").src = path;
  document.getElementById("pdfModal").style.display = "block";
}
function closeModal() {
  document.getElementById("pdfModal").style.display = "none";
}
document.getElementById('searchInput').addEventListener('input', function() {
  let query = this.value.toLowerCase();
  let items = document.querySelectorAll('.accordion-item ul li');
  items.forEach(li => {
    if (li.innerText.toLowerCase().includes(query)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});
document.getElementById('categoryFilter').addEventListener('change', function() {
  let category = this.value;
  let items = document.querySelectorAll('.accordion-item');
  items.forEach(div => {
    if (category === "all" || div.dataset.category === category) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  });
});
function printCategory() {
  window.print();
}
