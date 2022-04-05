<template>
    <div class="relative m-4 group">
        <img :src="src" :alt="src">
        <div class="w-full h-16 flex items-center absolute bottom-0 group-hover:bg-gradient-to-t group-hover:from-[#242424] ease-in-out duration-500 delay-75">      
            <CardItems :user="user" :userSrc="userSrc"/>
        </div>
    </div>
</template>

<script>
import CardItems from './CardItems'
export default {
    name: 'Card',
    components: {
        CardItems,
    },
    props: {
        src: String,
        user: String,
        userSrc: String
    }
}
</script>