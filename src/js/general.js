export function capitalizeEveryFirstLetter (string) {
   return string.replaceAll("_", " ").split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}