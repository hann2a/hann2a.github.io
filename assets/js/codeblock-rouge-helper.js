document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("pre.highlight");

  blocks.forEach((block) => {
    const code = block.querySelector("code");
    if (!code) return;

    // Rouge의 하이라이팅된 HTML을 줄 단위로 분리
    const rawLines = code.innerHTML.trim().split(/\n(?![^<]*>)/); // 정규식으로 태그 깨지지 않게 분리

    // 줄번호 span 붙이기 (하이라이팅 유지)
    const numberedHTML = rawLines
      .map((line, idx) => `<div class="line" data-line="${idx + 1}">${line || " "}</div>`)
      .join("");

    const codeBody = document.createElement("div");
    codeBody.className = "code-body";
    codeBody.innerHTML = numberedHTML;

    // 복사 버튼 생성
    const header = document.createElement("div");
    header.className = "code-header";

    const button = document.createElement("button");
    button.className = "header-copy-btn";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      const textToCopy = rawLines.join("\n");
      navigator.clipboard.writeText(textToCopy);
      button.innerText = "Copied!";
      setTimeout(() => (button.innerText = "Copy"), 2000);
    });

    header.appendChild(button);

    // 기존 code 안을 비우지 않고 통째로 감싸기
    const wrapper = document.createElement("div");
    wrapper.appendChild(header);
    wrapper.appendChild(codeBody);

    code.innerHTML = "";
    code.appendChild(wrapper);
  });
});
