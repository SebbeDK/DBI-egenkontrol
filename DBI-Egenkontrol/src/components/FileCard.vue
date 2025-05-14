<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  title: String,
  date: String,
});

const emit = defineEmits(['edit', 'delete']);

const menuOpen = ref(false);

function toggleMenu(e) {
  e.stopPropagation();
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function handleEdit() {
  emit('edit');
  closeMenu();
}

function handleDelete() {
  emit('delete');
  closeMenu();
}

// Close menu when clicking outside
function onClickOutside(event) {
  if (!event.target.closest('.file-card')) {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>


<template>
  <div class="file-card">
    <div class="file-card-icon">
      <font-awesome-icon :icon="['far', 'file']" />
    </div>
    <button class="menu-icon" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </button>
    <div
      v-if="menuOpen"
      class="dropdown-menu"
      @click.stop
    >
      <ul class="dropdown-list">
        <li>
          <button @click="handleMove" class="dropdown-btn">Flyt</button>
        </li>
        <li>
          <button @click="handleCopy" class="dropdown-btn">Kopier</button>
        </li>
        <li>
          <button @click="handleDelete" class="dropdown-btn">Slet</button>
        </li>
      </ul>
    </div>
    <h3>{{ title }}</h3>
    <div class="file-card__date">
      <font-awesome-icon :icon="['fas', 'calendar-days']" />
      <span> Gemt den: <br />{{ date }}</span>
    </div>
  </div>
</template>


<style scoped>
.file-card {
  background: #9dbfb4;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: inset 0px 2px 4px rgba(101, 101, 101, 0.2);
  height: 10rem;
  width: 9rem;
  position: relative;
  color: white;
  font-family: "League Spartan";
}

.file-card-icon {
  position: absolute;
  left: 20px;
}

.menu-icon {
  position: absolute;
  right: 15px;
  border: none;
  background-color: #9dbfb4;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;
}

.menu-icon:hover {
  color: #e0e0e0;
}

.dropdown-menu {
  position: absolute;
  top: 35px;
  right: -10px;
  background: #72998f;
  color: #f0f0f0;
  border: none;
  min-width: 130px;
  z-index: 11;
  border-radius: 4px;
}

.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;

}

.dropdown-btn {
  width: 100%;
  text-align: center;
  padding: 20px 25px;
  border-bottom: 1px solid #f0f0f0;
  border-left: none;
  border-right: none;
  border-top:none;
  background: none;
  cursor: pointer;
  font-family: "League Spartan";
  font-size: 19px;
  color: #e0e0e0;
}

.dropdown-list li:last-of-type .dropdown-btn{
  border: none;
}

.dropdown-btn:hover {
  background: #9dbfb4;
}

h3 {
  color: white;
  margin-top: 2.5rem;
  font-weight: lighter;
}

.file-card__date {
  position: absolute;
  bottom: 15px;
}

.file-card__date svg {
  margin-top: 3.5rem;
  font-size: 13px;
}

.file-card__date span {
  margin-top: 3.5rem;
  font-size: 13px;
}
</style>


