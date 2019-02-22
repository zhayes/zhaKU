<template>
    <div style="margin: 30px">
        <h3>zhaUI组件库（渣库）（基于Vue2.x.x）</h3>
        <div>
            <h4>按钮</h4>

            <p>
                <z-button type="default">default按钮</z-button>
                <z-button type="primary">primary按钮</z-button>
                <z-button type="danger">danger按钮</z-button>
                <z-button type="default" ghost>dashed按钮</z-button>
                <z-button type="primary" ghost>primary dashed按钮</z-button>
                <z-button type="danger" ghost>danger dashed按钮</z-button>
                <z-button type="primary" disabled>禁止点击</z-button>
            </p>

            
            <p>
                <z-button loading>loading按钮</z-button>
                <z-button type="primary" loading>loading按钮</z-button>
                <z-button type="danger" loading>loading按钮</z-button>
                <z-button size="middle" type="primary" @click="click" :loading="loading">触发点击</z-button>
            </p>
            
            <p>
                <z-button size="small" type="primary">small按钮</z-button>
                <z-button size="middle" type="primary">middle按钮</z-button>
                <z-button size="large" type="primary">large按钮</z-button>
            </p>

            <p>
                <z-button-group>
                    <z-button type="default">按钮1</z-button>
                    <z-button type="primary">按钮2</z-button>
                    <z-button type="primary">按钮3</z-button>
                    <z-button type="danger">按钮4</z-button>
                </z-button-group>
            </p>

            <p>
                <z-button-group>
                    <z-button type="default">按钮1</z-button>
                    <z-button type="primary">按钮2</z-button>
                </z-button-group>
            </p>
        </div>

        <div>
            <h4>图标（基于手机淘宝图标库）</h4>
            <p style="font-size: 40px">
                <z-icon name="my" />
                <z-icon name="settings_light" />
                <z-icon name="round_location_fill" />
                <z-icon name="comment" />
            </p>
        </div>

        <div>
            <h4>Input组件</h4>
            <p>
                <z-input type="text" size="small"/>
                <z-input type="text" size="middle"/>
                <z-input type="text" size="large"/>
            </p>
            <p>
                <z-input type="text" disabled value="disabled输入框"/>
                <z-input type="text" readOnly value="只读输入框"/>
            </p>
            <p>
                <z-input type="text" v-model="inputVal" />
                <z-button type="primary" @click="inputVal=inputVal+1">+1</z-button>
                {{inputVal}}
            </p>
            <p>
                <z-input type="text" iconName="search"/>
                <z-input type="text" iconName="search" iconPosition="after"/>
            </p>
        </div>

        <div>
            <h4>Toast组件</h4>
            <p>
                <z-button @click="toastTop">触发 top toast</z-button>
                <z-button @click="toastBottom">触发 bottom toast</z-button>
                <z-button @click="toastLayoutColumn">触发上下布局toast</z-button>
            </p>
        </div>

        <div>
            <h4>Tabs组件</h4>
            <p>
                <z-button @click="changeSelect">动态改变</z-button>
                <z-tabs :selected="selected" @update:selected="selectedHandle" >
                    <z-tabs-header>
                        <z-tabs-item name="tab1">tab 1</z-tabs-item>
                        <z-tabs-item name="tab2">tab 2</z-tabs-item>
                        <z-tabs-item name="tab3">tab 3</z-tabs-item>
                    </z-tabs-header>
                    <z-tabs-body>
                        <z-tabs-pane name="tab1">tab1 content</z-tabs-pane>
                        <z-tabs-pane name="tab2">tab2 content</z-tabs-pane>
                        <z-tabs-pane name="tab3">tab3 content</z-tabs-pane>
                    </z-tabs-body>
                </z-tabs>
            </p>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {
    Button, 
    ButtonGroup, 
    Icon, 
    Input,
    Tabs,
    TabsBody, 
    TabsHeader, 
    TabsItem, 
    TabsPane
} from './index';

import {toast} from './plugins/toast';

Vue.use(toast);

export default {
    name: 'app',
    data(){
        return{
            inputVal: '双向数据绑定',
            loading: false,
            selected: 'tab1'
        }
    },
    components:{
        "z-button": Button,
        "z-button-group": ButtonGroup,
        "z-icon": Icon,
        "z-input": Input,
        "z-tabs": Tabs,
        "z-tabs-body": TabsBody, 
        "z-tabs-header": TabsHeader, 
        "z-tabs-item": TabsItem, 
        "z-tabs-pane": TabsPane
    },
    methods:{
        click(){
            this.loading = true;
            setTimeout(()=>{
                this.loading = false
            }, 2000)
        },
        toastTop(){
            this.$ztoast('hi, zhaUI! 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示',{
                closeButtonText: '知道了',
                position: 'top'
            })
        },
        toastBottom(){
            this.$ztoast('hi, zhaUI! 我在下面展示',{
                closeButtonText: '知道了',
                position: 'bottom'
            })
        },
        toastLayoutColumn(){
            this.$ztoast('hi, zhaUI! 我是上下布局',{
                closeButtonText: '知道了',
                layout: 'column'
            })
        },
        selectedHandle(name){
            this.selected = name;
        },
        changeSelect(){
            this.selected = 'tab3';
        }
    }
}
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6,p{
    margin-bottom: 1em;
}
</style>

