import Footer from "./Footer"
import './../style/contact.css'

const Contact = () => {
  return (
    <>
      <div className='contact-page'>
        <div className="services-hero">
          <h1>Think we can help? We bet you're right.</h1>
          <p>We enjoy digital work of all kinds, and some of our favorite projects have been related to furniture, manufacturing, higher education, entertainment, public good, and conservation (outdoors). If you have an interesting idea or challenge, let's talk—it's as easy as sending us an email to get the conversation started. Just want to connect? That sounds great, too.</p>

          <div className="contact">
            <div className="email">
              <h3>Email</h3>
              <a href="mailto:lamteyanastacia@gmail.com">lamteyanastacia@gmail.com</a>
            </div>
            <div className="tel">
              <h3>Text or Call</h3>
              <a href="tel:+233249282982">+233 24 928 2982</a>
            </div>
          </div>

          <div className="address">
            <h3>Address</h3>
            <a href="#">50 Louis St NW Ste 520, Grand Rapids, MI 49503</a>
          </div>


        </div>
        <div className="main">
          <section className='what-to-say'>
            <h2>Not sure what to say?</h2>
            <p>We know, it's hard to put yourself out there sometimes. Just tell us about your project and goals, or share what has you feeling stuck. If you’re having trouble starting the conversation, here’s the kind of email that gets us excited:</p>
            <div className="c_letter">
              <article>
                <p>
                  Hello Mighty!
                </p>
                <p>
                  My name is David Johnson, and I’m the Senior Marketing Manager at Manchester United. I’d love to hire you for a project.
                </p>
                <p>
                  We’ve known we need a new website for a while, and a few attempts have started and stalled in recent years because of lack of alignment around strategy, direction, and content. When I asked around, my colleague Alex Ferguson recommended I get in touch with you.
                </p>
                <p>
                  We’d like to launch it by late this summer in order to coincide with the start of the season; let us know if you think that’s reasonable. We’re looking to partner with a team that can take this all the way from conception to launch. You’d be working directly with me and our digital team for the project, but we’ll also need buy-in and input from our brand team for design approval.
                </p>
                <p>
                  Full disclosure: I’m talking to two other agencies about this work.
                </p>
                <p>
                  I’m happy to provide any other detail you need. If you’re interested, let’s set up a time to chat. How does next week look for you? I'm available Monday and Thursday afternoon.
                </p>
                <p>
                  Thanks,
                </p>
                <p>
                  David
                </p>

              </article>
            </div>
          </section>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact