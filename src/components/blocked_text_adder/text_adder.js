export function text_adder(element, text) {

  const arrayofwords = text.split(" ");
  arrayofwords.forEach(word => {
    element.innerHTML += `<span class="`+element+`_text_inside">`+ word +`</span>`;
  });
  
} 