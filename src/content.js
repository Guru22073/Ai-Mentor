function main() {
  console.log("AI MENTOR: Content script initiated on " + window.location.hostname);

  let containerSelector;
  let siteName;

  if (window.location.hostname.includes('leetcode.com')) {
    siteName = 'LeetCode';
    containerSelector = 'div[data-track-load="description_content"]'; 
  } else if (window.location.hostname.includes('hackerrank.com')) {
    siteName = 'HackerRank';
    containerSelector = 'div.challenge_problem_statement'; 
  } else if (window.location.hostname.includes('codeforces.com')) {
    siteName = 'Codeforces';
    containerSelector = 'div.problem-statement'; 
  } else {
    console.error("AI MENTOR: Unsupported site.");
    sendErrorPayload();
    return;
  }

  let attempts = 0;
  const maxAttempts = 100; 

  const intervalId = setInterval(() => {
    const container = document.querySelector(containerSelector);

    if (container) {
      const textElements = container.querySelectorAll('p, li, pre, code, div.header, div.input-specification, div.output-specification');
      let fullText = `${siteName} Problem:\n\n`;

      textElements.forEach(el => {
        let text = el.innerText.trim();
        if (text) {
          if (el.tagName === 'PRE' || el.tagName === 'CODE') {
            fullText += `Code Block:\n${text}\n\n`;
          } else {
            fullText += `${text}\n\n`;
          }
        }
      });

      if (fullText.length > 50) {
        clearInterval(intervalId);
        console.log(`%cAI MENTOR: SUCCESS on ${siteName}! Found and constructed text.`, "color: green; font-weight: bold;");
        chrome.runtime.sendMessage({
          type: 'PROBLEM_SCRAPED',
          payload: { problemText: fullText.trim() },
        });
        return;
      }
    }

    attempts++;
    if (attempts >= maxAttempts) {
      clearInterval(intervalId);
      console.error(`%cAI MENTOR: FAILED on ${siteName}. Timed out trying to find container with selector: "${containerSelector}".`, "color: red; font-weight: bold;");
      sendErrorPayload();
    }
  }, 100);
}

function sendErrorPayload() {
  chrome.runtime.sendMessage({
    type: 'PROBLEM_SCRAPED',
    payload: { problemText: 'Could not find problem text on this page.' },
  });
}

main();
