import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello Man</Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 flex items-center text-white group dark:text-black">
        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transiton-all duration-500 ease-linear">
        <span className="pl-2"/>
        Feedback
      </span>
      </Popover.Button>
    </Popover>
  )
}
