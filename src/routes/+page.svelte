<script>
    import Chatbox from "../components/chatbox.svelte";
    import { enhance } from '$app/forms';
    export let form;

    let input;
    let chatContainer;

    function addChat (text, user) {
        let chat = new Chatbox ({
            target: chatContainer,
            props: {
                content: text,
                user: user
            }
        })
    }

    function Submit () {
        addChat(input.value, 'start');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    $: {
        if (form?.response && form.response.content != '') {
            addChat(form?.response.content, 'end');
            form.response.content = ''
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
</script>

<h1>
    Mistral-7b / Phi 2
</h1>


<div bind:this={chatContainer} id="chat-container"></div>


<form method="POST" on:submit={Submit} use:enhance>
    <input bind:this={input} type="text" name="prompt" autocomplete="off" disabled placeholder="Server Disconnected">
</form>

<style>
    :global(body) {
        background-color: rgb(51, 51, 51);
    }

    #chat-container {
        position: absolute;
        margin-left: 25%;
        height: 80%;
        width: 50%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    input {
        margin-top: 50%;
        margin-left: 25%;
        width: 50%;
        height: 35px;
        border-radius: 10px;
        font-size: medium;
        background-color: rgb(71, 71, 71);
        border: 1px solid black;
        color: white;
        padding-left: 1%;
    }

    input:focus {
        outline: none;
    }

    h1 {
        color: white;
        text-align: center;
        font-weight: bold;
    }

</style>
