const forms = [
  {
    name: 'goals',
    heading: 'What are your goals?',
    inputValues: ['safety', 'performance', 'reduce cost'],
  },
  {
    name: 'role',
    heading: 'What\'s your role?',
    inputValues: ['creator', 'platformer', 'architect', 'consumer', 'quality assurance'],
  },
  {
    name: 'tools',
    heading: 'What other tools have you used?',
    inputValues: ['spoon', 'fork', 'chopsticks', 'bowl', 'plate'],
  },
]

export const defaultFormData = {
  goals: undefined,
  role: undefined,
  tools: undefined,
}

export default forms
