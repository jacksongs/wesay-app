import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../chunks/index.js";
import { defineCustomElements } from "vidstack/elements";
const base = "";
const buttons = "";
const sliders = "";
const athletes = [
  {
    id: 99,
    name: "Albert Hopoate",
    sport: "League",
    team: "Raiders",
    mp4: "AlbertHopoate.mp4"
  },
  {
    id: 13,
    name: "Adrian Trevilyan",
    sport: "League",
    team: "Raiders",
    mp4: "AdrianTrevilyan.mp4"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#brand.svelte-hzlwnj{margin:4px\n	}#app.svelte-hzlwnj{border:2px solid black}h1.svelte-hzlwnj{margin:0px}h4.svelte-hzlwnj{margin-top:0px}button.svelte-hzlwnj{margin-left:6px;margin-bottom:6px;height:30px;width:30px}input.svelte-hzlwnj{margin:6px;margin-left:0px;height:30px ;width:200px }p.header.svelte-hzlwnj{font-size:24px ;margin:6px;margin-right:0px }span.header.svelte-hzlwnj{height:26px;margin-bottom:6px;margin-right:6px;float:right;font-size:18px;vertical-align:bottom}#query-section.svelte-hzlwnj{margin-top:0px}#missing.svelte-hzlwnj{margin-top:20px}p.svelte-hzlwnj{margin:8px }ul.svelte-hzlwnj{list-style-type:none;padding:0px;margin:0px}li.svelte-hzlwnj{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}media-play-button.svelte-hzlwnj{left:0;position:absolute;top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let result;
  defineCustomElements();
  let randAth = athletes[Math.floor(Math.random() * athletes.length)];
  let searchTerm = "";
  let filteredAths = athletes;
  let showVideoId = randAth.id;
  $$result.css.add(css);
  result = athletes.find((item) => item.id === showVideoId);
  return `<div id="${"app"}" class="${"svelte-hzlwnj"}"><div id="${"brand"}" class="${"svelte-hzlwnj"}"><h1 class="${"svelte-hzlwnj"}">We Say</h1>
		<h4 class="${"svelte-hzlwnj"}"><i>The home of athletes&#39; pronunciations</i></h4></div>

	<section id="${"video-section"}"><p class="${"header svelte-hzlwnj"}">Listen to...<br><strong><u>${escape(result.name)}</u></strong>
		<span class="${"header svelte-hzlwnj"}">Random:<button class="${"svelte-hzlwnj"}">🗣️ </button></span></p>

		<media-player${add_attribute("src", result.mp4, 0)} playsinline><media-outlet><media-play-button class="${"svelte-hzlwnj"}"></media-play-button></media-outlet></media-player></section>

	<section id="${"query-section"}" class="${"svelte-hzlwnj"}"><div id="${"search-input-cont"}"><p class="${"header svelte-hzlwnj"}">Or search...<br><input type="${"text"}" id="${"search-field"}" placeholder="${"Type in a name"}" autocomplete="${"off"}" class="${"svelte-hzlwnj"}"${add_attribute("value", searchTerm, 0)}></p></div> 

	    <div id="${"filter"}"><ul class="${"svelte-hzlwnj"}">${each(filteredAths.slice(0, 5), (fa, i) => {
    return `${fa.id != showVideoId ? `<li class="${"svelte-hzlwnj"}"><button class="${"svelte-hzlwnj"}">🗣️ </button> ${escape(fa.name)}, ${escape(fa.team)} (${escape(fa.sport)}) </li>` : `<li class="${"svelte-hzlwnj"}"><button disabled class="${"svelte-hzlwnj"}">🗣️ </button> ${escape(fa.name)}, ${escape(fa.team)} (${escape(fa.sport)}) </li>`}`;
  })}</ul>
			<p id="${"records"}" class="${"svelte-hzlwnj"}">${escape(filteredAths.length)} records found, ${escape(Math.min(filteredAths.length, 5))} displayed.</p></div>
		<div><div id="${"missing"}" class="${"svelte-hzlwnj"}"><p class="${"svelte-hzlwnj"}">Someone missing? Email a video link <a href="${"mailto:jack.snape@abc.net.au"}">here</a>.</p></div></div></section>	
</div>`;
});
export {
  Page as default
};
