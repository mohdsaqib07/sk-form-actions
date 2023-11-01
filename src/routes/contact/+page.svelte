<script>
    let name = ""
    let email = ""
    let message = ""
    // snapshot can be used to reserve the form state 
    export const snapshot = {
        capture: () => ({name,email,message}),
        restore: (data) => {
            name = data.name;
            email = data.email;
            message = data.message;
        }
    }
</script>

<h1>Contact Form</h1>

<div class="formcontainer">
    <form action="" method="post" class='contactform'>
    <input type="text" name="name" id="name" placeholder="Name" bind:value={name} />
    <input type="email" name="email" id="email" placeholder="Email" bind:value={email} />
    <textarea name="message" id="message" cols="30" rows="10" bind:value={message}></textarea>
    <div class='formcontrols'>
    <button type="submit">Send</button>
    <a href="/">Cancel</a>
</div>
    </form>
</div>

<style>

    .formcontainer{
        position: relative;
        width: 30%;
        margin: 0 auto;
        /* margin-top: 10vh; */
        display: flex;
        box-sizing: border-box;
        border: 1px solid #eee;
        padding: 12px;
        border-radius: 6px;
        /* background-color: rgb(250, 245, 245); */
    }
    .contactform{
        width: 100%;
        box-sizing: border-box;
    }
    .contactform input,textarea {
           width: 100%;
           box-sizing: border-box;
           outline: none;
           padding: 8px 12px;
           border: 1px solid lightgray;
           border-radius: 4px;
           
    }
    .contactform input,textarea{
        margin: 12px 0px;
    }
    .formcontrols{
        display: flex;
        gap: 8px;
    }
    .formcontrols button,a{
        border: none;
        padding: 8px 12px;
        background-color: cyan;
        font-weight: 900;
        color: #fff;
        text-decoration: none;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        /* font-size: 18px; */
        
    }
    .formcontrols a{
        font-size: 18px;
        font-weight: 900;
    }
</style>