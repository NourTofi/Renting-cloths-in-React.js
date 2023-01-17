import Nav from './Nav'
import HomeDescription from './HomeDescription';
import SearchBox from './SearchBox';
import Card from './Card';
import Footer from './Footer';
import "./cssfolder/website.css"
import "./cssfolder/mainPage.css"
import "./cssfolder/nav.css"
import "./cssfolder/homeDescription.css"
import "./cssfolder/catergoriesS2.css"
import "./cssfolder/footer.css"
import image from "./cssfolder/background.png"

function a() {
    return (
        <div className='website'>
            <div className='mainPage'>
                <Nav />
                <HomeDescription />
                
            </div>
            <div className="catergoriesS2">
                <h1 className='categoriess'>
                    Categories
                </h1>
                <SearchBox/>
                <div className='row'>
                <Card imag={image} typ={'Taqem'} price={'100$'} city={'Aleppo'} />
                <Card imag={'i'} typ={'pejama'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'pantalon'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'pelosa'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'qames'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'t'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'t'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'t'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'t'} price={'p'} city={'c'} />
                <Card imag={'i'} typ={'t'} price={'p'} city={'c'} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default a;