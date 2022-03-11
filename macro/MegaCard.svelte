<script>
	import { time, tags } from "./process";
	import { onMount } from "svelte";
	export let //
		url;

	// Promise.all( blogs ).then( ( posts ) => {
	// 	const articles = posts
	// 		.map( e => {
	// 			e.items?.forEach( p => (
	// 				p.default = e.feed.image,
	// 				p.name = e.feed.title.replace( 'Stories by ', '' ).replace( 'on Medium', '' ) || "Untitled",
	// 				p.pubDate = p.pubDate.replace( ' ', 'T' ) + 'Z' || Date.now()
	// 			) );
	// 			return e.items;
	// 		} )
	// 		.flat( 1 )
	// 		.slice( 0, 30 )
	// 		.sort( ( a, b ) => new Date( b.pubDate ) - new Date( a.pubDate ) )
	// 		.map( e=> new MegaCard({
	// 				target: document.querySelector('#digestor'),
	// 				props: {post: e}
	// 			}));
	// } );

	console.log(url);
	$: post = {
		name: "",
		guid: "",
		default: "",
		title: "",
		thumbnail: "",
		enclosure: {
			link: "",
		},
		link: url,
		content: "",
		description: "",
		author: "",
		pubDate: Date.now(),
	};

	onMount(() =>
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
			.then((d) => d.json())
			.then((resp) => {
				console.log(resp);
				post = resp;
			})
	);
</script>

<div class="post col-md-12" id={post.guid}>
	<a class="row my-2" href={post.link || "#"}>
		<img
			class="col-sm-3 mx-auto p-2 postImg"
			src={post?.enclosure.link || post?.thumbnail}
			alt={post?.default || "/icons/frontier.png"}
			onerror="this.src=this.alt;this.onerror=null"
		/>

		<div class="col-sm-9 p-2 text-md-left †c m-0 text-dark">
			<h5 class="text-uppercase p-0 m-0">
				{tags(post.title) || ""}
			</h5>
			<span class="card-min text-uppercase">by {post.author || ""}</span>

			<p class="">{tags(post.description).slice(0, 230)}...&rarr;</p>
			<div class="card-min text-uppercase">
				<img
					class="my-2 mr-2"
					style="border-radius:16px"
					width="32px"
					height="32px"
					src={post.default}
					alt={tags(post.author)}
				/>
				<span class="px-1">{post.name}</span> •
				<span class="font-weight-normal px-1">
					{time(post.pubDate)}
				</span>
			</div>
		</div>
	</a>
</div>

<style>
</style>
