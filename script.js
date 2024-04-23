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
    const symbolSelect=document.getElementById('symbolSelect');
    const symbol=symbolSelect.value;
    const data= {
        symbol: symbol,
        lan: "en"
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
                const lossInput=document.getElementById('desired_loss');
                const profitInput=document.getElementById('desired_profit');
                const symbol=symbolSelect.value;
                const leverage=leverageSelect.value;
                const usdtAmount=usdtInput.value;
                const desired_loss=lossInput.value;
                const desired_profit=profitInput.value;
                const data= {
                    symbol: symbol,
                    leverage: leverage,
                    usdtAmount: usdtAmount,
                    desired_loss: desired_loss,
                    desired_profit: desired_profit,
                    lan: "en"
                }
                ;
                sendRequest('/trade', cipher, data);
                usdtInput.value='';
                lossInput.value='';
                profitInput.value='';
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
                const symbolSelect=document.getElementById('symbolSelect');
                const usdtInput=document.getElementById('usdtInput');
                const priceInput=document.getElementById('priceInput');
                const symbol=symbolSelect.value;
                const desired_loss=usdtInput.value;
                const sl_price=priceInput.value;
                const data= {
                    symbol: symbol,
                    desired_loss_profit: desired_loss,
                    stop_price: sl_price,
                    type: 'STOP_MARKET'
                }
                ;
                sendRequest('stop-loss', cipher, data);
                usdtInput.value='';
                priceInput.value='';
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
                    stop_symbol: tp_symbol,
                    desired_loss_profit: desired_profit,
                    stop_price: tp_price,
                    type: 'TAKE_PROFIT_MARKET'
                }
                ;
                sendRequest('take-profit', cipher, data);
                usdtInput.value='';
                priceInput.value='';
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
function sendOpenorders() {
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
                const symbolSelect=document.getElementById('or_symbolSelect');
                const or_symbol=symbolSelect.value;
                const data= {
                    or_symbol: or_symbol,
                }
                ;
                sendRequest('/view_orders', cipher, data);
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
                const symbolSelect=document.getElementById('symbolSelect');
                const symbol=symbolSelect.value;
                const data= {
                    symbol: symbol,
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
                const symbolSelect=document.getElementById('symbolSelect');
                const symbol=symbolSelect.value;
                const data= {
                    symbol: symbol,
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

