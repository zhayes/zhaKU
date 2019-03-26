<template>
    <label class="z-checkbox-swrap">
        <input class="z-checkbox-input" type="checkbox" />
        <span class="z-checkout-box" :data-checkded="checked" @click="checkHandle"></span>
    </label>
</template>
<script>
export default {
    data(){
        return {
            checked: false
        }
    },
    methods:{
        checkHandle(){
            this.checked = !this.checked;
        }
    }
}
</script>
<style lang="scss" scoped>
$z-checkbox-size: 20px;
$z-checkbox-color: #1a73e8;

.z-checkbox-swrap{
    .z-checkbox-input{
        display: none;
    }
    .z-checkout-box{
        position: relative;
        display: inline-block;
        height: $z-checkbox-size;
        width: $z-checkbox-size;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #aaa;
        cursor: pointer;
        transition: .4s;

        &:after{
            position: absolute;
            content: '';
            width: 10px;
            height: 2px;
            background-color: #ffffff;
            top: 9px;
            right: 3px;
            transform: rotate(-45deg) scale(0);
        }

        &:before{
            position: absolute;
            content: '';
            width: 6px;
            height: 2px;
            background-color: #ffffff;
            top: 11px;
            left: 4px;
            transform: rotate(45deg) scale(0);
        }

        &[data-checkded=true]{
             background-color: $z-checkbox-color;

             &:after{
                 transform: rotate(-45deg) scale(1);
             }
             &:before{
                 transform: rotate(45deg) scale(1);
             }
        }
    }

}

</style>
