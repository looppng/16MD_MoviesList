import style from './AboutProject.module.css'
const AboutProject = () => {
	return (
			<section>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1 className={style.header}>Welcome to My Movie Page</h1>
							<div className={style.group}>
								<div className={style.groupChild}>
									<h3>Home page</h3>
									<p>
										On our home page, you'll find a curated and diverse selection of movies for every taste. From
										classic
										masterpieces to the latest blockbusters, our movie list is designed to cater to all movie
										enthusiasts.
										The user-friendly interface ensures a seamless browsing experience, allowing you to easily explore
										and
										discover new films.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Individual Movie Details:</h3>
									<p>
										Clicking on a movie poster or title takes you to the dedicated page for that movie. Here, you'll
										find comprehensive details such as the movie's synopsis, cast and crew information, release date,
										genre, and user ratings. Dive deep into the world of each film before deciding to watch.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Delete Movie Feature:</h3>
									<p>
										We believe in giving you control over your movie list. With a simple click of a button,
										you can delete a movie from your list. This feature ensures that your movie collection is always
										up-to-date and reflects your current preferences.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Add Comments:</h3>
									<p>
										Express your thoughts and opinions about a movie by adding comments. Share your reviews, insights,
										or even your favorite quotes from a particular film. Engage with the movie-loving community and
										discover what others have to say about the movies you love.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>User-Friendly Design:</h3>
									<p>
										Our movie page is designed with user convenience in mind. The layout is intuitive, making navigation
										a breeze. Whether you're a casual moviegoer or a film buff, you'll find the page easy to use and
										visually appealing.
									</p>
								</div>
								<div className={style.groupChild}>
									<h3>Community Interaction:</h3>
									<p>
										Connect with other movie enthusiasts through our community features. Discuss your favorite films,
										share recommendations, and exchange insights with like-minded individuals. Your movie page isn't
										just a collection; it's a hub for film lovers to come together.
									</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
	);
};

export default AboutProject;