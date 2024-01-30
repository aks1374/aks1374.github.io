function getChatId() {
  // Retrieve the chat ID from the user input (e.g., input field, dropdown, etc.)
  const chatIdInput = document.getElementById('chatIdInput');
  return chatIdInput.value;
}
function sendRequest(command, data) {
  const serverUrl = 'https://frank-epic-sponge.ngrok-free.app/bot-command';
  const chatId = getChatId(); // Obtain the chat ID from the user input
  const payload = {
    command: command,
    chat_id: chatId, // Include the chat ID in the payload
    ...data
  };

  fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
function sendMarket() {
  const symbolSelect = document.getElementById('m_symbolSelect');
  const m_symbol = symbolSelect.value;
  const data = {
    m_symbol: m_symbol,
  };
  
  sendRequest('/market', data);
  Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
