import Button from 'react-bootstrap/Button';
import './style.css';

function moreInfo(){
        console.log('more info');
}

const ProductInfo = ({image,name,info}) => {

        

        return ( 
                <div className="flex items-center justify-around flex-col lg:flex-row">
                        <img src={image} className="size-1/2" alt='watch-img'/>
                        <div className="lg:mr-20 flex flex-col justify-between">
                                <h3 className="text-white mb-16 text-title">{name}</h3>
                                <h6 className="text-white mb-3 text w-96" >{info}</h6>
                                <Button variant="light" onClick={()=>moreInfo()}>MORE</Button>{' '}
                        </div>
                </div>
        );
}
 
export default ProductInfo;