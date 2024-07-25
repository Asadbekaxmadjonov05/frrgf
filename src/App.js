import Header from './components/Header/Header'
import HeaderNav from "./components/HeaderNav/HeaderNav"
import HeaderBtn from "./components/HeaderBtn/HeaderBtn"
import HeaderHot from "./components/HeaderHot/HeaderHot"
import HeaderFood from "./components/HeaderFood/HeaderFood"
import HeaderBtns from "./components/HeaderBtns/HeaderBtns"
import Main from "./components/Main/Main"
import MainList from "./components/MainList/MainList"
import MainBtn from "./components/MainBtn/MainBtn"
import MainSection from "./components/MainSection/MainSection"

// images start
import HeaderBgimg from "./assets/images/headerbg-img.png" 
import HeaderFoodImg from "./assets/images/HeaderFood-img.png" 
// images finesh



import './App.css';
function App() {
  return (
   <>
   <header className='ralative h-screen'>
    <img src={HeaderBgimg} className='absolute top-0 h-screen -z-10 opacity-5 w-screen' alt='bg-img' />
    <div className='container'>
      <div className='relative'>
      <div  className='flex items-center justify-between mx-auto py-[32px] pl-[116px] pr-[130px]'>
   <Header/>
   <div className="relative">
      <div className="relative pl-[185px]" >
        <HeaderHot />
      </div>
      <div className="relative z-10">
        <HeaderNav />
      </div>
    </div>
    <HeaderBtn/>
      </div>
      </div>
      <div className='flex items-center gap-[147px] pl-[116px] pt-[86px]'>
        <div>
          <HeaderFood/>
          <HeaderBtns/>
        </div>
        <div>
        <img src={HeaderFoodImg} className='absolute top-[50px]  ' />
        </div>
      </div>
    </div>
   </header>
   <main>
    <div className='container'>
      <div className='pl-[116px] pt-[64px]'>
      <Main/>
      <MainList/>
      <MainBtn/>
      </div>
      <MainSection/>
    </div>
   </main>
   </>
  );
}

export default App;
