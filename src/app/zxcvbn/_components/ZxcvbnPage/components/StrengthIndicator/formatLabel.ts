import type { Score } from '../../../ZxcvbnPage'

enum Strength {
  Weak = 'Weak',
  Ok = 'Ok',
  Good = 'Good',
  Great = 'Great',
  Excellent = 'Excellent',
}

const formatLabel = (score: Score): Strength | null => {
  switch (score) {
    case 0:
      return Strength.Weak
    case 1:
      return Strength.Ok
    case 2:
      return Strength.Good
    case 3:
      return Strength.Great
    case 4:
      return Strength.Excellent
    default:
      return null
  }
}

export default formatLabel
