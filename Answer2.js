const awards = [
    {
    name: 'James Peebles',
    category: 'Physics',
    research: 'Theoretical discoveries in physical cosmology',
    year: 2019,
  },
  {
    name: 'Michel Mayor',
    category: 'Physics',
    research: 'Discovery of an exoplanet orbiting a solar-type star',
    year: 2019,
  },
  {
    name: 'Didier Queloz',
    category: 'Physics',
    research: 'Discovery of an exoplanet orbiting a solar-type star',
    year: 2019,
  },
  {
    name: 'John B. Goodenough',
    category: 'Chemistry',
    research: 'Development of lithium-ion batteries',
    year: 2019,
  },
  {
    name: 'M. Stanley Whittingham',
    category: 'Chemistry',
    research: 'Development of lithium-ion batteries',
    year: 2019,
  },
  {
    name: 'Akira Yoshino',
    category: 'Chemistry',
    research: 'Development of lithium-ion batteries',
    year: 2019,
  },
  {
    name: 'Arthur Ashkin',
    category: 'Physics',
    research: 'Optical tweezers and their application to biological systems',
    year: 2018,
  },
  {
    name: 'Gerard Mourou',
    category: 'Physics',
    research: 'Method of generating high-intensity, ultra-short optical pulses',
    year: 2018,
  },
  {
    name: 'Donna Strickland',
    category: 'Physics',
    research: 'Method of generating high-intensity, ultra-short optical pulses',
    year: 2018,
  },
  {
    name: 'Frances H. Arnold',
    category: 'Chemistry',
    research: 'Directed evolution of enzymes',
    year: 2018,
  },
  {
    name: 'George P. Smith',
    category: 'Chemistry',
    research: 'Phage display of peptides and antibodies.',
    year: 2018,
  },
  {
    name: 'Sir Gregory P. Winter',
    category: 'Chemistry',
    research: 'Phage display of peptides and antibodies.',
    year: 2018,
  },
];

let physics2019 =[];
for(let i of awards){
    if(i.category==="Physics" && i.year===2019){
        physics2019.push(i)
    }
}
// console.log(physics2019)
let winnerPhysics2019 = []
for(let i of physics2019){
	let count = 0;
	for(let j=0; j<physics2019.length; j++){
        if(i.research == physics2019[j].research){
            count++;
        }
  }
  let sh ;
  if(count == 1)
  	sh = 1/2
  else if(count == 2)
  	sh = 1/4
  else if(count == 3)
  	sh = 1/3
	winnerPhysics2019.push({
  	name : i.name,
    share: sh
  })
}
// console.log(winnerPhysics2019)
let phy2019 = {
category : "Physics",
year : 2019,
winner : winnerPhysics2019
}

// console.log(phy2019)









let chemistry2019 =[];
for(let i of awards){
    if(i.category==="Chemistry" && i.year===2019){
        chemistry2019.push(i)
    }
}
// console.log(chemistry2019)
let winnerChemistry2019 = []
for(let i of chemistry2019){
	let count = 0;
	for(let j=0; j<chemistry2019.length; j++){
        if(i.research == chemistry2019[j].research){
            count++;
        }
  }
  let sh ;
  if(count == 1)
  	sh = 1/2
  else if(count == 2)
  	sh = 1/4
  else if(count == 3)
  	sh = 1/3
	winnerChemistry2019.push({
  	name : i.name,
    share: sh
  })
}
// console.log(winnerChemistry2019)
let chem2019 = {
category : "Chemistry",
year : 2019,
winner : winnerChemistry2019
}

// console.log(chem2019)









let physics2018 =[];
for(let i of awards){
    if(i.category==="Physics" && i.year===2018){
        physics2018.push(i)
    }
}
// console.log(physics2018)
let winnerPhysics2018 = []
for(let i of physics2018){
	let count = 0;
	for(let j=0; j<physics2018.length; j++){
        if(i.research == physics2018[j].research){
            count++;
        }
  }
  let sh ;
  if(count == 1)
  	sh = 1/2
  else if(count == 2)
  	sh = 1/4
  else if(count == 3)
  	sh = 1/3
	winnerPhysics2018.push({
  	name : i.name,
    share: sh
  })
}
// console.log(winnerPhysics2018)
let phy2018 = {
category : "Physics",
year : 2018,
winner : winnerPhysics2018
}

// console.log(phy2018)









let chemistry2018 =[];
for(let i of awards){
    if(i.category==="Chemistry" && i.year===2018){
        chemistry2018.push(i)
    }
}
// console.log(chemistry2018)
let winnerChemistry2018 = []
for(let i of chemistry2018){
	let count = 0;
	for(let j=0; j<chemistry2018.length; j++){
        if(i.research == chemistry2018[j].research){
            count++;
        }
  }
  let sh ;
  if(count == 1)
  	sh = 1/2
  else if(count == 2)
  	sh = 1/4
  else if(count == 3)
  	sh = 1/3
	winnerChemistry2018.push({
  	name : i.name,
    share: sh
  })
}
// console.log(winnerChemistry2018)
let chem2018 = {
category : "Chemistry",
year : 2018,
winner : winnerChemistry2018
}

// console.log(chem2018)



let prizes = [phy2019, chem2019, phy2018, chem2018];
console.log(prizes)


