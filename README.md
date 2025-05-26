@ -1,36 +1,108 @@

# DBI-egenkontrol
Eksamensopgave for Modern Frontend 2025 i tværfagligt samarbejde med klienten DBI og Digitale konceptudviklere på UCL. 

At kode et redesign af et dashboard overdraget fra digital konceptudviklere i Vue 3, 
Hvad er projektet? Hvad gør det?



## Krav
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Git](https://git-scm.com/) 




## Installation
Følg disse trin for at installere og starte projektet:

1. klon projekt fra github

   -> git clone https://github.com/dit-brugernavn/dit-repo.git
   
   -> cd dit-repo 

2. Installer afhængigheder:

    -> npm install 

    -> npm run dev

3. Se det i din browser 

    -> Skriv http://localhost:5173 i din browser
    
    -> Naviger til http://localhost:5173/login for at starte fra login





## Kom i gang
Når du har installeret projektet , kan du starte udviklingsserveren med:

-> npm run dev

Herefter vil projektet typisk være tilgængeligt på http://localhost:5173


### Eksempel på brug

Når serveren kører, kan du åbne projektet i din browser og begynde at bruge applikationen.  
Hvis du vil tilføje eller ændre komponenter, kan du gøre det i `src/components/`-mappen, og ændringerne vil automatisk blive vist i browseren takket være hot-reload.




## Udviklingsværktøjer
Projektet benytter følgende udviklingsværktøjer:

- **[Vue 3](https://vuejs.org/):  
  Frontend framework til opbygning af brugergrænsefladen.

- **[Vite](https://vitejs.dev/):  
  Moderne build-værktøj og udviklingsserver for hurtig udvikling.

- **[ESLint](https://eslint.org/):  
  Bruges til at sikre ensartet kodestil og høj kodekvalitet.

- **[Font Awesome](https://fontawesome.com/):  
  Ikonbibliotek til brug af vektorgrafik-ikoner i projektet.

- **[Google Fonts](https://fonts.google.com/):  
  Tilføjer en bestemt skrifttype til projektets design.

- [Firebase](https://firebase.google.com/):
    Bruges til backend-funktioner som authentication, database.


## Kodekonventioner og struktur
- BEM
- PascalCasing

- Der er blevet anvendt BEM i forhold til navgivning af classes i koden, som en del af god kodestuktur, men også for at gøre den mere genanvendelig og let at vedligeholde.

- Til navngivning af filer, import af komponenter samt navngivning af views, er der blevet benyttet Pascalcasing. Dette gør det tydeligt at se hvad der er komponenter og views i root men også i filerne hver for sig. 




## Afhængigheder
Projektet benytter følgende biblioteker og værktøjer:

- [Vue 3](https://vuejs.org/):  
  Frontend framework til opbygning af brugergrænsefladen.

- [Vite](https://vitejs.dev/): 
  Hurtigt build-værktøj og udviklingsserver til moderne webprojekter.

- [ESLint](https://eslint.org/):  
  Værktøj til at sikre ensartet og fejlfri kode.

- [Font Awesome](https://fontawesome.com/):  
  Ikonbibliotek til brug af ikoner i projektet.

- [Google Fonts](https://fonts.google.com/):  
  Bruges til at importere og anvende en bestemt skrifttype i projektet.

- [Firebase](https://firebase.google.com/):
  Bruges til backend-funktioner som authentication og database.