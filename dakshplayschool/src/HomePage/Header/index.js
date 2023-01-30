import './index.css';

function Header () {
    return (
        < >
        <div id='Header'>
        <div id='logo'>
            <div id='logo-upperPart'>
                Daksh
            </div>
            <div id='logo-lowerPart'>
                <p id='logo-slogan'>a Play School</p>
            </div>
        </div>
        <div id='MiddleStuff'>
            <div>
                <p className='MiddleStuf'>Preschool<br></br>Admission</p>
            </div>
            <div>
                <p className='MiddleStuf'onClick={() => window.open( 'https://goo.gl/maps/M61vzorWwzM9UFts8')}>
                    Locate <br/> Us
                </p>
            </div>
            <div>
                <p className='MiddleStuf'>Call<br></br>Us</p>
            </div>
        </div>
        <div id='social-media-logo'>
            <div id='facebook' className='social-media'>
            <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div id='instagram' className='social-media'>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div id='youtube' className='social-media'>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <div id='whatsapp' className='social-media'>
            <i  class="fa-brands fa-whatsapp"></i>
            </div>
        </div>
        {/* <div className='corner-eclipses'>
        <i class="fa-solid fa-ellipsis"></i>
        </div> */}
        </div>
        </>
    );
}

export default Header ;