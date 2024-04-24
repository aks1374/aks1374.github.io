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
    const symbolSelect=document.getElementById('market_symbolSelect');
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
                const symbolSelect=document.getElementById('trade_symbolSelect');
                const leverageSelect=document.getElementById('leverageSelect');
                const usdtInput=document.getElementById('trade_usdtInput');
                const lossInput=document.getElementById('tsl_usdtInput');
                const profitInput=document.getElementById('ttp_usdtInput');
                const symbol=symbolSelect.value;
                const leverage=leverageSelect.value;
                const usdtAmount=usdtInput.value;
                const sl=lossInput.value;
                const tp=profitInput.value;
                const data= {
                    symbol: symbol,
                    leverage: leverage,
                    usdtAmount: usdtAmount,
                    sl: sl,
                    tp: tp,
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
                const symbolSelect=document.getElementById('sl_symbolSelect');
                const usdtInput=document.getElementById('sl_usdtInput');
                const priceInput=document.getElementById('sl_priceInput');
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
                const symbol=symbolSelect.value;
                const desired_profit=usdtInput.value;
                const tp_price=priceInput.value;
                const data= {
                    symbol: symbol,
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
                const symbolSelect=document.getElementById('oov_symbolSelect');
                const symbol=symbolSelect.value;
                const data= {
                    symbol: symbol,
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
                const symbolSelect=document.getElementById('ooc_symbolSelect');
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
                const symbolSelect=document.getElementById('tqc_symbolSelect');
                const symbol=symbolSelect.value;
                const data= {
                    symbol: symbol,
                }
                ;
                sendRequest('/cancel_queue_order', cipher, data);
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
                const symbolSelect=document.getElementById('pc_symbolSelect');
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

