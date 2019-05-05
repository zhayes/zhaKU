import Vue from 'vue';
import Modal from './modal.vue';

const ModalConstructor = Vue.extend(Modal);

const createModalInstance = (propsParams={})=>{
    const modal = new ModalConstructor({
        propsData:{
            ...propsParams
        }
    })
    modal.$mount();
    document.body.appendChild(modal.$el);
}

ModalConstructor.alert = (propsData={})=>{
    createModalInstance({
        type: "alert",
        visible: true,
        ...propsData,
        isStatic: true
    });
}

ModalConstructor.confirm = (propsData={})=>{
    createModalInstance({
        type: "confirm",
        visible: true,
        ...propsData,
        isStatic: true
    });
}

ModalConstructor.prompt = (propsData)=>{
    createModalInstance({
        type: "prompt",
        visible: true,
        ...propsData,
        isStatic: true
    });
}


export default ModalConstructor;