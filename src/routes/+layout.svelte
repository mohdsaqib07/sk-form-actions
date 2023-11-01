<script>
	import Navbar from "../Components/Navbar.svelte";

    
</script>

<Navbar />
<div>
<slot />
</div>

<style>
    div{
        margin-top: 10vh;
    }
</style>