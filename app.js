const text = document.querySelector('#text');
const h1 =document.querySelector('h1');
const color = document.querySelectorAll('#color');
const padding = document.querySelectorAll('#padding');
const margin = document.querySelectorAll('#margin');
const fontsize = document.querySelectorAll('#fontsize');
const font_weight =document.getElementById('font_weight');
const font_family =document.getElementById('font_family');
const font_style =document.getElementById('font_style');
const align = document.querySelectorAll('.align');
const text_transform =document.querySelectorAll('#text_trans');
const output = document.querySelectorAll('#output');
const form = document.querySelectorAll('#form');

text.onkeyup=()=>{
  h1.innerHTML =text.value;
}

color.forEach((items)=>{
  items.oninput=()=>{
      h1.style.color = items.value;
     
  }
})
align.forEach((items)=>{
  items.onchange=()=>{
      h1.style.textAlign = items.value;
      console.log(items.value)
  }
})
padding.forEach((items)=>{
  items.onchange=()=>{
      h1.style.padding = `${items.value}px`
  }
})
margin.forEach((items)=>{
  items.onchange=()=>{
      h1.style.margin = `${items.value}px`
  }
})
fontsize.forEach((items)=>{
  items.onchange=()=>{
      h1.style.fontSize = `${items.value}px`
  }
})
text_transform.forEach((items)=>{
  items.onchange=()=>{
      h1.style.textTransform = `${items.value}`;
  }
})

font_weight.onchange =()=>{
  h1.style.fontWeight = font_weight.value;
}

font_style.onchange=()=>{
  h1.style.fontStyle = font_style.value;
}
font_family.onchange=()=>{
  h1.style.fontFamily = font_family.value;
}