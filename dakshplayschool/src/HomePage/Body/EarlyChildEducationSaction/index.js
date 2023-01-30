import './index.css';
import pic from './Images/Img-1.png';
import pic1 from './Images/Img-2.png';

function Container(){
    return(
        <>
        <div className='mainContainer'>
        <div className='Heading'>
            <h1>Is Early Childhood Education important?</h1>
        </div>
        <div className='flex_col'>
            <div>
            <img id='imagesLo' src={pic}/>
            </div>
            <div>
            <img id='imagesLo' src={pic1}/>
            </div>
        </div>
        </div>

        </>
    );
}

export default Container;