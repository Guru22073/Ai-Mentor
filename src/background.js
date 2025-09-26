const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${GEMINI_API_KEY}`;


/**
 * Makes a contextual API call to the Google Gemini API.
 * @param {string} problemText The original coding problem.
 * @param {string} question The user's specific question about the problem.
 * @returns {Promise<string>} The AI-generated assistance text.
 */
async function getAIAssistance(problemText, question) {
  const prompt = `You are an expert AI coding mentor.
  The user is working on the following coding problem:
  --- PROBLEM START ---
  ${problemText}
  --- PROBLEM END ---

  The user has this specific question: "${question}"

  Your task is to answer the user's question in the context of the overall problem. Provide clear, concise help. If the user asks for the code, gently refuse and instead provide the logic, algorithm, or concept they need to write the code themselves. Guide them to the solution, don't just give it away.`;

  try {
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) throw new Error(`API request failed with status: ${response.status}`);
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "An error occurred while getting assistance. Please check the extension's console for details.";
  }
}

chrome.action.onClicked.addListener(async (tab) => {
  const result = await chrome.storage.local.get(['isLocked']);
  
  if (result.isLocked) {
    await chrome.windows.create({
      url: chrome.runtime.getURL(`index.html?detached=true&windowId=${Date.now()}`),
      type: 'popup',
      width: 600,
      height: 500,
      focused: true
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let keepChannelOpen = false;

  switch (request.type) {
    case 'PROBLEM_SCRAPED':
      chrome.storage.local.set({ currentProblem: request.payload.problemText });
      break;

    case 'GET_ASSISTANCE':
      keepChannelOpen = true;
      (async () => {
        const assistanceText = await getAIAssistance(request.payload.problemText, request.payload.question);
        chrome.runtime.sendMessage({
          type: 'ASSISTANCE_RECEIVED',
          payload: { text: assistanceText }
        });
      })();
      break;
  }
  return keepChannelOpen;
});

chrome.windows.onRemoved.addListener(async (windowId) => {
  const result = await chrome.storage.local.get(['isLocked']);
  if (result.isLocked) {
    await chrome.storage.local.set({ isLocked: false });
  }
});
