import { Layout, theme } from "antd"
import React, { useEffect, useState } from "react"

const {Content } = Layout

interface IProduct{
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;

}




interface IProducts {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];

}

const [products, setProducts] = useState<IProduct[]>([]);


 const ContentCustom = () =>
 {

        const {
          token: { colorBgContainer, borderRadiusLG },
        } = theme.useToken();


const FetchProducts = () =>{
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => setProducts(data))
            
}

useEffect (()=> {

},[])



    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
    )
 }
 
 export default ContentCustom