// to access environment variables we need to import then from '$env/static/private';
// by default the environment variables only available on the server and not on the browser
import {DB_URI,DB_PASS} from '$env/static/private';
import { redirect } from "@sveltejs/kit";
import { secretKey } from '$lib/server/secrets';
import { privatekey } from '../../secrets.server';
export const load = ({cookies,url})=>{
    if(!cookies.get('username')){
        throw redirect(307,`/auth?redirectTo=${url.pathname}`)
    }
    const newsApiKey = 'my_api_key';

    console.log(DB_URI,DB_PASS)
    console.log({secretKey})
    console.log({privatekey})
    const news = [
        {id:1,title:"News 1"},
        {id:2,title:"News 2"},
        {id:3,title:"News 3"},
    ];
    return {
        news
    }
}