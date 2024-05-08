import logo from "../assets/logo.png";
import background from "../assets/back.png";
import imageMan from "../assets/man.png";
import delivery from "../assets/delivery.png";
import herbal from "../assets/herbal.png";
import location from "../assets/location.png";
import medicine from "../assets/medicine.png";
import rate from "../assets/rate.png";
import skincare from "../assets/skincare.png";
import leaf from "../assets/leaf.png";

// leadstaker config
declare global {
  interface Window {
    LTK_DATA: any; // eslint-disable-line
  }
}

(function (l, d, s, t, k) {
  fetch(t + "?client=" + k, {
    headers: { href: l.location.href, p: l.performance.now().toString() },
  }).then(function (o) {
    o.json().then(function (o) {
      console.log(o);
      l.LTK_DATA = o;
      const c = d.createElement(s);
      d.body.appendChild(((c.innerHTML = o.js), c));
    });
  });
})(
  window,
  document,
  "script",
  "https://api.leadstaker.com/chats",
  "663ba7ef3644a70024d469fd"
);
// end leadstaker config

export default function Compounded() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-1 justify-center p-4">
          <img src={logo} alt="logo" className="" />
        </div>
        <div
          className="flex bg-[#F5F5F5] bg-no-repeat bg-cover h-[496px] z-0"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div
            style={{ background: "rgba(18,40,15,0.74)" }}
            className="flex justify-center z-10 flex-1"
          >
            <div className="flex items-center">
              <div className="flex flex-col max-[950px]:items-center">
                <h1 className="text-5xl text-white font-bold pb-2 max-[950px]:text-center">
                  Sua saúde pede confiança.
                </h1>
                <h1 className="text-5xl text-white font-bold max-[950px]:text-center">
                  Pede Amazônia Fórmula.
                </h1>
                <button className="sell-button-chat bg-[#18970c] font-bold text-lg h-[64px] mt-4 text-white p-[14px] w-[294px] rounded-[26px] max-[950px]:mt-8">
                  Faça seu manipulado agora!
                </button>
              </div>
              <div className="flex flex-1 self-end max-[950px]:hidden">
                <img src={imageMan} alt="homem" className="h-[480px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 border-b border-[#f3f3f3] max-[950px]:border-none py-2">
          <div className="flex flex-col">
            <div className="grid grid-cols-3 w-[900px] max-[950px]:grid-cols-1 max-[950px]:justify-items-center max-[950px]:gap-y-10 max-[950px]:w-full">
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={skincare}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Escolha pela eficácia
                </h3>
                <p className="text-center text-gray-650">
                  Insumos de fabricantes com melhores práticas e certificação de
                  mercados internacionais.
                </p>
              </div>
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={medicine}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Use com confiança
                </h3>
                <p className="text-center text-gray-650">
                  Profissionais competentes trabalhando em estrutura de ponta.
                </p>
              </div>
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={delivery}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Seu estoque sempre em dia
                </h3>
                <p className="text-center text-gray-650">
                  Entrega em toda a cidade, com opção de entrega ou retirada em
                  loja.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 justify-center my-6">
          <div className="flex flex-col">
            <div className="grid grid-cols-3 w-[900px] max-[950px]:grid-cols-1 max-[950px]:justify-items-center max-[950px]:gap-y-10 max-[950px]:w-full">
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={location}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Em toda Manaus
                </h3>
                <p className="text-center text-gray-650">
                  Receba em sua casa ou em uma das nossas 11 lojas em Manaus.
                </p>
              </div>
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={herbal}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Mais que medicamentos
                </h3>
                <p className="text-center text-gray-650">
                  Além de manipulados, compre vitaminas, homeopáticos ou
                  florais.
                </p>
              </div>
              <div className="flex flex-col items-center w-[280px] transform transition duration-500 hover:scale-110">
                <img
                  src={rate}
                  alt="Imagem de produtos de skincare"
                  className="mb-3"
                />
                <h3 className="text-2xl font-bold text-green-500 text-[21px]">
                  Fique tranquilo
                </h3>
                <p className="text-center text-gray-650">
                  São 20 anos de dedicação em excelência e qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "rgba(52,99,59,0.95)",
            backgroundImage: `url(${leaf})`,
          }}
          className="z-0"
        >
          <div
            style={{ background: "rgba(52,99,59,0.95)" }}
            className="z-10 py-20"
          >
            <h1 className="text-4xl text-white font-bold text-center mb-8">
              Como funciona o Amazônia <br />
              Fórmula Express?
            </h1>
            <div className="flex justify-center">
              <div className="border-b-[5px] w-[54px] rounded-[3px] mb-6"></div>
            </div>
            <div className="flex justify-center">
              <p className="text-lg text-center w-[550px]">
                Visando sua comodidade e conforto a Amazônia Fórmula oferece um
                serviço de Entrega em Domicílio. O medicamento chega no local de
                sua preferência, com toda a segurança e qualidade.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="sell-button-chat bg-[#18970c] font-bold text-xl h-[64px] mt-3 text-white p-[14px] w-[314px] rounded-[5px]">
                Faça seu manipulado agora!
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center p-4">
          <img src={logo} alt="logo" className="" />
        </div>
      </div>
    </>
  );
}
