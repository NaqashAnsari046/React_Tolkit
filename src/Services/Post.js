import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath: 'postAPi', //reducer define krta h
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), //base url 
    endpoints: (builder) => ({
        //data read krny or fetch krny ky liye query use krty hn
        getAllPost : builder.query({
            query:()=>({
                url:'posts',
                method:'GET'  
            })
        }),
        // data get by id
        getAllPostById : builder.query({
            query:(id)=>({
                url:`posts/${id}`,
                method:'GET'  
            })
        }),

         // data get by limited
         getPostByLimint : builder.query({
            query:(num)=>({
                url:`posts/?_limit=${num}`,
                method:'GET'  
            })
        }),

        // data delete by id
        deletePostById : builder.mutation({
            query:(id)=>({
                url:`posts/${id}`,
                method:'DELETE'  
            })
        }),

        // data create by id
        createPost : builder.mutation({
            query:(newPost)=>({
                url:`posts`,
                method:'POST',
                body:newPost,
                headers:{
                    "Content-Type":"application/json"
                }  
            })
        }),
      }),
    })

    export const {useGetAllPostQuery, useGetAllPostByIdQuery, useGetPostByLimintQuery, useDeletePostByIdMutation, useCreatePostMutation} = postApi
   