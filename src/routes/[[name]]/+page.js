
import { json } from '@sveltejs/kit';
import { athletes } from '$lib/data/data.js';
import { error } from '@sveltejs/kit';

export function load( { params }) {
  if (!params.name) {
    return {
      athlete: athletes[Math.floor(Math.random()*athletes.length)],
      allAthletes: athletes
    };
  } else {
    const ath = athletes.find(item => item.name.toLowerCase() === params.name.toLowerCase().replaceAll('_',' '));
    if (!ath) {
      return {
        athlete: {"name":"No name found","id":0,"sport":"None","mp4":"rick.mp4" },
        allAthletes: athletes
      };
    } else {
      return {
        athlete: ath,
        allAthletes: athletes
      }
    }
  }
}