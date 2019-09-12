import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
class CityItem extends Component{
    state = {
        
    }
    render(){
        let goods_id = this.props.id;
        return <div className="cityitems" onClick={this.handleToShop.bind(this,goods_id,this.props.cityname)}>
                    {this.props.cityname}
               </div>
    }
    handleToShop(goods_id,name){
        this.props.history.push(`/shops/${goods_id}`)
        this.props.onDispatch(name)
    }
}
    const mapStateToProps = (state) => {
        return {

        }
    }
    const mapDispatchToProps = (dispatch) =>{
        return {
            onDispatch(name){
                dispatch({type:"ITEM_NAME",name})
            }
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CityItem))
