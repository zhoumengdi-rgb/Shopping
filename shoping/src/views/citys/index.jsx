import React,{Component} from "react"
import Header from "../../components/header"
import Foot from "../../components/foot"
import CityItem from "../../components/city-item"
import {get,post} from "../../utils/request"
export default class Citys extends Component{
    state = {
        result:[]
    }
    render(){
        let {result} = this.state;
        return (
        <div className="box">
            <Header></Header>
            <div className="cent">
                {
                    result && result.map((item,index) => <CityItem key={index} id={item.store_id} cityname={item.store_name}></CityItem>)
                }
            </div>
            <Foot></Foot>
        </div>
     ) 
    }
    componentDidMount(){
        get('/buyer/storelist').then(res =>{
            this.setState({
                result:res.result
            })
        })
    }
}