<template>

    <div class="menu-item" @click="$emit('toggleMenu')">
        <div class="outside">
            <span class="material-symbols-outlined menuicon">{{ isOpen ? 'close' : 'Menu' }}</span>
            <p>{{ isOpen ? 'CLOSE' : 'MENU' }}</p>
        </div>

        <transition name="slide-fade" appear>
            <div class="sub-menu" v-show="isOpen"> <!-- Change v-if to v-show -->
                <div v-for="(item, i) in items" :key="i" class="menu-items">
                    <a :href="item.link">
                        <div>{{ item.title }}</div>
                    </a>
                </div>
            </div>
        </transition>
    </div>

</template>

<style>
.menuicon{
    cursor: pointer;
}

.sub-menu {
    position: absolute;
    background-color: #fff;
    top: 0;
    left: 0; 
    height: 250px;
    width: 300px;
    height: screen;
    padding: 15px;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    display: flex; /* Add flex display */
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    
}

.menu-items {
    transition: all 0.5s ease-out;
    padding: 10px;
    cursor: pointer;
    height: 25px;
    text-align: center; /* Center text within each item */
    width: 100%; /* Full width of the container */
}


 
.menu-items::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    left: 0;
    margin-left: 5px;
    background-color: black; 
    transition: all 0.3s ease-out;
}


.menu-items:hover{
    background-color: #F1ECE9;
    font-weight: bold;
    
}

.menu-items:hover::after {
      width: 95%;
      
} 


.outside {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    z-index: 1;
}

</style>

<script>
export default{
    name: 'DropDown',
    props: ['title', 'items', 'isOpen']
}
</script>

