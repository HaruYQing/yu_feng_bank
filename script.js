// 註冊 Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);

        // // 版本更新檢測
        // registration.addEventListener("updatefound", () => {
        //   console.log("新版本可用，建議重新載入頁面");
        //   // 可以顯示提示要求用戶重新載入
        //   if (confirm("發現新版本，是否要重新載入頁面？")) {
        //     window.location.reload();
        //   }
        // });
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
