// 🔑 EmailJS Initialization
(function(){
  emailjs.init("SIfFifYryfdZKm3fr"); //public Key 
})();

// 🟢 "test" و "live"
const MODE = "live";  // "test" للتجربة | "live" للتشغيل الحقيقي

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (MODE === "test") {
      // ✨ تجربة فقط بدون إرسال
      showPopup("✅ (TEST) Message box preview!", "success");
      form.reset();

    } else if (MODE === "live") {
      // ✉️ إرسال الرسالة الفعلية
      emailjs.sendForm("service_0xuns4s", "template_ttf4x7s", form)
        .then(function() {
          console.log("✅ Message sent to me!");
          emailjs.sendForm("service_0xuns4s", "template_jnf35th", form)
            .then(function() {
              showPopup("✅ Message sent successfully!", "success");
              form.reset();
            }, function(error) {
              showPopup("❌ Error sending auto-reply!", "error");
              console.error(error);
            });
        }, function(error) {
          showPopup("❌ Error sending to me!", "error");
          console.error(error);
        });
    }
  });
});

// 📦 البوكس 
function showPopup(message, type) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "popup-message " + type;
  document.body.appendChild(popup);

  setTimeout(() => popup.classList.add("show"), 100);
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}
// Flash message يختفي بعد 3 ثواني
setTimeout(() => {
  const flash = document.querySelector('.flash-message');
  if(flash) flash.style.display = 'none';
}, 3000);



window.addEventListener('load', () => {
  const text = "Welcome To My Website";
  const element = document.getElementById("welcomePopup");
  let i = 0;

  // امسح النص القديم قبل البدء
  element.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});

