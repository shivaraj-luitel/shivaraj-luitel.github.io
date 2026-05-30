# 🧠 js/main.js
```javascript
console.log("Portfolio Loaded Successfully");

// Smooth scroll enhancement
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});
