<template>
    <div>
        <div>
            <h4>按钮</h4>

            <z-button type="default">按钮</z-button>
            <z-button type="primary">按钮</z-button>
            <z-button type="danger">按钮</z-button>

            <z-button type="default" ghost>按钮</z-button>
            <z-button type="primary" disabled>按钮</z-button>

            <z-button size="small" type="primary">按钮</z-button>
            <z-button size="middle" type="primary">按钮</z-button>
            <z-button size="large" type="primary">按钮</z-button>

            <z-button size="middle" type="primary" @click="click">触发点击</z-button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {Button} from './index';

export default {
    name: 'app',
    components:{
        "z-button": Button
    },
    methods:{
        click(){
            alert('我被点击了')
        }
    }
}
</script>
