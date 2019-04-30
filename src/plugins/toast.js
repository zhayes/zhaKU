import Toast from '../components/toast/toast.vue'

const toast = {
    install(Vue, options){
        Vue.prototype.$ztoast = (message, params={})=>{
            const Constructor = Vue.extend(Toast);
            const toast = new Constructor({
                propsData:{
                    message,
                    ...params
                }
            })
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}

export default toast;