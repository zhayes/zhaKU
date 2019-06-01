import Button from './components/button/button.vue';
import Icon from './components/icon/icon.vue';
import ButtonGroup from './components/button/group.vue';
import Input from './components/input/input.vue';
import Tabs,{TabsBody, TabsHeader, TabsItem, TabsPane} from './components/tabs/index.js';
import Cascader from './components/cascader/cascader.vue';
import Cell from './components/cell/cell.vue';
import Picker from './components/picker/picker.vue';
//import Toast from './components/toast/toast.vue';
//import Upload from './components/upload/upload.vue';
import Checkbox from './components/checkbox/checkbox.vue';
import Modal from './components/modal/modal.vue';

import toast from "./plugins/toast.js";

const components = {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Tabs,
    TabsBody, 
    TabsHeader, 
    TabsItem, 
    TabsPane,
    Cascader,
    Cell,
    Picker,
    //Upload,
    Checkbox,
    Modal
}

const install = (Vue, options)=>{

    Object.keys(components).map((componetConstructor)=>{
        const name = components[componetConstructor].name;
        const component = components[componetConstructor];
        Vue.component(name, component);
    })

    Vue.use(toast);

}

export default {
    install,
    ...components
}
