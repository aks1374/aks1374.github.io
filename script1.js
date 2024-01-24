function onTelegramAuth(user) {
  const chatId = user.id;

  // Call the sendRequest function with the chat ID included in the data payload
  sendRequest('/market', { m_symbol: symbolSelect.value, chat_id: chatId });

  // Display success message or perform further actions
  Swal.fire('Sent!', 'Your data has been sent.', 'success');
}

function sendRequest(command, data) {
  const serverUrl = 'https://frank-epic-sponge.ngrok-free.app/bot-command';
  const payload = {
    command: command,
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

const mainButton = window.Telegram.WebApp.MainButton;
mainButton.render({
  element: 'loginButtonContainer', // ID or class of the container element
  size: 'large',
  userpic: false,
  requestAccess: 'write',
  lang: 'en',
  dataOnauth: 'onTelegramAuth(user)'
});

function sendMarket() {
  // Your existing sendMarket function code without changes
  const symbolSelect = document.getElementById('m_symbolSelect');
  const m_symbol = symbolSelect.value;
  const data = {
    m_symbol: m_symbol,
  };

  // The chat ID will be sent automatically when the onTelegramAuth function is called
  // within the Telegram Web Login widget
  // Call sendRequest directly within the onTelegramAuth function
}
