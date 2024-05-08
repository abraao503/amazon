import { useEffect, useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import ReactLoading from "react-loading";

type Message = {
  text: string;
  showAction: boolean;
  type: "bot" | "user";
};

const allMessages: Message[] = [
  {
    text: "Olá, tudo bem?",
    type: "bot",
    showAction: false,
  },
  {
    text: "Para te ajudar, preciso de algumas informações rápidas 😊",
    showAction: true,
    type: "bot",
  },
  {
    text: "Certo!",
    type: "bot",
    showAction: false,
  },
  {
    text: "Qual é o seu nome e sobrenome?",
    type: "bot",
    showAction: false,
  },
];

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

type BotMessageWithActionProps = {
  clickAction: () => void;
};

function BotMessageWithAction({ clickAction }: BotMessageWithActionProps) {
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
          <button
            className="flex items-center bg-[#0d9f16] rounded-[18px] mt-4 mb-3"
            onClick={clickAction}
          >
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
                fillRule="evenodd"
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
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [firstOpen, setFirstOpen] = useState(false);

  useEffect(() => {
    if (open && !firstOpen) {
      setFirstOpen(true);
      setShowLoadingMessage(true);
    }
  }, [open, firstOpen]);

  useEffect(() => {
    if (!showLoadingMessage) return;

    const timer = setTimeout(() => {
      setShowLoadingMessage(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        allMessages[currentMessageIndex],
      ]);
      setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showLoadingMessage, currentMessageIndex]);

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
            <button
              type="button"
              onClick={onClose}
              className="focus:outline-none"
            >
              x
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          {messages.map((message, index) => {
            if (message.type === "bot") {
              if (message.showAction) {
                return (
                  <BotMessageWithAction
                    key={index}
                    clickAction={() => setShowLoadingMessage(true)}
                  />
                );
              } else {
                return <BotMessage key={index} message={message.text} />;
              }
            }
          })}
          {showLoadingMessage && <LoadingMessage />}
        </div>
        <div className="absolute bottom-0 left-0 p-2 w-full">
          <div className="h-[60px] rounded-r-[60px] rounded-l-[60px] border-[#0d9f16] border-[3px] w-full bg-[#00000] flex items-center pl-[20px] grid gap-x-2 grid-cols-[1fr_60px] bg-white">
            <input className="w-full h-[30px] text-[#000000] p-2 focus:outline-none" />
            <div className="flex justify-end pr-[6px]">
              <button
                type="button"
                className="bg-[#0d9f16] h-[45px] w-[45px] rounded-full flex items-center justify-center"
              >
                <img
                  src="https://cdn.leadstaker.com/icons/arrowheadRight128px.png"
                  alt="Enviar"
                  title="Enviar"
                  className="h-[20px] invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
