import { useForm } from "react-hook-form";
import styles  from '@/styles/Create.module.css';



const CreateNews = () => {
     const { register, handleSubmit } = useForm();
     
     const onSubmit = (data) => {
       fetch("/api/news", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })

    .then((res) => res.json())
    .then((data) => {
        if(data.insertedId){
            alert("News Successfully Created");
        }
    });
};



return (
    <div>
    <form
    className={styles.form} 
    onSubmit={handleSubmit(onSubmit)}
    name="from_item_path"
    layout="vertical"
    style={{
    width: "50%",
    margin: "50px auto",
    }}
    >
      <input 
      {...register("id")} 
      placeholder="Id" 
      style={{marginBottom: "10px",  width: "100%"}} 
      />
      <input 
      {...register("title")} 
      placeholder="Title" 
      style={{marginBottom: "10px",  width: "100%"}}
      />
      <input 
      {...register("description")} 
      placeholder="Description" 
      style={{marginBottom: "10px 0px",  width: "100%"}} 
      />
      <input 
      {...register("author")} 
      placeholder="Author" 
      style={{marginBottom: "10px",  width: "100%"}} 
      />
      <input 
      {...register("release_date")} 
      placeholder="Release Date" 
      type="date"
      style={{marginBottom: "10px 0px",  width: "100%"}} 
      />
      <input 
      {...register("category")} 
      placeholder="Category"  
      style={{marginBottom: "10px",  width: "100%"}}
      />
      <input 
      {...register("comment_count")} 
      placeholder="Number of Comment" 
      type="number"
      style={{marginBottom: "10px 0px",  width: "100%"}} 
      />
      <input 
      {...register("image_url")} 
      placeholder="Image URL"  
      style={{marginBottom: "10px",  width: "100%"}}
      />
      <input 
      type="submit" 
      value="Create News" 
      style={{margin: "10px 0px", width: "100%",  width: "100%"}}
      />
    </form>
    </div>
    );
};

export default CreateNews;