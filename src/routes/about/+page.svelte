<script>
	import SpanGradient from '$lib/components/typography/span-gradient.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<article class="prose prose-xl prose-invert mx-auto my-8">
	<h1 class="text-center text">
		<SpanGradient text="About This App" />
	</h1>

	<p>
		This is a simple weather app on top of an overly complicated and overengineered infrastructure. 
		I am not joking, its really meme worthy level of overengineering. 🙃
	</p>

	<h2>
		<SpanGradient text="The Frontend Fiesta" />
	</h2>
	<pre class="pre">Svelte, Sveltekit, S3 Static Site Hosting, Cloudfront</pre>
	<p>
		The application was written in Svelte and SvelteKit. It is built via Static Site Generation (SSG) 
		and deployed to AWS S3 which serves as a Static Website Host. The application you are looking at is 
		served via AWS Cloudfront which is a Content Delivery Network (CDN) that caches the application and
		provides a global edge location for the application to be served from. It is deployed with Github Actions
		via Tagging.
	</p>

	<h2>
		<SpanGradient text="The Backend Bonanza" />
	</h2>
	<pre class="pre">Go & Go Fibre, App Runner, Elastic Container Registry, API Gateway</pre>
	<p>
		The application communicates via a REST API written in Go that runs on AWS App Runner. App Runner takes
		the image that is built and pushed to AWS Elastic Container Registry (ECR) from Github Actions and
		runs it as a container, it is a fully managed serverless solution by AWS. The API is a simple Go application
		implemented with Go Fibre that has multiple endpoints to get weather data from DynamoDB. Requests are routed
		via API Gateway. <br> Ain't gonna lie, it's blazingly fast.
	</p>

	<h2><SpanGradient text="The Closet In the Backend To Narnia" /></h2>
	<pre class="pre">DynamoDB, Lambda Functions, EventBridge</pre>
	<p>
		DynamoDB serves as the database for the application. There are multiple tables that store the weather data
		for different cities. The data is populated via a Lambda function (written in NodeJS) that is triggered by EventBridge. 
		EventBridge, this basically turns our Lambda function into a cron job that runs periodically to fetch the 
		weather data from WeatherApi.
	</p>

	<h2><SpanGradient text="The Memeworty Overengineering" /></h2>
	<pre class="pre">Terraform, Terragrunt, AWS</pre>
	<p>
		This is the part where I tell you, that this whole project, the application you are looking at, the API, 
		the database, literally everything is running on AWS provided and configured with Terraform, not just
		Terraform, to make it even more complicated, it's Terragrunt. Makes life easier when you have multiple
		environments. Yes, the whole infrastructure is seperated into development, staging / non-production,
		and production and shared-resources.
	</p>
	<p>Now you might be thinking:</p>
	<pre class="pre">Why would you do this?</pre>
	<p>
		Well, just because I can. And maybe because I might be a psychopath who happens to be overly charming
		and handsome as well. And definitely not because I'm desperate to show off my skills for a job so I 
		can survive on instant noodles and pay off my OnlyFans subscriptions.
	</p>
</article>

<style>
</style>