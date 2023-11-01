<script>
	import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    let loginbutton;
    const toggleNav=()=>{
         console.log('its working');
         let form = document.getElementById('loginform')
            if(form.className.includes('unhide')){
                form.classList.add('hide')
                form.classList.remove('unhide')
            }
            else{
                form.classList.add('unhide')
                form.classList.remove('hide')
               
            }
         console.log(form.classList)
    }
    const redirectTo = $page.url.searchParams.get('redirectTo') || '/'
    console.log(redirectTo)
</script>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/auth">Auth</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    <button type="button" on:click={toggleNav} >Login</button>
    <div id="loginform" class="hide">
        <form  action='/auth?/login&redirectTo={redirectTo}' method="POST" use:enhance>
      
            <input type="text" name="username" id="username" placeholder="Username" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <button type="submit" >Login</button>
            <button formaction="/auth?/register&redirectTo={redirectTo}" >Register</button>
            </form>
    </div>
</nav>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: cyan;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        z-index: 4;
    }
    ul{
        display: flex;
        gap: 3px;
        list-style-type: none;
        margin: 0px !important;
    }
    ul li{
        padding: 12px;
    }
    ul li a{
        text-decoration: none;
        font-weight: 900;
        color: #fff;
    }
    nav div{
        position: absolute;
        right: 0px;
        display: flex;
        flex-direction: column;
        top: 46px;
        padding: 12px;
        border: 1px solid lightgray;
        box-sizing: border-box;
        width: 20%;
        background-color: #fff;
        transition: all 700ms;
        border-top: none;
        z-index: 2;
  
    }
    nav div form{
        /* display: flex; */
        /* flex-direction: column; */
        box-sizing: border-box;
        
    }
    nav div form input{
              box-sizing: border-box;
              width: 100%;
    }
    nav div form input,button{
        margin: 6px 0px;
    }
    nav div form button{
        border: none;
        background-color: cyan;
        padding: 8px 12px;
        font-weight: 900;

    }
    form input{
        border: none;
        border-bottom: 1px solid lightgray;
        padding: 8px 12px;
        outline: none;
        transition: all 500ms;
    }
    form input:focus{
        border-bottom: 1px solid cyan;
    }
    .hide{
        transform: translateX(100%) !important;
    }
    .unhide{
        transform: translateX(0%) !important;
    }
    nav > button{
        border: none;
        padding: 8px 12px;
        font-weight: 900;
        background-color: transparent;
        color: #fff;
        outline: none;
        cursor: pointer;
    }
</style>