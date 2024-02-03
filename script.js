function getCipher() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cipher');
}
function sendRequest(command, cipher, data) {
    const serverUrl='https://frank-epic-sponge.ngrok-free.app/bot-command';
    const cipher = getCipher();
    const payload= {
        command: command,
        cipher = cipher,
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
    const symbolSelect=document.getElementById('m_symbolSelect');
    const m_symbol=symbolSelect.value;
    const data= {
        m_symbol: m_symbol,
    }
    ;
    sendRequest('/market', data);
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
                sendRequest('/trade', data);
                usdtInput.value='';
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
                const symbolSelect=document.getElementById('sl_symbolSelect');
                const usdtInput=document.getElementById('sl_usdtInput');
                const sl_symbol=symbolSelect.value;
                const desired_loss=usdtInput.value;
                const data= {
                    sl_symbol: sl_symbol,
                    desired_loss: desired_loss
                }
                ;
                sendRequest('/sl', data);
                sl_usdtInput.value='';
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
                const symbolSelect=document.getElementById('tp_symbolSelect');
                const usdtInput=document.getElementById('tp_usdtInput');
                const tp_symbol=symbolSelect.value;
                const desired_profit=usdtInput.value;
                const data= {
                    tp_symbol: tp_symbol,
                    desired_profit: desired_profit
                }
                ;
                sendRequest('/tp', data);
                tp_usdtInput.value='';
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
                const symbolSelect=document.getElementById('ct_symbolSelect');
                const ct_symbol=symbolSelect.value;
                const data= {
                    ct_symbol: ct_symbol,
                }
                ;
                sendRequest('/cancel_queue_order', data);
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
                const symbolSelect=document.getElementById('c_symbolSelect');
                const c_symbol=symbolSelect.value;
                const data= {
                    c_symbol: c_symbol,
                }
                ;
                sendRequest('/cancel_orders', data);
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
                const symbolSelect=document.getElementById('close_symbolSelect');
                const close_symbol=symbolSelect.value;
                const data= {
                    close_symbol: close_symbol,
                }
                ;
                sendRequest('/close', data);
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}
function sendCheck() {
    sendRequest('/check', {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendList() {
    sendRequest('/list', {}
    );
    Swal.fire('Sent!', 'Your data has been sent.', 'success');
}
function sendOp() {
    sendRequest('/open_positions', {}
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
                sendRequest('/cancel_all_orders', {}
                );
                Swal.fire('Sent!', 'Your data has been sent.', 'success');
            }
        }
    );
}

mainButton.onClick(function(){
    window.Telegram.WebApp.sendData('/restart');
})
