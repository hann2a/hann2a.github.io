const COPY_TEXT_CHANGE_OFFSET = 1000;
const COPY_BUTTON_TEXT_BEFORE = 'Copy';
const COPY_BUTTON_TEXT_AFTER = 'Copied';
const COPY_ERROR_MESSAGE = '코드를 복사할 수 없습니다. 다시 시도해 주세요.';

const copyBlockCode = async (target = null) => {
 if (!target) return;
 try {
   const code = decodeURI(target.dataset.code);
   
   await navigator.clipboard.writeText(code);
   target.textContent = COPY_BUTTON_TEXT_AFTER;
   setTimeout(() => {
     target.textContent = COPY_BUTTON_TEXT_BEFORE;
   }, COPY_TEXT_CHANGE_OFFSET);
 } catch(error) {
   alert(COPY_ERROR_MESSAGE);
   console.error(error);
 }
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
 const codeBlocks = document.querySelectorAll('pre > code');
 
 for (const codeBlock of codeBlocks) {
   const preElement = codeBlock.parentElement;
   
   // 원본 코드 텍스트 저장
   const originalCode = codeBlock.textContent;
   
   // 코드를 줄별로 분리
   const lines = originalCode.split('\n');
   const processedCodes = lines.map(line => 
     `<div class="line">${line || ' '}</div>`
   ).join('');
   
   // 헤더에 들어갈 복사 버튼 생성 (기존 copy-btn 대신 header-copy-btn 사용)
   const headerCopyButton = `<button type="button" class="header-copy-btn" 
     data-code="${encodeURI(originalCode)}" 
     onclick="copyBlockCode(this)">${COPY_BUTTON_TEXT_BEFORE}</button>`;
   
   // 새로운 구조 생성
   const codeBody = `<div class="code-body">${processedCodes}</div>`;
   const codeHeader = `
     <div class="code-header">
       ${headerCopyButton}
     </div>`;
   
   // pre 요소에 hljs 클래스 추가
   preElement.classList.add('hljs');
   
   // 기존 code 요소를 새로운 구조로 교체
   codeBlock.innerHTML = codeHeader + codeBody;
 }
});