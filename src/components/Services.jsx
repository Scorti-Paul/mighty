import './../style/services.css'
import ServicesBg from './../assets/services-banner.png'
import Footer from './Footer'

const Services = () => {
  return (
    <>
      <div className='services'>
        <div className="services-hero">
          <h1>We plan, design, and develop websites and digital products.</h1>
          <p>We’re a solution-oriented team of problem-solvers and creative thinkers. Our work is grounded in research and guided by strategy. We’ll focus on your goals and your users, and make sure we fully understand the opportunity before defining a solution. Once we know why an initiative is valuable and what we want to accomplish, we’ll figure out how. If you’ve heard the terms “human-centered design” or “design thinking,” that’s what we’re talking about here.</p>
          <div className="services-bg">
            <img src={ServicesBg} alt="services background" />
          </div>
        </div>
        <div className="main">
          <section className='how-we-work'>
            <h2>How We Work</h2>
            <article>
              <p>In any big digital project there’s bound to be things that feel dark or unclear at the outset. Things that feel overwhelming, or hidden pitfalls you hope to avoid. We help our clients illuminate new opportunities and more clearly see the way forward.
              </p>
              <p>
                Whether it’s a single focused meeting or an in-depth phase, we’ll always start with strategy. That means we’re going to ask questions, help you clarify your ideas, organize your content, and make recommendations. Maybe that’s all you need (for now), and that’s great! We’ll set you up for success and send you on your way.
              </p>
              <p>
                Usually, however, strategy is just the first step, and we’ll move on to lead visual design and technical implementation, and then support you after launch to maintain and continuously improve your digital product.
              </p>
              <p>
                If you have internal development resources—or specific, specialized technical requirements where another firm may be a better fit for portions of the development—we can lead through the design phase, then hand off strategy and design documentation to another developer. In these cases, we often provide technical direction or quality assurance support throughout the duration of the project.</p>
            </article>
          </section>
          <section className="who-we-work-with">
            <h2>How We Work</h2>
            <article>
              <p> We excel at all kinds of digital work, but some of our favorite projects have been related to furniture, manufacturing, higher education, entertainment, nonprofit, and the outdoors.
              </p>
              <p>
                We work really well with clients who are excited about their ideas and want to be part of finding the solution. Our favorite clients tend to treat us as part of their team (and vice versa). We love it when our clients are willing to invest energy and trust working with us to create value for their organization and customers, so we're usually not a great fit for people who are shopping for the lowest price or “just need it built.” Clients come to us to plan and create innovative solutions, and stay because we deliver value long after launch.
              </p>
            </article>
          </section>
          <section className='quote'>
            <h3>Clients say</h3>
            <p>"Mighty challenges us. They ask questions and we talk about our goals. They learn the 'why' before recommending the 'what' and deciding on the 'how.' If you want a great partner, start a conversation with Mighty."</p>
            <small>—Adam Forrest, Zondervan Academic</small>
          </section>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Services