import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
export default function ExpenseModal() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <PlusCircleIcon className='w-16 h-16 text-blue-600 rounded-full' />
        </button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"   
        >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-full space-y-4 border bg-white p-12 rounded-xl">
           <ExpenseForm />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}