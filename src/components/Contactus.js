function Contactus(){
    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
  };

    return(
        <section id="contact">
        <form onSubmit={handleSubmit}>

        <div class="contact">
            <h2><i class="fa-solid fa-phone"></i> Contact Us</h2>
            <h3>We’d love to hear from you 💕</h3>
            <input type="text" placeholder="Enter your Name" required></input>
            <input type="number" placeholder="Enter your Email" required></input>
            <input type="email" placeholder="Enter your Contact" required></input>
            <textarea type="message" placeholder="Type your Message...." required></textarea>
            <button type="submit">Send Message💌</button>
        </div></form></section>
    )
}

export default Contactus