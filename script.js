// Initialize the Telegram object
Telegram.init({
    // Specify your bot username or deep linking parameters
    // based on your application's requirements
    bot_username: "zelyxa_bot",
    // ... Other options
});

// Listen for the 'tgWebAuth' event to retrieve the user's chat ID
window.addEventListener("tgWebAuth", function (e) {
    const chatId = e.detail.user_id;
    console.log("Chat ID:", chatId);
    sendMarket(chatId); // Call the sendMarket function with the chat ID
});

function sendRequest(command, data) {
    const serverUrl = "https://frank-epic-sponge.ngrok-free.app/bot-command";
    const payload = {
        command: command,
        ...data,
    };

    fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Server Response:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

function sendMarket(chatId) {
    const symbolSelect = document.getElementById("m_symbolSelect");
    const m_symbol = symbolSelect.value;
    const data = {
        chatId: chatId,
        m_symbol: m_symbol,
    };

    sendRequest("/market", data);
    Swal.fire("Sent!", "Your data has been sent.", "success");
}
