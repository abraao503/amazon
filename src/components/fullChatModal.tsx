import whatsapp from "../assets/whatsapp.png";
import ReactLoading from "react-loading";

// type Message =
//   | {
//       text: string;
//       showAction: boolean;
//     }
//   | {
//       text: string;
//       type: "bot" | "user";
//     };

// const messages: Message[] = [
//   {
//     text: "Olá, tudo bem?",
//     type: "bot",
//   },
//   {
//     text: "Para te ajudar, preciso de algumas informações rápidas 😊",
//     showAction: true,
//   },
// ];

type FullChatModalProps = {
  open: boolean;
  onClose: () => void;
};

function LoadingMessage() {
  return (
    <div className="flex my-[5px]">
      <div className="mr-[15px]">
        <img src={whatsapp} alt="Whatsapp" className="h-[40px]" />
      </div>
      <div>
        <div className="bg-[#D9D9D9] rounded-tl-[5px] rounded-r-[30px] rounded-bl-[30px] pb-[30px] px-[18px] mt-[20px]">
          <ReactLoading
            type={"bubbles"}
            color={"#0d9f16"}
            height={"10px"}
            width={"40px"}
          />
        </div>
      </div>
    </div>
  );
}

function BotMessage({ message }: { message: string }) {
  return (
    <div className="flex my-[5px]">
      <div className="mr-[15px]">
        <img src={whatsapp} alt="Whatsapp" className="h-[40px]" />
      </div>
      <div>
        <div className="bg-[#D9D9D9] rounded-tl-[5px] rounded-r-[30px] rounded-bl-[30px] p-[15px] mt-[20px]">
          <p className="text-[15px] p-2 text-[#000000] p-0">{message}</p>
        </div>
      </div>
    </div>
  );
}

function BotMessageWithAction() {
  return (
    <div className="flex my-[5px]">
      <div className="mr-[15px]">
        <img src={whatsapp} alt="Whatsapp" className="h-[40px]" />
      </div>
      <div>
        <div className="bg-[#D9D9D9] rounded-tl-[5px] rounded-r-[30px] rounded-bl-[30px] p-[15px] mt-[20px] max-w-xl">
          <p className="text-[15px] p-2 text-[#000000] p-0">
            Para te ajudar, preciso de algumas informações rápidas 😊
          </p>
          <button className="flex items-center bg-[#0d9f16] rounded-[18px] mt-4 mb-3">
            <span>Claro, vamos lá</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ml-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </button>
          <div>
            <small className="text-[#000000] flex flex-col text-[11px]">
              Clicando acima você aceita nossas
              <a
                href="https://leadstaker.com/politica-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#0C5E6B]"
              >
                {" "}
                Políticas de privacidade{" "}
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FullChatModal({ onClose, open }: FullChatModalProps) {
  return (
    <div
      className={`bg-[#f7f7f5] h-screen fixed z-50 inset-0 overflow-y-auto ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="h-full">
        <div className="flex flex-1 bg-[#0d9f16] p-4 justify-between">
          <div className="flex">
            <img src={whatsapp} alt="Whatsapp" className="h-[50px] mr-2" />
            <div className="grid content-center">
              <p className="leading-[12px] text-lg">
                Whatsapp | Pré-Atendimento
              </p>
              <p className="text-[15px] mt-1">Online Agora</p>
            </div>
          </div>
          <div className="border-2 rounded-full">
            <button type="button" onClick={onClose}>
              x
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <BotMessage message="Olá, tudo bem?" />
          <BotMessageWithAction />
          <LoadingMessage />
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full ">
          <input className="h-[50px] rounded-r-[50px] rounded-l-[50px] border-[#0d9f16] border-[3px] w-full" />
        </div>
      </div>
    </div>
  );
}
