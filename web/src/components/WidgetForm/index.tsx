import {useState} from "react";
import { CloseButton } from '../CloseButton'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import {FeedbackTypeStep} from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OUTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null> (null)

  return (
    <div className="dark:bg-zinc-900 bg-zinc-200 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6"> Deixe seu feedback</span>
        <CloseButton />
      </header>

      {
        !feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <></>
        )
      }

      <footer className="text-xs dark:text-neutral-400 text-gray-800">
        Feito com ♥ pela <a className="underline underline-offset-2" href="src/components/WidgetForm/WidgetForm#">Rocketseat</a>
      </footer>
    </div>
  )
}