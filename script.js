function getCipher() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cipher');
}
function sendRequest(command, cipher, data) {
    const serverUrl='https://frank-epic-sponge.ngrok-free.app/bot-command';
    const payload= {
        command: command,
        cipher : cipher,
            ...data
    }
    ;
    fetch(serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
            ,
            body: JSON.stringify(payload),
        }
    ) .then(response=> response.json()) .then(data=> {
            console.log('Server Response:', data);
        }
    ) .catch(error=> {
            console.error('Error:', error);
        }
    );
}
function sendMarket() {
    const cipher = getCipher();
    const symbolSelect=document.getElementById('m_symbolSelect');
    const m_symbol=symbolSelect.value;
    const data= {
        m_symbol: m_symbol,
    }
    ;
    sendRequest('/market', cipher, data);
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendTrade() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('symbolSelect');
                const leverageSelect=document.getElementById('leverageSelect');
                const usdtInput=document.getElementById('usdtInput');
                const symbol=symbolSelect.value;
                const leverage=leverageSelect.value;
                const usdtAmount=usdtInput.value;
                const data= {
                    symbol: symbol,
                    leverage: leverage,
                    usdtAmount: usdtAmount
                }
                ;
                sendRequest('/trade', cipher, data);
                usdtInput.value='';
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendSlTp() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('sltp_symbolSelect');
                const usdtInput=document.getElementById('sl2_usdtInput');
                const priceInput=document.getElementById('sl_priceInput');
                const sl_symbol=symbolSelect.value;
                const desired_loss=usdtInput.value;
                const sl_price=priceInput.value;
                const data= {
                    sltp_symbolSelect: sltp_symbolSelect,
                    sl2_usdtInput: sl2_usdtInput,
                    tp2_usdtInput: tp2_usdtInput
                }
                ;
                sendRequest('/sl', cipher, data);
                sl2_usdtInput.value='';
                tp2_usdtInput.value='';
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendSl() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('sl_symbolSelect');
                const usdtInput=document.getElementById('sl_usdtInput');
                const priceInput=document.getElementById('sl_priceInput');
                const sl_symbol=symbolSelect.value;
                const desired_loss=usdtInput.value;
                const sl_price=priceInput.value;
                const data= {
                    sl_symbol: sl_symbol,
                    desired_loss: desired_loss,
                    sl_price: sl_price
                }
                ;
                sendRequest('/sl', cipher, data);
                sl_usdtInput.value='';
                sl_priceInput.value='';
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendTp() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('tp_symbolSelect');
                const usdtInput=document.getElementById('tp_usdtInput');
                const priceInput=document.getElementById('tp_priceInput');
                const tp_symbol=symbolSelect.value;
                const desired_profit=usdtInput.value;
                const tp_price=priceInput.value;
                const data= {
                    tp_symbol: tp_symbol,
                    desired_profit: desired_profit,
                    tp_price: tp_price
                }
                ;
                sendRequest('/tp', cipher, data);
                tp_usdtInput.value='';
                tp_priceInput.value='';
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendCanceltrade() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('ct_symbolSelect');
                const ct_symbol=symbolSelect.value;
                const data= {
                    ct_symbol: ct_symbol,
                }
                ;
                sendRequest('/cancel_queue_order', cipher, data);
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendCancelorders() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('c_symbolSelect');
                const c_symbol=symbolSelect.value;
                const data= {
                    c_symbol: c_symbol,
                }
                ;
                sendRequest('/cancel_orders', cipher, data);
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendClose() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                const symbolSelect=document.getElementById('close_symbolSelect');
                const close_symbol=symbolSelect.value;
                const data= {
                    close_symbol: close_symbol,
                }
                ;
                sendRequest('/close', cipher, data);
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendCheck() {
    const cipher = getCipher();
    sendRequest('/check', cipher, {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendList() {
    const cipher = getCipher();
    sendRequest('/list', cipher, {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendSlTpList() {
    const cipher = getCipher();
    sendRequest('/list_sltp', cipher, {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendOp() {
    const cipher = getCipher();
    sendRequest('/open_positions', cipher, {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendCancelall() {
    Swal.fire( {
            title: 'Confirmation',
            text: 'Are you sure you want to continue?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }
    ).then((result)=> {
            if (result.isConfirmed) {
                const cipher = getCipher();
                sendRequest('/cancel_all_orders', cipher, {}
                );
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
const mainButton = window.Telegram.WebApp.MainButton;
mainButton.text = "Close the App";
mainButton.enable();
mainButton.show();
mainButton.onClick(function () {
    window.Telegram.WebApp.close();
});

