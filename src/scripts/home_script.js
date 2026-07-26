import { text_adder } from "../components/blocked_text_adder/text_adder.js";

const hero_section_main = document.getElementById("hero_section_main");
const owners_image_hero_section = document.getElementById(
  "owners_image_hero_section",
);
const owners_transparentname_hero_section = document.getElementById(
  "owners_transparentname_hero_section",
);
const text_ability_owner_in_main = document.getElementById("text_ability_owner_main");
const greeting_by_owner_and_about_about_owner_main = document.getElementById("greeting_by_owner_and_about_about_owner_main");

text_adder(text_ability_owner_in_main, "impacting users through the experience")
text_adder(greeting_by_owner_and_about_about_owner_main, "Hi I'm Ishan. A Web Developer creating absolute masterpieces."); 
const load_owner_data = async(url, data) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error fetching data from "+ url + ".Error status" + response.status);
      
    }
    const data_fetched = await response.json()
    return data_fetched.data
  } catch (error) {
    console.log("Error fetching data from '"+ url + "'")
  }
  
}
// console.log(load_owner_data("../../owner_data/owner_stats.json","no_of_projects_completed"))
