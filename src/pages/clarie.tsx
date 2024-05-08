import logo from "../assets/logo.png";
import background from "../assets/back_clarie.png";
import clarie from "../assets/clarie.png";
import faceBody from "../assets/face_body.png";
import faceBodySerum from "../assets/face_body_serum.png";

export default function Clarie() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex bg-[#F5F5F5] bg-no-repeat bg-cover h-[496px] z-0"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div
            style={{ background: "rgba(18,40,15,0.74)" }}
            className="flex justify-center z-10 flex-1"
          >
            <div className="flex items-center justify-center">
              <div className="flex flex-col max-[950px]:items-center w-[884px] items-center">
                <h1 className="text-7xl text-white pb-6 text-center font-sans">
                  Não espere o amanhã para transformar sua pele.
                </h1>
                <div className="w-[579px]">
                  <p className="font-mont text-center text-lg	">
                    Clariê é o segredo da Amazônia Fórmula para um Brilho
                    Radiante!
                  </p>
                </div>
                <button className="bg-[#25D366] font-mont font-base font-bold w-[268px] h-[50px] rounded-[100px] mt-4">
                  QUERO MUITO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex bg-no-repeat bg-cover h-[586px] z-0 flex-col items-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid grid-cols-2 w-full px-10 pt-8">
            <div className="p-4 grid grid-cols-[1fr_200px]">
              <div className="flex flex-col">
                <div className="flex flex-col pl-[21px]">
                  <strong className="text-[#000000] font-sans text-[28px] mb-3">
                    Clariê Sérum Clareador
                  </strong>
                  <strong className="text-[#000000] font-mont text-lg">
                    Benefícios:
                  </strong>
                </div>
                <div className="flex flex-col content-center mt-2">
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Aumento da síntese de colágeno e elastina;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Aumenta a luminosidade;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Uniformiza o tom da pele;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Estimula a Renovação Celular;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      É antioxidante;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Previne o Envelhecimento;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Suaviza linhas de expressão e rugas.
                    </span>
                  </div>
                </div>
              </div>
              <img
                src={faceBodySerum}
                alt="faceBody"
                className="h-[363px] ml-[-20px] mt-4"
              />
            </div>
            <div className="p-4 grid grid-cols-[1fr_250px]">
              <div className="flex flex-col">
                <div className="flex flex-col pl-[21px]">
                  <strong className="text-[#000000] font-sans text-[28px] mb-3">
                    Clariê Axilas e Virilhas
                  </strong>
                  <strong className="text-[#000000] font-mont text-lg">
                    Benefícios:
                  </strong>
                </div>
                <div className="flex flex-col content-center mt-2">
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Remoção das indesejáveis manchas;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Trata a inflamação da pele;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Hidratação e maciez para a pele;
                    </span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-[#000000] font-sans text-[28px] mr-[8px]">
                      *
                    </strong>
                    <span className="text-[#000000] font-mont text-lg">
                      Promove a cicatrização.
                    </span>
                  </div>
                </div>
              </div>
              <img
                src={faceBody}
                alt="faceBody"
                className="h-[365px] ml-[-20px] mt-4"
              />
            </div>
          </div>
          <button className="bg-[#25D366] font-mont font-base font-bold w-[268px] h-[50px] rounded-[100px] mt-6">
            QUERO COMPRAR
          </button>
        </div>
        <div
          style={{
            background: "rgba(52,99,59,0.95)",
            backgroundImage: `url(${clarie})`,
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
