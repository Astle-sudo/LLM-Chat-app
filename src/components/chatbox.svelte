<script>
    export let content;
    export let user;
</script>

<div id="container" style="align-items: {user};">
    <div id="inner"style="{
        user === 'start' ? 'background-color: rgb(255,255,255); color: rgb(31,31,31);' :
        'background-color: rgb(71,71,71); color: rgb(250,250,250);'
    }">
        <p>{content}</p>
    </div>
</div>

<style>
    #container {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: inherit;
        margin-top: 1%;
    }
    #inner {
        width: fit-content;
        padding: 1%;
        border-radius: 10px;
        font-size: small;
        font-weight: bold;
        max-width: 100%;
    }
    p {
        text-align: left;
    }
</style>