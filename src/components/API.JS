import "./Display.css";
import style from "./Display.module.css";
import {useEffect,useState} from 'react';
import {Table} from 'react-bootstrap';

function APIS(){

    let [products,setProducts]=useState();
    let imgStyle={width:"100px",height:"100px"};
   
    function funPage(event){
        var pgno=event.target.textContent;
        console.log(pgno);
        if(pgno==1){
            getProducts(10,0);
        }
        else if(pgno==2){
            getProducts(10,10);
        }
        else if(pgno==3){
            getProducts(10,20);
        }
        else{
            getProducts(10,0);
        }
    }
    async function getProducts(lm,sk){
        var url="https://dummyjson.com/products?limit="+lm+"&skip="+sk+"&select=id,title,price,thumbnail&quot;;
        var response=await fetch(url);
        var result=await response.json();
        //console.log(result.products[0].id);
        setProducts(result.products);
    }
    useEffect(()=>{
        getProducts(10,0);
    },[])
    return(<>
        <h2>All Products</h2>
        <Table variant="success" className="table-hover bordered">
        <thead>
        <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Price</td>
        <td>Img</td>
        </tr>
        </thead>
        <tbody>
        {
            products.map((x)=>{
                return <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.price}></td>
                <td><img src={x.thumbnail} style={imgStyle}/></td>
                </tr>
            })
        }

        </tbody>
        </Table>
        <ul onClick={(event)=>{event.preventDefault();funPage(event)}}>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        </ul>
        </>)
}
export default APIS;