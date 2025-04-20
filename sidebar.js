const isInChapterDir = window.location.pathname.includes("/MT_CHAPTER/");
const prefix = isInChapterDir ? "" : "MT_CHAPTER/";

const sidebarHTML = `
<!-- trigger -->
<button class="trigger" id="menuTrigger" onclick="toggleMenu()">
  <span></span><span></span><span></span>
</button>

<!-- sidebar -->
<div class="sidebar" id="sidebar">
  <a onclick="openOverlay('chapters')">章节选择</a>
  <a onclick="openOverlay('about')">关于我们</a>
  <a href="/index.html">返回首页</a>
</div>

<!-- sidebar submenu -->
<div class="overlay" id="overlay">

  <div id="chapters" class="content hidden">
    <h3>章节选择</h3>

    <div class="section">
      <strong onclick="toggleGroup('mt')">母亲的情人</strong>
      <a href="${prefix}mt_intro1.html">简介</a>
      <div id="mt" class="hidden">

        <strong onclick="toggleGroup('mt1_10')">1-10章</strong>
        <div id="mt1_10" class="hidden">
          <a href="${prefix}mt_intro2.html">引子</a>
          <a href="${prefix}mt1.html">第1章</a>
          <a href="${prefix}mt2.html">第2章</a>
          <a href="${prefix}mt3.html">第3章</a>
          <a href="${prefix}mt4.html">第4章</a>
          <a href="${prefix}mt5.html">第5章</a>
          <a href="${prefix}mt6.html">第6章</a>
          <a href="${prefix}mt7.html">第7章</a>
          <a href="${prefix}mt8.html">第8章</a>
          <a href="${prefix}mt9.html">第9章</a>
          <a href="${prefix}mt10.html">第10章</a>
        </div>

        <strong onclick="toggleGroup('mt11_20')">11-20章</strong>
        <div id="mt11_20" class="hidden">
          <a href="${prefix}mt11.html">第11章</a>
          <a href="${prefix}mt12.html">第12章</a>
          <a href="${prefix}mt13.html">第13章</a>
          <a href="${prefix}mt14.html">第14章</a>
          <a href="${prefix}mt15.html">第15章</a>
          <a href="${prefix}mt16.html">第16章</a>
          <a href="${prefix}mt17.html">第17章</a>
          <a href="${prefix}mt18.html">第18章</a>
          <a href="${prefix}mt19.html">第19章</a>
          <a href="${prefix}mt20.html">第20章</a>
        </div>

        <strong onclick="toggleGroup('mt21_30')">后记</strong>
        <div id="mt21_30" class="hidden">
          <a href="${prefix}mt21.html">后记1（高H）</a>
          <a href="${prefix}mt22.html">后记2（高H）</a>
          <a href="${prefix}mt23.html">后记3（高H）</a>
          <a href="${prefix}mt24.html">IF 1</a>
          <a href="${prefix}mt25.html">IF 2（微H）</a>
        </div>

      </div>
    </div>
    <br>

    <div class="section">
      <strong onclick="toggleGroup('dw')">一个画家房客闯入我的农场生活(施工中）</strong>
      <a href="#">简介</a>
      <div id="dw" class="hidden">
        <strong onclick="toggleGroup('dw1_10')">1-10章</strong>
        <div id="dw1_10" class="hidden">
          <a href="${prefix}dw1.html">第1章</a>
          <a href="${prefix}dw2.html">第2章</a>
          <a href="${prefix}dw3.html">第3章</a>
          <a href="${prefix}dw4.html">第4章</a>
          <a href="${prefix}dw5.html">第5章</a>
          <a href="${prefix}dw6.html">第6章</a>
          <a href="${prefix}dw7.html">第7章</a>
          <a href="${prefix}dw8.html">第8章</a>
          <a href="${prefix}dw9.html">第9章</a>
          <a href="${prefix}dw10.html">第10章</a>
        </div>


        <strong onclick="toggleGroup('dw11_20')">11-20章</strong>
        <div id="dw11_20" class="hidden">
          <a href="${prefix}dw11.html">第11章</a>
          <a href="${prefix}dw12.html">第12章</a>
          <a href="${prefix}dw13.html">第13章</a>
          <a href="${prefix}dw14.html">第14章</a>
          <a href="${prefix}dw15.html">第15章</a>
          <a href="${prefix}dw16.html">第16章</a>
          <a href="${prefix}dw17.html">第17章</a>
          <a href="${prefix}dw18.html">第18章</a>
          <a href="${prefix}dw19.html">第19章</a>
          <a href="${prefix}dw20.html">第20章</a>
        </div>


      </div>
    </div>

    <br>
    
    <div class="section">
      <strong onclick="toggleGroup('novel3')">三人关系（施工中）</strong>
      <a href="#">简介</a>
      <div id="novel3" class="hidden">
        <strong onclick="toggleGroup('novel3-1')">1-10章</strong>
        <div id="novel3-1" class="hidden">
          <a href="#">第1章</a><a href="#">第2章</a>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="content hidden">
    <h3>关于我们</h3>
    <p>邮箱：<br>
      <a href="mailto:archivexxoo@gmail.com" style="color: aqua;">skinarchivexxoo@gmail.com</a></p>
    <p>源代码GitHub：<br>
      <a href="https://github.com/Oliver-XXOObest/skinarchive" target="_blank" style="color: aqua;">skinarchive GitHub</a></p>
    <p>Discord群组：<br>
      <a href="https://discord.gg/ESmPzp4kyB" target="_blank" style="color: aqua;">discord.gg/ESmPzp4kyB</a></p>
  </div>
</div>
`;

document.getElementById("sidebar-container").innerHTML = sidebarHTML;

let sidebarOpen = false;
let overlayOpen = false;

function toggleMenu() {
  const overlay = document.getElementById("overlay");
  if (overlayOpen) {
    closeOverlay();
  } else {
    sidebarOpen = !sidebarOpen;
    document.getElementById("sidebar").style.left = sidebarOpen ? "0" : "-260px";
    document.getElementById("cover").style.transform = sidebarOpen ? "translateX(240px)" : "none";
    document.getElementById("menuTrigger").style.transform = sidebarOpen ? "translateX(240px)" : "none";
  }
}

function openOverlay(sectionId) {
  const overlay = document.getElementById("overlay");
  overlayOpen = true;
  overlay.classList.remove("hide");
  overlay.classList.add("show");
  document.querySelectorAll(".overlay .content").forEach(div => div.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
  document.getElementById("menuTrigger").style.transform = "translateX(640px)";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlayOpen = false;
  overlay.classList.remove("show");
  overlay.classList.add("hide");
  document.getElementById("menuTrigger").style.transform = "translateX(240px)";
}

function toggleGroup(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}
