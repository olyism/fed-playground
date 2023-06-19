import { SwitchType } from "@/components/SwitchBase"

const forms = [
  {
    name: 'goals',
    type: SwitchType.Checkbox,
    heading: 'What are your goals?',
    inputValues: ['safety', 'performance', 'reduce cost'],
  },
  {
    name: 'role',
    type: SwitchType.Radio,
    heading: 'What\'s your role?',
    inputValues: ['creator', 'platformer', 'architect', 'consumer', 'quality assurance'],
  },
  {
    name: 'tools',
    type: SwitchType.Checkbox,
    heading: 'What other tools have you used?',
    inputValues: ['spoon', 'fork', 'chopsticks', 'bowl', 'plate'],
  },
]

export const defaultFormData = {
  goals: [],
  role: undefined,
  tools: [],
}

export default forms
