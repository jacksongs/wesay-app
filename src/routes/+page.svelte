<script>

	import 'vidstack/styles/base.css';
	import 'vidstack/styles/ui/buttons.css';
	import 'vidstack/styles/ui/sliders.css';

	import { defineCustomElements } from 'vidstack/elements';

	defineCustomElements();

    import athletes from '$lib/data/data.json';

    let randAth = athletes[Math.floor(Math.random()*athletes.length)];

	// For Search Input
	let searchTerm = "";

	// Filter	
	const searchAths = () => {	
		return filteredAths = athletes.filter(ath => {
			let athName = ath.name.toLowerCase();
			return athName.includes(searchTerm.toLowerCase())
		});
	};

    // Query results
	let filteredAths = athletes;

	// Starting player, try random
    let showVideoId = randAth.id;

	$: result = athletes.find(item => item.id === showVideoId);

	function update(x) {
		showVideoId = x;
		console.log(showVideoId);
	};

	function random() {
		randAth = athletes[Math.floor(Math.random()*athletes.length)];
		showVideoId = randAth.id;
		console.log(randAth);
	};

	function truncate(str, max) {
		return str.length > max ? str.substr(0, max-1) + '…' : str;
	}

</script>
<div id="app">
	<div id="brand">
		<h1>We Say</h1>
		<h4><i>The home of athletes' pronunciations</i></h4>
	</div>

	<section id="video-section">



		{#key showVideoId}
				<p class="header">
			Listen to...<br><strong><u>{result.name}</u></strong>
		<span class="header">
			Random:<button on:click={random}> 🗣️ </button>
		</span>

		  
		  		</p>

		<media-player  src="{result.mp4}"
		  playsinline
		>
		  <media-outlet>
		  <media-play-button />
		  </media-outlet>
		</media-player>
		{/key}
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

	    <div id="filter">
			<ul>
			{#each filteredAths.slice(0,5) as fa,i}
			{#if fa.id != showVideoId}
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
		margin-bottom: 6px;
		height: 30px;
		width: 30px;
	}


	input {
		margin: 6px;
		margin-left: 0px;
		height: 30px ;
		width: 200px ;
	}

	p.header {
		font-size: 24px ;
		margin: 6px;
		margin-right: 0px ;
	}

	span.header {
		height: 26px;
		margin-bottom: 6px;
		margin-right: 6px;
		float: right;
		font-size:18px;
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
</style>