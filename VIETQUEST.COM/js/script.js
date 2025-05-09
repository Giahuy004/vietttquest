
  function renderCards(topic) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
  
    if (!signs[topic] || signs[topic].length === 0) {
      container.innerHTML = "<p>Không có dữ liệu cho chủ đề này.</p>";
      return;
    }
  
    signs[topic].forEach((sign) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p style="font-size: 1.2rem; font-weight: bold;">${sign.word}</p>
      `;
      container.appendChild(card);
    });
  }
  
  function changeTopic(topic) {
    const topicName =
      {
        greetings: "Miền Nam ",
        numbers: "Miền Bắc",
        colors: "Miền Trung",
        feelings: " Chơi cả 3 miền ",
      }[topic] || "Chủ đề";
  
    document.getElementById("topic-title").innerText = topicName;
    renderCards(topic);
  }
  
  renderCards("greetings");
  function handleLogin() {
    const user = { name: "Nguyễn Văn A" };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const settingsBtn = document.getElementById("settingsToggle");
    const settingsMenu = document.getElementById("settingsMenu");
  
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // tránh đóng ngay khi mở
      settingsMenu.classList.toggle("show");
    });
  
    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsMenu.classList.remove("show");
      }
    });
    
    // Ngôn ngữ
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = localStorage.getItem("lang") || "vi";
      langSelect.addEventListener("change", (e) => {
        localStorage.setItem("lang", e.target.value);
        location.reload();
      });
    }
  
    // Đăng xuất
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
          localStorage.removeItem("user");
          location.href = "login.html";
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const settingsBtn = document.getElementById("settingsToggle");
    const settingsMenu = document.getElementById("settingsMenu");
  
    settingsBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      settingsMenu.classList.toggle("show");
    });
  
    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
        settingsMenu.classList.remove("show");
      }
    });
  
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.value = localStorage.getItem("lang") || "vi";
      langSelect.addEventListener("change", (e) => {
        localStorage.setItem("lang", e.target.value);
        location.reload();
      });
    }
  
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn đăng xuất?")) {
        localStorage.removeItem("user");
        location.href = "login.html";
      }
    });
  });
  // Lắng nghe sự kiện khi nhấn nút "Bấm để tạo"
document.getElementById("createBtn").addEventListener("click", function () {
  // Ẩn phần nội dung ban đầu
  document.getElementById("initialCard").style.display = "none";
  
  // Hiển thị phần đang tạo câu hỏi
  document.getElementById("createContent").style.display = "block";
});

// Hàm để bắt đầu trò chơi khi người dùng nhấn "Bắt đầu trò chơi"
function startGame() {
  // Điều hướng đến trang trò chơi (game.html)
  window.location.href = "game.html";  // Thay "game.html" bằng trang bạn muốn chuyển tới
}

  