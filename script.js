// 註冊 Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);

        // 版本更新檢測
        registration.addEventListener("updatefound", () => {
          console.log("新版本可用，建議重新載入頁面");
          // 可以顯示提示要求用戶重新載入
          if (confirm("發現新版本，是否要重新載入頁面？")) {
            window.location.reload();
          }
        });
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// 身分證字號遮罩效果
document.getElementById("presonalId").addEventListener("input", function () {
  let displayValue = "";
  for (let i = 0; i < this.value.length; i++) {
    displayValue += i < 6 ? this.value[i] : "•";
  }
  this.value = displayValue;
});

// 導航
function navigate(url) {
  window.location.assign(url);
}

// 圖片載入
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, _observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
});
