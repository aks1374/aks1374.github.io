function getChatId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
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

function sendMarket() {
    const symbolSelect = document.getElementById('m_symbolSelect');
    const m_symbol = symbolSelect.value;

    const chat_id = getChatId();

    if (chat_id) {
        const id = chat_id;

        const data = {
            m_symbol: m_symbol,
            id: id,
        };

        sendRequest('/market', data);
        Swal.fire('Sent!', 'Your data has been sent.', 'success');
    } else {
        console.error('ERROR');
    }
}
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "Save Preferences";
mainButton.enable();
mainButton.show();

mainButton.onClick(async function () {
    const symbolSelect = document.getElementById('m_symbolSelect');
    const m_symbol = symbolSelect.value;

    const chat_id = getChatId();

    if (chat_id) {
        const id = chat_id;

        const data = {
            m_symbol: m_symbol,
            id: id,
        };

        try {
            // Assuming sendRequest is an asynchronous function
            await sendRequest('/market', data);
            Swal.fire('Sent!', 'Your data has been sent.', 'success');
        } catch (error) {
            console.error('Error sending request:', error);
        } finally {
            // Close the window after the request is sent, regardless of success or failure
            window.Telegram.WebApp.close();
        }
    } else {
        console.error('ERROR');
    }
});

