import logo from '../assets/logo.png';
import background from '../assets/back.png';
import imageMan from '../assets/man.png';

export default function Compounded() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-1 justify-center p-4">
          <img src={logo} alt="logo" className="" />
        </div>
        <div 
          className="flex bg-[#F5F5F5] bg-no-repeat bg-cover h-[496px] justify-center" 
          style={{backgroundImage: `url(${background})`}}>
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-5xl text-white font-bold pb-2">
                Sua saúde pede confiança.
              </h1>
              <h1 className="text-5xl text-white font-bold">
                Pede Amazônia Fórmula.
              </h1>
              <button 
                className="bg-[#18970c] font-bold text-lg h-[64px] mt-4 text-white p-[14px] w-[294px] rounded-[26px]">
                Faça seu manipulado agora!
              </button>
            </div>
            <div className="flex flex-1 self-end">
              <img src={imageMan} 
                alt="Imagem de um homem com uma caixa de remédio" 
                className="w-[311px] h-[480px]" />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

