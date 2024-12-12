const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]
  
  
  
  function cercalavoro(posGeo, posLav){
    posGeominuscolo = posGeo.toLowerCase();
    posLavminuscolo = posLav.toLowerCase();
    let risultati = {
     results: [],
     count: 0,
   }
   
  for (let i =0; i < jobs.length; i++) {
  const lavoroeposizione = jobs[i];
  
  posizioneinmaiuscolo = lavoroeposizione.location.toLowerCase();
   console.log(posizioneinmaiuscolo);
  lavoroinmaiuscolo = lavoroeposizione.title.toLowerCase();
   console.log(lavoroinmaiuscolo);
  
   if (
    posizioneinmaiuscolo.includes(posGeominuscolo) && lavoroinmaiuscolo.includes(posLavminuscolo)
  ) {
    risultati.results.push(lavoroeposizione)
    risultati.count++
  }
  }
  return risultati
  }
   const ricerca = cercalavoro("US", "dev")
   console.log(ricerca)
  
  
  
  
  document.getElementById('cerca').addEventListener('click', function() {
  const location = document.getElementById('location').value;
  const jobTitle = document.getElementById('jobTitle').value;
  console.log('Location:', location);
  console.log('cerca posizione lavorativa:', jobTitle);

  const results = cercalavoro(location, jobTitle);
  mostraDisplay(results.results); 
  });
  function mostraDisplay(results) {
   const resultatoList = document.getElementById('elenco');
   resultatoList.innerHTML = '';
   if (results.length === 0) { 
    const noResultsItem = document.createElement('li');
    noResultsItem.textContent = 'Nessuna posizione disponibile';
     resultatoList.appendChild(noResultsItem); 
    } else{
    for (let i = 0; i < results.length; i++) { 
    const list = document.createElement('li');
    list.textContent = results[i].title + ' - ' + results[i].location;
    resultatoList.appendChild(list);
     }
    }
   }


   //result: [2], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
   //count: 2 <-- inserisci qui il numero totale delle inserzioni trovate
