import background from "../assets/back_clarie.png";
import backgroundWoman from "../assets/back_clarie_woman.jpg";
import faceBody from "../assets/face_body.png";
import faceBodySerum from "../assets/face_body_serum.png";
import womanSleeping from "../assets/woman_sleeping.png";
import womanSmile from "../assets/woman_smile.png";

export default function Clarie() {
  return (
    <>
      <div className="flex flex-col">
        <div
          className="flex bg-[#F5F5F5] bg-no-repeat bg-cover z-0"
          style={{ backgroundImage: `url(${backgroundWoman})` }}
        >
          <div
            style={{ background: "rgba(0,0,0,0.41)" }}
            className="flex justify-center z-10 flex-1"
          >
            <div className="flex items-center justify-center p-4">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl text-white pb-6 text-center font-sans">
                  Não espere o amanhã para transformar sua pele.
                </h1>
                <div className="w-[579px] max-[950px]:w-full">
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
          className="flex bg-no-repeat bg-cover z-0 flex-col items-center py-6"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="grid w-full px-10 justify-items-center grid-cols-1 lg:grid-cols-2">
            <div className="px-4 grid grid-cols-1 xl:grid-cols-[1fr_200px]">
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
              <div className="flex justify-center">
                <img
                  src={faceBodySerum}
                  alt="faceBody"
                  className="h-[363px] mt-4"
                />
              </div>
            </div>
            <div className="px-4 grid grid-cols-1 mt-4 lg:mt-0 xl:grid-cols-[1fr_200px]">
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
              <div className="flex justify-center">
                <img src={faceBody} alt="faceBody" className="h-[365px] mt-4" />
              </div>
            </div>
          </div>
          <button className="bg-[#25D366] font-mont font-base font-bold w-[268px] h-[50px] rounded-[100px] mt-6">
            QUERO COMPRAR
          </button>
        </div>
        <div
          className="flex bg-no-repeat bg-cover z-0 flex-col items-center"
          style={{ backgroundImage: `url(${womanSleeping})` }}
        >
          <div
            style={{ background: "rgba(0,0,0,0.41)" }}
            className="flex justify-center z-10 flex-1"
          >
            <div className="flex flex-col py-14 px-10 w-screen">
              <div className="flex flex-col">
                <strong className="font-sans text-[28px] mb-8">
                  Aproveite a noite para rejuvenescer com seus benefícios
                  noturnos.
                </strong>
              </div>
              <div className="flex flex-col content-center mt-2">
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Acorde com a pele visivelmente mais jovem, estimulando a
                    síntese de colágeno e elastina.
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Ilumine cada traço seu com um brilho natural que só Clariê
                    pode oferecer.
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Veja uma pele uniforme e renovada dia após dia.
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Antioxidantes poderosos para combater o tempo e desfazer os
                    sinais de envelhecimento.
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Suavize linhas e rugas enquanto sonha.
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <strong className="font-sans text-[28px] mr-[8px]">*</strong>
                  <span className="font-mont text-lg">
                    Não espere o amanhã para transformar sua pele.
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-mont font-bold text-lg">
                    Com Clariê, você tem a ciência e a tecnologia para revelar
                    uma beleza que não conhece idades.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-14 pb-0">
          <div className="flex flex-col">
            <strong className="font-sans text-[28px] mb-8 text-[#000000]">
              Aproveite a noite para rejuvenescer com seus benefícios noturnos.
            </strong>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Ácido Hialurônico:</strong> Um hidratante superpotente
                que preenche e suaviza a pele.
              </span>
            </div>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Alfa-Bisabolol:</strong> O calmante natural que ameniza
                as irritações, revelando uma pele serena.
              </span>
            </div>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Vitamina C:</strong> O iluminador supremo, desvendando
                uma luminosidade vibrante.
              </span>
            </div>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Niacinamida:</strong> Uniformiza o tom e textura da
                pele, banindo manchas e descolorações.
              </span>
            </div>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Alfa Arbutin:</strong> Um clareador de confiança que
                atua na hiperpigmentação sem agredir sua pele.
              </span>
            </div>
            <div className="mb-3">
              <span className="font-mont text-lg text-[#000000]">
                <strong>Bioperolas Francesas J'Adore:</strong> Luxo e
                sofisticação que estimulam a regeneração
              </span>
            </div>
            <div>
              <span className="font-mont text-lg text-[#000000]">
                <strong>Base Bio Serum: </strong> Uma fórmula avançada para
                nutrir e revigorar em todas as camadas.
              </span>
            </div>
          </div>
          <div className="flex px-2 mt-3 lg:mt-0">
            <img
              src={womanSmile}
              alt="woman-smile"
              className="h-[387px] lg:h-[621px]"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#000000] items-center py-8">
          <span className="font-mont text-lg text-center">
            Comece hoje a sua jornada para um amanhecer mais belo e radiante com
            a <strong>Amazônia Fórmula.</strong>
          </span>
          <button className="bg-[#25D366] font-mont font-base font-bold w-[268px] h-[50px] rounded-[100px] mt-6">
            COMPRAR AGORA
          </button>
        </div>
      </div>
    </>
  );
}
