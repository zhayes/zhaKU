<template>
    <div>
        <h4>Input组件</h4>
        <p>
            <z-input type="text" size="small"/>
            <z-input type="text" size="middle"/>
            <z-input type="text" size="large"/>
        </p>
        <p>
            <z-input disabled placeholder="disabled输入框"></z-input>
            <z-input readonly placeholder="只读输入框"></z-input>
        </p>
        <p>
            <z-input type="text" v-model="inputVal"/>
            {{inputVal}}
        </p>
        <p>
            <z-input type="text" iconName="search"/>
            <z-input type="text" iconName="search" iconPosition="after"/>
        </p>
    </div>
    </div>
</template>
<script>
import Input from "../../../src/components/input/input.vue";
export default {
    name:'InputIntro',
    components: {
        'z-input': Input
    },
    data(){
        return {
            inputVal: '双向数据绑定'
        }
    }
}
</script>
