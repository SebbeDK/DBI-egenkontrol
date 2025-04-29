<script setup>

</script>

<template>
<div class="page-container">
  <aside class="sidebar">
    <div class="sidebar__logo">
      <h1>DBI Egenkontrol</h1>
    </div>
    <div class="sidebar__content">
      <button class="sidebar__btn-profile">
        <font-awesome-icon :icon="['fas', 'user']" />
      </button>
      <button class="sidebar__btn-settings">
        <font-awesome-icon :icon="['fas', 'gear']" />
      </button>
      <div class="search">
        <button class="sidebar__search">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <input type="text" placeholder="Søg i skemaer">
      </div>
      <div class="templates">
        <button>Tilgængelige skabeloner</button>
      </div>
      <div class="help">
        <h3>Har du brug for hjælp?</h3>
        <h5>Du kan finde svar på ofte stillede spørgsmål her.</h5>
        <button class="see_more">Se her</button>
      </div>
    </div>
  </aside>
  <div class="content">
    <header>
      <nav class="horizontal-menu">
        <router-link to="/" class="menu-item">Rapporter</router-link>
        <router-link to="/" class="menu-item">Overskredet deadline</router-link>
        <router-link to="/" class="menu-item">Brugere</router-link>
        <router-link to="/" class="menu-item">Grupper</router-link>
        <router-link to="/" class="menu-item">Dokumenter</router-link>
        <router-link to="/" class="menu-item">Objekter</router-link>
        <router-link to="/skemaer" class="menu-item">Skemaer</router-link>
        <router-link to="/" class="menu-item">Planlægning</router-link>
  </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<style scoped lang="css">
.page-container{
  display: flex;
  width:100vw;
}
.content{
  flex:1;
}
.sidebar{
  width: 250px;
  border-right: 3px solid #9dbfb4;
  min-height: 100vh;
}
.sidebar__logo {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  background-color: #9dbfb4;
  color: white;
  font-size:16px;
  padding:0.6rem 0;
  text-align: center;
}

.sidebar__content{
  padding: 1rem;
}

.sidebar__search svg{
 color: white;
 font-size: 20px;
 margin-top: 0.2rem;
}

.search{
 border-radius: 20px;
 background-color: #9dbfb4;
 position: relative;
}

.search button{
  background-color: #257473;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  border: none;
  position: absolute;
}
.search input{
  background: none;
  border: none;
  padding: 0.5rem 0 0.5rem 2.5rem;
  color: white;
  width: 7rem;
}
.search input::placeholder {
  color: white;
  opacity: 0.7;
}
.templates button{
  margin-top: 1rem;
  background-color: #257473;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  display: block;
  padding: 0.6rem;
  width: 100%;
  height: 100%;
}

.help {
border: 1px solid grey;
background-color:#f3f4f3;
border-radius: 30px;
margin-top: 25rem;
box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

h3{
font-family:Arial, Helvetica, sans-serif;
font-weight:medium;
font-size: 22px;
padding: 1rem;
margin-bottom: 3px;
}

h5{
padding: 1rem;
font-family:Arial, Helvetica, sans-serif;
font-weight:lighter;
font-size: 16px;
}

.see_more {
font-size: 15px;
border-radius: 10px;
background-color: #9dbfb4;
color: white;
border: none;
margin: 5px 0px 15px 100px;
height: 1.5rem;
width: 4rem;
text-align: center;
}

.horizontal-menu{
  border-bottom: 3px solid hsl(161, 21%, 68%);
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
}

.horizontal-menu a{
  color: #9dbfb4;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: light;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 26px;
  position: relative;
  transition: color 0.3s ease;
}

.horizontal-menu a.router-link-active {
  color: #257473;
  font-weight: bold;
}

.horizontal-menu a.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 50%;
  height: 3px;
  background-color: #257473;
  transform: translateY(-50%);
}

.horizontal-menu a:hover::after {
  width: 50%;
}

.sidebar__btn-profile, .sidebar__btn-settings {
  background-color: #257473;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: none;
  margin-top: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1.5rem;
}
.sidebar__btn-profile svg{
  color: white;
  font-size: 23px;
  margin-top: 0.2rem;
}

.sidebar__btn-settings svg{
  color: white;
  font-size: 23px;
  margin-top: 0.2rem;
}
</style>
