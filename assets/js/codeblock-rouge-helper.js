document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("pre.highlight");

  blocks.forEach((block) => {
    // 코드 영역
    const code = block.querySelector("code");
    if (!code) return;

    // 줄별로 나누기
    const lines = code.innerHTML.split("\n");

    // 줄 번호 + 코드 감싸기
    const numberedLines = lines
      .map((line, idx) => {
        return `<div class="line" data-line="${idx + 1}">${line || " "}</div>`;
      })
      .join("");

    const codeBody = document.createElement("div");
    codeBody.className = "code-body";
    codeBody.innerHTML = numberedLines;

    // 복사 버튼 추가
    const header = document.createElement("div");
    header.className = "code-header";

    const button = document.createElement("button");
    button.className = "header-copy-btn";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      const textToCopy = lines.join("\n");
      navigator.clipboard.writeText(textToCopy);
      button.innerText = "Copied!";
      setTimeout(() => (button.innerText = "Copy"), 2000);
    });

    header.appendChild(button);

    // 기존 코드 제거 후 구조 삽입
    code.innerHTML = "";
    code.appendChild(header);
    code.appendChild(codeBody);
  });
});
