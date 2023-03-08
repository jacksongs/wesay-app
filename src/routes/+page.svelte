<script>

	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	import 'vidstack/styles/base.css';
	import 'vidstack/styles/ui/buttons.css';
	import 'vidstack/styles/ui/sliders.css';
	import { defineCustomElements } from 'vidstack/elements';
	import 'vidstack/define/media-player.js';
	defineCustomElements();

	import athletes from '$lib/data/data.json';

	// this is the starting point for displaying the athlete and their video

	$: result = {"id":3,"name":"Nelson Asofa-Solomona", "sport":"League", "team":"Storm","mp4":"NelsonAsofa-Solomona.mp4"}

	// this is where the search results come from

	let searchTerm = "";

	let filteredAths = athletes;

	const searchAths = () => {	
		return filteredAths = athletes.filter(ath => {
			document.getElementById("missing").scrollIntoView({behavior: 'smooth'});
			let athName = ath.name.toLowerCase();
			return athName.includes(searchTerm.toLowerCase())
		});
	};

	function update(x) {
		document.body.scrollIntoView({behavior: 'smooth'});
		const player = document.querySelector('media-player');
		player.onAttach(() => {
			  // This is queued and called when media can be played.
		    player.src = athletes.find(item => item.id === x).mp4;
	    });
		result = athletes.find(item => item.id === x);
		player.autoplay = true;
		console.log(player.state);
    };

	function random() {
		const nAthletes = athletes.filter(function( obj ) {
		    return obj.id !== result.id;
		});
		update(nAthletes[Math.floor(Math.random()*nAthletes.length)].id);
	};

	function truncate(str, max) {
		return str.length > max ? str.substr(0, max-1) + '…' : str;
	};

	onMount(async () => {
		
		const player = document.querySelector('media-player');
		player.onAttach(async () => {
			  player.src = result.mp4;
		});

	});

</script>
<div id="app">
	<div id="brand">
		<h1>We Say</h1>
		<h4><i>The home of athletes' pronunciations</i></h4>
	</div>

	<section id="video-section">
			<p class="header">
				Listen to...<br><strong><u>{result.name}</u></strong>
				<span class="header">
				Random:
				<button on:click={random}>
				{#key result}
				<span in:fade> 🗣️ </span>
				{/key}
				</button>
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
			<ul>
			{#each filteredAths.slice(0,5) as fa,i}
				{#if fa.id != result.id}
				<li><button on:click={() => update(fa.id)}> 🗣️ </button> {fa.name}, {fa.team} ({fa.sport}) </li>
				{:else}
				<li><button disabled on:click={() => update(fa.id)}> 🗣️ </button> {fa.name}, {fa.team} ({fa.sport}) </li>
				{/if}
			{/each}
			</ul>
			<p id="records">{filteredAths.length} records found, {Math.min(filteredAths.length,5)} displayed.</p>
		</div>
		<div>

		<div id="missing">
			<p>Someone missing? Email a video link <a href="mailto:jacksongsmedia@gmail.com">here</a>.</p>
		</div>
	</section>	

</div>



<style>

	#brand {
		margin: 4px
	}

	#app {
		border: 2px solid black;
	}
	
	h1 { margin: 0px}
	h4 { margin-top: 0px}

	button {
		margin-left: 6px;
		margin-bottom: 12px;
		height: 30px;
		width: 30px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		padding: 1px;
		-webkit-appearance:none;
	}

	button:disabled {
		background-color: white;
		opacity: 50%;
		cursor: default;
	}

	input {
		font-size:18px ;
		margin: 6px;
		margin-left: 0px;
		height: 30px ;
		width: 200px ;
		border-radius: 5px;
	}

	p.header {
		font-size: 20px ;
		margin: 6px;
		margin-right: 0px ;
	}

	span.header {
		height: 26px;
		margin-bottom: 6px;
		margin-right: 6px;
		float: right;
		font-size:16px;
		vertical-align: bottom;
	}

	#query-section {
		margin-top: 0px;
	}

	#missing {
		margin-top: 20px;
	}

	p {
		margin: 8px ;
	}

	ul {
		list-style-type: none;
		padding: 0px;
		margin: 0px;
	}

	li {
	  white-space:nowrap;
	  overflow:hidden;
	  text-overflow:ellipsis;
	}

	media-play-button {
	    left: 0;
	    position: absolute;
	    top: 0;
	}


	#video-wrapper {
		width: 100%;
		height: 476px;
		background-color: black;
		padding-top: 2px;
		padding-bottom: 2px;
		margin-top: 12px ;
	}

@media only screen and (max-width: 480px) {
	#video-wrapper {
		aspect-ratio: 1 / 1;
		width:100%;
		height:99vw;
		padding-top: 2px;
		padding-bottom: 2px;
	}
}

</style>