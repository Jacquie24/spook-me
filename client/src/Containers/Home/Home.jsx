import React from "react";
import Navbar from "../../Components/NavBar/NavBar";

const Home = () => {
	return (
		<div>
			<Navbar />

			<section class="section is-medium">
				<h1 class="title">Spook Me</h1>
				<h2 class="subtitle">
					Don't forget your Holy Water...
				</h2>
			</section>

			<div class="columns">
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary">
							This container is <strong>fluid</strong>: it will have a 32px gap
							on either side, on any viewport size.
						</div>
					</div>
				</div>
				<div class="column">
					<div class="container is-fluid">
						<div class="notification is-primary">
							This container is <strong>fluid</strong>: it will have a 32px gap
							on either side, on any viewport size.
						</div>
					</div>
					<br />
					<div class="container is-fluid">
						<div class="notification is-primary">
							This container is <strong>fluid</strong>: it will have a 32px gap
							on either side, on any viewport size.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

<styles>#88177a99</styles>;