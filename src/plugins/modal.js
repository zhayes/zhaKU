import Modal from '../components/modal/modal.vue'

const modal = {
    install(Vue, options){
        Vue.prototype.$zmodal = (params={})=>{
            const Constructor = Vue.extend(Modal);
            const modal = new Constructor({
                propsData:{
                    ...params
                }
            })
            modal.$mount();
            document.body.appendChild(modal.$el);
        }
    }
}

export default modal;