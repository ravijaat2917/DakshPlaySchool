import './index.css';
import pic1 from './Images/img-1.png';
import pic2 from './Images/img-2.png';
import pic3 from './Images/img-3.png';
import pic4 from './Images/img-4.png';

function preSchholOffers(){
    return(
        <>
        <div className='mainContainer'>
        <div className='MainHead'>
            <p id='mainHeading'>Our Pre-School Programs</p>
            <p id='content'>With age-appropriate stimulation, and the right balance of learning and fun, we encourage their curiosity and fuel their creative side.</p>
        </div>

        <div className='flexcontainer'>
        <div className='flexBasis'>
                <div className='upperContent'>
                    <img src={pic1}/>
                </div>
                <div className='lowerContentz'>
                    <h2>PlayGroup</h2>
                    <h4>1.5 to 3 years</h4>
                    <h6>
                    Discovery and exploration, language development, new-age skills, and shaping scientific mindset.
                    </h6>
                </div>
                </div>
                <div className='flexBasis'>
                <div className='upperContent'>
                    <img src={pic2}/>
                </div>
                <div className='lowerContentz'>
                    <h2>Nusery</h2>
                    <h4>2.5 to 4 years</h4>
                    <h6>
                    Enhancing interaction, cultivating creativity and improving imagination through art and music.
                    </h6>
                </div>
                </div>
                <div className='flexBasis'>
                <div className='upperContent'>
                    <img src={pic3}/>
                </div>
                <div className='lowerContentz'>
                    <h2>Juniors</h2>
                    <h4>3.5 to 5 years</h4>
                    <h6>
                    Age-appropriate learning and educational tools suited for individual pace.
                    </h6>
                </div>
                </div>
                <div className='flexBasis'>
                <div className='upperContent'>
                    <img src={pic4}/>
                </div>
                <div className='lowerContentz'>
                    <h2>Senoirs</h2>
                    <h4>4.5 to 6 years</h4>
                    <h6>
                    Developing vocabulary, attention span, reading and writing skills with innovative methods and preparing for primary school.
                    </h6>
                </div>
                </div>
                </div>
        </div>
        </>
    );
}

export default preSchholOffers;