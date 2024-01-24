function sendRequest(command, data) {
    const serverUrl = 'https://frank-epic-sponge.ngrok-free.app/bot-command';
    const payload = {
        command: command,
        data: data
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
    const chatId = tg.getChat().id;
    const symbolSelect = document.getElementById('m_symbolSelect');
    const m_symbol = symbolSelect.value;
    const data = {
        chatId: chatId,
        m_symbol: m_symbol,
    };

    sendRequest('/market', data);
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
