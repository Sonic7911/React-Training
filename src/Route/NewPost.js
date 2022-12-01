// import { Form } from "react-router-dom";
import { create } from "../Posts";
import { useFormik } from "formik";


// export async function submitPost(req){
//     const data = await req.request.formData();
//     const post = {
//         title: data.get('title'),
//         content : data.get('content')
//     }
//     await create(post);
//     alert('New Post Created Succcessfully!');

// }


export default function NewPost() {


    const formik=useFormik({
        initialValues:{
            title:'',
            content:''
        },
        onSubmit: async function (values)
        {
            await create(values);
            alert(values.title);
        }
        ,
        validate: function (values)
        {
            let errors = {}
            if(values.title==''){
                errors.title = '*Please provide a field '
            }
            if(values.content==''){
                errors.content = '*Please provide a field '
            }
            
            return(errors);
        }
    })


    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <form onSubmit={formik.handleSubmit} method="post">
                <label for="fname">Post Title  </label>
                {
                    formik.errors.title?(
                        <small style ={{color: 'red' }}>
                            {formik.errors.title}
                        </small>
                    ): null
                }
                <input type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} placeholder="Title of the post" />
               

                <label for="content">Content </label>
                {
                    formik.errors.content?(
                        <small style ={{color: 'red' }}>
                            {formik.errors.content}
                        </small>
                    ): null
                }
                <textarea type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content} placeholder=""></textarea>
                

                <input type="submit" value={formik.isSubmitting? 'Submitting...': 'Submit'} disabled={formik.isSubmitting} />
            </form>
        </>
    );
}