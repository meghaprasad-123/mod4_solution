const names = ["John", "Jeswin", "Akhila", "Gifty", "Midhun","Vishnu","Rahul"];
const display= document.getElementById('display')
for (let i = 0; i < names.length; i++) {
  let name = names[i];

  if (name.charAt(0).toLowerCase() === "j") {
    console.log("Goodbye " + name);
    display.innerHTML += `<h4>Goodbye ${name}</h4>`
  } else {
    console.log("Hello " + name);
    display.innerHTML += `<h4>Hello ${name}</h4>`
  }
}




