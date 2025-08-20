import { useState } from "react";

const Contact = () => {

  const [form , setform] = useState({
    name:"",
    email:"",
    message:""
  })

  const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const validationemail = (email : string) => 
    /.+@.+\..+/.test(email);
  

   const handlesubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.message === "" ){
      alert("please fill all the fields")
    }else if (!validationemail(form.email)){
      alert("please enter a valid email")
    }else{
      alert("Thank you for contacting me, I will get back to you soon!");
    }
    setform({ name: "", email: "", message: "" });
    e.currentTarget.reset();
  }
  return (
    <>
    <section className="contact">
      <h3>Feel Free To Contact Me...</h3>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="Enter your name" onChange={handlechange}/>
        <input type="text" name="email" placeholder="Enter your Email" onChange={handlechange}/>
        <textarea name="message" placeholder="enter your message here" onChange={handlechange}></textarea>
        <button type="submit">Send Message</button>
      </form>
            
    </section>
    </>
  )
}

export default Contact