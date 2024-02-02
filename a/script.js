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

function sendMarket() {
    const symbolSelect = document.getElementById('m_symbolSelect');
    const m_symbol = symbolSelect.value;

    const id = "as" + chat_id;

    const data = {
        m_symbol: m_symbol,
        id: id,
    };

    sendRequest('/market', data);
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
