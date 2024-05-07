import whatsapp from '../assets/whatsapp.png';

type FullChatModalProps = {
  open: boolean;
  onClose: () => void;
}

export default function FullChatModal({onClose, open}: FullChatModalProps) {
  return (
    <div className={`bg-[#f7f7f5] h-screen fixed z-50 inset-0 overflow-y-auto ${open ? 'block' : 'hidden'}`}>
      <div className="h-full">
        <div className="flex flex-1 bg-[#0d9f16] p-4 justify-between">
          <div className="flex">
            <img src={whatsapp} alt="Whatsapp" className="h-[50px] mr-2" />
            <div className="grid content-center">
              <p className="leading-[12px] text-lg">Whatsapp | Pré-Atendimento</p>
              <p className="text-[15px] mt-1">
                Online Agora
              </p>
            </div>
          </div>
          <div className="border-2 rounded-full">
            <button type="button" onClick={onClose}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}