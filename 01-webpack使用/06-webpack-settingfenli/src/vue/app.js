export default  {
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
    </div>
    `,
    data(){
        return {
            message: 'hello',
            name: 'lyd'
        }
    },
    methods:{
        btnClick(){
            console.log('点击了按钮')
        }
    }
}