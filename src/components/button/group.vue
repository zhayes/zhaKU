<template>
    <div class="z-btn-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.z-btn-group{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .z-btn{
        border-right-width: 0 
    }

    .z-btn:not(:first-of-type):not(:last-of-type){
        border-radius: 0;
    }
    
    .z-btn:first-child{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .z-btn:last-child{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-right-width: 1px;
    }
}
</style>
