import React,{Component} from "react"
import {get,post} from "../../utils/request"
import {connect} from "react-redux"
class Shops extends Component{
    state = {
        result:[],
        id:[]
    }
    render(){
        let {result} = this.state;
        let name = this.props.name;
        return (
        <div>
            <div className="titleName">{name}</div>
            {
                result && result.map((item,index) => <div className="itemBox" key={index}>
                    <div className="left" onClick={this.handleToDetail.bind(this,index)}>
                        <span>{item.goods_name}</span>
                        <span>4G网络</span>
                        <span>￥{item.price}/天</span>
                    </div>
                    <div className="right">

                    </div>
                </div>)
            }
        </div>
     ) 
    }
    componentDidMount(){
        let store_id = this.props.match.params.id;
        post('/store/goods/list',{store_id}).then(res =>{
            this.setState({
                result:res.result,
                id:res.result
            })
        })
    }
    handleToDetail(index){
        let {id} = this.state;
        let goods_id = id[index].goods_id;
        let store_id = this.props.match.params.id;
        get(`/buyer/detail?goods_id=${goods_id}`).then(res =>{
            if(res.code === 1){
                // this.props.history.push('/detail')
                let result = res.result;
                this.props.history.push({
                    pathname:"/detail/"+store_id,
                    query:result
                })
            }
        })
    }
}
export default connect(
    (state) => {
        return {
            name:state.name
        }
    }
)(Shops)