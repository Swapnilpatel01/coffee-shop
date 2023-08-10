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

nav .menu-item .sub-menu {

    position:absolute;
    background-color: #fff;
    top: 55px;
    width: 100px;
    margin: 0;
    align-items: left;
    text-align: left;
    border-radius: 0px 0px 16px 16px;
    overflow: hidden;
}

.menu-items{
    
    background-color: #FFF;
    padding: 15px;
    top: 55px;
    width: 100%;
    overflow: hidden;
    z-index: -1;
}

.menu-items:hover{
    background-color: #F1ECE9;
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


.outside{
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

