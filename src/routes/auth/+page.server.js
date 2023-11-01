import { fail,redirect } from "@sveltejs/kit";

// export const load = () =>{}
// to use form actions we need to define a constant name actions

export const actions = {
    // this function receives the same arguments as the api endpoints
    // default: async ({request,cookies})=>{
    //     //   in form actions we need to use formData function instead of json to fetch the data
    //       const data = await request.formData();
    //       const username = data.get('username');
    //       const password = data.get('password');
    //       if(!username || !password){
    //         return {
    //             message:'Missing username or password'
    //         }
    //      }
    //      cookies.set('username',username,{path:'/'});
    //      return {
    //         message:"Logged in successfully"
    //      }

    // }
    // Instead of one default action, a page can have as many named actions as it needs:
    login: async ({request,cookies,url})=>{
        //   in form actions we need to use formData function instead of json to fetch the data
          const data = await request.formData();
          const username = data.get('username');
          const password = data.get('password');
          if(!username || !password){
            return fail(400,{
                username,
                message: 'Invalid username or password',
            })
         }
         cookies.set('username',username,{path:'/'});
         if(url.searchParams.has('redirectTo')){
          throw redirect(303, url.searchParams.get('redirectTo') || '/');
         }
         return {
            message:"Logged in successfully"
         }

    },
    register: async ({request,cookies})=>{
        //   in form actions we need to use formData function instead of json to fetch the data
          const data = await request.formData();
          const username = data.get('username');
          const password = data.get('password');
          if(!username || !password){
            return fail(400,{
                username,
                message:"Missing username or password"

            })
         }
         cookies.set('username',username,{path:'/'});
         return {
            message:"Registered successfully"
         }

    },
}