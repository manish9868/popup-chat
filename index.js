    var chatbotHtml = `
        <style>

        #getInTouchButton {
            position: absolute;
            right: 0;
            bottom: 0;
            margin: 0px 10px 5px 0px;
            display: block;
            width: 200px;
            height: 30px;
            background-color: lightskyblue;
            color: black;
            border: 0;
            border-radius: 10px;
        }

        .crm-modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
        }

        .crm-modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        </style>

        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Page Title</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>

        <div id="getInTouchOpenModal" class="crm-modal">
        <div class="crm-modal-content">
            <span class="close">&times;</span>
            <p>This is the content of the modal</p>
        </div>
    </div>
    <button type="button" id="getInTouchButton">Get In Touch</button>
    `

    var bodyHTML = document.body.innerHTML
    bodyHTML = bodyHTML + chatbotHtml
    document.body.innerHTML = bodyHTML


    const openModalButton = document.getElementById('getInTouchButton');
    const modal = document.getElementById('getInTouchOpenModal');
    const close = document.getElementsByClassName("close")[0];

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    })
