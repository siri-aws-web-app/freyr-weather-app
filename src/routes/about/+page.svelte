<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About This App</h1>

	<p>
		This is a simple weather app on top of an overly complicated and overengineered infrastructure. 
		I am not joking, its really meme worthy level of overengineering. 🙃
	</p>

	<h3>The Frontend Fiesta</h3>
	<p>
		The application was written in Svelte and SvelteKit. It is built via Static Site Generation (SSG) 
		and deployed to AWS S3 which serves as a Static Website Host. The application you are looking at is 
		served via AWS Cloudfront which is a Content Delivery Network (CDN) that caches the application and
		provides a global edge location for the application to be served from.
	</p>

	<h3>The Behind-The-Scene-Backend</h3>
	<p>
		The application communicates via a REST API written in Go that runs on AWS Apprunner. Apprunner takes
		the image that is built and pushed to AWS Elastic Container Registry (ECR) from Github Actions and
		runs it as a container, it is a fully managed serverless solution by AWS. The API is a simple Go application
		that has multiple endpoints to get weather data from DynamoDB. Ain't gonna lie, it's blazingly fast.
	</p>

	<h3>The Closet In the Backend Leading To Narnia</h3>
	<p>
		DynamoDB serves as the database for the application. There are multiple tables that store the weather data
		for different cities. The data is populated via a Lambda function (written in NodeJS) that is triggered by EventBridge. 
		EventBridge, this basically turns our Lambda function into a cron job that runs periodically to fetch the 
		weather data from WeatherApi.
	</p>

	<h3>The Meme Worty Overengineering</h3>
	<p>
		This is the part where I tell you, that this whole project, the application you are looking at, the API, 
		the database, literally everything is running on AWS provided and configured with Terraform, not just
		Terraform, to make it even more complicated, it's Terragrunt. Makes life easier when you have multiple
		environments. Yes, the whole infrastructure is seperated into development, staging / non-production,
		and production and shared-resources. Now you might be thinking, why would you do this? 
	</p>
	<p>
		Well, just because I can. And maybe because I might be a psychopath who happens to be overly charming
		and handsome as well. And definitely not because I'm desperate to show off my skills for a job so I 
		can pay my OnlyFans subscriptions.
	</p>
</div>

<style>
	h3 {
		margin-bottom: 0;
	}
</style>