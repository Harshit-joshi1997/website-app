
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <section className="about-page" style={{ backgroundColor:"pink",borderRadius:"10px"}}>
      <h1 className='heading' style={{paddingLeft:"600px",fontSize:"40px",marginTop:"10px",marginBottom:"20px"}}>Introduction</h1>
      <span>
      <p className='about-text' style={{paddingLeft:"60px"}}>
        I started this blog as a way to share my thoughts, experiences, and insights on [Your Blog's Main Topics]. What began as a personal journal has blossomed into a community where like-minded individuals can connect, learn, and grow together.
      </p></span>
      <h2 className='heading' style={{paddingLeft:"500px",fontSize:"30px",marginTop:"10px"}}>Types of Blogs You'll Find Here</h2>
      <ul className='list' style={{ paddingLeft:"60px"}}>
        <li>Health</li>
        <li>Global Politics</li>
        <li>Environment</li>
        <li>Trends</li>
        <li>Social Media Updates </li>
        <br/>
        <br/>
        
        <h3 className='heads'>🌟 Let's Connect</h3>
        <br/>
        <p className='para' style={{paddingBottom:"20px"}}>I'm always eager to hear from my readers. Feel free to reach out via [Your Contact Method], or connect with me on [Your Social Media Links].
           Thank you for visiting, and I look forward to sharing this journey with you!
           Feel free to personalize this template with your specific details and style. If you need further assistance or have any questions, don't hesitate to ask!




Sources

</p>
        </ul>
        
      
      
    </section>
    <Footer/>
    </>
  )
}

export default About