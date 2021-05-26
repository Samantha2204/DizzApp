export interface InstructionsListItem {
  content: string[];
  layout: string;
}

export interface InstructionsProps {
  index: number;
  instructions: InstructionsListItem[];
}

export const getScreenType = (navigationType: string, screenDetails: InstructionsListItem[], indexNumber: number) => {
  const details = screenDetails[indexNumber];
  const { layout } = details;
  switch (layout) {
    case 'instruction_screen':
      return 'Instruction';
    case 'nystagmus_screen':
      return 'Nystagmus';
    case 'selection_screen':
      return 'Selection';
    case 'timer_screen':
      return 'Timer';
    case 'two_nystagmus_screen':
      return 'TwoNystagmus';
    case 'result_screen':
      return 'Result';
    case 'treatment_direction_screen':
      return 'TreatmentDirection';
    default:
      console.error(`Invalid screen: ${layout}`);
  }
};