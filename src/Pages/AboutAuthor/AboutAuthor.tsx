import style from './AboutAuthor.module.css';

const AboutAuthor = () => {
	return (
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className={style.header}>Welcome to Author Page</h1>
							<div className={style.group}>
								<div className={style.groupChild}>
									<h3>About Me</h3>
									<p>
										My name is Egīls, a passionate and ambitious junior developer with a thirst for knowledge and a love
										for coding. As I navigate through the vast landscape of programming, I've created this space to
										document my learning journey, share my experiences, and connect with fellow developers.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Coding Skills Enhancement</h3>
									<p>
										Driven by a relentless pursuit of improvement, I am constantly honing my coding skills.
										From tackling challenging algorithms to diving into new programming languages and frameworks,
										every line of code I write is a step forward in my quest for mastery. Join me on this exciting
										journey of growth and development in the world of software engineering.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Projects Showcase:</h3>
									<p>
										Explore the projects I've undertaken to apply and demonstrate my coding skills. Each project
										is a testament to my dedication to craftsmanship and the practical application of programming
										principles. From web development to mobile apps, my portfolio reflects the diverse range of
										challenges I've embraced.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Learning Resources:</h3>
									<p>
										I understand the importance of continuous learning in the ever-evolving tech landscape.
										On my page, you'll find insights into the latest technologies, programming languages,
										and development tools. I share my thoughts on coding best practices, tutorials, and resources
										that have been instrumental in my learning process.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Community Engagement:</h3>
									<p>
										Beyond personal development, I am a firm believer in the power of community. Connect with me and
										fellow developers, exchange ideas, seek advice, and share your experiences. Let's build a supportive
										network that fosters growth and collaboration in the world of coding.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Future Aspirations:</h3>
									<p>
										As I embark on my journey as a junior developer, I have my eyes set on exciting goals.
										Whether it's contributing to open-source projects, participating in hackathons,
										or delving into cutting-edge technologies, I'm eager to make a meaningful impact in the tech
										community.

										Join me on this exhilarating adventure of coding exploration and skill refinement.
										Together, let's embrace the challenges, celebrate the victories, and learn from every line of code
										written.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	);
};

export default AboutAuthor;