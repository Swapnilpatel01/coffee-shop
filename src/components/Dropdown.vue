<template>

    <div class="menu-item" @click="isOpen = !isOpen">
        <div class="outside">
            <span class="material-symbols-outlined menuicon">Menu</span>
            <p>MENU</p>
        </div>

        <transition name="slide-fade" appear>
            <div class="sub-menu" v-if="isOpen">
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
    top: 55px;
    width: 200px; /* Increased width */
    padding: 15px;
    margin: 0;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* Added shadow */
}

.menu-items {
    transition: all 0.5s ease-out;
    padding: 10px; /* Added padding */
    cursor: pointer; /* Added cursor */
}



/* nav .menu-item .sub-menu {

    position:absolute;
    background-color: #fff;
    top: 0px;
    width: 500px;
    margin: 0;
    align-items: left;
    text-align: left;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
}

.menu-items{
    transition: all 0.5s ease-out;
    background-color: #FFF;
    padding: 15px;
    top: 55px;
    width: 100%;
    
} */

.menu-items::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    left: 50px;
    background-color: black; 
    transition: all 0.3s ease-out;
}


.menu-items:hover{
    background-color: #F1ECE9;
    font-weight: bold;
}

.menu-items:hover::after {
    width: 50%;
    left: 60 px;
    /* align-items: center; */
    /* left: 0; Align to the left */
}


.slide-fade-enter-from,
.slide-fade-leave-to{
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-enter-to{
    opacity: 1;
    transform: translateY(0);
}

.slide-fade-enter-active,
.slide-fade-leave-active{
    transition: all 0.3s ease;
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
    props: ['title', 'items'],
    data () {
        return{
            isOpen: false
        }
    }
}
</script>

