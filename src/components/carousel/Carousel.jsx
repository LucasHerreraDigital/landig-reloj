import Carousel from 'react-bootstrap/Carousel';
import ProductInfo from '../product/Product';
import watch from '../../assets/images/watch_hamilton.png';

const CarouselProduct = () => {


    return (  
        <Carousel className='h-screen'>
                <Carousel.Item>
                        <ProductInfo image={watch} name="Welog numero 1" info="El reloj Hamilton Jazz Automático es un
                                elegante reloj de pulsera que combina estilo clásico con funcionalidad moderna. Con una caja de acero 
                                inoxidable de alta calidad, es resistente y duradero. Su esfera presenta un diseño limpio y sofisticado, 
                                con marcadores de hora y agujas luminosas que facilitan la lectura en condiciones de poca luz. 
                                La correa de cuero genuino proporciona comodidad y estilo, mientras que el movimiento automático garantiza una precisión confiable.
                                Con su diseño atemporal y su excelente artesanía, el Hamilton Jazz Automático es una opción ideal para cualquier ocasión"/>
                        
                </Carousel.Item>
                <Carousel.Item>
                        <ProductInfo image={watch} name="Relog numero 2" info="El reloj Hamilton Jazz Automático es un
                                elegante reloj de pulsera que combina estilo clásico con funcionalidad moderna. Con una caja de acero 
                                inoxidable de alta calidad, es resistente y duradero. Su esfera presenta un diseño limpio y sofisticado, 
                                con marcadores de hora y agujas luminosas que facilitan la lectura en condiciones de poca luz. 
                                La correa de cuero genuino proporciona comodidad y estilo, mientras que el movimiento automático garantiza una precisión confiable.
                                Con su diseño atemporal y su excelente artesanía, el Hamilton Jazz Automático es una opción ideal para cualquier ocasión"/>
                       
                </Carousel.Item>
                <Carousel.Item>
                        <ProductInfo image={watch} name="Relog numero 3" info="El reloj Hamilton Jazz Automático es un
                                elegante reloj de pulsera que combina estilo clásico con funcionalidad moderna. Con una caja de acero 
                                inoxidable de alta calidad, es resistente y duradero. Su esfera presenta un diseño limpio y sofisticado, 
                                con marcadores de hora y agujas luminosas que facilitan la lectura en condiciones de poca luz. 
                                La correa de cuero genuino proporciona comodidad y estilo, mientras que el movimiento automático garantiza una precisión confiable.
                                Con su diseño atemporal y su excelente artesanía, el Hamilton Jazz Automático es una opción ideal para cualquier ocasión"/>
                        
                </Carousel.Item>
                
    </Carousel>

    );
}
 
export default CarouselProduct;