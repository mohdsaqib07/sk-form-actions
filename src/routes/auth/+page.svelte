<script>
    // this prop refers to the object which returns from the form actions in the +page.server.js file 
   export let form;
   import {page} from '$app/stores';
   const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div>
<form method="POST" action={`?/login&redirectTo=${redirectTo}`}>
<p>{form?.message || ""}</p>

<input type="text" name="username" id="username" placeholder="Username" value={form?.username ?? "" } />
<input type="password" name="password" id="password" placeholder="Password" />
<span>
<button type="submit">Login</button>
<!-- use formaction attribute to a buttons if you want to post a single form to multiple form actions  -->
<button formaction="?/register&redirectTo={redirectTo}">Register</button>
</span>
</form>
</div>


<style>
    div{
        display: flex;
        margin: 0 auto;
        margin-top: 10vh;
        border: 1px solid lightgray;
        padding: 12px;
        box-sizing: border-box;
        width: 50%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        position: relative;
        top: 10px;
    }
    div form{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 8px;
        box-sizing: border-box;
        
    }
    form input{
        box-sizing: border-box;
        width: 100% !important;
        padding: 6px;
        border-radius: 4px;
        border: 1px solid lightgray;
        outline: none;
    }
    form input:focus{
        outline: 1px solid aqua;
    }
    form button{
        width: 20%;
        border: none;
        background-color: aqua;
        color: #fff;
        font-weight: 900;
        padding: 6px 3px;
        border-radius: 4px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
        box-shadow: 1px 2px 3px #ccc;
    }
</style>