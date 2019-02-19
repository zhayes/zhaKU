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

        <div>
            <h4>图标</h4>
            <div style="font-size: 40px">
                <z-icon name="my" />
                <z-icon name="settings_light" />
                <z-icon name="round_location_fill" />
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {Button, Icon} from './index';

export default {
    name: 'app',
    components:{
        "z-button": Button,
        "z-icon": Icon
    },
    methods:{
        click(){
            alert('我被点击了')
        }
    }
}
</script>
