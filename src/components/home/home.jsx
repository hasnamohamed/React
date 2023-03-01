import './home.css';
import image from '../../assets/me.jpg';
function Home() {
    return (
        <div>
            <h1 className='portfolio'>Portfolio</h1>
            <div className='container row d-flex parentdiv'>
                <div className='col-4 pare fst-italic'>
                    <p className='ms-4'>
                        Hello Am Hasnaa Mohamed i'm a Full Stack Engineer, and i create fun, innovative,accessible,
                        and fast websites, i try to leave every bit of code touch more readable , modular, performant and accessible
                        than i found it.
                    </p>
                    <div className='ms-4 '>
                        <p>my skills includs:</p>
                        <p>OOP, React, Data Structure,</p>
                        <p>Html, Bootstrap, Css, Html5,</p>
                        <p>Css3, JS, Es6, PHP,</p>
                        <p>C++, Laravel, Symfony, Docker,</p>
                        <p>Mysql, Nosyql, SQL, Git/Github/Gitlab,</p>
                        <p>Problem Solving, Linux, Restful Apis, Nodejs,</p>
                        <p>Apache, Bash,</p>
                    </div>
                </div>
                <img src={image} alt="" className='col-4 imge' />
            </div>
        </div>
    );
}
export default Home;