import {CloseButton} from "../../CloseButton";
import {CheckCircle} from "phosphor-react";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep ( { onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <CheckCircle className="w-10 h-10 p-1 bg-green-500 text-white rounded-md" />
        <span className="text-xl mt-2"> Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors">
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
