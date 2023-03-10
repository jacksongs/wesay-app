<script type="text/javascript">

	import { page } from '$app/stores'
	import { fade, fly,crossfade,blur,slide,scale,draw } from 'svelte/transition'
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import 'vidstack/styles/base.css';
	import 'vidstack/styles/ui/buttons.css';
	import 'vidstack/styles/ui/sliders.css';
	import { defineCustomElements } from 'vidstack/elements';
	import 'vidstack/define/media-player.js';
	defineCustomElements();

	export let data;
	console.log(data.athlete);
	$: athlete = data.athlete;

	function randomNext(a) {
		const nAthletes = data.allAthletes.filter(function( obj ) {
		    return obj.id !== a.id;
		});
		return nAthletes[Math.floor(Math.random()*nAthletes.length)];
	};

	$: random = randomNext(athlete);
	// this is where the search results come from
	let searchTerm = "";

	function filterAths(a) {
		const filtered = data.allAthletes.filter(function( obj ) {
		    return obj.id !== a.id;
		});
		return filtered;
	};

	$: filteredAths = filterAths(athlete);

	const searchAths = () => {	
		const otherAthletes = data.allAthletes.filter(function( obj ) {
		    return obj.id !== athlete.id;
		});
		return filteredAths = otherAthletes.filter(ath => {
			document.getElementById("missing").scrollIntoView({behavior: 'smooth'});
			let athName = ath.name.toLowerCase();
			return athName.includes(searchTerm.toLowerCase())
		});
	};

	onMount(async () => {
		const player = document.querySelector('media-player');
		player.onAttach(async () => {
			  player.src = athlete.mp4;
		});
		//console.log('Athlete:',athlete,'Random:',random,"Page:",$page.params.name);
	});

	const onClick = (a) => {
		const player = document.querySelector('media-player');
		player.src = "/"+a.mp4;
		player.autoplay = true;
		//console.log('Athlete:',athlete,'Random:',random,"Page:",$page.params.name);
	}

</script>


<div id="app">
	<div id="brand">
			<h1>We Say</h1>
			<h4><i>The home of athletes' pronunciations</i></h4>
		</div>

		<section id="video-section">
				<p class="header">
					Listen to...<br><strong>{athlete.name}</strong>
					<span class="header">
					{#key athlete}
					<a href={random.name.replaceAll(" ","_")} on:click={() =>onClick(random)} data-sveltekit-preload-data>
					<span in:fade> 🗣️ Random</span>
					</a>
					{/key}
					</span>
				</p>
				<div id="video-wrapper">
				
				
				<media-player
				  playsinline
				>
				  <media-outlet>
				  <media-play-button />
				  </media-outlet>
				</media-player>
				
				
				</div>
		</section>

		<section id="query-section">
			<div id="search-input-cont">
		        <p class="header">Or search...<br><input type="text" 
		                     id="search-field" 
		                     placeholder="Type in a name" 
		                     autocomplete="off"
		                     bind:value={searchTerm}
		                     on:input={searchAths} />
		        </p>
		    </div> 

		    <div id="filter" >
				<ul >
				{#each filteredAths.slice(0,20) as fa,i}
					<li transition:slide="{{delay: 250, duration: 300, easing: quintOut, axis: 'y'}}"><a  on:click={() =>onClick(fa)} data-sveltekit-preload-data href="/{fa.name.replaceAll(' ','_')}"><span> 🗣️ {fa.name} </span></a></li>
				{/each}
				</ul>
				<p id="records">{filteredAths.length} record{#if filteredAths.length!==1}s{/if} found, {Math.min(filteredAths.length,20)} displayed.</p>
			</div>
			<div>

			<div id="missing">
				<p>Someone missing? Email a video link <a href="mailto:jacksongsmedia@gmail.com">here</a>.</p>
			</div>
		</section>	
	</div>
